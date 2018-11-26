<template>
    <div class="DashBoardPage1">
        <div class="contant">
            <div class="title">My Dashboard</div>
            <div class="container">
                <div class="dashboard-box">
                    <div class="dashboard-piece">
                        <div class="card-title">
                            <span class="card-logo"></span>
                            <span class="card-name">CSP Controller</span>
                        </div>
                        <div class="card-num">
                            {{CSPNum}}
                        </div>
                        <div class="card-trend">
                            <p class="card-up">Sites Up:3</p>
                            <p class="card-down">Sites Down:0</p>
                        </div>
                    </div>
                    <div class="dashboard-piece">
                        <div class="card-title">
                            <span class="card-logo"></span>
                            <span class="card-name">Edges</span>
                        </div>
                        <div class="card-num">
                            {{EdgesNum}}
                        </div>
                        <div class="card-trend">
                            <p class="card-up">Sites Up:15</p>
                            <p class="card-down" style="cursor:pointer" @click="siteDown">Sites Down:1</p>
                            <div class="display" v-show="display">
                                <p @click="close"><Icon type="md-close" /></p>
                                <Table :columns="columns1" :data="data1"></Table>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-piece">
                        <div class="card-title">
                            <span class="card-logo"></span>
                            <span class="card-name">CPE</span>
                        </div>
                        <div class="card-num">
                            {{CPENum}}
                        </div>
                        <div class="card-trend">
                            <p class="card-up">Sites Up:48</p>
                            <p class="card-down">Sites Down:2</p>
                        </div>
                    </div>
                    <div class="dashboard-piece">
                        <div class="card-title">
                            <span class="card-logo"></span>
                            <span class="card-name">PE</span>
                        </div>
                        <div class="card-num">
                            {{LinksNum}}
                        </div>
                        <div class="card-trend">
                            <p class="card-up">links up: 30</p>
                            <p class="card-down">links down: 0</p>
                        </div>
                    </div>
                </div>
                <div class="title">Todo List</div>
                <ul>
                    <li v-for="(item,index) in list" :key="index">
                        <p class="num">{{item.num}}</p>
                        <p class="distrabel">{{item.name}}</p>
                        <span>More</span>
                    </li>
                </ul>
                <div class="left">
                    <Select v-model="model1" style="width:150px;height:36px;margin-top:10px;margin-left:10px;" placeholder="Edge Monitor">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <Select v-model="model2" style="width:150px;height:36px;margin-top:10px;margin-right:10px;float:right" placeholder="edge-HK-w2c">
                        <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <span class="name">Device Name:</span>
                    <div id="drawMap"></div>
                    <h2 class="title">Location:HongKong</h2>
                </div>
                <div class="right">
                    <div class="one">
                        <span class="name1">Memory Pressure:</span>
                        <Select v-model="model1" style="width:130px;height:36px;margin-top:10px;margin-left:10px;" placeholder="Edge Monitor">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="model2" style="width:135px;height:36px;margin-top:10px;margin-right:10px;float:right" placeholder="edge-HK-w2c">
                            <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <span class="name">Device Name:</span>
                        <div id="drawMap1"></div>
                        <div class="distrabel">
                            <p>Physical memory: 48GB</p>
                            <p>Used memory: 18GB</p>
                            <p>Cached File: 8GB</p>
                            <p>Used Exchange: 4GB</p>
                            <span>Location:HongKong</span>
                        </div>
                    </div>
                    <div class="two">
                        <div class="left">
                            <RadioGroup v-model="buttonSize" type="button" style="margin-top:10px">
                                <Radio label="Write" style="margin-left:10px;width:70px;">Write</Radio>
                                <Radio label="Load" style="margin-left:10px;width:70px">Read</Radio>
                            </RadioGroup>
                            <p>4.7Mb/s</p>
                            <p>Max 15Mb/s</p>
                        </div>
                        <div class="right">
                            <Select v-model="model1" style="width:130px;height:36px;margin-top:10px;margin-left:10px;" placeholder="Edge Monitor">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <Select v-model="model2" style="width:135px;height:36px;margin-top:10px;margin-right:10px;float:right" placeholder="edge-HK-w2c">
                                <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span class="name">Device Name:</span>
                            <div id="drawMap2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import echarts from "echarts";
