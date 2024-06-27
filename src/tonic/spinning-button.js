import Tonic from '@nichoth/tonic'

export class SpinningButton extends Tonic {
    click (ev) {
        if (this.props.onClick) this.props.onClick(ev)
    }

    render () {
        const { isspinning, ..._props } = this.props

        return (isspinning ?
            this.html`<button
                ...${_props}
                disabled=${true}
                class="${((_props.class || '') + ' btn spinning').trim()}"
            >
                <span class="btn-content">${this.childNodes}</span>
            </button>` :
            this.html`<button
                ...${_props}
                class=${((_props.class || '') + ' btn').trim()}
            >
                <span class="btn-content">${this.childNodes}</span>
            </button>`)
    }
}

export default SpinningButton
