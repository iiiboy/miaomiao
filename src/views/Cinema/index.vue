<template>
    <div>
        <Header>
            <h1>喵喵影院</h1>
        </Header>
        <div id = "content">
            <div class = "cinema_menu">
                <div class = "city_switch">
                    全城 <i class = "iconfont icon-lower-triangle"></i>
                </div>
                <div class = "brand_swtich">
                    品牌 <i class = "iconfont icon-lower-triangle"></i>
                </div>
                <div class = "feature_switch">
                    特色 <i class = "iconfont icon-lower-triangle"></i>
                </div>
            </div>
            <CList></CList>
        </div>
    </div>
</template>

<script>
  import Header from 'components/Header/index'
  import CList from 'components/CList/CList'

  export default {
    name: 'index',
    components: {
      Header,
      CList
    }
  }
</script>

<style scoped>

</style>