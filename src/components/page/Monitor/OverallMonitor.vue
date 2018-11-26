<template>
    <div class="OverallMonitorPage">
        <h5>Monitor</h5>
        <div class="select">
            <strong>Service : </strong>
            <Select v-model="model1" style="width:215px" placeholder="SDN" @on-change="choiceType">
                <Option v-for="item in service" :value="item.value" :key="item.value" >{{ item.label }}</Option>
            </Select>
        </div>
        <div class="contant" v-show="show">
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
                        <p class="card-down" @click="siteDown">Sites Down:1</p>
                        <div class="display" v-show="display">
                            <p @click="close"><Icon type="md-close" /></p>
                            <Table :columns="columns1" :data="data1"></Table>
                        </div>
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
                        <p class="card-up">Sites Up:30</p>
                        <p class="card-down">Sites Down:0</p>
                    </div>
                </div>
            </div>
            <div class="title">
                CSP Controller  Monitor
                <span></span>
            </div>
            <div class="lineMap">
                <div class="top">
                    <strong>Vender : </strong>
                    <Select v-model="model3" style="width:215px;margin-right:25px;" placeholder="Cisco">
                        <Option v-for="item in device1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <strong >Device Name : </strong>
                    <Select v-model="model4" style="width:215px;margin-right:25px;" placeholder="controller-HK-w9t">
                        <Option v-for="item in device2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <div style="margin:10px 0 15px 0;display:inline-block">
                        <strong>Location :</strong>
                        <span>HongKong</span>
                    </div>
                </div>
                <div class="line1">
                    <div style="position: absolute;width: 300px;left: 18px;top: 20px;height:50px">
                        <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6; margin-right:10px;cursor:pointer" v-for="(item,index) in buttonList" :key="index" @click="choice(index,item)" :class="{active:tabIndex==index}">{{item.name}}</Button>
                    </div>
                    <div id="line1"></div>
                </div>
            </div>
            <div class="title">
                Edge Monitor
                <span></span>
            </div>
            <div class="lineMap1">
                <div class="top">
                    <strong>Vender : </strong>
                    <Select v-model="model3" style="width:215px;margin-right:25px;" placeholder="Cisco">
                        <Option v-for="item in device3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <strong >Device Name : </strong>
                    <Select v-model="model4" style="width:215px;margin-right:25px;" placeholder="edge-HK-w7q">
                        <Option v-for="item in device4" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <div style="margin:10px 0 15px 0;display:inline-block">
                        <strong>Location :</strong>
                        <span>HongKong</span>
                    </div>
                </div>
                <div class="line2">
                    <div style="position: absolute;width: 300px;left: 18px;top: 20px;height:50px">
                        <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6; margin-right:10px;cursor:pointer" v-for="(item,index) in buttonList1" :key="index" @click="choice1(index,item)" :class="{active:tabIndex1==index}">{{item.name}}</Button>
                    </div>
                    <div id="line2"></div>
                </div>
            </div>
            <div class="title">
                PE Monitor
                <span></span>
            </div>
            <div class="lineMap2">
                <div class="top">
                    <strong>Vender : </strong>
                    <Select v-model="model3" style="width:215px;margin-right:25px;" placeholder="Cisco">
                        <Option v-for="item in device5" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <strong >Device Name : </strong>
                    <Select v-model="model4" style="width:215px;margin-right:25px;" placeholder="PE-BJ-13c">
                        <Option v-for="item in device6" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <div style="margin:10px 0 15px 0;display:inline-block">
                        <strong>Location :</strong>
                        <span>HongKong</span>
                    </div>
                </div>
                <div class="line3">
                    <div style="position: absolute;width: 300px;left: 18px;top: 20px;height:50px">
                        <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6; margin-right:10px;cursor:pointer" v-for="(item,index) in buttonList2" :key="index" @click="choice2(index,item)" :class="{active:tabIndex2==index}">{{item.name}}</Button>
                    </div>
                    <div id="line3"></div>
                </div>
            </div>
        </div>
        <div class="contant1" v-show="show1">
            <div class="dashboard-box">
                <div class="dashboard-piece">
                    <div class="card-title">
                        <span class="card-logo"></span>
                        <span class="card-name">SD-WAN Controller</span>
                    </div>
                    <div class="card-num">
                        {{SDWANNum}}
                    </div>
                    <div class="card-trend">
                        <p class="card-up">Sites Up:2</p>
                        <p class="card-down">Sites Down:0</p>
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
                        <p class="card-down" @click="siteDown1">Sites Down:2</p>
                        <div class="display" v-show="display1">
                            <p @click="close1"><Icon type="md-close" /></p>
                            <Table :columns="columns1" :data="data2"></Table>
                        </div>
                    </div>
                </div>
                <div class="dashboard-piece">
                    <div class="card-title">
                        <span class="card-logo"></span>
                        <span class="card-name">vGW</span>
                    </div>
                    <div class="card-num">
                        {{vGWNum}}
                    </div>
                    <div class="card-trend">
                        <p class="card-up">Sites Up:6</p>
                        <p class="card-down">Sites Down:0</p>
                    </div>
                </div>
            </div>
            <div class="title">
                SD-WAN Controller  Monitor
                <span></span>
            </div>
            <div class="lineMap">
                <div class="top">
                    <strong>Vender : </strong>
                    <Select v-model="SDmodel" style="width:215px;margin-right:25px;" placeholder="Cisco">
                        <Option v-for="item in device1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <strong >Device Name : </strong>
                    <Select v-model="SDmodel1" style="width:215px;margin-right:25px;" placeholder="controller-HK-qwr">
                        <Option v-for="item in SDdevice2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <div style="margin:10px 0 15px 0;display:inline-block">
                        <strong>Location :</strong>
                        <span>HongKong</span>
                    </div>
                </div>
                <div class="line1">
                    <div style="position: absolute;width: 300px;left: 18px;top: 20px;height:50px">
                        <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6; margin-right:10px;cursor:pointer" v-for="(item,index) in buttonList" :key="index" @click="choice3(index,item)" :class="{active:tabIndex3==index}">{{item.name}}</Button>
                    </div>
                    <div id="line4"></div>
                </div>
            </div>
            <div class="title">
                CPE Monitor
                <span></span>
            </div>
            <div class="lineMap1">
                <div class="top">
                    <strong>Vender : </strong>
                    <Select v-model="model3" style="width:215px;margin-right:25px;" placeholder="Cisco">
                        <Option v-for="item in device3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <strong >Device Name : </strong>
                    <Select v-model="model4" style="width:215px;margin-right:25px;" placeholder="CPE-HK-w21">
                        <Option v-for="item in SDdevice8" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <div style="margin:10px 0 15px 0;display:inline-block">
                        <strong>Location :</strong>
                        <span>HongKong</span>
                    </div>
                </div>
                <div class="line2">
                    <div style="position: absolute;width: 300px;left: 18px;top: 20px;height:50px">
                        <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6; margin-right:10px;cursor:pointer" v-for="(item,index) in buttonList1" :key="index" @click="choice4(index,item)" :class="{active:tabIndex4==index}">{{item.name}}</Button>
                    </div>
                    <div id="line5"></div>
                </div>
            </div>
            <div class="title">
                vGW Monitor
                <span></span>
            </div>
            <div class="lineMap2">
                <div class="top">
                    <strong>Vender : </strong>
                    <Select v-model="model3" style="width:215px;margin-right:25px;" placeholder="Cisco">
                        <Option v-for="item in device5" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <strong >Device Name : </strong>
                    <Select v-model="model4" style="width:215px;margin-right:25px;" placeholder="vGW-HK-w7q">
                        <Option v-for="item in SDdevice9" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <div style="margin:10px 0 15px 0;display:inline-block">
                        <strong>Location :</strong>
                        <span>HongKong</span>
                    </div>
                </div>
                <div class="line3">
                    <div style="position: absolute;width: 300px;left: 18px;top: 20px;height:50px">
                        <Button style="background: #fff;border: 1px solid #42a5f6;color: #42a5f6; margin-right:10px;cursor:pointer" v-for="(item,index) in buttonList2" :key="index" @click="choice5(index,item)" :class="{active:tabIndex5==index}">{{item.name}}</Button>
                    </div>
                    <div id="line6"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import echarts from 'echarts'
