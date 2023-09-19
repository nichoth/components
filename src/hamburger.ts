import { html } from 'htm/preact'

export function HamburgerWrapper (props:{ children?, onClick, isOpen }) {
    const { children, onClick, isOpen } = props
    return html`<div class="hamburger-wrapper${isOpen.value ? ' open' : ''}">
        ${children}
        <${Hamburger} isOpen=${isOpen} onClick=${onClick} />
    </div>`
}

export default HamburgerWrapper

export function Hamburger ({ onClick, isOpen }) {
    return html`<div class="hamburger${isOpen.value ? ' open' : ''}">
        <input type="checkbox" id="checkbox" checked=${isOpen} />
        <label class="burger" for="checkbox" onclick=${onClick}>
            <button onclick=${onClick}>
                <div class="container top">
                    <div class="line top"></div>
                </div>
                <div class="container bottom">
                    <div class="line bottom"></div>
                </div>
            </button>
        </label>
    </div>`
}
