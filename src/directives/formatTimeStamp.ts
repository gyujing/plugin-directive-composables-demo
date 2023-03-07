import type { App } from 'vue'
import dayjs from 'dayjs'

export const formatTimeStamp = (app:App)=>{
  app.directive('formatTimeStamp',{
    created(el:any,binding:any){
        binding.formatString="YYYY-MM-DD HH:mm:ss"
        if(binding.value){
            binding.formatString=binding.value
        }
    },
    mounted(el:any,binding:any){
      const textContent= el.textContent
      let timeStamp = parseInt(textContent)
      if(timeStamp.length === 10){
        timeStamp=timeStamp*1000
      }
      el.textContent = dayjs(timeStamp).format(binding.value)
    }
  })
}