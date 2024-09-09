<template>
    <div>
        Home
    </div>
</template>

<script setup lang="ts">
// 测试接口请求
import $api from 'Plugins/axios'
// 测试接口请求
import { $authLogin } from 'API/user' // 这里记得配置路径映射别名
$authLogin({
    username: 'test',
    password: 'test',
}).then((res) => {
    console.log(res)
})

$api({
    url: window.location.href,
    method: 'get',
}).then((res) => {
    console.log(res)
})
// 测试Store
import useUserStore from 'Store/modules/user'
const userStore = useUserStore()

console.log(userStore.username)

userStore.authLogin().then((res) => {
    console.log(res)
})

</script>
