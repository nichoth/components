import Tonic from '@nichoth/tonic'
import { effect } from '@preact/signals'

/**
 * props
 * - onIncrease?:()=>any
 * - onDecrease?:()=>any
 * - value:Signal<number>
 * - min:number
 * - max:number
 * - name:string
 */
export class NumberInput extends Tonic {
    click (ev) {
        const inc = Tonic.match(ev.target, '[data-event="increase"]')
        if (inc) {
            ev.preventDefault()
            if (parseInt(this.props.value.value) >= parseInt(this.props.max)) {
                this.props.value.value = parseInt(this.props.max)
                return
            }
            this.props.onIncrease && this.props.onIncrease()
            this.props.value.value = this.props.value.value + 1
            return
        }

        const dec = Tonic.match(ev.target, '[data-event="decrease"]')
        if (dec) {
            ev.preventDefault()
            if (parseInt(this.props.value.value) <= parseInt(this.props.min)) {
                this.props.value.value = parseInt(this.props.min)
                return
            }

            this.props.value.value = this.props.value.value - 1
            this.props.onDecrease && this.props.onDecrease()
        }
    }

    willConnect () {
        const { value } = this.props
        let count = this.props.value.value
        this.dispose = effect(() => {
            if (value.value !== count) {
                count = value.value
                this.reRender()
            }
        })
    }

    disconnected () {
        this.dispose()
    }

    render () {
        const { name, min, max } = this.props

        return this.html`<div class="input-group-number">
            <input type="number" inputMode="numeric"
                pattern="[0-9]*"
                max=${'' + max}
                min=${'' + min}
                value=${'' + this.props.value.value}
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
