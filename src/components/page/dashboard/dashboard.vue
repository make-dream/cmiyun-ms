<template>
    <div class="DashBoardPage">
        <div class="contant">
            <div class="title">My Dashboard</div>
            <div class="container">
                 <div class="TodoList">
                    <div class="ProductReview">
                        <p class="num">{{productNum}}</p>
                        <p class="distrabel">Products to be reviewed </p>
                        <span>More</span>
                    </div>
                    <div class="OrdersReviewed">
                        <p class="num">{{orderNum}}</p>
                        <p class="distrabel">Orders to be reviewed</p>
                        <span>More</span>
                    </div>
                </div>
                <div class="product">
                    <div class="dashboard-piece">
                        <div class="card-title">
                            <span class="card-logo"></span>
                            <span class="card-name">Finished Orders</span>
                        </div>
                        <div class="card-num">
                            {{FinishedNum}}
                        </div>
                    </div>
                    <div class="dashboard-piece">
                        <div class="card-title">
                            <span class="card-logo"></span>
                            <span class="card-name">Online Products</span>
                        </div>
                        <div class="card-num">
                            {{OnlineNum}}
                        </div>
                    </div>
                    <div class="dashboard-piece">
                        <div class="card-title">
                            <span class="card-logo"></span>
                            <span class="card-name">Offline Products</span>
                        </div>
                        <div class="card-num">
                            {{OfflineNum}}
                        </div>
                    </div>
                    <div class="dashboard-piece">
                        <div class="card-title">
                            <span class="card-logo"></span>
                            <span class="card-name">Customers</span>
                        </div>
                        <div class="card-num">
                            {{CustomersNum}}
                        </div>
                    </div>
                    <div class="dashboard-piece">
                        <div class="card-title">
                            <span class="card-logo"></span>
                            <span class="card-name">Completion amount</span>
                        </div>
                        <div class="card-num">
                            {{CompletionNum}}
                        </div>
                    </div>
                </div>
                <div class="title">Trend</div>
                <div class="map">
                    <div class="left">
                        <div class="top">
                            <ul>
                                <li v-for="(item,index) in menuList" :key="index" :class="{active:tabIndex==index}" @click="choice(index,item)">{{item.name}}</li>
                            </ul>
                            <DatePicker type="date" multiple placeholder="Select date" style="width: 240px;float:right;height:36px;"></DatePicker>
                            <Select v-model="model1" style="width:190px;height:36px;margin-right:10px;" placeholder="Finished Orders">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            
                        </div>
                        <div id="drawMap"></div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import HeadTop from '../../common/headerNav'
