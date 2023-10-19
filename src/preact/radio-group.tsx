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
    const { name, options, legend, required, id } = props

    return (<fieldset className="form-group radios">
        <legend>{legend}</legend>

        {options.map((opt, i) => {
            return (<label key={i} className="radio-input">
                <input type="radio" name={name} required={required} id={id}
                    value={kebabCase(opt)}
                />
                {opt}
            </label>)
        })}
    </fieldset>)
}
