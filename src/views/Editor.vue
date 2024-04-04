<template>
  <el-card>
    <el-col>
      <el-row>
        <el-col>
          <el-row justify="space-between">
            文章标题中文
            <el-button type="success" :class="save_button" @click="saveArticle">保存</el-button>
          </el-row>
          <el-row><el-input v-model="tittleZh" placeholder="Please input" /></el-row>
          <el-row justify="space-between">
            文章标题英文
          </el-row>
          <el-row><el-input v-model="tittleEn" placeholder="Please input" /></el-row>
          <el-row justify="space-between">
            中文简介
          </el-row>
          <el-row> <el-input v-model="breifZh" :rows="2" type="textarea" placeholder="Please input" /></el-row>

          <el-row justify="space-between">
            英文简介
          </el-row>
          <el-row> <el-input v-model="breifEn" :rows="2" type="textarea" placeholder="Please input" /></el-row>
          <el-row>文章封面</el-row>
          <el-row>
            <el-upload name="image" :headers="uploadHeaders" class="avatar-uploader" v-bind:action="uploadAPI"
              :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon">
                <Plus />
              </el-icon>
            </el-upload>
          </el-row>
        </el-col>
      </el-row>
      <el-row>中文正文</el-row>
      <el-row>
        <MdEditor v-model="contentZh" @onUploadImg="onUploadImg1" editorId="contentZh" />
      </el-row>
      <el-row>英文正文</el-row>
      <el-row>
        <MdEditor v-model="contentEn" @onUploadImg="onUploadImg1" editorId="contentEn" />
      </el-row>
    </el-col>
  </el-card>



</template>

<script>
import { defineComponent, ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import axios, { Axios } from "axios"
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { createArticle } from "@/api/article.js"
const contentZh = ref("# 这是标题")
const contentEn = ref("# 这是标题")

const uploadURL = import.meta.env.VITE_BACKEND_PREFIX + '/image/upload'



const onUploadImg1 = async (files, callback) => {
  const res = await Promise.all(
    files.map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('image', file);


        console.log(form)

        axios
          .post(uploadURL, form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => {
            console.log(res)
            let url = res.data.data.url
            rev(res)
          })
          .catch((error) => rej(error));
      });
    })
  );



  console.log(res)
  console.log("in onUploadImg2 callback is ", callback)
  callback(res.map((item) => import.meta.env.VITE_BACKEND_PREFIX + item.data.data.url));
}

const onUploadImg2 = async (files, callback) => {
  const res = await Promise.all(
    files.map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('image', file);


        axios
          .post(uploadURL, form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => {
            console.log(res)
            let url = res.data.data.url
            rev(res)
          })
          .catch((error) => rej(error));
      });
    })
  );

  console.log(res)
  console.log("in onUploadImg2 callback is ", callback)
  callback(res.map((item) => import.meta.env.VITE_BACKEND_PREFIX + item.data.data.url));
};

export default defineComponent({
  name: "App",
  components: {
    MdEditor,
    Plus
  },
  data() {
    return {
      contentZh,
      contentEn,
      uploadAPI: import.meta.env.VITE_BACKEND_PREFIX + '/image/upload',
      uploadHeaders: {
        Authorization: axios.defaults.headers.common['Authorization']
      },
      imageUrl: null,
      tittleEn: null,
      tittleZh: null,
      breifZh: "",
      breifEn: "",
    };
  },
  methods: {
    onUploadImg1,
    // onUploadImg2,
    handleAvatarSuccess(
      response,
      uploadFile,

    ) {
      console.log("res is:" + response)
      console.log(response)

      console.log("uploadFile is:" + uploadFile)
      this.imageUrl = import.meta.env.VITE_BACKEND_PREFIX + response.data.url
    },
    saveArticle() {

      const article = {
        tittleEn: this.tittleEn,
        tittleZh: this.tittleZh,
        cover: this.imageUrl,
        contentZh: this.contentZh,
        contentEn: this.contentEn,
        breifEn: this.breifEn,
        breifZh: this.breifZh,
      }


      createArticle(article).then((res) => {
        ElNotification({
          title: 'Success',
          message: 'Success to save',
          type: 'success',
        })
      })

      // axios.post(import.meta.env.VITE_BACKEND_PREFIX + "/article/create", article)
      //   .then(
      //     (rev) => {
      //       // console.log(rev)
      //       ElNotification({
      //         title: 'Success',
      //         message: 'Success to save',
      //         type: 'success',
      //       })
      //     },
      //     (rej) => {
      //       // console.log(rej)
      //     })
    }
  }
});

</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}


.save_button {
  float: right;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}
</style>