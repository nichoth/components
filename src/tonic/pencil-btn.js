import Tonic from '@nichoth/tonic'

export class PencilBtn extends Tonic {
    render () {
        const className = [this.props.class, 'edit-pencil'].join(' ').trim()

        return this.html`<button class="${className}" data-event="edit-pencil">
            <span role="img" aria-label="edit">✏</span>
        </button>`
    }
}