import HeadTop from '../../common/headerNav'
export default {
  data() {
    return {
        LinksNum: 30,
        CPENum: 50,
        EdgesNum: 16,
        CSPNum: 3,
        buttonSize:'',
        list: [
            {
            name: "Failed configuration sheet",
            num: 1
            },
            {
            name: "Abnormal Device",
            num: 3
            },
            {
            name: "Abnormal Links",
            num: 1
            },
            {
            name: "Total Alarms",
            num: 0
            }
        ],
        model1: "",
        model2: "",
        cityList: [
            {
            value: "Edge Monitor",
            label: "Edge Monitor"
            },
            {
            value: "Edge Monitor1",
            label: "Edge Monitor1"
            }
        ],
        cityList1: [
            {
            value: "edge-HK-w2c",
            label: "edge-HK-w2c"
            },
            {
            value: "edge-HK-w3c",
            label: "edge-HK-w3c"
            }
        ],
        MyChart: "",
        MyChart1: "",
        MyChart2: "",
        comput1:46,
        display:false,
        columns1: [
            {
                title: 'Event Time',
                key: 'Time',
                align:'center',
                width:150
            },
            {
                title: 'Device IP',
                key: 'IP',
                align:'center',
                width:150
            },
            {
                title: 'Alarm Title',
                key: 'Title',
                align:'center',
                width:150
            },
            {
                title: 'Alarm Text',
                key: 'Text',
                align:'center',
                width:150
            },
            {
                title: 'Location',
                key: 'Location',
                align:'center',
                width:150
            }
        ],
        data1: [
            {
                Time: '2018-11-20-10:18:09',
                IP: '117.136.191.79',
                Title: '16717809',
                Text: 'Not received heartbeat of device',
                Location:'HongKong'
            }
        ]
    };
  },
  methods: {
    getPie(data) {
        let arr = [];
        let num = (1 - data / 100).toFixed(2) * 100;
        let num1 = (data / 100).toFixed(2) * 100;
        let Obj = {};
        let Obj1 = {};
        Obj.value = num;
        Obj1.value = num1;
        Obj.name = "直接访问";
        Obj1.name = "邮件营销";
        arr.push(Obj1, Obj);
        return arr;
    },
    drawMap(data) {
        this.MyChart = echarts.init(document.getElementById("drawMap"));
        let a=0;
        for(var i = 0; i < data.length; i++){
          a+=data[i].value;
        }
        data.push(
          {value:a, name:'__other', itemStyle:{normal:{color:'rgba(0,0,0,0)'}}}
        );
        let option = {
            color:['#22d78e','#e2e8f6'],
            title:{
                show:true,
                text:'46%',
                left:"43%",
                top:"50%",
                textStyle:{
                    fontSize:44,
                    color:"#333",
                    fontFamily: 'Regular',
                    fontWeight:"normal",
                    lineHeight:44
                },
                subtext:'CPU Usage',
                subtextStyle:{
                    color:"#333",
                    fontSize:12,
                    align:"center",
                    lineHeight:12
                }
            },
            grid:{
                left:"10%"
            },
            series : [
                {
                type: 'pie',
                hoverAnimation:false,
                startAngle:180,
                radius :  ['90%', '100%'],
                center: ['50%', '70%'],
                data: data,
                label:{
                    show:false
                },
                labelLine:{
                    show:false
                },
                itemStyle: {
                    emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
                }
            ]
        };
        this.MyChart.setOption(option);
    },
    drawMap1(data){
        this.MyChart1 = echarts.init(document.getElementById("drawMap1"));
        let option = {
            tooltip: {
                show:true,
                trigger: 'item',
                backgroundColor:'#0bc4ae',
                textStyle:{
                    color:['#fff']
                }, 
                formatter:function(params){
                    return params.value + ' Mb/s'
                }
            },
            xAxis: {
                show:false,
                data: ["0","01","02","03","04","05","06","07","08","09","10","11"],
                boundaryGap: false,
                axisTick:{
                    show:false
                },
                axisLine:{
                    lineStyle:{
                        color:'#666'
                    }
                },
                axisLabel:{
                    color:"#333"
                }
            },
            yAxis: {
                show:false,
                axisTick:{
                    show:false
                },
                axisLine:{
                    lineStyle:{
                        color:'#666'
                    }
                },
                axisLabel:{
                    color:"#333"
                }
            },
            series: [
                {
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20],
                    showSymbol:true,
                    lineStyle:{
                        color:'#55aef7'
                    },
                    symbol:"emptyCircle",
                    itemStyle:{
                        color:"blue"
                    },
                    markLine: { // 设置警戒线（图表标线）
                        silent: true, // 图形是否不响应和触发鼠标事件
                        lineStyle: {
                            normal: {
                                type: 'solid'
                            }
                        }
                    },
                }
            ]
        }
        this.MyChart1.setOption(option)
    },
    drawMap2(data,data1){
        this.MyChart2 = echarts.init(document.getElementById("drawMap2"));
        let option = {
            tooltip: {
                show:true,
                trigger: 'item',
                backgroundColor:'#0bc4ae',
                textStyle:{
                    color:['#fff']
                }, 
                formatter:function(params){
                    return params.value + ' Mb/s'
                }
            },
            xAxis: {
                show:false,
                data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],
                interval:5
            },
            yAxis: {
                show:false,
                min:0
            },
            grid:{
                left:10,
                bottom:20,
                right:10,
                top:20
            },
            series: [{
                type: 'bar',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        color:'#42a5f6'
                    }
                },
                data: [11,7,13,6,7,12,11,8,7,4,2,9,11,10,8,5,10,11,7,5,13,11,8,9,4,5,8,10,9,7,5,3,7,]
            }]
        };
        this.MyChart2.setOption(option)
    },
    siteDown(){
        this.display = true;
    },
    close(){
        this.display = false;
    }
  },
  mounted() {
    this.drawMap(this.getPie(this.comput1));
    this.drawMap1();
    this.drawMap2();
  },
  components: {HeadTop}
};
</script>

