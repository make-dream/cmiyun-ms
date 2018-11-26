<template>
  <div id="layout">
    <Header></Header>
    <Nav></Nav>
    <!-- <NavL v-if="!show"></NavL> -->
    <div class="mainPage">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="less">
  #layout{
    position: relative;
    .mainPage{
      position: relative;
      padding-top: 80px;
      padding-left: 100px;
      overflow: hidden;
      width: 100%;
    }
  }
</style>


<script type="text/ecmascript-6">
  import Header from '../common/header'
  import Footer from '../common/footer'
  import Nav from '../common/nav'
  // import NavL from '../common/nav1'
  export default {
    data(){
      return{
        show:true
      }
    },
    mounted () {
     
    },
    components:{
      Header,Footer,Nav,
    }
  }
</script>

