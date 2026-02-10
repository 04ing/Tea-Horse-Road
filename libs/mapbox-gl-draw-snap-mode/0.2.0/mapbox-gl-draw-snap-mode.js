(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mapboxGlDrawSnapMode"] = factory();
	else
		root["mapboxGlDrawSnapMode"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=function(t,e){var n={drag:[],click:[],mousemove:[],mousedown:[],mouseup:[],mouseout:[],keydown:[],keyup:[],touchstart:[],touchmove:[],touchend:[],tap:[]},o={on:function(t,e,o){if(void 0===n[t])throw new Error("Invalid event type: "+t);n[t].push({selector:e,fn:o})},render:function(t){e.store.featureChanged(t)}},r=function(t,r){for(var i=n[t],a=i.length;a--;){var s=i[a];if(s.selector(r)){s.fn.call(o,r)||e.store.render(),e.ui.updateMapClasses();break}}};return t.start.call(o),{render:t.render,stop:function(){t.stop&&t.stop()},trash:function(){t.trash&&(t.trash(),e.store.render())},combineFeatures:function(){t.combineFeatures&&t.combineFeatures()},uncombineFeatures:function(){t.uncombineFeatures&&t.uncombineFeatures()},drag:function(t){r("drag",t)},click:function(t){r("click",t)},mousemove:function(t){r("mousemove",t)},mousedown:function(t){r("mousedown",t)},mouseup:function(t){r("mouseup",t)},mouseout:function(t){r("mouseout",t)},keydown:function(t){r("keydown",t)},keyup:function(t){r("keyup",t)},touchstart:function(t){r("touchstart",t)},touchmove:function(t){r("touchmove",t)},touchend:function(t){r("touchend",t)},tap:function(t){r("tap",t)}}};function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function n(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var n=function t(){if(this instanceof t){var n=[null];n.push.apply(n,arguments);var o=Function.bind.apply(e,n);return new o}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var o=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,o.get?o:{enumerable:!0,get:function(){return t[e]}})})),n}var o={},r={RADIUS:6378137,FLATTENING:1/298.257223563,POLAR_RADIUS:6356752.3142},i=r;function a(t){var e=0;if(t&&t.length>0){e+=Math.abs(s(t[0]));for(var n=1;n<t.length;n++)e-=Math.abs(s(t[n]))}return e}function s(t){var e,n,o,r,a,s,c=0,l=t.length;if(l>2){for(s=0;s<l;s++)s===l-2?(o=l-2,r=l-1,a=0):s===l-1?(o=l-1,r=0,a=1):(o=s,r=s+1,a=s+2),e=t[o],n=t[r],c+=(u(t[a][0])-u(e[0]))*Math.sin(u(n[1]));c=c*i.RADIUS*i.RADIUS/2}return c}function u(t){return t*Math.PI/180}o.geometry=function t(e){var n,o=0;switch(e.type){case"Polygon":return a(e.coordinates);case"MultiPolygon":for(n=0;n<e.coordinates.length;n++)o+=a(e.coordinates[n]);return o;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0;case"GeometryCollection":for(n=0;n<e.geometries.length;n++)o+=t(e.geometries[n]);return o}},o.ring=s;var c={CONTROL_BASE:"mapboxgl-ctrl",CONTROL_PREFIX:"mapboxgl-ctrl-",CONTROL_BUTTON:"mapbox-gl-draw_ctrl-draw-btn",CONTROL_BUTTON_LINE:"mapbox-gl-draw_line",CONTROL_BUTTON_POLYGON:"mapbox-gl-draw_polygon",CONTROL_BUTTON_POINT:"mapbox-gl-draw_point",CONTROL_BUTTON_TRASH:"mapbox-gl-draw_trash",CONTROL_BUTTON_COMBINE_FEATURES:"mapbox-gl-draw_combine",CONTROL_BUTTON_UNCOMBINE_FEATURES:"mapbox-gl-draw_uncombine",CONTROL_GROUP:"mapboxgl-ctrl-group",ATTRIBUTION:"mapboxgl-ctrl-attrib",ACTIVE_BUTTON:"active",BOX_SELECT:"mapbox-gl-draw_boxselect"},l={HOT:"mapbox-gl-draw-hot",COLD:"mapbox-gl-draw-cold"},d={ADD:"add",MOVE:"move",DRAG:"drag",POINTER:"pointer",NONE:"none"},p={POLYGON:"polygon",LINE:"line_string",POINT:"point"},f={FEATURE:"Feature",POLYGON:"Polygon",LINE_STRING:"LineString",POINT:"Point",FEATURE_COLLECTION:"FeatureCollection",MULTI_PREFIX:"Multi",MULTI_POINT:"MultiPoint",MULTI_LINE_STRING:"MultiLineString",MULTI_POLYGON:"MultiPolygon"},h={DRAW_LINE_STRING:"draw_line_string",DRAW_POLYGON:"draw_polygon",DRAW_POINT:"draw_point",SIMPLE_SELECT:"simple_select",DIRECT_SELECT:"direct_select",STATIC:"static"},g={CREATE:"draw.create",DELETE:"draw.delete",UPDATE:"draw.update",SELECTION_CHANGE:"draw.selectionchange",MODE_CHANGE:"draw.modechange",ACTIONABLE:"draw.actionable",RENDER:"draw.render",COMBINE_FEATURES:"draw.combine",UNCOMBINE_FEATURES:"draw.uncombine"},y={MOVE:"move",CHANGE_COORDINATES:"change_coordinates"},v={FEATURE:"feature",MIDPOINT:"midpoint",VERTEX:"vertex"},m={ACTIVE:"true",INACTIVE:"false"},_=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate"],b=-85,E=Object.freeze({__proto__:null,classes:c,sources:l,cursors:d,types:p,geojsonTypes:f,modes:h,events:g,updateActions:y,meta:v,activeStates:m,interactions:_,LAT_MIN:-90,LAT_RENDERED_MIN:b,LAT_MAX:90,LAT_RENDERED_MAX:85,LNG_MIN:-270,LNG_MAX:270}),T={Point:0,LineString:1,MultiLineString:1,Polygon:2};function C(t,e){var n=T[t.geometry.type]-T[e.geometry.type];return 0===n&&t.geometry.type===f.POLYGON?t.area-e.area:n}function O(t){return t.map((function(t){return t.geometry.type===f.POLYGON&&(t.area=o.geometry({type:f.FEATURE,property:{},geometry:t.geometry})),t})).sort(C).map((function(t){return delete t.area,t}))}function S(t,e){return void 0===e&&(e=0),[[t.point.x-e,t.point.y-e],[t.point.x+e,t.point.y+e]]}function I(t){if(this._items={},this._nums={},this._length=t?t.length:0,t)for(var e=0,n=t.length;e<n;e++)this.add(t[e]),void 0!==t[e]&&("string"==typeof t[e]?this._items[t[e]]=e:this._nums[t[e]]=e)}I.prototype.add=function(t){return this.has(t)||(this._length++,"string"==typeof t?this._items[t]=this._length:this._nums[t]=this._length),this},I.prototype.delete=function(t){return!1===this.has(t)||(this._length--,delete this._items[t],delete this._nums[t]),this},I.prototype.has=function(t){return("string"==typeof t||"number"==typeof t)&&(void 0!==this._items[t]||void 0!==this._nums[t])},I.prototype.values=function(){var t=this,e=[];return Object.keys(this._items).forEach((function(n){e.push({k:n,v:t._items[n]})})),Object.keys(this._nums).forEach((function(n){e.push({k:JSON.parse(n),v:t._nums[n]})})),e.sort((function(t,e){return t.v-e.v})).map((function(t){return t.k}))},I.prototype.clear=function(){return this._length=0,this._items={},this._nums={},this};var x=[v.FEATURE,v.MIDPOINT,v.VERTEX],M={click:function(t,e,n){return L(t,e,n,n.options.clickBuffer)},touch:function(t,e,n){return L(t,e,n,n.options.touchBuffer)}};function L(t,e,n,o){if(null===n.map)return[];var r=t?S(t,o):e,i={};n.options.styles&&(i.layers=n.options.styles.map((function(t){return t.id})).filter((function(t){return null!=n.map.getLayer(t)})));var a=n.map.queryRenderedFeatures(r,i).filter((function(t){return-1!==x.indexOf(t.properties.meta)})),s=new I,u=[];return a.forEach((function(t){var e=t.properties.id;s.has(e)||(s.add(e),u.push(t))})),O(u)}function N(t,e){var n=M.click(t,null,e),o={mouse:d.NONE};return n[0]&&(o.mouse=n[0].properties.active===m.ACTIVE?d.MOVE:d.POINTER,o.feature=n[0].properties.meta),-1!==e.events.currentModeName().indexOf("draw")&&(o.mouse=d.ADD),e.ui.queueMapClasses(o),e.ui.updateMapClasses(),n[0]}function A(t,e){var n=t.x-e.x,o=t.y-e.y;return Math.sqrt(n*n+o*o)}function P(t,e,n){void 0===n&&(n={});var o=null!=n.fineTolerance?n.fineTolerance:4,r=null!=n.grossTolerance?n.grossTolerance:12,i=null!=n.interval?n.interval:500;t.point=t.point||e.point,t.time=t.time||e.time;var a=A(t.point,e.point);return a<o||a<r&&e.time-t.time<i}function F(t,e,n){void 0===n&&(n={});var o=null!=n.tolerance?n.tolerance:25,r=null!=n.interval?n.interval:250;return t.point=t.point||e.point,t.time=t.time||e.time,A(t.point,e.point)<o&&e.time-t.time<r}var w={exports:{}},R=w.exports=function(t,e){if(e||(e=16),void 0===t&&(t=128),t<=0)return"0";for(var n=Math.log(Math.pow(2,t))/Math.log(e),o=2;n===1/0;o*=2)n=Math.log(Math.pow(2,t/o))/Math.log(e)*o;var r=n-Math.floor(n),i="";for(o=0;o<Math.floor(n);o++){i=Math.floor(Math.random()*e).toString(e)+i}if(r){var a=Math.pow(e,r);i=Math.floor(Math.random()*a).toString(e)+i}var s=parseInt(i,e);return s!==1/0&&s>=Math.pow(2,t)?R(t,e):i};R.rack=function(t,e,n){var o=function(o){var i=0;do{if(i++>10){if(!n)throw new Error("too many ID collisions, use more bits");t+=n}var a=R(t,e)}while(Object.hasOwnProperty.call(r,a));return r[a]=o,a},r=o.hats={};return o.get=function(t){return o.hats[t]},o.set=function(t,e){return o.hats[t]=e,o},o.bits=t||128,o.base=e||16,o};var k=e(w.exports),D=function(t,e){this.ctx=t,this.properties=e.properties||{},this.coordinates=e.geometry.coordinates,this.id=e.id||k(),this.type=e.geometry.type};D.prototype.changed=function(){this.ctx.store.featureChanged(this.id)},D.prototype.incomingCoords=function(t){this.setCoordinates(t)},D.prototype.setCoordinates=function(t){this.coordinates=t,this.changed()},D.prototype.getCoordinates=function(){return JSON.parse(JSON.stringify(this.coordinates))},D.prototype.setProperty=function(t,e){this.properties[t]=e},D.prototype.toGeoJSON=function(){return JSON.parse(JSON.stringify({id:this.id,type:f.FEATURE,properties:this.properties,geometry:{coordinates:this.getCoordinates(),type:this.type}}))},D.prototype.internal=function(t){var e={id:this.id,meta:v.FEATURE,"meta:type":this.type,active:m.INACTIVE,mode:t};if(this.ctx.options.userProperties)for(var n in this.properties)e["user_"+n]=this.properties[n];return{type:f.FEATURE,properties:e,geometry:{coordinates:this.getCoordinates(),type:this.type}}};var U=function(t,e){D.call(this,t,e)};(U.prototype=Object.create(D.prototype)).isValid=function(){return"number"==typeof this.coordinates[0]&&"number"==typeof this.coordinates[1]},U.prototype.updateCoordinate=function(t,e,n){this.coordinates=3===arguments.length?[e,n]:[t,e],this.changed()},U.prototype.getCoordinate=function(){return this.getCoordinates()};var j=function(t,e){D.call(this,t,e)};(j.prototype=Object.create(D.prototype)).isValid=function(){return this.coordinates.length>1},j.prototype.addCoordinate=function(t,e,n){this.changed();var o=parseInt(t,10);this.coordinates.splice(o,0,[e,n])},j.prototype.getCoordinate=function(t){var e=parseInt(t,10);return JSON.parse(JSON.stringify(this.coordinates[e]))},j.prototype.removeCoordinate=function(t){this.changed(),this.coordinates.splice(parseInt(t,10),1)},j.prototype.updateCoordinate=function(t,e,n){var o=parseInt(t,10);this.coordinates[o]=[e,n],this.changed()};var V=function(t,e){D.call(this,t,e),this.coordinates=this.coordinates.map((function(t){return t.slice(0,-1)}))};(V.prototype=Object.create(D.prototype)).isValid=function(){return 0!==this.coordinates.length&&this.coordinates.every((function(t){return t.length>2}))},V.prototype.incomingCoords=function(t){this.coordinates=t.map((function(t){return t.slice(0,-1)})),this.changed()},V.prototype.setCoordinates=function(t){this.coordinates=t,this.changed()},V.prototype.addCoordinate=function(t,e,n){this.changed();var o=t.split(".").map((function(t){return parseInt(t,10)}));this.coordinates[o[0]].splice(o[1],0,[e,n])},V.prototype.removeCoordinate=function(t){this.changed();var e=t.split(".").map((function(t){return parseInt(t,10)})),n=this.coordinates[e[0]];n&&(n.splice(e[1],1),n.length<3&&this.coordinates.splice(e[0],1))},V.prototype.getCoordinate=function(t){var e=t.split(".").map((function(t){return parseInt(t,10)})),n=this.coordinates[e[0]];return JSON.parse(JSON.stringify(n[e[1]]))},V.prototype.getCoordinates=function(){return this.coordinates.map((function(t){return t.concat([t[0]])}))},V.prototype.updateCoordinate=function(t,e,n){this.changed();var o=t.split("."),r=parseInt(o[0],10),i=parseInt(o[1],10);void 0===this.coordinates[r]&&(this.coordinates[r]=[]),this.coordinates[r][i]=[e,n]};var B={MultiPoint:U,MultiLineString:j,MultiPolygon:V},G=function(t,e,n,o,r){var i=n.split("."),a=parseInt(i[0],10),s=i[1]?i.slice(1).join("."):null;return t[a][e](s,o,r)},J=function(t,e){if(D.call(this,t,e),delete this.coordinates,this.model=B[e.geometry.type],void 0===this.model)throw new TypeError(e.geometry.type+" is not a valid type");this.features=this._coordinatesToFeatures(e.geometry.coordinates)};function z(t){this.map=t.map,this.drawConfig=JSON.parse(JSON.stringify(t.options||{})),this._ctx=t}(J.prototype=Object.create(D.prototype))._coordinatesToFeatures=function(t){var e=this,n=this.model.bind(this);return t.map((function(t){return new n(e.ctx,{id:k(),type:f.FEATURE,properties:{},geometry:{coordinates:t,type:e.type.replace("Multi","")}})}))},J.prototype.isValid=function(){return this.features.every((function(t){return t.isValid()}))},J.prototype.setCoordinates=function(t){this.features=this._coordinatesToFeatures(t),this.changed()},J.prototype.getCoordinate=function(t){return G(this.features,"getCoordinate",t)},J.prototype.getCoordinates=function(){return JSON.parse(JSON.stringify(this.features.map((function(t){return t.type===f.POLYGON?t.getCoordinates():t.coordinates}))))},J.prototype.updateCoordinate=function(t,e,n){G(this.features,"updateCoordinate",t,e,n),this.changed()},J.prototype.addCoordinate=function(t,e,n){G(this.features,"addCoordinate",t,e,n),this.changed()},J.prototype.removeCoordinate=function(t){G(this.features,"removeCoordinate",t),this.changed()},J.prototype.getFeatures=function(){return this.features},z.prototype.setSelected=function(t){return this._ctx.store.setSelected(t)},z.prototype.setSelectedCoordinates=function(t){var e=this;this._ctx.store.setSelectedCoordinates(t),t.reduce((function(t,n){return void 0===t[n.feature_id]&&(t[n.feature_id]=!0,e._ctx.store.get(n.feature_id).changed()),t}),{})},z.prototype.getSelected=function(){return this._ctx.store.getSelected()},z.prototype.getSelectedIds=function(){return this._ctx.store.getSelectedIds()},z.prototype.isSelected=function(t){return this._ctx.store.isSelected(t)},z.prototype.getFeature=function(t){return this._ctx.store.get(t)},z.prototype.select=function(t){return this._ctx.store.select(t)},z.prototype.deselect=function(t){return this._ctx.store.deselect(t)},z.prototype.deleteFeature=function(t,e){return void 0===e&&(e={}),this._ctx.store.delete(t,e)},z.prototype.addFeature=function(t){return this._ctx.store.add(t)},z.prototype.clearSelectedFeatures=function(){return this._ctx.store.clearSelected()},z.prototype.clearSelectedCoordinates=function(){return this._ctx.store.clearSelectedCoordinates()},z.prototype.setActionableState=function(t){void 0===t&&(t={});var e={trash:t.trash||!1,combineFeatures:t.combineFeatures||!1,uncombineFeatures:t.uncombineFeatures||!1};return this._ctx.events.actionable(e)},z.prototype.changeMode=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),this._ctx.events.changeMode(t,e,n)},z.prototype.updateUIClasses=function(t){return this._ctx.ui.queueMapClasses(t)},z.prototype.activateUIButton=function(t){return this._ctx.ui.setActiveButton(t)},z.prototype.featuresAt=function(t,e,n){if(void 0===n&&(n="click"),"click"!==n&&"touch"!==n)throw new Error("invalid buffer type");return M[n](t,e,this._ctx)},z.prototype.newFeature=function(t){var e=t.geometry.type;return e===f.POINT?new U(this._ctx,t):e===f.LINE_STRING?new j(this._ctx,t):e===f.POLYGON?new V(this._ctx,t):new J(this._ctx,t)},z.prototype.isInstanceOf=function(t,e){if(t===f.POINT)return e instanceof U;if(t===f.LINE_STRING)return e instanceof j;if(t===f.POLYGON)return e instanceof V;if("MultiFeature"===t)return e instanceof J;throw new Error("Unknown feature class: "+t)},z.prototype.doRender=function(t){return this._ctx.store.featureChanged(t)},z.prototype.onSetup=function(){},z.prototype.onDrag=function(){},z.prototype.onClick=function(){},z.prototype.onMouseMove=function(){},z.prototype.onMouseDown=function(){},z.prototype.onMouseUp=function(){},z.prototype.onMouseOut=function(){},z.prototype.onKeyUp=function(){},z.prototype.onKeyDown=function(){},z.prototype.onTouchStart=function(){},z.prototype.onTouchMove=function(){},z.prototype.onTouchEnd=function(){},z.prototype.onTap=function(){},z.prototype.onStop=function(){},z.prototype.onTrash=function(){},z.prototype.onCombineFeature=function(){},z.prototype.onUncombineFeature=function(){},z.prototype.toDisplayFeatures=function(){throw new Error("You must overwrite toDisplayFeatures")};var Y={drag:"onDrag",click:"onClick",mousemove:"onMouseMove",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseout:"onMouseOut",keyup:"onKeyUp",keydown:"onKeyDown",touchstart:"onTouchStart",touchmove:"onTouchMove",touchend:"onTouchEnd",tap:"onTap"},$=Object.keys(Y);function q(t){var e=Object.keys(t);return function(n,o){void 0===o&&(o={});var r={},i=e.reduce((function(e,n){return e[n]=t[n],e}),new z(n));return{start:function(){var e=this;r=i.onSetup(o),$.forEach((function(n){var o,a=Y[n],s=function(){return!1};t[a]&&(s=function(){return!0}),e.on(n,s,(o=a,function(t){return i[o](r,t)}))}))},stop:function(){i.onStop(r)},trash:function(){i.onTrash(r)},combineFeatures:function(){i.onCombineFeatures(r)},uncombineFeatures:function(){i.onUncombineFeatures(r)},render:function(t,e){i.toDisplayFeatures(r,t,e)}}}}function H(t){return[].concat(t).filter((function(t){return void 0!==t}))}function X(){var t=this;if(!(t.ctx.map&&void 0!==t.ctx.map.getSource(l.HOT)))return u();var e=t.ctx.events.currentModeName();t.ctx.ui.queueMapClasses({mode:e});var n=[],o=[];t.isDirty?o=t.getAllIds():(n=t.getChangedIds().filter((function(e){return void 0!==t.get(e)})),o=t.sources.hot.filter((function(e){return e.properties.id&&-1===n.indexOf(e.properties.id)&&void 0!==t.get(e.properties.id)})).map((function(t){return t.properties.id}))),t.sources.hot=[];var r=t.sources.cold.length;t.sources.cold=t.isDirty?[]:t.sources.cold.filter((function(t){var e=t.properties.id||t.properties.parent;return-1===n.indexOf(e)}));var i=r!==t.sources.cold.length||o.length>0;function a(n,o){var r=t.get(n).internal(e);t.ctx.events.currentModeRender(r,(function(e){t.sources[o].push(e)}))}if(n.forEach((function(t){return a(t,"hot")})),o.forEach((function(t){return a(t,"cold")})),i&&t.ctx.map.getSource(l.COLD).setData({type:f.FEATURE_COLLECTION,features:t.sources.cold}),t.ctx.map.getSource(l.HOT).setData({type:f.FEATURE_COLLECTION,features:t.sources.hot}),t._emitSelectionChange&&(t.ctx.map.fire(g.SELECTION_CHANGE,{features:t.getSelected().map((function(t){return t.toGeoJSON()})),points:t.getSelectedCoordinates().map((function(t){return{type:f.FEATURE,properties:{},geometry:{type:f.POINT,coordinates:t.coordinates}}}))}),t._emitSelectionChange=!1),t._deletedFeaturesToEmit.length){var s=t._deletedFeaturesToEmit.map((function(t){return t.toGeoJSON()}));t._deletedFeaturesToEmit=[],t.ctx.map.fire(g.DELETE,{features:s})}function u(){t.isDirty=!1,t.clearChangedIds()}u(),t.ctx.map.fire(g.RENDER,{})}function Z(t){var e,n=this;this._features={},this._featureIds=new I,this._selectedFeatureIds=new I,this._selectedCoordinates=[],this._changedFeatureIds=new I,this._deletedFeaturesToEmit=[],this._emitSelectionChange=!1,this._mapInitialConfig={},this.ctx=t,this.sources={hot:[],cold:[]},this.render=function(){e||(e=requestAnimationFrame((function(){e=null,X.call(n)})))},this.isDirty=!1}function W(t,e){var n=t._selectedCoordinates.filter((function(e){return t._selectedFeatureIds.has(e.feature_id)}));t._selectedCoordinates.length===n.length||e.silent||(t._emitSelectionChange=!0),t._selectedCoordinates=n}Z.prototype.createRenderBatch=function(){var t=this,e=this.render,n=0;return this.render=function(){n++},function(){t.render=e,n>0&&t.render()}},Z.prototype.setDirty=function(){return this.isDirty=!0,this},Z.prototype.featureChanged=function(t){return this._changedFeatureIds.add(t),this},Z.prototype.getChangedIds=function(){return this._changedFeatureIds.values()},Z.prototype.clearChangedIds=function(){return this._changedFeatureIds.clear(),this},Z.prototype.getAllIds=function(){return this._featureIds.values()},Z.prototype.add=function(t){return this.featureChanged(t.id),this._features[t.id]=t,this._featureIds.add(t.id),this},Z.prototype.delete=function(t,e){var n=this;return void 0===e&&(e={}),H(t).forEach((function(t){n._featureIds.has(t)&&(n._featureIds.delete(t),n._selectedFeatureIds.delete(t),e.silent||-1===n._deletedFeaturesToEmit.indexOf(n._features[t])&&n._deletedFeaturesToEmit.push(n._features[t]),delete n._features[t],n.isDirty=!0)})),W(this,e),this},Z.prototype.get=function(t){return this._features[t]},Z.prototype.getAll=function(){var t=this;return Object.keys(this._features).map((function(e){return t._features[e]}))},Z.prototype.select=function(t,e){var n=this;return void 0===e&&(e={}),H(t).forEach((function(t){n._selectedFeatureIds.has(t)||(n._selectedFeatureIds.add(t),n._changedFeatureIds.add(t),e.silent||(n._emitSelectionChange=!0))})),this},Z.prototype.deselect=function(t,e){var n=this;return void 0===e&&(e={}),H(t).forEach((function(t){n._selectedFeatureIds.has(t)&&(n._selectedFeatureIds.delete(t),n._changedFeatureIds.add(t),e.silent||(n._emitSelectionChange=!0))})),W(this,e),this},Z.prototype.clearSelected=function(t){return void 0===t&&(t={}),this.deselect(this._selectedFeatureIds.values(),{silent:t.silent}),this},Z.prototype.setSelected=function(t,e){var n=this;return void 0===e&&(e={}),t=H(t),this.deselect(this._selectedFeatureIds.values().filter((function(e){return-1===t.indexOf(e)})),{silent:e.silent}),this.select(t.filter((function(t){return!n._selectedFeatureIds.has(t)})),{silent:e.silent}),this},Z.prototype.setSelectedCoordinates=function(t){return this._selectedCoordinates=t,this._emitSelectionChange=!0,this},Z.prototype.clearSelectedCoordinates=function(){return this._selectedCoordinates=[],this._emitSelectionChange=!0,this},Z.prototype.getSelectedIds=function(){return this._selectedFeatureIds.values()},Z.prototype.getSelected=function(){var t=this;return this._selectedFeatureIds.values().map((function(e){return t.get(e)}))},Z.prototype.getSelectedCoordinates=function(){var t=this;return this._selectedCoordinates.map((function(e){return{coordinates:t.get(e.feature_id).getCoordinate(e.coord_path)}}))},Z.prototype.isSelected=function(t){return this._selectedFeatureIds.has(t)},Z.prototype.setFeatureProperty=function(t,e,n){this.get(t).setProperty(e,n),this.featureChanged(t)},Z.prototype.storeMapConfig=function(){var t=this;_.forEach((function(e){t.ctx.map[e]&&(t._mapInitialConfig[e]=t.ctx.map[e].isEnabled())}))},Z.prototype.restoreMapConfig=function(){var t=this;Object.keys(this._mapInitialConfig).forEach((function(e){t._mapInitialConfig[e]?t.ctx.map[e].enable():t.ctx.map[e].disable()}))},Z.prototype.getInitialConfigValue=function(t){return void 0===this._mapInitialConfig[t]||this._mapInitialConfig[t]};var K=function(){for(var t=arguments,e={},n=0;n<arguments.length;n++){var o=t[n];for(var r in o)Q.call(o,r)&&(e[r]=o[r])}return e},Q=Object.prototype.hasOwnProperty;var tt=e(K),et=["mode","feature","mouse"];function nt(e){var n=null,o=null,r={onRemove:function(){return e.map.off("load",r.connect),clearInterval(o),r.removeLayers(),e.store.restoreMapConfig(),e.ui.removeButtons(),e.events.removeEventListeners(),e.ui.clearMapClasses(),e.boxZoomInitial&&e.map.boxZoom.enable(),e.map=null,e.container=null,e.store=null,n&&n.parentNode&&n.parentNode.removeChild(n),n=null,this},connect:function(){e.map.off("load",r.connect),clearInterval(o),r.addLayers(),e.store.storeMapConfig(),e.events.addEventListeners()},onAdd:function(i){var a=i.fire;return i.fire=function(t,e){var n=arguments;return 1===a.length&&1!==arguments.length&&(n=[tt({},{type:t},e)]),a.apply(i,n)},e.map=i,e.events=function(e){var n=Object.keys(e.options.modes).reduce((function(t,n){return t[n]=q(e.options.modes[n]),t}),{}),o={},r={},i={},a=null,s=null;i.drag=function(t,n){n({point:t.point,time:(new Date).getTime()})?(e.ui.queueMapClasses({mouse:d.DRAG}),s.drag(t)):t.originalEvent.stopPropagation()},i.mousedrag=function(t){i.drag(t,(function(t){return!P(o,t)}))},i.touchdrag=function(t){i.drag(t,(function(t){return!F(r,t)}))},i.mousemove=function(t){if(1===(void 0!==t.originalEvent.buttons?t.originalEvent.buttons:t.originalEvent.which))return i.mousedrag(t);var n=N(t,e);t.featureTarget=n,s.mousemove(t)},i.mousedown=function(t){o={time:(new Date).getTime(),point:t.point};var n=N(t,e);t.featureTarget=n,s.mousedown(t)},i.mouseup=function(t){var n=N(t,e);t.featureTarget=n,P(o,{point:t.point,time:(new Date).getTime()})?s.click(t):s.mouseup(t)},i.mouseout=function(t){s.mouseout(t)},i.touchstart=function(t){if(e.options.touchEnabled){r={time:(new Date).getTime(),point:t.point};var n=M.touch(t,null,e)[0];t.featureTarget=n,s.touchstart(t)}},i.touchmove=function(t){if(e.options.touchEnabled)return s.touchmove(t),i.touchdrag(t)},i.touchend=function(t){if(t.originalEvent.preventDefault(),e.options.touchEnabled){var n=M.touch(t,null,e)[0];t.featureTarget=n,F(r,{time:(new Date).getTime(),point:t.point})?s.tap(t):s.touchend(t)}};var u=function(t){return!(8===t||46===t||t>=48&&t<=57)};function c(o,r,i){void 0===i&&(i={}),s.stop();var u=n[o];if(void 0===u)throw new Error(o+" is not valid");a=o;var c=u(e,r);s=t(c,e),i.silent||e.map.fire(g.MODE_CHANGE,{mode:o}),e.store.setDirty(),e.store.render()}i.keydown=function(t){(t.srcElement||t.target).classList.contains("mapboxgl-canvas")&&(8!==t.keyCode&&46!==t.keyCode||!e.options.controls.trash?u(t.keyCode)?s.keydown(t):49===t.keyCode&&e.options.controls.point?c(h.DRAW_POINT):50===t.keyCode&&e.options.controls.line_string?c(h.DRAW_LINE_STRING):51===t.keyCode&&e.options.controls.polygon&&c(h.DRAW_POLYGON):(t.preventDefault(),s.trash()))},i.keyup=function(t){u(t.keyCode)&&s.keyup(t)},i.zoomend=function(){e.store.changeZoom()},i.data=function(t){if("style"===t.dataType){var n=e.setup,o=e.map,r=e.options,i=e.store;r.styles.some((function(t){return o.getLayer(t.id)}))||(n.addLayers(),i.setDirty(),i.render())}};var l={trash:!1,combineFeatures:!1,uncombineFeatures:!1};return{start:function(){a=e.options.defaultMode,s=t(n[a](e),e)},changeMode:c,actionable:function(t){var n=!1;Object.keys(t).forEach((function(e){if(void 0===l[e])throw new Error("Invalid action type");l[e]!==t[e]&&(n=!0),l[e]=t[e]})),n&&e.map.fire(g.ACTIONABLE,{actions:l})},currentModeName:function(){return a},currentModeRender:function(t,e){return s.render(t,e)},fire:function(t,e){i[t]&&i[t](e)},addEventListeners:function(){e.map.on("mousemove",i.mousemove),e.map.on("mousedown",i.mousedown),e.map.on("mouseup",i.mouseup),e.map.on("data",i.data),e.map.on("touchmove",i.touchmove),e.map.on("touchstart",i.touchstart),e.map.on("touchend",i.touchend),e.container.addEventListener("mouseout",i.mouseout),e.options.keybindings&&(e.container.addEventListener("keydown",i.keydown),e.container.addEventListener("keyup",i.keyup))},removeEventListeners:function(){e.map.off("mousemove",i.mousemove),e.map.off("mousedown",i.mousedown),e.map.off("mouseup",i.mouseup),e.map.off("data",i.data),e.map.off("touchmove",i.touchmove),e.map.off("touchstart",i.touchstart),e.map.off("touchend",i.touchend),e.container.removeEventListener("mouseout",i.mouseout),e.options.keybindings&&(e.container.removeEventListener("keydown",i.keydown),e.container.removeEventListener("keyup",i.keyup))},trash:function(t){s.trash(t)},combineFeatures:function(){s.combineFeatures()},uncombineFeatures:function(){s.uncombineFeatures()},getMode:function(){return a}}}(e),e.ui=function(t){var e={},n=null,o={mode:null,feature:null,mouse:null},r={mode:null,feature:null,mouse:null};function i(t){r=tt(r,t)}function a(){var e,n;if(t.container){var i=[],a=[];et.forEach((function(t){r[t]!==o[t]&&(i.push(t+"-"+o[t]),null!==r[t]&&a.push(t+"-"+r[t]))})),i.length>0&&(e=t.container.classList).remove.apply(e,i),a.length>0&&(n=t.container.classList).add.apply(n,a),o=tt(o,r)}}function s(t,e){void 0===e&&(e={});var o=document.createElement("button");return o.className=c.CONTROL_BUTTON+" "+e.className,o.setAttribute("title",e.title),e.container.appendChild(o),o.addEventListener("click",(function(o){if(o.preventDefault(),o.stopPropagation(),o.target===n)return u(),void e.onDeactivate();l(t),e.onActivate()}),!0),o}function u(){n&&(n.classList.remove(c.ACTIVE_BUTTON),n=null)}function l(t){u();var o=e[t];o&&o&&"trash"!==t&&(o.classList.add(c.ACTIVE_BUTTON),n=o)}return{setActiveButton:l,queueMapClasses:i,updateMapClasses:a,clearMapClasses:function(){i({mode:null,feature:null,mouse:null}),a()},addButtons:function(){var n=t.options.controls,o=document.createElement("div");return o.className=c.CONTROL_GROUP+" "+c.CONTROL_BASE,n?(n[p.LINE]&&(e[p.LINE]=s(p.LINE,{container:o,className:c.CONTROL_BUTTON_LINE,title:"LineString tool "+(t.options.keybindings?"(l)":""),onActivate:function(){return t.events.changeMode(h.DRAW_LINE_STRING)},onDeactivate:function(){return t.events.trash()}})),n[p.POLYGON]&&(e[p.POLYGON]=s(p.POLYGON,{container:o,className:c.CONTROL_BUTTON_POLYGON,title:"Polygon tool "+(t.options.keybindings?"(p)":""),onActivate:function(){return t.events.changeMode(h.DRAW_POLYGON)},onDeactivate:function(){return t.events.trash()}})),n[p.POINT]&&(e[p.POINT]=s(p.POINT,{container:o,className:c.CONTROL_BUTTON_POINT,title:"Marker tool "+(t.options.keybindings?"(m)":""),onActivate:function(){return t.events.changeMode(h.DRAW_POINT)},onDeactivate:function(){return t.events.trash()}})),n.trash&&(e.trash=s("trash",{container:o,className:c.CONTROL_BUTTON_TRASH,title:"Delete",onActivate:function(){t.events.trash()}})),n.combine_features&&(e.combine_features=s("combineFeatures",{container:o,className:c.CONTROL_BUTTON_COMBINE_FEATURES,title:"Combine",onActivate:function(){t.events.combineFeatures()}})),n.uncombine_features&&(e.uncombine_features=s("uncombineFeatures",{container:o,className:c.CONTROL_BUTTON_UNCOMBINE_FEATURES,title:"Uncombine",onActivate:function(){t.events.uncombineFeatures()}})),o):o},removeButtons:function(){Object.keys(e).forEach((function(t){var n=e[t];n.parentNode&&n.parentNode.removeChild(n),delete e[t]}))}}}(e),e.container=i.getContainer(),e.store=new Z(e),n=e.ui.addButtons(),e.options.boxSelect&&(e.boxZoomInitial=i.boxZoom.isEnabled(),i.boxZoom.disable(),i.dragPan.disable(),i.dragPan.enable()),i.loaded()?r.connect():(i.on("load",r.connect),o=setInterval((function(){i.loaded()&&r.connect()}),16)),e.events.start(),n},addLayers:function(){e.map.addSource(l.COLD,{data:{type:f.FEATURE_COLLECTION,features:[]},type:"geojson"}),e.map.addSource(l.HOT,{data:{type:f.FEATURE_COLLECTION,features:[]},type:"geojson"}),e.options.styles.forEach((function(t){e.map.addLayer(t)})),e.store.setDirty(!0),e.store.render()},removeLayers:function(){e.options.styles.forEach((function(t){e.map.getLayer(t.id)&&e.map.removeLayer(t.id)})),e.map.getSource(l.COLD)&&e.map.removeSource(l.COLD),e.map.getSource(l.HOT)&&e.map.removeSource(l.HOT)}};return e.setup=r,r}var ot=[{id:"gl-draw-polygon-fill-inactive",type:"fill",filter:["all",["==","active","false"],["==","$type","Polygon"],["!=","mode","static"]],paint:{"fill-color":"#3bb2d0","fill-outline-color":"#3bb2d0","fill-opacity":.1}},{id:"gl-draw-polygon-fill-active",type:"fill",filter:["all",["==","active","true"],["==","$type","Polygon"]],paint:{"fill-color":"#fbb03b","fill-outline-color":"#fbb03b","fill-opacity":.1}},{id:"gl-draw-polygon-midpoint",type:"circle",filter:["all",["==","$type","Point"],["==","meta","midpoint"]],paint:{"circle-radius":3,"circle-color":"#fbb03b"}},{id:"gl-draw-polygon-stroke-inactive",type:"line",filter:["all",["==","active","false"],["==","$type","Polygon"],["!=","mode","static"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#3bb2d0","line-width":2}},{id:"gl-draw-polygon-stroke-active",type:"line",filter:["all",["==","active","true"],["==","$type","Polygon"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#fbb03b","line-dasharray":[.2,2],"line-width":2}},{id:"gl-draw-line-inactive",type:"line",filter:["all",["==","active","false"],["==","$type","LineString"],["!=","mode","static"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#3bb2d0","line-width":2}},{id:"gl-draw-line-active",type:"line",filter:["all",["==","$type","LineString"],["==","active","true"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#fbb03b","line-dasharray":[.2,2],"line-width":2}},{id:"gl-draw-polygon-and-line-vertex-stroke-inactive",type:"circle",filter:["all",["==","meta","vertex"],["==","$type","Point"],["!=","mode","static"]],paint:{"circle-radius":5,"circle-color":"#fff"}},{id:"gl-draw-polygon-and-line-vertex-inactive",type:"circle",filter:["all",["==","meta","vertex"],["==","$type","Point"],["!=","mode","static"]],paint:{"circle-radius":3,"circle-color":"#fbb03b"}},{id:"gl-draw-point-point-stroke-inactive",type:"circle",filter:["all",["==","active","false"],["==","$type","Point"],["==","meta","feature"],["!=","mode","static"]],paint:{"circle-radius":5,"circle-opacity":1,"circle-color":"#fff"}},{id:"gl-draw-point-inactive",type:"circle",filter:["all",["==","active","false"],["==","$type","Point"],["==","meta","feature"],["!=","mode","static"]],paint:{"circle-radius":3,"circle-color":"#3bb2d0"}},{id:"gl-draw-point-stroke-active",type:"circle",filter:["all",["==","$type","Point"],["==","active","true"],["!=","meta","midpoint"]],paint:{"circle-radius":7,"circle-color":"#fff"}},{id:"gl-draw-point-active",type:"circle",filter:["all",["==","$type","Point"],["!=","meta","midpoint"],["==","active","true"]],paint:{"circle-radius":5,"circle-color":"#fbb03b"}},{id:"gl-draw-polygon-fill-static",type:"fill",filter:["all",["==","mode","static"],["==","$type","Polygon"]],paint:{"fill-color":"#404040","fill-outline-color":"#404040","fill-opacity":.1}},{id:"gl-draw-polygon-stroke-static",type:"line",filter:["all",["==","mode","static"],["==","$type","Polygon"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#404040","line-width":2}},{id:"gl-draw-line-static",type:"line",filter:["all",["==","mode","static"],["==","$type","LineString"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#404040","line-width":2}},{id:"gl-draw-point-static",type:"circle",filter:["all",["==","mode","static"],["==","$type","Point"]],paint:{"circle-radius":5,"circle-color":"#404040"}}];function rt(t){return function(e){var n=e.featureTarget;return!!n&&(!!n.properties&&n.properties.meta===t)}}function it(t){return!!t.originalEvent&&(!!t.originalEvent.shiftKey&&0===t.originalEvent.button)}function at(t){return!!t.featureTarget&&(!!t.featureTarget.properties&&(t.featureTarget.properties.active===m.ACTIVE&&t.featureTarget.properties.meta===v.FEATURE))}function st(t){return!!t.featureTarget&&(!!t.featureTarget.properties&&(t.featureTarget.properties.active===m.INACTIVE&&t.featureTarget.properties.meta===v.FEATURE))}function ut(t){return void 0===t.featureTarget}function ct(t){return!!t.featureTarget&&(!!t.featureTarget.properties&&t.featureTarget.properties.meta===v.FEATURE)}function lt(t){var e=t.featureTarget;return!!e&&(!!e.properties&&e.properties.meta===v.VERTEX)}function dt(t){return!!t.originalEvent&&!0===t.originalEvent.shiftKey}function pt(t){return 27===t.keyCode}function ft(t){return 13===t.keyCode}var ht=Object.freeze({__proto__:null,isOfMetaType:rt,isShiftMousedown:it,isActiveFeature:at,isInactiveFeature:st,noTarget:ut,isFeature:ct,isVertex:lt,isShiftDown:dt,isEscapeKey:pt,isEnterKey:ft,isTrue:function(){return!0}}),gt=yt;function yt(t,e){this.x=t,this.y=e}yt.prototype={clone:function(){return new yt(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,n=t.y-this.y;return e*e+n*n},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[0]*this.x+t[1]*this.y,n=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=n,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),n=Math.sin(t),o=e*this.x-n*this.y,r=n*this.x+e*this.y;return this.x=o,this.y=r,this},_rotateAround:function(t,e){var n=Math.cos(t),o=Math.sin(t),r=e.x+n*(this.x-e.x)-o*(this.y-e.y),i=e.y+o*(this.x-e.x)+n*(this.y-e.y);return this.x=r,this.y=i,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},yt.convert=function(t){return t instanceof yt?t:Array.isArray(t)?new yt(t[0],t[1]):t};var vt=e(gt);function mt(t,e){var n=e.getBoundingClientRect();return new vt(t.clientX-n.left-(e.clientLeft||0),t.clientY-n.top-(e.clientTop||0))}function _t(t,e,n,o){return{type:f.FEATURE,properties:{meta:v.VERTEX,parent:t,coord_path:n,active:o?m.ACTIVE:m.INACTIVE},geometry:{type:f.POINT,coordinates:e}}}function bt(t,e,n){var o=e.geometry.coordinates,r=n.geometry.coordinates;if(o[1]>85||o[1]<b||r[1]>85||r[1]<b)return null;var i={lng:(o[0]+r[0])/2,lat:(o[1]+r[1])/2};return{type:f.FEATURE,properties:{meta:v.MIDPOINT,parent:t,lng:i.lng,lat:i.lat,coord_path:n.properties.coord_path},geometry:{type:f.POINT,coordinates:[i.lng,i.lat]}}}function Et(t,e,n){void 0===e&&(e={}),void 0===n&&(n=null);var o,r=t.geometry,i=r.type,a=r.coordinates,s=t.properties&&t.properties.id,u=[];function c(t,n){var o="",r=null;t.forEach((function(t,i){var a=null!=n?n+"."+i:String(i),c=_t(s,t,a,l(a));if(e.midpoints&&r){var d=bt(s,r,c);d&&u.push(d)}r=c;var p=JSON.stringify(t);o!==p&&u.push(c),0===i&&(o=p)}))}function l(t){return!!e.selectedPaths&&-1!==e.selectedPaths.indexOf(t)}return i===f.POINT?u.push(_t(s,a,n,l(n))):i===f.POLYGON?a.forEach((function(t,e){c(t,null!==n?n+"."+e:String(e))})):i===f.LINE_STRING?c(a,n):0===i.indexOf(f.MULTI_PREFIX)&&(o=i.replace(f.MULTI_PREFIX,""),a.forEach((function(n,r){var i={type:f.FEATURE,properties:t.properties,geometry:{type:o,coordinates:n}};u=u.concat(Et(i,e,r))}))),u}var Tt={enable:function(t){setTimeout((function(){t.map&&t.map.doubleClickZoom&&t._ctx&&t._ctx.store&&t._ctx.store.getInitialConfigValue&&t._ctx.store.getInitialConfigValue("doubleClickZoom")&&t.map.doubleClickZoom.enable()}),0)},disable:function(t){setTimeout((function(){t.map&&t.map.doubleClickZoom&&t.map.doubleClickZoom.disable()}),0)}},Ct={exports:{}},Ot=function(t){if(!t||!t.type)return null;var e=St[t.type];if(!e)return null;if("geometry"===e)return{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:t}]};if("feature"===e)return{type:"FeatureCollection",features:[t]};if("featurecollection"===e)return t},St={Point:"geometry",MultiPoint:"geometry",LineString:"geometry",MultiLineString:"geometry",Polygon:"geometry",MultiPolygon:"geometry",GeometryCollection:"geometry",Feature:"feature",FeatureCollection:"featurecollection"};var It=e(Ot);var xt=Object.freeze({__proto__:null,default:function t(e){switch(e&&e.type||null){case"FeatureCollection":return e.features=e.features.reduce((function(e,n){return e.concat(t(n))}),[]),e;case"Feature":return e.geometry?t(e.geometry).map((function(t){var n={type:"Feature",properties:JSON.parse(JSON.stringify(e.properties)),geometry:t};return void 0!==e.id&&(n.id=e.id),n})):[e];case"MultiPoint":return e.coordinates.map((function(t){return{type:"Point",coordinates:t}}));case"MultiPolygon":return e.coordinates.map((function(t){return{type:"Polygon",coordinates:t}}));case"MultiLineString":return e.coordinates.map((function(t){return{type:"LineString",coordinates:t}}));case"GeometryCollection":return e.geometries.map(t).reduce((function(t,e){return t.concat(e)}),[]);case"Point":case"Polygon":case"LineString":return[e]}}}),Mt=Ot,Lt=n(xt),Nt=function(t){return function t(e){if(Array.isArray(e)&&e.length&&"number"==typeof e[0])return[e];return e.reduce((function(e,n){return Array.isArray(n)&&Array.isArray(n[0])?e.concat(t(n)):(e.push(n),e)}),[])}(t)};Lt instanceof Function||(Lt=Lt.default);var At={exports:{}},Pt=At.exports=function(t){return new Ft(t)};function Ft(t){this.value=t}function wt(t,e,n){var o=[],r=[],i=!0;return function t(a){var s=n?Rt(a):a,u={},c=!0,l={node:s,node_:a,path:[].concat(o),parent:r[r.length-1],parents:r,key:o.slice(-1)[0],isRoot:0===o.length,level:o.length,circular:null,update:function(t,e){l.isRoot||(l.parent.node[l.key]=t),l.node=t,e&&(c=!1)},delete:function(t){delete l.parent.node[l.key],t&&(c=!1)},remove:function(t){Ut(l.parent.node)?l.parent.node.splice(l.key,1):delete l.parent.node[l.key],t&&(c=!1)},keys:null,before:function(t){u.before=t},after:function(t){u.after=t},pre:function(t){u.pre=t},post:function(t){u.post=t},stop:function(){i=!1},block:function(){c=!1}};if(!i)return l;function d(){if("object"==typeof l.node&&null!==l.node){l.keys&&l.node_===l.node||(l.keys=kt(l.node)),l.isLeaf=0==l.keys.length;for(var t=0;t<r.length;t++)if(r[t].node_===a){l.circular=r[t];break}}else l.isLeaf=!0,l.keys=null;l.notLeaf=!l.isLeaf,l.notRoot=!l.isRoot}d();var p=e.call(l,l.node);return void 0!==p&&l.update&&l.update(p),u.before&&u.before.call(l,l.node),c?("object"!=typeof l.node||null===l.node||l.circular||(r.push(l),d(),jt(l.keys,(function(e,r){o.push(e),u.pre&&u.pre.call(l,l.node[e],e);var i=t(l.node[e]);n&&Vt.call(l.node,e)&&(l.node[e]=i.node),i.isLast=r==l.keys.length-1,i.isFirst=0==r,u.post&&u.post.call(l,i),o.pop()})),r.pop()),u.after&&u.after.call(l,l.node),l):l}(t).node}function Rt(t){if("object"==typeof t&&null!==t){var e;if(Ut(t))e=[];else if("[object Date]"===Dt(t))e=new Date(t.getTime?t.getTime():t);else if(function(t){return"[object RegExp]"===Dt(t)}(t))e=new RegExp(t);else if(function(t){return"[object Error]"===Dt(t)}(t))e={message:t.message};else if(function(t){return"[object Boolean]"===Dt(t)}(t))e=new Boolean(t);else if(function(t){return"[object Number]"===Dt(t)}(t))e=new Number(t);else if(function(t){return"[object String]"===Dt(t)}(t))e=new String(t);else if(Object.create&&Object.getPrototypeOf)e=Object.create(Object.getPrototypeOf(t));else if(t.constructor===Object)e={};else{var n=t.constructor&&t.constructor.prototype||t.__proto__||{},o=function(){};o.prototype=n,e=new o}return jt(kt(t),(function(n){e[n]=t[n]})),e}return t}Ft.prototype.get=function(t){for(var e=this.value,n=0;n<t.length;n++){var o=t[n];if(!e||!Vt.call(e,o)){e=void 0;break}e=e[o]}return e},Ft.prototype.has=function(t){for(var e=this.value,n=0;n<t.length;n++){var o=t[n];if(!e||!Vt.call(e,o))return!1;e=e[o]}return!0},Ft.prototype.set=function(t,e){for(var n=this.value,o=0;o<t.length-1;o++){var r=t[o];Vt.call(n,r)||(n[r]={}),n=n[r]}return n[t[o]]=e,e},Ft.prototype.map=function(t){return wt(this.value,t,!0)},Ft.prototype.forEach=function(t){return this.value=wt(this.value,t,!1),this.value},Ft.prototype.reduce=function(t,e){var n=1===arguments.length,o=n?this.value:e;return this.forEach((function(e){this.isRoot&&n||(o=t.call(this,o,e))})),o},Ft.prototype.paths=function(){var t=[];return this.forEach((function(e){t.push(this.path)})),t},Ft.prototype.nodes=function(){var t=[];return this.forEach((function(e){t.push(this.node)})),t},Ft.prototype.clone=function(){var t=[],e=[];return function n(o){for(var r=0;r<t.length;r++)if(t[r]===o)return e[r];if("object"==typeof o&&null!==o){var i=Rt(o);return t.push(o),e.push(i),jt(kt(o),(function(t){i[t]=n(o[t])})),t.pop(),e.pop(),i}return o}(this.value)};var kt=Object.keys||function(t){var e=[];for(var n in t)e.push(n);return e};function Dt(t){return Object.prototype.toString.call(t)}var Ut=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},jt=function(t,e){if(t.forEach)return t.forEach(e);for(var n=0;n<t.length;n++)e(t[n],n,t)};jt(kt(Ft.prototype),(function(t){Pt[t]=function(e){var n=[].slice.call(arguments,1),o=new Ft(e);return o[t].apply(o,n)}}));var Vt=Object.hasOwnProperty||function(t,e){return e in t},Bt=At.exports,Gt=Jt;function Jt(t){if(!(this instanceof Jt))return new Jt(t);this._bbox=t||[1/0,1/0,-1/0,-1/0],this._valid=!!t}Jt.prototype.include=function(t){return this._valid=!0,this._bbox[0]=Math.min(this._bbox[0],t[0]),this._bbox[1]=Math.min(this._bbox[1],t[1]),this._bbox[2]=Math.max(this._bbox[2],t[0]),this._bbox[3]=Math.max(this._bbox[3],t[1]),this},Jt.prototype.equals=function(t){var e;return e=t instanceof Jt?t.bbox():t,this._bbox[0]==e[0]&&this._bbox[1]==e[1]&&this._bbox[2]==e[2]&&this._bbox[3]==e[3]},Jt.prototype.center=function(t){return this._valid?[(this._bbox[0]+this._bbox[2])/2,(this._bbox[1]+this._bbox[3])/2]:null},Jt.prototype.union=function(t){var e;return this._valid=!0,e=t instanceof Jt?t.bbox():t,this._bbox[0]=Math.min(this._bbox[0],e[0]),this._bbox[1]=Math.min(this._bbox[1],e[1]),this._bbox[2]=Math.max(this._bbox[2],e[2]),this._bbox[3]=Math.max(this._bbox[3],e[3]),this},Jt.prototype.bbox=function(){return this._valid?this._bbox:null},Jt.prototype.contains=function(t){if(!t)return this._fastContains();if(!this._valid)return null;var e=t[0],n=t[1];return this._bbox[0]<=e&&this._bbox[1]<=n&&this._bbox[2]>=e&&this._bbox[3]>=n},Jt.prototype.intersect=function(t){return this._valid?(e=t instanceof Jt?t.bbox():t,!(this._bbox[0]>e[2]||this._bbox[2]<e[0]||this._bbox[3]<e[1]||this._bbox[1]>e[3])):null;var e},Jt.prototype._fastContains=function(){if(!this._valid)return new Function("return null;");var t="return "+this._bbox[0]+"<= ll[0] &&"+this._bbox[1]+"<= ll[1] &&"+this._bbox[2]+">= ll[0] &&"+this._bbox[3]+">= ll[1]";return new Function("ll",t)},Jt.prototype.polygon=function(){return this._valid?{type:"Polygon",coordinates:[[[this._bbox[0],this._bbox[1]],[this._bbox[2],this._bbox[1]],[this._bbox[2],this._bbox[3]],[this._bbox[0],this._bbox[3]],[this._bbox[0],this._bbox[1]]]]}:null};var zt=function(t){if(!t)return[];var e=Lt(Mt(t)),n=[];return e.features.forEach((function(t){t.geometry&&(n=n.concat(Nt(t.geometry.coordinates)))})),n},Yt=Bt,$t=Gt,qt={features:["FeatureCollection"],coordinates:["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon"],geometry:["Feature"],geometries:["GeometryCollection"]},Ht=Object.keys(qt);function Xt(t){for(var e=$t(),n=zt(t),o=0;o<n.length;o++)e.include(n[o]);return e}Ct.exports=function(t){return Xt(t).bbox()},Ct.exports.polygon=function(t){return Xt(t).polygon()},Ct.exports.bboxify=function(t){return Yt(t).map((function(t){t&&(Ht.some((function(e){return!!t[e]&&-1!==qt[e].indexOf(t.type)}))&&(t.bbox=Xt(t).bbox(),this.update(t)))}))};var Zt=e(Ct.exports),Wt=-90;function Kt(t,e){var n=Wt,o=90,r=Wt,i=90,a=270,s=-270;t.forEach((function(t){var e=Zt(t),u=e[1],c=e[3],l=e[0],d=e[2];u>n&&(n=u),c<o&&(o=c),c>r&&(r=c),u<i&&(i=u),l<a&&(a=l),d>s&&(s=d)}));var u=e;return n+u.lat>85&&(u.lat=85-n),r+u.lat>90&&(u.lat=90-r),o+u.lat<-85&&(u.lat=-85-o),i+u.lat<Wt&&(u.lat=Wt-i),a+u.lng<=-270&&(u.lng+=360*Math.ceil(Math.abs(u.lng)/360)),s+u.lng>=270&&(u.lng-=360*Math.ceil(Math.abs(u.lng)/360)),u}function Qt(t,e){var n=Kt(t.map((function(t){return t.toGeoJSON()})),e);t.forEach((function(t){var e,o=t.getCoordinates(),r=function(t){var e={lng:t[0]+n.lng,lat:t[1]+n.lat};return[e.lng,e.lat]},i=function(t){return t.map((function(t){return r(t)}))};t.type===f.POINT?e=r(o):t.type===f.LINE_STRING||t.type===f.MULTI_POINT?e=o.map(r):t.type===f.POLYGON||t.type===f.MULTI_LINE_STRING?e=o.map(i):t.type===f.MULTI_POLYGON&&(e=o.map((function(t){return t.map((function(t){return i(t)}))}))),t.incomingCoords(e)}))}var te={onSetup:function(t){var e=this,n={dragMoveLocation:null,boxSelectStartLocation:null,boxSelectElement:void 0,boxSelecting:!1,canBoxSelect:!1,dragMoving:!1,canDragMove:!1,initiallySelectedFeatureIds:t.featureIds||[]};return this.setSelected(n.initiallySelectedFeatureIds.filter((function(t){return void 0!==e.getFeature(t)}))),this.fireActionable(),this.setActionableState({combineFeatures:!0,uncombineFeatures:!0,trash:!0}),n},fireUpdate:function(){this.map.fire(g.UPDATE,{action:y.MOVE,features:this.getSelected().map((function(t){return t.toGeoJSON()}))})},fireActionable:function(){var t=this,e=this.getSelected(),n=e.filter((function(e){return t.isInstanceOf("MultiFeature",e)})),o=!1;if(e.length>1){o=!0;var r=e[0].type.replace("Multi","");e.forEach((function(t){t.type.replace("Multi","")!==r&&(o=!1)}))}var i=n.length>0,a=e.length>0;this.setActionableState({combineFeatures:o,uncombineFeatures:i,trash:a})},getUniqueIds:function(t){return t.length?t.map((function(t){return t.properties.id})).filter((function(t){return void 0!==t})).reduce((function(t,e){return t.add(e),t}),new I).values():[]},stopExtendedInteractions:function(t){t.boxSelectElement&&(t.boxSelectElement.parentNode&&t.boxSelectElement.parentNode.removeChild(t.boxSelectElement),t.boxSelectElement=null),this.map.dragPan.enable(),t.boxSelecting=!1,t.canBoxSelect=!1,t.dragMoving=!1,t.canDragMove=!1},onStop:function(){Tt.enable(this)},onMouseMove:function(t,e){return ct(e)&&t.dragMoving&&this.fireUpdate(),this.stopExtendedInteractions(t),!0},onMouseOut:function(t){return!t.dragMoving||this.fireUpdate()}};te.onTap=te.onClick=function(t,e){return ut(e)?this.clickAnywhere(t,e):rt(v.VERTEX)(e)?this.clickOnVertex(t,e):ct(e)?this.clickOnFeature(t,e):void 0},te.clickAnywhere=function(t){var e=this,n=this.getSelectedIds();n.length&&(this.clearSelectedFeatures(),n.forEach((function(t){return e.doRender(t)}))),Tt.enable(this),this.stopExtendedInteractions(t)},te.clickOnVertex=function(t,e){this.changeMode(h.DIRECT_SELECT,{featureId:e.featureTarget.properties.parent,coordPath:e.featureTarget.properties.coord_path,startPos:e.lngLat}),this.updateUIClasses({mouse:d.MOVE})},te.startOnActiveFeature=function(t,e){this.stopExtendedInteractions(t),this.map.dragPan.disable(),this.doRender(e.featureTarget.properties.id),t.canDragMove=!0,t.dragMoveLocation=e.lngLat},te.clickOnFeature=function(t,e){var n=this;Tt.disable(this),this.stopExtendedInteractions(t);var o=dt(e),r=this.getSelectedIds(),i=e.featureTarget.properties.id,a=this.isSelected(i);if(!o&&a&&this.getFeature(i).type!==f.POINT)return this.changeMode(h.DIRECT_SELECT,{featureId:i});a&&o?(this.deselect(i),this.updateUIClasses({mouse:d.POINTER}),1===r.length&&Tt.enable(this)):!a&&o?(this.select(i),this.updateUIClasses({mouse:d.MOVE})):a||o||(r.forEach((function(t){return n.doRender(t)})),this.setSelected(i),this.updateUIClasses({mouse:d.MOVE})),this.doRender(i)},te.onMouseDown=function(t,e){return at(e)?this.startOnActiveFeature(t,e):this.drawConfig.boxSelect&&it(e)?this.startBoxSelect(t,e):void 0},te.startBoxSelect=function(t,e){this.stopExtendedInteractions(t),this.map.dragPan.disable(),t.boxSelectStartLocation=mt(e.originalEvent,this.map.getContainer()),t.canBoxSelect=!0},te.onTouchStart=function(t,e){if(at(e))return this.startOnActiveFeature(t,e)},te.onDrag=function(t,e){return t.canDragMove?this.dragMove(t,e):this.drawConfig.boxSelect&&t.canBoxSelect?this.whileBoxSelect(t,e):void 0},te.whileBoxSelect=function(t,e){t.boxSelecting=!0,this.updateUIClasses({mouse:d.ADD}),t.boxSelectElement||(t.boxSelectElement=document.createElement("div"),t.boxSelectElement.classList.add(c.BOX_SELECT),this.map.getContainer().appendChild(t.boxSelectElement));var n=mt(e.originalEvent,this.map.getContainer()),o=Math.min(t.boxSelectStartLocation.x,n.x),r=Math.max(t.boxSelectStartLocation.x,n.x),i=Math.min(t.boxSelectStartLocation.y,n.y),a=Math.max(t.boxSelectStartLocation.y,n.y),s="translate("+o+"px, "+i+"px)";t.boxSelectElement.style.transform=s,t.boxSelectElement.style.WebkitTransform=s,t.boxSelectElement.style.width=r-o+"px",t.boxSelectElement.style.height=a-i+"px"},te.dragMove=function(t,e){t.dragMoving=!0,e.originalEvent.stopPropagation();var n={lng:e.lngLat.lng-t.dragMoveLocation.lng,lat:e.lngLat.lat-t.dragMoveLocation.lat};Qt(this.getSelected(),n),t.dragMoveLocation=e.lngLat},te.onTouchEnd=te.onMouseUp=function(t,e){var n=this;if(t.dragMoving)this.fireUpdate();else if(t.boxSelecting){var o=[t.boxSelectStartLocation,mt(e.originalEvent,this.map.getContainer())],r=this.featuresAt(null,o,"click"),i=this.getUniqueIds(r).filter((function(t){return!n.isSelected(t)}));i.length&&(this.select(i),i.forEach((function(t){return n.doRender(t)})),this.updateUIClasses({mouse:d.MOVE}))}this.stopExtendedInteractions(t)},te.toDisplayFeatures=function(t,e,n){e.properties.active=this.isSelected(e.properties.id)?m.ACTIVE:m.INACTIVE,n(e),this.fireActionable(),e.properties.active===m.ACTIVE&&e.geometry.type!==f.POINT&&Et(e).forEach(n)},te.onTrash=function(){this.deleteFeature(this.getSelectedIds()),this.fireActionable()},te.onCombineFeatures=function(){var t=this.getSelected();if(!(0===t.length||t.length<2)){for(var e=[],n=[],o=t[0].type.replace("Multi",""),r=0;r<t.length;r++){var i=t[r];if(i.type.replace("Multi","")!==o)return;i.type.includes("Multi")?i.getCoordinates().forEach((function(t){e.push(t)})):e.push(i.getCoordinates()),n.push(i.toGeoJSON())}if(n.length>1){var a=this.newFeature({type:f.FEATURE,properties:n[0].properties,geometry:{type:"Multi"+o,coordinates:e}});this.addFeature(a),this.deleteFeature(this.getSelectedIds(),{silent:!0}),this.setSelected([a.id]),this.map.fire(g.COMBINE_FEATURES,{createdFeatures:[a.toGeoJSON()],deletedFeatures:n})}this.fireActionable()}},te.onUncombineFeatures=function(){var t=this,e=this.getSelected();if(0!==e.length){for(var n=[],o=[],r=function(r){var i=e[r];t.isInstanceOf("MultiFeature",i)&&(i.getFeatures().forEach((function(e){t.addFeature(e),e.properties=i.properties,n.push(e.toGeoJSON()),t.select([e.id])})),t.deleteFeature(i.id,{silent:!0}),o.push(i.toGeoJSON()))},i=0;i<e.length;i++)r(i);n.length>1&&this.map.fire(g.UNCOMBINE_FEATURES,{createdFeatures:n,deletedFeatures:o}),this.fireActionable()}};var ee=rt(v.VERTEX),ne=rt(v.MIDPOINT),oe={fireUpdate:function(){this.map.fire(g.UPDATE,{action:y.CHANGE_COORDINATES,features:this.getSelected().map((function(t){return t.toGeoJSON()}))})},fireActionable:function(t){this.setActionableState({combineFeatures:!1,uncombineFeatures:!1,trash:t.selectedCoordPaths.length>0})},startDragging:function(t,e){this.map.dragPan.disable(),t.canDragMove=!0,t.dragMoveLocation=e.lngLat},stopDragging:function(t){this.map.dragPan.enable(),t.dragMoving=!1,t.canDragMove=!1,t.dragMoveLocation=null},onVertex:function(t,e){this.startDragging(t,e);var n=e.featureTarget.properties,o=t.selectedCoordPaths.indexOf(n.coord_path);dt(e)||-1!==o?dt(e)&&-1===o&&t.selectedCoordPaths.push(n.coord_path):t.selectedCoordPaths=[n.coord_path];var r=this.pathsToCoordinates(t.featureId,t.selectedCoordPaths);this.setSelectedCoordinates(r)},onMidpoint:function(t,e){this.startDragging(t,e);var n=e.featureTarget.properties;t.feature.addCoordinate(n.coord_path,n.lng,n.lat),this.fireUpdate(),t.selectedCoordPaths=[n.coord_path]},pathsToCoordinates:function(t,e){return e.map((function(e){return{feature_id:t,coord_path:e}}))},onFeature:function(t,e){0===t.selectedCoordPaths.length?this.startDragging(t,e):this.stopDragging(t)},dragFeature:function(t,e,n){Qt(this.getSelected(),n),t.dragMoveLocation=e.lngLat},dragVertex:function(t,e,n){for(var o=t.selectedCoordPaths.map((function(e){return t.feature.getCoordinate(e)})),r=Kt(o.map((function(t){return{type:f.FEATURE,properties:{},geometry:{type:f.POINT,coordinates:t}}})),n),i=0;i<o.length;i++){var a=o[i];t.feature.updateCoordinate(t.selectedCoordPaths[i],a[0]+r.lng,a[1]+r.lat)}},clickNoTarget:function(){this.changeMode(h.SIMPLE_SELECT)},clickInactive:function(){this.changeMode(h.SIMPLE_SELECT)},clickActiveFeature:function(t){t.selectedCoordPaths=[],this.clearSelectedCoordinates(),t.feature.changed()},onSetup:function(t){var e=t.featureId,n=this.getFeature(e);if(!n)throw new Error("You must provide a featureId to enter direct_select mode");if(n.type===f.POINT)throw new TypeError("direct_select mode doesn't handle point features");var o={featureId:e,feature:n,dragMoveLocation:t.startPos||null,dragMoving:!1,canDragMove:!1,selectedCoordPaths:t.coordPath?[t.coordPath]:[]};return this.setSelectedCoordinates(this.pathsToCoordinates(e,o.selectedCoordPaths)),this.setSelected(e),Tt.disable(this),this.setActionableState({trash:!0}),o},onStop:function(){Tt.enable(this),this.clearSelectedCoordinates()},toDisplayFeatures:function(t,e,n){t.featureId===e.properties.id?(e.properties.active=m.ACTIVE,n(e),Et(e,{map:this.map,midpoints:!0,selectedPaths:t.selectedCoordPaths}).forEach(n)):(e.properties.active=m.INACTIVE,n(e)),this.fireActionable(t)},onTrash:function(t){t.selectedCoordPaths.sort((function(t,e){return e.localeCompare(t,"en",{numeric:!0})})).forEach((function(e){return t.feature.removeCoordinate(e)})),this.fireUpdate(),t.selectedCoordPaths=[],this.clearSelectedCoordinates(),this.fireActionable(t),!1===t.feature.isValid()&&(this.deleteFeature([t.featureId]),this.changeMode(h.SIMPLE_SELECT,{}))},onMouseMove:function(t,e){var n=at(e),o=ee(e),r=ne(e),i=0===t.selectedCoordPaths.length;return n&&i||o&&!i?this.updateUIClasses({mouse:d.MOVE}):this.updateUIClasses({mouse:d.NONE}),(o||n||r)&&t.dragMoving&&this.fireUpdate(),this.stopDragging(t),!0},onMouseOut:function(t){return t.dragMoving&&this.fireUpdate(),!0}};oe.onTouchStart=oe.onMouseDown=function(t,e){return ee(e)?this.onVertex(t,e):at(e)?this.onFeature(t,e):ne(e)?this.onMidpoint(t,e):void 0},oe.onDrag=function(t,e){if(!0===t.canDragMove){t.dragMoving=!0,e.originalEvent.stopPropagation();var n={lng:e.lngLat.lng-t.dragMoveLocation.lng,lat:e.lngLat.lat-t.dragMoveLocation.lat};t.selectedCoordPaths.length>0?this.dragVertex(t,e,n):this.dragFeature(t,e,n),t.dragMoveLocation=e.lngLat}},oe.onClick=function(t,e){return ut(e)?this.clickNoTarget(t,e):at(e)?this.clickActiveFeature(t,e):st(e)?this.clickInactive(t,e):void this.stopDragging(t)},oe.onTap=function(t,e){return ut(e)?this.clickNoTarget(t,e):at(e)?this.clickActiveFeature(t,e):st(e)?this.clickInactive(t,e):void 0},oe.onTouchEnd=oe.onMouseUp=function(t){t.dragMoving&&this.fireUpdate(),this.stopDragging(t)};var re={};function ie(t,e){return!!t.lngLat&&(t.lngLat.lng===e[0]&&t.lngLat.lat===e[1])}re.onSetup=function(){var t=this.newFeature({type:f.FEATURE,properties:{},geometry:{type:f.POINT,coordinates:[]}});return this.addFeature(t),this.clearSelectedFeatures(),this.updateUIClasses({mouse:d.ADD}),this.activateUIButton(p.POINT),this.setActionableState({trash:!0}),{point:t}},re.stopDrawingAndRemove=function(t){this.deleteFeature([t.point.id],{silent:!0}),this.changeMode(h.SIMPLE_SELECT)},re.onTap=re.onClick=function(t,e){this.updateUIClasses({mouse:d.MOVE}),t.point.updateCoordinate("",e.lngLat.lng,e.lngLat.lat),this.map.fire(g.CREATE,{features:[t.point.toGeoJSON()]}),this.changeMode(h.SIMPLE_SELECT,{featureIds:[t.point.id]})},re.onStop=function(t){this.activateUIButton(),t.point.getCoordinate().length||this.deleteFeature([t.point.id],{silent:!0})},re.toDisplayFeatures=function(t,e,n){var o=e.properties.id===t.point.id;if(e.properties.active=o?m.ACTIVE:m.INACTIVE,!o)return n(e)},re.onTrash=re.stopDrawingAndRemove,re.onKeyUp=function(t,e){if(pt(e)||ft(e))return this.stopDrawingAndRemove(t,e)};var ae={onSetup:function(){var t=this.newFeature({type:f.FEATURE,properties:{},geometry:{type:f.POLYGON,coordinates:[[]]}});return this.addFeature(t),this.clearSelectedFeatures(),Tt.disable(this),this.updateUIClasses({mouse:d.ADD}),this.activateUIButton(p.POLYGON),this.setActionableState({trash:!0}),{polygon:t,currentVertexPosition:0}},clickAnywhere:function(t,e){if(t.currentVertexPosition>0&&ie(e,t.polygon.coordinates[0][t.currentVertexPosition-1]))return this.changeMode(h.SIMPLE_SELECT,{featureIds:[t.polygon.id]});this.updateUIClasses({mouse:d.ADD}),t.polygon.updateCoordinate("0."+t.currentVertexPosition,e.lngLat.lng,e.lngLat.lat),t.currentVertexPosition++,t.polygon.updateCoordinate("0."+t.currentVertexPosition,e.lngLat.lng,e.lngLat.lat)},clickOnVertex:function(t){return this.changeMode(h.SIMPLE_SELECT,{featureIds:[t.polygon.id]})},onMouseMove:function(t,e){t.polygon.updateCoordinate("0."+t.currentVertexPosition,e.lngLat.lng,e.lngLat.lat),lt(e)&&this.updateUIClasses({mouse:d.POINTER})}};ae.onTap=ae.onClick=function(t,e){return lt(e)?this.clickOnVertex(t,e):this.clickAnywhere(t,e)},ae.onKeyUp=function(t,e){pt(e)?(this.deleteFeature([t.polygon.id],{silent:!0}),this.changeMode(h.SIMPLE_SELECT)):ft(e)&&this.changeMode(h.SIMPLE_SELECT,{featureIds:[t.polygon.id]})},ae.onStop=function(t){this.updateUIClasses({mouse:d.NONE}),Tt.enable(this),this.activateUIButton(),void 0!==this.getFeature(t.polygon.id)&&(t.polygon.removeCoordinate("0."+t.currentVertexPosition),t.polygon.isValid()?this.map.fire(g.CREATE,{features:[t.polygon.toGeoJSON()]}):(this.deleteFeature([t.polygon.id],{silent:!0}),this.changeMode(h.SIMPLE_SELECT,{},{silent:!0})))},ae.toDisplayFeatures=function(t,e,n){var o=e.properties.id===t.polygon.id;if(e.properties.active=o?m.ACTIVE:m.INACTIVE,!o)return n(e);if(0!==e.geometry.coordinates.length){var r=e.geometry.coordinates[0].length;if(!(r<3)){if(e.properties.meta=v.FEATURE,n(_t(t.polygon.id,e.geometry.coordinates[0][0],"0.0",!1)),r>3){var i=e.geometry.coordinates[0].length-3;n(_t(t.polygon.id,e.geometry.coordinates[0][i],"0."+i,!1))}if(r<=4){var a=[[e.geometry.coordinates[0][0][0],e.geometry.coordinates[0][0][1]],[e.geometry.coordinates[0][1][0],e.geometry.coordinates[0][1][1]]];if(n({type:f.FEATURE,properties:e.properties,geometry:{coordinates:a,type:f.LINE_STRING}}),3===r)return}return n(e)}}},ae.onTrash=function(t){this.deleteFeature([t.polygon.id],{silent:!0}),this.changeMode(h.SIMPLE_SELECT)};var se={onSetup:function(t){var e,n,o=(t=t||{}).featureId,r="forward";if(o){if(!(e=this.getFeature(o)))throw new Error("Could not find a feature with the provided featureId");var i=t.from;if(i&&"Feature"===i.type&&i.geometry&&"Point"===i.geometry.type&&(i=i.geometry),i&&"Point"===i.type&&i.coordinates&&2===i.coordinates.length&&(i=i.coordinates),!i||!Array.isArray(i))throw new Error("Please use the `from` property to indicate which point to continue the line from");var a=e.coordinates.length-1;if(e.coordinates[a][0]===i[0]&&e.coordinates[a][1]===i[1])n=a+1,e.addCoordinate.apply(e,[n].concat(e.coordinates[a]));else{if(e.coordinates[0][0]!==i[0]||e.coordinates[0][1]!==i[1])throw new Error("`from` should match the point at either the start or the end of the provided LineString");r="backwards",n=0,e.addCoordinate.apply(e,[n].concat(e.coordinates[0]))}}else e=this.newFeature({type:f.FEATURE,properties:{},geometry:{type:f.LINE_STRING,coordinates:[]}}),n=0,this.addFeature(e);return this.clearSelectedFeatures(),Tt.disable(this),this.updateUIClasses({mouse:d.ADD}),this.activateUIButton(p.LINE),this.setActionableState({trash:!0}),{line:e,currentVertexPosition:n,direction:r}},clickAnywhere:function(t,e){if(t.currentVertexPosition>0&&ie(e,t.line.coordinates[t.currentVertexPosition-1])||"backwards"===t.direction&&ie(e,t.line.coordinates[t.currentVertexPosition+1]))return this.changeMode(h.SIMPLE_SELECT,{featureIds:[t.line.id]});this.updateUIClasses({mouse:d.ADD}),t.line.updateCoordinate(t.currentVertexPosition,e.lngLat.lng,e.lngLat.lat),"forward"===t.direction?(t.currentVertexPosition++,t.line.updateCoordinate(t.currentVertexPosition,e.lngLat.lng,e.lngLat.lat)):t.line.addCoordinate(0,e.lngLat.lng,e.lngLat.lat)},clickOnVertex:function(t){return this.changeMode(h.SIMPLE_SELECT,{featureIds:[t.line.id]})},onMouseMove:function(t,e){t.line.updateCoordinate(t.currentVertexPosition,e.lngLat.lng,e.lngLat.lat),lt(e)&&this.updateUIClasses({mouse:d.POINTER})}};se.onTap=se.onClick=function(t,e){if(lt(e))return this.clickOnVertex(t,e);this.clickAnywhere(t,e)},se.onKeyUp=function(t,e){ft(e)?this.changeMode(h.SIMPLE_SELECT,{featureIds:[t.line.id]}):pt(e)&&(this.deleteFeature([t.line.id],{silent:!0}),this.changeMode(h.SIMPLE_SELECT))},se.onStop=function(t){Tt.enable(this),this.activateUIButton(),void 0!==this.getFeature(t.line.id)&&(t.line.removeCoordinate(""+t.currentVertexPosition),t.line.isValid()?this.map.fire(g.CREATE,{features:[t.line.toGeoJSON()]}):(this.deleteFeature([t.line.id],{silent:!0}),this.changeMode(h.SIMPLE_SELECT,{},{silent:!0})))},se.onTrash=function(t){this.deleteFeature([t.line.id],{silent:!0}),this.changeMode(h.SIMPLE_SELECT)},se.toDisplayFeatures=function(t,e,n){var o=e.properties.id===t.line.id;if(e.properties.active=o?m.ACTIVE:m.INACTIVE,!o)return n(e);e.geometry.coordinates.length<2||(e.properties.meta=v.FEATURE,n(_t(t.line.id,e.geometry.coordinates["forward"===t.direction?e.geometry.coordinates.length-2:1],""+("forward"===t.direction?e.geometry.coordinates.length-2:1),!1)),n(e))};var ue={simple_select:te,direct_select:oe,draw_point:re,draw_polygon:ae,draw_line_string:se},ce={defaultMode:h.SIMPLE_SELECT,keybindings:!0,touchEnabled:!0,clickBuffer:2,touchBuffer:25,boxSelect:!0,displayControlsDefault:!0,styles:ot,modes:ue,controls:{},userProperties:!1},le={point:!0,line_string:!0,polygon:!0,trash:!0,combine_features:!0,uncombine_features:!0},de={point:!1,line_string:!1,polygon:!1,trash:!1,combine_features:!1,uncombine_features:!1};function pe(t,e){return t.map((function(t){return t.source?t:tt(t,{id:t.id+"."+e,source:"hot"===e?l.HOT:l.COLD})}))}var fe={exports:{}};!function(t,e){var n="__lodash_hash_undefined__",o=9007199254740991,r="[object Arguments]",i="[object Array]",a="[object Boolean]",s="[object Date]",u="[object Error]",c="[object Function]",l="[object Map]",d="[object Number]",p="[object Object]",f="[object Promise]",h="[object RegExp]",g="[object Set]",y="[object String]",v="[object Symbol]",m="[object WeakMap]",_="[object ArrayBuffer]",b="[object DataView]",E=/^\[object .+?Constructor\]$/,T=/^(?:0|[1-9]\d*)$/,C={};C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C[r]=C[i]=C[_]=C[a]=C[b]=C[s]=C[u]=C[c]=C[l]=C[d]=C[p]=C[h]=C[g]=C[y]=C[m]=!1;var O="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,S="object"==typeof self&&self&&self.Object===Object&&self,I=O||S||Function("return this")(),x=e&&!e.nodeType&&e,M=x&&t&&!t.nodeType&&t,L=M&&M.exports===x,N=L&&O.process,A=function(){try{return N&&N.binding&&N.binding("util")}catch(t){}}(),P=A&&A.isTypedArray;function F(t,e){for(var n=-1,o=null==t?0:t.length;++n<o;)if(e(t[n],n,t))return!0;return!1}function w(t){var e=-1,n=Array(t.size);return t.forEach((function(t,o){n[++e]=[o,t]})),n}function R(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var k,D,U,j=Array.prototype,V=Function.prototype,B=Object.prototype,G=I["__core-js_shared__"],J=V.toString,z=B.hasOwnProperty,Y=(k=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"",$=B.toString,q=RegExp("^"+J.call(z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),H=L?I.Buffer:void 0,X=I.Symbol,Z=I.Uint8Array,W=B.propertyIsEnumerable,K=j.splice,Q=X?X.toStringTag:void 0,tt=Object.getOwnPropertySymbols,et=H?H.isBuffer:void 0,nt=(D=Object.keys,U=Object,function(t){return D(U(t))}),ot=At(I,"DataView"),rt=At(I,"Map"),it=At(I,"Promise"),at=At(I,"Set"),st=At(I,"WeakMap"),ut=At(Object,"create"),ct=Rt(ot),lt=Rt(rt),dt=Rt(it),pt=Rt(at),ft=Rt(st),ht=X?X.prototype:void 0,gt=ht?ht.valueOf:void 0;function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function vt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function _t(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new mt;++e<n;)this.add(t[e])}function bt(t){var e=this.__data__=new vt(t);this.size=e.size}function Et(t,e){var n=Ut(t),o=!n&&Dt(t),r=!n&&!o&&jt(t),i=!n&&!o&&!r&&zt(t),a=n||o||r||i,s=a?function(t,e){for(var n=-1,o=Array(t);++n<t;)o[n]=e(n);return o}(t.length,String):[],u=s.length;for(var c in t)!e&&!z.call(t,c)||a&&("length"==c||r&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||wt(c,u))||s.push(c);return s}function Tt(t,e){for(var n=t.length;n--;)if(kt(t[n][0],e))return n;return-1}function Ct(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Q&&Q in Object(t)?function(t){var e=z.call(t,Q),n=t[Q];try{t[Q]=void 0;var o=!0}catch(t){}var r=$.call(t);o&&(e?t[Q]=n:delete t[Q]);return r}(t):function(t){return $.call(t)}(t)}function Ot(t){return Jt(t)&&Ct(t)==r}function St(t,e,n,o,c){return t===e||(null==t||null==e||!Jt(t)&&!Jt(e)?t!=t&&e!=e:function(t,e,n,o,c,f){var m=Ut(t),E=Ut(e),T=m?i:Ft(t),C=E?i:Ft(e),O=(T=T==r?p:T)==p,S=(C=C==r?p:C)==p,I=T==C;if(I&&jt(t)){if(!jt(e))return!1;m=!0,O=!1}if(I&&!O)return f||(f=new bt),m||zt(t)?Mt(t,e,n,o,c,f):function(t,e,n,o,r,i,c){switch(n){case b:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case _:return!(t.byteLength!=e.byteLength||!i(new Z(t),new Z(e)));case a:case s:case d:return kt(+t,+e);case u:return t.name==e.name&&t.message==e.message;case h:case y:return t==e+"";case l:var p=w;case g:var f=1&o;if(p||(p=R),t.size!=e.size&&!f)return!1;var m=c.get(t);if(m)return m==e;o|=2,c.set(t,e);var E=Mt(p(t),p(e),o,r,i,c);return c.delete(t),E;case v:if(gt)return gt.call(t)==gt.call(e)}return!1}(t,e,T,n,o,c,f);if(!(1&n)){var x=O&&z.call(t,"__wrapped__"),M=S&&z.call(e,"__wrapped__");if(x||M){var L=x?t.value():t,N=M?e.value():e;return f||(f=new bt),c(L,N,n,o,f)}}if(!I)return!1;return f||(f=new bt),function(t,e,n,o,r,i){var a=1&n,s=Lt(t),u=s.length,c=Lt(e).length;if(u!=c&&!a)return!1;var l=u;for(;l--;){var d=s[l];if(!(a?d in e:z.call(e,d)))return!1}var p=i.get(t);if(p&&i.get(e))return p==e;var f=!0;i.set(t,e),i.set(e,t);var h=a;for(;++l<u;){var g=t[d=s[l]],y=e[d];if(o)var v=a?o(y,g,d,e,t,i):o(g,y,d,t,e,i);if(!(void 0===v?g===y||r(g,y,n,o,i):v)){f=!1;break}h||(h="constructor"==d)}if(f&&!h){var m=t.constructor,_=e.constructor;m==_||!("constructor"in t)||!("constructor"in e)||"function"==typeof m&&m instanceof m&&"function"==typeof _&&_ instanceof _||(f=!1)}return i.delete(t),i.delete(e),f}(t,e,n,o,c,f)}(t,e,n,o,St,c))}function It(t){return!(!Gt(t)||function(t){return!!Y&&Y in t}(t))&&(Vt(t)?q:E).test(Rt(t))}function xt(t){if(n=(e=t)&&e.constructor,o="function"==typeof n&&n.prototype||B,e!==o)return nt(t);var e,n,o,r=[];for(var i in Object(t))z.call(t,i)&&"constructor"!=i&&r.push(i);return r}function Mt(t,e,n,o,r,i){var a=1&n,s=t.length,u=e.length;if(s!=u&&!(a&&u>s))return!1;var c=i.get(t);if(c&&i.get(e))return c==e;var l=-1,d=!0,p=2&n?new _t:void 0;for(i.set(t,e),i.set(e,t);++l<s;){var f=t[l],h=e[l];if(o)var g=a?o(h,f,l,e,t,i):o(f,h,l,t,e,i);if(void 0!==g){if(g)continue;d=!1;break}if(p){if(!F(e,(function(t,e){if(a=e,!p.has(a)&&(f===t||r(f,t,n,o,i)))return p.push(e);var a}))){d=!1;break}}else if(f!==h&&!r(f,h,n,o,i)){d=!1;break}}return i.delete(t),i.delete(e),d}function Lt(t){return function(t,e,n){var o=e(t);return Ut(t)?o:function(t,e){for(var n=-1,o=e.length,r=t.length;++n<o;)t[r+n]=e[n];return t}(o,n(t))}(t,Yt,Pt)}function Nt(t,e){var n,o,r=t.__data__;return("string"==(o=typeof(n=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?r["string"==typeof e?"string":"hash"]:r.map}function At(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return It(n)?n:void 0}yt.prototype.clear=function(){this.__data__=ut?ut(null):{},this.size=0},yt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},yt.prototype.get=function(t){var e=this.__data__;if(ut){var o=e[t];return o===n?void 0:o}return z.call(e,t)?e[t]:void 0},yt.prototype.has=function(t){var e=this.__data__;return ut?void 0!==e[t]:z.call(e,t)},yt.prototype.set=function(t,e){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=ut&&void 0===e?n:e,this},vt.prototype.clear=function(){this.__data__=[],this.size=0},vt.prototype.delete=function(t){var e=this.__data__,n=Tt(e,t);return!(n<0)&&(n==e.length-1?e.pop():K.call(e,n,1),--this.size,!0)},vt.prototype.get=function(t){var e=this.__data__,n=Tt(e,t);return n<0?void 0:e[n][1]},vt.prototype.has=function(t){return Tt(this.__data__,t)>-1},vt.prototype.set=function(t,e){var n=this.__data__,o=Tt(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this},mt.prototype.clear=function(){this.size=0,this.__data__={hash:new yt,map:new(rt||vt),string:new yt}},mt.prototype.delete=function(t){var e=Nt(this,t).delete(t);return this.size-=e?1:0,e},mt.prototype.get=function(t){return Nt(this,t).get(t)},mt.prototype.has=function(t){return Nt(this,t).has(t)},mt.prototype.set=function(t,e){var n=Nt(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this},_t.prototype.add=_t.prototype.push=function(t){return this.__data__.set(t,n),this},_t.prototype.has=function(t){return this.__data__.has(t)},bt.prototype.clear=function(){this.__data__=new vt,this.size=0},bt.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},bt.prototype.get=function(t){return this.__data__.get(t)},bt.prototype.has=function(t){return this.__data__.has(t)},bt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof vt){var o=n.__data__;if(!rt||o.length<199)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new mt(o)}return n.set(t,e),this.size=n.size,this};var Pt=tt?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,o=null==t?0:t.length,r=0,i=[];++n<o;){var a=t[n];e(a,n,t)&&(i[r++]=a)}return i}(tt(t),(function(e){return W.call(t,e)})))}:function(){return[]},Ft=Ct;function wt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||T.test(t))&&t>-1&&t%1==0&&t<e}function Rt(t){if(null!=t){try{return J.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function kt(t,e){return t===e||t!=t&&e!=e}(ot&&Ft(new ot(new ArrayBuffer(1)))!=b||rt&&Ft(new rt)!=l||it&&Ft(it.resolve())!=f||at&&Ft(new at)!=g||st&&Ft(new st)!=m)&&(Ft=function(t){var e=Ct(t),n=e==p?t.constructor:void 0,o=n?Rt(n):"";if(o)switch(o){case ct:return b;case lt:return l;case dt:return f;case pt:return g;case ft:return m}return e});var Dt=Ot(function(){return arguments}())?Ot:function(t){return Jt(t)&&z.call(t,"callee")&&!W.call(t,"callee")},Ut=Array.isArray;var jt=et||function(){return!1};function Vt(t){if(!Gt(t))return!1;var e=Ct(t);return e==c||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Bt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}function Gt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Jt(t){return null!=t&&"object"==typeof t}var zt=P?function(t){return function(e){return t(e)}}(P):function(t){return Jt(t)&&Bt(t.length)&&!!C[Ct(t)]};function Yt(t){return null!=(e=t)&&Bt(e.length)&&!Vt(e)?Et(t):xt(t);var e}t.exports=function(t,e){return St(t,e)}}(fe,fe.exports);var he=e(fe.exports);function ge(t,e){return t.length===e.length&&JSON.stringify(t.map((function(t){return t})).sort())===JSON.stringify(e.map((function(t){return t})).sort())}var ye={Polygon:V,LineString:j,Point:U,MultiPolygon:J,MultiLineString:J,MultiPoint:J};var ve=Object.freeze({__proto__:null,CommonSelectors:ht,constrainFeatureMovement:Kt,createMidPoint:bt,createSupplementaryPoints:Et,createVertex:_t,doubleClickZoom:Tt,euclideanDistance:A,featuresAt:M,getFeatureAtAndSetCursors:N,isClick:P,isEventAtCoordinates:ie,isTap:F,mapEventToBoundingBox:S,ModeHandler:t,moveFeatures:Qt,sortFeatures:O,stringSetsAreEqual:ge,StringSet:I,theme:ot,toDenseArray:H}),me=function(t,e){var n={options:t=function(t){void 0===t&&(t={});var e=tt(t);return t.controls||(e.controls={}),!1===t.displayControlsDefault?e.controls=tt(de,t.controls):e.controls=tt(le,t.controls),(e=tt(ce,e)).styles=pe(e.styles,"cold").concat(pe(e.styles,"hot")),e}(t)};e=function(t,e){return e.modes=h,e.getFeatureIdsAt=function(e){return M.click({point:e},null,t).map((function(t){return t.properties.id}))},e.getSelectedIds=function(){return t.store.getSelectedIds()},e.getSelected=function(){return{type:f.FEATURE_COLLECTION,features:t.store.getSelectedIds().map((function(e){return t.store.get(e)})).map((function(t){return t.toGeoJSON()}))}},e.getSelectedPoints=function(){return{type:f.FEATURE_COLLECTION,features:t.store.getSelectedCoordinates().map((function(t){return{type:f.FEATURE,properties:{},geometry:{type:f.POINT,coordinates:t.coordinates}}}))}},e.set=function(n){if(void 0===n.type||n.type!==f.FEATURE_COLLECTION||!Array.isArray(n.features))throw new Error("Invalid FeatureCollection");var o=t.store.createRenderBatch(),r=t.store.getAllIds().slice(),i=e.add(n),a=new I(i);return(r=r.filter((function(t){return!a.has(t)}))).length&&e.delete(r),o(),i},e.add=function(e){var n=JSON.parse(JSON.stringify(It(e))).features.map((function(e){if(e.id=e.id||k(),null===e.geometry)throw new Error("Invalid geometry: null");if(void 0===t.store.get(e.id)||t.store.get(e.id).type!==e.geometry.type){var n=ye[e.geometry.type];if(void 0===n)throw new Error("Invalid geometry type: "+e.geometry.type+".");var o=new n(t,e);t.store.add(o)}else{var r=t.store.get(e.id);r.properties=e.properties,he(r.properties,e.properties)||t.store.featureChanged(r.id),he(r.getCoordinates(),e.geometry.coordinates)||r.incomingCoords(e.geometry.coordinates)}return e.id}));return t.store.render(),n},e.get=function(e){var n=t.store.get(e);if(n)return n.toGeoJSON()},e.getAll=function(){return{type:f.FEATURE_COLLECTION,features:t.store.getAll().map((function(t){return t.toGeoJSON()}))}},e.delete=function(n){return t.store.delete(n,{silent:!0}),e.getMode()!==h.DIRECT_SELECT||t.store.getSelectedIds().length?t.store.render():t.events.changeMode(h.SIMPLE_SELECT,void 0,{silent:!0}),e},e.deleteAll=function(){return t.store.delete(t.store.getAllIds(),{silent:!0}),e.getMode()===h.DIRECT_SELECT?t.events.changeMode(h.SIMPLE_SELECT,void 0,{silent:!0}):t.store.render(),e},e.changeMode=function(n,o){return void 0===o&&(o={}),n===h.SIMPLE_SELECT&&e.getMode()===h.SIMPLE_SELECT?(ge(o.featureIds||[],t.store.getSelectedIds())||(t.store.setSelected(o.featureIds,{silent:!0}),t.store.render()),e):(n===h.DIRECT_SELECT&&e.getMode()===h.DIRECT_SELECT&&o.featureId===t.store.getSelectedIds()[0]||t.events.changeMode(n,o,{silent:!0}),e)},e.getMode=function(){return t.events.getMode()},e.trash=function(){return t.events.trash({silent:!0}),e},e.combineFeatures=function(){return t.events.combineFeatures({silent:!0}),e},e.uncombineFeatures=function(){return t.events.uncombineFeatures({silent:!0}),e},e.setFeatureProperty=function(n,o,r){return t.store.setFeatureProperty(n,o,r),e},e}(n,e),n.api=e;var o=nt(n);return e.onAdd=o.onAdd,e.onRemove=o.onRemove,e.types=p,e.options=t,e};function _e(t){me(t,this)}return _e.modes=ue,_e.constants=E,_e.lib=ve,_e}));
