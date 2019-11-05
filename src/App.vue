<template>
    <div id = "app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <tab-bar></tab-bar>
    </div>
</template>
<script>
  import TabBar from './components/Tabbar/TabBar'

  export default {
    name: 'app',
    components: {
      TabBar
    }
  }
</script>
<style>
    @import "../public/css/normal.css";
    @import "assets/css/base.css";
    @import "../public/css/common.css";
    @import "../public/iconfont/iconfont.css";
</style>
