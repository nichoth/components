import Tonic from '@nichoth/tonic'

export class MobileNav extends Tonic {
    click () {
        this.props.isopen.value = false
    }

    render () {
        console.log('render nav menu', this.props)
        const className = 'mobile-nav-list' + (this.props.isopen.value ?
            ' open' :
            ' closed')

        /* eslint-disable */
        return this.html`<div class="${className}">
            <ul>
                ${this.children && Array.from(this.children).map((el) => {
                    return this.html`<li>${el}</li>`
                })}
            </ul>
        </div>`
        /* eslint-enable */
    }
}

export default MobileNav
