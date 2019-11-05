<template>
    <div>
        <Header>
            <h1>我的</h1>
        </Header>
        <div id = "content">
            <Login></Login>
        </div>
    </div>
</template>

<script>
  import Header from 'components/Header/index'
  import Login from 'components/Login/Login'

  export default {
    name: 'index',
    components: {
      Header,
      Login
    }
  }
</script>

<style scoped>

</style>