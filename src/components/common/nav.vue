<template>
  <div id="MenuNav" :style="{height:fullHeight+'px',width:menuWidth}">
        <div class="menuList" @mouseenter.stop.prevent="open" @mouseleave.stop.prevent="back">
            <ul id="nav">
                <li v-for="(item,index) in menuList" :key="index" @mouseenter.stop.prevent="enter(index,item)" @mouseleave.stop.prevent="leave(index,item)" :class="{active:tabIndex==index}">
                    <i class="icon">
                        <img :src="item.img" alt="">
                    </i>
                    <div class="posi" @mouseenter.stop.prevent="enterL(index,item)" @mouseleave.stop.prevent="leave1(index,item)" @click="jump(item)">
                        <b>{{item.name}}</b>
                        <span><Icon type="ios-arrow-forward" /></span>
                        <div class="navigation">
                            <p v-for="(item1,index) in item.children" :key="index" @click.stop="choice1(index)" :class="{active:tabIndex1==index}" @mouseenter.stop.prevent="enterT(index,item)" @mouseleave.stop.prevent="leave2(index,item)" @click="jump1(index,item)">{{item1.name}}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="box">
                <i class="icon">
                    <img :src="menuImg" alt="" @click="open">
                </i>
            </div>
        </div>
        
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        tabIndex:0,
        tabIndex1:-1,
        show1:false,
        userName:'',
        menuList:[
            {
                name:'Dashboard',
                id:0,
                img:require("../../assets/img/nav1.png"),
                src:'/DashBoardPage'
            },
            {
                name:'Product Management',
                id:1,
                img:require("../../assets/img/nav2.png"),
                src:'/page/product/Management'
            },{
                name:'Order Management',
                children:[{
                    name:'Order Management',
                    src:'/page/order/OrderManagement'
                },{
                    name:'Order Configuration',
                    src:'/page/order/orderWork'
                }],
                id:2,
                img:require("../../assets/img/nav3.png")
            },{
                name:'Customer Management',
                id:3,
                img:require("../../assets/img/nav4.png"),
                src:''
            },{
                name:'ECS',
                id:4,
                img:require("../../assets/img/nav5.png"),
                src:''
            },{
                name:'Cloud Connect',
                id:5,
                img:require("../../assets/img/nav6.png"),
                src:'/page/cloud/cloudMonitoring'
            },{
                name:'SD-WAN',
                id:6,
                img:require("../../assets/img/nav7.png"),
                src:'/page/cloud/SDWMonitoring'
            },{
                name:'Configure',
                id:7,
                img:require("../../assets/img/nav8.png"),
                src:'/page/sdnSet/configuration'
            },{
                name:'Monitor',
                img:require("../../assets/img/nav9.png"),
                children:[{
                    name:'Device',
                    src:'/page/Monitor/OverallMonitorPage'
                },{
                    name:'NetWork',
                    src:'/page/Monitor/MonitorSDNPage'
                }]
            },{
                name:'Resourse',
                img:require("../../assets/img/nav10.png"),
                src:'/page/resources/ResourcesMGTPage'
            },{
                name:'User',
                img:require("../../assets/img/nav11.png"),
                children:[{
                    name:'User Management',
                    src:'/page/resources/UserFromPage'
                },{
                    name:'User Log',
                    src:'/page/resources/UserLog'
                }]
            }
        ],
        fullHeight: document.documentElement.clientHeight,
        menuImg:require("../../assets/img/menu_icon_open-up.png"),
        menuWidth:'80px'
    }
  },
  methods: {
        enter(index,item){
            item.img = require(`../../assets/img/nav${index+1}-1.png`);
            this.tabIndex = index;
            let posiBox= document.querySelectorAll(".posi");
            posiBox.forEach((item) => {
                item.style.backgroundColor = ""
                posiBox[index].style.backgroundColor = "#f2faff"
            })
        },
        enterL(index,item){
            if(item.children){
                let displayBox= document.querySelectorAll(".navigation");
                var oli=displayBox[index];
                oli.style.left = '100%';
                oli.style.backgroundColor = ""
            }
        },
        enterT(index,item){
            let navigationBox= document.querySelectorAll(".navigation p");
            navigationBox[index].style.backgroundColor = "#f2faff";
        },
        leave(index,item){
            item.img = require(`../../assets/img/nav${index+1}.png`);
            // let posiBox= document.querySelectorAll(".posi");
            // posiBox.forEach((item) => {
            //     item.style.left = -500 + 'px';
            // });
        },
        leave1(index,item){
            item.img = require(`../../assets/img/nav${index+1}.png`);
            let displayBox= document.querySelectorAll(".navigation");
            displayBox.forEach((item) => {
                item.style.left = -500 + 'px';
            });
        },
        leave2(index,item){
            let navigationBox= document.querySelectorAll(".navigation p");
            navigationBox[index].style.backgroundColor = ""
        },
        jump(item){
            if(item.src){
                this.$router.push(item.src)
            }
        },
        jump1(index,item){
            this.$router.push(item.children[index].src)
        },
        choice1(index){
            this.tabIndex1 = index;
        },
        open(){
            this.menuImg = require("../../assets/img/menu_icon_pack-up.png");
            this.menuWidth = 240 + 'px';
            let posiBox= document.querySelectorAll(".posi");
            posiBox.forEach((item) => {
                item.style.backgroundColor = ""
                item.style.left = 76 + 'px';
            })
        },
        back(){
            let posiBox= document.querySelectorAll(".posi");
            this.menuImg == require("../../assets/img/menu_icon_open-up.png");
            this.menuWidth = 80 + 'px';
            posiBox.forEach((item) => {
                item.style.backgroundColor = ""
                item.style.left = -500 + 'px';
            })
        }
  },
  monuted () {
      
  },
  components: {

  }
}
</script>

