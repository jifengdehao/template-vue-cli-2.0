<template>
  <van-tabbar
    v-model="active"
    active-color="#07c160"
  >
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">搜索</van-tabbar-item>
    <van-tabbar-item icon="friends-o">空间</van-tabbar-item>
    <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    name: 'vfooter',
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style scoped>

</style>
