import { effect } from '@preact/signals'
import Tonic from '@nichoth/tonic'

export class MobileNav extends Tonic {
    click () {
        this.props.isopen.value = false
    }

    willConnect () {
        let open = this.props.isopen.value

        this.dispose = effect(() => {
            if (this.props.isopen.value !== open) {
                open = this.props.isopen.value
                this.reRender()
            }
        })
    }

    disconnected () {
        this.dispose()
    }

    render () {
        console.log('render nav menu', this.props)
        const className = 'mobile-nav-list' + (this.props.isopen.value ?
            ' open' :
            ' closed')

        /* eslint-disable */
        return this.html`<div class="${className}">
            <ul>
                ${this.children}
            </ul>
        </div>`
        /* eslint-enable */
    }
}

export default MobileNav
