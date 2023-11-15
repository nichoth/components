import Tonic from '@nichoth/tonic'

/**
 * @TODO
 */
export class AccordionElement extends Tonic {
    render () {
        return this.html`<details>
            <summary>
                <plus-icon></plus-icon>
                ${this.children[0].textContent}
            </summary>
        </details>`
    }
}

/**
 * An accordion using `details` and `summary`
 *
 * @param {JSX.HTMLAttributes<HTMLDetailsElement>} props
 * @returns {FunctionComponent}
 */
// export const Accordion:FunctionComponent<
//     JSX.HTMLAttributes<HTMLDetailsElement>
// > = function (props) {
//     const children = toChildArray(props.children)

//     // add an `img` tag into the `summary` element (the first child tag)
//     return html`<details href=${props.href}>
//         ${children.map((child, i) => {
//             return (i === 0 ?
//                 html`<summary>
//                     <${PlusIcon} />
//                     ${getNodeText(child)}
//                 <//>` :
//                 child
//             )
//         })}
//     </details>`
// }

// // function getNodeText (node):string {
// //     if (node == null) return ''

// //     switch (typeof node) {
// //     case 'string':
// //     case 'number':
// //         return node.toString()

// //     case 'boolean':
// //         return ''

// //     case 'object': {
// //         if (node instanceof Array) { return node.map(getNodeText).join('') }

// //         if ('props' in node) { return getNodeText(node.props.children) }
// //     } // eslint-ignore-line no-fallthrough

// //     default:
// //         console.warn('Unresolved `node` of type:', typeof node, node)
// //         return ''
// //     }
// // }
