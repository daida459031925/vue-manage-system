<template>
  <v-background/>
  <el-row :gutter="10" style="background-color: #d9d9d9">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <!--网站图标-->
      <v-thisIco/>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <!--快捷菜单-->
      <v-menu/>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <!--通知消息菜单-->
      {{ information }}
    </el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <!--用户头像-->
      <v-MyIco style="margin-right: 20px;margin-left: 20px;"/>
    </el-col>
  </el-row>
  <el-row class="row-bg" justify="space-around" style="margin-top: 10px;width: 80%">
    <el-col :span="6" style="background-color: #d9d9d9;">
      <!--留白-->
    </el-col>
    <el-col :span="11" style="background-color: #d9d9d9;margin:0 auto;word-break: break-all;">
      <!--主体-->
      <div style="padding: 10px;">
        <v-dplayer :initInfo="initInfo" @getSonInfo='getSonInfo'></v-dplayer>
      </div>
    </el-col>
    <el-col :span="6" style="background-color: #d9d9d9;">
      <!--留白-->
      <div @click="s">11111111</div>
    </el-col>
  </el-row>
</template>

<script>
import vFrontDesk from "../../components/FrontDesk.vue";
import vDplayer from "../../components/bodys/DPlayer/DPlayer.vue";
import vBackground from "../../components/Background.vue";
import $common from "../../utils/common.js"; //工具类

export default {
  name: "HomePage",
  components: {
    //导入模板
    vFrontDesk, vBackground, vDplayer
  },
  methods: {
    //方法集合 所有方法写在这里
    getSonInfo(val) {
      let $this = this;
      this.initInfo = {
        name: '李白1',
        skill: '青莲剑歌1'
      }
      $this.$refresh($this);
      console.log(val.name, val.skill);
    },
    s() {
      let $this = this;
      $this.initInfo = {
        name: '李白1',
        skill: '青莲剑歌1'
      }
      $this.$refresh($this);
    }
  },
  mounted() {
    let $this = this;
    this.initInfo = {
      name: '李白',
      skill: '青莲剑歌'
    }
    //页面加载完成时 按照需要进行调用方法
    let a = {"b": "a"};
    $common.deepValue(a, {"a": "a"});
    $this.$refresh($this);
  },
  computed: {
    //页面加载完成之后 通过计算给与指定内容赋值，若没有则使用 默认值setup设置的

  },
  setup() {
    //默认设置当页面什么都不给的时候加载默认值
    return {
      initInfo: null
    }
  }
}
</script>

<style scoped>
div {
  /*text-align:center;!*文字剧中*!*/
  margin: 0 auto; /*水平剧中*/
  word-break: break-all; /*自动换行*/
}

.el-col {
  border-radius: 4px;
}
</style>
