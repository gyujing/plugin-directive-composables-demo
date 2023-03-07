

<template>
    <h1 v-color="'red'">{{ msg }}</h1>

    <span>时间戳：{{ time }}</span
    ><br />
    <div>
        时间戳转日期指令:<span v-format-time-stamp="'YYYY-MM-DD'">{{
            time
        }}</span>
    </div>

    <div>组合式函数useMouse：Mouse position is at: {{ x }}, {{ y }}</div>
    <div>组合式函数useFormatDate：{{ formatTime }}</div>
    <van-button type="primary" @click="open">自定义插件Notify</van-button>
    <van-button type="primary" @click="open2">自定义插件Notify2</van-button>
</template>
<script setup lang="ts">
import { useMouse } from '../Composables/mouse'
import { useFormatDate } from '../Composables/formatDate'
import { ref } from 'vue'
import { showNotify } from '../plugins/index'

let msg = ref('自定义指令：字体红色')

let { x, y } = useMouse()
let { formatTime } = useFormatDate('YYYY/MM/DD')

defineProps<{ msg: string }>()

let time = ref(new Date().getTime())

let open = () => {
    showNotify({
        message: '成功',
        type: 'success'
    })
}

let open2 = () => {
    showNotify({
        message: '失败',
        type: 'warning'
    })
}
</script>
<style scoped>
.read-the-docs {
    color: #888;
}
</style>
