# 读取JSON文件
$jsonPath = "json\City_Spread.json"
$jsonContent = Get-Content -Path $jsonPath -Encoding UTF8 -Raw
$jsonData = $jsonContent | ConvertFrom-Json

# 为缺失的城市添加"作用"和"节点角"值
foreach ($feature in $jsonData.features) {
    $attributes = $feature.attributes
    $cityName = $attributes.城市名
    
    # 检查并补充"节点角"
    if (-not $attributes.节点角 -or $attributes.节点角 -eq " ") {
        switch ($cityName) {
            {$_ -in @('普洱', '厦门', '武夷山', '荥经', '雅安', '紫阳', '天津')} {
                $attributes.节点角 = "起点/茶叶产地"
            }
            {$_ -in @('莫斯科', '圣彼得堡', '海参崴', '伦敦', '阿姆斯特丹', '加尔各答')} {
                $attributes.节点角 = "终点/枢纽"
            }
            {$_ -in @('聂拉木', '加德满都', '恰克图', '普兰')} {
                $attributes.节点角 = "边境口岸"
            }
            {$_ -in @('雅加达', '吉隆坡', '科伦坡', '蓬莱', '仁川', '福冈')} {
                $attributes.节点角 = "港口"
            }
            {$_ -in @('丽江', '昌都', '康定', '兰州')} {
                $attributes.节点角 = "重要枢纽"
            }
            {$_ -eq '西里古里'} {
                $attributes.节点角 = "交通要道"
            }
            {$_ -eq '羊楼洞'} {
                $attributes.节点角 = "茶业中心"
            }
            {$_ -eq '汉口'} {
                $attributes.节点角 = "核心枢纽/加工中心"
            }
            default {
                $attributes.节点角 = "陆路中转型"
            }
        }
    }
    
    # 检查并补充"作用"
    if (-not $attributes.作用) {
        switch ($cityName) {
            {$_ -in @('普洱', '厦门', '武夷山', '荥经', '雅安', '紫阳', '天津')} {
                $attributes.作用 = "茶叶供应"
            }
            {$_ -in @('羊楼洞', '汉口')} {
                $attributes.作用 = "茶叶加工"
            }
            {$_ -eq '好望角'} {
                $attributes.作用 = "地理标志"
            }
            default {
                $attributes.作用 = "商贸中转"
            }
        }
    }
}

# 写入更新后的JSON文件
$updatedJson = $jsonData | ConvertTo-Json -Depth 100 -Compress
$updatedJson = $updatedJson -replace '\\u0027', "'"
$updatedJson = $updatedJson -replace '\\u0022', '"'
Set-Content -Path $jsonPath -Value $updatedJson -Encoding UTF8

Write-Host "City_Spread.json已更新完成！"
