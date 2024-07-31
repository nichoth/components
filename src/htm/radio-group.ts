import { html } from 'htm/preact'
import { FunctionComponent } from 'preact'
import kebabCase from 'just-kebab-case'

interface Props {
    id?:string
    name:string
    legend:string
    options:string[]
    required:boolean
}

export const RadioGroup:FunctionComponent<Props> = function (props) {
    const { name, options, legend, required } = props

    return html`<fieldset className="form-group radios" id=${props.id}>
        <legend>${legend}</legend>

        ${options.map((opt, i) => {
            return (html`<label key=${i} className="radio-input">
                <input type="radio" name=${name} required=${required}
                    value=${kebabCase(opt)}
                ><//>
                ${opt}
            </label>`)
        })}

    </fieldset>`
}
