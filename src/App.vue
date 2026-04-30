<template>
  <div id="app">
    <div class="box"></div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>

    <van-switch v-model="checked" />
    <van-rate v-model="score"></van-rate>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      score: 5
    }
  }
}
</script>

<style lang="less">
.box{
  width: 300px;
  height: 300px;
  background-color: black;
}
</style>
