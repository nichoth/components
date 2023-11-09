import Tonic from '@nichoth/tonic'

export class WavyHr extends Tonic {
    render () {
        const className = [this.props.class, 'wavy-hr'].join(' ').trim()

        return this.html`<hr class="${className}" />`
    }
}
