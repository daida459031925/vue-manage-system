<template>
    <!-- 失活的组件将会被缓存！-->
<!--    <keep-alive>-->
      <!-- 动态组件 -->
<!--      <component :is="upVideo"></component>-->
<!--    </keep-alive>-->
    <div id='dplayer'></div>
    <div class="el-row" style="margin-top: 10px;">
        <el-button @click='btnClickHandle'>asdasdasd</el-button>
    </div>
</template>

<script>
import $common from "../../../utils/common.js"; //工具类
import MyDPlayer from "dplayer";

export default {
  name: "MyDPlayer",
  components:{
    MyDPlayer
  },
  setup(){
    return{
    }
  },
  props:{
    initInfo: null
  },
  methods:{
    //方法集合
    init(mode){
      let $this = this;
      let myMode = {
            //播放器容器
            container: document.getElementById("dplayer"),
            //直播模式
            live:false,
            //视频自动播放
            autoplay:false,
            //主题颜色
            theme:'#b7daff',
            //视频循环播放
            loop:false,
            //语言  可选值: 'en', 'zh-cn', 'zh-tw'
            lang: 'zh-cn',
            //开启截图，如果开启，视频和视频封面需要允许跨域
            screenshot: true,
            //开启热键，支持快进、快退、音量控制、播放暂停
            hotkey:true,
            //在 Safari 中开启 AirPlay
            airplay:true,
            //视频预加载，可选值: 'none', 'metadata', 'auto'
            preload:'auto',
            //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
            volume:0.7,
            //可选的播放速率，可以设置成自定义的数组
            playbackSpeed:[0.5, 0.75, 1, 1.25, 1.5, 2],
            //在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置
            logo:'',
            //自定义获取和发送弹幕行为，见#直播
            apiBackend:"",
            //视频信息
            video: $this.getVideo(),
            //外挂字幕
            // subtitle: {
            //   //字幕链接
            //   url: "webvtt.vtt",
            //   //字幕类型，可选值: 'webvtt', 'ass'，目前只支持 webvtt
            //   type:"webvtt",
            //   //字幕字号
            //   fontSize:'20px',
            //   //字幕距离播放器底部的距离，取值形如: '10px' '10%'
            //   bottom:'40px',
            //   //字幕颜色
            //   color:'#fff',
            // },
            //显示弹幕
            // danmaku: {
            //   //弹幕池 id，必须唯一
            //   id: "demo",
            //   //见#弹幕接口
            //   api: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
            //   //弹幕后端验证 token
            //   token:"",
            //   //弹幕最大数量
            //   maximum:50,
            //   //额外外挂弹幕，见#bilibili 弹幕
            //   addition:"",
            //   //弹幕用户名
            //   user:'DIYgod',
            //   //弹幕距离播放器底部的距离，防止遮挡字幕，取值形如: '10px' '10%'
            //   bottom:"",
            //   //海量弹幕模式，即使重叠也展示全部弹幕，请注意播放器会记忆用户设置，用户手动设置后即失效
            //   unlimited:false
            // },
            //自定义右键菜单
            contextmenu:[],
            //自定义进度条提示点
            highlight:[],
            //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
            mutex:true
          };
      if($common.isObject(mode) && $common.objectLength(mode)>0){
        //删除指定元素
        delete mode.container;
        //将赋值进来的内容给与到myMode
        $common.deepValue(myMode,mode)
        $this.$refresh($this);
        console.log("赋值成功")
      }
      let myDPlayer = new MyDPlayer(myMode);
      return myDPlayer;
    },
    play(player){
      // 播放事件
      player.on("play", () => {
        this.$emit("play");
        console.log("*****");
      });
    },
    pause(player){
      // 停止事件
      player.on("pause", () => {
        this.$emit("pause");
        console.log("*****");
      });
    },
    canplay(player){
      // 可播放事件
      player.on("canplay", () => {
        this.$emit("canplay");
        console.log("*****");
      });
    },
    playing(player){
      // 正在播放事件
      player.on("playing", () => {
        this.$emit("playing");
        console.log("*****");
      });
    },
    end(player){
      // 结束播放事件
      player.on("ended", () => {
        this.$emit("ended");
        console.log("*****");
      });
    },
    error(player){
      // 播放错误事件
      player.on("error", () => {
        this.$emit("error");
        console.log("*****");
      });
    },
    btnClickHandle(){
      this.$emit('getSonInfo', {name: this.name,skill: this.skill});
    },
    //动态组件
    upVideo(){
      let $this = this;
      let myMode = {
        //播放器容器
        container: document.getElementById("dplayer"),
        //直播模式
        live:false,
        //视频自动播放
        autoplay:false,
        //主题颜色
        theme:'#b7daff',
        //视频循环播放
        loop:false,
        //语言  可选值: 'en', 'zh-cn', 'zh-tw'
        lang: 'zh-cn',
        //开启截图，如果开启，视频和视频封面需要允许跨域
        screenshot: true,
        //开启热键，支持快进、快退、音量控制、播放暂停
        hotkey:true,
        //在 Safari 中开启 AirPlay
        airplay:true,
        //视频预加载，可选值: 'none', 'metadata', 'auto'
        preload:'auto',
        //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
        volume:0.7,
        //可选的播放速率，可以设置成自定义的数组
        playbackSpeed:[0.5, 0.75, 1, 1.25, 1.5, 2],
        //在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置
        logo:'',
        //自定义获取和发送弹幕行为，见#直播
        apiBackend:"",
        //视频信息
        video: $this.getVideo(),
        //外挂字幕
        // subtitle: {
        //   //字幕链接
        //   url: "webvtt.vtt",
        //   //字幕类型，可选值: 'webvtt', 'ass'，目前只支持 webvtt
        //   type:"webvtt",
        //   //字幕字号
        //   fontSize:'20px',
        //   //字幕距离播放器底部的距离，取值形如: '10px' '10%'
        //   bottom:'40px',
        //   //字幕颜色
        //   color:'#fff',
        // },
        //显示弹幕
        // danmaku: {
        //   //弹幕池 id，必须唯一
        //   id: "demo",
        //   //见#弹幕接口
        //   api: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
        //   //弹幕后端验证 token
        //   token:"",
        //   //弹幕最大数量
        //   maximum:50,
        //   //额外外挂弹幕，见#bilibili 弹幕
        //   addition:"",
        //   //弹幕用户名
        //   user:'DIYgod',
        //   //弹幕距离播放器底部的距离，防止遮挡字幕，取值形如: '10px' '10%'
        //   bottom:"",
        //   //海量弹幕模式，即使重叠也展示全部弹幕，请注意播放器会记忆用户设置，用户手动设置后即失效
        //   unlimited:false
        // },
        //自定义右键菜单
        contextmenu:[],
        //自定义进度条提示点
        highlight:[],
        //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
        mutex:true
      };
      return $this.init(myMode);
    },
    //视频信息
    getVideo(quality,defaultQuality,url,pic,thumbnails,type,customType){
      let video = {
            //见#清晰度切换
            quality:"",
            //见#清晰度切换
            defaultQuality:"",
            //视频链接
            url: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
            //视频封面
            pic: "./assets/logo.jpg",
            //视频缩略图，可以使用 DPlayer-thumbnails (opens new window)生成
            thumbnails: "./assets/logo.jpg",
            //可选值: 'auto', 'hls', 'flv', 'dash',
            // 'webtorrent', 'normal' 或其他自定义类型, 见#MSE 支持
            type:'auto',
            //自定义类型, 见#MSE 支持
            customType:""
          }
      if(!$common.isEmpty(quality)){video.quality = quality;}
      if(!$common.isEmpty(defaultQuality)){video.defaultQuality = defaultQuality;}
      if(!$common.isEmpty(url)){video.url = url;}
      if(!$common.isEmpty(pic)){video.pic = pic;}
      if(!$common.isEmpty(thumbnails)){video.thumbnails = thumbnails;}
      if(!$common.isEmpty(type)){video.type = type;}
      if(!$common.isEmpty(customType)){video.customType = customType;}
      return video;
    }
  },
  //有变动时候执行
  watch: {
    initInfo(val){
      console.log("我变动了")
    }
  },
  mounted() {
    //页面加载完成执行
    let t = this
    let player = t.init();
    t.play(player);
    t.pause(player);
    t.canplay(player);
    t.playing(player);
    t.end(player);
    t.error(player);
    player.switchVideo({
      pic: "https://pic.xiaohuochai.site/blog/qrcode.jpg",
    })
  },
}
</script>

<style scoped>

</style>
