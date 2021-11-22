# Material Design Svg Icons for Vue.js 

本插件用于在 Vue 中展示 Material Design Svg 图标

不过别在意名称，实际上可以用于任意得单色 svg 图标 (如 Font Awesome Svg)

:book: [Doc for English][2]

## 安装

以下使用 `@mdi/js` 作为示例

```
yarn add @mdi/js @yeliulee/vue-mdi-svg
# OR
npm install @mdi/js @yeliulee/vue-mdi-svg
```


## 示例

为了更好地适配 Tree Shaking，我们需要自行 import 所需的图标

如果你想一次性导入所有图标, 可以尝试使用 **[mdi-vue][0]**

(建议使用 Vite 构建你的 Vue.js App)

**For Vue 2**

```javascript
// main.[js|ts] 根据你的实际项目
import Vue from 'vue';
import MdiSvg from "@yeliulee/vue-mdi-svg/v2"
import App from './App.vue'; // 根据你的实际项目

Vue.use(MdiSvg);


// demo.vue
<template>
  <div>
    <MdiSvg> {{ mdiAccount }} </MdiSvg>
  </div>
</template>

<script>
import { mdiAccount } from "@mdi/js"
export default {
  data: () => ({
    mdiAccount
  })
}
</script>
```

**For Vue 3**

```javascript
// main.[js|ts] 根据你的实际项目
import { createApp } from 'vue'
import MdiSvg from "@yeliulee/vue-mdi-svg/v3" // 或直接 "@yeliulee/vue-mdi-svg"
import App from './App.vue' // 根据你的实际项目

const app = createApp(App)
app.use(MdiSvg)
// etc...


// demo.vue [若不使用 setup 语法则与 vue2 一致]
<template>
  <div>
    <MdiSvg>{{ mdiWechat }} </MdiSvg>
  </div>
</template>

<script setup lang="ts">
import { mdiWechat } from '@mdi/js'
</script>
```


## Nuxt.js 2 / 3

Nuxt.js 2 / 3 均支持安装 Vue 插件，请自行阅读相对应的文档


## 属性

**path(optional)**

svg 图标的 `path` 子元素的 `d` 属性

```html
<template>
  <div>
    <MdiSvg :path="mdiReact" />
  </div>
</template>

<script setup lang="ts">
import { mdiReact } from '@mdi/js'
</script>
```

**title**

svg 图标的描述性字符串

**size(numeric or string; default: 24)**

图标的宽度和高度，以便于在未设置 `width` 或 `height` 属性时提供宽高

```
<MdiSvg :size="48"> {{ your icon }} </MdiSvg>

<MdiSvg :width="16" :height="16"> {{ your icon }} </MdiSvg>
```

**width**

图标的宽度

**height**

图标的高度

**viewBox**

图标的 viewBox

**spin**

给图标添加一个旋转动画

```html
<MdiSvg spin> {{ your icon }} </MdiSvg>
<MdiSvg :spin="true"> {{ your icon }} </MdiSvg>
```

## 开源授权

本项目基于 [mdi-vue][0], 感谢 [@therufa][1] 以及 [mdi-vue][0] 的所有贡献者


[0]: https://github.com/therufa/mdi-vue
[1]: https://github.com/therufa
[2]: README.md