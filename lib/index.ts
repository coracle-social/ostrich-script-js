// @ts-ignore
import * as lua from 'lua-in-js/dist/lua-in-js.cjs.js'

export const mapv = (f: (v: any) => any, o: Record<string, any>): Record<string, any> => {
  const r = {} as Record<string, any>

  for (const [k, v] of Object.entries(o)) {
    r[k] = f(v)
  }

  return r
}

export const wrap = (x: any): any => {
  if (Array.isArray(x)) {
    return new lua.Table(x.map(wrap))
  }

  if (x && typeof x === 'object') {
    return new lua.Table(mapv(wrap, x))
  }

  return x
}

export const unwrap = (x: any): any => {
  if (typeof x === 'function') {
    return (...args: any[]) => unwrap(x(...args.map(wrap))[0])
  }

  if (typeof x !== 'object' || x === null) {
    return x
  }

  if (x.numValues?.[1]) {
    return x.numValues.slice(1).map(unwrap)
  }

  if (x.strValues && Object.entries(x.strValues).length > 0) {
    return mapv(unwrap, x.strValues)
  }

  return {}
}

export const buildOstrichScript = (luaCode: string) =>
  unwrap(lua.createEnv().parse(luaCode).exec())
