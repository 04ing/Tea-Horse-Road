import json

# 读取JSON文件
with open('json/City_Spread.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 为缺失的城市添加"作用"和"节点角"值
for feature in data['features']:
    attributes = feature['attributes']
    city_name = attributes.get('城市名', '')
    
    # 检查并补充"节点角"
    if '节点角' not in attributes or attributes['节点角'] == ' ':
        if city_name in ['普洱', '厦门', '武夷山', '荥经', '雅安', '紫阳', '天津']:
            attributes['节点角'] = '起点/茶叶产地'
        elif city_name in ['莫斯科', '圣彼得堡', '海参崴', '伦敦', '阿姆斯特丹', '加尔各答']:
            attributes['节点角'] = '终点/枢纽'
        elif city_name in ['聂拉木', '加德满都', '恰克图', '普兰']:
            attributes['节点角'] = '边境口岸'
        elif city_name in ['雅加达', '吉隆坡', '科伦坡', '蓬莱', '仁川', '福冈']:
            attributes['节点角'] = '港口'
        elif city_name in ['丽江', '昌都', '康定', '兰州']:
            attributes['节点角'] = '重要枢纽'
        elif city_name in ['西里古里']:
            attributes['节点角'] = '交通要道'
        elif city_name in ['羊楼洞']:
            attributes['节点角'] = '茶业中心'
        elif city_name in ['汉口']:
            attributes['节点角'] = '核心枢纽/加工中心'
        else:
            attributes['节点角'] = '陆路中转型'
    
    # 检查并补充"作用"
    if '作用' not in attributes:
        if city_name in ['普洱', '厦门', '武夷山', '荥经', '雅安', '紫阳', '天津']:
            attributes['作用'] = '茶叶供应'
        elif city_name in ['羊楼洞', '汉口']:
            attributes['作用'] = '茶叶加工'
        elif city_name in ['好望角']:
            attributes['作用'] = '地理标志'
        else:
            attributes['作用'] = '商贸中转'

# 写入更新后的JSON文件
with open('json/City_Spread.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=None)

print('City_Spread.json已更新完成！')
