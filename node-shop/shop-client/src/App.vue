<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import JwtDecode from 'jwt-decode';

export default {
    name: "app",
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

    created() {
        if (localStorage.eleToken) {
            const decoded = JwtDecode(localStorage.eleToken);
            // 将token保存vuex中
            this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded));

            this.$store.dispatch("setUser", decoded);
        }
    },

    methods: {
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

<style>

#app {
  width: 100%;
  height: 100%;
}

</style>