//# sourceMappingURL=mapbox-gl-draw.js.map


/***/ }),

/***/ "./node_modules/@turf/bbox/dist/js/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@turf/bbox/dist/js/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var meta_1 = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/dist/js/index.js");
/**
 * Takes a set of features, calculates the bbox of all input features, and returns a bounding box.
 *
 * @name bbox
 * @param {GeoJSON} geojson any GeoJSON object
 * @returns {BBox} bbox extent in [minX, minY, maxX, maxY] order
 * @example
 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]]);
 * var bbox = turf.bbox(line);
 * var bboxPolygon = turf.bboxPolygon(bbox);
 *
 * //addToMap
 * var addToMap = [line, bboxPolygon]
 */
function bbox(geojson) {
    var result = [Infinity, Infinity, -Infinity, -Infinity];
    meta_1.coordEach(geojson, function (coord) {
        if (result[0] > coord[0]) {
            result[0] = coord[0];
        }
        if (result[1] > coord[1]) {
            result[1] = coord[1];
        }
        if (result[2] < coord[0]) {
            result[2] = coord[0];
        }
        if (result[3] < coord[1]) {
            result[3] = coord[1];
        }
    });
    return result;
}
bbox["default"] = bbox;
exports["default"] = bbox;


/***/ }),

/***/ "./node_modules/@turf/helpers/dist/js/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@turf/helpers/dist/js/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * @module helpers
 */
