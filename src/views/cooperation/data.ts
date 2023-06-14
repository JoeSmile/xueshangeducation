import { School, SchoolType } from "./types";

export const schoolList: School[] = [
    {
        "name": "北京语言大学&法国克莱蒙高等商学院",
        "majorName": "商业智能与分析",
        "typeName": "全日制",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "1.5年",
        "fee": "见官网",
        "quota": "50"
    },
    {
        "name": "中国传媒大学&英国威斯敏斯特大学",
        "majorName": "国际媒体商务",
        "typeName": "全日制",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "2",
        "fee": "约17.5万元/人",
        "quota": "60人"
    },
    {
        "name": "中国传媒大学&英国诺丁汉特伦特大学",
        "majorName": "传播学(媒介与全球化)",
        "typeName": "全日制",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "2",
        "fee": "16万人民币",
        "quota": "28人"
    },
    {
        "name": "中国传媒大学&英国诺丁汉特伦特大学",
        "majorName": "新闻与传播(国际广播电视)",
        "typeName": "全日制",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "2",
        "fee": "16万人民币",
        "quota": "28人"
    },
    {
        "name": "中国传媒大学&英国诺丁汉特伦特大学",
        "majorName": "传媒经济学(文博管理)",
        "typeName": "全日制",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "2",
        "fee": "16万人民币",
        "quota": "28人"
    },
    {
        "name": "北京城市学院&英国华威大学",
        "majorName": "项目管理",
        "typeName": "全日制",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "1.5",
        "fee": "18万元人民币",
        "quota": "50人"
    },
    {
        "name": "上海海事大学&瑞典世界海事大学",
        "majorName": "国际运输与物流",
        "typeName": "全日制",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "2",
        "fee": "93000元",
        "quota": "50人"
    },
    {
        "name": "浙江工业大学&英国利兹贝克特大学",
        "majorName": "国际贸易与金融",
        "typeName": "全日制",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "1",
        "fee": "96000元人民币",
        "quota": "60人"
    },
    {
        "name": "中南财经政法大学&意大利罗马第一大学",
        "majorName": "欧洲学：比较法与欧洲法",
        "typeName": "全日制培养",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "2",
        "fee": "RMB 7.5万元/学年",
        "quota": "30人"
    },
    {
        "name": "江苏师范大学&俄罗斯普列汉诺夫经济大学",
        "majorName": "国际贸易学",
        "typeName": "按全日制硕士教学",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "2",
        "fee": "66266元人民币",
        "quota": "30人"
    },
    {
        "name": "南京师范大学&美国马里兰大学",
        "majorName": "刑事司法学",
        "typeName": "全日制",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "2",
        "fee": "马里兰大学15000美元南京师范大学26000元人民",
        "quota": "50人"
    },
    {
        "name": "广东外语外贸大学&英国雷丁大学",
        "majorName": "英语",
        "typeName": "脱产全日制",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "1",
        "fee": "10500镑",
        "quota": "40人"
    },
    {
        "name": "深圳大学&法国南特高等商学院",
        "majorName": "数量经济学",
        "typeName": "全日制教学",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "2",
        "fee": "15万元人民币",
        "quota": "80人"
    },
    {
        "name": "大连海事大学&瑞典世界海事大学",
        "majorName": "海上安全与环境管理",
        "typeName": "全日制学习",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "14个月",
        "fee": "89900元",
        "quota": "70人"
    },
    {
        "name": "海南医学院西英格兰学院",
        "majorName": "国际护理实践、公共卫生、康复",
        "typeName": "全日制学习",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "1.5年",
        "fee": "98000人民币/年",
        "quota": ""
    },
    {
        "name": "天津大学-美国佐治亚理工学院",
        "majorName": "电子与计算机工程(ECE) 硕士",
        "typeName": "全日制学习",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "3-5学期",
        "fee": "4.5万元/生/学期",
        "quota": "100人"
    },
    {
        "name": "烟台大学-德国特里尔应用技术大学",
        "majorName": "国际物流管理理学硕士",
        "typeName": "全日制学习",
        "type": SchoolType.FULL_TIME,
        "lengthOfSchooling": "2年",
        "fee": "13.6万",
        "quota": "30人"
    },
    // partTime-Schools
    {
        "name": "对外经贸－法国巴黎第一大学",
        "majorName": "企业管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "18.96万"
    },
    {
        "name": "对外经贸－美国西雅图城市大学",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "17.96万"
    },
    {
        "name": "北京邮电大学－法国里昂商学院",
        "majorName": "EMBA",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "42.8万"
    },
    {
        "name": "对外经贸－法国诺欧商学院",
        "majorName": "零售业管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "17.95万"
    },
    {
        "name": "中国人民大学－加拿大女王大学",
        "majorName": "金融学硕士",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "36.8万"
    },
    {
        "name": "社科院－美国杜兰大学",
        "majorName": "能源管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "25.8万"
    },
    {
        "name": "",
        "majorName": "金融管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "",
        "fee": "32.8万"
    },
    {
        "name": "中国矿业大学－加拿大魁北克大学",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "24万"
    },
    {
        "name": "北京科技大学－美国阿灵顿商学院",
        "majorName": "EMBA",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "30.8万"
    },
    {
        "name": "中国传媒大学国际传媒教育学院",
        "majorName": "传媒学 新闻与传播 传媒经济学",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "16万"
    },
    {
        "name": "北京城市学院-英国华威大学",
        "majorName": "项目管理",
        "type": SchoolType.PART_TIME,
        "location": "北京、上海",
        "fee": "18.8万"
    },
    {
        "name": "北京国家会计学院－香港城市大学",
        "majorName": "智能会计与金融科技应用理学硕士",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "25万"
    },
    {
        "name": "江西财经－美国纽约理工",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "北京、上海、深圳",
        "fee": "16.3万"
    },
    {
        "name": "中央财经大学－美国史蒂文斯理工学院",
        "majorName": "项目管理理学硕士",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "21.8万"
    },
    {
        "name": "北京理工大学－德国德累斯顿工业大学",
        "majorName": "职业教育和人力资源开发",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "15.8万"
    },
    {
        "name": "首都师范大学－澳大利亚弗林德斯大学",
        "majorName": "教育硕士",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "9.6万"
    },
    {
        "name": "清华大学－香港中文大学",
        "majorName": "金融MBA",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "43.8万"
    },
    {
        "name": "天津财经大学－加拿大西三一大学",
        "majorName": "国际MBA",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "18万"
    },
    {
        "name": "北京大学－伦敦大学学院",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "36.8万"
    },
    {
        "name": "北京大学－弗拉瑞克商学院",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "北京",
        "fee": "36.8万"
    },
    {
        "name": "上海地区",
        "majorName": "",
        "type": SchoolType.PART_TIME,
        "location": "",
        "fee": ""
    },
    {
        "name": "上海交通大学-南洋理工大学",
        "majorName": "EMBA",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "68万"
    },
    {
        "name": "同济大学-德克萨斯大学",
        "majorName": "EMBA",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "40万"
    },
    {
        "name": "北京邮电大学-法国里昂商学院",
        "majorName": "EMBA",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "42.8万"
    },
    {
        "name": "上海交通大学-法国凯致商学院",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "41.8万"
    },
    {
        "name": "上海交通大学-加拿大不列颠哥伦比亚大学",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "36.2万"
    },
    {
        "name": "东华大学-加拿大卡尔顿大学",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "18万"
    },
    {
        "name": "上海国家会计学院-美国亚利桑那州立大学",
        "majorName": "EMBA",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "48.6万"
    },
    {
        "name": "北京城市学院-英国华威大学",
        "majorName": "项目管理",
        "type": SchoolType.PART_TIME,
        "location":"北京、上海",
        "fee": "18.8万"
    },
    {
        "name": "天津财经大学－加拿大西三一大学",
        "majorName": "国际MBA",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "18.8万"
    },
    {
        "name": "上海财经大学-美国韦伯斯特大学",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "29.8万"
    },
    {
        "name": "南昌大学－普瓦提埃大学",
        "majorName": "国际企业管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "19.8万"
    },
    {
        "name": "上海大学－悉尼科技大学",
        "majorName": "工程管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "15.8万"
    },
    {
        "name": "",
        "majorName": "金融硕士",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "18.8万"
    },
    {
        "name": "复旦大学－香港大学",
        "majorName": "国际MBA",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "49.8万"
    },
    {
        "name": "上海国家会计学院－香港中文大学",
        "majorName": "高级财务专业硕士",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "30.8万"
    },
    {
        "name": "西安交通大学－法国SKEMA商学院",
        "majorName": "创业与创新管理 人工智能大数据",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "23万"
    },
    {
        "name": "西安交通大学－加拿大阿尔伯塔大学",
        "majorName": "金融财务管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "27.16万"
    },
    {
        "name": "华东理工大学－澳大利亚堪培拉大学",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "上海",
        "fee": "25.8万"
    },
    {
        "name": "天津地区",
        "majorName": "",
        "type": SchoolType.PART_TIME,
        "location": "",
        "fee": ""
    },
    {
        "name": "南开大学－澳大利亚弗林德斯大学",
        "majorName": "国际经贸关系 教育领导与管理 医院管理",
        "type": SchoolType.PART_TIME,
        "location": "天津",
        "fee": "14万"
    },
    {
        "name": "天津师范大学与韩国世翰大学",
        "majorName": "情报学 教育行政学",
        "type": SchoolType.PART_TIME,
        "location": "天津",
        "fee": "8.6万+4500美金"
    },
    {
        "name": "天津商业大学与美国东密西根大学",
        "majorName": "人力资源管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "天津",
        "fee": "9.6万"
    },
    {
        "name": "天津财经大学－加拿大西三一大学",
        "majorName": "国际MBA",
        "type": SchoolType.PART_TIME,
        "location": "天津",
        "fee": "16万"
    },
    {
        "name": "辽宁地区",
        "majorName": "",
        "type": SchoolType.PART_TIME,
        "location": "",
        "fee": ""
    },
    {
        "name": "沈阳工业大学－美国班尼迪克大学",
        "majorName": "企业管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "沈阳",
        "fee": "8万"
    },
    {
        "name": "沈阳建筑大学－美国班尼迪克大学",
        "majorName": "信息管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "沈阳",
        "fee": "10万"
    },
    {
        "name": "大连医科大学与美国班尼迪克大学",
        "majorName": "公共卫生硕士",
        "type": SchoolType.PART_TIME,
        "location": "大连",
        "fee": "9万"
    },
    {
        "name": "杭州地区",
        "majorName": "",
        "type": SchoolType.PART_TIME,
        "location": "",
        "fee": ""
    },
    {
        "name": "浙江工商大学－魁北克大学",
        "majorName": "项目管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "杭州",
        "fee": "15万"
    },
    {
        "name": "浙江师范大学-澳大利亚伊迪斯科文大学",
        "majorName": "教育管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "杭州",
        "fee": "7.85万"
    },
    {
        "name": "浙江大学-香港理工大学",
        "majorName": "品质管理",
        "type": SchoolType.PART_TIME,
        "location": "杭州",
        "fee": "21.6万"
    },
    {
        "name": "浙江大学-香港理工大学",
        "majorName": "旅游管理",
        "type": SchoolType.PART_TIME,
        "location": "杭州",
        "fee": "25.2万"
    },
    {
        "name": "浙江大学-香港理工大学",
        "majorName": "房地产",
        "type": SchoolType.PART_TIME,
        "location": "杭州",
        "fee": "16.6万"
    },
    {
        "name": "西南地区",
        "majorName": "",
        "type": SchoolType.PART_TIME,
        "location": "",
        "fee": ""
    },
    {
        "name": "云南财经大学－英国格林威治大学",
        "majorName": "项目管理",
        "type": SchoolType.PART_TIME,
        "location": "昆明",
        "fee": "15.9万"
    },
    {
        "name": "",
        "majorName": "房地产",
        "type": SchoolType.PART_TIME,
        "location": "昆明",
        "fee": "15.4万"
    },
    {
        "name": "电子科技大学－美国韦伯斯特大学",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "成都",
        "fee": "15.8万"
    },
    {
        "name": "贵州大学－魁北克大学",
        "majorName": "项目管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "贵州",
        "fee": "7万"
    },
    {
        "name": "陕西地区",
        "majorName": "",
        "type": SchoolType.PART_TIME,
        "location": "",
        "fee": ""
    },
    {
        "name": "西安交通大学-美国阿灵顿商学院",
        "majorName": "EMBA",
        "type": SchoolType.PART_TIME,
        "location": "西安",
        "fee": "30万"
    },
    {
        "name": "山东地区",
        "majorName": "",
        "type": SchoolType.PART_TIME,
        "location": "",
        "fee": ""
    },
    {
        "name": "烟台大学－德国特里尔大学",
        "majorName": "国际物质流管理理学硕士",
        "type": SchoolType.PART_TIME,
        "location": "烟台",
        "fee": "12万"
    },
    {
        "name": "广深地区",
        "majorName": "",
        "type": SchoolType.PART_TIME,
        "location": "",
        "fee": ""
    },
    {
        "name": "清华大学－香港中文大学",
        "majorName": "金融MBA",
        "type": SchoolType.PART_TIME,
        "location": "深圳",
        "fee": "43.8万"
    },
    {
        "name": "西安交通大学－加拿大阿尔伯塔大学",
        "majorName": "金融财务管理硕士",
        "type": SchoolType.PART_TIME,
        "location": "深圳",
        "fee": "26.96万"
    },
    {
        "name": "中山大学-美国明尼苏达大学",
        "majorName": "EMBA",
        "type": SchoolType.PART_TIME,
        "location": "广州",
        "fee": "51.8万"
    },
    {
        "name": "广东外语外贸大学-英国雷丁大学",
        "majorName": "英语教育",
        "type": SchoolType.PART_TIME,
        "location": "广州",
        "fee": "10万"
    },
    {
        "name": "广东外语外贸大学-英国利兹大学",
        "majorName": "英语教育",
        "type": SchoolType.PART_TIME,
        "location": "广州",
        "fee": "14万"
    },
    {
        "name": "江西财经－美国纽约理工",
        "majorName": "MBA",
        "type": SchoolType.PART_TIME,
        "location": "北京、上海、深圳",
        "fee": "16.3万"
    }
]