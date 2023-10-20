// import { effect } from '@preact/signals'
import Tonic from '@nichoth/tonic'

export class HamburgerWrapper extends Tonic {
    constructor () {
        super()
        console.log('thisssssss', this)
        console.log('thisssssss', Object.keys(this))
        console.log('this propsssss', this.props)
        console.log('this props', this.props)
        // let open = this.props.isopen.value
        // effect(() => {
        //     if (this.props.isopen.value !== open) {
        //         open = this.props.isopen.value
        //         this.reRender()
        //     }
        // })
    }

    click (ev) {
        const el = Tonic.match(ev.target, '[data-open]')

        if (el) {
            this.props.isopen.value = !this.props.isopen.value
            this.reRender()
        }
    }

    render () {
        console.log('this props', this.props)
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

// observedAttributes

export class HamburgerBody extends Tonic {
    static observedAttributes = [
        'isopen'
    ]

    attributeChangedCallback (name, old, newValue) {
        console.log('got a change -- ', name, old, newValue)
    }

    render () {
        const { isopen } = this.props
        console.log('rendering..........', this.props.isopen.value)

        return (this.html`<div class="${'hamburger' + (isopen.value ? ' open' : '')}">
            <input type="checkbox" id="checkbox" checked=${isopen.value} />
            <label
                class="burger"
                for="checkbox"
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
