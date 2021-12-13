import { DefineComponent } from 'vue'
import { props } from './src/props'

declare module 'vue' {
  export interface GlobalComponents {
    MdiSvg: DefineComponent<typeof props>
  }
}
