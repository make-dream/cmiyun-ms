//echarts 每个省份
import 'echarts/map/js/province/shandong';
import 'echarts/map/js/province/anhui';
import 'echarts/map/js/province/aomen';
import 'echarts/map/js/province/beijing';
import 'echarts/map/js/province/chongqing';
import 'echarts/map/js/province/fujian';
import 'echarts/map/js/province/gansu';
import 'echarts/map/js/province/guangdong';
import 'echarts/map/js/province/guangxi';
import 'echarts/map/js/province/guizhou';
import 'echarts/map/js/province/hainan';
import 'echarts/map/js/province/hebei';
import 'echarts/map/js/province/heilongjiang';
import 'echarts/map/js/province/henan';
import 'echarts/map/js/province/hubei';
import 'echarts/map/js/province/hunan';
import 'echarts/map/js/province/jiangsu';
import 'echarts/map/js/province/jiangxi';
import 'echarts/map/js/province/jilin';
import 'echarts/map/js/province/liaoning';
import 'echarts/map/js/province/neimenggu';
import 'echarts/map/js/province/ningxia';
import 'echarts/map/js/province/qinghai';
import 'echarts/map/js/province/shanghai';
import 'echarts/map/js/province/sichuan';
import 'echarts/map/js/province/taiwan';
import 'echarts/map/js/province/tianjin';
import 'echarts/map/js/province/xianggang';
import 'echarts/map/js/province/xinjiang';
import 'echarts/map/js/province/xizang';
import 'echarts/map/js/province/yunnan';
import 'echarts/map/js/province/zhejiang';
import 'echarts/map/js/province/shanxi1';
import 'echarts/map/js/province/shanxi';

//每个区
// import beijing from 'city/beijing.json'