import echarts from 'echarts'
export default {
    data() {
        return {
            productNum:6,
            orderNum:3,
            OnlineNum:12,
            OfflineNum:3,
            CustomersNum:17,
            FinishedNum:32,
            MyChart:'',
            CompletionNum:'501,311',
            model1:'',
            todayTime:'',
            menuList:[{
                name:'Day'
            },{
                name:'Week'
            },{
                name:'Month'
            }],
            tabIndex:2,
            cityList: [
                {
                    value: 'Online Products',
                    label: 'Online Products'
                },
                {
                    value: 'Offline Products',
                    label: 'Offline Products'
                },
                {
                    value: 'Customers',
                    label: 'Customers'
                },
                {
                    value: 'Finished Orders',
                    label: 'Finished Orders'
                }
            ],
            xZhou:["01","02","03","04","05","06","07","08","09","10","11","12"],
            data:[5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20]
        }
    },
    created () {
        var monthsInEng = ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
        var date = new Date();
        var year = date.getFullYear();
        var month = monthsInEng[(date.getMonth() + 1)>=10?date.getMonth() + 1:'0'+(date.getMonth() + 1)];
        var date1 = date.getDate()>=10?date.getDate():'0'+date.getDate();
        this.todayTime = month+' '+date1+' '+year;
    },
    methods: {
        choice(index,item){
            this.tabIndex = index;
            if(item.name == 'Day'){
                this.xZhou = ["0","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
                this.data = [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20]
            }else if(item.name == "Week"){
                this.xZhou = ["01","02","03","04","05","06","07"],
                this.data = [5, 20, 36, 10, 10, 20,5]
            }else if(item.name == 'Month'){
                this.xZhou = ["01","02","03","04","05","06","07","08","09","10","11","12"],
                this.data = [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20]
            }
            this.drawMap(this.data,this.xZhou)
        },
        drawMap(data,xData){
            let _this = this;
            this.MyChart = echarts.init(document.getElementById("drawMap"));
            let option = {
                tooltip: {
                    show:true,
                    trigger: 'axis',
                    backgroundColor:'#0bc4ae',
                    textStyle:{
                        color:['#fff']
                    },
                    formatter:function(params){
                        // console.log("111=>",params[0].data)
                        return `<div style="width:100px;height:50px;background:#0bc4ae"><p style="leight-height:12px;color:#fff;font-size:12px;">${params[0].data} per</p><span style="font-size:12px;">${_this.todayTime}</span></div>`
                    }
                },
                 grid: {
                    top: '15%',
                    left: '3%',
                    bottom: '6%',
                    right:"3%",
                    containLabel: true
                },
                xAxis: {
                    data: xData,
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
                    name:'per',
                    nameTextStyle:{
                        color:"#333"
                    },
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
                        data: data,
                        symbolSize:6,
                        lineStyle:{
                            color:'#55aef7'
                        },
                        itemStyle:{
                            color:'#55aef7'
                        },
                        symbol:"emptyCircle",
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
            this.MyChart.setOption(option)
        },
    },
    mounted () {
       this.drawMap(this.data,this.xZhou) 
    },
    components: {
        HeadTop
    }
}
</script>

<style lang="less">
.DashBoardPage{
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    .contant{
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        .title{
            width: 100%;
            height: 55px;
            line-height: 55px;
            color:#666666;
            font-size: 16px;
        }
        .container{
            width: 100%;
            border-top: none;
            padding-bottom: 40px;
            border:1px solid #e2e9f6;
            overflow: hidden;
            .top{
                width: 100%;
                height: 80px;
                padding: 0 40px;
                p{
                    float: left;
                    line-height: 80px;
                    color:#333;
                    font-size: 14px;
                }
                .creatTime{
                    float:right;
                    line-height: 80px;
                    color:#333;
                    font-size: 14px;
                    .ivu-date-picker{
                        margin-left: 10px;
                    }
                }
            }
            .title{
                border:none;
                padding-left: 40px;
                font-size: 12px;
                color:#333;
                line-height: 52px;
                margin-top: 20px;
            }
            .product{
                width: 100%;
                height: 122px;
                margin-top: 40px;
                padding: 0 40px;
                display: flex;
                justify-content: space-between;
                .dashboard-piece {
                    padding: 12px;
                    background-image:url("../../../assets/img/esp_banner.jpg");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    color: #fff;
                    font-weight: bold;
                    width: 208px;
                    border-radius: 4px;
                    .card-logo {
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        background: url("../../../assets/img/icon-product1.png") no-repeat;
                        background-size: 100% 100%;
                    }
                }
                .dashboard-piece:nth-child(2) {
                    background-image:url("../../../assets/img/edg_banner.jpg");
                    .card-logo {
                    background-image: url("../../../assets/img/icon-product2.png");
                    }
                }
                .dashboard-piece:nth-child(3) {
                    background-image:url("../../../assets/img/cpe_banner.jpg");
                    .card-logo {
                    background-image: url("../../../assets/img/icon-product3.png");
                    }
                }
                .dashboard-piece:nth-child(4) {
                    background-image:url("../../../assets/img/lin_banner.jpg");
                    .card-logo {
                        background-image: url("../../../assets/img/icon-product4.png");
                    }
                }
                .dashboard-piece:nth-child(5) {
                    background-image:url("../../../assets/img/Completion.png");
                    .card-logo {
                        background-image: url("../../../assets/img/icon-product5.png");
                    }
                }
                .card-name {
                    font-size: 12px;
                }
                .card-num {
                    margin-top: 22px;
                    margin-bottom: 23px;
                    text-align: center;
                    font-size: 26px;
                    font-weight: normal;
                }
            }
            .map{
                width: 1120px;
                height: 357px;
                border:1px solid #e2e9f6;
                border-right: none;
                box-sizing: border-box;
                margin: 0 auto;
                overflow: hidden;
                .left{
                    width: 100%;
                    height: 100%;
                    float: left;
                    border-right:1px solid #e2e9f6;
                    box-sizing: border-box;
                    .top{
                        width: 100%;
                        height: 36px;
                        margin-top: 20px;
                        ul{
                            li{
                                float: left;
                                width: 80px;
                                height: 36px;
                                border:1px solid #e2e9f6;
                                margin-right: 10px;
                                border-radius: 5px;
                                text-align: center;
                                line-height: 36px;
                                color:#666;
                                cursor: pointer;
                            }
                            li.active{
                                border-color:#42a5f6;
                                color:#fff;
                                background: #42a5f6
                            }
                        }
                        .ivu-select{
                            float: right;
                            li{
                                border:none;
                                width: 100%;
                            }
                            .ivu-select-selection{
                                height: 36px;
                                border-color:#e2e9f6;
                            }
                            .ivu-select-selected-value{
                                line-height: 34px;
                            }
                        }
                        .ivu-input{
                            height: 36px;
                            line-height: 36px;
                        }
                    }
                    #drawMap{
                        width: 100%;
                        height: 300px;
                    }
                }
            }
            .TodoList{
                width: 100%;
                padding:0 40px;
                margin-top: 40px;
                overflow: hidden;
                .title{
                    color:#333;
                    font-size: 14px;
                    line-height: 54px;
                    padding:0 ;
                    border:none;
                }
                .ProductReview{
                    width: 545px;
                    height: 160px;
                    border:1px solid #e2e9f6;
                    box-sizing: border-box;
                    float: left;
                    text-align: center;
                    .num{
                        color:#333;
                        font-size: 26px;
                        line-height: 26px;
                        margin-top: 36px;
                    }
                    .distrabel{
                        color:#666666;
                        font-size: 14px;
                        line-height: 38px;
                    }
                    span{
                        color:#42a5f6;
                        cursor:pointer;
                    }
                }
                .OrdersReviewed{
                    width: 545px;
                    height: 160px;
                    border:1px solid #e2e9f6;
                    box-sizing: border-box;
                    float: left;
                    margin-left: 28px;
                    text-align: center;
                    .num{
                        color:#333;
                        font-size: 26px;
                        line-height: 26px;
                        margin-top: 36px;
                    }
                    .distrabel{
                        color:#666666;
                        font-size: 14px;
                        line-height: 38px;
                    }
                    span{
                        color:#42a5f6;
                        cursor:pointer;
                    }
                }
            }
        }
    }
}
</style>
