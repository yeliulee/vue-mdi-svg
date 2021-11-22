export function getAttrs(
  _props: any,
  _attrs: any,
  _slots: any,
  isV3: boolean
): {
  spanAttrs: Record<string, any>
  svgAttrs: {
    fill: string
    width: any
    height: any
    viewBox: any
    xmlns: any
  }
  pathAttrs: {
    d: string
  }
}

export function getClasses(_props: any): {
  [key: string]: boolean
  [key: number]: boolean
  'mdi-spin': boolean
}

export function getInstaller(renderer: any): {
  install(app: any): void
}
