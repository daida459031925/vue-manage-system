<template>
  <el-row>
    <el-col :span="1">
      <!--网站图标-->
      {{thisIco}}
    </el-col>
    <el-col :span="4">
      <!--快捷菜单-->
      {{menu}}
    </el-col>
    <el-col :span="14">
      <!--还没想好放什么-->
    </el-col>
    <el-col :span="4">
      <!--通知消息菜单-->
      {{information}}
    </el-col>
    <el-col :span="1">
      <!--用户头像-->
      {{myIco}}
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="1">
      <!--留白-->
    </el-col>
    <el-col :span="4">
      <!--留白-->
      {{leftBody}}
    </el-col>
    <el-col :span="14">
      <!--主体-->
      <v-body/>
    </el-col>
    <el-col :span="4">
      <!--留白-->
      {{rightBody}}
    </el-col>
    <el-col :span="1">
      <!--留白-->
    </el-col>
  </el-row>

</template>

<script>

const vBody =(bodyName) => import('./bodys/DPlayer/DPlayer.vue');
export default {
  name:"FrontDesk",
  components:{
    vBody:vBody("")

  },
  //定义一个初始化方法用于让调用页面传入参数，不写初始化设置只写props 目的是强制父页面传参 可这不是我要的
  props:{
    thisIco:{
      template:"<div/>",
      default:'<div/>'
    },
    menu:{
      default:'我是默认值，可以不定义'
    },
    information:{
      default:'我是默认值，可以不定义'
    },
    myIco:{
      default:'我是默认值，可以不定义'
    },
    leftBody:{
      default:'我是默认值，可以不定义'
    },
    body:{
      default:'我是默认值，可以不定义'
    },
    rightBody:{
      default:'我是默认值，可以不定义'
    }
  },
  //启动监听时间用于监听当前事件发生什么事
  // watch: {
  //   initInfo(map){
  //     console.log(map);
  //     console.log("**************************111**");
  //     //需要判断要是没有传入就使用默认
  //     this.thisIco = map.thisIco;
  //     this.menu = map.menu;
  //     this.information = map.information;
  //     this.myIco = map.myIco;
  //     this.leftBody = map.leftBody;
  //     this.body = map.body;
  //     this.rightBody = map.rightBody;
  //   }
  // },
  //初始化设置  想让别的数据传入进来那么就不能默认传入值
  // setup(){
  //   //这里设置默认值 防止页面孔雀
  //   const thisIco = 1;
  //   const menu = 2;
  //   const information = 3;
  //   const myIco = 4;
  //   const leftBody = 5;
  //   const body = 6;
  //   const rightBody = 7;
  //
  //   return {
  //     thisIco,menu,information,myIco,leftBody,body,rightBody
  //   }
  // }
}
</script>

<style scoped>

</style>
