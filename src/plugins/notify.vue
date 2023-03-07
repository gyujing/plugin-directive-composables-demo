<template>
    <div style="z-index: 1000">
        <van-notify v-model:show="show" :type="type" :position="position">
            <van-icon
                v-if="type == 'success'"
                name="checked"
                style="margin-right: 4px"
            />
            <van-icon
                v-else-if="type == 'warning'"
                name="warning"
                style="margin-right: 4px"
            />
            <span>{{ message }}</span>
        </van-notify>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'vant/es/notify/style'

export default defineComponent({
    name: 'CustomToast',
    props: {
        message: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'success'
        },
        position: {
            type: String,
            default: 'bottom'
        },
        duration: {
            type: Number,
            default: '2000'
        }
    },
    setup(props) {
        let show = ref(false)
        // 显示组件
        const showNotify = () => {
            show.value = true
            let timer = setTimeout(() => {
                show.value = false
                clearTimeout(timer)
            }, props.duration)
        }
        return {
            show,
            showNotify
        }
    }
})
</script>
  
<style lang="scss" scoped>
</style>
  