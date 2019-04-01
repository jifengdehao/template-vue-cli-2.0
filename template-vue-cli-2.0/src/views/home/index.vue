<template>
  <div class="home">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {get} from '@/api'

  export default {
    name: 'home',
    data() {
      return {
        list: [],
        loading: false,
        finished: false
      }
    },
    created() {
      this.setUser({
        id: 102112,
        name: '张三',
        token: 'asasf6sf61fa61313asfsaffas313'
      })
      get('https://www.easy-mock.com/mock/5c2dc1bfda4d71382bd2d0d5/example/mock').then(res => {
        console.log(res)
      })
    },
    methods: {
      ...mapActions([
        'setUser'
      ]),
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1)
          }
          // 加载状态结束
          this.loading = false

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true
          }
        }, 500)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "index";
</style>
