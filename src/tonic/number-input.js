import Tonic from '@nichoth/tonic'

export class NumberInput extends Tonic {
    click (ev) {
        const inc = Tonic.match(ev.target, '[data-event="increase"]')
        if (inc) {
            ev.preventDefault()
            this.props.onIncrease && this.props.onIncrease()
            return
        }

        const dec = Tonic.match(ev.target, '[data-event="decrease"]')
        if (dec) {
            ev.preventDefault()
            this.props.onDecrease && this.props.onDecrease()
        }
    }

    render () {
        const { name, min, max, value } = this.props

        return this.html`<div class="input-group-number">
            <input type="number" inputMode="numeric"
                pattern="[0-9]*"
                max=${max}
                min=${min}
                value=${value}
                name=${name}
            />

            <div class="number-nav">
                <div class="number-button number-up">
                    <button data-event="increase">+</button>
                </div>

                <div class="number-button number-down">
                    <button data-event="decrease">-</button>
                </div>
            </div>
        </div>`
    }
}
