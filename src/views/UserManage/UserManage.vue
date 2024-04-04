<template>
    <el-card>
        <el-row justify="end">

            <el-col :span="3">
                <el-button @click="showAdd = true">添加用户</el-button>
                <el-dialog v-model="showAdd">
                    <el-form :model="newUser" label-width="auto" style="max-width: 600px">
                        <el-form-item label="用户名（账号）">
                            <el-input v-model="newUser.userName" />
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="newUser.password" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmitAdd">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </el-col>

        </el-row>
        <el-table :data="users" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="id" label="id" width="180" />
            <el-table-column prop="userName" label="用户名" width="180" />
            <el-table-column label="用户状态" width="180">
                <template #default="scope">
                    <el-text>
                        {{ scope.row.status ? "停用" : "启用" }}
                    </el-text>
                </template>
            </el-table-column>
            <el-table-column label="用户角色" width="180">
                <template #default="scope">
                    <el-text>
                        {{ scope.row.userRoles[0] ? scope.row.userRoles[0].roleKey : "无" }}
                    </el-text>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="180">
                <template #default="scope">
                    <el-button type="danger" link @click="() => { userToDelete = scope.row; confirmDelete = true }">
                        删除</el-button>
                    <el-button type="primary" link @click="handleClickChangeRole(scope.row)">更改角色</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>

    <el-dialog v-model="confirmDelete" :title="'是否删除用户：' + userToDelete.userName">
        <el-row justify="end">
            <el-col :span="3">
                <el-button @click="handleDelete" type="primary">
                    确认
                </el-button>
            </el-col>
        </el-row>


    </el-dialog>

    <el-dialog v-model="confirmChangeRole" :title="'更该角色用户：' + userToChangeRole.userName">
        <el-row>
            <el-col :span="3">
                <el-select v-model="newUserRole" placeholder="Select" size="large" style="width: 240px">
                    <el-option v-for="item in permRoles" :key="item.roleKey" :label="item.roleName" :value="item.id" />
                </el-select>
            </el-col>
        </el-row>
        <el-row justify="end">
            <el-col :span="3">
                <el-button :disabled="!changeConfirmEnable" @click="handleChangeRole" type="primary">
                    确认
                </el-button>
            </el-col>
        </el-row>


    </el-dialog>

</template>

<script setup>
import { allUser, createUser, deleteUser, changeRole } from "@/api/user.js"


import { onBeforeMount } from "vue";

import { ref, watch } from "vue";
const showAdd = ref(false)
const users = ref([])
const permRoles = ref([])
const newUser = ref({})
const confirmDelete = ref(false)
const userToDelete = ref({})
const userToChangeRole = ref({})
const confirmChangeRole = ref(false)
const changeConfirmEnable = ref(false)
const newUserRole = ref(0)
const fetchUsers = () => {
    allUser().then((res) => {
        console.log("res in UserManage is ", res.data);
        users.value = res.data.users;
        permRoles.value = res.data.perms;
    })
}

onBeforeMount(() => {
    fetchUsers()
})

watch()

watch(showAdd, (newValue) => {
    if (!newValue) {
        newUser.value = {}
    }
})


const handleClickChangeRole = (user) => {
    userToChangeRole.value = user;
    if (user.userRoles[0]) {
        newUserRole.value = user.userRoles[0].roleName;
    } else {
        newUserRole.value = "暂无角色"
    }

    confirmChangeRole.value = true
}

watch(newUserRole, (newValue) => {
    if (typeof (newValue) == "number") {
        changeConfirmEnable.value = true
    } else {
        changeConfirmEnable.value = false
    }
})

const handleDelete = () => {
    deleteUser(userToDelete.value).then(() => {
        confirmDelete.value = false
        fetchUsers()
    })
}


const handleChangeRole = () => {

    const data = {
        "userId": userToChangeRole.value.id,
        "roleId": newUserRole.value
    }

    changeRole(data).then(() => {
        confirmChangeRole.value = false
        fetchUsers()
    })
}


const onSubmitAdd = () => {
    createUser(newUser.value).then(() => {
        showAdd.value = false
        fetchUsers()
    })
}


</script>

<style></style>