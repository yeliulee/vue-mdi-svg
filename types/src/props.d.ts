export namespace props {
  const title: StringConstructor[]
  const width: (StringConstructor | NumberConstructor)[]
  const height: (StringConstructor | NumberConstructor)[]
  const ariaLabel: StringConstructor[]
  namespace path {
    const type: StringConstructor
    const reuired: boolean
  }
  namespace size {
    const _type: (StringConstructor | NumberConstructor)[]
    export { _type as type }
    const _default: number
    export { _default as default }
  }
  namespace viewBox {
    const _type: StringConstructor
    export { _type as type }
    const _default: string
    export { _default as default }
  }
  namespace xmlns {
    const _type: StringConstructor
    export { _type as type }
    const _default: string
    export { _default as default }
  }
  namespace role {
    const _type: StringConstructor
    export { _type as type }
    const _default: string
    export { _default as default }
  }
  namespace spin {
    const _type: BooleanConstructor
    export { _type as type }
    const _default: boolean
    export { _default as default }
  }
}
