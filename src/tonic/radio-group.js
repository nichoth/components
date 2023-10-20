import Tonic from '@nichoth/tonic'
import kebabCase from 'just-kebab-case'

/**
 * {
 *   name:string,
 *   legend:string,
 *   options:string[],
 *   required?:boolean
 * }
 */
export class RadioGroup extends Tonic {
    state = { index: null }

    click (ev) {
        const el = Tonic.match(ev.target, '[data-index]')
        if (!el) return
        const i = parseInt(el.dataset.index)
        this.state.index = i
        this.reRender()
    }

    render () {
        return this.html`<fieldset class="form-group radios">
            <legend>${this.props.legend}</legend>

            ${this.props.options.map((opt, i) => {
                return this.html`<label class="radio-input">
                    <input
                        ${this.state.index === i ? 'checked' : ''}
                        data-index=${'' + i}
                        type="radio"
                        name=${this.props.name}
                        ${this.props.required ? 'required' : ''}
                        value=${kebabCase(opt)}
                    >
                    ${opt}
                </label>`
            })}
        </fieldset>`
    }
}
