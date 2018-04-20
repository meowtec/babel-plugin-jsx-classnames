import jsx from '@babel/plugin-syntax-jsx'
import { addDefault } from '@babel/helper-module-imports'

export default function({ types: t }) {
  let classNamesImport

  return {
    inherits: jsx,
    visitor: {
      JSXAttribute(path) {
        if (
          t.isJSXIdentifier(path.node.name, { name: 'className' }) &&
          t.isJSXExpressionContainer(path.node.value) &&
          !t.isStringLiteral(path.node.value.expression)
        ) {
          if (!classNamesImport) {
            classNamesImport = addDefault(path, 'classnames', {
              nameHint: 'classNames',
            })
          }
          path.node.value = t.JSXExpressionContainer(
            t.callExpression(classNamesImport, [path.node.value.expression]),
          )
        }
      },
    },
  }
}
