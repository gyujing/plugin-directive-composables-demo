import type { App } from 'vue'
import {formatTimeStamp} from './formatTimeStamp'

export default function directive(app:App){
    formatTimeStamp(app)
}