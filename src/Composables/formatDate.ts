// formatDate.ts
import { ref } from 'vue'
import dayjs from 'dayjs';

// 按照惯例，组合式函数名以“use”开头
export function useFormatDate(format:string) {
  // 被组合式函数封装和管理的状态
  let formatTime = ref("")
 

  // 组合式函数可以随时更改其状态。
  function formatFun() {
    formatTime.value = dayjs().format(format)
  }

  formatFun()

  // 通过返回值暴露所管理的状态
  return {formatTime}
}