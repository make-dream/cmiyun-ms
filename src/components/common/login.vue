<template>
    <div class="login">
      <img src="../../assets/img/icon-bg.png" class="bgImg" alt="">
      <div class="content">
        <div class="main">
          <img src="../../assets/img/logo0.png" class="logo" alt="">
          <h1>Cloud Bussiness Platform | CMI</h1>
          <Form>
            <FormItem>
              <Input placeholder="Email" v-model="email"></Input>
              <Input placeholder="Password" type="password" class="pull-right"></Input>
            </FormItem>
            <FormItem class="login mb-10">
              <Button type="success" @click="submit">Sign In</Button>
            </FormItem>
            <p>Forgot Password?</p>
          </Form>
        </div>
        <p class="tip">Products | Solution | Support | About Us | Contact Sales | Copyright©2018 China Mobile International Limited</p>
      </div>
    </div>
</template>

<style lang="less">
  .login{
    background: #1463ec;
    width: 100%;
    height: 100%;
    overflow:hidden;
    position: relative;
    .bgImg{
      width: 100%;
      height: 100%;
    }
    .content{
      position: absolute;
      top: 20%;
      z-index:999;
      width: 100%;
      .main{
        width: 506px;
        height: 500px;
        margin: 0 auto;
        background:none !important;
        h1{
          color: white;
          margin-bottom: 100px;
          padding-top: 10px;
          text-align: center;
        }
        img{
          margin: 0 auto;
          display: block;

        }
        input,button{
          height: 50px;
        }
        input{
          width: 248px;
        }
        .ivu-input-wrapper{
          display: inline-block;
          width: 248px;
        }
        button{
          width: 100%;
          font-size: 18px;
          color: white;
        }
        p{
          text-align: right;
          color: white;
          font-size: 16px;
        }
      }
      .tip{
        font-size: 12px;
        color: white;
        text-align: center;
      }
    }
  }
</style>

<script>
    export default{
        data () {
            return {
              email:''
            }
        },
        methods:{
          submit(){
              var that=this;
              if(this.email==''){
                this.email='productManager@chinamobile.com';   //产品管理员                        systemManager@chinamobile.com   系统管理员
              }
              this.$http.post('/login/toLogin?account='+this.email+'&password=123456').then(function(res){
                  if(res.data.status==200){
                      console.log(res.data)
                   /* that.$Message.success('Success!');*/
                    if(that.email=='productManager@chinamobile.com'){
                      that.$router.push({path: '/DashBoardPage'});
                    }else if(that.email=='systemManager@chinamobile.com'){
                      that.$router.push({path: '/DashBoardPage1'});
                    }
                    sessionStorage.setItem('use',res.data.userName);
                    /*setTimeout(function(){
                      that.$router.push({path: '/DashBoardPage'});
                    },1000)*/
                  }
              }).catch(function(res){
                  console.log(res)
              })
          }

        }
    }
</script>