<style lang="less">
.DashBoardPage1 {
  width: 100%;
  margin: 0 auto;
  
  .contant {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .container{
        padding: 40px;
        width: 100%;
        border:1px solid #e2e9f6;
        overflow: hidden;
    }
    .title {
      width: 100%;
      height: 55px;
      line-height: 55px;
      color: #666666;
      font-size: 16px;
    }
    .dashboard-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .dashboard-piece {
        padding: 13px;
        background-image:url("../../../assets/img/esp_banner.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        color: #fff;
        font-weight: bold;
        width: 259px;
        border-radius: 4px;
        .card-logo {
          display: inline-block;
          width: 21px;
          height: 16px;
          background: url("../../../assets/img/csp.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .dashboard-piece:nth-child(2) {
        background-image:url("../../../assets/img/edg_banner.jpg");
        .card-logo {
          background-image: url("../../../assets/img/edges.png");
        }
      }
      .dashboard-piece:nth-child(3) {
        background-image:url("../../../assets/img/cpe_banner.jpg");
        .card-logo {
          background-image: url("../../../assets/img/cpe.png");
        }
      }
      .dashboard-piece:nth-child(4) {
        background-image:url("../../../assets/img/lin_banner.jpg");
        .card-logo {
          background-image: url("../../../assets/img/link.png");
        }
      }
      .card-name {
        font-size: 12px;
      }
      .card-num {
        margin-top: 22px;
        margin-bottom: 23px;
        text-align: center;
        font-size: 36px;
      }
      .card-trend {
        width: 210px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 9px;
        position: relative;
        .display{
            width: 800px;
            background: #fff;
            border:1px solid #e2e9f6;
            position: absolute;
            left: -100px;
            top:50px;
            z-index: 222;
            padding: 20px;
            p{
                width: 20px;
                height: 20px;
                position: absolute;
                right: 0;
                top: 0px;
                color:#636e80;
                cursor: pointer;
                z-index:333;
                .ivu-icon-md-close{
                    font-size: 20px;
                    line-height: 20px;
                }
            }
            .ivu-table-header{
                margin-top: 30px;
                width: 100%;
            }
        }
      }
    }
    ul {
      width: 100%;
      height: 160px;
      border: 1px solid #e2e9f6;
      box-sizing: border-box;
      li {
        width: 25%;
        height: 98px;
        margin: 31px 0;
        border-right: 1px solid #e2e9f6;
        float: left;
        box-sizing: border-box;
        text-align: center;
        .num {
          color: #333;
          font-size: 26px;
          line-height: 26px;
        }
        .distrabel {
          color: #666666;
          font-size: 14px;
          line-height: 38px;
        }
        span {
          color: #42a5f6;
          cursor: pointer;
        }
      }
      li:last-child {
        border-right: none;
      }
    }
    .left {
      width: 500px;
      border: 1px solid #e2e9f6;
      box-sizing: border-box;
      height: 450px;
      float: left;
      margin-top: 40px;
      position: relative;
      overflow: hidden;
      .ivu-select-dropdown-list {
        border: none;
        height: 30px;
        li {
          border: none;
          height: 30px;
          margin: 0;
        }
      }
      span.name {
        line-height: 36px;
        display: block;
        float: right;
        margin-top: 10px;
        margin-right: 10px;
        color: #666;
      }
      #drawMap {
        width: 100%;
        height: 410px;
      }
      .title{
          width: 100%;
          height: 110px;
          line-height: 110px;
          position: absolute;
          top: 350px;
          text-align: center;
          font-weight: normal;
          color:#666;
      }
    }
    .right {
        width: 590px;
        height: 450px;
        float: right;
        margin-top: 40px;
        .ivu-select-dropdown-list {
            border: none;
            height: 30px;
            li {
                border: none;
                height: 30px;
                margin: 0;
            }
        }
        span.name {
            line-height: 36px;
            display: block;
            float: right;
            margin-top: 10px;
            margin-right: 10px;
            color: #666;
        }
        span.name1 {
            line-height: 36px;
            display: inline-block;
            margin-left: 10px;
            color: #333;
        }
        .one{
            width: 100%;
            height: 220px;
            border: 1px solid #e2e9f6;
            box-sizing: border-box;
            #drawMap1{
                width: 420px;
                height: 170px;
                float: left;
            }
            .distrabel{
                width: 160px;
                height: 170px;
                float: left;
                padding-top: 20px;
                p{
                    font-size: 12px;
                    line-height: 26px;
                    color:#333;
                }
                span{
                    font-size: 12px;
                    color:#999;
                    line-height: 24px;
                    display :block;
                    margin-top: 10px;
                }
            }
        }
        .two{
            margin-top: 10px;
            width: 100%;
            height: 220px;
            border: 1px solid #e2e9f6;
            box-sizing: border-box;
            .left{
                width: 170px;
                height: 100%;
                border:none;
                border-right: 1px solid #e2e9f6;
                box-sizing: border-box;
                margin-top: 0;
                float: left;
                .ivu-radio-group-button .ivu-radio-wrapper{
                    border-radius: 4px;
                }
                p:nth-child(2){
                    font-size: 22px;
                    line-height: 22px;
                    color:#333;
                    text-align: center;
                    margin-top: 44px;
                }
                p:nth-child(3){
                    font-size: 12px;
                    line-height: 12px;
                    color:#666;
                    text-align: center;
                    margin-top: 12px;
                }
            }
            .right{
                width: 417px;
                height: 100%;
                float: left;
                margin-top: 0;
                #drawMap2{
                    width: 100%;
                    height: 170px;
                }
            }
        }
    }
  }
}
</style>
