// components/Tabs/Tabs.js
Component({
    /**
     * 里面存放的是  要从父组件中接收的数据
     */
    properties: {
    // 要接收的数据的名称
        tabs:{
            type:Array,
            value:[]
        }
    },
    
    /**
     * 组件的初始数据
     */
    data: {
    
    },
    
    // 1.页面.js文件中   存放事件回调函数的 时候 存放在data同层级下！！！！！！！！
    // 2.组件.js文件中   存放事件回调函数的时候  必须要存在  methods中！！！！！
    methods: {
        hanldeItemTap(e){
            // console.log("点击我试试")
            // 1.绑定点击事件必须在   methods  中绑定
            //    2.获取被点击的索引
            //    3.获取原数组
            //    4.对数组循环
            //      给每一个循环项  选中属性  改为   false
            //      给当前索引的项  添加激活选中效果就可以
        //获取索引
            const  {index}=e.currentTarget.dataset;
            this.triggerEvent("itemChange",{index});
        //获取data中的数组
        //    解构  对   复杂类型进行结构的时候  复制了一份 变量的引用而已
        //    最严谨的做法   重新拷贝一份  数组  再对这个数组的备份进行处理、
        //     let tabs=JSON.parse(JSON.stringify(this.data.tabs));
        //    不要直接修改  this. data.数据
        //     let {tabs}=this.data;
            // let tabs=this.data;    效果同上
        //循环数组
        // [].forEach  可以遍历数组 遍历数组的时候 修改了 V，也会导致原数组被修改
        //     tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        //     this.setData({
        //         tabs
        //     })
        },
    }
})
