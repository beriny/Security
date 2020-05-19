<template>
    <div class="infoshow">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="8">
                <div class="user">
                    <img :src="user.name" alt="#">
                </div>
            </el-col>
            <el-col :span="16">
                <div class="userinfo">
                    <div class="user-item">
                        <i class="fa fa-user"></i>
                        <span>{{ user.name }}</span>
                    </div>
                    <div class="user-item">
                        <i class="fa fa-cog"></i>
                        <span>{{ user.identity == "manager" ? "管理员" : "普通员工"}}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "infoshow",
    components:{},
    computed: {
        user() {
            return this.$store.getters.user;
        }
    }
};
</script>

<style scoped>

</style>
