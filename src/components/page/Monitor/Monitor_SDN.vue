<template>
  <div id="cloudMonitoring">
    <h5>Network Monitor</h5>
    <div class="select">
        <Select v-model="model1" style="width:215px" placeholder="SDN" @on-change="choiceType">
          <Option v-for="item in service" :value="item.value" :key="item.value" >{{ item.label }}</Option>
        </Select>
    </div>
    <div class="content" v-show="show">
        <div class="select">
            <strong>Service No. : </strong>
            <Select v-model="model2" style="width:215px" placeholder="1120181101100058">
              <Option v-for="item in wo" :value="item.value" :key="item.value" >{{ item.label }}</Option>
            </Select>
        </div>
      <div class="map">
        <div class="mask">
          <p></p>
          <p></p>
          <p></p>
          <p>
            <span>
              Connected<br>
              Packet Loss : <b style="color:green">< 0.5%</b>
            </span>
          </p>
        </div>
        <img src="../../../assets/img/sdjk_ms.png" alt="">
        <p style="margin-left:140px">DC GW</p>
        <p style="margin-left:100px">
          <span>
            <b>Edge : </b>Edge-HK-tyw1</span>
          <span>
            <b>IP : </b>
            192.168.253.93/30 </span>
          <span>
            <b>Port：</b>
            GE-2/2/8</span>
        </p>
        <p style="margin-left:320px">
          <span>
            <b>Edge : </b>Edge-BJ-hegi</span>
          <span>
            <b>IP : </b>
            192.168.253.101/30 </span>
          <span>
            <b>Port：</b>
            GE-2/3/1</span>
        </p>
        <p style="margin-left:110px">DC GW</p>
      </div>
      <div class="netWork">
          <div class="left">
              <p>Network Type</p>
              <p>Edge Quantity</p>
              <p>Device Name</p>
              <p>IP</p>
              <p>Link status</p>
          </div>
          <div class="right">
              <p style="color:#333;font-size:12px;text-align:left;line-height:42px;font-weight:bold">SDN Network</p>
              <p>
                  <span style="color:#333;font-size:12px;text-align:left;line-height:42px;font-weight:bold">2</span>
                  <span style="margin-left:110px;margin-right:25px;">on service</span>
                  <span style="color:#333;font-size:12px;text-align:left;line-height:42px;font-weight:bold">2</span>
              </p>
              <p>
                <Select v-model="model3" style="width:215px" placeholder="Edge-HK-tyw1">
                  <Option v-for="item in DeviceName" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                </Select>
              </p>
              <p>
                    <Select v-model="model3" style="width:215px" >
                        <Option v-for="item in id" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                    </Select>
                    <span style="margin-left:110px;margin-right:25px;">Port</span>
                    <Select v-model="model4" style="width:215px" placeholder="GE-1/0/0">
                        <Option v-for="item in port" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                    </Select>
              </p>
              <p>
                  <span class="hhh" style="display:block;width:16px;height:16px;border-radius:50%;background:#0bc4ae;margin-top:12px;vertical-align: middle;box-shadow: 0px 0px 20px blue">
                    <span class="mask">
                      Connected<br>
                      Packet Loss : <b style="color:green">< 0.5%</b>
                    </span>
                  </span>
              </p>
          </div>
      </div>
      <div class="line1">
        <div id="line1"></div>
      </div>
      <div class="line2">
        <div id="line2"></div>
      </div>
    </div>
    <div class="content1" v-show="show1">
        <div class="select">
            <strong>Service No. : </strong>
            <Select v-model="model2" style="width:215px" placeholder="1120181101100058">
              <Option v-for="item in wo" :value="item.value" :key="item.value" >{{ item.label }}</Option>
            </Select>
        </div>
      <div class="map">
        <div class="mask">
          <p></p>
          <p></p>
          <p></p>
          <p>
            <span>
              Connected<br>
              Packet Loss : <b style="color:green">< 0.5%</b>
            </span>
          </p>
        </div>
        <img src="../../../assets/img/sd_wanjk_ms.png" alt="">
        <p style="margin-left:50px">
          <span>
            <b>CPE: </b> CPE-HK-hue1</span>
          <span>
            <b>IP : </b>
            192.168.0.1 </span>
          <span>
            <b>Port：</b>
            GE-1/0/0</span>
        </p>
        <p style="margin-left:130px">
          vGW in HK
        </p>
        <p style="margin-left:420px">vGW in BJ</p>
        <p style="margin-left:140px">
          <span>
            <b>CPE: </b>CPE-BJ-he9i</span>
          <span>
            <b>IP : </b>
            192.168.0.5 </span>
          <span>
            <b>Port：</b>
            GE-1/0/0</span>
        </p>
      </div>
      <div class="netWork">
          <div class="left">
              <p>Network Type</p>
              <p>Edge Quantity</p>
              <p>Device Name</p>
              <p>IP</p>
              <p>Link status</p>
          </div>
          <div class="right">
              <p style="color:#333;font-size:12px;text-align:left;line-height:42px;font-weight:bold">SD-WAN Network</p>
              <p>
                  <span style="color:#333;font-size:12px;text-align:left;line-height:42px;font-weight:bold">2</span>
                  <span style="margin-left:110px;margin-right:25px;">on service</span>
                  <span style="color:#333;font-size:12px;text-align:left;line-height:42px;font-weight:bold">2</span>
              </p>
              <p>
                <Select v-model="model3L" style="width:215px">
                  <Option v-for="item in DeviceName1" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                </Select>
              </p>
              <p>
                    <Select v-model="model3l1" style="width:215px">
                        <Option v-for="item in id1" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                    </Select>
                    <span style="margin-left:110px;margin-right:25px;">Port</span>
                    <Select v-model="model4l" style="width:215px">
                        <Option v-for="item in port1" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                    </Select>
              </p>
              <p>
                  <span class="hhh" style="display:block;width:16px;height:16px;border-radius:50%;background:#0bc4ae;float:left;margin-top:12px;vertical-align: middle;box-shadow: 0px 0px 20px blue">
                    <span class="mask">
                      Connected<br>
                      Packet Loss : <b style="color:green">< 0.5%</b>
                    </span>
                  </span>
              </p>
          </div>
      </div>
      <div class="line1">
        <div id="line3"></div>
      </div>
      <div class="line2">
        <div id="line4"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  #cloudMonitoring{
    width: 1200px;
    margin: 0 auto;
    h5{
      color: #666;
      font-weight: 700;
      font-size: 14px;
      padding: 20px 0;
    }
    .select{
        strong{
          display: inline-block;
          font-size: 14px;
          color: #666;
          width: 75px;
          text-align: left;
          font-weight: normal;
        }
    }
    .ivu-select-placeholder{
        color:#333;
    }
    .content{
      background-color: #fff;
      margin-top: 20px;
      padding:20px 30px;
      border :1px solid #e2e9f6;
      .select{
          margin-bottom: 20px;
          padding: 0;
          strong{
            display: inline-block;
            font-size: 14px;
            color: #666;
            width: 100px;
            text-align: left;
        }
      }
      strong{
        display: inline-block;
        font-size: 14px;
        color: #a6b0c5;
        margin: 0 10px;
        width: 200px;
        text-align: right;
      }
      .map{
        height: 150px !important;
        position: relative;
        .mask{
          width: 100%;
          height: 60px;
          position: absolute;
          left: 0;
          top: 0px;
          p{
            display: block;
            position: absolute;
            width: 112px;
            height: 2px;
            background: #27ff2c;
            top: 29px;
            left: 187px;
            span{
              display: none;
              width: 200px;
              position: absolute;
              top:20px;
              left: 20px;
              border:1px solid #e2e9f6;
              padding: 20px;
              background: #fff;
            }
          }
          p:hover{
            span{
              display: block
            }
          }
          p:nth-child(2){
            left: 394px;
          }
          p:nth-child(3){
            left: 628px;
          }
          p:nth-child(4){
            left: 843px;
          }
        }
        img{
          width: 980px;
          height: 60px;
          display: block;
          margin: 50px auto 0 auto;
        }
        p{
          height: 100px;
          float: left;
          color:#666;
          font-size: 12px;
          // margin-top: 20px;
          span{
            display: block;
            color:#333;
            line-height: 30px;
            b{
              font-weight: normal;
              color:#666;
            }
          }
        }
      }
      h4{
        margin: 20px 0;
        font-size: 20px;
      }
      .netWork{
          width: 100%;
          overflow: hidden;
          .left{
              width: 130px;
              float: left;
              p{
                  text-align: right;
                  font-size: 12px;
                  line-height: 42px;
                  color:#666;
                  font-weight: 500;
              }
          }
          .right{
              float: left;
              margin-left: 25px;
              p{
                line-height: 42px;
                position: relative;
                .mask{
                  width: 200px;
                  padding: 10px;
                  position: absolute;
                  right: 350px;
                  border:1px solid #e2e9f6;
                  z-index: 999;
                  top:-100px;
                  background: #fff;
                  display: none;
                }
                .hhh:hover{
                  .mask{
                    display: block;
                  }
                }
              }
          }
      }
      .line1{
        height: 290px;
        border: 1px solid #e2e9f6;
        position: relative;
        margin-top: 13px;
        #line1{
          width: 100%;
          height: 100%;
        }
      }
      .line2{
        height: 290px;
        border: 1px solid #e2e9f6;
        position: relative;
        margin-top: 20px;
        margin-bottom: 30px;
        #line2{
          width: 100%;
          height: 100%;
        }
      }
      .bar{
        height: 355px;
        border: 1px solid #e2e9f6;
        position: relative;
        #bar{
          width: 100%;
          height: 100%;
        }
      }
    }
    .content1{
      background-color: #fff;
      margin-top: 20px;
      padding:20px 30px;
      border :1px solid #e2e9f6;
      .select{
          margin-bottom: 20px;
          padding: 0;
          strong{
            display: inline-block;
            font-size: 14px;
            color: #666;
            width: 100px;
            text-align: left;
        }
      }
      strong{
        display: inline-block;
        font-size: 14px;
        color: #a6b0c5;
        margin: 0 10px;
        width: 200px;
        text-align: right;
      }
      .map{
        height: 150px !important;
        position: relative;
        .mask{
          width: 100%;
          height: 60px;
          position: absolute;
          left: 0;
          top: 0px;
          p{
            display: block;
            position: absolute;
            width: 112px;
            height: 2px;
            background: #27ff2c;
            top:10px;
            left: 158px;
            span{
              display: none;
              width: 200px;
              position: absolute;
              top:20px;
              left: 10px;
              border:1px solid #e2e9f6;
              padding: 20px;
              background: #fff;
            }
          }
          p:hover{
            span{
              display: block
            }
          }
          p:nth-child(2){
            left: 383px;
          }
          p:nth-child(3){
            left: 642px;
          }
          p:nth-child(4){
            left: 867px;
          }
        }
        img{
          width: 980px;
          height: 60px;
          display: block;
          margin: 50px auto 0 auto;
        }
        p{
          height: 100px;
          float: left;
          color:#666;
          font-size: 12px;
          margin-top: 20px;
          span{
            display: block;
            color:#333;
            line-height: 30px;
            b{
              font-weight: normal;
              color:#666;
            }
          }
        }
      }
      h4{
        margin: 20px 0;
        font-size: 20px;
      }
      .netWork{
          width: 100%;
          overflow: hidden;
          .left{
              width: 130px;
              float: left;
              p{
                  text-align: right;
                  font-size: 12px;
                  line-height: 42px;
                  color:#666;
                  font-weight: 500;
              }
          }
          .right{
              float: left;
              margin-left: 25px;
              p{
                  line-height: 42px;
                  position: relative;
                .mask{
                  width: 200px;
                  padding: 10px;
                  position: absolute;
                  right: 350px;
                  border:1px solid #e2e9f6;
                  z-index: 999;
                  top:-100px;
                  background: #fff;
                  display: none;
                }
                .hhh:hover{
                  .mask{
                    display: block;
                  }
                }
              }
          }
      }
      .line1{
        height: 290px;
        width: 100%;
        border: 1px solid #e2e9f6;
        position: relative;
        margin-top: 13px;
        #line3{
          width: 1140px;
          height: 290px;
        }
      }
      .line2{
        height: 290px;
        width: 100%;
        border: 1px solid #e2e9f6;
        position: relative;
        margin-top: 20px;
        margin-bottom: 30px;
        #line4{
          width: 1140px;
          height: 290px;
        }
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  import echarts from 'echarts'
  import 'echarts/map/js/world'
  import {textWord} from '../../../assets/js/city'
  export default {
    data(){
      return{
        show:true,
        show1:false,
        service: [
          {
            value: 'SDN',
            label: 'SDN',
          },{
            value: 'SD-WAN',
            label: 'SD-WAN',
          }
        ],
        device: [
          {
            value: 'edge-HK-w2c',
            label: 'edge-HK-w2c',
          },
        ],
        wo: [
          {
            value: '1120181101100058',
            label: '1120181101100058',
          },
        ],
        id:[{
            value:'192.168.253.93',
            label:'192.168.253.93'
        }],
        id1:[{
            value:'192.168.0.1',
            label:'192.168.0.1'
        }],
        port:[{
            value:'GE-2/2/8',
            label:'GE-2/2/8'
        }],
        port1:[{
            value:'GE-1/0/0',
            label:'GE-1/0/0'
        }],
        model4l:'GE-1/0/0',
        model1: 'Pre-constructed width CSP',
        DeviceName:[{
          value:'Edge-HK-tyw1',
          label:'Edge-HK-tyw1',
        }],
        DeviceName1:[{
          value:'CPE-HK-hue1',
          label:'CPE-HK-hue1',
        }],
        model2: '1120181101100058',
        model3: '192.168.253.93',
        model3l1:'192.168.0.1',
        model3L:'CPE-HK-hue1',
        model4: 'GE-2/2/8',
        map:'',
        line1:'',
        line2:'',
        bar:'',
        ip1:'',
        Xzhou:["15:48:00","15:48:01","15:48:02","15:48:03","15:48:04","15:48:05","15:48:06","15:48:07","15:48:08","15:48:09","15:48:10","15:48:11","15:48:12","15:48:13","15:48:14","15:48:15","15:48:16","15:48:17","15:48:18","15:48:19","15:48:20","15:48:21","15:48:22","15:48:23","15:48:24","15:48:25","15:48:26","15:48:27","15:48:28","15:48:29","15:48:30","15:48:31","15:48:32","15:48:33","15:48:34","15:48:35","15:48:36","15:48:37","15:48:38","15:48:39","15:48:40","15:48:41","15:48:42","15:48:43","15:48:44","15:48:45","15:48:46","15:48:47","15:48:48","15:48:49","15:48:50","15:48:51","15:48:52","15:48:53","15:48:54","15:48:55","15:48:56","15:48:57","15:48:58","15:48:59","15:49:00"],
        data1:[4.218,4.246,4.218,4.21,4.218,4.222,4.214,4.22,4.216,4.2,4.215,4.208,4.224,4.201,4.253,4.204,4.21,4.218,4.196,4.218,4.21,4.218,4.235,4.214,4.22,4.216,4.2,4.215,4.208,4.224,4.201,4.213,4.22,4.215,4.218,4.206,4.218,4.21,4.27,4.24,4.214,4.22,4.216,4.2,4.215,4.208,4.224,4.231,4.233,4.22,4.215,4.2,4.215,4.208,4.224,4.201,4.233,4.22,4.215,4.22,4.215],
        data2:[4.2,4.215,4.218,4.21,4.218,4.23,4.214,4.22,4.216,4.201,4.233,4.258,4.224,4.201,4.233,4.22,4.25,4.218,4.196,4.218,4.21,4.218,4.245,4.214,4.231,4.233,4.22,4.215,4.208,4.224,4.21,4.218,4.235,4.214,4.218,4.206,4.218,4.21,4.2,4.24,4.214,4.248,4.216,4.19,4.215,4.208,4.224,4.201,4.233,4.22,4.215,4.2,4.215,4.208,4.224,4.201,4.233,4.22,4.215,4.22,4.215],
        data3:[3.218,3.206,3.218,3.21,3.218,3.24,3.214,3.22,3.216,3.2,3.215,3.208,3.224,3.201,3.233,3.24,3.25,3.218,3.196,3.218,3.21,3.218,3.235,3.214,3.22,3.216,3.2,3.215,3.208,3.224,3.201,3.233,3.22,3.215,3.218,3.206,3.218,3.21,3.2,3.24,3.214,3.22,3.216,3.2,3.215,3.208,3.224,3.201,3.233,3.22,3.215,3.2,3.215,3.208,3.224,3.201,3.233,3.22,3.215,3.22,3.215],
        data4:[3.2,3.215,3.218,3.3,3.218,3.34,3.214,3.22,3.216,3.2901,3.233,3.208,3.224,3.281,3.333,3.27,3.25,3.218,3.296,3.258,3.21,3.218,3.265,3.214,3.281,3.353,3.22,3.215,3.268,3.224,3.28,3.258,3.235,3.214,3.318,3.206,3.218,3.21,3.2,3.24,3.3514,3.248,3.216,3.19,3.215,3.208,3.224,3.201,3.233,3.22,3.215,3.2,3.215,3.208,3.224,3.261,3.293,3.22,3.215,3.22,3.315]
      }
    },
    methods:{
      drawLine1(xzhou,data){
        let seriseData = data;
        this.line1 = echarts.init(document.getElementById('line1'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: xzhou,
            axisTick:{
              show:false,
            },
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            },
          },
          yAxis: {
            name:'TX(Mb/s)',
            nameTextStyle:{
              color:'black'
            },
            min:4.15,
            max:4.28,
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            splitLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            }
          },
          grid: {
            left: '30px',
            right: '30px',
            bottom: '20px',
            top: '40px',
            containLabel: true
          },
          tooltip:{
            formatter: '{c0}',
            backgroundColor:'#0bc4ae'
          },
          series: [{
            data: seriseData,
            type: 'line'
          }]
        };
        this.line1.setOption(option)
      },
      drawLine2(xzhou,data){
        let seriseData = data;
        this.line2 = echarts.init(document.getElementById('line2'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: xzhou,
            axisTick:{
              show:false,
            },
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            },
          },
          yAxis: {
            name:'RX(Mb/s)',
            nameTextStyle:{
              color:'black'
            },
            min:4.15,
            max:4.28,
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            splitLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            }
          },
          grid: {
            left: '30px',
            right: '30px',
            bottom: '20px',
            top: '40px',
            containLabel: true
          },
          tooltip:{
            formatter: '{c0}',
            backgroundColor:'#0bc4ae'
          },
          series: [{
            data: seriseData,
            type: 'line'
          }]
        };
        this.line2.setOption(option)
      },
      choiceType(value){
        if(value == 'SDN'){
          this.show = true;
          this.show1 = false;
        }else{
          this.show1 = true;
          this.show = false;
        }
      },
      drawLine3(xzhou,data){
        let seriesData = data;
        this.line1 = echarts.init(document.getElementById('line3'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data:xzhou,
            axisTick:{
              show:false,
            },
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            },
          },
          yAxis: {
            name:'TX(Mb/s)',
            nameTextStyle:{
              color:'black'
            },
            min:3.18,
            max:3.26,
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            splitLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            }
          },
          grid: {
            left: '30px',
            right: '30px',
            bottom: '20px',
            top: '40px',
            containLabel: true
          },
          tooltip:{
            formatter: '{c0}',
            backgroundColor:'#0bc4ae'
          },
          series: [{
            data: seriesData,
            type: 'line'
          }]
        };
        this.line1.setOption(option)
      },
      drawLine4(xzhou,data){
        let seriesData = data;
        this.line2 = echarts.init(document.getElementById('line4'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data:xzhou,
            axisTick:{
              show:false,
            },
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            },
          },
          yAxis: {
            name:'RX(Mb/s)',
            nameTextStyle:{
              color:'black'
            },
            min:3.15,
            max:3.4,
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            splitLine:{
              lineStyle:{
                color:'#f2f4f8'
              }
            },
            axisLabel:{
              color:'black'
            }
          },
          grid: {
            left: '30px',
            right: '30px',
            bottom: '20px',
            top: '40px',
            containLabel: true
          },
          tooltip:{
            formatter: '{c0}',
            backgroundColor:'#0bc4ae'
          },
          series: [{
            data: seriesData,
            type: 'line'
          }]
        };
        this.line2.setOption(option)
      },
    },
    mounted(){
      this.drawLine1(this.Xzhou,this.data1);
      this.drawLine2(this.Xzhou,this.data2);
      this.drawLine3(this.Xzhou,this.data3);
      this.drawLine4(this.Xzhou,this.data4);

    }
  }

</script>
