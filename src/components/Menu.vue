<template>
  <el-check-tag v-for="tag in tags" @change="onChange(tag)" :checked="tag.checked">
    {{tag.name}}
  </el-check-tag>
</template>

<script>
export default {
  name: "menu",
  setup(){
    return{
      tags:[
          { name: "这", type: 'success',checked:false},
          { name: "是", type: 'info',checked:false},
          { name: "一", type: 'warning',checked:false},
          { name: "个", type: 'danger',checked:false},
          { name: "测", type: '5',checked:false},
          { name: "试", type: '6',checked:false},
          { name: "菜", type: '7',checked:false},
          { name: "单", type: '8',checked:false}
      ]
    }
  },
  methods: {
    onChange(tag) {
      var $this = this;
      tag.checked = !tag.checked
      $this.$refresh($this);
    }
  }
}
</script>

<style scoped>
  .el-check-tag{
    margin-right: 8px;
  }
</style>
