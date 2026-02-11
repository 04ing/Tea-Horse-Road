/*!
 * author: sakitam-fdd <smilefdd@gmail.com> 
 * ol-echarts v4.0.0
 * build-time: 2024-6-25 16:49
 * LICENSE: MIT
 * (c) 2017-2024 https://sakitam-fdd.github.io/ol3Echarts
 * Copyright 2000 - 2024 SuperMap Software Co. Ltd
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('ol'), require('ol/util'), require('ol/proj'), require('echarts')) :
    typeof define === 'function' && define.amd ? define(['ol', 'ol/util', 'ol/proj', 'echarts'], factory) :
    (global = global || self, global.EChartsLayer = factory(global.ol, global.ol.util, global.ol.proj, global.echarts));
}(this, function (ol, util, proj, echarts) { 'use strict';

    function create() {
        return [1, 0, 0, 1, 0, 0];
    }
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = 0;
        out[5] = 0;
        return out;
    }
    function copy(out, m) {
        out[0] = m[0];
        out[1] = m[1];
        out[2] = m[2];
        out[3] = m[3];
        out[4] = m[4];
        out[5] = m[5];
        return out;
    }
    function mul(out, m1, m2) {
        var out0 = m1[0] * m2[0] + m1[2] * m2[1];
        var out1 = m1[1] * m2[0] + m1[3] * m2[1];
        var out2 = m1[0] * m2[2] + m1[2] * m2[3];
        var out3 = m1[1] * m2[2] + m1[3] * m2[3];
        var out4 = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
        var out5 = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
        out[0] = out0;
        out[1] = out1;
        out[2] = out2;
        out[3] = out3;
        out[4] = out4;
        out[5] = out5;
        return out;
    }
    function translate(out, a, v) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4] + v[0];
        out[5] = a[5] + v[1];
        return out;
    }
    function rotate(out, a, rad) {
        var aa = a[0];
        var ac = a[2];
        var atx = a[4];
        var ab = a[1];
        var ad = a[3];
        var aty = a[5];
        var st = Math.sin(rad);
        var ct = Math.cos(rad);
        out[0] = aa * ct + ab * st;
        out[1] = -aa * st + ab * ct;
        out[2] = ac * ct + ad * st;
        out[3] = -ac * st + ct * ad;
        out[4] = ct * atx + st * aty;
        out[5] = ct * aty - st * atx;
        return out;
    }
    function scale(out, a, v) {
        var vx = v[0];
        var vy = v[1];
        out[0] = a[0] * vx;
        out[1] = a[1] * vy;
        out[2] = a[2] * vx;
        out[3] = a[3] * vy;
        out[4] = a[4] * vx;
        out[5] = a[5] * vy;
        return out;
    }
    function invert(out, a) {
        var aa = a[0];
        var ac = a[2];
        var atx = a[4];
        var ab = a[1];
        var ad = a[3];
        var aty = a[5];
        var det = aa * ad - ab * ac;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = ad * det;
        out[1] = -ab * det;
        out[2] = -ac * det;
        out[3] = aa * det;
        out[4] = (ac * aty - ad * atx) * det;
        out[5] = (ab * atx - aa * aty) * det;
        return out;
    }

    function applyTransform(out, v, m) {
        var x = v[0];
        var y = v[1];
        out[0] = m[0] * x + m[2] * y + m[4];
        out[1] = m[1] * x + m[3] * y + m[5];
        return out;
    }

    var mIdentity = identity;
    var EPSILON = 5e-5;
    function isNotAroundZero(val) {
        return val > EPSILON || val < -EPSILON;
    }
    var scaleTmp = [];
    var tmpTransform = [];
    var originTransform = create();
    var abs = Math.abs;
    var Transformable = (function () {
        function Transformable() {
        }
        Transformable.prototype.getLocalTransform = function (m) {
            return Transformable.getLocalTransform(this, m);
        };
        Transformable.prototype.setPosition = function (arr) {
            this.x = arr[0];
            this.y = arr[1];
        };
        Transformable.prototype.setScale = function (arr) {
            this.scaleX = arr[0];
            this.scaleY = arr[1];
        };
        Transformable.prototype.setSkew = function (arr) {
            this.skewX = arr[0];
            this.skewY = arr[1];
        };
        Transformable.prototype.setOrigin = function (arr) {
            this.originX = arr[0];
            this.originY = arr[1];
        };
        Transformable.prototype.needLocalTransform = function () {
            return isNotAroundZero(this.rotation)
                || isNotAroundZero(this.x)
                || isNotAroundZero(this.y)
                || isNotAroundZero(this.scaleX - 1)
                || isNotAroundZero(this.scaleY - 1)
                || isNotAroundZero(this.skewX)
                || isNotAroundZero(this.skewY);
        };
        Transformable.prototype.updateTransform = function () {
            var parentTransform = this.parent && this.parent.transform;
            var needLocalTransform = this.needLocalTransform();
            var m = this.transform;
            if (!(needLocalTransform || parentTransform)) {
                m && mIdentity(m);
                return;
            }
            m = m || create();
            if (needLocalTransform) {
                this.getLocalTransform(m);
            }
            else {
                mIdentity(m);
            }
            if (parentTransform) {
                if (needLocalTransform) {
                    mul(m, parentTransform, m);
                }
                else {
                    copy(m, parentTransform);
                }
            }
            this.transform = m;
            this._resolveGlobalScaleRatio(m);
        };
        Transformable.prototype._resolveGlobalScaleRatio = function (m) {
            var globalScaleRatio = this.globalScaleRatio;
            if (globalScaleRatio != null && globalScaleRatio !== 1) {
                this.getGlobalScale(scaleTmp);
                var relX = scaleTmp[0] < 0 ? -1 : 1;
                var relY = scaleTmp[1] < 0 ? -1 : 1;
                var sx = ((scaleTmp[0] - relX) * globalScaleRatio + relX) / scaleTmp[0] || 0;
                var sy = ((scaleTmp[1] - relY) * globalScaleRatio + relY) / scaleTmp[1] || 0;
                m[0] *= sx;
                m[1] *= sx;
                m[2] *= sy;
                m[3] *= sy;
            }
            this.invTransform = this.invTransform || create();
            invert(this.invTransform, m);
        };
        Transformable.prototype.getComputedTransform = function () {
            var transformNode = this;
            var ancestors = [];
            while (transformNode) {
                ancestors.push(transformNode);
                transformNode = transformNode.parent;
            }
            while (transformNode = ancestors.pop()) {
                transformNode.updateTransform();
            }
            return this.transform;
        };
        Transformable.prototype.setLocalTransform = function (m) {
            if (!m) {
                return;
            }
            var sx = m[0] * m[0] + m[1] * m[1];
            var sy = m[2] * m[2] + m[3] * m[3];
            var rotation = Math.atan2(m[1], m[0]);
            var shearX = Math.PI / 2 + rotation - Math.atan2(m[3], m[2]);
            sy = Math.sqrt(sy) * Math.cos(shearX);
            sx = Math.sqrt(sx);
            this.skewX = shearX;
            this.skewY = 0;
            this.rotation = -rotation;
            this.x = +m[4];
            this.y = +m[5];
            this.scaleX = sx;
            this.scaleY = sy;
            this.originX = 0;
            this.originY = 0;
        };
        Transformable.prototype.decomposeTransform = function () {
            if (!this.transform) {
                return;
            }
            var parent = this.parent;
            var m = this.transform;
            if (parent && parent.transform) {
                mul(tmpTransform, parent.invTransform, m);
                m = tmpTransform;
            }
            var ox = this.originX;
            var oy = this.originY;
            if (ox || oy) {
                originTransform[4] = ox;
                originTransform[5] = oy;
                mul(tmpTransform, m, originTransform);
                tmpTransform[4] -= ox;
                tmpTransform[5] -= oy;
                m = tmpTransform;
            }
            this.setLocalTransform(m);
        };
        Transformable.prototype.getGlobalScale = function (out) {
            var m = this.transform;
            out = out || [];
            if (!m) {
                out[0] = 1;
                out[1] = 1;
                return out;
            }
            out[0] = Math.sqrt(m[0] * m[0] + m[1] * m[1]);
            out[1] = Math.sqrt(m[2] * m[2] + m[3] * m[3]);
            if (m[0] < 0) {
                out[0] = -out[0];
            }
            if (m[3] < 0) {
                out[1] = -out[1];
            }
            return out;
        };
        Transformable.prototype.transformCoordToLocal = function (x, y) {
            var v2 = [x, y];
            var invTransform = this.invTransform;
            if (invTransform) {
                applyTransform(v2, v2, invTransform);
            }
            return v2;
        };
        Transformable.prototype.transformCoordToGlobal = function (x, y) {
            var v2 = [x, y];
            var transform = this.transform;
            if (transform) {
                applyTransform(v2, v2, transform);
            }
            return v2;
        };
        Transformable.prototype.getLineScale = function () {
            var m = this.transform;
            return m && abs(m[0] - 1) > 1e-10 && abs(m[3] - 1) > 1e-10
                ? Math.sqrt(abs(m[0] * m[3] - m[2] * m[1]))
                : 1;
        };
        Transformable.prototype.copyTransform = function (source) {
            copyTransform(this, source);
        };
        Transformable.getLocalTransform = function (target, m) {
            m = m || [];
            var ox = target.originX || 0;
            var oy = target.originY || 0;
            var sx = target.scaleX;
            var sy = target.scaleY;
            var ax = target.anchorX;
            var ay = target.anchorY;
            var rotation = target.rotation || 0;
            var x = target.x;
            var y = target.y;
            var skewX = target.skewX ? Math.tan(target.skewX) : 0;
            var skewY = target.skewY ? Math.tan(-target.skewY) : 0;
            if (ox || oy || ax || ay) {
                var dx = ox + ax;
                var dy = oy + ay;
                m[4] = -dx * sx - skewX * dy * sy;
                m[5] = -dy * sy - skewY * dx * sx;
            }
            else {
                m[4] = m[5] = 0;
            }
            m[0] = sx;
            m[3] = sy;
            m[1] = skewY * sx;
            m[2] = skewX * sy;
            rotation && rotate(m, m, rotation);
            m[4] += ox + x;
            m[5] += oy + y;
            return m;
        };
        Transformable.initDefaultProps = (function () {
            var proto = Transformable.prototype;
            proto.scaleX =
                proto.scaleY =
                    proto.globalScaleRatio = 1;
            proto.x =
                proto.y =
                    proto.originX =
                        proto.originY =
                            proto.skewX =
                                proto.skewY =
                                    proto.rotation =
                                        proto.anchorX =
                                            proto.anchorY = 0;
        })();
        return Transformable;
    }());
    var TRANSFORMABLE_PROPS = [
        'x', 'y', 'originX', 'originY', 'anchorX', 'anchorY', 'rotation', 'scaleX', 'scaleY', 'skewX', 'skewY'
    ];
    function copyTransform(target, source) {
        for (var i = 0; i < TRANSFORMABLE_PROPS.length; i++) {
            var propName = TRANSFORMABLE_PROPS[i];
            target[propName] = source[propName];
        }
    }

    var Point = (function () {
        function Point(x, y) {
            this.x = x || 0;
            this.y = y || 0;
        }
        Point.prototype.copy = function (other) {
            this.x = other.x;
            this.y = other.y;
            return this;
        };
        Point.prototype.clone = function () {
            return new Point(this.x, this.y);
        };
        Point.prototype.set = function (x, y) {
            this.x = x;
            this.y = y;
            return this;
        };
        Point.prototype.equal = function (other) {
            return other.x === this.x && other.y === this.y;
        };
        Point.prototype.add = function (other) {
            this.x += other.x;
            this.y += other.y;
            return this;
        };
        Point.prototype.scale = function (scalar) {
            this.x *= scalar;
            this.y *= scalar;
        };
        Point.prototype.scaleAndAdd = function (other, scalar) {
            this.x += other.x * scalar;
            this.y += other.y * scalar;
        };
        Point.prototype.sub = function (other) {
            this.x -= other.x;
            this.y -= other.y;
            return this;
        };
        Point.prototype.dot = function (other) {
            return this.x * other.x + this.y * other.y;
        };
        Point.prototype.len = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        Point.prototype.lenSquare = function () {
            return this.x * this.x + this.y * this.y;
        };
        Point.prototype.normalize = function () {
            var len = this.len();
            this.x /= len;
            this.y /= len;
            return this;
        };
        Point.prototype.distance = function (other) {
            var dx = this.x - other.x;
            var dy = this.y - other.y;
            return Math.sqrt(dx * dx + dy * dy);
        };
        Point.prototype.distanceSquare = function (other) {
            var dx = this.x - other.x;
            var dy = this.y - other.y;
            return dx * dx + dy * dy;
        };
        Point.prototype.negate = function () {
            this.x = -this.x;
            this.y = -this.y;
            return this;
        };
        Point.prototype.transform = function (m) {
            if (!m) {
                return;
            }
            var x = this.x;
            var y = this.y;
            this.x = m[0] * x + m[2] * y + m[4];
            this.y = m[1] * x + m[3] * y + m[5];
            return this;
        };
        Point.prototype.toArray = function (out) {
            out[0] = this.x;
            out[1] = this.y;
            return out;
        };
        Point.prototype.fromArray = function (input) {
            this.x = input[0];
            this.y = input[1];
        };
        Point.set = function (p, x, y) {
            p.x = x;
            p.y = y;
        };
        Point.copy = function (p, p2) {
            p.x = p2.x;
            p.y = p2.y;
        };
        Point.len = function (p) {
            return Math.sqrt(p.x * p.x + p.y * p.y);
        };
        Point.lenSquare = function (p) {
            return p.x * p.x + p.y * p.y;
        };
        Point.dot = function (p0, p1) {
            return p0.x * p1.x + p0.y * p1.y;
        };
        Point.add = function (out, p0, p1) {
            out.x = p0.x + p1.x;
            out.y = p0.y + p1.y;
        };
        Point.sub = function (out, p0, p1) {
            out.x = p0.x - p1.x;
            out.y = p0.y - p1.y;
        };
        Point.scale = function (out, p0, scalar) {
            out.x = p0.x * scalar;
            out.y = p0.y * scalar;
        };
        Point.scaleAndAdd = function (out, p0, p1, scalar) {
            out.x = p0.x + p1.x * scalar;
            out.y = p0.y + p1.y * scalar;
        };
        Point.lerp = function (out, p0, p1, t) {
            var onet = 1 - t;
            out.x = onet * p0.x + t * p1.x;
            out.y = onet * p0.y + t * p1.y;
        };
        return Point;
    }());

    var mathMin = Math.min;
    var mathMax = Math.max;
    var lt = new Point();
    var rb = new Point();
    var lb = new Point();
    var rt = new Point();
    var minTv = new Point();
    var maxTv = new Point();
    var BoundingRect = (function () {
        function BoundingRect(x, y, width, height) {
            if (width < 0) {
                x = x + width;
                width = -width;
            }
            if (height < 0) {
                y = y + height;
                height = -height;
            }
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        BoundingRect.prototype.union = function (other) {
            var x = mathMin(other.x, this.x);
            var y = mathMin(other.y, this.y);
            if (isFinite(this.x) && isFinite(this.width)) {
                this.width = mathMax(other.x + other.width, this.x + this.width) - x;
            }
            else {
                this.width = other.width;
            }
            if (isFinite(this.y) && isFinite(this.height)) {
                this.height = mathMax(other.y + other.height, this.y + this.height) - y;
            }
            else {
                this.height = other.height;
            }
            this.x = x;
            this.y = y;
        };
        BoundingRect.prototype.applyTransform = function (m) {
            BoundingRect.applyTransform(this, this, m);
        };
        BoundingRect.prototype.calculateTransform = function (b) {
            var a = this;
            var sx = b.width / a.width;
            var sy = b.height / a.height;
            var m = create();
            translate(m, m, [-a.x, -a.y]);
            scale(m, m, [sx, sy]);
            translate(m, m, [b.x, b.y]);
            return m;
        };
        BoundingRect.prototype.intersect = function (b, mtv) {
            if (!b) {
                return false;
            }
            if (!(b instanceof BoundingRect)) {
                b = BoundingRect.create(b);
            }
            var a = this;
            var ax0 = a.x;
            var ax1 = a.x + a.width;
            var ay0 = a.y;
            var ay1 = a.y + a.height;
            var bx0 = b.x;
            var bx1 = b.x + b.width;
            var by0 = b.y;
            var by1 = b.y + b.height;
            var overlap = !(ax1 < bx0 || bx1 < ax0 || ay1 < by0 || by1 < ay0);
            if (mtv) {
                var dMin = Infinity;
                var dMax = 0;
                var d0 = Math.abs(ax1 - bx0);
                var d1 = Math.abs(bx1 - ax0);
                var d2 = Math.abs(ay1 - by0);
                var d3 = Math.abs(by1 - ay0);
                var dx = Math.min(d0, d1);
                var dy = Math.min(d2, d3);
                if (ax1 < bx0 || bx1 < ax0) {
                    if (dx > dMax) {
                        dMax = dx;
                        if (d0 < d1) {
                            Point.set(maxTv, -d0, 0);
                        }
                        else {
                            Point.set(maxTv, d1, 0);
                        }
                    }
                }
                else {
                    if (dx < dMin) {
                        dMin = dx;
                        if (d0 < d1) {
                            Point.set(minTv, d0, 0);
                        }
                        else {
                            Point.set(minTv, -d1, 0);
                        }
                    }
                }
                if (ay1 < by0 || by1 < ay0) {
                    if (dy > dMax) {
                        dMax = dy;
                        if (d2 < d3) {
                            Point.set(maxTv, 0, -d2);
                        }
                        else {
                            Point.set(maxTv, 0, d3);
                        }
                    }
                }
                else {
                    if (dx < dMin) {
                        dMin = dx;
                        if (d2 < d3) {
                            Point.set(minTv, 0, d2);
                        }
                        else {
                            Point.set(minTv, 0, -d3);
                        }
                    }
                }
            }
            if (mtv) {
                Point.copy(mtv, overlap ? minTv : maxTv);
            }
            return overlap;
        };
        BoundingRect.prototype.contain = function (x, y) {
            var rect = this;
            return x >= rect.x
                && x <= (rect.x + rect.width)
                && y >= rect.y
                && y <= (rect.y + rect.height);
        };
        BoundingRect.prototype.clone = function () {
            return new BoundingRect(this.x, this.y, this.width, this.height);
        };
        BoundingRect.prototype.copy = function (other) {
            BoundingRect.copy(this, other);
        };
        BoundingRect.prototype.plain = function () {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            };
        };
        BoundingRect.prototype.isFinite = function () {
            return isFinite(this.x)
                && isFinite(this.y)
                && isFinite(this.width)
                && isFinite(this.height);
        };
        BoundingRect.prototype.isZero = function () {
            return this.width === 0 || this.height === 0;
        };
        BoundingRect.create = function (rect) {
            return new BoundingRect(rect.x, rect.y, rect.width, rect.height);
        };
        BoundingRect.copy = function (target, source) {
            target.x = source.x;
            target.y = source.y;
            target.width = source.width;
            target.height = source.height;
        };
        BoundingRect.applyTransform = function (target, source, m) {
            if (!m) {
                if (target !== source) {
                    BoundingRect.copy(target, source);
                }
                return;
            }
            if (m[1] < 1e-5 && m[1] > -1e-5 && m[2] < 1e-5 && m[2] > -1e-5) {
                var sx = m[0];
                var sy = m[3];
                var tx = m[4];
                var ty = m[5];
                target.x = source.x * sx + tx;
                target.y = source.y * sy + ty;
                target.width = source.width * sx;
                target.height = source.height * sy;
                if (target.width < 0) {
                    target.x += target.width;
                    target.width = -target.width;
                }
                if (target.height < 0) {
                    target.y += target.height;
                    target.height = -target.height;
                }
                return;
            }
            lt.x = lb.x = source.x;
            lt.y = rt.y = source.y;
            rb.x = rt.x = source.x + source.width;
            rb.y = lb.y = source.y + source.height;
            lt.transform(m);
            rt.transform(m);
            rb.transform(m);
            lb.transform(m);
            target.x = mathMin(lt.x, rb.x, lb.x, rt.x);
            target.y = mathMin(lt.y, rb.y, lb.y, rt.y);
            var maxX = mathMax(lt.x, rb.x, lb.x, rt.x);
            var maxY = mathMax(lt.y, rb.y, lb.y, rt.y);
            target.width = maxX - target.x;
            target.height = maxY - target.y;
        };
        return BoundingRect;
    }());

    var isObject = (value) => {
        var type = typeof value;
        return value !== null && (type === 'object' || type === 'function');
    };
    var merge = (a, b) => {
        Object.keys(b).forEach(key => {
            if (isObject(b[key]) && isObject(a[key])) {
                merge(a[key], b[key]);
            }
            else {
                a[key] = b[key];
            }
        });
        return a;
    };
    var bind = function (func, context, ...args) {
        return function (...innerArgs) {
            return func.apply(context, args.concat(Array.prototype.slice.call(innerArgs)));
        };
    };
    var arrayAdd = function (array, item) {
        var i = 0;
        var index;
        var length = array.length;
        for (; i < length; i++) {
            if (array[i].index === item.index) {
                index = i;
                break;
            }
        }
        if (index === undefined) {
            array.push(item);
        }
        else {
            array[index] = item;
        }
        return array;
    };
    var uuid = function () {
        function rd(a) {
            return a ? (a ^ Math.random() * 16 >> a / 4).toString(16)
                : ([1e7] + -[1e3] + -4e3 + -8e3 + -1e11).replace(/[018]/g, rd);
        }
        return rd();
    };
    function bindAll(fns, context) {
        fns.forEach((fn) => {
            if (!context[fn]) {
                return;
            }
            context[fn] = context[fn].bind(context);
        });
    }
    function removeNode(node) {
        return node && node.parentNode ? node.parentNode.removeChild(node) : null;
    }
    function mockEvent(type, event) {
        var e = new MouseEvent(type, {
            bubbles: true,
            cancelable: true,
            button: event.pointerEvent.button,
            buttons: event.pointerEvent.buttons,
            clientX: event.pointerEvent.clientX,
            clientY: event.pointerEvent.clientY,
            zrX: event.pointerEvent.offsetX,
            zrY: event.pointerEvent.offsetY,
            movementX: event.pointerEvent.movementX,
            movementY: event.pointerEvent.movementY,
            relatedTarget: event.pointerEvent.relatedTarget,
            screenX: event.pointerEvent.screenX,
            screenY: event.pointerEvent.screenY,
            view: window,
        });
        e.zrX = event.pointerEvent.offsetX;
        e.zrY = event.pointerEvent.offsetY;
        e.event = e;
        return e;
    }
    function semver(a, b) {
        var pa = a.split('.');
        var pb = b.split('.');
        for (var i = 0; i < 3; i++) {
            var na = Number(pa[i]);
            var nb = Number(pb[i]);
            if (na > nb)
                { return 1; }
            if (nb > na)
                { return -1; }
            if (!isNaN(na) && isNaN(nb))
                { return 1; }
            if (isNaN(na) && !isNaN(nb))
                { return -1; }
        }
        return 0;
    }

    var checkDecoded = (json) => !json.UTF8Encoding;
    var decodePolygon = (coordinate, encodeOffsets, encodeScale) => {
        var result = [];
        var ref = [encodeOffsets[0], encodeOffsets[1]];
        var prevX = ref[0];
        var prevY = ref[1];
        for (var i = 0; i < coordinate.length; i += 2) {
            var x = coordinate.charCodeAt(i) - 64;
            var y = coordinate.charCodeAt(i + 1) - 64;
            x = (x >> 1) ^ -(x & 1);
            y = (y >> 1) ^ -(y & 1);
            x += prevX;
            y += prevY;
            prevX = x;
            prevY = y;
            result.push([x / encodeScale, y / encodeScale]);
        }
        return result;
    };
    var decode = (json) => {
        if (checkDecoded(json)) {
            return json;
        }
        var encodeScale = json.UTF8Scale;
        if (encodeScale == null) {
            encodeScale = 1024;
        }
        var features = json.features;
        for (var f = 0; f < features.length; f++) {
            var feature = features[f];
            var geometry = feature.geometry;
            var ref = [geometry.coordinates, geometry.encodeOffsets];
            var coordinates = ref[0];
            var encodeOffsets = ref[1];
            for (var c = 0; c < coordinates.length; c++) {
                var coordinate = coordinates[c];
                if (geometry.type === 'Polygon') {
                    coordinates[c] = decodePolygon(coordinate, encodeOffsets[c], encodeScale);
                }
                else if (geometry.type === 'MultiPolygon') {
                    for (var c2 = 0; c2 < coordinate.length; c2++) {
                        var polygon = coordinate[c2];
                        coordinate[c2] = decodePolygon(polygon, encodeOffsets[c][c2], encodeScale);
                    }
                }
            }
        }
        json.UTF8Encoding = false;
        return json;
    };
    function formatGeoJSON (json) {
        var geoJson = decode(json);
        var filterData = geoJson.features.filter((featureObj) => featureObj.geometry && featureObj.properties && featureObj.geometry.coordinates.length > 0);
        var _features = filterData.map((featureObj) => {
            var properties = featureObj.properties;
            var geo = featureObj.geometry;
            var coordinates = geo.coordinates;
            var geometries = [];
            if (geo.type === 'Polygon') {
                geometries.push(coordinates[0]);
            }
            if (geo.type === 'MultiPolygon') {
                coordinates.forEach((item) => {
                    if (item[0]) {
                        geometries.push(item[0]);
                    }
                });
            }
            return {
                properties,
                type: 'Feature',
                geometry: {
                    type: 'Polygon',
                    coordinates: geometries,
                },
            };
        });
        return {
            type: 'FeatureCollection',
            crs: {},
            features: _features,
        };
    }

    var pie = function (_options, serie, coordinateSystem) {
        serie.center = coordinateSystem.dataToPoint(serie.coordinates);
        return serie;
    };

    var bar = function (options, serie, coordinateSystem) {
        if (isObject(options.grid) && !Array.isArray(options.grid)) {
            console.log(options);
        }
        else if (Array.isArray(options.grid)) {
            options.grid = options.grid.map((gri, index) => {
                var coorPixel = coordinateSystem.dataToPoint(options.series[index].coordinates);
                gri.left = coorPixel[0] - parseFloat(gri.width) / 2;
                gri.top = coorPixel[1] - parseFloat(gri.height) / 2;
                return gri;
            });
        }
        return serie;
    };

    var line = function (options, serie, coordinateSystem) {
        if (isObject(options.grid) && !Array.isArray(options.grid)) {
            console.log(options);
        }
        else if (Array.isArray(options.grid)) {
            options.grid = options.grid.map((gri, index) => {
                var coorPixel = coordinateSystem.dataToPoint(options.series[index].coordinates);
                gri.left = coorPixel[0] - parseFloat(gri.width) / 2;
                gri.top = coorPixel[1] - parseFloat(gri.height) / 2;
                return gri;
            });
        }
        return serie;
    };



    var charts = /*#__PURE__*/Object.freeze({
        pie: pie,
        bar: bar,
        line: line
    });

    var _options = {
        forcedRerender: false,
        forcedPrecomposeRerender: false,
        hideOnZooming: false,
        hideOnMoving: false,
        hideOnRotating: false,
        convertTypes: ['pie', 'line', 'bar'],
        insertFirst: false,
        stopEvent: false,
        polyfillEvents: semver(util.VERSION, '6.1.1') <= 0,
    };
    class EChartsLayer extends ol.Object {
        constructor(chartOptions, options, map) {
            var opts = Object.assign(_options, options);
            super(opts);
            this._options = opts;
            this._chartOptions = chartOptions;
            this.set('chartOptions', chartOptions);
            this.$chart = null;
            this.$container = undefined;
            this._isRegistered = false;
            this._initEvent = false;
            this._incremental = [];
            this._coordinateSystem = null;
            this.coordinateSystemId = '';
            this.prevVisibleState = '';
            bindAll([
                'redraw', 'onResize', 'onZoomEnd', 'onCenterChange',
                'onDragRotateEnd', 'onMoveStart', 'onMoveEnd',
                'mouseDown', 'mouseUp', 'onClick', 'mouseMove',
            ], this);
            if (map)
                { this.setMap(map); }
        }
        appendTo(map, forceIgnore = false) {
            this.setMap(map, forceIgnore);
        }
        getMap() {
            return this._map;
        }
        setMap(map, forceIgnore = false) {
            if (map && (forceIgnore || map instanceof ol.Map)) {
                this._map = map;
                this._map.once('postrender', () => {
                    this.handleMapChanged();
                });
                this._map.renderSync();
            }
            else {
                throw new Error('not ol map object');
            }
        }
        getChartOptions() {
            return this.get('chartOptions');
        }
        setChartOptions(options = {}) {
            this._chartOptions = options;
            this.set('chartOptions', options);
            this.clearAndRedraw();
            return this;
        }
        appendData(data, save = true) {
            if (data) {
                if (save) {
                    this._incremental = arrayAdd(this._incremental, {
                        index: this._incremental.length,
                        data: data.data,
                        seriesIndex: data.seriesIndex,
                    });
                }
                this.$chart.appendData({
                    data: data.data.copyWithin(),
                    seriesIndex: data.seriesIndex,
                });
            }
            return this;
        }
        clear(keep) {
            if (!keep) {
                this._incremental = [];
            }
            if (this.$chart) {
                this.$chart.clear();
            }
        }
        remove() {
            this.clear();
            if (this.$chart) {
                this.$chart.dispose();
            }
            if (this._initEvent && this.$container) {
                this.$container && removeNode(this.$container);
                this.unBindEvent();
            }
            delete this.$chart;
            delete this._map;
        }
        show() {
            this.setVisible(true);
        }
        innerShow() {
            if (this.$container) {
                this.$container.style.display = this.prevVisibleState;
                this.prevVisibleState = '';
            }
        }
        hide() {
            this.setVisible(false);
        }
        innerHide() {
            if (this.$container) {
                this.prevVisibleState = this.$container.style.display;
                this.$container.style.display = 'none';
            }
        }
        isVisible() {
            return this.$container && this.$container.style.display !== 'none';
        }
        showLoading() {
            if (this.$chart) {
                this.$chart.showLoading();
            }
        }
        hideLoading() {
            if (this.$chart) {
                this.$chart.hideLoading();
            }
        }
        setZIndex(zIndex) {
            if (this.$container) {
                if (typeof zIndex === 'number') {
                    zIndex = String(zIndex);
                }
                this.$container.style.zIndex = zIndex;
            }
        }
        getZIndex() {
            return this.$container && this.$container.style.zIndex;
        }
        setVisible(visible) {
            if (visible) {
                if (this.$container) {
                    this.$container.style.display = '';
                }
                this._chartOptions = this.getChartOptions();
                this.clearAndRedraw();
            }
            else {
                if (this.$container) {
                    this.$container.style.display = 'none';
                }
                this.clear(true);
                this._chartOptions = {};
                this.clearAndRedraw();
            }
        }
        render() {
            if (!this.$chart && this.$container) {
                this.$chart = echarts.init(this.$container);
                if (this._chartOptions) {
                    this.registerMap();
                    this.$chart.setOption(this.convertData(this._chartOptions), false);
                }
                this.dispatchEvent({
                    type: 'load',
                    source: this,
                    value: this.$chart,
                });
            }
            else if (this.isVisible()) {
                this.redraw();
            }
        }
        redraw() {
            this.clearAndRedraw();
        }
        updateViewSize(size) {
            if (!this.$container)
                { return; }
            this.$container.style.width = `${size[0]}px`;
            this.$container.style.height = `${size[1]}px`;
            this.$container.setAttribute('width', String(size[0]));
            this.$container.setAttribute('height', String(size[1]));
        }
        onResize(event) {
            var map = this.getMap();
            if (map) {
                var size = map.getSize();
                this.updateViewSize(size);
                this.clearAndRedraw();
                if (event) {
                    this.dispatchEvent({
                        type: 'change:size',
                        source: this,
                        value: size,
                    });
                }
            }
        }
        onZoomEnd() {
            this._options.hideOnZooming && this.innerShow();
            var map = this.getMap();
            if (map && map.getView()) {
                this.clearAndRedraw();
                this.dispatchEvent({
                    type: 'zoomend',
                    source: this,
                    value: map.getView().getZoom(),
                });
            }
        }
        onDragRotateEnd() {
            this._options.hideOnRotating && this.innerShow();
            var map = this.getMap();
            if (map && map.getView()) {
                this.clearAndRedraw();
                this.dispatchEvent({
                    type: 'change:rotation',
                    source: this,
                    value: map.getView().getRotation(),
                });
            }
        }
        onMoveStart() {
            this._options.hideOnMoving && this.innerHide();
            var map = this.getMap();
            if (map && map.getView()) {
                this.dispatchEvent({
                    type: 'movestart',
                    source: this,
                    value: map.getView().getCenter(),
                });
            }
        }
        onMoveEnd() {
            this._options.hideOnMoving && this.innerShow();
            var map = this.getMap();
            if (map && map.getView()) {
                this.clearAndRedraw();
                this.dispatchEvent({
                    type: 'moveend',
                    source: this,
                    value: map.getView().getCenter(),
                });
            }
        }
        onClick(event) {
            if (this.$chart) {
                this.$chart.getZr().painter.getViewportRoot().dispatchEvent(mockEvent('click', event));
            }
        }
        mouseDown(event) {
            if (this.$chart) {
                this.$chart.getZr().painter.getViewportRoot().dispatchEvent(mockEvent('mousedown', event));
            }
        }
        mouseUp(event) {
            if (this.$chart) {
                this.$chart.getZr().painter.getViewportRoot().dispatchEvent(mockEvent('mouseup', event));
            }
        }
        mouseMove(event) {
            if (this.$chart) {
                var target = event.originalEvent.target;
                while (target) {
                    if (target.className === 'ol-overlaycontainer-stopevent') {
                        this.$chart.getZr().painter.getViewportRoot().dispatchEvent(mockEvent('mousemove', event));
                        return;
                    }
                    target = target.parentElement;
                }
            }
        }
        onCenterChange() {
            var map = this.getMap();
            if (map && map.getView()) {
                this.clearAndRedraw();
                this.dispatchEvent({
                    type: 'change:center',
                    source: this,
                    value: map.getView().getCenter(),
                });
            }
        }
        handleMapChanged() {
            var map = this.getMap();
            if (this._initEvent && this.$container) {
                this.$container && removeNode(this.$container);
                this.unBindEvent();
            }
            if (!this.$container) {
                this.createLayerContainer();
                this.onResize(false);
            }
            if (map) {
                var container = this._options.stopEvent ? map.getOverlayContainerStopEvent() : map.getOverlayContainer();
                if (this._options.insertFirst) {
                    container.insertBefore(this.$container, container.childNodes[0] || null);
                }
                else {
                    container.appendChild(this.$container);
                }
                this.render();
                this.bindEvent(map);
            }
        }
        createLayerContainer() {
            this.$container = document.createElement('div');
            this.$container.style.position = 'absolute';
            this.$container.style.top = '0px';
            this.$container.style.left = '0px';
            this.$container.style.right = '0px';
            this.$container.style.bottom = '0px';
            this.$container.style.pointerEvents = 'auto';
        }
        bindEvent(map) {
            var view = map.getView();
            if (this._options.forcedPrecomposeRerender) {
                map.on('precompose', this.redraw);
            }
            map.on('change:size', this.onResize);
            view.on('change:resolution', this.onZoomEnd);
            view.on('change:center', this.onCenterChange);
            view.on('change:rotation', this.onDragRotateEnd);
            map.on('movestart', this.onMoveStart);
            map.on('moveend', this.onMoveEnd);
            if (this._options.polyfillEvents) {
                map.on('pointerdown', this.mouseDown);
                map.on('pointerup', this.mouseUp);
                map.on('pointermove', this.mouseMove);
                map.on('click', this.onClick);
            }
            this._initEvent = true;
        }
        unBindEvent() {
            var map = this.getMap();
            if (!map)
                { return; }
            var view = map.getView();
            if (!view)
                { return; }
            map.un('precompose', this.redraw);
            map.un('change:size', this.onResize);
            view.un('change:resolution', this.onZoomEnd);
            view.un('change:center', this.onCenterChange);
            view.un('change:rotation', this.onDragRotateEnd);
            map.un('movestart', this.onMoveStart);
            map.un('moveend', this.onMoveEnd);
            if (this._options.polyfillEvents) {
                map.un('pointerdown', this.mouseDown);
                map.un('pointerup', this.mouseUp);
                map.un('pointermove', this.mouseMove);
                map.un('click', this.onClick);
            }
            this._initEvent = false;
        }
        clearAndRedraw() {
            if (!this.$chart || !this.isVisible())
                { return; }
            if (this._options.forcedRerender) {
                this.$chart.clear();
            }
            this.$chart.resize();
            if (this._chartOptions) {
                this.registerMap();
                this.$chart.setOption(this.convertData(this._chartOptions), false);
                if (this._incremental && this._incremental.length > 0) {
                    for (var i = 0; i < this._incremental.length; i++) {
                        this.appendData(this._incremental[i], false);
                    }
                }
            }
            this.dispatchEvent({
                type: 'redraw',
                source: this,
            });
        }
        registerMap() {
            if (!this._isRegistered) {
                this.coordinateSystemId = `openlayers_${uuid()}`;
                echarts.registerCoordinateSystem(this.coordinateSystemId, this.getCoordinateSystem(this._options));
                this._isRegistered = true;
            }
            if (this._chartOptions) {
                var series = this._chartOptions.series;
                if (series && isObject(series)) {
                    var convertTypes = this._options.convertTypes;
                    if (convertTypes) {
                        for (var i = series.length - 1; i >= 0; i--) {
                            if (!(convertTypes.indexOf(series[i].type) > -1)) {
                                series[i].coordinateSystem = this.coordinateSystemId;
                            }
                            series[i].animation = false;
                        }
                    }
                }
            }
        }
        convertData(options) {
            var series = options.series;
            if (series && series.length > 0) {
                if (!this._coordinateSystem) {
                    var Rc = this.getCoordinateSystem(this._options);
                    this._coordinateSystem = new Rc(this.getMap());
                }
                if (series && isObject(series)) {
                    var convertTypes = this._options.convertTypes;
                    if (convertTypes) {
                        for (var i = series.length - 1; i >= 0; i--) {
                            if (convertTypes.indexOf(series[i].type) > -1) {
                                if (series[i] && series[i].hasOwnProperty('coordinates')) {
                                    series[i] = charts[series[i].type](options, series[i], this._coordinateSystem);
                                }
                            }
                        }
                    }
                }
            }
            return options;
        }
        getCoordinateSystem(options) {
            var map = this.getMap();
            var coordinateSystemId = this.coordinateSystemId;
            class RegisterCoordinateSystem {
                constructor(map) {
                    this._mapOffset = [0, 0];
                    this.dimensions = ['lng', 'lat'];
                    this._roamTransformable = new Transformable();
                    this._rawTransformable = new Transformable();
                    this.map = map;
                    this.dimensions = ['lng', 'lat'];
                    this.projCode = RegisterCoordinateSystem.getProjectionCode(this.map);
                }
                getZoom() {
                    return this.map.getView().getZoom();
                }
                setZoom(zoom) {
                    return this.map.getView().setZoom(zoom);
                }
                getViewRectAfterRoam() {
                    return this.getViewRect().clone();
                }
                setMapOffset(mapOffset) {
                    this._mapOffset = mapOffset;
                }
                dataToPoint(data) {
                    var coords;
                    if (data && Array.isArray(data) && data.length > 0) {
                        coords = data.map((item) => {
                            var res = 0;
                            if (typeof item === 'string') {
                                res = Number(item);
                            }
                            else {
                                res = item;
                            }
                            return res;
                        });
                        var source = (options && options.source) || 'EPSG:4326';
                        var destination = (options && options.destination) || this.projCode;
                        var pixel = this.map.getPixelFromCoordinate(proj.transform(coords, source, destination));
                        var mapOffset = this._mapOffset;
                        return [pixel[0] - mapOffset[0], pixel[1] - mapOffset[1]];
                    }
                    return [0, 0];
                }
                pointToData(pixel) {
                    var mapOffset = this._mapOffset;
                    return this.map.getCoordinateFromPixel([pixel[0] + mapOffset[0], pixel[1] + mapOffset[1]]);
                }
                setViewRect() {
                    var size = this.map.getSize();
                    this._viewRect = new BoundingRect(0, 0, size[0], size[1]);
                }
                getViewRect() {
                    if (!this._viewRect) {
                        this.setViewRect();
                    }
                    return this._viewRect;
                }
                getRoamTransform() {
                    return this._roamTransformable.getLocalTransform();
                }
                prepareCustoms() {
                    var rect = this.getViewRect();
                    return {
                        coordSys: {
                            type: coordinateSystemId,
                            x: rect.x,
                            y: rect.y,
                            width: rect.width,
                            height: rect.height,
                        },
                        api: {
                            coord: bind(this.dataToPoint, this),
                            size: bind(this.dataToCoordsSize, this),
                        },
                    };
                }
                dataToCoordsSize(dataSize, dataItem = [0, 0]) {
                    return [0, 1].map((dimIdx) => {
                        var val = dataItem[dimIdx];
                        var p1 = [];
                        var p2 = [];
                        var halfSize = dataSize[dimIdx] / 2;
                        p1[dimIdx] = val - halfSize;
                        p2[dimIdx] = val + halfSize;
                        p1[1 - dimIdx] = dataItem[1 - dimIdx];
                        p2[1 - dimIdx] = dataItem[1 - dimIdx];
                        var offset = this.dataToPoint(p1)[dimIdx] - this.dataToPoint(p2)[dimIdx];
                        return Math.abs(offset);
                    });
                }
                getTransformInfo() {
                    var rawTransformable = this._rawTransformable;
                    var roamTransformable = this._roamTransformable;
                    var dummyTransformable = new Transformable();
                    dummyTransformable.transform = roamTransformable.transform;
                    dummyTransformable.decomposeTransform();
                    return {
                        roam: {
                            x: dummyTransformable.x,
                            y: dummyTransformable.y,
                            scaleX: dummyTransformable.scaleX,
                            scaleY: dummyTransformable.scaleY,
                        },
                        raw: {
                            x: rawTransformable.x,
                            y: rawTransformable.y,
                            scaleX: rawTransformable.scaleX,
                            scaleY: rawTransformable.scaleY,
                        },
                    };
                }
            }
            RegisterCoordinateSystem.dimensions = RegisterCoordinateSystem.prototype.dimensions || ['lng', 'lat'];
            RegisterCoordinateSystem.create = function (echartsModel) {
                echartsModel.eachSeries((seriesModel) => {
                    if (seriesModel.get('coordinateSystem') === coordinateSystemId) {
                        seriesModel.coordinateSystem = new RegisterCoordinateSystem(map);
                    }
                });
            };
            RegisterCoordinateSystem.getProjectionCode = function (map) {
                var code = '';
                if (map) {
                    code = map.getView()
                        && map
                            .getView()
                            .getProjection()
                            .getCode();
                }
                else {
                    code = 'EPSG:3857';
                }
                return code;
            };
            return RegisterCoordinateSystem;
        }
        dispatchEvent(event) {
            return super.dispatchEvent(event);
        }
        set(key, value, optSilent) {
            return super.set(key, value, optSilent);
        }
        get(key) {
            return super.get(key);
        }
        unset(key, optSilent) {
            return super.unset(key, optSilent);
        }
        on(type, listener) {
            return super.on(type, listener);
        }
        un(type, listener) {
            return super.un(type, listener);
        }
    }
    EChartsLayer.formatGeoJSON = formatGeoJSON;
    EChartsLayer.bind = bind;
    EChartsLayer.merge = merge;
    EChartsLayer.uuid = uuid;
    EChartsLayer.bindAll = bindAll;
    EChartsLayer.arrayAdd = arrayAdd;
    EChartsLayer.removeNode = removeNode;
    EChartsLayer.isObject = isObject;

    return EChartsLayer;

}));
//# sourceMappingURL=ol-echarts.js.map
