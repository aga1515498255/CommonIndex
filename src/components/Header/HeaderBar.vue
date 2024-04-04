<template>
    <el-card>
        <el-row align="middle" justify="space-between">

            <el-col :span="1"> <el-icon :class="logo" :size="26">
                    <ElementPlus />
                </el-icon>
            </el-col>
            <el-col :span="18">

                <!-- <HorizontalRouters/> -->

            </el-col>
            <el-col :span="3">
                <el-row>
                    <el-col :span="18">
                        <el-button type="primary" @click="handleContact">Contact Us
                            <el-icon>
                                <Service />
                            </el-icon>
                        </el-button>
                    </el-col>
                    <el-col :span="6">
                        <el-dropdown>

                            <el-button text> <img alt="Vue logo" class="logo" src="@/assets/languages.svg" width="25"
                                    height="25" /></el-button>

                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="changeLanguage('en')">English</el-dropdown-item>
                                    <el-dropdown-item @click="changeLanguage('zh')">简体中文</el-dropdown-item>

                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="2">
                <el-row justify="space-around" v-if="islogin">
                    <el-col :span="1">
                        <el-dropdown>
                            <el-avatar :size="30" :icon="UserFilled" />
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="clickSetPWD">修改密码</el-dropdown-item>
                                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>


                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                        <!-- <el-popover placement="top-start" :width="200" trigger="hover">
                            <template #reference>
                                <el-avatar :size="30" :icon="UserFilled" />
                            </template>
                            <template #default>
                                <div>
                                    <el-button type="danger" @click="clickSetPWD">
                                        修改密码
                                    </el-button>
                                    <el-button type="danger" @click="logout">
                                        退出登录
                                    </el-button>
                                </div>
                            </template>
                        </el-popover> -->


                    </el-col>
                </el-row>
            </el-col>

        </el-row>
    </el-card>



</template>
<script setup>

import { UserFilled } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useStore()
const { locale } = useI18n()

function changeLanguage(flag) {

    locale.value = flag
    // t.locale = locale

}
const clickSetPWD = () => {
    router.push({ name: "setPWD" })
}
const handleContact = () => {
    router.push({ name: "contact" })
}

const logout = async () => {
    await store.dispatch("hanldeLogout")
    router.push({ path: '/' })
}
const islogin = computed(() => {
    return store.getters.isLogin;
})


</script>
