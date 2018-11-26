<template>
  <div class="headerNav">
      <div class="head">
            <div class="logo">
                <img src="../../assets/img/logo1.png" alt="">
            </div>
            <ul class="list">
                <li><span> Notification</span><Icon type="ios-arrow-down" /></li>
                <li>
                    <Dropdown>
                    <a href="javascript:void(0)">
                        Help
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>Quick Start</DropdownItem>
                        <DropdownItem>Tech Support</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown>
                    <a href="javascript:void(0)">
                        Enterprise
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>Profiles</DropdownItem>
                        <DropdownItem>Accounts</DropdownItem>
                        <DropdownItem>Certified</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </li>
                <li>
                    <span @click="sign">Sign In</span>
                </li>
            </ul>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Nav from '../common/nav'
export default {
    data() {
        return {

        }
    },
    methods: {
        menu(){
            let menuNav = document.getElementById("MenuNav");
            if(menuNav.style.display == 'none'){
                menuNav.style.display = 'block'
            }else{
                menuNav.style.display = 'none'
            }
        },
        sign(){
            this.$router.push({
              path:'./Login'
            })
        }
    }
}
</script>

<style lang="less">
.headerNav{
    width: 100%;
    height: 80px;
    border-bottom:2px solid #42a5f6;
    box-sizing: border-box;
    .logo{
        width: 40%;
        float: left;
        padding: 18px 0 18px 0px;
    }
    .list{
        width: 50%;
        float: right;
        padding-top: 30px;
        padding-left: 20px;
        li{
            width: 25%;
            font-size: 16px;
            float: left;
            color:#42a5f6;
            cursor: pointer;
            text-align:right;
            a{
                color:#42a5f6;
            }
            img{
                display: block;
                width: 30px;
                height: 30px;
                float: left;
                margin-right: 10px;
                margin-top: -5px;
            }
        };
    }
}
</style>