/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 *
 * @memberof helpers
 * @type {number}
 */
exports.earthRadius = 6371008.8;
/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.factors = {
    centimeters: exports.earthRadius * 100,
    centimetres: exports.earthRadius * 100,
    degrees: exports.earthRadius / 111325,
    feet: exports.earthRadius * 3.28084,
    inches: exports.earthRadius * 39.37,
    kilometers: exports.earthRadius / 1000,
    kilometres: exports.earthRadius / 1000,
    meters: exports.earthRadius,
    metres: exports.earthRadius,
    miles: exports.earthRadius / 1609.344,
    millimeters: exports.earthRadius * 1000,
    millimetres: exports.earthRadius * 1000,
    nauticalmiles: exports.earthRadius / 1852,
    radians: 1,
    yards: exports.earthRadius * 1.0936,
};
/**
 * Units of measurement factors based on 1 meter.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.unitsFactors = {
    centimeters: 100,
    centimetres: 100,
    degrees: 1 / 111325,
    feet: 3.28084,
    inches: 39.37,
    kilometers: 1 / 1000,
    kilometres: 1 / 1000,
    meters: 1,
    metres: 1,
    miles: 1 / 1609.344,
    millimeters: 1000,
    millimetres: 1000,
    nauticalmiles: 1 / 1852,
    radians: 1 / exports.earthRadius,
    yards: 1.0936133,
};
/**
 * Area of measurement factors based on 1 square meter.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.areaFactors = {
    acres: 0.000247105,
    centimeters: 10000,
    centimetres: 10000,
    feet: 10.763910417,
    hectares: 0.0001,
    inches: 1550.003100006,
    kilometers: 0.000001,
    kilometres: 0.000001,
    meters: 1,
    metres: 1,
    miles: 3.86e-7,
    millimeters: 1000000,
    millimetres: 1000000,
    yards: 1.195990046,
};
/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
function feature(geom, properties, options) {
    if (options === void 0) { options = {}; }
    var feat = { type: "Feature" };
    if (options.id === 0 || options.id) {
        feat.id = options.id;
    }
    if (options.bbox) {
        feat.bbox = options.bbox;
    }
    feat.properties = properties || {};
    feat.geometry = geom;
    return feat;
}
exports.feature = feature;
/**
 * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
 * For GeometryCollection type use `helpers.geometryCollection`
 *
 * @name geometry
 * @param {string} type Geometry Type
 * @param {Array<any>} coordinates Coordinates
 * @param {Object} [options={}] Optional Parameters
 * @returns {Geometry} a GeoJSON Geometry
 * @example
 * var type = "Point";
 * var coordinates = [110, 50];
 * var geometry = turf.geometry(type, coordinates);
 * // => geometry
 */
function geometry(type, coordinates, _options) {
    if (_options === void 0) { _options = {}; }
    switch (type) {
        case "Point":
            return point(coordinates).geometry;
        case "LineString":
            return lineString(coordinates).geometry;
        case "Polygon":
            return polygon(coordinates).geometry;
        case "MultiPoint":
            return multiPoint(coordinates).geometry;
        case "MultiLineString":
            return multiLineString(coordinates).geometry;
        case "MultiPolygon":
            return multiPolygon(coordinates).geometry;
        default:
            throw new Error(type + " is invalid");
    }
}
exports.geometry = geometry;
/**
 * Creates a {@link Point} {@link Feature} from a Position.
 *
 * @name point
 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Point>} a Point feature
 * @example
 * var point = turf.point([-75.343, 39.984]);
 *
 * //=point
 */
function point(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (!coordinates) {
        throw new Error("coordinates is required");
    }
    if (!Array.isArray(coordinates)) {
        throw new Error("coordinates must be an Array");
    }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be at least 2 numbers long");
    }
    if (!isNumber(coordinates[0]) || !isNumber(coordinates[1])) {
        throw new Error("coordinates must contain numbers");
    }
    var geom = {
        type: "Point",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.point = point;
/**
 * Creates a {@link Point} {@link FeatureCollection} from an Array of Point coordinates.
 *
 * @name points
 * @param {Array<Array<number>>} coordinates an array of Points
 * @param {Object} [properties={}] Translate these properties to each Feature
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Point>} Point Feature
 * @example
 * var points = turf.points([
 *   [-75, 39],
 *   [-80, 45],
 *   [-78, 50]
 * ]);
 *
 * //=points
 */
function points(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return point(coords, properties);
    }), options);
}
exports.points = points;
/**
 * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
 *
 * @name polygon
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Polygon>} Polygon Feature
 * @example
 * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
 *
 * //=polygon
 */
function polygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    for (var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++) {
        var ring = coordinates_1[_i];
        if (ring.length < 4) {
            throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        }
        for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) {
                throw new Error("First and last Position are not equivalent.");
            }
        }
    }
    var geom = {
        type: "Polygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.polygon = polygon;
/**
 * Creates a {@link Polygon} {@link FeatureCollection} from an Array of Polygon coordinates.
 *
 * @name polygons
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygon coordinates
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Polygon>} Polygon FeatureCollection
 * @example
 * var polygons = turf.polygons([
 *   [[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]],
 *   [[[-15, 42], [-14, 46], [-12, 41], [-17, 44], [-15, 42]]],
 * ]);
 *
 * //=polygons
 */
function polygons(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return polygon(coords, properties);
    }), options);
}
exports.polygons = polygons;
/**
 * Creates a {@link LineString} {@link Feature} from an Array of Positions.
 *
 * @name lineString
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<LineString>} LineString Feature
 * @example
 * var linestring1 = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]], {name: 'line 1'});
 * var linestring2 = turf.lineString([[-14, 43], [-13, 40], [-15, 45], [-10, 49]], {name: 'line 2'});
 *
 * //=linestring1
 * //=linestring2
 */
function lineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be an array of two or more positions");
    }
    var geom = {
        type: "LineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.lineString = lineString;
/**
 * Creates a {@link LineString} {@link FeatureCollection} from an Array of LineString coordinates.
 *
 * @name lineStrings
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<LineString>} LineString FeatureCollection
 * @example
 * var linestrings = turf.lineStrings([
 *   [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
 *   [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
 * ]);
 *
 * //=linestrings
 */
function lineStrings(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return lineString(coords, properties);
    }), options);
}
exports.lineStrings = lineStrings;
/**
 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
 *
 * @name featureCollection
 * @param {Feature[]} features input features
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {FeatureCollection} FeatureCollection of Features
 * @example
 * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
 * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
 * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
 *
 * var collection = turf.featureCollection([
 *   locationA,
 *   locationB,
 *   locationC
 * ]);
 *
 * //=collection
 */
