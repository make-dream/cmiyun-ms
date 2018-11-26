<template>
    <div id="header">
      <div class="navGition">
        <div class="menu">
          <Icon type="md-menu" />
        </div>
      </div>
      <div class="border">
        <div class="border_logo">
          <img src="../../assets/img/logo.png" alt="">
          <h4> Cloud Bussiness Platform | CMI</h4>
        </div>
        <ul class="list">
          <li>
            <LanguageSelect></LanguageSelect>
          </li>
          <li @click="toFrom">
            <Dropdown>
              <a href="javascript:void(0)">
                Form
              </a>
              <!-- <DropdownMenu slot="list">
                <DropdownItem>Quick Start</DropdownItem>
                <DropdownItem>Tech Support</DropdownItem>
              </DropdownMenu> -->
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
            <Dropdown @on-click="changeMenu" >
              <a href="javascript:void(0)">
                User
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>Accounts</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem name="loginOut">Log Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
</template>

<style lang="less">
  #header{
    width: 100%;
    height: 80px;
    border-bottom: 2px solid #42a5f6;
    position: fixed;
    top: 0;
    z-index:999;
    background: #fff;
    .navGition{
      width: 80px;
      height: 80px;
      position: absolute;
      left: 0;
      top: 0;
      text-align: center;
      background: #42a5f6;
      line-height: 80px;
      .ivu-icon-md-menu{
        color:#fff;
        font-size: 40px;
      }
    }
    .border{
      height: 100%;
      margin: 0 auto;
      margin-left: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h4{
        font-size: 24px;
        display: inline-block;
      }
      .border_logo{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          margin-right: 20px;
        }
      }
      .list{
        display: flex;
        justify-content: center;
        align-items: center;
        li{
          font-size: 16px;
          color: #42a5f6;
          margin-right: 45px;
          cursor: pointer;
          li{
            width: 100%;
          }
        };
      }
    }
  }
</style>

<script type="text/ecmascript-6">
import LanguageSelect from '@web/components/languageSelect';
export default {
  data(){
    return{

    }
  },
  components:{
    LanguageSelect
  },
  methods: {
    changeMenu(name){
      if (name == 'loginOut') {
        this.$router.push({
          path: '../../'
        })
        sessionStorage.removeItem('user');

      }
    },
    toFrom(){
      this.$router.push('/page/form/formList')
    }
  }
}
</script>


