# Material Design Svg Icons for Vue.js 

Library to render Material Design Svg Icons in Vue.js

Never mind the project name, you can actually use any monochrome svg icon(like Font Awesome Svg).

:book: [Doc for Simplified Chinese][2]

## Setup

Here we use `@mdi/js` as an example

```
yarn add @mdi/js @yeliulee/vue-mdi-svg
# OR
npm install @mdi/js @yeliulee/vue-mdi-svg
```


## Example

For better **Tree Shaking Optimization**, you have to import icons by your self

If you want to import all icons to your apps, please refer to **[mdi-vue][0]**

(Recommended to build your Vue.js App with **[Vite][3]**)

**For Vue 2**

```html
// main.[js|ts] According to your project
import Vue from 'vue';
import MdiSvg from "@yeliulee/vue-mdi-svg/v2"
import App from './App.vue';

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

```html
// main.[js|ts] According to your project
import { createApp } from 'vue'
import MdiSvg from "@yeliulee/vue-mdi-svg/v3" // or just "@yeliulee/vue-mdi-svg"
import App from './App.vue' // According to your code

const app = createApp(App)
app.use(MdiSvg)
// etc...


// demo.vue [same as vue2 without setup syntax]
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

both Nuxt.js 2 / 3 support Vue plugins, please read the corresponding documentation



## Props

**path(optional)**

The path of Svg, it won't work if slot is used

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

The description of svg.

**size(numeric or string; default: 24)**

The width and height of the icon, it will work if no `width` or `height` is provided

```html
<MdiSvg :size="48"> {{ your icon }} </MdiSvg>

<MdiSvg :width="16" :height="16"> {{ your icon }} </MdiSvg>
```

**width**

The width of the icon

**height**

The height of the icon

**viewBox**

The viewbox of the svg icon

**spin**

Apply a spin/rotate animation to the icon

```html
<MdiSvg spin> {{ your icon }} </MdiSvg>
<MdiSvg :spin="true"> {{ your icon }} </MdiSvg>
```

## Credits

This libray is based on [mdi-vue][0], thanks to [@therufa][1] and all [mdi-vue][0]'s contributors


[0]: https://github.com/therufa/mdi-vue
[1]: https://github.com/therufa
[2]: README.zh-CN.md
[3]: https://vitejs.dev/