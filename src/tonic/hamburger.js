import { effect } from '@preact/signals'
import Tonic from '@nichoth/tonic'

export class HamburgerWrapper extends Tonic {
    willConnect () {
        let open = this.props.isopen.value
        this.dispose = effect(() => {
            if (open !== this.props.isopen.value) {
                open = this.props.isopen.value
                this.reRender()
            }
        })
    }

    disconnected () {
        this.dispose()
    }

    click (ev) {
        const el = Tonic.match(ev.target, '[data-open]')

        if (el) {
            this.props.isopen.value = !this.props.isopen.value
            this.reRender()
        }
    }

    render () {
        const cl = ('tonic hamburger-wrapper' +
            (this.props.isopen.value ? ' open' : '')).trim()

        return this.html`<div
            class="${cl}"
        >
            ${this.children}
            <hamburger-body isopen=${this.props.isopen}></hamburger-body>
        </div>`
    }
}

export default HamburgerWrapper

export class HamburgerBody extends Tonic {
    // attributeChangedCallback (name, old, newValue) {
    //     console.log('got a change -- ', name, old, newValue)
    // }

    render () {
        const { isopen } = this.props

        return (this.html`<div class="${'hamburger' + (isopen.value ? ' open' : '')}">
            <input
                type="checkbox"
                id="tonic-burger-checkbox"
                checked=${isopen.value}
            />
            <label
                class="burger"
                for="tonic-burger-checkbox"
                data-open=${true}
            >
                <button>
                    <div class="container top">
                        <div class="line top"></div>
                    </div>
                    <div class="container bottom">
                        <div class="line bottom"></div>
                    </div>
                </button>
            </label>
        </div>`)
    }
}
