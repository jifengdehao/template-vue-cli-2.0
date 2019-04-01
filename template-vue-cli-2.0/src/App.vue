<template>
  <div id="app">
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import VFooter from '@/components/vfooter'

  export default {
    name: 'app',
    components: {
      VFooter
    }
  }
</script>
