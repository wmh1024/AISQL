const str = `**咖啡的思维导图：**

\`\`\`
- 咖啡
    - 分类
        - 风味
            - 浓郁
            - 酸味
            - 回甘
            - 顺滑
        -颜色
            - 浅焙
            - 中焙
            - 深焙
        - 加工方式
            - 水洗法
            - 日晒法
            - 半水洗法
    - 咖啡豆产地
        - 巴西
        - 哥伦比亚
        - 越南
        - 墨西哥
        - 埃塞俄比亚
    - 制作工艺
        - 拿铁
            - 咖啡
            - 牛奶
            - 泡沫
        - 美式咖啡
            - 咖啡
            - 水
        - 卡布奇诺
            - 咖啡
            - 牛奶
            - 可可粉
    - 饮用方式
        - 热咖啡
        - 冰咖啡
        - 速溶咖啡
        - 手冲咖啡
\`\`\`

以上是咖啡的思维导图的Markdown语法窗口。`
if (str.match(/\`\`\`[\s\S]*\`\`\`/g)) {
    console.log(str.match(/\`\`\`[\s\S]*\`\`\`/g)[0].replace(/\`\`\`/g, '').replace(/markdown/g, ''))
}