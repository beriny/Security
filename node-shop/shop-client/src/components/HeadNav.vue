<template>
    <div class="head-nav">
        <el-row>
            <el-col :span="6" class="logo-container">
                <img class="ui large image" src=".././assets/logo.png" alt="">
                <span class="title">奇果鲜生后台管理系统</span>
            </el-col>

            <el-col :span="6" class="user">
                <div class="userinfo">
                    <img class="ui image" src=".././assets/mihoutao.png" alt="">
                    <div class="welcome">
                        <p class="name comename">欢迎</p>
                        <p class="name avatarname">
                            {{ user.name }}
                            <span class="username">
                                <!-- 下拉箭头 -->
                                <el-dropdown trigger="click" @command="setDialogInfo">
                                    <span class="el-dropdown-link">
                                     更多 <i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                  <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="info">个人信息</el-dropdown-item>
                                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                                  </el-dropdown-menu>
                                </el-dropdown>
                            </span>
                        </p>
                    </div>

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "head-nav",
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
    methods: {
        setDialogInfo(cmdItem) {
            // console.log(cmdItem);
            switch (cmdItem) {
                case "info":
                    this.showInfoList();
                    break;
                case "logout":
                    this.logout()
                    break;
            }
        },
        showInfoList() {
            console.log("个人信息！");
            this.$router.push("/infoshow");
        },
        logout() {
            // console.log("退出！");
            // 清除token
            localStorage.removeItem("eleToken");
            // 设置vuex，store
            this.$store.dispatch("clearCurrentState");
            // 跳转到登录页面
            this.$router.push("/login");
        }

    }
};
</script>

<style scoped>
.head-nav {
    width: 100%;
    height: 60px;
    min-width: 600px;
    padding: 5px;
    background: gray;
    color: #fff;
    border-bottom: 1px solid;
}

.ui.large.image {
    width: 22px;
    height: auto;
    position: relative;
    transform: translate(10%, 50%);
}

.title {
    width: auto;
    font-size: 5px;
}

.user {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translate(100%, -100%);
    /* padding: 2px 2px; */
}

.ui.image {
    width: 35px;
    height: 30px;
    background-position: right;
    position: relative;
    transform: translate(-100%, -10%);
}

.welcome {
    width: 40px;
    height: 20px;
    position: relative;
    transform: translate(0%, -280%);
}

.name.comename {
    font-size: 12px;
    position: relative;
    transform: translate(0%, -20%);
}

.avatarname {
    color: blue;
    font-weight: bolder;
    position: relative;
    transform: translate(0%, -30%);
}

.username {
    cursor: pointer;
    margin-right: 5px;
}

.userinfo {
    width: 70px;
    height: 5px;
    transform: translate(-100%, 0%);
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

.el-icon-arrow-down {
font-size: 12px;
}
</style>
