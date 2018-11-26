<template>
    <div class="ResourcesDetailPage">
        <div class="title">Detail</div>
        <div class="contant">
            <div class="one">
                <Table :columns="columns1" :data="data1"></Table>
            </div>
            <div class="two">
                <div class="title">CMI AWS IP</div>
                <Table :columns="columns2" :data="data2"></Table>
            </div>
            <p class="see"><span>See Others</span></p>
            <div class="three">
                <div class="title">VLAN</div>
                <Table :columns="columns3" :data="data3"></Table>
            </div>
            <p class="see"><span>See Others</span></p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            columns1: [
                {
                    title: 'Cloud',
                    key: 'Cloud',
                    align:'center'
                },{
                    title: 'Cloud location',
                    key: 'location',
                    align:'center',
                    width:120
                },{
                    title: 'CSP GW Device',
                    key: 'CspDevice',
                    align:'center',
                    width:145
                },{
                    title:'CSP GW PORT',
                    key:'CspPort',
                    align:'center',
                    width:125
                },{
                    title:'CSP GW PORT  TYPE',
                    key:'CspType',
                    align:'center',
                    width:125
                },{
                    title:'CSP AS',
                    key:'CspAs',
                    align:'center'
                },{
                    title:'CMI Device',
                    key:'CmiDevice',
                    align:'center',
                    width:120
                },{
                    title:'CMI PORT',
                    key:'CmiPort',
                    align:'center'
                },{
                    title:'CMI PORT  TYPE',
                    key:'CmiType',
                    align:'center',
                    width:100
                },{
                    title:'CMI AS',
                    key:'CmiAs',
                    align:'center'
                }
            ],
            data1: [],
            columns2:[
                {
                    title: 'IP Address',
                    key: 'IPAddress',
                    align:'center'
                },{
                    title: 'Status',
                    key: 'Status',
                    align:'center'
                },{
                    title: 'CMI IP',
                    key: 'CmiIP',
                    align:'center'
                },{
                    title: 'Netmask',
                    key: 'Netmask',
                    align:'center'
                },{
                    title: 'AWS IP',
                    key: 'AwsIP',
                    align:'center'
                },{
                    title: 'Netmask',
                    key: 'Netmask1',
                    align:'center'
                },{
                    title: 'Operation',
                    key: 'Operation',
                    align:'center',
                    render:(h,params)=>{
                        if(params.row.Status!=''){
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
                                        this.show(params.index)
                                    }
                                }
                            }, ' Modify')
                        ]);
                        }
                        //console.log(params.row.Status)

                    }
                }
            ],
            data2:[
                {
                    IPAddress:'192.168.0.0',
                    Status:'',
                    CmiIP:'',
                    Netmask:'',
                    AwsIP:'',
                    Netmask1:'',
                    Operation:''
                },{
                    IPAddress:'192.168.0.1',
                    Status:' Assigned',
                    CmiIP:'Y',
                    Netmask:'30',
                    AwsIP:'',
                    Netmask1:'',
                    Operation:''
                },{
                    IPAddress:'192.168.0.2',
                    Status:' Assigned',
                    CmiIP:'',
                    Netmask:'',
                    AwsIP:'Y',
                    Netmask1:'30',
                    Operation:''
                },{
                    IPAddress:'192.168.0.3',
                    Status:'',
                    CmiIP:'',
                    Netmask:'',
                    AwsIP:'',
                    Netmask1:'',
                    Operation:''
                }
            ],
            columns3:[
                {
                    title: 'VLAN',
                    key: 'VLAN',
                    align:'center'
                },{
                    title: 'Status',
                    key: 'Status',
                    align:'center'
                },{
                    title: 'CSP AS',
                    key: 'CspAs',
                    align:'center'
                },{
                    title: 'AWS VLAN',
                    key: 'AwsVLAN',
                    align:'center'
                },{
                    title: 'Operation',
                    key: 'Operation',
                    align:'center',
                    render:(h,params)=>{
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
                                        this.show(params.index)
                                    }
                                }
                            }, ' Modify')
                        ]);
                    }
                }
            ],
            data3:[
                {
                    VLAN:'330',
                    Status:'Assigned',
                    CspAs:'330',
                    AwsVLAN:'330'
                }
            ]
        }
    },
    methods: {
        show(){

        }
    },
    created () {
        this.data1.push(this.$route.query.title);
        console.log(this.data1)
    },
    components: {

    }
}
</script>

<style lang="less">
.ResourcesDetailPage{
    width: 1200px;
    margin: 0 auto;
    .title{
        color:#666;
        line-height: 56px;
        font-size: 14px;
        font-weight: 700;
    }
    .contant{
        width: 100%;
        padding:30px 40px;
        border:1px solid #e2e9f6;
        .title{
            font-weight: 400;
            color:#333;
        }
        .see{
            width: 100%;
            text-align: center;
            color:#54abf7;
            font-size: 12px;
            line-height: 36px;
            cursor: pointer;
        }
        .one{
            width: 100%;
        }
        .two{
            width: 100%;
            margin-top: 30px;
        }
        .three{
            width: 100%;
        }
    }
}
</style>
