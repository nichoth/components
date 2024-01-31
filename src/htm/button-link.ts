import { html } from 'htm/preact'
import { FunctionComponent } from 'preact'
import { HTMLAttributes } from 'preact/compat'

/**
 * A link that looks like a button
 *
 * @param {HTMLAttributes<HTMLAnchorElement>} props
 * @returns {FunctionComponent}
 */
export const ButtonLink:FunctionComponent<
    HTMLAttributes<HTMLAnchorElement>
> = function (props) {
    const className = [props.class, 'btn-link'].join(' ').trim()
    return html`<a href=${props.href} class=${className}>${props.children}</a>`
}
