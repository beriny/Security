<template>
    <div class="notfound">
        <h2><span class="ui container segment">页面不存在</span></h2>
    </div>
</template>

<script>
export default {
    name: "notfound",
    components: {},
};
</script>

<style scoped>
.notfound {
    width: 80rem;
    height: 80rem;
    background-image: url('.././assets/static/img/page.jpg');
    background-position: center;
    background-size: contain;
}

.ui.container.segment {
    translate: -100%, 0%;
}
</style>
