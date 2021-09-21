export default(target)=> {
    //可能之前写的所有方法都能改变页面数据，但是由于子页面优先渲染导致页面无法更新父页面数据，需要添加刷新页面数据
    //对传入的目标进行刷新
    target.$forceUpdate();

    //听说对象还可以用这个刷新值，我没成功过
    // target.$set('body',name,'小红');//设置值       //这个我也不知道怎么修改
    // this.$emit("fatherEvent","foodNews")//触发事件     目前我只了解到只能触发自己的方法
    // this.$refs.xxx.xx("fatherEvent","foodNews")//xxx在标签上ref内容   找到组件下 xx内容或方法进行执行

    //也就是说组件转换最优是 :key   改变值 用set  触发事件 用emit  找组件用  refs这样子么？

    //网上说这个才是最好的方法但是不知道为什么 我加了key 就无法实现
    // this.forceRerender();
    // componentKey:0
    // methods: {
    //     forceRerender() {
    //         //需要在标签上加入:key = "componentKey"
    //         this.componentKey += 1;
    //     }
    // }
}
