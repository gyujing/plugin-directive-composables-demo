import { createApp } from 'vue';
import CustomToast from './notify.vue';
import vant from 'vant';


interface ToastOptions {
    message: string;
    duration?: number;
    position?: 'top' | 'bottom';
    type?: 'default' | 'success' | 'fail'
}
export enum TYPE {
    default = 'default',
    success = 'success',
    fail = 'fail'
}

// 显示提示框
export const showNotify = ({ message, duration , position = 'top', type = 'default' }: ToastOptions) => {
    const app = createApp(CustomToast, {
        message,
        duration,
        position,
        type
    });
    app.use(vant);
    const mountNode = document.createElement('div');
    document.body.appendChild(mountNode)
    const instance = app.mount(mountNode);
    (instance as any).showNotify();
};