function featureCollection(features, options) {
    if (options === void 0) { options = {}; }
    var fc = { type: "FeatureCollection" };
    if (options.id) {
        fc.id = options.id;
    }
    if (options.bbox) {
        fc.bbox = options.bbox;
    }
    fc.features = features;
    return fc;
}
exports.featureCollection = featureCollection;
/**
 * Creates a {@link Feature<MultiLineString>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiLineString
 * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiLineString>} a MultiLineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
 *
 * //=multiLine
 */
function multiLineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiLineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiLineString = multiLineString;
/**
 * Creates a {@link Feature<MultiPoint>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPoint
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPoint>} a MultiPoint feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPt = turf.multiPoint([[0,0],[10,10]]);
 *
 * //=multiPt
 */
function multiPoint(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPoint",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiPoint = multiPoint;
/**
 * Creates a {@link Feature<MultiPolygon>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPolygon
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPolygon>} a multipolygon feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
 *
 * //=multiPoly
 *
 */
function multiPolygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPolygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiPolygon = multiPolygon;
/**
 * Creates a {@link Feature<GeometryCollection>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name geometryCollection
 * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
 * @example
 * var pt = turf.geometry("Point", [100, 0]);
 * var line = turf.geometry("LineString", [[101, 0], [102, 1]]);
 * var collection = turf.geometryCollection([pt, line]);
 *
 * // => collection
 */
function geometryCollection(geometries, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "GeometryCollection",
        geometries: geometries,
    };
    return feature(geom, properties, options);
}
exports.geometryCollection = geometryCollection;
/**
 * Round number to precision
 *
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * turf.round(120.4321)
 * //=120
 *
 * turf.round(120.4321, 2)
 * //=120.43
 */
function round(num, precision) {
    if (precision === void 0) { precision = 0; }
    if (precision && !(precision >= 0)) {
        throw new Error("precision must be a positive number");
    }
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}
exports.round = round;
/**
 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} distance
 */
function radiansToLength(radians, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = exports.factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return radians * factor;
}
exports.radiansToLength = radiansToLength;
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} radians
 */
function lengthToRadians(distance, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = exports.factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return distance / factor;
}
exports.lengthToRadians = lengthToRadians;
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
 *
 * @name lengthToDegrees
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} degrees
 */
function lengthToDegrees(distance, units) {
    return radiansToDegrees(lengthToRadians(distance, units));
}
exports.lengthToDegrees = lengthToDegrees;
/**
 * Converts any bearing angle from the north line direction (positive clockwise)
 * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
 *
 * @name bearingToAzimuth
 * @param {number} bearing angle, between -180 and +180 degrees
 * @returns {number} angle between 0 and 360 degrees
 */
function bearingToAzimuth(bearing) {
    var angle = bearing % 360;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
exports.bearingToAzimuth = bearingToAzimuth;
/**
 * Converts an angle in radians to degrees
 *
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 */
function radiansToDegrees(radians) {
    var degrees = radians % (2 * Math.PI);
    return (degrees * 180) / Math.PI;
}
exports.radiansToDegrees = radiansToDegrees;
/**
 * Converts an angle in degrees to radians
 *
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
function degreesToRadians(degrees) {
    var radians = degrees % 360;
    return (radians * Math.PI) / 180;
}
exports.degreesToRadians = degreesToRadians;
/**
 * Converts a length to the requested unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @param {number} length to be converted
 * @param {Units} [originalUnit="kilometers"] of the length
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted length
 */
function convertLength(length, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "kilometers"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(length >= 0)) {
        throw new Error("length must be a positive number");
    }
    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit);
}
exports.convertLength = convertLength;
/**
 * Converts a area to the requested unit.
 * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches, hectares
 * @param {number} area to be converted
 * @param {Units} [originalUnit="meters"] of the distance
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted area
 */
function convertArea(area, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "meters"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(area >= 0)) {
        throw new Error("area must be a positive number");
    }
    var startFactor = exports.areaFactors[originalUnit];
    if (!startFactor) {
        throw new Error("invalid original units");
    }
    var finalFactor = exports.areaFactors[finalUnit];
    if (!finalFactor) {
        throw new Error("invalid final units");
    }
    return (area / startFactor) * finalFactor;
}
exports.convertArea = convertArea;
/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * turf.isNumber(123)
 * //=true
 * turf.isNumber('foo')
 * //=false
 */
function isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num);
}
exports.isNumber = isNumber;
/**
 * isObject
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 * @example
 * turf.isObject({elevation: 10})
 * //=true
 * turf.isObject('foo')
 * //=false
 */
function isObject(input) {
    return !!input && input.constructor === Object;
}
exports.isObject = isObject;
/**
 * Validate BBox
 *
 * @private
 * @param {Array<number>} bbox BBox to validate
 * @returns {void}
 * @throws Error if BBox is not valid
 * @example
 * validateBBox([-180, -40, 110, 50])
 * //=OK
 * validateBBox([-180, -40])
 * //=Error
 * validateBBox('Foo')
 * //=Error
 * validateBBox(5)
 * //=Error
 * validateBBox(null)
 * //=Error
 * validateBBox(undefined)
 * //=Error
 */
function validateBBox(bbox) {
    if (!bbox) {
        throw new Error("bbox is required");
    }
    if (!Array.isArray(bbox)) {
        throw new Error("bbox must be an Array");
    }
    if (bbox.length !== 4 && bbox.length !== 6) {
        throw new Error("bbox must be an Array of 4 or 6 numbers");
    }
    bbox.forEach(function (num) {
        if (!isNumber(num)) {
            throw new Error("bbox must only contain numbers");
        }
    });
}
exports.validateBBox = validateBBox;
/**
 * Validate Id
 *
 * @private
 * @param {string|number} id Id to validate
 * @returns {void}
 * @throws Error if Id is not valid
 * @example
 * validateId([-180, -40, 110, 50])
 * //=Error
 * validateId([-180, -40])
 * //=Error
 * validateId('Foo')
 * //=OK
 * validateId(5)
 * //=OK
 * validateId(null)
 * //=Error
 * validateId(undefined)
 * //=Error
 */
function validateId(id) {
    if (!id) {
        throw new Error("id is required");
    }
    if (["string", "number"].indexOf(typeof id) === -1) {
        throw new Error("id must be a number or a string");
    }
}
exports.validateId = validateId;


/***/ }),

/***/ "./node_modules/@turf/meta/dist/js/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@turf/meta/dist/js/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var helpers = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/js/index.js");

/**
 * Callback for coordEach
 *
 * @callback coordEachCallback
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
 *
 * @name coordEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function coordEach(geojson, callback, excludeWrapCoord) {
  // Handles null Geometry -- Skips this GeoJSON
  if (geojson === null) return;
  var j,
    k,
    l,
    geometry,
    stopG,
    coords,
    geometryMaybeCollection,
    wrapShrink = 0,
    coordIndex = 0,
    isGeometryCollection,
    type = geojson.type,
    isFeatureCollection = type === "FeatureCollection",
    isFeature = type === "Feature",
    stop = isFeatureCollection ? geojson.features.length : 1;

  // This logic may look a little weird. The reason why it is that way
  // is because it's trying to be fast. GeoJSON supports multiple kinds
  // of objects at its root: FeatureCollection, Features, Geometries.
  // This function has the responsibility of handling all of them, and that
  // means that some of the `for` loops you see below actually just don't apply
  // to certain inputs. For instance, if you give this just a
  // Point geometry, then both loops are short-circuited and all we do
  // is gradually rename the input until it's called 'geometry'.
  //
  // This also aims to allocate as few resources as possible: just a
  // few numbers and booleans, rather than any temporary arrays as would
  // be required with the normalization approach.
  for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
    geometryMaybeCollection = isFeatureCollection
      ? geojson.features[featureIndex].geometry
      : isFeature
      ? geojson.geometry
      : geojson;
    isGeometryCollection = geometryMaybeCollection
      ? geometryMaybeCollection.type === "GeometryCollection"
      : false;
    stopG = isGeometryCollection
      ? geometryMaybeCollection.geometries.length
      : 1;

    for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
      var multiFeatureIndex = 0;
      var geometryIndex = 0;
      geometry = isGeometryCollection
        ? geometryMaybeCollection.geometries[geomIndex]
        : geometryMaybeCollection;

      // Handles null Geometry -- Skips this geometry
      if (geometry === null) continue;
      coords = geometry.coordinates;
      var geomType = geometry.type;

      wrapShrink =
        excludeWrapCoord &&
        (geomType === "Polygon" || geomType === "MultiPolygon")
          ? 1
          : 0;

      switch (geomType) {
        case null:
          break;
        case "Point":
          if (
            callback(
              coords,
              coordIndex,
              featureIndex,
              multiFeatureIndex,
              geometryIndex
            ) === false
          )
            return false;
          coordIndex++;
          multiFeatureIndex++;
          break;
        case "LineString":
        case "MultiPoint":
          for (j = 0; j < coords.length; j++) {
            if (
              callback(
                coords[j],
                coordIndex,
                featureIndex,
                multiFeatureIndex,
                geometryIndex
              ) === false
            )
              return false;
            coordIndex++;
            if (geomType === "MultiPoint") multiFeatureIndex++;
          }
          if (geomType === "LineString") multiFeatureIndex++;
          break;
        case "Polygon":
        case "MultiLineString":
          for (j = 0; j < coords.length; j++) {
            for (k = 0; k < coords[j].length - wrapShrink; k++) {
              if (
                callback(
                  coords[j][k],
                  coordIndex,
                  featureIndex,
                  multiFeatureIndex,
                  geometryIndex
                ) === false
              )
                return false;
              coordIndex++;
            }
            if (geomType === "MultiLineString") multiFeatureIndex++;
            if (geomType === "Polygon") geometryIndex++;
          }
          if (geomType === "Polygon") multiFeatureIndex++;
          break;
        case "MultiPolygon":
          for (j = 0; j < coords.length; j++) {
            geometryIndex = 0;
            for (k = 0; k < coords[j].length; k++) {
              for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                if (
                  callback(
                    coords[j][k][l],
                    coordIndex,
                    featureIndex,
                    multiFeatureIndex,
                    geometryIndex
                  ) === false
                )
                  return false;
                coordIndex++;
              }
              geometryIndex++;
            }
            multiFeatureIndex++;
          }
          break;
        case "GeometryCollection":
          for (j = 0; j < geometry.geometries.length; j++)
            if (
              coordEach(geometry.geometries[j], callback, excludeWrapCoord) ===
              false
            )
              return false;
          break;
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
  }
}

/**
 * Callback for coordReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback coordReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Reduce coordinates in any GeoJSON object, similar to Array.reduce()
 *
 * @name coordReduce
 * @param {FeatureCollection|Geometry|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentCoord, coordIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordReduce(features, function (previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentCoord;
 * });
 */
function coordReduce(geojson, callback, initialValue, excludeWrapCoord) {
  var previousValue = initialValue;
  coordEach(
    geojson,
    function (
      currentCoord,
      coordIndex,
      featureIndex,
      multiFeatureIndex,
      geometryIndex
    ) {
      if (coordIndex === 0 && initialValue === undefined)
        previousValue = currentCoord;
      else
        previousValue = callback(
          previousValue,
          currentCoord,
          coordIndex,
          featureIndex,
          multiFeatureIndex,
          geometryIndex
        );
    },
    excludeWrapCoord
  );
  return previousValue;
}

/**
 * Callback for propEach
 *
 * @callback propEachCallback
 * @param {Object} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over properties in any GeoJSON object, similar to Array.forEach()
 *
 * @name propEach
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentProperties, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propEach(features, function (currentProperties, featureIndex) {
 *   //=currentProperties
 *   //=featureIndex
 * });
 */
function propEach(geojson, callback) {
  var i;
  switch (geojson.type) {
    case "FeatureCollection":
      for (i = 0; i < geojson.features.length; i++) {
        if (callback(geojson.features[i].properties, i) === false) break;
      }
      break;
    case "Feature":
      callback(geojson.properties, 0);
      break;
  }
}

/**
 * Callback for propReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback propReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {*} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce properties in any GeoJSON object into a single value,
 * similar to how Array.reduce works. However, in this case we lazily run
 * the reduction, so an array of all properties is unnecessary.
 *
 * @name propReduce
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentProperties, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
 *   //=previousValue
 *   //=currentProperties
 *   //=featureIndex
 *   return currentProperties
 * });
 */
function propReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  propEach(geojson, function (currentProperties, featureIndex) {
    if (featureIndex === 0 && initialValue === undefined)
      previousValue = currentProperties;
    else
      previousValue = callback(previousValue, currentProperties, featureIndex);
  });
  return previousValue;
}

/**
 * Callback for featureEach
 *
 * @callback featureEachCallback
 * @param {Feature<any>} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name featureEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.featureEach(features, function (currentFeature, featureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 * });
 */
function featureEach(geojson, callback) {
  if (geojson.type === "Feature") {
    callback(geojson, 0);
  } else if (geojson.type === "FeatureCollection") {
    for (var i = 0; i < geojson.features.length; i++) {
      if (callback(geojson.features[i], i) === false) break;
    }
  }
}

/**
 * Callback for featureReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback featureReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name featureReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   return currentFeature
 * });
 */
function featureReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  featureEach(geojson, function (currentFeature, featureIndex) {
    if (featureIndex === 0 && initialValue === undefined)
      previousValue = currentFeature;
    else previousValue = callback(previousValue, currentFeature, featureIndex);
  });
  return previousValue;
}

/**
 * Get all coordinates from any GeoJSON object.
 *
 * @name coordAll
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @returns {Array<Array<number>>} coordinate position array
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * var coords = turf.coordAll(features);
 * //= [[26, 37], [36, 53]]
 */
function coordAll(geojson) {
  var coords = [];
  coordEach(geojson, function (coord) {
    coords.push(coord);
  });
  return coords;
}

/**
 * Callback for geomEach
 *
 * @callback geomEachCallback
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
 *
 * @name geomEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 * });
 */
function geomEach(geojson, callback) {
  var i,
    j,
    g,
    geometry,
    stopG,
    geometryMaybeCollection,
    isGeometryCollection,
    featureProperties,
    featureBBox,
    featureId,
    featureIndex = 0,
    isFeatureCollection = geojson.type === "FeatureCollection",
    isFeature = geojson.type === "Feature",
    stop = isFeatureCollection ? geojson.features.length : 1;

  // This logic may look a little weird. The reason why it is that way
  // is because it's trying to be fast. GeoJSON supports multiple kinds
  // of objects at its root: FeatureCollection, Features, Geometries.
  // This function has the responsibility of handling all of them, and that
  // means that some of the `for` loops you see below actually just don't apply
  // to certain inputs. For instance, if you give this just a
  // Point geometry, then both loops are short-circuited and all we do
  // is gradually rename the input until it's called 'geometry'.
  //
  // This also aims to allocate as few resources as possible: just a
  // few numbers and booleans, rather than any temporary arrays as would
  // be required with the normalization approach.
  for (i = 0; i < stop; i++) {
    geometryMaybeCollection = isFeatureCollection
      ? geojson.features[i].geometry
      : isFeature
      ? geojson.geometry
      : geojson;
    featureProperties = isFeatureCollection
      ? geojson.features[i].properties
      : isFeature
      ? geojson.properties
      : {};
    featureBBox = isFeatureCollection
      ? geojson.features[i].bbox
      : isFeature
      ? geojson.bbox
      : undefined;
    featureId = isFeatureCollection
      ? geojson.features[i].id
      : isFeature
      ? geojson.id
      : undefined;
    isGeometryCollection = geometryMaybeCollection
      ? geometryMaybeCollection.type === "GeometryCollection"
      : false;
    stopG = isGeometryCollection
      ? geometryMaybeCollection.geometries.length
      : 1;

    for (g = 0; g < stopG; g++) {
      geometry = isGeometryCollection
        ? geometryMaybeCollection.geometries[g]
        : geometryMaybeCollection;

      // Handle null Geometry
      if (geometry === null) {
        if (
          callback(
            null,
            featureIndex,
            featureProperties,
            featureBBox,
            featureId
          ) === false
        )
          return false;
        continue;
      }
      switch (geometry.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (
            callback(
              geometry,
              featureIndex,
              featureProperties,
              featureBBox,
              featureId
            ) === false
          )
            return false;
          break;
        }
        case "GeometryCollection": {
          for (j = 0; j < geometry.geometries.length; j++) {
            if (
              callback(
                geometry.geometries[j],
                featureIndex,
                featureProperties,
                featureBBox,
                featureId
              ) === false
            )
              return false;
          }
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    // Only increase `featureIndex` per each feature
    featureIndex++;
  }
}

/**
 * Callback for geomReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback geomReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Reduce geometry in any GeoJSON object, similar to Array.reduce().
 *
 * @name geomReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomReduce(features, function (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=previousValue
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 *   return currentGeometry
 * });
 */
function geomReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  geomEach(
    geojson,
    function (
      currentGeometry,
      featureIndex,
      featureProperties,
      featureBBox,
      featureId
    ) {
      if (featureIndex === 0 && initialValue === undefined)
        previousValue = currentGeometry;
      else
        previousValue = callback(
          previousValue,
          currentGeometry,
          featureIndex,
          featureProperties,
          featureBBox,
          featureId
        );
    }
  );
  return previousValue;
}

/**
 * Callback for flattenEach
 *
 * @callback flattenEachCallback
 * @param {Feature} currentFeature The current flattened feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Iterate over flattened features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name flattenEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex, multiFeatureIndex)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 * });
 */
function flattenEach(geojson, callback) {
  geomEach(geojson, function (geometry, featureIndex, properties, bbox, id) {
    // Callback for single geometry
    var type = geometry === null ? null : geometry.type;
    switch (type) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        if (
          callback(
            helpers.feature(geometry, properties, { bbox: bbox, id: id }),
            featureIndex,
            0
          ) === false
        )
          return false;
        return;
    }

    var geomType;

    // Callback for multi-geometry
    switch (type) {
      case "MultiPoint":
        geomType = "Point";
        break;
      case "MultiLineString":
        geomType = "LineString";
        break;
      case "MultiPolygon":
        geomType = "Polygon";
        break;
    }

    for (
      var multiFeatureIndex = 0;
      multiFeatureIndex < geometry.coordinates.length;
      multiFeatureIndex++
    ) {
      var coordinate = geometry.coordinates[multiFeatureIndex];
      var geom = {
        type: geomType,
        coordinates: coordinate,
      };
      if (
        callback(helpers.feature(geom, properties), featureIndex, multiFeatureIndex) ===
        false
      )
        return false;
    }
  });
}

/**
 * Callback for flattenReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback flattenReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Reduce flattened features in any GeoJSON object, similar to Array.reduce().
 *
 * @name flattenReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex, multiFeatureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenReduce(features, function (previousValue, currentFeature, featureIndex, multiFeatureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   return currentFeature
 * });
 */
function flattenReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  flattenEach(
    geojson,
    function (currentFeature, featureIndex, multiFeatureIndex) {
      if (
        featureIndex === 0 &&
        multiFeatureIndex === 0 &&
        initialValue === undefined
      )
        previousValue = currentFeature;
      else
        previousValue = callback(
          previousValue,
          currentFeature,
          featureIndex,
          multiFeatureIndex
        );
    }
  );
  return previousValue;
}

/**
 * Callback for segmentEach
 *
 * @callback segmentEachCallback
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 * @returns {void}
 */

/**
 * Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex)
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentEach(polygon, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //=currentSegment
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   //=segmentIndex
 * });
 *
 * // Calculate the total number of segments
 * var total = 0;
 * turf.segmentEach(polygon, function () {
 *     total++;
 * });
 */
function segmentEach(geojson, callback) {
  flattenEach(geojson, function (feature, featureIndex, multiFeatureIndex) {
    var segmentIndex = 0;

    // Exclude null Geometries
    if (!feature.geometry) return;
    // (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
    var type = feature.geometry.type;
    if (type === "Point" || type === "MultiPoint") return;

    // Generate 2-vertex line segments
    var previousCoords;
    var previousFeatureIndex = 0;
    var previousMultiIndex = 0;
    var prevGeomIndex = 0;
    if (
      coordEach(
        feature,
        function (
          currentCoord,
          coordIndex,
          featureIndexCoord,
          multiPartIndexCoord,
          geometryIndex
        ) {
          // Simulating a meta.coordReduce() since `reduce` operations cannot be stopped by returning `false`
          if (
            previousCoords === undefined ||
            featureIndex > previousFeatureIndex ||
            multiPartIndexCoord > previousMultiIndex ||
            geometryIndex > prevGeomIndex
          ) {
            previousCoords = currentCoord;
            previousFeatureIndex = featureIndex;
            previousMultiIndex = multiPartIndexCoord;
            prevGeomIndex = geometryIndex;
            segmentIndex = 0;
            return;
          }
          var currentSegment = helpers.lineString(
            [previousCoords, currentCoord],
            feature.properties
          );
          if (
            callback(
              currentSegment,
              featureIndex,
              multiFeatureIndex,
              geometryIndex,
              segmentIndex
            ) === false
          )
            return false;
          segmentIndex++;
          previousCoords = currentCoord;
        }
      ) === false
    )
      return false;
  });
}

/**
 * Callback for segmentReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback segmentReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 */

/**
 * Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (previousValue, currentSegment, currentIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentReduce(polygon, function (previousSegment, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //= previousSegment
 *   //= currentSegment
 *   //= featureIndex
 *   //= multiFeatureIndex
 *   //= geometryIndex
 *   //= segmentIndex
 *   return currentSegment
 * });
 *
 * // Calculate the total number of segments
 * var initialValue = 0
 * var total = turf.segmentReduce(polygon, function (previousValue) {
 *     previousValue++;
 *     return previousValue;
 * }, initialValue);
 */
function segmentReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  var started = false;
  segmentEach(
    geojson,
    function (
      currentSegment,
      featureIndex,
      multiFeatureIndex,
      geometryIndex,
      segmentIndex
    ) {
      if (started === false && initialValue === undefined)
        previousValue = currentSegment;
      else
        previousValue = callback(
          previousValue,
          currentSegment,
          featureIndex,
          multiFeatureIndex,
          geometryIndex,
          segmentIndex
        );
      started = true;
    }
  );
  return previousValue;
}

/**
 * Callback for lineEach
 *
 * @callback lineEachCallback
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Iterate over line or ring coordinates in LineString, Polygon, MultiLineString, MultiPolygon Features or Geometries,
 * similar to Array.forEach.
 *
 * @name lineEach
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @example
 * var multiLine = turf.multiLineString([
 *   [[26, 37], [35, 45]],
 *   [[36, 53], [38, 50], [41, 55]]
 * ]);
 *
 * turf.lineEach(multiLine, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function lineEach(geojson, callback) {
  // validation
  if (!geojson) throw new Error("geojson is required");

  flattenEach(geojson, function (feature, featureIndex, multiFeatureIndex) {
    if (feature.geometry === null) return;
    var type = feature.geometry.type;
    var coords = feature.geometry.coordinates;
    switch (type) {
      case "LineString":
        if (callback(feature, featureIndex, multiFeatureIndex, 0, 0) === false)
          return false;
        break;
      case "Polygon":
        for (
          var geometryIndex = 0;
          geometryIndex < coords.length;
          geometryIndex++
        ) {
          if (
            callback(
              helpers.lineString(coords[geometryIndex], feature.properties),
              featureIndex,
              multiFeatureIndex,
              geometryIndex
            ) === false
          )
            return false;
        }
        break;
    }
  });
}

/**
 * Callback for lineReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback lineReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed.
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name lineReduce
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var multiPoly = turf.multiPolygon([
 *   turf.polygon([[[12,48],[2,41],[24,38],[12,48]], [[9,44],[13,41],[13,45],[9,44]]]),
 *   turf.polygon([[[5, 5], [0, 0], [2, 2], [4, 4], [5, 5]]])
 * ]);
 *
 * turf.lineReduce(multiPoly, function (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentLine
 * });
 */
function lineReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  lineEach(
    geojson,
    function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
      if (featureIndex === 0 && initialValue === undefined)
        previousValue = currentLine;
      else
        previousValue = callback(
          previousValue,
          currentLine,
          featureIndex,
          multiFeatureIndex,
          geometryIndex
        );
    }
  );
  return previousValue;
}

/**
 * Finds a particular 2-vertex LineString Segment from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 * Point & MultiPoint will always return null.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.segmentIndex=0] Segment Index
 * @param {Object} [options.properties={}] Translate Properties to output LineString
 * @param {BBox} [options.bbox={}] Translate BBox to output LineString
 * @param {number|string} [options.id={}] Translate Id to output LineString
 * @returns {Feature<LineString>} 2-vertex GeoJSON Feature LineString
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findSegment(multiLine);
 * // => Feature<LineString<[[10, 10], [50, 30]]>>
 *
 * // First Segment of 2nd Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: 1});
 * // => Feature<LineString<[[-10, -10], [-50, -30]]>>
 *
 * // Last Segment of Last Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: -1, segmentIndex: -1});
 * // => Feature<LineString<[[-50, -30], [-30, -40]]>>
 */
function findSegment(geojson, options) {
  // Optional Parameters
  options = options || {};
  if (!helpers.isObject(options)) throw new Error("options is invalid");
  var featureIndex = options.featureIndex || 0;
  var multiFeatureIndex = options.multiFeatureIndex || 0;
  var geometryIndex = options.geometryIndex || 0;
  var segmentIndex = options.segmentIndex || 0;

  // Find FeatureIndex
  var properties = options.properties;
  var geometry;

  switch (geojson.type) {
    case "FeatureCollection":
      if (featureIndex < 0)
        featureIndex = geojson.features.length + featureIndex;
      properties = properties || geojson.features[featureIndex].properties;
      geometry = geojson.features[featureIndex].geometry;
      break;
    case "Feature":
      properties = properties || geojson.properties;
      geometry = geojson.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      geometry = geojson;
      break;
    default:
      throw new Error("geojson is invalid");
  }

  // Find SegmentIndex
  if (geometry === null) return null;
  var coords = geometry.coordinates;
  switch (geometry.type) {
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
      if (segmentIndex < 0) segmentIndex = coords.length + segmentIndex - 1;
      return helpers.lineString(
        [coords[segmentIndex], coords[segmentIndex + 1]],
        properties,
        options
      );
    case "Polygon":
      if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
      if (segmentIndex < 0)
        segmentIndex = coords[geometryIndex].length + segmentIndex - 1;
      return helpers.lineString(
        [
          coords[geometryIndex][segmentIndex],
          coords[geometryIndex][segmentIndex + 1],
        ],
        properties,
        options
      );
    case "MultiLineString":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (segmentIndex < 0)
        segmentIndex = coords[multiFeatureIndex].length + segmentIndex - 1;
      return helpers.lineString(
        [
          coords[multiFeatureIndex][segmentIndex],
          coords[multiFeatureIndex][segmentIndex + 1],
        ],
        properties,
        options
      );
    case "MultiPolygon":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (geometryIndex < 0)
        geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
      if (segmentIndex < 0)
        segmentIndex =
          coords[multiFeatureIndex][geometryIndex].length - segmentIndex - 1;
      return helpers.lineString(
        [
          coords[multiFeatureIndex][geometryIndex][segmentIndex],
          coords[multiFeatureIndex][geometryIndex][segmentIndex + 1],
        ],
        properties,
        options
      );
  }
  throw new Error("geojson is invalid");
}

/**
 * Finds a particular Point from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.coordIndex=0] Coord Index
 * @param {Object} [options.properties={}] Translate Properties to output Point
 * @param {BBox} [options.bbox={}] Translate BBox to output Point
 * @param {number|string} [options.id={}] Translate Id to output Point
 * @returns {Feature<Point>} 2-vertex GeoJSON Feature Point
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findPoint(multiLine);
 * // => Feature<Point<[10, 10]>>
 *
 * // First Segment of the 2nd Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: 1});
 * // => Feature<Point<[-10, -10]>>
 *
 * // Last Segment of last Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: -1, coordIndex: -1});
 * // => Feature<Point<[-30, -40]>>
 */
function findPoint(geojson, options) {
  // Optional Parameters
  options = options || {};
  if (!helpers.isObject(options)) throw new Error("options is invalid");
  var featureIndex = options.featureIndex || 0;
  var multiFeatureIndex = options.multiFeatureIndex || 0;
  var geometryIndex = options.geometryIndex || 0;
  var coordIndex = options.coordIndex || 0;

  // Find FeatureIndex
  var properties = options.properties;
  var geometry;

  switch (geojson.type) {
    case "FeatureCollection":
      if (featureIndex < 0)
        featureIndex = geojson.features.length + featureIndex;
      properties = properties || geojson.features[featureIndex].properties;
      geometry = geojson.features[featureIndex].geometry;
      break;
    case "Feature":
      properties = properties || geojson.properties;
      geometry = geojson.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      geometry = geojson;
      break;
    default:
      throw new Error("geojson is invalid");
  }

  // Find Coord Index
  if (geometry === null) return null;
  var coords = geometry.coordinates;
  switch (geometry.type) {
    case "Point":
      return helpers.point(coords, properties, options);
    case "MultiPoint":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      return helpers.point(coords[multiFeatureIndex], properties, options);
    case "LineString":
      if (coordIndex < 0) coordIndex = coords.length + coordIndex;
      return helpers.point(coords[coordIndex], properties, options);
    case "Polygon":
      if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
      if (coordIndex < 0)
        coordIndex = coords[geometryIndex].length + coordIndex;
      return helpers.point(coords[geometryIndex][coordIndex], properties, options);
    case "MultiLineString":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (coordIndex < 0)
        coordIndex = coords[multiFeatureIndex].length + coordIndex;
      return helpers.point(coords[multiFeatureIndex][coordIndex], properties, options);
    case "MultiPolygon":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (geometryIndex < 0)
        geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
      if (coordIndex < 0)
        coordIndex =
          coords[multiFeatureIndex][geometryIndex].length - coordIndex;
      return helpers.point(
        coords[multiFeatureIndex][geometryIndex][coordIndex],
        properties,
        options
      );
  }
  throw new Error("geojson is invalid");
}

exports.coordAll = coordAll;
exports.coordEach = coordEach;
exports.coordReduce = coordReduce;
exports.featureEach = featureEach;
exports.featureReduce = featureReduce;
exports.findPoint = findPoint;
exports.findSegment = findSegment;
exports.flattenEach = flattenEach;
exports.flattenReduce = flattenReduce;
exports.geomEach = geomEach;
exports.geomReduce = geomReduce;
exports.lineEach = lineEach;
exports.lineReduce = lineReduce;
exports.propEach = propEach;
exports.propReduce = propReduce;
exports.segmentEach = segmentEach;
exports.segmentReduce = segmentReduce;


/***/ }),

/***/ "./src/modes/snap_direct_select.js":
/*!*****************************************!*\
  !*** ./src/modes/snap_direct_select.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mapbox/mapbox-gl-draw */ "./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js");
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils */ "./src/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var doubleClickZoom = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().lib).doubleClickZoom;
var DirectSelect = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().modes).direct_select;
var Constants = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().constants);
var SnapDirectSelect = _objectSpread({}, DirectSelect);
SnapDirectSelect.onSetup = function (opts) {
  var featureId = opts.featureId;
  var feature = this.getFeature(featureId);
  if (!feature) {
    throw new Error("You must provide a featureId to enter direct_select mode");
  }
  if (feature.type === Constants.geojsonTypes.POINT) {
    throw new TypeError("direct_select mode doesn't handle point features");
  }
  var layers = this.map.getStyle().layers;
  var targetLayers = layers.filter(function (layerInfo) {
    var type = layerInfo.type,
      source = layerInfo.source;
    if (source !== 'mapbox-gl-draw-cold' && source !== 'mapbox-gl-draw-hot' && (type === 'circle' || type === 'line' || type === 'fill')) {
      return true;
    }
    ;
  });
  var targetLayersId = targetLayers.map(function (layerInfo) {
    return layerInfo.id;
  });
  var state = {
    prevQueryBbox: null,
    targetLayersId: targetLayersId,
    map: this.map,
    featureId: featureId,
    feature: feature,
    dragMoveLocation: opts.startPos || null,
    dragMoving: false,
    canDragMove: false,
    selectedCoordPaths: opts.coordPath ? [opts.coordPath] : []
  };
  state.options = this._ctx.options;
  this.setSelectedCoordinates(this.pathsToCoordinates(featureId, state.selectedCoordPaths));
  this.setSelected(featureId);
  doubleClickZoom.disable(this);
  this.setActionableState({
    trash: true
  });
  var optionsChangedCallBAck = function optionsChangedCallBAck(options) {
    state.options = options;
  };

  // for removing listener later on close
  state["optionsChangedCallBAck"] = optionsChangedCallBAck;
  this.map.on("draw.snap.options_changed", optionsChangedCallBAck);
  return state;
};
SnapDirectSelect.dragVertex = function (state, e, delta) {
  state.halfSize = (state.options.snapOptions && state.options.snapOptions.cacheSize || 100) / 2;
  var halfCacheSize = state.halfSize - 15;
  var _e$point = e.point,
    x = _e$point.x,
    y = _e$point.y;
  if (!state.prevQueryBbox || state.prevQueryBbox && !(state.prevQueryBbox[0] < x && state.prevQueryBbox[2] > x && state.prevQueryBbox[1] < y && state.prevQueryBbox[3] > y)) {
    console.log('createSnapList!!!!!!!!!', e.point);
    var _createSnapList = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createSnapList)(state, this._ctx.api, e),
      _createSnapList2 = _slicedToArray(_createSnapList, 2),
      snapList = _createSnapList2[0],
      vertices = _createSnapList2[1];
    state.snapList = snapList;
    state.vertices = vertices;
    state.prevQueryBbox = [x - halfCacheSize, y - halfCacheSize, x + halfCacheSize, y + halfCacheSize];
  }
  var _snap = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.snap)(state, e),
    lng = _snap.lng,
    lat = _snap.lat;
  if (!lng || !lat) {
    return;
  }
  console.log('lng, lat', lng, lat);
  state.feature.updateCoordinate(state.selectedCoordPaths[0], lng, lat);
};
SnapDirectSelect.onStop = function (state) {
  this.deleteFeature(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.VERTICAL_GUIDE, {
    silent: true
  });
  this.deleteFeature(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.HORIZONTAL_GUIDE, {
    silent: true
  });
  state.prevQueryBbox = null;
  this.map.off("draw.snap.options_changed", state.optionsChangedCallBAck);
  DirectSelect.onStop.call(this, state);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SnapDirectSelect);

