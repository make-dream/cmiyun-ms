import Vue from 'vue'
import Router from 'vue-router'
import Management from '../components/page/product/management'
import HelloWorld from '../components/HelloWorld'
import Newproduct from '../components/page/product/newProduct.vue'
import ProductAudit from '../components/page/product/ProductAudit'
import layout from '../components/common/layout'
import OrderManagement from '../components/page/order/orderManagement'
import HomePage from '@/components/HomePage'
import OrderDetails from '../components/page/order/orderDetails'
import OrderDetailsSDW from '../components/page/order/OrderDetailsSDW'
import OrderWork from '../components/page/order/orderWork'
import OrderProcessing from '../components/page/order/orderProcessing'
import EditProduct from '../components/page/product/editProduct.vue'
import DashBoardPage from '../components/page/dashboard/dashboard'
import DashBoardPage1 from '../components/page/dashboard/dashboard1'
import CloudSet from '../components/page/cloudSet/cloudSet'
import CloudSetDetail from '../components/page/cloudSet/cloudSetDetail.vue'
import CloudManage from '../components/page/cloudSet/Cloudmanage'
import Login from '../components/common/login.vue'
import SdnSet from '../components/page/sdnSet/sdnSet.vue'
import MonitorSDNPage from '../components/page/Monitor/Monitor_SDN'
import sdnSetDetail from '../components/page/sdnSet/sdnSetDetail'
import Configuration from '../components/page/sdnSet/configuration'
import OverallMonitorPage from '../components/page/Monitor/OverallMonitor'
import Sdwan from '../components/page/sdwSet/sdwan.vue'
import SdwanDetail from '../components/page/sdwSet/sdwanDetail.vue'
import ResourcesMGTPage from '../components/page/resources/ResourcesMGT'
import ResourcesDetailPage from '../components/page/resources/ResourcesDetail'
import ImportResourcePage from '../components/page/resources/ImportResource'
import formList from '../components/page/form/formList'
import UserFromPage from '../components/page/user/UserFrom'
import UserLog from '../components/page/user/UserLog.vue'
import CloudMonitoring from '../components/page/cloud/cloudMonitoring'
import SDWMonitoring from '../components/page/cloud/SDWMonitoring'

Vue.use(Router)

export default new Router({
  routes: [
    //产品
    {
      path: '/page/product',
      component: layout,
      children:[
        {
          path: '/page/product/Management',   //产品管理
          component: Management,
        },
        {
          path: '/page/product/ProductAudit', //产品详情
          component: ProductAudit,
        },
        {
          path: '/page/product/Newproduct',//新建产品
          component: Newproduct,
        },
        {
          path: '/page/product/EditProduct',//产品编辑
          component: EditProduct,
        }
      ]
    },
    //订单
    {
      path: '/page/order',
      component: layout,
      children:[
        {
          path: '/page/order/OrderManagement',
          component: OrderManagement,//订单管理
        },
        {
          path: '/page/order/orderDetails',//订单详情-云互联
          component: OrderDetails,
        },
        {
          path: '/page/order/orderDetailsSDW',
          component: OrderDetailsSDW,
        },
        {
          path: '/page/order/orderWork',      //工单管理
          component: OrderWork,
        },
        {
          path: '/page/order/orderProcessing',  //订单处理
          component: OrderProcessing,
        },
        {
          path: '/page/order/sdnSet',
          component: SdnSet,      //sdn配置
        },
        {
          path: '/page/order/sdnSetDetail',
          component: sdnSetDetail, //sdn配置详情
        },
      ]
    },
    //云链接
    {
      path: '/page/cloudSet',
      component: layout,
      children:[
        {
          path: '/page/order/cloudSet',//云互联配置编辑
          component: CloudSet,
        },
        {
          path:'/page/cloudSet/CloudSetDetail', //云互联配置详情
          component:CloudSetDetail
        },
        {
          path: '/page/cloudSet/cloudManage',   //云链接配置管理
          component: CloudManage,
        },
        {
          path:'/page/order/Sdwan',   //sdwan配置编辑
          component: Sdwan,
        },
        {
          path:'/page/order/SdwanDetail',   //sdwan配置编辑SdwanDetail
          component: SdwanDetail,
        }
      ]
    },
    //配置管理
    {
      path: '/page/sdnSet',
      component: layout,
      children:[
        {
          path: '/page/sdnSet/configuration',   //配置管理
          component: Configuration,
        },
        {
          path: '/page/sdnSet/sdnSet',   //配置管理
          component: SdnSet,
        }
      ]
    },
    //dashBoard
    {
      path: '/page/dashBoard',
      component: layout,
      children:[{
        path: '/DashBoardPage',
        component: DashBoardPage//产品管理员dashboard
      }, {
        path: '/DashBoardPage1',
        component: DashBoardPage1 //后台管理员dashboard
      }]
    },
    //监控
    {
      path: '/page/Monitor',
      component: layout,
      children:[{
        path: '/page/Monitor/MonitorSDNPage',//监控SDN/SD-WAN链路ADD
        component: MonitorSDNPage,
      }, {
        path: '/page/Monitor/OverallMonitorPage', //整体监控SDN/SD-WAN设备
        component: OverallMonitorPage,
      }]
    },
    {
      path: '/page/cloud',
      component: layout,
      children: [{
          path: '/page/cloud/cloudMonitoring', //云链接监控
          component: CloudMonitoring,
        },
        {
          path: '/page/cloud/SDWMonitoring', //SD-WAN 云链接监控
          component: SDWMonitoring,
        },
      ]
    },
    //资源
    {
      path: '/page/resources',
      component: layout,
      children: [{
        path: '/page/resources/ResourcesMGTPage', //资源管理
        component: ResourcesMGTPage,
      }, {
        path: '/page/resources/ResourcesDetailPage', //资源管理配置
        component: ResourcesDetailPage,
      }, {
        path: '/page/resources/ImportResourcePage', //导入资源
        component: ImportResourcePage,
      }]
    },
    //表单
    {
      path: '/page/form',
      component: layout,
      children: [{
        path: '/page/form/formList', //工单列表
        component: formList,
      }]
    },
    //用户
    {
      path: '/page/user',
      component: layout,
      children: [
        {
        path: '/page/resources/UserFromPage', //用户列表
        component: UserFromPage,
        },
        {
          path: '/page/resources/UserLog', //用户日志
          component: UserLog,
        },
      ]
    },
    //登录
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
