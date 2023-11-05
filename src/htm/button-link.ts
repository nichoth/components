import { html } from 'htm/preact'
import { FunctionComponent, JSX } from 'preact'

/**
 * A link that looks like a button
 *
 * @param {JSX.HTMLAttributes<HTMLAnchorElement>} props
 * @returns {FunctionComponent}
 */
export const ButtonLink:FunctionComponent<
    JSX.HTMLAttributes<HTMLAnchorElement>
> = function (props) {
    const className = [props.class, 'btn-link'].join(' ').trim()
    return html`<a href=${props.href} class=${className}>${props.children}</a>`
}