function pro() {
  let city = {
    //山东省
    '烟台': [120.7397, 37.5128],
    '香港': [114.15, 22.15],
    '临沂': [118.3118, 35.2936],
    '潍坊': [119.0918, 36.524],
    '青岛': [120.4651, 36.3373],
    '菏泽': [115.6201, 35.2057],
    '济宁': [116.8286, 35.3375],
    '德州': [116.6858, 37.2107],
    '滨州': [117.8174, 37.4963],
    '聊城': [115.9167, 36.4032],
    '东营': [118.7073, 37.5513],
    '济南': [117.1582, 36.8701],
    '泰安': [117.0264, 36.0516],
    '威海': [121.9482, 37.1393],
    '日照': [119.2786, 35.5023],
    '淄博': [118.0371, 36.6064],
    '枣庄': [117.323, 34.8926],
    '莱芜': [117.6526, 36.2714],
    //江西省
    '赣州': [115.2795, 25.8124],
    '吉安': [114.884, 26.9659],
    '上饶': [117.8613, 28.7292],
    '九江': [115.4224, 29.3774],
    '抚州': [116.4441, 27.4933],
    '宜春': [115.0159, 28.3228],
    '南昌': [116.0046, 28.6633],
    '景德镇': [117.334, 29.3225],
    '萍乡': [113.9282, 27.4823],
    '鹰潭': [117.0813, 28.2349],
    '新余': [114.95, 27.8174],
    //福建省
    '南平': [118.136, 27.2845],
    '三明': [117.5317, 26.3013],
    '龙岩': [116.8066, 25.2026],
    '宁德': [119.6521, 26.9824],
    '福州': [119.4543, 25.9222],
    '漳州': [117.5757, 24.3732],
    '泉州': [118.3228, 25.1147],
    '莆田': [119.0918, 25.3455],
    '厦门': [118.1689, 24.6478],
    //安徽省
    '六安': [116.3123, 31.8329],
    '安庆': [116.7517, 30.5255],
    '滁州': [118.1909, 32.536],
    '宣城': [118.8062, 30.6244],
    '阜阳': [115.7629, 32.9919],
    '宿州': [117.5208, 33.6841],
    '黄山': [118.0481, 29.9542],
    '巢湖': [117.7734, 31.4978],
    '亳州': [116.1914, 33.4698],
    '池州': [117.3889, 30.2014],
    '合肥': [117.29, 32.0581],
    '蚌埠': [117.4109, 33.1073],
    '芜湖': [118.3557, 31.0858],
    '淮北': [116.6968, 33.6896],
    '淮南': [116.7847, 32.7722],
    '马鞍山': [118.6304, 31.5363],
    '铜陵': [117.9382, 30.9375],
    '密云县': [117.0923, 40.5121],
    //浙江省
    '丽水': [119.5642, 28.1854],
    '杭州': [119.5313, 29.8773],
    '温州': [120.498, 27.8119],
    '宁波': [121.5967, 29.6466],
    '舟山': [122.2559, 30.2234],
    '台州': [121.1353, 28.6688],
    '金华': [120.0037, 29.1028],
    '衢州': [118.6853, 28.8666],
    '绍兴': [120.564, 29.7565],
    '嘉兴': [120.9155, 30.6354],
    '湖州': [119.8608, 30.7782],
    //江苏省
    '盐城': [120.2234, 33.5577],
    '徐州': [117.5208,34.3268],
    '南通': [121.1023,32.1625],
    '淮安': [118.927,33.4039],
    '苏州': [120.6519,31.3989],
    '宿迁': [118.5535,33.7775],
    '连云港': [119.1248,34.552],
    '扬州': [119.4653,32.8162],
    '南京': [118.8062,31.9208],
    '泰州': [120.0586,32.5525],
    '无锡': [120.3442,31.5527],
    '常州': [119.4543,31.5582],
    '镇江': [119.4763,31.9702],
    //上海
    '上海': [121.4648, 31.2891],
    '崇明县': [121.5637, 31.5383],
    '南汇区': [121.8755, 30.954],
    '奉贤区': [121.5747, 30.8475],
    '浦东新区': [121.6928, 31.2561],
    '金山区': [121.2657, 30.8112],
    '青浦区': [121.1751, 31.1909],
    '松江区': [121.1984, 31.0268],
    '嘉定区': [121.2437, 31.3625],
    '宝山区': [121.4346, 31.4051],
    '闵行区': [121.4992, 31.0838],
    '杨浦区': [121.528, 31.2966],
    '普陀区': [121.3879, 31.2602],
    '徐汇区': [121.4333, 31.1607],
    '长宁区': [121.3852, 31.2115],
    '闸北区': [121.4511, 31.2794],
    '虹口区': [121.4882, 31.2788],
    '黄浦区': [121.4868, 31.219],
    '卢湾区': [121.4758, 31.2074],
    '静安区': [121.4484, 31.2286],
    //湖南省
    '怀化': [109.9512, 27.4438],
    '永州': [111.709, 25.752],
    '邵阳': [110.9619, 26.8121],
    '郴州': [113.2361, 25.8673],
    '常德': [111.4014, 29.2676],
    '湘西土家族苗族自治州': [109.7864, 28.6743],
    '衡阳': [112.4121, 26.7902],
    '岳阳': [113.2361, 29.1357],
    '益阳': [111.731, 28.3832],
    '长沙': [113.0823, 28.2568],
    '株洲': [113.5327, 27.0319],
    '张家界': [110.5115, 29.328],
    '娄底': [111.6431, 27.7185],
    '湘潭': [112.5439, 27.7075],
    //湖北省
    '恩施土家族苗族自治州': [109.5007, 30.2563],
    '十堰': [110.5115, 32.3877],
    '宜昌': [111.1707, 30.7617],
    '襄樊': [111.9397, 31.9263],
    '黄冈': [115.2686, 30.6628],
    '荆州': [113.291, 30.0092],
    '荆门': [112.6758, 30.9979],
    '咸宁': [114.2578, 29.6631],
    '随州': [113.4338, 31.8768],
    '孝感': [113.9502, 31.1188],
    '武汉': [114.3896, 30.6628],
    '黄石': [115.0159, 29.9213],
    '神农架林区': [110.4565, 31.5802],
    '天门': [113.0273, 30.6409],
    '仙桃': [113.3789, 30.3003],
    '潜江': [112.7637, 30.3607],
    '鄂州': [114.7302, 30.4102],
    //河南省
    '南阳': [112.4011, 33.0359],
    '信阳': [114.8291, 32.0197],
    '洛阳': [112.0605, 34.3158],
    '驻马店': [114.1589, 32.9041],
    '周口': [114.873, 33.6951],
    '商丘': [115.741, 34.2828],
    '三门峡': [110.8301, 34.3158],
    '新乡': [114.2029, 35.3595],
    '平顶山': [112.9724, 33.739],
    '郑州': [113.4668, 34.6234],
    '安阳': [114.5325, 36.0022],
    '开封': [114.5764, 34.6124],
    '焦作': [112.8406, 35.1508],
    '许昌': [113.6975, 34.0466],
    '濮阳': [115.1917, 35.799],
    '漯河': [113.8733, 33.6951],
    '鹤壁': [114.3787, 35.744],
    //广东省
    '清远': [112.9175, 24.3292],
    '韶关': [113.7964, 24.7028],
    '湛江': [110.3577, 20.9894],
    '梅州': [116.1255, 24.1534],
    '河源': [114.917, 23.9722],
    '肇庆': [112.1265, 23.5822],
    '惠州': [114.6204, 23.1647],
    '茂名': [111.0059, 22.0221],
    '江门': [112.6318, 22.1484],
    '阳江': [111.8298, 22.0715],
    '云浮': [111.7859, 22.8516],
    '广州': [113.5107, 23.2196],
    '汕尾': [115.5762, 23.0438],
    '揭阳': [116.1255, 23.313],
    '珠海': [113.7305, 22.1155],
    '佛山': [112.8955, 23.1097],
    '潮州': [116.7847, 23.8293],
    '汕头': [117.1692, 23.3405],
    '深圳': [114.5435, 22.5439],
    '东莞': [113.8953, 22.901],
    '中山': [113.4229, 22.478],
    //广西省
    '百色': [106.6003, 23.9227],
    '河池': [107.8638, 24.5819],
    '桂林': [110.5554, 25.318],
    '南宁': [108.479, 23.1152],
    '柳州': [109.3799, 24.9774],
    '崇左': [107.3364, 22.4725],
    '来宾': [109.7095, 23.8403],
    '玉林': [110.2148, 22.3792],
    '梧州': [110.9949, 23.5052],
    '贺州': [111.3135, 24.4006],
    '钦州': [109.0283, 22.0935],
    '贵港': [109.9402, 23.3459],
    '防城港': [108.0505, 21.9287],
    '北海': [109.314, 21.6211],
    //吉林
    '延边朝鲜族自治州': [129.397, 43.2587],
    '吉林': [126.8372, 43.6047],
    '白城': [123.0029, 45.2637],
    '松原': [124.0906, 44.7198],
    '长春': [125.8154, 44.2584],
    '白山': [127.2217, 42.0941],
    '通化': [125.9583, 41.8579],
    '四平': [124.541, 43.4894],
    '辽源': [125.343, 42.7643],
    //黑龙江
    '黑河': [127.1448, 49.2957],
    '大兴安岭地区': [124.1016, 52.2345],
    '哈尔滨': [127.9688, 45.368],
    '齐齐哈尔': [124.541, 47.5818],
    '牡丹江': [129.7815, 44.7089],
    '绥化': [126.7163, 46.8018],
    '伊春': [129.1992, 47.9608],
    '佳木斯': [133.0005, 47.5763],
    '鸡西': [132.7917, 45.7361],
    '双鸭山': [133.5938, 46.7523],
    '大庆': [124.7717, 46.4282],
    '鹤岗': [130.4407, 47.7081],
    '七台河': [131.2756, 45.9558],
    // 辽宁
    '大连': [122.2229, 39.4409],
    '朝阳': [120.0696, 41.4899],
    '丹东': [124.541, 40.4242],
    '铁岭': [124.2773, 42.7423],
    '沈阳': [123.1238, 42.1216],
    '抚顺': [124.585, 41.8579],
    '葫芦岛': [120.1575, 40.578],
    '阜新': [122.0032, 42.2699],
    '锦州': [121.6626, 41.4294],
    '鞍山': [123.0798, 40.6055],
    '本溪': [124.1455, 41.1987],
    '营口': [122.4316, 40.4297],
    '辽阳': [123.4094, 41.1383],
    '盘锦': [121.9482, 41.0449],
    //北京
    '北京': [116.4551, 40.2539],
    '怀柔区': [116.6377, 40.6219],
    '密云区': [117.0923, 40.5121],
    '延庆区': [116.1543, 40.5286],
    '房山区': [115.8453, 39.7163],
    '门头沟区': [115.8, 39.9957],
    '昌平区': [116.1777, 40.2134],
    '大兴区': [116.4716, 39.6352],
    '顺义区': [116.7242, 40.1619],
    '平谷区': [117.1706, 40.2052],
    '通州区': [116.7297, 39.8131],
    '朝阳区': [116.4977, 39.949],
    '海淀区': [116.2202, 40.0239],
    '丰台区': [116.2683, 39.8309],
    '石景山区': [116.1887, 39.9346],
    '西城区': [116.3631, 39.9353],
    '东城区': [116.418, 39.9367],
    '宣武区': [116.3603, 39.8852],
    '崇文区': [116.4166, 39.8811],
    // 天津
    '天津': [117.4219, 39.4189],
    '蓟县': [117.4672, 40.004],
    '武清区': [117.0621, 39.4121],
    '宝坻区': [117.4274, 39.5913],
    '静海县': [116.9824, 38.8312],
    '宁河县': [117.6801, 39.3853],
    '大港区': [117.3875, 38.757],
    '塘沽区': [117.6801, 38.9987],
    '西青区': [117.1829, 39.0022],
    '北辰区': [117.1761, 39.2548],
    '东丽区': [117.4013, 39.1223],
    '汉沽区': [117.8888, 39.2191],
    '津南区': [117.3958, 38.9603],
    '河西区': [117.2365, 39.0804],
    '河东区': [117.2571, 39.1209],
    '南开区': [117.1527, 39.1065],
    '河北区': [117.2145, 39.1615],
    '红桥区': [117.1596, 39.1663],
    '和平区': [117.2008, 39.1189],
    // 山西
    '忻州': [112.4561, 38.8971],
    '吕梁': [111.3574, 37.7325],
    '临汾': [111.4783, 36.1615],
    '晋中': [112.7747, 37.37],
    '运城': [111.1487, 35.2002],
    '大同': [113.7854, 39.8035],
    '长治': [112.8625, 36.4746],
    '朔州': [113.0713, 39.6991],
    '晋城': [112.7856, 35.6342],
    '太原': [112.3352, 37.9413],
    '阳泉': [113.4778, 38.0951],
    //河北
    '承德': [117.5757, 41.4075],
    '张家口': [115.1477, 40.8527],
    '保定': [115.0488, 39.0948],
    '唐山': [118.4766, 39.6826],
    '沧州': [116.8286, 38.2104],
    '石家庄': [114.4995, 38.1006],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '秦皇岛': [119.2126, 40.0232],
    '衡水': [115.8838, 37.7161],
    '廊坊': [116.521, 39.0509],
    // 内蒙古
    '呼伦贝尔': [120.8057, 50.2185],
    '阿拉善盟': [102.019, 40.1001],
    '锡林郭勒盟': [115.6421, 44.176],
    '鄂尔多斯': [108.9734, 39.2487],
    '赤峰': [118.6743, 43.2642],
    '巴彦淖尔': [107.5562, 41.3196],
    '通辽': [121.4758, 43.9673],
    '乌兰察布': [112.5769, 41.77],
    '兴安盟': [121.3879, 46.1426],
    '包头': [110.3467, 41.4899],
    '呼和浩特': [111.4124, 40.4901],
    '乌海': [106.886, 39.4739],
    // 陕西
    '榆林': [109.8743, 38.205],
    '延安': [109.1052, 36.4252],
    '汉中': [106.886, 33.0139],
    '安康': [109.1162, 32.7722],
    '商洛': [109.8083, 33.761],
    '宝鸡': [107.1826, 34.3433],
    '渭南': [109.7864, 35.0299],
    '咸阳': [108.4131, 34.8706],
    '西安': [109.1162, 34.2004],
    '铜川': [109.0393, 35.1947],
    //甘肃
    '酒泉': [96.2622, 40.4517],
    '张掖': [99.7998, 38.7433],
    '甘南藏族自治州': [102.9199, 34.6893],
    '武威': [103.0188, 38.1061],
    '陇南': [105.304, 33.5632],
    '庆阳': [107.5342, 36.2],
    '白银': [104.8645, 36.5076],
    '定西': [104.5569, 35.0848],
    '天水': [105.6445, 34.6289],
    '兰州': [103.5901, 36.3043],
    '平凉': [107.0728, 35.321],
    '临夏回族自治州': [103.2715, 35.5737],
    '金昌': [102.074, 38.5126],
    '嘉峪关': [98.1738, 39.8035],
    // 青海
    '海西蒙古族藏族自治州': [94.9768, 37.1118],
    '玉树藏族自治州': [93.5925, 33.9368],
    '果洛藏族自治州': [99.3823, 34.0466],
    '海南藏族自治州': [100.3711, 35.9418],
    '海北藏族自治州': [100.3711, 37.9138],
    '黄南藏族自治州': [101.5686, 35.1178],
    '海东地区': [102.3706, 36.2988],
    '西宁': [101.4038, 36.8207],
    // 宁夏
    '吴忠': [106.853, 37.3755],
    '中卫': [105.4028, 36.9525],
    '固原': [106.1389, 35.9363],
    '银川': [106.3586, 38.1775],
    '石嘴山': [106.4795, 39.0015],
    // 新疆
    '巴音郭楞蒙古自治州': [88.1653, 39.6002],
    '和田地区': [81.167, 36.9855],
    '哈密地区': [93.7793, 42.9236],
    '阿克苏地区': [82.9797, 41.0229],
    '阿勒泰地区': [88.2971, 47.0929],
    '喀什地区': [77.168, 37.8534],
    '塔城地区': [86.6272, 45.8514],
    '昌吉回族自治州': [89.6814, 44.4507],
    '克孜勒苏柯尔克孜自治州': [74.6301, 39.5233],
    '吐鲁番地区': [89.6375, 42.4127],
    '伊犁哈萨克自治州': [82.5513, 43.5498],
    '博尔塔拉蒙古自治州': [81.8481, 44.6979],
    '乌鲁木齐': [87.9236, 43.5883],
    '克拉玛依': [85.2869, 45.5054],
    '石河子': [86.0229, 44.2914],
    '阿图什': [76.17, 39.72],
    // 四川
    '甘孜藏族自治州': [99.9207, 31.0803],
    '阿坝藏族羌族自治州': [102.4805, 32.4536],
    '凉山彝族自治州': [101.9641, 27.6746],
    '绵阳': [104.7327, 31.8713],
    '达州': [107.6111, 31.333],
    '广元': [105.6885, 32.2284],
    '雅安': [102.6672, 29.8938],
    '宜宾': [104.6558, 28.548],
    '乐山': [103.5791, 29.1742],
    '南充': [106.2048, 31.1517],
    '巴中': [107.0618, 31.9977],
    '泸州': [105.4578, 28.493],
    '成都': [103.9526, 30.7617],
    '资阳': [104.9744, 30.1575],
    '攀枝花': [101.6895, 26.7133],
    '眉山': [103.8098, 30.0146],
    '广安': [106.6333, 30.4376],
    '德阳': [104.48, 31.1133],
    '内江': [104.8535, 29.6136],
    '遂宁': [105.5347, 30.6683],
    '自贡': [104.6667, 29.2786],
    //贵州
    '遵义': [106.908, 28.1744],
    '黔东南苗族侗族自治州': [108.4241, 26.4166],
    '毕节地区': [105.1611, 27.0648],
    '黔南布依族苗族自治州': [108.6218, 28.0096],
    '铜仁地区': [108.6218, 28.0096],
    '黔西南布依族苗族自治州': [105.5347, 25.3949],
    '六盘水': [104.7546, 26.0925],
    '安顺': [105.9082, 25.9882],
    '贵阳': [106.6992, 26.7682],
    // 云南
    '普洱': [100.7446, 23.4229],
    '红河哈尼族彝族自治州': [104.8865, 23.5712],
    '文山壮族苗族自治州': [104.8865, 23.5712],
    '曲靖': [103.9417, 25.7025],
    '楚雄彝族自治州': [101.6016, 25.3619],
    '大理白族自治州': [99.9536, 25.6805],
    '临沧': [99.613, 24.0546],
    '迪庆藏族自治州': [99.4592, 27.9327],
    '昭通': [104.0955, 27.6031],
    '昆明': [102.9199, 25.4663],
    '丽江': [100.448, 26.955],
    '西双版纳傣族自治州': [100.8984, 21.8628],
    '保山': [99.0637, 24.9884],
    '玉溪': [101.9312, 23.8898],
    '怒江傈僳族自治州': [99.1516, 26.5594],
    '德宏傣族景颇族自治州': [98.1299, 24.5874],
    // 西藏
    '那曲地区': [88.1982, 33.3215],
    '阿里地区': [82.3645, 32.7667],
    '日喀则地区': [86.2427, 29.5093],
    '林芝地区': [95.4602, 29.1138],
    '昌都地区': [97.0203, 30.7068],
    '山南地区': [92.2083, 28.3392],
    '拉萨': [91.1865, 30.1465],
    //海南
    '三亚': [109.3716, 18.3698],
    '海口': [110.3893, 19.8516],
    '五指山': [109.5282, 18.8299],
  }
  return city
}
export const textWord = pro();

