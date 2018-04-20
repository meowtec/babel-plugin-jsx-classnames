import { transform } from '@babel/core'
import jsxClassNames from '../src'

function apply(code) {
  return transform(code, { plugins: [jsxClassNames] })
}

describe('babel-plugin-jsx-classnames', () => {
  it('ignores non-className props', () => {
    apply(`<div anotherProp="a" />`)
  })

  it('ignores string-literal className prop', () => {
    apply(`<div className="a" />`)
  })

  it('wraps className prop within classNames', () => {
    apply(`<div className="a" />`)
  })

  it('wraps className prop within classNames', () => {
    apply(`<div className="a" />`)
  })
})
