import { html } from 'htm/preact'
import { FunctionComponent } from 'preact'
import kebabCase from 'just-kebab-case'

interface Props {
    id?:string
    class?:string
    name:string
    legend:string
    options:string[]
    required:boolean
}

export const RadioGroup:FunctionComponent<Props> = function (props) {
    const { class: className, name, options, legend, required, id } = props

    const classes = [className, 'form-group', 'radios']
        .filter(Boolean)
        .map(name => name.trim())
        .join(' ')

    return html`<fieldset class="${classes}" id=${id}>
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
