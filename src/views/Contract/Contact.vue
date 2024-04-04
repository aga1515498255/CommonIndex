<template>

    <el-row v-if="isLogin" justify="end">
        <el-col :span="3">
            <el-button type="primary" @click="showAddForm = true">
                添加联系人
            </el-button>

            <el-dialog v-model="showAddForm" title="添加联系人">
                <el-form :model="newContact" label-width="auto" style="max-width: 600px">
                    <el-form-item label="英文名">
                        <el-input v-model="newContact.nameEn" />
                    </el-form-item>
                    <el-form-item label="中文名">
                        <el-input v-model="newContact.nameZh" />
                    </el-form-item>
                    <el-form-item label="电子邮箱">
                        <el-input v-model="newContact.email" />
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input v-model="newContact.phoneNo" />
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="addNewContact">添加</el-button>
                        <el-button @click="() => { newContact = {}; showAddForm = false }">取消</el-button>
                    </el-form-item>
                </el-form>

            </el-dialog>
        </el-col>
    </el-row>

    <el-card>
        <el-descriptions v-for="item in contacts" :column="3" border :key="item.id">
            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <user />
                        </el-icon>
                        {{ t("contact.contactName") }}
                    </div>
                </template>
                {{ locale == "en" ? item.nameEn : item.nameZh }}
            </el-descriptions-item>

            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <iphone />

                        </el-icon>
                        {{ t("contact.phoneNo") }}
                    </div>
                </template>
                {{ item.phoneNo }}
            </el-descriptions-item>

            <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                        <el-icon :style="iconStyle">
                            <Message />
                        </el-icon>
                        {{ t("contact.email") }}
                    </div>
                </template>
                {{ item.email }}
            </el-descriptions-item>



        </el-descriptions>
    </el-card>

</template>

<script setup>
import { allContact, addContact } from "@/api/contact.js";
import { ref, onBeforeMount, computed } from "vue";
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex'
const { t, locale } = useI18n()
const contacts = ref([])
const showAddForm = ref(false)
const store = useStore()

const isLogin = computed(() => {
    return store.getters.isLogin
})

const newContact = ref({
    nameEn: "",
    nameZh: "",
    phoneNo: "",
    email: "",
})

const addNewContact = () => {
    addContact(newContact.value).then(() => {
        newContact.value = {
            nameEn: "",
            nameZh: "",
            phoneNo: "",
            email: "",
        }

        showAddForm.value = false
    })
}

onBeforeMount(() => {
    allContact().then((res) => {
        contacts.value = res.data
    })
})


</script>

<style></style>