export default {
  data() {
    return {
        model1:'',
        SDmodel:'',
        SDmodel1:'',
        tabIndex:0,
        tabIndex1:0,
        tabIndex2:0,
        tabIndex3:0,
        tabIndex4:0,
        tabIndex5:0,
        show:true,
        show1:false,
        device1:[
            {
                value:'Cisco',
                label:'Cisco'
            },{
                value:'HuaWei',
                label:'HuaWei'
            }
        ],
        device2:[
            {
                value:'controller-HK-w9t',
                label:'controller-HK-w9t'
            },{
                value:'controller-BJ-18p',
                label:'controller-BJ-18p'
            }
        ],
        device3:[
            {
                value:'Cisco',
                label:'Cisco'
            },{
                value:'HuaWei',
                label:'HuaWei'
            }
        ],
        device4:[
            {
                value:'edge-HK-w7q',
                label:'edge-HK-w7q'
            },{
                value:'edge-BJ-66c',
                label:'edge-BJ-66c'
            }
        ],
        device5:[
            {
                value:'Cisco',
                label:'Cisco'
            },{
                value:'HuaWei',
                label:'HuaWei'
            }
        ],
        device6:[
            {
                value:'PE-HK-w2c',
                label:'PE-HK-w2c'
            },{
                value:'PE-BJ-13c',
                label:'PE-BJ-13c'
            }
        ],
        device7:[
            {
                value:'controller-HK-w9t',
                label:'controller-HK-w9t'
            },{
                value:'controller-BJ-18p',
                label:'controller-BJ-18p'
            }
        ],
        device8:[
            {
                value:'edge-HK-w7q',
                label:'edge-HK-w7q'
            },{
                value:'edge-BJ-66c',
                label:'edge-BJ-66c'
            }
        ],
        device9:[
            {
                value:'PE-HK-w2c',
                label:'PE-HK-w2c'
            },{
                value:'PE-BJ-13c',
                label:'edge-BJ-66c'
            }
        ],
        service: [
          {
            value: 'SDN',
            label: 'SDN',
          },{
            value: 'SD-WAN',
            label: 'SD-WAN',
          }
        ],
        SDdevice2:[
            {
                value:'controller-HK-qwr',
                label:'controller-HK-qwr'
            },{
                value:'controller-BJ-115',
                label:'controller-BJ-115'
            }
        ],
        SDdevice8:[
            {
                value:'CPE-HK-w21',
                label:'CPE-HK-w21'
            },{
                value:'CPE-BJ-698',
                label:'CPE-BJ-698'
            }
        ],
        SDdevice9:[
            {
                value:'vGW-HK-w7q',
                label:'vGW-HK-w7q'
            },{
                value:'vGW-BJ-66c',
                label:'vGW-BJ-66c'
            }
        ],
        LinksNum: 30,
        EdgesNum: 16,
        CSPNum: 3,
        SDWANNum:2,
        CPENum:50,
        vGWNum:6,
        model3:'',
        model4:'',
        buttonList:[
            {
            name:'CPU'
            },{
            name:'Memory'
            },{
            name:'Disk'
            }
        ],
        name:'CPU',
        buttonList1:[
            {
            name:'CPU'
            },{
            name:'Memory'
            },{
            name:'Disk'
            }
        ],
        buttonList2:[
            {
            name:'CPU'
            },{
            name:'Memory'
            },{
            name:'Disk'
            }
        ],
        data:[37,40,50,33,22,38,40,36,18,45,55,32,40,58,55],
        data1:[59,30,50,33,40,66,20,36,33,59,55,42,60,58,35],
        data2:[50,20,60,42,45,46,70,36,43,29,55,42,60,38,65],
        data3:[45,40,50,48,40,55,40,45,40,45,55,42,50,58,55],
        data4:[60,40,50,33,40,56,40,36,33,39,65,42,60,63,55],
        data5:[50,40,50,59,45,51,50,36,43,40,39,60,55,58,60],
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
        ],
        data2: [
            {
                Time: '2018-11-20 10:18:09',
                IP: '117.136.191.79',
                Title: '16717809',
                Text: 'Not received heartbeat of device',
                Location:'HongKong'
            },{
                Time: '2018-11-20 08:11:09',
                IP: '211.139.77.16',
                Title: '23126661',
                Text: 'Current error codes exceed the threshod',
                Location:'Beijing'
            }
        ],
        display:false,
        display1:false
    }
  },
  methods: {
    choice(index,item){
        this.tabIndex = index;
        if(item.name == 'CPU'){
            this.data = [37,40,50,33,22,38,40,36,18,45,55,32,40,58,55]
        }else if(item.name == 'Memory'){
            this.data = [38,49,39,20,42,48,45,24,52,39,35,69,39,35,40]
        }else if(item.name == 'Disk'){
            this.data = [30,31,35,35,38,36,36,38,40,40,34,34,34,34,34]
        }
        this.drawLine1(this.data,item.name);
    },
    choice1(index,item){
        this.tabIndex1 = index;
        if(item.name == 'CPU'){
            this.data2 = [59,30,50,33,40,66,20,36,33,59,55,42,60,58,35]
        }else if(item.name == 'Memory'){
            this.data2 = [45,30,59,40,42,58,35,44,47,29,35,42,65,25,40]
        }else if(item.name == 'Disk'){
            this.data2 = [40,41,38,38,38,45,44,45,45,43,34,34,34,34,34]
        }
        this.drawLine2(this.data2,item.name);
    },
    choice2(index,item){
        this.tabIndex2 = index;
        if(item.name == 'CPU'){
            this.data2 = [50,20,60,42,45,46,70,36,43,29,55,42,60,38,65]
        }else if(item.name == 'Memory'){
            this.data2 = [55,30,49,52,32,58,45,54,50,39,55,22,59,49,40]
        }else if(item.name == 'Disk'){
            this.data2 = [28,28,29,29,29,29,29,29,29,29,29,29,29,29,29]
        }
        this.drawLine3(this.data2,item.name);
    },
    choice3(index,item){
        this.tabIndex3 = index;
        if(item.name == 'CPU'){
            this.data3 = [45,40,50,48,40,55,40,45,40,45,55,42,50,58,55]
        }else if(item.name == 'Memory'){
            this.data3 = [45,42,49,40,46,48,53,44,52,59,35,42,48,45,43]
        }else if(item.name == 'Disk'){
            this.data3 = [30,31,35,35,35,36,38,38,38,38,37,37,37,37,37]
        }
        this.drawLine4(this.data3,item.name);
    },
    choice4(index,item){
        this.tabIndex4 = index;
        if(item.name == 'CPU'){
            this.data4 = [60,40,50,33,40,56,40,36,33,39,65,42,60,63,55]
        }else if(item.name == 'Memory'){
            this.data4 = [45,30,59,40,42,58,40,55,47,39,62,42,51,35,40]
        }else if(item.name == 'Disk'){
            this.data4 = [41,41,40,40,40,42,42,45,45,45,45,45,45,45,45]
        }
        this.drawLine5(this.data4,item.name);
    },
    choice5(index,item){
        this.tabIndex5 = index;
        if(item.name == 'CPU'){
            this.data5 = [50,40,50,59,45,51,50,36,43,40,39,60,55,58,60]
        }else if(item.name == 'Memory'){
            this.data5 = [55,60,49,52,58,28,45,44,50,39,55,42,39,49,40]
        }else if(item.name == 'Disk'){
            this.data5 = [37,37,37,37,37,35,35,35,35,35,35,35,35,35,36]
        }
        this.drawLine6(this.data5,item.name);
    },
    choiceType(value){
        if(value == 'SDN'){
            this.show = true;
            this.show1 = false
        }else if(value == 'SD-WAN'){
            this.show = false;
            this.show1 = true;
        }
    },
    drawLine1(data,name){
        let data1 = data;
        let name1 = name;
        this.line1 = echarts.init(document.getElementById('line1'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: ['15:48', '15:49', '15:50', '15:51', '15:52', '15:53', '15:54','15:55','15:56','15:57','15:58','15:59',"16:00","16:01","16:02"],
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
            name:`${name1}  Usage(%)`,
            nameTextStyle:{
              color:'black'
            },
            max:100,
            min:0,
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
            data: data1,
            type: 'line'
          }]
        };
        this.line1.setOption(option)
    },
    drawLine2(data,name){
        let data1 = data;
        let name1 = name;
        this.line1 = echarts.init(document.getElementById('line2'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: ['15:48', '15:49', '15:50', '15:51', '15:52', '15:53', '15:54','15:55','15:56','15:57','15:58','15:59',"16:00","16:01","16:02"],
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
            name:`${name1}  Usage(%)`,
            nameTextStyle:{
              color:'black'
            },
            max:100,
            min:0,
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
            data: data1,
            type: 'line'
          }]
        };
        this.line1.setOption(option)
    },
    drawLine3(data,name){
        let data1 = data;
        let name1 = name;
        this.line1 = echarts.init(document.getElementById('line3'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: ['15:48', '15:49', '15:50', '15:51', '15:52', '15:53', '15:54','15:55','15:56','15:57','15:58','15:59',"16:00","16:01","16:02"],
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
            name:`${name1}  Usage(%)`,
            nameTextStyle:{
              color:'black'
            },
            max:100,
            min:0,
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
            data: data1,
            type: 'line'
          }]
        };
        this.line1.setOption(option)
    },
    drawLine4(data,name){
        let data1 = data;
        let name1 = name;
        this.line1 = echarts.init(document.getElementById('line4'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: ['15:48', '15:49', '15:50', '15:51', '15:52', '15:53', '15:54','15:55','15:56','15:57','15:58','15:59',"16:00","16:01","16:02"],
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
            name:`${name1}  Usage(%)`,
            nameTextStyle:{
              color:'black'
            },
            max:100,
            min:0,
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
            data: data1,
            type: 'line'
          }]
        };
        this.line1.setOption(option)
    },
    drawLine5(data,name){
        let data1 = data;
        let name1 = name;
        this.line1 = echarts.init(document.getElementById('line5'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: ['15:48', '15:49', '15:50', '15:51', '15:52', '15:53', '15:54','15:55','15:56','15:57','15:58','15:59',"16:00","16:01","16:02"],
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
            name:`${name1}  Usage(%)`,
            nameTextStyle:{
              color:'black'
            },
            max:100,
            min:0,
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
            data: data1,
            type: 'line'
          }]
        };
        this.line1.setOption(option)
    },
    drawLine6(data,name){
        let data1 = data;
        let name1 = name;
        this.line1 = echarts.init(document.getElementById('line6'));
        let option = {
          color:'#42a5f6',
          xAxis: {
            type: 'category',
            data: ['15:48', '15:49', '15:50', '15:51', '15:52', '15:53', '15:54','15:55','15:56','15:57','15:58','15:59',"16:00","16:01","16:02"],
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
            name:`${name1}  Usage(%)`,
            nameTextStyle:{
              color:'black'
            },
            max:100,
            min:0,
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
            data: data1,
            type: 'line'
          }]
        };
        this.line1.setOption(option)
    },
    siteDown(){
        this.display = true;
    },
    close(){
        this.display = false;
    },
    siteDown1(){
        this.display1 = true;
    },
    close1(){
        this.display1 = false;
    }
  },
  mounted () {
    //SDN
    this.drawLine1(this.data,this.name);
    this.drawLine2(this.data1,this.name);
    this.drawLine3(this.data2,this.name);
    //SD-WAN
    this.drawLine4(this.data3,this.name);
    this.drawLine5(this.data4,this.name);
    this.drawLine6(this.data5,this.name);
  },
  components: {

  }
}
</script>

