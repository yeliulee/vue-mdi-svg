import { h } from 'vue'
import { getAttrs, getClasses, getInstaller } from './src/shared'

const renderV3 = () =>
  function render() {
    const { spanAttrs, svgAttrs, pathAttrs } = getAttrs(this, this.$attrs, this.$slots)

    return h(
      'span',
      {
        ...spanAttrs,
        class: getClasses(this, this),
      },
      [h('svg', svgAttrs, [...[this.title ? h('title', this.title) : undefined], h('path', pathAttrs)])]
    )
  }

export default getInstaller(renderV3)
