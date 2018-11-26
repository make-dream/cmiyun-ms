<template>
    <div class="UserFromPage">
        <div class="title">User List</div>
        <div class="contant">
            <div class="top">
                <strong>All of 4 users</strong>
                <Button type="primary" style="width:150px;height:32px;border-radius:5px;float:right" @click="Search">Add a new user</Button>
            </div>
            <Table :columns="columns1" :data="data1"></Table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            columns1:[
                {
                    title:'Selected',
                    key:'Selected',
                    align:'center',
                    render:(h, params)=> {
                        return h('div',[
                            h('Checkbox',{
                                props:{
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    backgroundColor:"#fff",
                                    color:"#42a5f6",
                                    border:'none'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.row)
                                    }
                                }
                            })
                        ])
                    }
                },{
                    title:'Account',
                    key:'Account',
                    align:'center',
                    width:260
                },{
                    title:'Permission',
                    key:'Permission',
                    align:'center',
                    width:200
                },{
                    title:'Status',
                    key:'Status',
                    align:'center',
                },{
                    title:'Recently Online',
                    key:'RecentlyOnline',
                    align:'center',
                },{
                    title:'Detail',
                    key:'Detail',
                    align:'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
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
                },{
                    title:'Operation',
                    key:'Operation',
                    align:'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    backgroundColor:"#fff",
                                    color:"#42a5f6",
                                    border:'none'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.row)
                                    }
                                }
                            }, 'Modify')
                        ]);
                    }
                }
            ],
            data1:[
                {
                    Account:'systemManager@chinamobile.com',
                    Permission:'system admin',
                    Status:'Enable',
                    RecentlyOnline:'Currently online'
                },{
                    Account:'productManager@chinamobile.com',
                    Permission:'product management',
                    Status:'Enable',
                    RecentlyOnline:'Currently online'
                },{
                    Account:'cmiuser@chinamobile.com',
                    Permission:'Reviewer',
                    Status:'Enable',
                    RecentlyOnline:'Currently online'
                },{
                    Account:'cmitestuser@chinamobile.com',
                    Permission:'Reviewer',
                    Status:'Enable',
                    RecentlyOnline:'Currently online'
                }
            ]
        }
    },
    methods: {
        Search(){
            
        },
        show(){

        }  
    },
    components: {

    }
}
</script>

<style lang="less">
.UserFromPage{
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
        padding: 20px 40px 80px 40px;
        border:1px solid #e2e9f6;
        .top{
            margin-bottom: 20px;
            overflow: hidden;
        }
    }
}
</style>