/***/ }),

/***/ "./src/modes/snap_line.js":
/*!********************************!*\
  !*** ./src/modes/snap_line.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mapbox/mapbox-gl-draw */ "./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js");
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils */ "./src/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var _MapboxDraw$constants = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().constants),
  geojsonTypes = _MapboxDraw$constants.geojsonTypes,
  modes = _MapboxDraw$constants.modes,
  cursors = _MapboxDraw$constants.cursors;
var doubleClickZoom = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().lib).doubleClickZoom;
var DrawLine = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().modes).draw_line_string;

var SnapLineMode = _objectSpread({}, DrawLine);
SnapLineMode.onSetup = function (options) {
  var feature = this.newFeature({
    type: geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: geojsonTypes.LINE_STRING,
      coordinates: [[]]
    }
  });
  var verticalGuide = this.newFeature((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGuideFeature)(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.VERTICAL_GUIDE));
  var horizontalGuide = this.newFeature((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGuideFeature)(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.HORIZONTAL_GUIDE));
  this.addFeature(feature);
  this.addFeature(verticalGuide);
  this.addFeature(horizontalGuide);
  var selectedFeatures = this.getSelected();
  this.clearSelectedFeatures();
  doubleClickZoom.disable(this);
  var layers = this.map.getStyle().layers;
  var targetLayers = layers.filter(function (layerInfo) {
    var type = layerInfo.type,
      source = layerInfo.source;
    if (source !== 'mapbox-gl-draw-cold' && source !== 'mapbox-gl-draw-hot' && (type === 'circle' || type === 'line' || type === 'fill')) {
      return true;
    }
    ;
  });
  var targetLayersId = targetLayers.map(function (layerInfo) {
    return layerInfo.id;
  });
  // const [snapList, vertices] = createSnapList(this.map, this._ctx.api, line, targetLayersId);

  var state = {
    prevQueryBbox: null,
    targetLayersId: targetLayersId,
    map: this.map,
    feature: feature,
    line: feature,
    currentVertexPosition: 0,
    // vertices,
    // snapList,
    selectedFeatures: selectedFeatures,
    verticalGuide: verticalGuide,
    horizontalGuide: horizontalGuide,
    direction: "forward"
  };
  state.options = this._ctx.options;

  // const moveendCallback = () => {
  //   const [snapList, vertices] = createSnapList(this.map, this._ctx.api, line, targetLayersId);
  //   state.vertices = vertices;
  //   state.snapList = snapList;
  // };
  // // for removing listener later on close
  // state["moveendCallback"] = moveendCallback;

  var optionsChangedCallBAck = function optionsChangedCallBAck(options) {
    state.options = options;
  };
  // for removing listener later on close
  state["optionsChangedCallBAck"] = optionsChangedCallBAck;

  // this.map.on("moveend", moveendCallback);
  this.map.on("draw.snap.options_changed", optionsChangedCallBAck);
  return state;
};
SnapLineMode.onClick = function (state) {
  // We save some processing by rounding on click, not mousemove
  var lng = state.snappedLng;
  var lat = state.snappedLat;

  // End the drawing if this click is on the previous position
  // Note: not bothering with 'direction'
  if (state.currentVertexPosition > 0) {
    var lastVertex = state.feature.coordinates[state.currentVertexPosition - 1];
    state.lastVertex = lastVertex;
    if (lastVertex[0] === lng && lastVertex[1] === lat) {
      return this.changeMode(modes.SIMPLE_SELECT, {
        featureIds: [state.feature.id]
      });
    }
  }

  // const point = state.map.project({ lng: lng, lat: lat });

  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addPointTovertices)(state.map, state.vertices, {
    lng: lng,
    lat: lat
  });
  state.feature.updateCoordinate(state.currentVertexPosition, lng, lat);
  state.currentVertexPosition++;
  state.feature.updateCoordinate(state.currentVertexPosition, lng, lat);
};
SnapLineMode.onMouseMove = function (state, e) {
  state.halfSize = (state.options.snapOptions && state.options.snapOptions.cacheSize || 100) / 2;
  var halfCacheSize = state.halfSize - 15;
  var _e$point = e.point,
    x = _e$point.x,
    y = _e$point.y;
  if (!state.prevQueryBbox || state.prevQueryBbox && !(state.prevQueryBbox[0] < x && state.prevQueryBbox[2] > x && state.prevQueryBbox[1] < y && state.prevQueryBbox[3] > y)) {
    var _createSnapList = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createSnapList)(state, this._ctx.api, e),
      _createSnapList2 = _slicedToArray(_createSnapList, 2),
      snapList = _createSnapList2[0],
      vertices = _createSnapList2[1];
    state.snapList = snapList;
    state.vertices = vertices;
    state.prevQueryBbox = [x - halfCacheSize, y - halfCacheSize, x + halfCacheSize, y + halfCacheSize];
  }
  var _snap = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.snap)(state, e),
    lng = _snap.lng,
    lat = _snap.lat;
  state.feature.updateCoordinate(state.currentVertexPosition, lng, lat);
  state.snappedLng = lng;
  state.snappedLat = lat;
  if (state.lastVertex && state.lastVertex[0] === lng && state.lastVertex[1] === lat) {
    this.updateUIClasses({
      mouse: cursors.POINTER
    });

    // cursor options:
    // ADD: "add"
    // DRAG: "drag"
    // MOVE: "move"
    // NONE: "none"
    // POINTER: "pointer"
  } else {
    this.updateUIClasses({
      mouse: cursors.ADD
    });
  }
};

// This is 'extending' DrawLine.toDisplayFeatures
SnapLineMode.toDisplayFeatures = function (state, geojson, display) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.shouldHideGuide)(state, geojson)) return;

  // This relies on the the state of SnapLineMode being similar to DrawLine
  DrawLine.toDisplayFeatures(state, geojson, display);
};

// This is 'extending' DrawLine.onStop
SnapLineMode.onStop = function (state) {
  this.deleteFeature(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.VERTICAL_GUIDE, {
    silent: true
  });
  this.deleteFeature(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.HORIZONTAL_GUIDE, {
    silent: true
  });

  // remove moveemd callback
  // this.map.off("moveend", state.moveendCallback);

  // This relies on the the state of SnapLineMode being similar to DrawLine
  DrawLine.onStop.call(this, state);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SnapLineMode);

/***/ }),

/***/ "./src/modes/snap_point.js":
/*!*********************************!*\
  !*** ./src/modes/snap_point.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mapbox/mapbox-gl-draw */ "./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js");
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils */ "./src/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var doubleClickZoom = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().lib).doubleClickZoom;
var DrawPoint = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().modes).draw_point;
var _MapboxDraw$constants = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().constants),
  geojsonTypes = _MapboxDraw$constants.geojsonTypes,
  cursors = _MapboxDraw$constants.cursors;
var SnapPointMode = _objectSpread({}, DrawPoint);
SnapPointMode.onSetup = function (options) {
  var feature = this.newFeature({
    type: geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: geojsonTypes.POINT,
      coordinates: [[]]
    }
  });
  var verticalGuide = this.newFeature((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGuideFeature)(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.VERTICAL_GUIDE));
  var horizontalGuide = this.newFeature((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGuideFeature)(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.HORIZONTAL_GUIDE));
  this.addFeature(feature);
  this.addFeature(verticalGuide);
  this.addFeature(horizontalGuide);
  var selectedFeatures = this.getSelected();
  this.clearSelectedFeatures();
  doubleClickZoom.disable(this);

  // const [snapList, vertices] = createSnapList(this.map, this._ctx.api, point);
  var layers = this.map.getStyle().layers;
  var targetLayers = layers.filter(function (layerInfo) {
    var type = layerInfo.type,
      source = layerInfo.source;
    if (source !== 'mapbox-gl-draw-cold' && source !== 'mapbox-gl-draw-hot' && (type === 'circle' || type === 'line' || type === 'fill')) {
      return true;
    }
    ;
  });
  var targetLayersId = targetLayers.map(function (layerInfo) {
    return layerInfo.id;
  });
  var state = {
    map: this.map,
    feature: feature,
    point: feature,
    prevQueryBbox: null,
    targetLayersId: targetLayersId,
    // vertices,
    // snapList,
    selectedFeatures: selectedFeatures,
    verticalGuide: verticalGuide,
    horizontalGuide: horizontalGuide
  };
  state.options = this._ctx.options;
  var optionsChangedCallBAck = function optionsChangedCallBAck(options) {
    state.options = options;
  };
  // for removing listener later on close
  state["optionsChangedCallBAck"] = optionsChangedCallBAck;

  // this.map.on("moveend", moveendCallback);
  this.map.on("draw.snap.options_changed", optionsChangedCallBAck);
  return state;
};
SnapPointMode.onClick = function (state) {
  // We mock out e with the rounded lng/lat then call DrawPoint with it
  DrawPoint.onClick.call(this, state, {
    lngLat: {
      lng: state.snappedLng,
      lat: state.snappedLat
    }
  });
};
SnapPointMode.onMouseMove = function (state, e) {
  state.halfSize = (state.options.snapOptions && state.options.snapOptions.cacheSize || 100) / 2;
  var halfCacheSize = state.halfSize - 15;
  var _e$point = e.point,
    x = _e$point.x,
    y = _e$point.y;
  if (!state.prevQueryBbox || state.prevQueryBbox && !(state.prevQueryBbox[0] < x && state.prevQueryBbox[2] > x && state.prevQueryBbox[1] < y && state.prevQueryBbox[3] > y)) {
    var _createSnapList = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createSnapList)(state, this._ctx.api, e),
      _createSnapList2 = _slicedToArray(_createSnapList, 2),
      snapList = _createSnapList2[0],
      vertices = _createSnapList2[1];
    state.snapList = snapList;
    state.vertices = vertices;
    state.prevQueryBbox = [x - halfCacheSize, y - halfCacheSize, x + halfCacheSize, y + halfCacheSize];
  }
  var _snap = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.snap)(state, e),
    lng = _snap.lng,
    lat = _snap.lat;
  state.snappedLng = lng;
  state.snappedLat = lat;
  if (state.lastVertex && state.lastVertex[0] === lng && state.lastVertex[1] === lat) {
    this.updateUIClasses({
      mouse: cursors.POINTER
    });

    // cursor options:
    // ADD: "add"
    // DRAG: "drag"
    // MOVE: "move"
    // NONE: "none"
    // POINTER: "pointer"
  } else {
    this.updateUIClasses({
      mouse: cursors.ADD
    });
  }
};

// This is 'extending' DrawPoint.toDisplayFeatures
SnapPointMode.toDisplayFeatures = function (state, geojson, display) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.shouldHideGuide)(state, geojson)) return;

  // This relies on the the state of SnapPointMode having a 'point' prop
  DrawPoint.toDisplayFeatures(state, geojson, display);
};

// This is 'extending' DrawPoint.onStop
SnapPointMode.onStop = function (state) {
  this.deleteFeature(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.VERTICAL_GUIDE, {
    silent: true
  });
  this.deleteFeature(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.HORIZONTAL_GUIDE, {
    silent: true
  });

  // remove moveemd callback
  // this.map.off("moveend", state.moveendCallback);

  // This relies on the the state of SnapPointMode having a 'point' prop
  DrawPoint.onStop.call(this, state);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SnapPointMode);

/***/ }),

/***/ "./src/modes/snap_polygon.js":
/*!***********************************!*\
  !*** ./src/modes/snap_polygon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mapbox/mapbox-gl-draw */ "./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js");
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils */ "./src/utils/index.js");
/* harmony import */ var _turf_boolean_intersects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/boolean-intersects */ "./node_modules/@turf/boolean-intersects/dist/es/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var _MapboxDraw$constants = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().constants),
  geojsonTypes = _MapboxDraw$constants.geojsonTypes,
  modes = _MapboxDraw$constants.modes,
  cursors = _MapboxDraw$constants.cursors;
var doubleClickZoom = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().lib).doubleClickZoom;
var DrawPolygon = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().modes).draw_polygon;


var SnapPolygonMode = _objectSpread({}, DrawPolygon);
SnapPolygonMode.onSetup = function (options) {
  var feature = this.newFeature({
    type: geojsonTypes.FEATURE,
    properties: {},
    geometry: {
      type: geojsonTypes.POLYGON,
      coordinates: [[]]
    }
  });
  var verticalGuide = this.newFeature((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGuideFeature)(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.VERTICAL_GUIDE));
  var horizontalGuide = this.newFeature((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGuideFeature)(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.HORIZONTAL_GUIDE));
  this.addFeature(feature);
  this.addFeature(verticalGuide);
  this.addFeature(horizontalGuide);
  var selectedFeatures = this.getSelected();
  this.clearSelectedFeatures();
  doubleClickZoom.disable(this);

  // const [snapList, vertices] = createSnapList(this.map, this._ctx.api, polygon);
  var layers = this.map.getStyle().layers;
  var targetLayers = layers.filter(function (layerInfo) {
    var type = layerInfo.type,
      source = layerInfo.source;
    if (source !== 'mapbox-gl-draw-cold' && source !== 'mapbox-gl-draw-hot' && (type === 'circle' || type === 'line' || type === 'fill')) {
      return true;
    }
    ;
  });
  var targetLayersId = targetLayers.map(function (layerInfo) {
    return layerInfo.id;
  });
  var state = {
    map: this.map,
    feature: feature,
    polygon: feature,
    prevQueryBbox: null,
    currentVertexPosition: 0,
    targetLayersId: targetLayersId,
    selectedFeatures: selectedFeatures,
    verticalGuide: verticalGuide,
    horizontalGuide: horizontalGuide
  };

  // Adding default options
  state.options = Object.assign(this._ctx.options, {
    overlap: true
  });
  var optionsChangedCallBAck = function optionsChangedCallBAck(options) {
    state.options = options;
  };

  // for removing listener later on close
  state["optionsChangedCallBAck"] = optionsChangedCallBAck;
  this.map.on("draw.snap.options_changed", optionsChangedCallBAck);
  return state;
};
SnapPolygonMode.onClick = function (state) {
  // We save some processing by rounding on click, not mousemove
  var lng = state.snappedLng;
  var lat = state.snappedLat;

  // End the drawing if this click is on the previous position
  if (state.currentVertexPosition > 0) {
    var lastVertex = state.feature.coordinates[0][state.currentVertexPosition - 1];
    state.lastVertex = lastVertex;
    if (lastVertex[0] === lng && lastVertex[1] === lat) {
      return this.changeMode(modes.SIMPLE_SELECT, {
        featureIds: [state.feature.id]
      });
    }
  }

  // const point = state.map.project();

  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addPointTovertices)(state.map, state.vertices, {
    lng: lng,
    lat: lat
  });
  state.feature.updateCoordinate("0.".concat(state.currentVertexPosition), lng, lat);
  state.currentVertexPosition++;
  state.feature.updateCoordinate("0.".concat(state.currentVertexPosition), lng, lat);
};
SnapPolygonMode.onMouseMove = function (state, e) {
  state.halfSize = (state.options.snapOptions && state.options.snapOptions.cacheSize || 100) / 2;
  var halfCacheSize = state.halfSize - 15;
  var _e$point = e.point,
    x = _e$point.x,
    y = _e$point.y;
  if (!state.prevQueryBbox || state.prevQueryBbox && !(state.prevQueryBbox[0] < x && state.prevQueryBbox[2] > x && state.prevQueryBbox[1] < y && state.prevQueryBbox[3] > y)) {
    var _createSnapList = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createSnapList)(state, this._ctx.api, e),
      _createSnapList2 = _slicedToArray(_createSnapList, 2),
      snapList = _createSnapList2[0],
      vertices = _createSnapList2[1];
    state.snapList = snapList;
    state.vertices = vertices;
    state.prevQueryBbox = [x - halfCacheSize, y - halfCacheSize, x + halfCacheSize, y + halfCacheSize];
  }
  var _snap = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.snap)(state, e),
    lng = _snap.lng,
    lat = _snap.lat;
  state.feature.updateCoordinate("0.".concat(state.currentVertexPosition), lng, lat);
  state.snappedLng = lng;
  state.snappedLat = lat;
  if (state.lastVertex && state.lastVertex[0] === lng && state.lastVertex[1] === lat) {
    this.updateUIClasses({
      mouse: cursors.POINTER
    });

    // cursor options:
    // ADD: "add"
    // DRAG: "drag"
    // MOVE: "move"
    // NONE: "none"
    // POINTER: "pointer"
  } else {
    this.updateUIClasses({
      mouse: cursors.ADD
    });
  }
};

// This is 'extending' DrawPolygon.toDisplayFeatures
SnapPolygonMode.toDisplayFeatures = function (state, geojson, display) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.shouldHideGuide)(state, geojson)) return;

  // This relies on the the state of SnapPolygonMode being similar to DrawPolygon
  DrawPolygon.toDisplayFeatures(state, geojson, display);
};

// This is 'extending' DrawPolygon.onStop
SnapPolygonMode.onStop = function (state) {
  this.deleteFeature(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.VERTICAL_GUIDE, {
    silent: true
  });
  this.deleteFeature(_utils__WEBPACK_IMPORTED_MODULE_1__.IDS.HORIZONTAL_GUIDE, {
    silent: true
  });
  this.map.off("draw.snap.options_changed", state.optionsChangedCallBAck);
  var userPolygon = state.feature;
  if (state.options.overlap) {
    DrawPolygon.onStop.call(this, state);
    return;
  }
  // if overlap is false, mutate polygon so it doesnt overlap with existing ones
  // get all editable features to check for intersections
  var features = this._ctx.store.getAll();
  try {
    var edited = userPolygon;
    features.forEach(function (feature) {
      if (userPolygon.id === feature.id) return false;
      if (!(0,_turf_boolean_intersects__WEBPACK_IMPORTED_MODULE_2__["default"])(feature, edited)) return;
      edited = turf.difference(edited, feature);
    });
    state.feature.coordinates = edited.coordinates || edited.geometry.coordinates;
  } catch (err) {
    // cancel this polygon if a difference cannot be calculated
    DrawPolygon.onStop.call(this, state);
    this.deleteFeature([state.feature.id], {
      silent: true
    });
    return;
  }

  // monkeypatch so DrawPolygon.onStop doesn't error
  var rc = state.feature.removeCoordinate;
  state.feature.removeCoordinate = function () {};
  // This relies on the the state of SnapPolygonMode being similar to DrawPolygon
  DrawPolygon.onStop.call(this, state);
  state.feature.removeCoordinate = rc.bind(state.feature);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SnapPolygonMode);

/***/ }),

/***/ "./src/utils/customDrawStyles.js":
/*!***************************************!*\
  !*** ./src/utils/customDrawStyles.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mapbox/mapbox-gl-draw */ "./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js");
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var theme = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().lib).theme;
var modifiedDefaultStyles = theme.map(function (defaultStyle) {
  if (defaultStyle.id === 'gl-draw-line-inactive') {
    return _objectSpread(_objectSpread({}, defaultStyle), {}, {
      filter: [].concat(_toConsumableArray(defaultStyle.filter), [['!=', 'user_isSnapGuide', 'true']])
    });
  }
  return defaultStyle;
});
var customDrawStyles = [].concat(_toConsumableArray(modifiedDefaultStyles), [{
  id: "guide",
  type: "line",
  filter: ["all", ["==", "$type", "LineString"], ["==", "user_isSnapGuide", "true"]],
  layout: {
    "line-cap": "round",
    "line-join": "round"
  },
  paint: {
    "line-color": "#c00c00",
    "line-width": 1,
    "line-dasharray": [5, 5]
  }
}]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customDrawStyles);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IDS: () => (/* binding */ IDS),
/* harmony export */   addPointTovertices: () => (/* binding */ addPointTovertices),
/* harmony export */   calcLayerDistances: () => (/* binding */ calcLayerDistances),
/* harmony export */   createSnapList: () => (/* binding */ createSnapList),
/* harmony export */   getGuideFeature: () => (/* binding */ getGuideFeature),
/* harmony export */   shouldHideGuide: () => (/* binding */ shouldHideGuide),
/* harmony export */   snap: () => (/* binding */ snap)
/* harmony export */ });
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mapbox/mapbox-gl-draw */ "./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js");
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _turf_bbox_polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/bbox-polygon */ "./node_modules/@turf/bbox-polygon/dist/es/index.js");
/* harmony import */ var _turf_boolean_disjoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @turf/boolean-disjoint */ "./node_modules/@turf/boolean-disjoint/dist/es/index.js");
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");
/* harmony import */ var _turf_distance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @turf/distance */ "./node_modules/@turf/distance/dist/es/index.js");
/* harmony import */ var _turf_polygon_to_line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @turf/polygon-to-line */ "./node_modules/@turf/polygon-to-line/dist/es/index.js");
/* harmony import */ var _turf_nearest_point_on_line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @turf/nearest-point-on-line */ "./node_modules/@turf/nearest-point-on-line/dist/es/index.js");
/* harmony import */ var _turf_nearest_point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @turf/nearest-point */ "./node_modules/@turf/nearest-point/dist/es/index.js");
/* harmony import */ var _turf_midpoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @turf/midpoint */ "./node_modules/@turf/midpoint/dist/es/index.js");
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Heavily inspired from work of @davidgilbertson on Github and `leaflet-geoman` project.


var geojsonTypes = (_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_0___default().constants).geojsonTypes;









var IDS = {
  VERTICAL_GUIDE: "VERTICAL_GUIDE",
  HORIZONTAL_GUIDE: "HORIZONTAL_GUIDE"
};
var addPointTovertices = function addPointTovertices(map, vertices, coordinates, forceInclusion) {
  var _map$getCanvas = map.getCanvas(),
    w = _map$getCanvas.width,
    h = _map$getCanvas.height;
  // Just add verteices of features currently visible in viewport
  var _map$project = map.project(coordinates),
    x = _map$project.x,
    y = _map$project.y;
  var pointIsOnTheScreen = x > 0 && x < w && y > 0 && y < h;

  // But do add off-screen points if forced (e.g. for the current feature)
  // So features will always snap to their own points
  if (pointIsOnTheScreen || forceInclusion) {
    vertices.push(coordinates);
  }
};
var createSnapList = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function (state, draw, event) {
  var map = state.map,
    currentFeature = state.feature,
    targetLayersId = state.targetLayersId,
    options = state.options;
  var filterLayersId;
  var features = [];
  if (state.options.snapOptions && options.snapOptions.filterLayersId) {
    filterLayersId = options.snapOptions.filterLayersId;
  } else {
    features = draw.getAll().features;
    filterLayersId = targetLayersId;
  }
  var point = event.point;
  var queryFeatures = map.queryRenderedFeatures([[point.x - state.halfSize, point.y - state.halfSize], [point.x + state.halfSize, point.y + state.halfSize]], {
    layers: filterLayersId
  });
  features = [].concat(_toConsumableArray(features), _toConsumableArray(queryFeatures));
  var snapList = [];
  var bboxAsPolygon = function () {
    var canvas = map.getCanvas(),
      w = canvas.width,
      h = canvas.height,
      cUL = map.unproject([0, 0]).toArray(),
      cUR = map.unproject([w, 0]).toArray(),
      cLR = map.unproject([w, h]).toArray(),
      cLL = map.unproject([0, h]).toArray();
    return (0,_turf_bbox_polygon__WEBPACK_IMPORTED_MODULE_2__["default"])([cLL, cUR].flat());
  }();
  var vertices = [];
  var addVerticesTovertices = function addVerticesTovertices(coordinates) {
    var isCurrentFeature = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!Array.isArray(coordinates)) throw Error("Your array is not an array");
    if (Array.isArray(coordinates[0])) {
      // coordinates is an array of arrays, we must go deeper
      coordinates.forEach(function (coord) {
        addVerticesTovertices(coord);
      });
    } else {
      // If not an array of arrays, only consider arrays with two items
      if (coordinates.length === 2) {
        addPointTovertices(map, vertices, coordinates, isCurrentFeature);
      }
    }
  };
  features.forEach(function (feature) {
    // For currentfeature
    if (feature.id === currentFeature.id) {
      if (currentFeature.type === geojsonTypes.POLYGON) {
        // For the current polygon, the last two points are the mouse position and back home
        // so we chop those off (else we get vertices showing where the user clicked, even
        // if they were just panning the map)
        addVerticesTovertices(feature.geometry.coordinates[0].slice(0, -2), true);
      }
      return;
    }

    // If this is re-running because a user is moving the map, the features might include
    // vertices or the last leg of a polygon
    if (feature.id === IDS.HORIZONTAL_GUIDE || feature.id === IDS.VERTICAL_GUIDE) return;
    addVerticesTovertices(feature.geometry.coordinates);

    // If feature is currently on viewport add to snap list
    if (!(0,_turf_boolean_disjoint__WEBPACK_IMPORTED_MODULE_3__["default"])(bboxAsPolygon, feature)) {
      snapList.push(feature);
    }
  });
  return [snapList, vertices];
}, 150, {
  leading: true
});
var getNearbyvertices = function getNearbyvertices(vertices, coords) {
  var verticals = [];
  var horizontals = [];
  vertices.forEach(function (vertex) {
    verticals.push(vertex[0]);
    horizontals.push(vertex[1]);
  });
  var nearbyVerticalGuide = verticals.find(function (px) {
    return Math.abs(px - coords.lng) < 0.009;
  });
  var nearbyHorizontalGuide = horizontals.find(function (py) {
    return Math.abs(py - coords.lat) < 0.009;
  });
  return {
    verticalPx: nearbyVerticalGuide,
    horizontalPx: nearbyHorizontalGuide
  };
};
var calcLayerDistances = function calcLayerDistances(lngLat, layer) {
  // the point P which we want to snap (probpably the marker that is dragged)
  var P = [lngLat.lng, lngLat.lat];

  // is this a marker?
  var isMarker = layer.geometry.type === "Point";
  // is it a polygon?
  var isPolygon = layer.geometry.type === "Polygon";
  // is it a multiPolygon?
  var isMultiPolygon = layer.geometry.type === "MultiPolygon";
  // is it a multiPoint?
  var isMultiPoint = layer.geometry.type === "MultiPoint";
  var lines = undefined;

  // the coords of the layer
  var latlngs = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_4__.getCoords)(layer);
  if (isMarker) {
    var _latlngs = _slicedToArray(latlngs, 2),
      _lng = _latlngs[0],
      _lat = _latlngs[1];
    // return the info for the marker, no more calculations needed
    return {
      latlng: {
        lng: _lng,
        lat: _lat
      },
      distance: (0,_turf_distance__WEBPACK_IMPORTED_MODULE_5__["default"])(latlngs, P)
    };
  }
  if (isMultiPoint) {
    var np = (0,_turf_nearest_point__WEBPACK_IMPORTED_MODULE_8__["default"])(P, (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_10__.featureCollection)(latlngs.map(function (x) {
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_10__.point)(x);
    })));
    var c = np.geometry.coordinates;
    return {
      latlng: {
        lng: c[0],
        lat: c[1]
      },
      distance: np.properties.distanceToPoint
    };
  }
  if (isPolygon || isMultiPolygon) {
    lines = (0,_turf_polygon_to_line__WEBPACK_IMPORTED_MODULE_6__["default"])(layer);
  } else {
    lines = layer;
  }
  var nearestPoint;
  if (isPolygon) {
    var lineStrings;
    if (lines.geometry.type === "LineString") {
      lineStrings = [(0,_turf_helpers__WEBPACK_IMPORTED_MODULE_10__.lineString)(lines.geometry.coordinates)];
    } else {
      lineStrings = lines.geometry.coordinates.map(function (coords) {
        return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_10__.lineString)(coords);
      });
    }
    var closestFeature = getFeatureWithNearestPoint(lineStrings, P);
    lines = closestFeature.feature;
    nearestPoint = closestFeature.point;
  } else if (isMultiPolygon) {
    var _lineStrings = lines.features.map(function (feat) {
      if (feat.geometry.type === "LineString") {
        return [feat.geometry.coordinates];
      } else {
        return feat.geometry.coordinates;
      }
    }).flatMap(function (coords) {
      return coords;
    }).map(function (coords) {
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_10__.lineString)(coords);
    });
    var _closestFeature = getFeatureWithNearestPoint(_lineStrings, P);
    lines = _closestFeature.feature;
    nearestPoint = _closestFeature.point;
  } else {
    nearestPoint = (0,_turf_nearest_point_on_line__WEBPACK_IMPORTED_MODULE_7__["default"])(lines, P);
  }
  var _nearestPoint$geometr = _slicedToArray(nearestPoint.geometry.coordinates, 2),
    lng = _nearestPoint$geometr[0],
    lat = _nearestPoint$geometr[1];
  var segmentIndex = nearestPoint.properties.index;
  if (segmentIndex + 1 === lines.geometry.coordinates.length) segmentIndex--;
  return {
    latlng: {
      lng: lng,
      lat: lat
    },
    segment: lines.geometry.coordinates.slice(segmentIndex, segmentIndex + 2),
    distance: nearestPoint.properties.dist,
    isMarker: isMarker
  };
};
function getFeatureWithNearestPoint(lineStrings, P) {
  var nearestPointsOfEachFeature = lineStrings.map(function (feat) {
    return {
      feature: feat,
      point: (0,_turf_nearest_point_on_line__WEBPACK_IMPORTED_MODULE_7__["default"])(feat, P)
    };
  });
  nearestPointsOfEachFeature.sort(function (a, b) {
    return a.point.properties.dist - b.point.properties.dist;
  });
  return {
    feature: nearestPointsOfEachFeature[0].feature,
    point: nearestPointsOfEachFeature[0].point
  };
}
var calcClosestLayer = function calcClosestLayer(lngLat, layers) {
  var closestLayer = {};

  // loop through the layers
  layers.forEach(function (layer, index) {
    // find the closest latlng, segment and the distance of this layer to the dragged marker latlng
    var results = calcLayerDistances(lngLat, layer);

    // save the info if it doesn't exist or if the distance is smaller than the previous one
    if (closestLayer.distance === undefined || results.distance < closestLayer.distance) {
      closestLayer = results;
      closestLayer.layer = layer;
    }
  });

  // return the closest layer and it's data
  // if there is no closest layer, return undefined
  return closestLayer;
};

// minimal distance before marker snaps (in pixels)
var metersPerPixel = function metersPerPixel(latitude, zoomLevel) {
  var earthCircumference = 40075017;
  var latitudeRadians = latitude * (Math.PI / 180);
  return earthCircumference * Math.cos(latitudeRadians) / Math.pow(2, zoomLevel + 8);
};

// we got the point we want to snap to (C), but we need to check if a coord of the polygon
function snapToLineOrPolygon(closestLayer, snapOptions, snapVertexPriorityDistance) {
  console.log('closestLayer', closestLayer);
  // A and B are the points of the closest segment to P (the marker position we want to snap)
  var A = closestLayer.segment[0];
  var B = closestLayer.segment[1];
  if (!A || !B) {
    return;
  }

  // C is the point we would snap to on the segment.
  // The closest point on the closest segment of the closest polygon to P. That's right.
  var C = [closestLayer.latlng.lng, closestLayer.latlng.lat];

  // distances from A to C and B to C to check which one is closer to C
  var distanceAC = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_5__["default"])(A, C);
  var distanceBC = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_5__["default"])(B, C);

  // closest latlng of A and B to C
  var closestVertexLatLng = distanceAC < distanceBC ? A : B;

  // distance between closestVertexLatLng and C
  var shortestDistance = distanceAC < distanceBC ? distanceAC : distanceBC;

  // snap to middle (M) of segment if option is enabled
  if (snapOptions && snapOptions.snapToMidPoints) {
    var M = (0,_turf_midpoint__WEBPACK_IMPORTED_MODULE_9__["default"])(A, B).geometry.coordinates;
    var distanceMC = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_5__["default"])(M, C);
    if (distanceMC < distanceAC && distanceMC < distanceBC) {
      // M is the nearest vertex
      closestVertexLatLng = M;
      shortestDistance = distanceMC;
    }
  }

  // the distance that needs to be undercut to trigger priority
  var priorityDistance = snapVertexPriorityDistance;

  // the latlng we ultemately want to snap to
  var snapLatlng;

  // if C is closer to the closestVertexLatLng (A, B or M) than the snapDistance,
  // the closestVertexLatLng has priority over C as the snapping point.
  if (shortestDistance < priorityDistance) {
    snapLatlng = closestVertexLatLng;
  } else {
    snapLatlng = C;
  }

  // return the copy of snapping point
  var _snapLatlng = snapLatlng,
    _snapLatlng2 = _slicedToArray(_snapLatlng, 2),
    lng = _snapLatlng2[0],
    lat = _snapLatlng2[1];
  return {
    lng: lng,
    lat: lat
  };
}
function snapToPoint(closestLayer) {
  return closestLayer.latlng;
}
var checkPrioritiySnapping = function checkPrioritiySnapping(closestLayer, snapOptions) {
  var snapVertexPriorityDistance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.25;
  var snappingToPoint = !Array.isArray(closestLayer.segment);
  if (snappingToPoint) {
    return snapToPoint(closestLayer);
  } else {
    return snapToLineOrPolygon(closestLayer, snapOptions, snapVertexPriorityDistance);
  }
};

/**
 * Returns snap points if there are any, otherwise the original lng/lat of the event
 * Also, defines if vertices should show on the state object
 *
 * Mutates the state object
 *
 * @param state
 * @param e
 * @returns {{lng: number, lat: number}}
 */
