<template>
  <div class="index">
    <HeadNav></HeadNav>
    <leftmanu></leftmanu>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadNav from ".././components/HeadNav";
import LeftManu from ".././components/LeftManu.vue";
export default {
    name: "Index",
    components: {
      HeadNav,
      LeftManu
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
