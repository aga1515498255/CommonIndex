<template>
      <ul class="nav-list">
            <li v-for="route in routes" v-show="route.hidden == false">
                  <RouterLink :to="route.path" ><el-text  class="mx-1 "> {{t("navigatorBar."+route.name)}}</el-text></RouterLink>
            </li>
      </ul>

    <!-- <el-row align="middle" >
        <el-col :span="2" v-for="route in constantRoutes" class="route-link">
            <RouterLink :to="route.path" >
                <el-text  class="mx-1 "> {{t("navigatorBar."+route.name)}}</el-text>
              </RouterLink>
        </el-col>
    </el-row> -->
</template>
<script setup>
// import {constantRoutes} from '../../../router'
import { RouterLink} from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { computed } from 'vue';

const {t}  = useI18n()
const store = useStore()
let routes = computed(()=>{
      return store.getters.routes
}) 
console.log("routes is ",routes)

</script>

<style scoped>

.nav-list{
      list-style-type: none;

      margin:0; 
}

.nav-list li{
      float:left;
      margin: 0 10px;
}

.route-link{
  
    text-align:center;
}


a:link {
      text-decoration: none;
}

a:visited {
      text-decoration: none;
}

a:hover {
      text-decoration: none;
}

a:active {
      text-decoration: none;
}

</style>