var snap = function snap(state, e) {
  var lng = e.lngLat.lng;
  var lat = e.lngLat.lat;

  // Holding alt bypasses all snapping
  if (e.originalEvent.altKey) {
    state.showVerticalSnapLine = false;
    state.showHorizontalSnapLine = false;
    return {
      lng: lng,
      lat: lat
    };
  }
  if (state.snapList.length <= 0) {
    return {
      lng: lng,
      lat: lat
    };
  }

  // snapping is on
  var closestLayer, minDistance, snapLatLng;
  if (state.options.snap) {
    closestLayer = calcClosestLayer({
      lng: lng,
      lat: lat
    }, state.snapList);

    // if no layers found. Can happen when circle is the only visible layer on the map and the hidden snapping-border circle layer is also on the map
    if (Object.keys(closestLayer).length === 0) {
      return false;
    }
    var isMarker = closestLayer.isMarker;
    var snapVertexPriorityDistance = state.options.snapOptions ? state.options.snapOptions.snapVertexPriorityDistance : undefined;
    if (!isMarker) {
      snapLatLng = checkPrioritiySnapping(closestLayer, state.options.snapOptions, snapVertexPriorityDistance);
      // snapLatLng = closestLayer.latlng;
    } else {
      snapLatLng = closestLayer.latlng;
    }
    if (!snapLatLng) {
      return {};
    }
    minDistance = (state.options.snapOptions && state.options.snapOptions.snapPx || 15) * metersPerPixel(snapLatLng.lat, state.map.getZoom());
  }
  var verticalPx, horizontalPx;
  if (state.options.guides) {
    var nearestGuidline = getNearbyvertices(state.vertices, e.lngLat);
    verticalPx = nearestGuidline.verticalPx;
    horizontalPx = nearestGuidline.horizontalPx;
    if (verticalPx) {
      // Draw a line from top to bottom

      var lngLatTop = {
        lng: verticalPx,
        lat: e.lngLat.lat + 10
      };
      var lngLatBottom = {
        lng: verticalPx,
        lat: e.lngLat.lat - 10
      };
      state.verticalGuide.updateCoordinate(0, lngLatTop.lng, lngLatTop.lat);
      state.verticalGuide.updateCoordinate(1, lngLatBottom.lng, lngLatBottom.lat);
    }
    if (horizontalPx) {
      // Draw a line from left to right

      var _lngLatTop = {
        lng: e.lngLat.lng + 10,
        lat: horizontalPx
      };
      var _lngLatBottom = {
        lng: e.lngLat.lng - 10,
        lat: horizontalPx
      };
      state.horizontalGuide.updateCoordinate(0, _lngLatTop.lng, _lngLatTop.lat);
      state.horizontalGuide.updateCoordinate(1, _lngLatBottom.lng, _lngLatBottom.lat);
    }
    state.showVerticalSnapLine = !!verticalPx;
    state.showHorizontalSnapLine = !!horizontalPx;
  }
  if (closestLayer && closestLayer.distance * 1000 < minDistance) {
    return snapLatLng;
  } else if (verticalPx || horizontalPx) {
    if (verticalPx) {
      lng = verticalPx;
    }
    if (horizontalPx) {
      lat = horizontalPx;
    }
    return {
      lng: lng,
      lat: lat
    };
  } else {
    return {
      lng: lng,
      lat: lat
    };
  }
};
var getGuideFeature = function getGuideFeature(id) {
  return {
    id: id,
    type: geojsonTypes.FEATURE,
    properties: {
      isSnapGuide: "true" // for styling
    },

    geometry: {
      type: geojsonTypes.LINE_STRING,
      coordinates: []
    }
  };
};
var shouldHideGuide = function shouldHideGuide(state, geojson) {
  if (geojson.properties.id === IDS.VERTICAL_GUIDE && (!state.options.guides || !state.showVerticalSnapLine)) {
    return true;
  }
  if (geojson.properties.id === IDS.HORIZONTAL_GUIDE && (!state.options.guides || !state.showHorizontalSnapLine)) {
    return true;
  }
  return false;
};

/***/ }),

/***/ "./node_modules/geojson-rbush/index.js":
/*!*********************************************!*\
  !*** ./node_modules/geojson-rbush/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rbush = __webpack_require__(/*! rbush */ "./node_modules/geojson-rbush/node_modules/rbush/rbush.min.js");
var helpers = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/js/index.js");
var meta = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/dist/js/index.js");
var turfBBox = (__webpack_require__(/*! @turf/bbox */ "./node_modules/@turf/bbox/dist/js/index.js")["default"]);
var featureEach = meta.featureEach;
var coordEach = meta.coordEach;
var polygon = helpers.polygon;
var featureCollection = helpers.featureCollection;

/**
 * GeoJSON implementation of [RBush](https://github.com/mourner/rbush#rbush) spatial index.
 *
 * @name rbush
 * @param {number} [maxEntries=9] defines the maximum number of entries in a tree node. 9 (used by default) is a
 * reasonable choice for most applications. Higher value means faster insertion and slower search, and vice versa.
 * @returns {RBush} GeoJSON RBush
 * @example
 * var geojsonRbush = require('geojson-rbush').default;
 * var tree = geojsonRbush();
 */
function geojsonRbush(maxEntries) {
    var tree = new rbush(maxEntries);
    /**
     * [insert](https://github.com/mourner/rbush#data-format)
     *
     * @param {Feature} feature insert single GeoJSON Feature
     * @returns {RBush} GeoJSON RBush
     * @example
     * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
     * tree.insert(poly)
     */
    tree.insert = function (feature) {
        if (feature.type !== 'Feature') throw new Error('invalid feature');
        feature.bbox = feature.bbox ? feature.bbox : turfBBox(feature);
        return rbush.prototype.insert.call(this, feature);
    };

    /**
     * [load](https://github.com/mourner/rbush#bulk-inserting-data)
     *
     * @param {FeatureCollection|Array<Feature>} features load entire GeoJSON FeatureCollection
     * @returns {RBush} GeoJSON RBush
     * @example
     * var polys = turf.polygons([
     *     [[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]],
     *     [[[-93, 32], [-83, 32], [-83, 39], [-93, 39], [-93, 32]]]
     * ]);
     * tree.load(polys);
     */
    tree.load = function (features) {
        var load = [];
        // Load an Array of Features
        if (Array.isArray(features)) {
            features.forEach(function (feature) {
                if (feature.type !== 'Feature') throw new Error('invalid features');
                feature.bbox = feature.bbox ? feature.bbox : turfBBox(feature);
                load.push(feature);
            });
        } else {
            // Load a FeatureCollection
            featureEach(features, function (feature) {
                if (feature.type !== 'Feature') throw new Error('invalid features');
                feature.bbox = feature.bbox ? feature.bbox : turfBBox(feature);
                load.push(feature);
            });
        }
        return rbush.prototype.load.call(this, load);
    };

    /**
     * [remove](https://github.com/mourner/rbush#removing-data)
     *
     * @param {Feature} feature remove single GeoJSON Feature
     * @param {Function} equals Pass a custom equals function to compare by value for removal.
     * @returns {RBush} GeoJSON RBush
     * @example
     * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
     *
     * tree.remove(poly);
     */
    tree.remove = function (feature, equals) {
        if (feature.type !== 'Feature') throw new Error('invalid feature');
        feature.bbox = feature.bbox ? feature.bbox : turfBBox(feature);
        return rbush.prototype.remove.call(this, feature, equals);
    };

    /**
     * [clear](https://github.com/mourner/rbush#removing-data)
     *
     * @returns {RBush} GeoJSON Rbush
     * @example
     * tree.clear()
     */
    tree.clear = function () {
        return rbush.prototype.clear.call(this);
    };

    /**
     * [search](https://github.com/mourner/rbush#search)
     *
     * @param {BBox|FeatureCollection|Feature} geojson search with GeoJSON
     * @returns {FeatureCollection} all features that intersects with the given GeoJSON.
     * @example
     * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
     *
     * tree.search(poly);
     */
    tree.search = function (geojson) {
        var features = rbush.prototype.search.call(this, this.toBBox(geojson));
        return featureCollection(features);
    };

    /**
     * [collides](https://github.com/mourner/rbush#collisions)
     *
     * @param {BBox|FeatureCollection|Feature} geojson collides with GeoJSON
     * @returns {boolean} true if there are any items intersecting the given GeoJSON, otherwise false.
     * @example
     * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
     *
     * tree.collides(poly);
     */
    tree.collides = function (geojson) {
        return rbush.prototype.collides.call(this, this.toBBox(geojson));
    };

    /**
     * [all](https://github.com/mourner/rbush#search)
     *
     * @returns {FeatureCollection} all the features in RBush
     * @example
     * tree.all()
     */
    tree.all = function () {
        var features = rbush.prototype.all.call(this);
        return featureCollection(features);
    };

    /**
     * [toJSON](https://github.com/mourner/rbush#export-and-import)
     *
     * @returns {any} export data as JSON object
     * @example
     * var exported = tree.toJSON()
     */
    tree.toJSON = function () {
        return rbush.prototype.toJSON.call(this);
    };

    /**
     * [fromJSON](https://github.com/mourner/rbush#export-and-import)
     *
     * @param {any} json import previously exported data
     * @returns {RBush} GeoJSON RBush
     * @example
     * var exported = {
     *   "children": [
     *     {
     *       "type": "Feature",
     *       "geometry": {
     *         "type": "Point",
     *         "coordinates": [110, 50]
     *       },
     *       "properties": {},
     *       "bbox": [110, 50, 110, 50]
     *     }
     *   ],
     *   "height": 1,
     *   "leaf": true,
     *   "minX": 110,
     *   "minY": 50,
     *   "maxX": 110,
     *   "maxY": 50
     * }
     * tree.fromJSON(exported)
     */
    tree.fromJSON = function (json) {
        return rbush.prototype.fromJSON.call(this, json);
    };

    /**
     * Converts GeoJSON to {minX, minY, maxX, maxY} schema
     *
     * @private
     * @param {BBox|FeatureCollection|Feature} geojson feature(s) to retrieve BBox from
     * @returns {Object} converted to {minX, minY, maxX, maxY}
     */
    tree.toBBox = function (geojson) {
        var bbox;
        if (geojson.bbox) bbox = geojson.bbox;
        else if (Array.isArray(geojson) && geojson.length === 4) bbox = geojson;
        else if (Array.isArray(geojson) && geojson.length === 6) bbox = [geojson[0], geojson[1], geojson[3], geojson[4]];
        else if (geojson.type === 'Feature') bbox = turfBBox(geojson);
        else if (geojson.type === 'FeatureCollection') bbox = turfBBox(geojson);
        else throw new Error('invalid geojson')

        return {
            minX: bbox[0],
            minY: bbox[1],
            maxX: bbox[2],
            maxY: bbox[3]
        };
    };
    return tree;
}

module.exports = geojsonRbush;
module.exports["default"] = geojsonRbush;


/***/ }),

/***/ "./node_modules/geojson-rbush/node_modules/rbush/rbush.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/geojson-rbush/node_modules/rbush/rbush.min.js ***!
  \********************************************************************/
/***/ (function(module) {

!function(t,i){ true?module.exports=i():0}(this,function(){"use strict";function t(t,r,e,a,h){!function t(n,r,e,a,h){for(;a>e;){if(a-e>600){var o=a-e+1,s=r-e+1,l=Math.log(o),f=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*f*(o-f)/o)*(s-o/2<0?-1:1),m=Math.max(e,Math.floor(r-s*f/o+u)),c=Math.min(a,Math.floor(r+(o-s)*f/o+u));t(n,r,m,c,h)}var p=n[r],d=e,x=a;for(i(n,e,r),h(n[a],p)>0&&i(n,e,a);d<x;){for(i(n,d,x),d++,x--;h(n[d],p)<0;)d++;for(;h(n[x],p)>0;)x--}0===h(n[e],p)?i(n,e,x):i(n,++x,a),x<=r&&(e=x+1),r<=x&&(a=x-1)}}(t,r,e||0,a||t.length-1,h||n)}function i(t,i,n){var r=t[i];t[i]=t[n],t[n]=r}function n(t,i){return t<i?-1:t>i?1:0}var r=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function e(t,i,n){if(!n)return i.indexOf(t);for(var r=0;r<i.length;r++)if(n(t,i[r]))return r;return-1}function a(t,i){h(t,0,t.children.length,i,t)}function h(t,i,n,r,e){e||(e=p(null)),e.minX=1/0,e.minY=1/0,e.maxX=-1/0,e.maxY=-1/0;for(var a=i;a<n;a++){var h=t.children[a];o(e,t.leaf?r(h):h)}return e}function o(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function s(t,i){return t.minX-i.minX}function l(t,i){return t.minY-i.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function c(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function p(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function d(i,n,r,e,a){for(var h=[n,r];h.length;)if(!((r=h.pop())-(n=h.pop())<=e)){var o=n+Math.ceil((r-n)/e/2)*e;t(i,o,n,r,a),h.push(n,o,o,r)}}return r.prototype.all=function(){return this._all(this.data,[])},r.prototype.search=function(t){var i=this.data,n=[];if(!c(t,i))return n;for(var r=this.toBBox,e=[];i;){for(var a=0;a<i.children.length;a++){var h=i.children[a],o=i.leaf?r(h):h;c(t,o)&&(i.leaf?n.push(h):m(t,o)?this._all(h,n):e.push(h))}i=e.pop()}return n},r.prototype.collides=function(t){var i=this.data;if(!c(t,i))return!1;for(var n=[];i;){for(var r=0;r<i.children.length;r++){var e=i.children[r],a=i.leaf?this.toBBox(e):e;if(c(t,a)){if(i.leaf||m(t,a))return!0;n.push(e)}}i=n.pop()}return!1},r.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0;i<t.length;i++)this.insert(t[i]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},r.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},r.prototype.clear=function(){return this.data=p([]),this},r.prototype.remove=function(t,i){if(!t)return this;for(var n,r,a,h=this.data,o=this.toBBox(t),s=[],l=[];h||s.length;){if(h||(h=s.pop(),r=s[s.length-1],n=l.pop(),a=!0),h.leaf){var f=e(t,h.children,i);if(-1!==f)return h.children.splice(f,1),s.push(h),this._condense(s),this}a||h.leaf||!m(h,o)?r?(n++,h=r.children[n],a=!1):h=null:(s.push(h),l.push(n),n=0,r=h,h=h.children[0])}return this},r.prototype.toBBox=function(t){return t},r.prototype.compareMinX=function(t,i){return t.minX-i.minX},r.prototype.compareMinY=function(t,i){return t.minY-i.minY},r.prototype.toJSON=function(){return this.data},r.prototype.fromJSON=function(t){return this.data=t,this},r.prototype._all=function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},r.prototype._build=function(t,i,n,r){var e,h=n-i+1,o=this._maxEntries;if(h<=o)return a(e=p(t.slice(i,n+1)),this.toBBox),e;r||(r=Math.ceil(Math.log(h)/Math.log(o)),o=Math.ceil(h/Math.pow(o,r-1))),(e=p([])).leaf=!1,e.height=r;var s=Math.ceil(h/o),l=s*Math.ceil(Math.sqrt(o));d(t,i,n,l,this.compareMinX);for(var f=i;f<=n;f+=l){var u=Math.min(f+l-1,n);d(t,f,u,s,this.compareMinY);for(var m=f;m<=u;m+=s){var c=Math.min(m+s-1,u);e.children.push(this._build(t,m,c,r-1))}}return a(e,this.toBBox),e},r.prototype._chooseSubtree=function(t,i,n,r){for(;r.push(i),!i.leaf&&r.length-1!==n;){for(var e=1/0,a=1/0,h=void 0,o=0;o<i.children.length;o++){var s=i.children[o],l=f(s),u=(m=t,c=s,(Math.max(c.maxX,m.maxX)-Math.min(c.minX,m.minX))*(Math.max(c.maxY,m.maxY)-Math.min(c.minY,m.minY))-l);u<a?(a=u,e=l<e?l:e,h=s):u===a&&l<e&&(e=l,h=s)}i=h||i.children[0]}var m,c;return i},r.prototype._insert=function(t,i,n){var r=n?t:this.toBBox(t),e=[],a=this._chooseSubtree(r,this.data,i,e);for(a.children.push(t),o(a,r);i>=0&&e[i].children.length>this._maxEntries;)this._split(e,i),i--;this._adjustParentBBoxes(r,e,i)},r.prototype._split=function(t,i){var n=t[i],r=n.children.length,e=this._minEntries;this._chooseSplitAxis(n,e,r);var h=this._chooseSplitIndex(n,e,r),o=p(n.children.splice(h,n.children.length-h));o.height=n.height,o.leaf=n.leaf,a(n,this.toBBox),a(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o)},r.prototype._splitRoot=function(t,i){this.data=p([t,i]),this.data.height=t.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},r.prototype._chooseSplitIndex=function(t,i,n){for(var r,e,a,o,s,l,u,m=1/0,c=1/0,p=i;p<=n-i;p++){var d=h(t,0,p,this.toBBox),x=h(t,p,n,this.toBBox),v=(e=d,a=x,o=void 0,s=void 0,l=void 0,u=void 0,o=Math.max(e.minX,a.minX),s=Math.max(e.minY,a.minY),l=Math.min(e.maxX,a.maxX),u=Math.min(e.maxY,a.maxY),Math.max(0,l-o)*Math.max(0,u-s)),M=f(d)+f(x);v<m?(m=v,r=p,c=M<c?M:c):v===m&&M<c&&(c=M,r=p)}return r||n-i},r.prototype._chooseSplitAxis=function(t,i,n){var r=t.leaf?this.compareMinX:s,e=t.leaf?this.compareMinY:l;this._allDistMargin(t,i,n,r)<this._allDistMargin(t,i,n,e)&&t.children.sort(r)},r.prototype._allDistMargin=function(t,i,n,r){t.children.sort(r);for(var e=this.toBBox,a=h(t,0,i,e),s=h(t,n-i,n,e),l=u(a)+u(s),f=i;f<n-i;f++){var m=t.children[f];o(a,t.leaf?e(m):m),l+=u(a)}for(var c=n-i-1;c>=i;c--){var p=t.children[c];o(s,t.leaf?e(p):p),l+=u(s)}return l},r.prototype._adjustParentBBoxes=function(t,i,n){for(var r=n;r>=0;r--)o(i[r],t)},r.prototype._condense=function(t){for(var i=t.length-1,n=void 0;i>=0;i--)0===t[i].children.length?i>0?(n=t[i-1].children).splice(n.indexOf(t[i]),1):this.clear():a(t[i],this.toBBox)},r});


/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/@turf/bbox-polygon/dist/es/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@turf/bbox-polygon/dist/es/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bboxPolygon)
/* harmony export */ });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");

/**
 * Takes a bbox and returns an equivalent {@link Polygon|polygon}.
 *
 * @name bboxPolygon
 * @param {BBox} bbox extent in [minX, minY, maxX, maxY] order
 * @param {Object} [options={}] Optional parameters
 * @param {Properties} [options.properties={}] Translate properties to Polygon
 * @param {string|number} [options.id={}] Translate Id to Polygon
 * @returns {Feature<Polygon>} a Polygon representation of the bounding box
 * @example
 * var bbox = [0, 0, 10, 10];
 *
 * var poly = turf.bboxPolygon(bbox);
 *
 * //addToMap
 * var addToMap = [poly]
 */
function bboxPolygon(bbox, options) {
    if (options === void 0) { options = {}; }
    // Convert BBox positions to Numbers
    // No performance loss for including Number()
    // https://github.com/Turfjs/turf/issues/1119
    var west = Number(bbox[0]);
    var south = Number(bbox[1]);
    var east = Number(bbox[2]);
    var north = Number(bbox[3]);
    if (bbox.length === 6) {
        throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");
    }
    var lowLeft = [west, south];
    var topLeft = [west, north];
    var topRight = [east, north];
    var lowRight = [east, south];
    return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.polygon)([[lowLeft, lowRight, topRight, topLeft, lowLeft]], options.properties, { bbox: bbox, id: options.id });
}


/***/ }),

/***/ "./node_modules/@turf/bearing/dist/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@turf/bearing/dist/es/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bearing)
/* harmony export */ });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");


// http://en.wikipedia.org/wiki/Haversine_formula
// http://www.movable-type.co.uk/scripts/latlong.html
/**
 * Takes two {@link Point|points} and finds the geographic bearing between them,
 * i.e. the angle measured in degrees from the north line (0 degrees)
 *
 * @name bearing
 * @param {Coord} start starting Point
 * @param {Coord} end ending Point
 * @param {Object} [options={}] Optional parameters
 * @param {boolean} [options.final=false] calculates the final bearing if true
 * @returns {number} bearing in decimal degrees, between -180 and 180 degrees (positive clockwise)
 * @example
 * var point1 = turf.point([-75.343, 39.984]);
 * var point2 = turf.point([-75.534, 39.123]);
 *
 * var bearing = turf.bearing(point1, point2);
 *
 * //addToMap
 * var addToMap = [point1, point2]
 * point1.properties['marker-color'] = '#f00'
 * point2.properties['marker-color'] = '#0f0'
 * point1.properties.bearing = bearing
 */
function bearing(start, end, options) {
    if (options === void 0) { options = {}; }
    // Reverse calculation
    if (options.final === true) {
        return calculateFinalBearing(start, end);
    }
    var coordinates1 = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getCoord)(start);
    var coordinates2 = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getCoord)(end);
    var lon1 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(coordinates1[0]);
    var lon2 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(coordinates2[0]);
    var lat1 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(coordinates1[1]);
    var lat2 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(coordinates2[1]);
    var a = Math.sin(lon2 - lon1) * Math.cos(lat2);
    var b = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.radiansToDegrees)(Math.atan2(a, b));
}
/**
 * Calculates Final Bearing
 *
 * @private
 * @param {Coord} start starting Point
 * @param {Coord} end ending Point
 * @returns {number} bearing
 */
function calculateFinalBearing(start, end) {
    // Swap start & end
    var bear = bearing(end, start);
    bear = (bear + 180) % 360;
    return bear;
}


/***/ }),

/***/ "./node_modules/@turf/boolean-disjoint/dist/es/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@turf/boolean-disjoint/dist/es/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/boolean-point-in-polygon */ "./node_modules/@turf/boolean-point-in-polygon/dist/es/index.js");
/* harmony import */ var _turf_line_intersect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/line-intersect */ "./node_modules/@turf/line-intersect/dist/es/index.js");
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/dist/es/index.js");
/* harmony import */ var _turf_polygon_to_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @turf/polygon-to-line */ "./node_modules/@turf/polygon-to-line/dist/es/index.js");




/**
 * Boolean-disjoint returns (TRUE) if the intersection of the two geometries is an empty set.
 *
 * @name booleanDisjoint
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature or Geometry
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature or Geometry
 * @returns {boolean} true/false
 * @example
 * var point = turf.point([2, 2]);
 * var line = turf.lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * turf.booleanDisjoint(line, point);
 * //=true
 */
function booleanDisjoint(feature1, feature2) {
    var bool = true;
    (0,_turf_meta__WEBPACK_IMPORTED_MODULE_2__.flattenEach)(feature1, function (flatten1) {
        (0,_turf_meta__WEBPACK_IMPORTED_MODULE_2__.flattenEach)(feature2, function (flatten2) {
            if (bool === false) {
                return false;
            }
            bool = disjoint(flatten1.geometry, flatten2.geometry);
        });
    });
    return bool;
}
/**
 * Disjoint operation for simple Geometries (Point/LineString/Polygon)
 *
 * @private
 * @param {Geometry<any>} geom1 GeoJSON Geometry
 * @param {Geometry<any>} geom2 GeoJSON Geometry
 * @returns {boolean} true/false
 */
function disjoint(geom1, geom2) {
    switch (geom1.type) {
        case "Point":
            switch (geom2.type) {
                case "Point":
                    return !compareCoords(geom1.coordinates, geom2.coordinates);
                case "LineString":
                    return !isPointOnLine(geom2, geom1);
                case "Polygon":
                    return !(0,_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__["default"])(geom1, geom2);
            }
            /* istanbul ignore next */
            break;
        case "LineString":
            switch (geom2.type) {
                case "Point":
                    return !isPointOnLine(geom1, geom2);
                case "LineString":
                    return !isLineOnLine(geom1, geom2);
                case "Polygon":
                    return !isLineInPoly(geom2, geom1);
            }
            /* istanbul ignore next */
            break;
        case "Polygon":
            switch (geom2.type) {
                case "Point":
                    return !(0,_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__["default"])(geom2, geom1);
                case "LineString":
                    return !isLineInPoly(geom1, geom2);
                case "Polygon":
                    return !isPolyInPoly(geom2, geom1);
            }
    }
    return false;
}
// http://stackoverflow.com/a/11908158/1979085
function isPointOnLine(lineString, pt) {
    for (var i = 0; i < lineString.coordinates.length - 1; i++) {
        if (isPointOnLineSegment(lineString.coordinates[i], lineString.coordinates[i + 1], pt.coordinates)) {
            return true;
        }
    }
    return false;
}
function isLineOnLine(lineString1, lineString2) {
    var doLinesIntersect = (0,_turf_line_intersect__WEBPACK_IMPORTED_MODULE_1__["default"])(lineString1, lineString2);
    if (doLinesIntersect.features.length > 0) {
        return true;
    }
    return false;
}
function isLineInPoly(polygon, lineString) {
    for (var _i = 0, _a = lineString.coordinates; _i < _a.length; _i++) {
        var coord = _a[_i];
        if ((0,_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__["default"])(coord, polygon)) {
            return true;
        }
    }
    var doLinesIntersect = (0,_turf_line_intersect__WEBPACK_IMPORTED_MODULE_1__["default"])(lineString, (0,_turf_polygon_to_line__WEBPACK_IMPORTED_MODULE_3__["default"])(polygon));
    if (doLinesIntersect.features.length > 0) {
        return true;
    }
    return false;
}
/**
 * Is Polygon (geom1) in Polygon (geom2)
 * Only takes into account outer rings
 * See http://stackoverflow.com/a/4833823/1979085
 *
 * @private
 * @param {Geometry|Feature<Polygon>} feature1 Polygon1
 * @param {Geometry|Feature<Polygon>} feature2 Polygon2
 * @returns {boolean} true/false
 */
function isPolyInPoly(feature1, feature2) {
    for (var _i = 0, _a = feature1.coordinates[0]; _i < _a.length; _i++) {
        var coord1 = _a[_i];
        if ((0,_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__["default"])(coord1, feature2)) {
            return true;
        }
    }
    for (var _b = 0, _c = feature2.coordinates[0]; _b < _c.length; _b++) {
        var coord2 = _c[_b];
        if ((0,_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__["default"])(coord2, feature1)) {
            return true;
        }
    }
    var doLinesIntersect = (0,_turf_line_intersect__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_turf_polygon_to_line__WEBPACK_IMPORTED_MODULE_3__["default"])(feature1), (0,_turf_polygon_to_line__WEBPACK_IMPORTED_MODULE_3__["default"])(feature2));
    if (doLinesIntersect.features.length > 0) {
        return true;
    }
    return false;
}
function isPointOnLineSegment(lineSegmentStart, lineSegmentEnd, pt) {
    var dxc = pt[0] - lineSegmentStart[0];
    var dyc = pt[1] - lineSegmentStart[1];
    var dxl = lineSegmentEnd[0] - lineSegmentStart[0];
    var dyl = lineSegmentEnd[1] - lineSegmentStart[1];
    var cross = dxc * dyl - dyc * dxl;
    if (cross !== 0) {
        return false;
    }
    if (Math.abs(dxl) >= Math.abs(dyl)) {
        if (dxl > 0) {
            return lineSegmentStart[0] <= pt[0] && pt[0] <= lineSegmentEnd[0];
        }
        else {
            return lineSegmentEnd[0] <= pt[0] && pt[0] <= lineSegmentStart[0];
        }
    }
    else if (dyl > 0) {
        return lineSegmentStart[1] <= pt[1] && pt[1] <= lineSegmentEnd[1];
    }
    else {
        return lineSegmentEnd[1] <= pt[1] && pt[1] <= lineSegmentStart[1];
    }
}
/**
 * compareCoords
 *
 * @private
 * @param {Position} pair1 point [x,y]
 * @param {Position} pair2 point [x,y]
 * @returns {boolean} true/false if coord pairs match
 */
function compareCoords(pair1, pair2) {
    return pair1[0] === pair2[0] && pair1[1] === pair2[1];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (booleanDisjoint);


/***/ }),

/***/ "./node_modules/@turf/boolean-intersects/dist/es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@turf/boolean-intersects/dist/es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ booleanIntersects)
/* harmony export */ });
/* harmony import */ var _turf_boolean_disjoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/boolean-disjoint */ "./node_modules/@turf/boolean-disjoint/dist/es/index.js");
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/dist/es/index.js");


/**
 * Boolean-intersects returns (TRUE) two geometries intersect.
 *
 * @name booleanIntersects
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature or Geometry
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature or Geometry
 * @returns {boolean} true/false
 * @example
 * var point = turf.point([2, 2]);
 * var line = turf.lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * turf.booleanIntersects(line, point);
 * //=true
 */
function booleanIntersects(feature1, feature2) {
    var bool = false;
    (0,_turf_meta__WEBPACK_IMPORTED_MODULE_1__.flattenEach)(feature1, function (flatten1) {
        (0,_turf_meta__WEBPACK_IMPORTED_MODULE_1__.flattenEach)(feature2, function (flatten2) {
            if (bool === true) {
                return true;
            }
            bool = !(0,_turf_boolean_disjoint__WEBPACK_IMPORTED_MODULE_0__["default"])(flatten1.geometry, flatten2.geometry);
        });
    });
    return bool;
}


/***/ }),

/***/ "./node_modules/@turf/boolean-point-in-polygon/dist/es/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@turf/boolean-point-in-polygon/dist/es/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ booleanPointInPolygon)
/* harmony export */ });
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");

// http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule
// modified from: https://github.com/substack/point-in-polygon/blob/master/index.js
// which was modified from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
/**
 * Takes a {@link Point} and a {@link Polygon} or {@link MultiPolygon} and determines if the point
 * resides inside the polygon. The polygon can be convex or concave. The function accounts for holes.
 *
 * @name booleanPointInPolygon
 * @param {Coord} point input point
 * @param {Feature<Polygon|MultiPolygon>} polygon input polygon or multipolygon
 * @param {Object} [options={}] Optional parameters
 * @param {boolean} [options.ignoreBoundary=false] True if polygon boundary should be ignored when determining if
 * the point is inside the polygon otherwise false.
 * @returns {boolean} `true` if the Point is inside the Polygon; `false` if the Point is not inside the Polygon
 * @example
 * var pt = turf.point([-77, 44]);
 * var poly = turf.polygon([[
 *   [-81, 41],
 *   [-81, 47],
 *   [-72, 47],
 *   [-72, 41],
 *   [-81, 41]
 * ]]);
 *
 * turf.booleanPointInPolygon(pt, poly);
 * //= true
 */
function booleanPointInPolygon(point, polygon, options) {
    if (options === void 0) { options = {}; }
    // validation
    if (!point) {
        throw new Error("point is required");
    }
    if (!polygon) {
        throw new Error("polygon is required");
    }
    var pt = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_0__.getCoord)(point);
    var geom = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_0__.getGeom)(polygon);
    var type = geom.type;
    var bbox = polygon.bbox;
    var polys = geom.coordinates;
    // Quick elimination if point is not inside bbox
    if (bbox && inBBox(pt, bbox) === false) {
        return false;
    }
    // normalize to multipolygon
    if (type === "Polygon") {
        polys = [polys];
    }
    var insidePoly = false;
    for (var i = 0; i < polys.length && !insidePoly; i++) {
        // check if it is in the outer ring first
        if (inRing(pt, polys[i][0], options.ignoreBoundary)) {
            var inHole = false;
            var k = 1;
            // check for the point in any of the holes
            while (k < polys[i].length && !inHole) {
                if (inRing(pt, polys[i][k], !options.ignoreBoundary)) {
                    inHole = true;
                }
                k++;
            }
            if (!inHole) {
                insidePoly = true;
            }
        }
    }
    return insidePoly;
}
/**
 * inRing
 *
 * @private
 * @param {Array<number>} pt [x,y]
 * @param {Array<Array<number>>} ring [[x,y], [x,y],..]
 * @param {boolean} ignoreBoundary ignoreBoundary
 * @returns {boolean} inRing
 */
function inRing(pt, ring, ignoreBoundary) {
    var isInside = false;
    if (ring[0][0] === ring[ring.length - 1][0] &&
        ring[0][1] === ring[ring.length - 1][1]) {
        ring = ring.slice(0, ring.length - 1);
    }
    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        var xi = ring[i][0];
        var yi = ring[i][1];
        var xj = ring[j][0];
        var yj = ring[j][1];
        var onBoundary = pt[1] * (xi - xj) + yi * (xj - pt[0]) + yj * (pt[0] - xi) === 0 &&
            (xi - pt[0]) * (xj - pt[0]) <= 0 &&
            (yi - pt[1]) * (yj - pt[1]) <= 0;
        if (onBoundary) {
            return !ignoreBoundary;
        }
        var intersect = yi > pt[1] !== yj > pt[1] &&
            pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi;
        if (intersect) {
            isInside = !isInside;
        }
    }
    return isInside;
}
/**
 * inBBox
 *
 * @private
 * @param {Position} pt point [x,y]
 * @param {BBox} bbox BBox [west, south, east, north]
 * @returns {boolean} true/false if point is inside BBox
 */
function inBBox(pt, bbox) {
    return (bbox[0] <= pt[0] && bbox[1] <= pt[1] && bbox[2] >= pt[0] && bbox[3] >= pt[1]);
}


/***/ }),

/***/ "./node_modules/@turf/clone/dist/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@turf/clone/dist/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Returns a cloned copy of the passed GeoJSON Object, including possible 'Foreign Members'.
 * ~3-5x faster than the common JSON.parse + JSON.stringify combo method.
 *
 * @name clone
 * @param {GeoJSON} geojson GeoJSON Object
 * @returns {GeoJSON} cloned GeoJSON Object
 * @example
 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]], {color: 'red'});
 *
 * var lineCloned = turf.clone(line);
 */
function clone(geojson) {
    if (!geojson) {
        throw new Error("geojson is required");
    }
    switch (geojson.type) {
        case "Feature":
            return cloneFeature(geojson);
        case "FeatureCollection":
            return cloneFeatureCollection(geojson);
        case "Point":
        case "LineString":
        case "Polygon":
        case "MultiPoint":
        case "MultiLineString":
        case "MultiPolygon":
        case "GeometryCollection":
            return cloneGeometry(geojson);
        default:
            throw new Error("unknown GeoJSON type");
    }
}
/**
 * Clone Feature
 *
 * @private
 * @param {Feature<any>} geojson GeoJSON Feature
 * @returns {Feature<any>} cloned Feature
 */
