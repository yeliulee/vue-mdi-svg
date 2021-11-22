import { getAttrs, getClasses, getInstaller } from './src/shared.js'

const renderV2 = () =>
  function render(h, { data, props, attrs, children }) {
    const { spanAttrs, svgAttrs, pathAttrs } = getAttrs(props, attrs, children, false)

    return h(
      'span',
      {
        attrs: spanAttrs,
        class: {
          ...getClasses(props, data),
          ...data.class,
        },
      },
      [
        h(
          'svg',
          {
            attrs: svgAttrs,
          },
          [
            ...[props.title ? h('title', [props.title]) : undefined],
            h('path', {
              attrs: pathAttrs,
            }),
          ]
        ),
      ]
    )
  }

export default getInstaller(renderV2, {
  functional: true,
})
