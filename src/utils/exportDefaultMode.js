const exportDefault = {
    name: "HomePage",
    components:{
        //导入模板
    },
    methods:{
        //方法集合 所有方法写在这里
        init($this){
            console.log("***********1");
            $this.vDplayerWidth = "100px";
        }
    },
    //有变动时候执行
    watch: {
        initInfo(){
            console.log("我变动了");
        }
    },
    mounted(jj) {
        var $this = this;
        //页面加载完成时 按照需要进行调用方法
        // console.log("***********1");
        // $this.$refresh($this);
    },
    computed:{
        //页面加载完成之后 通过计算给与指定内容赋值，若没有则使用 默认值setup设置的
    },
    setup(){
        //默认设置当页面什么都不给的时候加载默认值
    }
}

//目前不知道怎么通用化

export default exportDefault