function cloneFeature(geojson) {
    var cloned = { type: "Feature" };
    // Preserve Foreign Members
    Object.keys(geojson).forEach(function (key) {
        switch (key) {
            case "type":
            case "properties":
            case "geometry":
                return;
            default:
                cloned[key] = geojson[key];
        }
    });
    // Add properties & geometry last
    cloned.properties = cloneProperties(geojson.properties);
    cloned.geometry = cloneGeometry(geojson.geometry);
    return cloned;
}
/**
 * Clone Properties
 *
 * @private
 * @param {Object} properties GeoJSON Properties
 * @returns {Object} cloned Properties
 */
function cloneProperties(properties) {
    var cloned = {};
    if (!properties) {
        return cloned;
    }
    Object.keys(properties).forEach(function (key) {
        var value = properties[key];
        if (typeof value === "object") {
            if (value === null) {
                // handle null
                cloned[key] = null;
            }
            else if (Array.isArray(value)) {
                // handle Array
                cloned[key] = value.map(function (item) {
                    return item;
                });
            }
            else {
                // handle generic Object
                cloned[key] = cloneProperties(value);
            }
        }
        else {
            cloned[key] = value;
        }
    });
    return cloned;
}
/**
 * Clone Feature Collection
 *
 * @private
 * @param {FeatureCollection<any>} geojson GeoJSON Feature Collection
 * @returns {FeatureCollection<any>} cloned Feature Collection
 */
function cloneFeatureCollection(geojson) {
    var cloned = { type: "FeatureCollection" };
    // Preserve Foreign Members
    Object.keys(geojson).forEach(function (key) {
        switch (key) {
            case "type":
            case "features":
                return;
            default:
                cloned[key] = geojson[key];
        }
    });
    // Add features
    cloned.features = geojson.features.map(function (feature) {
        return cloneFeature(feature);
    });
    return cloned;
}
/**
 * Clone Geometry
 *
 * @private
 * @param {Geometry<any>} geometry GeoJSON Geometry
 * @returns {Geometry<any>} cloned Geometry
 */
function cloneGeometry(geometry) {
    var geom = { type: geometry.type };
    if (geometry.bbox) {
        geom.bbox = geometry.bbox;
    }
    if (geometry.type === "GeometryCollection") {
        geom.geometries = geometry.geometries.map(function (g) {
            return cloneGeometry(g);
        });
        return geom;
    }
    geom.coordinates = deepSlice(geometry.coordinates);
    return geom;
}
/**
 * Deep Slice coordinates
 *
 * @private
 * @param {Coordinates} coords Coordinates
 * @returns {Coordinates} all coordinates sliced
 */
function deepSlice(coords) {
    var cloned = coords;
    if (typeof cloned[0] !== "object") {
        return cloned.slice();
    }
    return cloned.map(function (coord) {
        return deepSlice(coord);
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clone);


/***/ }),

/***/ "./node_modules/@turf/destination/dist/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@turf/destination/dist/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ destination)
/* harmony export */ });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");
// http://en.wikipedia.org/wiki/Haversine_formula
// http://www.movable-type.co.uk/scripts/latlong.html


/**
 * Takes a {@link Point} and calculates the location of a destination point given a distance in
 * degrees, radians, miles, or kilometers; and bearing in degrees.
 * This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name destination
 * @param {Coord} origin starting point
 * @param {number} distance distance from the origin point
 * @param {number} bearing ranging from -180 to 180
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] miles, kilometers, degrees, or radians
 * @param {Object} [options.properties={}] Translate properties to Point
 * @returns {Feature<Point>} destination point
 * @example
 * var point = turf.point([-75.343, 39.984]);
 * var distance = 50;
 * var bearing = 90;
 * var options = {units: 'miles'};
 *
 * var destination = turf.destination(point, distance, bearing, options);
 *
 * //addToMap
 * var addToMap = [point, destination]
 * destination.properties['marker-color'] = '#f00';
 * point.properties['marker-color'] = '#0f0';
 */
function destination(origin, distance, bearing, options) {
    if (options === void 0) { options = {}; }
    // Handle input
    var coordinates1 = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getCoord)(origin);
    var longitude1 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(coordinates1[0]);
    var latitude1 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(coordinates1[1]);
    var bearingRad = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(bearing);
    var radians = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.lengthToRadians)(distance, options.units);
    // Main
    var latitude2 = Math.asin(Math.sin(latitude1) * Math.cos(radians) +
        Math.cos(latitude1) * Math.sin(radians) * Math.cos(bearingRad));
    var longitude2 = longitude1 +
        Math.atan2(Math.sin(bearingRad) * Math.sin(radians) * Math.cos(latitude1), Math.cos(radians) - Math.sin(latitude1) * Math.sin(latitude2));
    var lng = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.radiansToDegrees)(longitude2);
    var lat = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.radiansToDegrees)(latitude2);
    return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.point)([lng, lat], options.properties);
}


/***/ }),

/***/ "./node_modules/@turf/distance/dist/es/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@turf/distance/dist/es/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");


//http://en.wikipedia.org/wiki/Haversine_formula
//http://www.movable-type.co.uk/scripts/latlong.html
/**
 * Calculates the distance between two {@link Point|points} in degrees, radians, miles, or kilometers.
 * This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name distance
 * @param {Coord | Point} from origin point or coordinate
 * @param {Coord | Point} to destination point or coordinate
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
 * @returns {number} distance between the two points
 * @example
 * var from = turf.point([-75.343, 39.984]);
 * var to = turf.point([-75.534, 39.123]);
 * var options = {units: 'miles'};
 *
 * var distance = turf.distance(from, to, options);
 *
 * //addToMap
 * var addToMap = [from, to];
 * from.properties.distance = distance;
 * to.properties.distance = distance;
 */
function distance(from, to, options) {
    if (options === void 0) { options = {}; }
    var coordinates1 = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_0__.getCoord)(from);
    var coordinates2 = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_0__.getCoord)(to);
    var dLat = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_1__.degreesToRadians)(coordinates2[1] - coordinates1[1]);
    var dLon = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_1__.degreesToRadians)(coordinates2[0] - coordinates1[0]);
    var lat1 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_1__.degreesToRadians)(coordinates1[1]);
    var lat2 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_1__.degreesToRadians)(coordinates2[1]);
    var a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_1__.radiansToLength)(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), options.units);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (distance);


/***/ }),

/***/ "./node_modules/@turf/helpers/dist/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@turf/helpers/dist/es/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areaFactors: () => (/* binding */ areaFactors),
/* harmony export */   bearingToAzimuth: () => (/* binding */ bearingToAzimuth),
/* harmony export */   convertArea: () => (/* binding */ convertArea),
/* harmony export */   convertLength: () => (/* binding */ convertLength),
/* harmony export */   degreesToRadians: () => (/* binding */ degreesToRadians),
/* harmony export */   earthRadius: () => (/* binding */ earthRadius),
/* harmony export */   factors: () => (/* binding */ factors),
/* harmony export */   feature: () => (/* binding */ feature),
/* harmony export */   featureCollection: () => (/* binding */ featureCollection),
/* harmony export */   geometry: () => (/* binding */ geometry),
/* harmony export */   geometryCollection: () => (/* binding */ geometryCollection),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   lengthToDegrees: () => (/* binding */ lengthToDegrees),
/* harmony export */   lengthToRadians: () => (/* binding */ lengthToRadians),
/* harmony export */   lineString: () => (/* binding */ lineString),
/* harmony export */   lineStrings: () => (/* binding */ lineStrings),
/* harmony export */   multiLineString: () => (/* binding */ multiLineString),
/* harmony export */   multiPoint: () => (/* binding */ multiPoint),
/* harmony export */   multiPolygon: () => (/* binding */ multiPolygon),
/* harmony export */   point: () => (/* binding */ point),
/* harmony export */   points: () => (/* binding */ points),
/* harmony export */   polygon: () => (/* binding */ polygon),
/* harmony export */   polygons: () => (/* binding */ polygons),
/* harmony export */   radiansToDegrees: () => (/* binding */ radiansToDegrees),
/* harmony export */   radiansToLength: () => (/* binding */ radiansToLength),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   unitsFactors: () => (/* binding */ unitsFactors),
/* harmony export */   validateBBox: () => (/* binding */ validateBBox),
/* harmony export */   validateId: () => (/* binding */ validateId)
/* harmony export */ });
/**
 * @module helpers
 */
/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 *
 * @memberof helpers
 * @type {number}
 */
var earthRadius = 6371008.8;
/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 *
 * @memberof helpers
 * @type {Object}
 */
var factors = {
    centimeters: earthRadius * 100,
    centimetres: earthRadius * 100,
    degrees: earthRadius / 111325,
    feet: earthRadius * 3.28084,
    inches: earthRadius * 39.37,
    kilometers: earthRadius / 1000,
    kilometres: earthRadius / 1000,
    meters: earthRadius,
    metres: earthRadius,
    miles: earthRadius / 1609.344,
    millimeters: earthRadius * 1000,
    millimetres: earthRadius * 1000,
    nauticalmiles: earthRadius / 1852,
    radians: 1,
    yards: earthRadius * 1.0936,
};
/**
 * Units of measurement factors based on 1 meter.
 *
 * @memberof helpers
 * @type {Object}
 */
var unitsFactors = {
    centimeters: 100,
    centimetres: 100,
    degrees: 1 / 111325,
    feet: 3.28084,
    inches: 39.37,
    kilometers: 1 / 1000,
    kilometres: 1 / 1000,
    meters: 1,
    metres: 1,
    miles: 1 / 1609.344,
    millimeters: 1000,
    millimetres: 1000,
    nauticalmiles: 1 / 1852,
    radians: 1 / earthRadius,
    yards: 1.0936133,
};
/**
 * Area of measurement factors based on 1 square meter.
 *
 * @memberof helpers
 * @type {Object}
 */
var areaFactors = {
    acres: 0.000247105,
    centimeters: 10000,
    centimetres: 10000,
    feet: 10.763910417,
    hectares: 0.0001,
    inches: 1550.003100006,
    kilometers: 0.000001,
    kilometres: 0.000001,
    meters: 1,
    metres: 1,
    miles: 3.86e-7,
    millimeters: 1000000,
    millimetres: 1000000,
    yards: 1.195990046,
};
/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
function feature(geom, properties, options) {
    if (options === void 0) { options = {}; }
    var feat = { type: "Feature" };
    if (options.id === 0 || options.id) {
        feat.id = options.id;
    }
    if (options.bbox) {
        feat.bbox = options.bbox;
    }
    feat.properties = properties || {};
    feat.geometry = geom;
    return feat;
}
/**
 * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
 * For GeometryCollection type use `helpers.geometryCollection`
 *
 * @name geometry
 * @param {string} type Geometry Type
 * @param {Array<any>} coordinates Coordinates
 * @param {Object} [options={}] Optional Parameters
 * @returns {Geometry} a GeoJSON Geometry
 * @example
 * var type = "Point";
 * var coordinates = [110, 50];
 * var geometry = turf.geometry(type, coordinates);
 * // => geometry
 */
function geometry(type, coordinates, _options) {
    if (_options === void 0) { _options = {}; }
    switch (type) {
        case "Point":
            return point(coordinates).geometry;
        case "LineString":
            return lineString(coordinates).geometry;
        case "Polygon":
            return polygon(coordinates).geometry;
        case "MultiPoint":
            return multiPoint(coordinates).geometry;
        case "MultiLineString":
            return multiLineString(coordinates).geometry;
        case "MultiPolygon":
            return multiPolygon(coordinates).geometry;
        default:
            throw new Error(type + " is invalid");
    }
}
/**
 * Creates a {@link Point} {@link Feature} from a Position.
 *
 * @name point
 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Point>} a Point feature
 * @example
 * var point = turf.point([-75.343, 39.984]);
 *
 * //=point
 */
function point(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (!coordinates) {
        throw new Error("coordinates is required");
    }
    if (!Array.isArray(coordinates)) {
        throw new Error("coordinates must be an Array");
    }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be at least 2 numbers long");
    }
    if (!isNumber(coordinates[0]) || !isNumber(coordinates[1])) {
        throw new Error("coordinates must contain numbers");
    }
    var geom = {
        type: "Point",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Point} {@link FeatureCollection} from an Array of Point coordinates.
 *
 * @name points
 * @param {Array<Array<number>>} coordinates an array of Points
 * @param {Object} [properties={}] Translate these properties to each Feature
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Point>} Point Feature
 * @example
 * var points = turf.points([
 *   [-75, 39],
 *   [-80, 45],
 *   [-78, 50]
 * ]);
 *
 * //=points
 */
function points(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return point(coords, properties);
    }), options);
}
/**
 * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
 *
 * @name polygon
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Polygon>} Polygon Feature
 * @example
 * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
 *
 * //=polygon
 */
function polygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    for (var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++) {
        var ring = coordinates_1[_i];
        if (ring.length < 4) {
            throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        }
        for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) {
                throw new Error("First and last Position are not equivalent.");
            }
        }
    }
    var geom = {
        type: "Polygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Polygon} {@link FeatureCollection} from an Array of Polygon coordinates.
 *
 * @name polygons
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygon coordinates
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Polygon>} Polygon FeatureCollection
 * @example
 * var polygons = turf.polygons([
 *   [[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]],
 *   [[[-15, 42], [-14, 46], [-12, 41], [-17, 44], [-15, 42]]],
 * ]);
 *
 * //=polygons
 */
function polygons(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return polygon(coords, properties);
    }), options);
}
/**
 * Creates a {@link LineString} {@link Feature} from an Array of Positions.
 *
 * @name lineString
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<LineString>} LineString Feature
 * @example
 * var linestring1 = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]], {name: 'line 1'});
 * var linestring2 = turf.lineString([[-14, 43], [-13, 40], [-15, 45], [-10, 49]], {name: 'line 2'});
 *
 * //=linestring1
 * //=linestring2
 */
function lineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be an array of two or more positions");
    }
    var geom = {
        type: "LineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link LineString} {@link FeatureCollection} from an Array of LineString coordinates.
 *
 * @name lineStrings
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<LineString>} LineString FeatureCollection
 * @example
 * var linestrings = turf.lineStrings([
 *   [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
 *   [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
 * ]);
 *
 * //=linestrings
 */
function lineStrings(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return lineString(coords, properties);
    }), options);
}
/**
 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
 *
 * @name featureCollection
 * @param {Feature[]} features input features
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {FeatureCollection} FeatureCollection of Features
 * @example
 * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
 * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
 * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
 *
 * var collection = turf.featureCollection([
 *   locationA,
 *   locationB,
 *   locationC
 * ]);
 *
 * //=collection
 */
function featureCollection(features, options) {
    if (options === void 0) { options = {}; }
    var fc = { type: "FeatureCollection" };
    if (options.id) {
        fc.id = options.id;
    }
    if (options.bbox) {
        fc.bbox = options.bbox;
    }
    fc.features = features;
    return fc;
}
/**
 * Creates a {@link Feature<MultiLineString>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiLineString
 * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiLineString>} a MultiLineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
 *
 * //=multiLine
 */
function multiLineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiLineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Feature<MultiPoint>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPoint
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPoint>} a MultiPoint feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPt = turf.multiPoint([[0,0],[10,10]]);
 *
 * //=multiPt
 */
function multiPoint(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPoint",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Feature<MultiPolygon>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPolygon
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPolygon>} a multipolygon feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
 *
 * //=multiPoly
 *
 */
function multiPolygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPolygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Feature<GeometryCollection>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name geometryCollection
 * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
 * @example
 * var pt = turf.geometry("Point", [100, 0]);
 * var line = turf.geometry("LineString", [[101, 0], [102, 1]]);
 * var collection = turf.geometryCollection([pt, line]);
 *
 * // => collection
 */
function geometryCollection(geometries, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "GeometryCollection",
        geometries: geometries,
    };
    return feature(geom, properties, options);
}
/**
 * Round number to precision
 *
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * turf.round(120.4321)
 * //=120
 *
 * turf.round(120.4321, 2)
 * //=120.43
 */
function round(num, precision) {
    if (precision === void 0) { precision = 0; }
    if (precision && !(precision >= 0)) {
        throw new Error("precision must be a positive number");
    }
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}
/**
 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} distance
 */
function radiansToLength(radians, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return radians * factor;
}
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} radians
 */
function lengthToRadians(distance, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return distance / factor;
}
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
 *
 * @name lengthToDegrees
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} degrees
 */
function lengthToDegrees(distance, units) {
    return radiansToDegrees(lengthToRadians(distance, units));
}
/**
 * Converts any bearing angle from the north line direction (positive clockwise)
 * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
 *
 * @name bearingToAzimuth
 * @param {number} bearing angle, between -180 and +180 degrees
 * @returns {number} angle between 0 and 360 degrees
 */
function bearingToAzimuth(bearing) {
    var angle = bearing % 360;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
/**
 * Converts an angle in radians to degrees
 *
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 */
function radiansToDegrees(radians) {
    var degrees = radians % (2 * Math.PI);
    return (degrees * 180) / Math.PI;
}
/**
 * Converts an angle in degrees to radians
 *
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
function degreesToRadians(degrees) {
    var radians = degrees % 360;
    return (radians * Math.PI) / 180;
}
/**
 * Converts a length to the requested unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @param {number} length to be converted
 * @param {Units} [originalUnit="kilometers"] of the length
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted length
 */
function convertLength(length, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "kilometers"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(length >= 0)) {
        throw new Error("length must be a positive number");
    }
    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit);
}
/**
 * Converts a area to the requested unit.
 * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches, hectares
 * @param {number} area to be converted
 * @param {Units} [originalUnit="meters"] of the distance
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted area
 */
function convertArea(area, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "meters"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(area >= 0)) {
        throw new Error("area must be a positive number");
    }
    var startFactor = areaFactors[originalUnit];
    if (!startFactor) {
        throw new Error("invalid original units");
    }
    var finalFactor = areaFactors[finalUnit];
    if (!finalFactor) {
        throw new Error("invalid final units");
    }
    return (area / startFactor) * finalFactor;
}
/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * turf.isNumber(123)
 * //=true
 * turf.isNumber('foo')
 * //=false
 */
function isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num);
}
/**
 * isObject
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 * @example
 * turf.isObject({elevation: 10})
 * //=true
 * turf.isObject('foo')
 * //=false
 */
function isObject(input) {
    return !!input && input.constructor === Object;
}
/**
 * Validate BBox
 *
 * @private
 * @param {Array<number>} bbox BBox to validate
 * @returns {void}
 * @throws Error if BBox is not valid
 * @example
 * validateBBox([-180, -40, 110, 50])
 * //=OK
 * validateBBox([-180, -40])
 * //=Error
 * validateBBox('Foo')
 * //=Error
 * validateBBox(5)
 * //=Error
 * validateBBox(null)
 * //=Error
 * validateBBox(undefined)
 * //=Error
 */
function validateBBox(bbox) {
    if (!bbox) {
        throw new Error("bbox is required");
    }
    if (!Array.isArray(bbox)) {
        throw new Error("bbox must be an Array");
    }
    if (bbox.length !== 4 && bbox.length !== 6) {
        throw new Error("bbox must be an Array of 4 or 6 numbers");
    }
    bbox.forEach(function (num) {
        if (!isNumber(num)) {
            throw new Error("bbox must only contain numbers");
        }
    });
}
/**
 * Validate Id
 *
 * @private
 * @param {string|number} id Id to validate
 * @returns {void}
 * @throws Error if Id is not valid
 * @example
 * validateId([-180, -40, 110, 50])
 * //=Error
 * validateId([-180, -40])
 * //=Error
 * validateId('Foo')
 * //=OK
 * validateId(5)
 * //=OK
 * validateId(null)
 * //=Error
 * validateId(undefined)
 * //=Error
 */
function validateId(id) {
    if (!id) {
        throw new Error("id is required");
    }
    if (["string", "number"].indexOf(typeof id) === -1) {
        throw new Error("id must be a number or a string");
    }
}


/***/ }),

/***/ "./node_modules/@turf/invariant/dist/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@turf/invariant/dist/es/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectionOf: () => (/* binding */ collectionOf),
/* harmony export */   containsNumber: () => (/* binding */ containsNumber),
/* harmony export */   featureOf: () => (/* binding */ featureOf),
/* harmony export */   geojsonType: () => (/* binding */ geojsonType),
/* harmony export */   getCoord: () => (/* binding */ getCoord),
/* harmony export */   getCoords: () => (/* binding */ getCoords),
/* harmony export */   getGeom: () => (/* binding */ getGeom),
/* harmony export */   getType: () => (/* binding */ getType)
/* harmony export */ });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");

/**
 * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
 *
 * @name getCoord
 * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
 * @returns {Array<number>} coordinates
 * @example
 * var pt = turf.point([10, 10]);
 *
 * var coord = turf.getCoord(pt);
 * //= [10, 10]
 */
function getCoord(coord) {
    if (!coord) {
        throw new Error("coord is required");
    }
    if (!Array.isArray(coord)) {
        if (coord.type === "Feature" &&
            coord.geometry !== null &&
            coord.geometry.type === "Point") {
            return coord.geometry.coordinates;
        }
        if (coord.type === "Point") {
            return coord.coordinates;
        }
    }
    if (Array.isArray(coord) &&
        coord.length >= 2 &&
        !Array.isArray(coord[0]) &&
        !Array.isArray(coord[1])) {
        return coord;
    }
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
/**
 * Unwrap coordinates from a Feature, Geometry Object or an Array
 *
 * @name getCoords
 * @param {Array<any>|Geometry|Feature} coords Feature, Geometry Object or an Array
 * @returns {Array<any>} coordinates
 * @example
 * var poly = turf.polygon([[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]);
 *
 * var coords = turf.getCoords(poly);
 * //= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]
 */
function getCoords(coords) {
    if (Array.isArray(coords)) {
        return coords;
    }
    // Feature
    if (coords.type === "Feature") {
        if (coords.geometry !== null) {
            return coords.geometry.coordinates;
        }
    }
    else {
        // Geometry
        if (coords.coordinates) {
            return coords.coordinates;
        }
    }
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
/**
 * Checks if coordinates contains a number
 *
 * @name containsNumber
 * @param {Array<any>} coordinates GeoJSON Coordinates
 * @returns {boolean} true if Array contains a number
 */
function containsNumber(coordinates) {
    if (coordinates.length > 1 &&
        (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.isNumber)(coordinates[0]) &&
        (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.isNumber)(coordinates[1])) {
        return true;
    }
    if (Array.isArray(coordinates[0]) && coordinates[0].length) {
        return containsNumber(coordinates[0]);
    }
    throw new Error("coordinates must only contain numbers");
}
/**
 * Enforce expectations about types of GeoJSON objects for Turf.
 *
 * @name geojsonType
 * @param {GeoJSON} value any GeoJSON object
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function geojsonType(value, type, name) {
    if (!type || !name) {
        throw new Error("type and name required");
    }
    if (!value || value.type !== type) {
        throw new Error("Invalid input to " +
            name +
            ": must be a " +
            type +
            ", given " +
            value.type);
    }
}
/**
 * Enforce expectations about types of {@link Feature} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name featureOf
 * @param {Feature} feature a feature with an expected geometry type
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} error if value is not the expected type.
 */
function featureOf(feature, type, name) {
    if (!feature) {
        throw new Error("No feature passed");
    }
    if (!name) {
        throw new Error(".featureOf() requires a name");
    }
    if (!feature || feature.type !== "Feature" || !feature.geometry) {
        throw new Error("Invalid input to " + name + ", Feature with geometry required");
    }
    if (!feature.geometry || feature.geometry.type !== type) {
        throw new Error("Invalid input to " +
            name +
            ": must be a " +
            type +
            ", given " +
            feature.geometry.type);
    }
}
/**
 * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name collectionOf
 * @param {FeatureCollection} featureCollection a FeatureCollection for which features will be judged
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function collectionOf(featureCollection, type, name) {
    if (!featureCollection) {
        throw new Error("No featureCollection passed");
    }
    if (!name) {
        throw new Error(".collectionOf() requires a name");
    }
    if (!featureCollection || featureCollection.type !== "FeatureCollection") {
        throw new Error("Invalid input to " + name + ", FeatureCollection required");
    }
    for (var _i = 0, _a = featureCollection.features; _i < _a.length; _i++) {
        var feature = _a[_i];
        if (!feature || feature.type !== "Feature" || !feature.geometry) {
            throw new Error("Invalid input to " + name + ", Feature with geometry required");
        }
        if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error("Invalid input to " +
                name +
                ": must be a " +
                type +
                ", given " +
                feature.geometry.type);
        }
    }
}
/**
 * Get Geometry from Feature or Geometry Object
 *
 * @param {Feature|Geometry} geojson GeoJSON Feature or Geometry Object
 * @returns {Geometry|null} GeoJSON Geometry Object
 * @throws {Error} if geojson is not a Feature or Geometry Object
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getGeom(point)
 * //={"type": "Point", "coordinates": [110, 40]}
 */
function getGeom(geojson) {
    if (geojson.type === "Feature") {
        return geojson.geometry;
    }
    return geojson;
}
/**
 * Get GeoJSON object's type, Geometry type is prioritize.
 *
 * @param {GeoJSON} geojson GeoJSON object
 * @param {string} [name="geojson"] name of the variable to display in error message (unused)
 * @returns {string} GeoJSON type
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getType(point)
 * //="Point"
 */
function getType(geojson, _name) {
    if (geojson.type === "FeatureCollection") {
        return "FeatureCollection";
    }
    if (geojson.type === "GeometryCollection") {
        return "GeometryCollection";
    }
    if (geojson.type === "Feature" && geojson.geometry !== null) {
        return geojson.geometry.type;
    }
    return geojson.type;
}


/***/ }),

/***/ "./node_modules/@turf/line-intersect/dist/es/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@turf/line-intersect/dist/es/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");
/* harmony import */ var _turf_line_segment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/line-segment */ "./node_modules/@turf/line-segment/dist/es/index.js");
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/dist/es/index.js");
/* harmony import */ var geojson_rbush__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! geojson-rbush */ "./node_modules/geojson-rbush/index.js");





/**
 * Takes any LineString or Polygon GeoJSON and returns the intersecting point(s).
 *
 * @name lineIntersect
 * @param {GeoJSON} line1 any LineString or Polygon
 * @param {GeoJSON} line2 any LineString or Polygon
 * @returns {FeatureCollection<Point>} point(s) that intersect both
 * @example
 * var line1 = turf.lineString([[126, -11], [129, -21]]);
 * var line2 = turf.lineString([[123, -18], [131, -14]]);
 * var intersects = turf.lineIntersect(line1, line2);
 *
 * //addToMap
 * var addToMap = [line1, line2, intersects]
 */
function lineIntersect(line1, line2) {
    var unique = {};
    var results = [];
    // First, normalize geometries to features
    // Then, handle simple 2-vertex segments
    if (line1.type === "LineString") {
        line1 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.feature)(line1);
    }
    if (line2.type === "LineString") {
        line2 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.feature)(line2);
    }
    if (line1.type === "Feature" &&
        line2.type === "Feature" &&
        line1.geometry !== null &&
        line2.geometry !== null &&
        line1.geometry.type === "LineString" &&
        line2.geometry.type === "LineString" &&
        line1.geometry.coordinates.length === 2 &&
        line2.geometry.coordinates.length === 2) {
        var intersect = intersects(line1, line2);
        if (intersect) {
            results.push(intersect);
        }
        return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.featureCollection)(results);
    }
    // Handles complex GeoJSON Geometries
    var tree = geojson_rbush__WEBPACK_IMPORTED_MODULE_4__();
    tree.load((0,_turf_line_segment__WEBPACK_IMPORTED_MODULE_2__["default"])(line2));
    (0,_turf_meta__WEBPACK_IMPORTED_MODULE_3__.featureEach)((0,_turf_line_segment__WEBPACK_IMPORTED_MODULE_2__["default"])(line1), function (segment) {
        (0,_turf_meta__WEBPACK_IMPORTED_MODULE_3__.featureEach)(tree.search(segment), function (match) {
            var intersect = intersects(segment, match);
            if (intersect) {
                // prevent duplicate points https://github.com/Turfjs/turf/issues/688
                var key = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getCoords)(intersect).join(",");
                if (!unique[key]) {
                    unique[key] = true;
                    results.push(intersect);
                }
            }
        });
    });
    return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.featureCollection)(results);
}
/**
 * Find a point that intersects LineStrings with two coordinates each
 *
 * @private
 * @param {Feature<LineString>} line1 GeoJSON LineString (Must only contain 2 coordinates)
 * @param {Feature<LineString>} line2 GeoJSON LineString (Must only contain 2 coordinates)
 * @returns {Feature<Point>} intersecting GeoJSON Point
 */
function intersects(line1, line2) {
    var coords1 = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getCoords)(line1);
    var coords2 = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getCoords)(line2);
    if (coords1.length !== 2) {
        throw new Error("<intersects> line1 must only contain 2 coordinates");
    }
    if (coords2.length !== 2) {
        throw new Error("<intersects> line2 must only contain 2 coordinates");
    }
    var x1 = coords1[0][0];
    var y1 = coords1[0][1];
    var x2 = coords1[1][0];
    var y2 = coords1[1][1];
    var x3 = coords2[0][0];
    var y3 = coords2[0][1];
    var x4 = coords2[1][0];
    var y4 = coords2[1][1];
    var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    var numeA = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    var numeB = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
    if (denom === 0) {
        if (numeA === 0 && numeB === 0) {
            return null;
        }
        return null;
    }
    var uA = numeA / denom;
    var uB = numeB / denom;
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
        var x = x1 + uA * (x2 - x1);
        var y = y1 + uA * (y2 - y1);
        return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.point)([x, y]);
    }
    return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lineIntersect);


/***/ }),

/***/ "./node_modules/@turf/line-segment/dist/es/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@turf/line-segment/dist/es/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/dist/es/index.js");



/**
 * Creates a {@link FeatureCollection} of 2-vertex {@link LineString} segments from a
 * {@link LineString|(Multi)LineString} or {@link Polygon|(Multi)Polygon}.
 *
 * @name lineSegment
 * @param {GeoJSON} geojson GeoJSON Polygon or LineString
 * @returns {FeatureCollection<LineString>} 2-vertex line segments
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 * var segments = turf.lineSegment(polygon);
 *
 * //addToMap
 * var addToMap = [polygon, segments]
 */
function lineSegment(geojson) {
    if (!geojson) {
        throw new Error("geojson is required");
    }
    var results = [];
    (0,_turf_meta__WEBPACK_IMPORTED_MODULE_2__.flattenEach)(geojson, function (feature) {
        lineSegmentFeature(feature, results);
    });
    return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.featureCollection)(results);
}
/**
 * Line Segment
 *
 * @private
 * @param {Feature<LineString|Polygon>} geojson Line or polygon feature
 * @param {Array} results push to results
 * @returns {void}
 */
function lineSegmentFeature(geojson, results) {
    var coords = [];
    var geometry = geojson.geometry;
    if (geometry !== null) {
        switch (geometry.type) {
            case "Polygon":
                coords = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getCoords)(geometry);
                break;
            case "LineString":
                coords = [(0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getCoords)(geometry)];
        }
        coords.forEach(function (coord) {
            var segments = createSegments(coord, geojson.properties);
            segments.forEach(function (segment) {
                segment.id = results.length;
                results.push(segment);
            });
        });
    }
}
/**
 * Create Segments from LineString coordinates
 *
 * @private
 * @param {Array<Array<number>>} coords LineString coordinates
 * @param {*} properties GeoJSON properties
 * @returns {Array<Feature<LineString>>} line segments
 */
function createSegments(coords, properties) {
    var segments = [];
    coords.reduce(function (previousCoords, currentCoords) {
        var segment = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.lineString)([previousCoords, currentCoords], properties);
        segment.bbox = bbox(previousCoords, currentCoords);
        segments.push(segment);
        return currentCoords;
    });
    return segments;
}
/**
 * Create BBox between two coordinates (faster than @turf/bbox)
 *
 * @private
 * @param {Array<number>} coords1 Point coordinate
 * @param {Array<number>} coords2 Point coordinate
 * @returns {BBox} [west, south, east, north]
 */
function bbox(coords1, coords2) {
    var x1 = coords1[0];
    var y1 = coords1[1];
    var x2 = coords2[0];
    var y2 = coords2[1];
    var west = x1 < x2 ? x1 : x2;
    var south = y1 < y2 ? y1 : y2;
    var east = x1 > x2 ? x1 : x2;
    var north = y1 > y2 ? y1 : y2;
    return [west, south, east, north];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lineSegment);


/***/ }),

/***/ "./node_modules/@turf/meta/dist/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@turf/meta/dist/es/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coordAll: () => (/* binding */ coordAll),
/* harmony export */   coordEach: () => (/* binding */ coordEach),
/* harmony export */   coordReduce: () => (/* binding */ coordReduce),
/* harmony export */   featureEach: () => (/* binding */ featureEach),
/* harmony export */   featureReduce: () => (/* binding */ featureReduce),
/* harmony export */   findPoint: () => (/* binding */ findPoint),
/* harmony export */   findSegment: () => (/* binding */ findSegment),
/* harmony export */   flattenEach: () => (/* binding */ flattenEach),
/* harmony export */   flattenReduce: () => (/* binding */ flattenReduce),
/* harmony export */   geomEach: () => (/* binding */ geomEach),
/* harmony export */   geomReduce: () => (/* binding */ geomReduce),
/* harmony export */   lineEach: () => (/* binding */ lineEach),
/* harmony export */   lineReduce: () => (/* binding */ lineReduce),
/* harmony export */   propEach: () => (/* binding */ propEach),
/* harmony export */   propReduce: () => (/* binding */ propReduce),
/* harmony export */   segmentEach: () => (/* binding */ segmentEach),
/* harmony export */   segmentReduce: () => (/* binding */ segmentReduce)
/* harmony export */ });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");