<style lang="less">
.OverallMonitorPage{
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
    .contant{
        width: 100%;
        border:1px solid #e2e9f6;
        padding:40px;
        box-sizing: border-box;
        margin-top: 20px;
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
                width: 340px;
                height: 190px;
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
            // .dashboard-piece:nth-child(3) {
            //     background-image:url("../../../assets/img/cpe_banner.jpg");
            //     .card-logo {
            //     background-image: url("../../../assets/img/cpe.png");
            //     }
            // }
            .dashboard-piece:nth-child(3) {
                background-image:url("../../../assets/img/lin_banner.jpg");
                .card-logo {
                    background-image: url("../../../assets/img/link.png");
                }
            }
            .card-name {
                font-size: 16px;
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
                font-size: 18px;
                font-weight: normal;
                position: relative;
                cursor: pointer;
                .display{
                    width: 800px;
                    background: #fff;
                    border:1px solid #e2e9f6;
                    position: absolute;
                    left: -300px;
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
        .title{
            width: 100%;
            height: 40px;
            background: #f2faff;
            line-height: 40px;
            border-left:4px solid #32a3e9;
            box-sizing: border-box;
            text-indent: 10px;
            font-size: 14px;
            color:#333;
            span{
                display:block;
                float: right;
                margin-top: 16px;
                margin-right:20px;
                width: 12px;
                height: 8px;
                background: url("../../../assets/img/icon_down.png") no-repeat;
            }
        }
        .lineMap{
            width: 100%;
            height: 470px;
            border:1px solid #e4eaf7;
            border-top:none;
            padding: 0 20px;
            overflow: hidden;
            margin-bottom:30px;
            .top{
                margin-top: 20px;
            }
            .line1{
                height: 355px;
                border: 1px solid #e2e9f6;
                position: relative;
                margin-top:20px;
                #line1{
                    width: 100%;
                    height: 300px;
                    margin-top: 55px;
                }
            }
        }
        strong{
            display: inline-block;
            font-size: 14px;
            color: #a6b0c5;
            text-align: right;
            font-weight: 500;
        }
        .lineMap1{
            width: 100%;
            height: 470px;
            border:1px solid #e4eaf7;
            border-top:none;
            padding: 0 20px;
            overflow: hidden;
            margin-bottom:30px;
            .top{
                margin-top: 20px;
            }
            .line2{
                height: 355px;
                border: 1px solid #e2e9f6;
                position: relative;
                margin-top:20px;
                #line2{
                    width: 100%;
                    height: 300px;
                    margin-top: 55px;
                }
            }
        }
        .lineMap2{
            width: 100%;
            height: 470px;
            border:1px solid #e4eaf7;
            border-top:none;
            padding: 0 20px;
            overflow: hidden;
            margin-bottom:30px;
            .top{
                margin-top: 20px;
            }
            .line3{
                height: 355px;
                border: 1px solid #e2e9f6;
                position: relative;
                margin-top:20px;
                #line3{
                    width: 100%;
                    height: 300px;
                    margin-top: 55px;
                }
            }
        }
    }
    .ivu-btn.active{
        color:#fff !important;
        background: #42a5f6 !important;
    }
    .contant1{
        width: 100%;
        border:1px solid #e2e9f6;
        padding:40px;
        box-sizing: border-box;
        margin-top: 20px;
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
                width: 340px;
                height: 190px;
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
            // .dashboard-piece:nth-child(3) {
            //     background-image:url("../../../assets/img/cpe_banner.jpg");
            //     .card-logo {
            //     background-image: url("../../../assets/img/cpe.png");
            //     }
            // }
            .dashboard-piece:nth-child(3) {
                background-image:url("../../../assets/img/lin_banner.jpg");
                .card-logo {
                    background-image: url("../../../assets/img/link.png");
                }
            }
            .card-name {
                font-size: 16px;
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
                font-size: 18px;
                font-weight: normal;
                cursor: pointer;
                position: relative;
                .display{
                    width: 800px;
                    background: #fff;
                    border:1px solid #e2e9f6;
                    position: absolute;
                    left: -300px;
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
        .title{
            width: 100%;
            height: 40px;
            background: #f2faff;
            line-height: 40px;
            border-left:4px solid #32a3e9;
            box-sizing: border-box;
            text-indent: 10px;
            font-size: 14px;
            color:#333;
            span{
                display:block;
                float: right;
                margin-top: 16px;
                margin-right:20px;
                width: 12px;
                height: 8px;
                background: url("../../../assets/img/icon_down.png") no-repeat;
            }
        }
        .lineMap{
            width: 100%;
            height: 470px;
            border:1px solid #e4eaf7;
            border-top:none;
            padding: 0 20px;
            overflow: hidden;
            margin-bottom:30px;
            .top{
                margin-top: 20px;
            }
            .line1{
                height: 355px;
                border: 1px solid #e2e9f6;
                position: relative;
                margin-top:20px;
                #line4{
                    width: 1074px;
                    height: 300px;
                    margin-top: 55px;
                }
            }
        }
        strong{
            display: inline-block;
            font-size: 14px;
            color: #a6b0c5;
            text-align: right;
            font-weight: 500;
        }
        .lineMap1{
            width: 100%;
            height: 470px;
            border:1px solid #e4eaf7;
            border-top:none;
            padding: 0 20px;
            overflow: hidden;
            margin-bottom:30px;
            .top{
                margin-top: 20px;
            }
            .line2{
                height: 355px;
                border: 1px solid #e2e9f6;
                position: relative;
                margin-top:20px;
                #line5{
                    width: 1074px;
                    height: 300px;
                    margin-top: 55px;
                }
            }
        }
        .lineMap2{
            width: 100%;
            height: 470px;
            border:1px solid #e4eaf7;
            border-top:none;
            padding: 0 20px;
            overflow: hidden;
            margin-bottom:30px;
            .top{
                margin-top: 20px;
            }
            .line3{
                height: 355px;
                border: 1px solid #e2e9f6;
                position: relative;
                margin-top:20px;
                #line6{
                    width: 1074px;
                    height: 300px;
                    margin-top: 55px;
                }
            }
        }
    }
}
</style>
