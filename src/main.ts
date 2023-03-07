import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

import registerDirectives from './directives'

import { Button } from 'vant';
import 'vant/lib/index.css';
import { useFormatDate } from './Composables/formatDate'

const app = createApp(App)

app.directive('color',(el:any,bing:any)=>{
    el.style.color = bing.value;
})

registerDirectives(app)

app.use(router);
app.use(Button);

app.mount('#app')
