<template>
    <div class="leftmanu">
        <el-menu>
            <router-link to="/home">
                <el-menu-item index="0">
                    <i class="fa fa-margin fa-server"></i>
                    <span slot="title">首页</span>
                </el-menu-item>

                <template v-for="item in items" >
                    <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                        <template slot="title">
                            <i :class="'fa fa-margin' + item.icon"></i>
                            <span slot="title">{{ item.name }}</span>
                        </template>
                        <router-link v-for="(citem, cindex) in item.children" :to="citem.path" :key="cindex">
                            <el-menu-item :index="citem.path">
                                <span slot="title">{{ item.name }}</span>
                            </el-menu-item>
                        </router-link>
                    </el-submenu>
                </template>

            </router-link>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "leftmanu",
    data() {
        return {
            items: [
                {
                    icon: "fa-money",
                    name: "资金管理",
                    path: "fund",
                    children: [
                        {
                            path: "fundlist", name: "资金流水"
                        }
                    ]
                },
                {
                    icon: "fa-money",
                    name: "资金管理",
                    path: "fund",
                    children: [
                        {
                            path: "infoshow", name: "个人信息"
                        }
                    ]
                }
            ]
        }
    }
};
</script>

<style scoped>

</style>
