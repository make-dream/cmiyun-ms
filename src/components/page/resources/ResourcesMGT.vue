<template>
    <div class="ResourcesMGTPage">
        <div class="title">Resource management
            <Button type="primary" style="width:140px;height:34px;float:right;border-radius:17px;margin-top:11px" @click="jump">Import Resource</Button>
        </div>
        <div class="contant">
            <div class="top">
                <strong>All of 6 items </strong>
                <Select v-model="model3" style="width:140px;margin-left:12px;" placeholder="Cloud Type">
                    <Option v-for="item in device" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Input v-model="value"  style="width: 225px;margin-left:20px" />
                <Button type="primary" style="width:80px;height:32px;border-radius:5px;margin-left:30px" @click="Search">Search</Button>
            </div>
            <div class="container">
                <Table :columns="columns1" :data="data1"></Table>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        value:'',
        model3:'',
        device:[{
            value:'Cloud Type',
            label:'Cloud Type'
        }],
        columns1: [
            {
                title: 'Cloud',
                key: 'Cloud',
                align:'center',
                width:70
            },{
                title: 'Cloud location',
                key: 'location',
                align:'center',
                width:120
            },{
                title: 'CSP GW Device',
                key: 'CspDevice',
                align:'center',
                width:144
            },{
                title:'CSP GW PORT',
                key:'CspPort',
                align:'center',
                width:123
            },{
                title:'CSP GW PORT  TYPE',
                key:'CspType',
                align:'center',
                width:123
            },{
                title:'CSP AS',
                key:'CspAs',
                align:'center',
                width:88
            },{
                title:'CMI Device',
                key:'CmiDevice',
                align:'center',
                width:104
            },{
                title:'CMI PORT',
                key:'CmiPort',
                align:'center',
                width:95
            },{
                title:'CMI PORT  TYPE',
                key:'CmiType',
                align:'center',
                width:96
            },{
                title:'CMI AS',
                key:'CmiAs',
                align:'center',
                width:88
            },{
                title:'Detail',
                key:'Detail',
                align:'center',
                width:70,
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                marginRight: '10px',
                                backgroundColor:"#fff",
                                color:"#42a5f6",
                                border:'none'
                            },
                            on: {
                                click: () => {
                                    this.show(params.row)
                                }
                            }
                        }, 'View')
                    ]);
                } 
            }
        ],
        data1: [
            {
                Cloud: 'AWS',
                location:'BJ AWS',
                CspDevice:'CSP BJ Gateway11',
                CspPort:'GE-1/0/0',
                CspType:'GE',
                CspAs:'645 40',
                CmiDevice:'BJ Edge11',
                CmiPort:'GE-1/0/0',
                CmiType:'GE',
                CmiAs:'65181',
            },{
                Cloud: 'AWS',
                location:'BJ AWS',
                CspDevice:'CSP BJ Gateway11',
                CspPort:'GE-1/0/1',
                CspType:'GE',
                CspAs:'645 41',
                CmiDevice:'BJ Edge11',
                CmiPort:'GE-1/0/1',
                CmiType:'GE',
                CmiAs:'65181',
            },{
                Cloud: 'AWS',
                location:'BJ AWS',
                CspDevice:'CSP BJ Gateway11',
                CspPort:'GE-1/0/2',
                CspType:'GE',
                CspAs:'645 42',
                CmiDevice:'BJ Edge11',
                CmiPort:'GE-1/0/2',
                CmiType:'GE',
                CmiAs:'65181',
            },{
                Cloud: 'AWS',
                location:'BJ AWS',
                CspDevice:'CSP BJ Gateway11',
                CspPort:'GE-1/0/3',
                CspType:'GE',
                CspAs:'645 43',
                CmiDevice:'BJ Edge11',
                CmiPort:'GE-1/0/3',
                CmiType:'GE',
                CmiAs:'65502',
            },{
                Cloud: 'AWS',
                location:'BJ AWS',
                CspDevice:'CSP BJ Gateway11',
                CspPort:'GE-1/0/4',
                CspType:'GE',
                CspAs:'645 44',
                CmiDevice:'BJ Edge11',
                CmiPort:'GE-1/0/4',
                CmiType:'FE',
                CmiAs:'65502',
            },{
                Cloud: 'AWS',
                location:'BJ AWS',
                CspDevice:'CSP BJ Gateway11',
                CspPort:'GE-1/0/5',
                CspType:'FE',
                CspAs:'645 45',
                CmiDevice:'BJ Edge11',
                CmiPort:'GE-1/0/5',
                CmiType:'FE',
                CmiAs:'65502',
            }
        ]
    }
  },
  methods: {
    jump(){
        this.$router.push('/page/resources/ImportResourcePage')
    },
    Search(){

    },
    show(item){
        console.log(item)
        this.$router.push({
            path:'/page/resources/ResourcesDetailPage',
            query:{
                title:item
            }
        })
    }
  },
  components: {

  }
}
</script>

<style lang="less">
.ResourcesMGTPage{
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    .title{
        color:#666;
        line-height: 56px;
        font-size: 14px;
        font-weight: 700;
    }
    .contant{
        width: 100%;
        border:1px solid #e2e9f6;
        padding: 22px 40px;
        strong{
            display: inline-block;
            font-size: 14px;
            color: #333;
            text-align: left;
            font-weight: 500;
        }
        .container{
            width: 100%;
            margin-top:20px;
            .ivu-table-cell{
                span{
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
