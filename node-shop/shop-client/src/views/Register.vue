<template>
    <div class="register">
        <section class="form_container">
            <div class="manager_tip">
                <span class="title">
                    <h2>奇果鲜生后台管理</h2>
                </span>
            </div>
        </section>
        <el-form :model="regsiterUser" :rules="rules" ref="regsiterForm" label-width="60px" class="regsiterForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="regsiterUser.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="regsiterUser.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="regsiterUser.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2">
                <el-input type="password" v-model="regsiterUser.password2" placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item label="身份选择">
            <el-select v-model="regsiterUser.identity" placeholder="请选择身份">
              <el-option label="管理员" value="manager"></el-option>
              <el-option label="员工" value="employee"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="submit-btn" @click="submitForm('regsiterForm')">注册</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
export default {
    name: "register",
    components: {},
    data() {
        var validatePass2 = (rules, value, callback) => {
            if (value !== this.regsiterUser.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            regsiterUser: {
                name: "",
                email: "",
                password: "",
                password2: ""
            },
            rules: {
                name: [
                        {
                            reqiured: true,
                            message: "用户名不能为空",
                            trigger: "blur"
                        },
                        {
                            min: 2,
                            max: 30,
                            message: "长度在2到30直接",
                            trigger: "blur"
                        }
                    ],
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
                        message: "密码必须是8到30位",
                        trigger: "blur"
                    }
                ],
                password2: [
                    {
                        reqiured: true,
                        message: "确认密码不一致",
                        trigger: "blur"
                    },
                    {
                        validator: validatePass2,
                        trigger: "blur"
                    }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios.post('/api/users/regsiter', this.regsiterUser)
                    .then(res => {
                        // 注册成功
                        res.this.$message({
                            message: "账号注册成功！",
                            type: "success"
                        });
                    })
                    .catch(err => {
                        return Promise.reject(err);
                    });
                }

                this.$router.push("/login");
            });
        }
    }
};
</script>

<style scoped>
.register {
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/nineng.jpg');
}

.form_container {
    width: 200px;
    height: 150px;
}

.manager_tip {
    width: 150px;
    height: 100px;
}

.title {
    width: 100px;
    height: 85px;
}

.registerForm {
    margin-top: 20px;
    background-color: #ffffff;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccccc;
}

.submit-btn {
    width: 100%;
}
</style>
