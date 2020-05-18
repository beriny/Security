<template>
    <div class="login">
        <section class="ui container very padding segment">
            <div class="ui container segment">
                <span class="ui text segment">
                    <h2 class="ui inverted blue container segment">奇果鲜生登录</h2>
                </span>
            </div>
        </section>
        <el-form :model="loginUser" :rules="rules" ref="loginForm" label-width="40px" class="loginForm">
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" class="submit-btn" @click="submitForm('loginForm')">登录</el-button>
              <div class="tiparea">
                  <p>还没有账号？现在<router-link to="/register">注册</router-link></p>
              </div>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
import JwtDecode from "jwt-decode";

export default {
    name: "login",
    components: {},
    data() {
        return {
            loginUser: {
                email: "",
                password: ""
            },
            rules: {
                email: [
                    {
                        type: 'email',
                        reqiured: true,
                        message: "邮箱输入不正确",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        reqiured: true,
                        message: "密码不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 6,
                        max: 30,
                        message: "密码是6到30位",
                        trigger: "blur"

                    },
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios.post('/api/users/login', this.loginUser)
                        .then(res => {
                            // 登录成功, token
                            // console.log(res);
                            const { token } = res.data;

                            // 存储到localstorage
                            localStorage.setItem('eleToken', token);

                            // 解析token
                            const decoded = JwtDecode(token);
                            // console.log(decode);

                            // 将token保存vuex中
                            this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded));

                            this.$store.dispatch("setUser", decoded);


                            // 跳转到首页
                            this.$router.push("/index");
                        });
                }
            });
        },

        isEmpty(value) {
            return (
                value === undefined ||
                value === null ||
                (typeof value === "object" && Object.keys(value).length === 0) ||
                (typeof value === "string" && value.trim().length === 0)
            );
        }
    }
};
</script>

<style scoped>

.login {
    width: 100%;
    height: 100%;
    background-image: url('../assets/static/img/caomei.jpg');
    background-position: center;
    background-size: cover;
}

.ui.container.segment {
    width: 12em;
    height: 12em;
    background: pink;
    background-image: url('../assets/static/img/show.jpg');
}
</style>
