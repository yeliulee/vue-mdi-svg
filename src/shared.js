import './mdi-icons.css'
import { props } from './props'

const getChildrenTextContent = function (children) {
  return children
    .map(function (node) {
      return node.children ? getChildrenTextContent(node.children) : node.text
    })
    .join('')
}

export const getAttrs = (_props, _attrs, _slots, isV3 = true) => {
  const spanAttrs = {
    role: _props.role,
    'aria-label': _props.ariaLabel,
    ..._attrs,
  }

  const svgAttrs = {
    fill: 'currentColor',
    width: _props.width || _props.size,
    height: _props.height || _props.size,
    viewBox: _props.viewBox,
    xmlns: _props.xmlns,
  }

  const pathAttrs = {
    d: isV3
      ? !!_slots.default
        ? _slots.default()[0].children
        : _props.path
      : !!_slots
      ? getChildrenTextContent(_slots)
      : _props.path,
  }

  return {
    spanAttrs,
    svgAttrs,
    pathAttrs,
  }
}

export const getClasses = (_props, _data) => ({
  mdi: true,
  [_data.class || '']: true,
  'mdi-spin': _props.spin === true,
})

export const getInstaller = (renderer, versionDependentOpts = {}) => ({
  install(app) {
    app.component('MdiSvg', {
      name: 'MdiSvg',
      props,
      ...versionDependentOpts,
      render: renderer(),
    })
  },
})
