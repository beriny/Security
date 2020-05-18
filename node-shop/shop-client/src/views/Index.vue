<template>
  <div class="index">
    <HeadNav></HeadNav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadNav from '.././components/HeadNav'
export default {
    name: "Index",
    components: {
      HeadNav
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