<style lang="less">
#MenuNav{
    box-sizing: border-box;
    position: fixed;
    z-index: 9999;
    height: 100%;
    top:80px;
    background: #fff;
    border-right:1px solid #f0f4fa;
    transition: width .3s linear;
    .menuList{
        position: relative;
        height: 100%;
        #nav{
            li{
                height: 46px;
                width: 80px;
                line-height: 46px;
                margin-bottom: 0;
                position: relative;
                border-left: 4px solid #fff;
                box-sizing: border-box;
                .icon{
                    display: block;
                    width: 76px;
                    height: 46px;
                    float: left;
                    padding: 10px 23px;
                    background: #fff;
                    // border-right:1px solid #f0f4fa;
                    box-sizing: border-box;
                    img{
                        display: block;
                        width: 26px;
                        height: 26px;
                        background-size: 100% 100%;
                    }
                }
                .posi{
                    width: 160px;
                    text-align: center;
                    float: left;
                    font-size: 12px;
                    color:#666;
                    line-height: 46px;
                    position: absolute;
                    left: -500px;
                    transition: left 0.3s linear 0s;
                    background: #fff;
                    cursor: pointer;
                    b{
                        font-weight: normal;
                    }
                    span{
                        display: block;
                        float: right;
                        margin-right: 10px;
                    }
                }
                .navigation{
                    position: absolute;
                    left: -1000px;
                    z-index: 999;
                    background: #fff;
                    width: 240px;
                    top: 0;
                    transition: left 0.3s linear 0s;
                    p{
                        line-height: 46px;
                        padding: 0 20px;
                        border:1px solid #f2faff;
                        border-top: none;
                    }
                    p:nth-child(1){
                        border-top:1px solid #f2faff;
                    }
                }
            }
            li.active{
                border-color: #42a5f6;
                i{
                    background-color: #f2faff;
                    border-right:none;
                }
            }
        }
        .box{
            width: 80px;
            height: 40px;
            position: fixed;
            bottom:0px;
            z-index:999999;
            .icon{
                width: 20px;
                height: 17px;
                display: block;
                margin-left: 30px;
                margin-top: 20px;
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                }
                // background: url('../../assets/img/menu_icon_open-up.png') no-repeat;
                // background-size: 100% 100%;
            }
        }
    }
}
</style>