/**
 * Callback for coordEach
 *
 * @callback coordEachCallback
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
 *
 * @name coordEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function coordEach(geojson, callback, excludeWrapCoord) {
  // Handles null Geometry -- Skips this GeoJSON
  if (geojson === null) return;
  var j,
    k,
    l,
    geometry,
    stopG,
    coords,
    geometryMaybeCollection,
    wrapShrink = 0,
    coordIndex = 0,
    isGeometryCollection,
    type = geojson.type,
    isFeatureCollection = type === "FeatureCollection",
    isFeature = type === "Feature",
    stop = isFeatureCollection ? geojson.features.length : 1;

  // This logic may look a little weird. The reason why it is that way
  // is because it's trying to be fast. GeoJSON supports multiple kinds
  // of objects at its root: FeatureCollection, Features, Geometries.
  // This function has the responsibility of handling all of them, and that
  // means that some of the `for` loops you see below actually just don't apply
  // to certain inputs. For instance, if you give this just a
  // Point geometry, then both loops are short-circuited and all we do
  // is gradually rename the input until it's called 'geometry'.
  //
  // This also aims to allocate as few resources as possible: just a
  // few numbers and booleans, rather than any temporary arrays as would
  // be required with the normalization approach.
  for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
    geometryMaybeCollection = isFeatureCollection
      ? geojson.features[featureIndex].geometry
      : isFeature
      ? geojson.geometry
      : geojson;
    isGeometryCollection = geometryMaybeCollection
      ? geometryMaybeCollection.type === "GeometryCollection"
      : false;
    stopG = isGeometryCollection
      ? geometryMaybeCollection.geometries.length
      : 1;

    for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
      var multiFeatureIndex = 0;
      var geometryIndex = 0;
      geometry = isGeometryCollection
        ? geometryMaybeCollection.geometries[geomIndex]
        : geometryMaybeCollection;

      // Handles null Geometry -- Skips this geometry
      if (geometry === null) continue;
      coords = geometry.coordinates;
      var geomType = geometry.type;

      wrapShrink =
        excludeWrapCoord &&
        (geomType === "Polygon" || geomType === "MultiPolygon")
          ? 1
          : 0;

      switch (geomType) {
        case null:
          break;
        case "Point":
          if (
            callback(
              coords,
              coordIndex,
              featureIndex,
              multiFeatureIndex,
              geometryIndex
            ) === false
          )
            return false;
          coordIndex++;
          multiFeatureIndex++;
          break;
        case "LineString":
        case "MultiPoint":
          for (j = 0; j < coords.length; j++) {
            if (
              callback(
                coords[j],
                coordIndex,
                featureIndex,
                multiFeatureIndex,
                geometryIndex
              ) === false
            )
              return false;
            coordIndex++;
            if (geomType === "MultiPoint") multiFeatureIndex++;
          }
          if (geomType === "LineString") multiFeatureIndex++;
          break;
        case "Polygon":
        case "MultiLineString":
          for (j = 0; j < coords.length; j++) {
            for (k = 0; k < coords[j].length - wrapShrink; k++) {
              if (
                callback(
                  coords[j][k],
                  coordIndex,
                  featureIndex,
                  multiFeatureIndex,
                  geometryIndex
                ) === false
              )
                return false;
              coordIndex++;
            }
            if (geomType === "MultiLineString") multiFeatureIndex++;
            if (geomType === "Polygon") geometryIndex++;
          }
          if (geomType === "Polygon") multiFeatureIndex++;
          break;
        case "MultiPolygon":
          for (j = 0; j < coords.length; j++) {
            geometryIndex = 0;
            for (k = 0; k < coords[j].length; k++) {
              for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                if (
                  callback(
                    coords[j][k][l],
                    coordIndex,
                    featureIndex,
                    multiFeatureIndex,
                    geometryIndex
                  ) === false
                )
                  return false;
                coordIndex++;
              }
              geometryIndex++;
            }
            multiFeatureIndex++;
          }
          break;
        case "GeometryCollection":
          for (j = 0; j < geometry.geometries.length; j++)
            if (
              coordEach(geometry.geometries[j], callback, excludeWrapCoord) ===
              false
            )
              return false;
          break;
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
  }
}

/**
 * Callback for coordReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback coordReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Reduce coordinates in any GeoJSON object, similar to Array.reduce()
 *
 * @name coordReduce
 * @param {FeatureCollection|Geometry|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentCoord, coordIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordReduce(features, function (previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentCoord;
 * });
 */
function coordReduce(geojson, callback, initialValue, excludeWrapCoord) {
  var previousValue = initialValue;
  coordEach(
    geojson,
    function (
      currentCoord,
      coordIndex,
      featureIndex,
      multiFeatureIndex,
      geometryIndex
    ) {
      if (coordIndex === 0 && initialValue === undefined)
        previousValue = currentCoord;
      else
        previousValue = callback(
          previousValue,
          currentCoord,
          coordIndex,
          featureIndex,
          multiFeatureIndex,
          geometryIndex
        );
    },
    excludeWrapCoord
  );
  return previousValue;
}

/**
 * Callback for propEach
 *
 * @callback propEachCallback
 * @param {Object} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over properties in any GeoJSON object, similar to Array.forEach()
 *
 * @name propEach
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentProperties, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propEach(features, function (currentProperties, featureIndex) {
 *   //=currentProperties
 *   //=featureIndex
 * });
 */
function propEach(geojson, callback) {
  var i;
  switch (geojson.type) {
    case "FeatureCollection":
      for (i = 0; i < geojson.features.length; i++) {
        if (callback(geojson.features[i].properties, i) === false) break;
      }
      break;
    case "Feature":
      callback(geojson.properties, 0);
      break;
  }
}

/**
 * Callback for propReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback propReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {*} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce properties in any GeoJSON object into a single value,
 * similar to how Array.reduce works. However, in this case we lazily run
 * the reduction, so an array of all properties is unnecessary.
 *
 * @name propReduce
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentProperties, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
 *   //=previousValue
 *   //=currentProperties
 *   //=featureIndex
 *   return currentProperties
 * });
 */
function propReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  propEach(geojson, function (currentProperties, featureIndex) {
    if (featureIndex === 0 && initialValue === undefined)
      previousValue = currentProperties;
    else
      previousValue = callback(previousValue, currentProperties, featureIndex);
  });
  return previousValue;
}

/**
 * Callback for featureEach
 *
 * @callback featureEachCallback
 * @param {Feature<any>} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name featureEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.featureEach(features, function (currentFeature, featureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 * });
 */
function featureEach(geojson, callback) {
  if (geojson.type === "Feature") {
    callback(geojson, 0);
  } else if (geojson.type === "FeatureCollection") {
    for (var i = 0; i < geojson.features.length; i++) {
      if (callback(geojson.features[i], i) === false) break;
    }
  }
}

/**
 * Callback for featureReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback featureReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name featureReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   return currentFeature
 * });
 */
function featureReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  featureEach(geojson, function (currentFeature, featureIndex) {
    if (featureIndex === 0 && initialValue === undefined)
      previousValue = currentFeature;
    else previousValue = callback(previousValue, currentFeature, featureIndex);
  });
  return previousValue;
}

/**
 * Get all coordinates from any GeoJSON object.
 *
 * @name coordAll
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @returns {Array<Array<number>>} coordinate position array
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * var coords = turf.coordAll(features);
 * //= [[26, 37], [36, 53]]
 */
function coordAll(geojson) {
  var coords = [];
  coordEach(geojson, function (coord) {
    coords.push(coord);
  });
  return coords;
}

/**
 * Callback for geomEach
 *
 * @callback geomEachCallback
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
 *
 * @name geomEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 * });
 */
function geomEach(geojson, callback) {
  var i,
    j,
    g,
    geometry,
    stopG,
    geometryMaybeCollection,
    isGeometryCollection,
    featureProperties,
    featureBBox,
    featureId,
    featureIndex = 0,
    isFeatureCollection = geojson.type === "FeatureCollection",
    isFeature = geojson.type === "Feature",
    stop = isFeatureCollection ? geojson.features.length : 1;

  // This logic may look a little weird. The reason why it is that way
  // is because it's trying to be fast. GeoJSON supports multiple kinds
  // of objects at its root: FeatureCollection, Features, Geometries.
  // This function has the responsibility of handling all of them, and that
  // means that some of the `for` loops you see below actually just don't apply
  // to certain inputs. For instance, if you give this just a
  // Point geometry, then both loops are short-circuited and all we do
  // is gradually rename the input until it's called 'geometry'.
  //
  // This also aims to allocate as few resources as possible: just a
  // few numbers and booleans, rather than any temporary arrays as would
  // be required with the normalization approach.
  for (i = 0; i < stop; i++) {
    geometryMaybeCollection = isFeatureCollection
      ? geojson.features[i].geometry
      : isFeature
      ? geojson.geometry
      : geojson;
    featureProperties = isFeatureCollection
      ? geojson.features[i].properties
      : isFeature
      ? geojson.properties
      : {};
    featureBBox = isFeatureCollection
      ? geojson.features[i].bbox
      : isFeature
      ? geojson.bbox
      : undefined;
    featureId = isFeatureCollection
      ? geojson.features[i].id
      : isFeature
      ? geojson.id
      : undefined;
    isGeometryCollection = geometryMaybeCollection
      ? geometryMaybeCollection.type === "GeometryCollection"
      : false;
    stopG = isGeometryCollection
      ? geometryMaybeCollection.geometries.length
      : 1;

    for (g = 0; g < stopG; g++) {
      geometry = isGeometryCollection
        ? geometryMaybeCollection.geometries[g]
        : geometryMaybeCollection;

      // Handle null Geometry
      if (geometry === null) {
        if (
          callback(
            null,
            featureIndex,
            featureProperties,
            featureBBox,
            featureId
          ) === false
        )
          return false;
        continue;
      }
      switch (geometry.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (
            callback(
              geometry,
              featureIndex,
              featureProperties,
              featureBBox,
              featureId
            ) === false
          )
            return false;
          break;
        }
        case "GeometryCollection": {
          for (j = 0; j < geometry.geometries.length; j++) {
            if (
              callback(
                geometry.geometries[j],
                featureIndex,
                featureProperties,
                featureBBox,
                featureId
              ) === false
            )
              return false;
          }
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    // Only increase `featureIndex` per each feature
    featureIndex++;
  }
}

/**
 * Callback for geomReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback geomReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Reduce geometry in any GeoJSON object, similar to Array.reduce().
 *
 * @name geomReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomReduce(features, function (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=previousValue
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 *   return currentGeometry
 * });
 */
function geomReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  geomEach(
    geojson,
    function (
      currentGeometry,
      featureIndex,
      featureProperties,
      featureBBox,
      featureId
    ) {
      if (featureIndex === 0 && initialValue === undefined)
        previousValue = currentGeometry;
      else
        previousValue = callback(
          previousValue,
          currentGeometry,
          featureIndex,
          featureProperties,
          featureBBox,
          featureId
        );
    }
  );
  return previousValue;
}

/**
 * Callback for flattenEach
 *
 * @callback flattenEachCallback
 * @param {Feature} currentFeature The current flattened feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Iterate over flattened features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name flattenEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex, multiFeatureIndex)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 * });
 */
function flattenEach(geojson, callback) {
  geomEach(geojson, function (geometry, featureIndex, properties, bbox, id) {
    // Callback for single geometry
    var type = geometry === null ? null : geometry.type;
    switch (type) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        if (
          callback(
            (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.feature)(geometry, properties, { bbox: bbox, id: id }),
            featureIndex,
            0
          ) === false
        )
          return false;
        return;
    }

    var geomType;

    // Callback for multi-geometry
    switch (type) {
      case "MultiPoint":
        geomType = "Point";
        break;
      case "MultiLineString":
        geomType = "LineString";
        break;
      case "MultiPolygon":
        geomType = "Polygon";
        break;
    }

    for (
      var multiFeatureIndex = 0;
      multiFeatureIndex < geometry.coordinates.length;
      multiFeatureIndex++
    ) {
      var coordinate = geometry.coordinates[multiFeatureIndex];
      var geom = {
        type: geomType,
        coordinates: coordinate,
      };
      if (
        callback((0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.feature)(geom, properties), featureIndex, multiFeatureIndex) ===
        false
      )
        return false;
    }
  });
}

/**
 * Callback for flattenReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback flattenReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Reduce flattened features in any GeoJSON object, similar to Array.reduce().
 *
 * @name flattenReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex, multiFeatureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenReduce(features, function (previousValue, currentFeature, featureIndex, multiFeatureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   return currentFeature
 * });
 */
function flattenReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  flattenEach(
    geojson,
    function (currentFeature, featureIndex, multiFeatureIndex) {
      if (
        featureIndex === 0 &&
        multiFeatureIndex === 0 &&
        initialValue === undefined
      )
        previousValue = currentFeature;
      else
        previousValue = callback(
          previousValue,
          currentFeature,
          featureIndex,
          multiFeatureIndex
        );
    }
  );
  return previousValue;
}

/**
 * Callback for segmentEach
 *
 * @callback segmentEachCallback
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 * @returns {void}
 */

/**
 * Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex)
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentEach(polygon, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //=currentSegment
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   //=segmentIndex
 * });
 *
 * // Calculate the total number of segments
 * var total = 0;
 * turf.segmentEach(polygon, function () {
 *     total++;
 * });
 */
function segmentEach(geojson, callback) {
  flattenEach(geojson, function (feature, featureIndex, multiFeatureIndex) {
    var segmentIndex = 0;

    // Exclude null Geometries
    if (!feature.geometry) return;
    // (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
    var type = feature.geometry.type;
    if (type === "Point" || type === "MultiPoint") return;

    // Generate 2-vertex line segments
    var previousCoords;
    var previousFeatureIndex = 0;
    var previousMultiIndex = 0;
    var prevGeomIndex = 0;
    if (
      coordEach(
        feature,
        function (
          currentCoord,
          coordIndex,
          featureIndexCoord,
          multiPartIndexCoord,
          geometryIndex
        ) {
          // Simulating a meta.coordReduce() since `reduce` operations cannot be stopped by returning `false`
          if (
            previousCoords === undefined ||
            featureIndex > previousFeatureIndex ||
            multiPartIndexCoord > previousMultiIndex ||
            geometryIndex > prevGeomIndex
          ) {
            previousCoords = currentCoord;
            previousFeatureIndex = featureIndex;
            previousMultiIndex = multiPartIndexCoord;
            prevGeomIndex = geometryIndex;
            segmentIndex = 0;
            return;
          }
          var currentSegment = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.lineString)(
            [previousCoords, currentCoord],
            feature.properties
          );
          if (
            callback(
              currentSegment,
              featureIndex,
              multiFeatureIndex,
              geometryIndex,
              segmentIndex
            ) === false
          )
            return false;
          segmentIndex++;
          previousCoords = currentCoord;
        }
      ) === false
    )
      return false;
  });
}

/**
 * Callback for segmentReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback segmentReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 */

/**
 * Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (previousValue, currentSegment, currentIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentReduce(polygon, function (previousSegment, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //= previousSegment
 *   //= currentSegment
 *   //= featureIndex
 *   //= multiFeatureIndex
 *   //= geometryIndex
 *   //= segmentIndex
 *   return currentSegment
 * });
 *
 * // Calculate the total number of segments
 * var initialValue = 0
 * var total = turf.segmentReduce(polygon, function (previousValue) {
 *     previousValue++;
 *     return previousValue;
 * }, initialValue);
 */
function segmentReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  var started = false;
  segmentEach(
    geojson,
    function (
      currentSegment,
      featureIndex,
      multiFeatureIndex,
      geometryIndex,
      segmentIndex
    ) {
      if (started === false && initialValue === undefined)
        previousValue = currentSegment;
      else
        previousValue = callback(
          previousValue,
          currentSegment,
          featureIndex,
          multiFeatureIndex,
          geometryIndex,
          segmentIndex
        );
      started = true;
    }
  );
  return previousValue;
}

/**
 * Callback for lineEach
 *
 * @callback lineEachCallback
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Iterate over line or ring coordinates in LineString, Polygon, MultiLineString, MultiPolygon Features or Geometries,
 * similar to Array.forEach.
 *
 * @name lineEach
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @example
 * var multiLine = turf.multiLineString([
 *   [[26, 37], [35, 45]],
 *   [[36, 53], [38, 50], [41, 55]]
 * ]);
 *
 * turf.lineEach(multiLine, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function lineEach(geojson, callback) {
  // validation
  if (!geojson) throw new Error("geojson is required");

  flattenEach(geojson, function (feature, featureIndex, multiFeatureIndex) {
    if (feature.geometry === null) return;
    var type = feature.geometry.type;
    var coords = feature.geometry.coordinates;
    switch (type) {
      case "LineString":
        if (callback(feature, featureIndex, multiFeatureIndex, 0, 0) === false)
          return false;
        break;
      case "Polygon":
        for (
          var geometryIndex = 0;
          geometryIndex < coords.length;
          geometryIndex++
        ) {
          if (
            callback(
              (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.lineString)(coords[geometryIndex], feature.properties),
              featureIndex,
              multiFeatureIndex,
              geometryIndex
            ) === false
          )
            return false;
        }
        break;
    }
  });
}

/**
 * Callback for lineReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback lineReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed.
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name lineReduce
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var multiPoly = turf.multiPolygon([
 *   turf.polygon([[[12,48],[2,41],[24,38],[12,48]], [[9,44],[13,41],[13,45],[9,44]]]),
 *   turf.polygon([[[5, 5], [0, 0], [2, 2], [4, 4], [5, 5]]])
 * ]);
 *
 * turf.lineReduce(multiPoly, function (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentLine
 * });
 */
function lineReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  lineEach(
    geojson,
    function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
      if (featureIndex === 0 && initialValue === undefined)
        previousValue = currentLine;
      else
        previousValue = callback(
          previousValue,
          currentLine,
          featureIndex,
          multiFeatureIndex,
          geometryIndex
        );
    }
  );
  return previousValue;
}

/**
 * Finds a particular 2-vertex LineString Segment from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 * Point & MultiPoint will always return null.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.segmentIndex=0] Segment Index
 * @param {Object} [options.properties={}] Translate Properties to output LineString
 * @param {BBox} [options.bbox={}] Translate BBox to output LineString
 * @param {number|string} [options.id={}] Translate Id to output LineString
 * @returns {Feature<LineString>} 2-vertex GeoJSON Feature LineString
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findSegment(multiLine);
 * // => Feature<LineString<[[10, 10], [50, 30]]>>
 *
 * // First Segment of 2nd Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: 1});
 * // => Feature<LineString<[[-10, -10], [-50, -30]]>>
 *
 * // Last Segment of Last Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: -1, segmentIndex: -1});
 * // => Feature<LineString<[[-50, -30], [-30, -40]]>>
 */
function findSegment(geojson, options) {
  // Optional Parameters
  options = options || {};
  if (!(0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(options)) throw new Error("options is invalid");
  var featureIndex = options.featureIndex || 0;
  var multiFeatureIndex = options.multiFeatureIndex || 0;
  var geometryIndex = options.geometryIndex || 0;
  var segmentIndex = options.segmentIndex || 0;

  // Find FeatureIndex
  var properties = options.properties;
  var geometry;

  switch (geojson.type) {
    case "FeatureCollection":
      if (featureIndex < 0)
        featureIndex = geojson.features.length + featureIndex;
      properties = properties || geojson.features[featureIndex].properties;
      geometry = geojson.features[featureIndex].geometry;
      break;
    case "Feature":
      properties = properties || geojson.properties;
      geometry = geojson.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      geometry = geojson;
      break;
    default:
      throw new Error("geojson is invalid");
  }

  // Find SegmentIndex
  if (geometry === null) return null;
  var coords = geometry.coordinates;
  switch (geometry.type) {
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
      if (segmentIndex < 0) segmentIndex = coords.length + segmentIndex - 1;
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.lineString)(
        [coords[segmentIndex], coords[segmentIndex + 1]],
        properties,
        options
      );
    case "Polygon":
      if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
      if (segmentIndex < 0)
        segmentIndex = coords[geometryIndex].length + segmentIndex - 1;
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.lineString)(
        [
          coords[geometryIndex][segmentIndex],
          coords[geometryIndex][segmentIndex + 1],
        ],
        properties,
        options
      );
    case "MultiLineString":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (segmentIndex < 0)
        segmentIndex = coords[multiFeatureIndex].length + segmentIndex - 1;
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.lineString)(
        [
          coords[multiFeatureIndex][segmentIndex],
          coords[multiFeatureIndex][segmentIndex + 1],
        ],
        properties,
        options
      );
    case "MultiPolygon":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (geometryIndex < 0)
        geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
      if (segmentIndex < 0)
        segmentIndex =
          coords[multiFeatureIndex][geometryIndex].length - segmentIndex - 1;
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.lineString)(
        [
          coords[multiFeatureIndex][geometryIndex][segmentIndex],
          coords[multiFeatureIndex][geometryIndex][segmentIndex + 1],
        ],
        properties,
        options
      );
  }
  throw new Error("geojson is invalid");
}

/**
 * Finds a particular Point from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.coordIndex=0] Coord Index
 * @param {Object} [options.properties={}] Translate Properties to output Point
 * @param {BBox} [options.bbox={}] Translate BBox to output Point
 * @param {number|string} [options.id={}] Translate Id to output Point
 * @returns {Feature<Point>} 2-vertex GeoJSON Feature Point
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findPoint(multiLine);
 * // => Feature<Point<[10, 10]>>
 *
 * // First Segment of the 2nd Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: 1});
 * // => Feature<Point<[-10, -10]>>
 *
 * // Last Segment of last Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: -1, coordIndex: -1});
 * // => Feature<Point<[-30, -40]>>
 */
function findPoint(geojson, options) {
  // Optional Parameters
  options = options || {};
  if (!(0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(options)) throw new Error("options is invalid");
  var featureIndex = options.featureIndex || 0;
  var multiFeatureIndex = options.multiFeatureIndex || 0;
  var geometryIndex = options.geometryIndex || 0;
  var coordIndex = options.coordIndex || 0;

  // Find FeatureIndex
  var properties = options.properties;
  var geometry;

  switch (geojson.type) {
    case "FeatureCollection":
      if (featureIndex < 0)
        featureIndex = geojson.features.length + featureIndex;
      properties = properties || geojson.features[featureIndex].properties;
      geometry = geojson.features[featureIndex].geometry;
      break;
    case "Feature":
      properties = properties || geojson.properties;
      geometry = geojson.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      geometry = geojson;
      break;
    default:
      throw new Error("geojson is invalid");
  }

  // Find Coord Index
  if (geometry === null) return null;
  var coords = geometry.coordinates;
  switch (geometry.type) {
    case "Point":
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.point)(coords, properties, options);
    case "MultiPoint":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.point)(coords[multiFeatureIndex], properties, options);
    case "LineString":
      if (coordIndex < 0) coordIndex = coords.length + coordIndex;
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.point)(coords[coordIndex], properties, options);
    case "Polygon":
      if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
      if (coordIndex < 0)
        coordIndex = coords[geometryIndex].length + coordIndex;
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.point)(coords[geometryIndex][coordIndex], properties, options);
    case "MultiLineString":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (coordIndex < 0)
        coordIndex = coords[multiFeatureIndex].length + coordIndex;
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.point)(coords[multiFeatureIndex][coordIndex], properties, options);
    case "MultiPolygon":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (geometryIndex < 0)
        geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
      if (coordIndex < 0)
        coordIndex =
          coords[multiFeatureIndex][geometryIndex].length - coordIndex;
      return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.point)(
        coords[multiFeatureIndex][geometryIndex][coordIndex],
        properties,
        options
      );
  }
  throw new Error("geojson is invalid");
}




/***/ }),

/***/ "./node_modules/@turf/midpoint/dist/es/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@turf/midpoint/dist/es/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _turf_bearing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/bearing */ "./node_modules/@turf/bearing/dist/es/index.js");
/* harmony import */ var _turf_destination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/destination */ "./node_modules/@turf/destination/dist/es/index.js");
/* harmony import */ var _turf_distance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/distance */ "./node_modules/@turf/distance/dist/es/index.js");




/**
 * Takes two {@link Point|points} and returns a point midway between them.
 * The midpoint is calculated geodesically, meaning the curvature of the earth is taken into account.
 *
 * @name midpoint
 * @param {Coord} point1 first point
 * @param {Coord} point2 second point
 * @returns {Feature<Point>} a point midway between `pt1` and `pt2`
 * @example
 * var point1 = turf.point([144.834823, -37.771257]);
 * var point2 = turf.point([145.14244, -37.830937]);
 *
 * var midpoint = turf.midpoint(point1, point2);
 *
 * //addToMap
 * var addToMap = [point1, point2, midpoint];
 * midpoint.properties['marker-color'] = '#f00';
 */
function midpoint(point1, point2) {
  var dist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_2__["default"])(point1, point2);
  var heading = (0,_turf_bearing__WEBPACK_IMPORTED_MODULE_0__["default"])(point1, point2);
  var midpoint = (0,_turf_destination__WEBPACK_IMPORTED_MODULE_1__["default"])(point1, dist / 2, heading);

  return midpoint;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (midpoint);


/***/ }),

/***/ "./node_modules/@turf/nearest-point-on-line/dist/es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@turf/nearest-point-on-line/dist/es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _turf_bearing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/bearing */ "./node_modules/@turf/bearing/dist/es/index.js");
/* harmony import */ var _turf_distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/distance */ "./node_modules/@turf/distance/dist/es/index.js");
/* harmony import */ var _turf_destination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/destination */ "./node_modules/@turf/destination/dist/es/index.js");
/* harmony import */ var _turf_line_intersect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @turf/line-intersect */ "./node_modules/@turf/line-intersect/dist/es/index.js");
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/dist/es/index.js");
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");







/**
 * Takes a {@link Point} and a {@link LineString} and calculates the closest Point on the (Multi)LineString.
 *
 * @name nearestPointOnLine
 * @param {Geometry|Feature<LineString|MultiLineString>} lines lines to snap to
 * @param {Geometry|Feature<Point>|number[]} pt point to snap from
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
 * @returns {Feature<Point>} closest point on the `line` to `point`. The properties object will contain three values: `index`: closest point was found on nth line part, `dist`: distance between pt and the closest point, `location`: distance along the line between start and the closest point.
 * @example
 * var line = turf.lineString([
 *     [-77.031669, 38.878605],
 *     [-77.029609, 38.881946],
 *     [-77.020339, 38.884084],
 *     [-77.025661, 38.885821],
 *     [-77.021884, 38.889563],
 *     [-77.019824, 38.892368]
 * ]);
 * var pt = turf.point([-77.037076, 38.884017]);
 *
 * var snapped = turf.nearestPointOnLine(line, pt, {units: 'miles'});
 *
 * //addToMap
 * var addToMap = [line, pt, snapped];
 * snapped.properties['marker-color'] = '#00f';
 */
function nearestPointOnLine(lines, pt, options) {
    if (options === void 0) { options = {}; }
    var closestPt = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_5__.point)([Infinity, Infinity], {
        dist: Infinity,
    });
    var length = 0.0;
    (0,_turf_meta__WEBPACK_IMPORTED_MODULE_4__.flattenEach)(lines, function (line) {
        var coords = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_6__.getCoords)(line);
        for (var i = 0; i < coords.length - 1; i++) {
            //start
            var start = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_5__.point)(coords[i]);
            start.properties.dist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(pt, start, options);
            //stop
            var stop_1 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_5__.point)(coords[i + 1]);
            stop_1.properties.dist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(pt, stop_1, options);
            // sectionLength
            var sectionLength = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(start, stop_1, options);
            //perpendicular
            var heightDistance = Math.max(start.properties.dist, stop_1.properties.dist);
            var direction = (0,_turf_bearing__WEBPACK_IMPORTED_MODULE_0__["default"])(start, stop_1);
            var perpendicularPt1 = (0,_turf_destination__WEBPACK_IMPORTED_MODULE_2__["default"])(pt, heightDistance, direction + 90, options);
            var perpendicularPt2 = (0,_turf_destination__WEBPACK_IMPORTED_MODULE_2__["default"])(pt, heightDistance, direction - 90, options);
            var intersect = (0,_turf_line_intersect__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_turf_helpers__WEBPACK_IMPORTED_MODULE_5__.lineString)([
                perpendicularPt1.geometry.coordinates,
                perpendicularPt2.geometry.coordinates,
            ]), (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_5__.lineString)([start.geometry.coordinates, stop_1.geometry.coordinates]));
            var intersectPt = null;
            if (intersect.features.length > 0) {
                intersectPt = intersect.features[0];
                intersectPt.properties.dist = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(pt, intersectPt, options);
                intersectPt.properties.location =
                    length + (0,_turf_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(start, intersectPt, options);
            }
            if (start.properties.dist < closestPt.properties.dist) {
                closestPt = start;
                closestPt.properties.index = i;
                closestPt.properties.location = length;
            }
            if (stop_1.properties.dist < closestPt.properties.dist) {
                closestPt = stop_1;
                closestPt.properties.index = i + 1;
                closestPt.properties.location = length + sectionLength;
            }
            if (intersectPt &&
                intersectPt.properties.dist < closestPt.properties.dist) {
                closestPt = intersectPt;
                closestPt.properties.index = i;
            }
            // update length
            length += sectionLength;
        }
    });
    return closestPt;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nearestPointOnLine);


/***/ }),

/***/ "./node_modules/@turf/nearest-point/dist/es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@turf/nearest-point/dist/es/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _turf_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/clone */ "./node_modules/@turf/clone/dist/es/index.js");
/* harmony import */ var _turf_distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/distance */ "./node_modules/@turf/distance/dist/es/index.js");
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/dist/es/index.js");



/**
 * Takes a reference {@link Point|point} and a FeatureCollection of Features
 * with Point geometries and returns the
 * point from the FeatureCollection closest to the reference. This calculation
 * is geodesic.
 *
 * @name nearestPoint
 * @param {Coord} targetPoint the reference point
 * @param {FeatureCollection<Point>} points against input point set
 * @returns {Feature<Point>} the closest point in the set to the reference point
 * @example
 * var targetPoint = turf.point([28.965797, 41.010086], {"marker-color": "#0F0"});
 * var points = turf.featureCollection([
 *     turf.point([28.973865, 41.011122]),
 *     turf.point([28.948459, 41.024204]),
 *     turf.point([28.938674, 41.013324])
 * ]);
 *
 * var nearest = turf.nearestPoint(targetPoint, points);
 *
 * //addToMap
 * var addToMap = [targetPoint, points, nearest];
 * nearest.properties['marker-color'] = '#F00';
 */
function nearestPoint(targetPoint, points) {
    // Input validation
    if (!targetPoint)
        throw new Error("targetPoint is required");
    if (!points)
        throw new Error("points is required");
    var nearest;
    var minDist = Infinity;
    var bestFeatureIndex = 0;
    (0,_turf_meta__WEBPACK_IMPORTED_MODULE_2__.featureEach)(points, function (pt, featureIndex) {
        var distanceToPoint = (0,_turf_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(targetPoint, pt);
        if (distanceToPoint < minDist) {
            bestFeatureIndex = featureIndex;
            minDist = distanceToPoint;
        }
    });
    nearest = (0,_turf_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(points.features[bestFeatureIndex]);
    nearest.properties.featureIndex = bestFeatureIndex;
    nearest.properties.distanceToPoint = minDist;
    return nearest;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nearestPoint);


/***/ }),

/***/ "./node_modules/@turf/polygon-to-line/dist/es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@turf/polygon-to-line/dist/es/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coordsToLine: () => (/* binding */ coordsToLine),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   multiPolygonToLine: () => (/* binding */ multiPolygonToLine),
/* harmony export */   polygonToLine: () => (/* binding */ polygonToLine)
/* harmony export */ });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");


/**
 * Converts a {@link Polygon} to {@link LineString|(Multi)LineString} or {@link MultiPolygon} to a
 * {@link FeatureCollection} of {@link LineString|(Multi)LineString}.
 *
 * @name polygonToLine
 * @param {Feature<Polygon|MultiPolygon>} poly Feature to convert
 * @param {Object} [options={}] Optional parameters
 * @param {Object} [options.properties={}] translates GeoJSON properties to Feature
 * @returns {FeatureCollection|Feature<LineString|MultiLinestring>} converted (Multi)Polygon to (Multi)LineString
 * @example
 * var poly = turf.polygon([[[125, -30], [145, -30], [145, -20], [125, -20], [125, -30]]]);
 *
 * var line = turf.polygonToLine(poly);
 *
 * //addToMap
 * var addToMap = [line];
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(poly, options) {
    if (options === void 0) { options = {}; }
    var geom = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getGeom)(poly);
    if (!options.properties && poly.type === "Feature") {
        options.properties = poly.properties;
    }
    switch (geom.type) {
        case "Polygon":
            return polygonToLine(geom, options);
        case "MultiPolygon":
            return multiPolygonToLine(geom, options);
        default:
            throw new Error("invalid poly");
    }
}
/**
 * @private
 */
function polygonToLine(poly, options) {
    if (options === void 0) { options = {}; }
    var geom = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getGeom)(poly);
    var coords = geom.coordinates;
    var properties = options.properties
        ? options.properties
        : poly.type === "Feature"
            ? poly.properties
            : {};
    return coordsToLine(coords, properties);
}
/**
 * @private
 */
function multiPolygonToLine(multiPoly, options) {
    if (options === void 0) { options = {}; }
    var geom = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getGeom)(multiPoly);
    var coords = geom.coordinates;
    var properties = options.properties
        ? options.properties
        : multiPoly.type === "Feature"
            ? multiPoly.properties
            : {};
    var lines = [];
    coords.forEach(function (coord) {
        lines.push(coordsToLine(coord, properties));
    });
    return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.featureCollection)(lines);
}
/**
 * @private
 */
function coordsToLine(coords, properties) {
    if (coords.length > 1) {
        return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.multiLineString)(coords, properties);
    }
    return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.lineString)(coords[0], properties);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnapDirectSelect: () => (/* reexport safe */ _modes_snap_direct_select_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   SnapLineMode: () => (/* reexport safe */ _modes_snap_line_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   SnapModeDrawStyles: () => (/* reexport safe */ _utils_customDrawStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   SnapPointMode: () => (/* reexport safe */ _modes_snap_point_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   SnapPolygonMode: () => (/* reexport safe */ _modes_snap_polygon_js__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _modes_snap_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modes/snap_point.js */ "./src/modes/snap_point.js");
/* harmony import */ var _modes_snap_line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modes/snap_line.js */ "./src/modes/snap_line.js");
/* harmony import */ var _modes_snap_polygon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modes/snap_polygon.js */ "./src/modes/snap_polygon.js");
/* harmony import */ var _modes_snap_direct_select_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modes/snap_direct_select.js */ "./src/modes/snap_direct_select.js");
/* harmony import */ var _utils_customDrawStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/customDrawStyles.js */ "./src/utils/customDrawStyles.js");





})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=mapbox-gl-draw-snap-mode.js.map