# components
A collection of UI components made with [preact](https://www.npmjs.com/package/preact) and [tonic](https://tonicframework.dev/).

## install
```
npm i -S @nichoth/components
```

## use
I recommend using this with [vite](https://www.npmjs.com/package/vite) + ESM, because it is easy. These are [preact](https://www.npmjs.com/package/preact) and [tonic](https://tonicframework.dev/) components; you will need to install `preact` or `tonic`.

The `preact` version is recommended, because some of the animations do not work well in the `tonic` version. In particular the `radio-group`, and `hamburger` components do not work well.

## API

### Button
```js
import { Button } from '@nichoth/components/preact/button'

<Button
    isSpinning={resolving}
    onClick={clicker}
>
    example
</Button>
```

### CopyBtn
```jsx
import { CopyBtn } from '@nichoth/components/preact/copy-btn'

<CopyBtn payload="copying things">copy</CopyBtn>
```

### CopyIconBtn
```js
import { CopyIconBtn } from '@nicohoth/components/preact/copy-icon-btn'
// ...
<span>
    Copy this text
    <CopyIconBtn payload="copy this text" />
</span>
```

### Editable Field
```js
import { EditableField } from '@nichoth/components/preact/editable-field'
// ...
<EditableField
    name="editable-field"
    value="edit this"
    onSave={saver}
/>
```

### TextInput
```js
import { TextInput } from '@nichoth/components/preact/text-input'
// ...
<form className="example-form">
    <TextInput name="text" displayName="Input test" />
</form>
```

### PencilBtn
```js
import { PencilBtn } from '@nichoth/components/preact/pencil-btn'
<PencilBtn onClick={(ev) => {
    // we are passed a `click` event
    ev.preventDefault()
    console.log('click')
}} />
```

### RadioGroup
```js
import { RadioGroup } from '@nichoth/components/preact/radio-group'
<RadioGroup
    name="test-radio"
    legend="testing radio group"
    options={['aaa', 'bbb', 'ccc']}
    required={true}
/>
```

### NumberInput
```js
import { NumberInput } from '@nichoth/components/preact/number-input'

const count = useSignal(3)
// ...
<NumberInput
    min={0}
    max={7}
    name="test-input"
    value={count}
    onIncrease={() => {
        console.log('increase')
    }}
    onDecrease={() => {
        console.log('decrease')
    }}
/>
```

### ReactiveForm
A `form` element that uses HTML attributes to check validity, and enables or
disables the submit button as appropriate.

```js
import { ReactiveForm } from '@nichoth/components/preact/reactive-form'

<ReactiveForm
    onSubmit={async (ev:SubmitEvent) => {
        ev.preventDefault()
        const text = ((ev.target as HTMLFormElement)
            .elements
            .namedItem('text') as HTMLInputElement)

        await sleep(2000)

        console.log('resolved...', text.value)
    }}
>
    <TextInput
        required={true}
        displayName="text input"
        name="text"
    />
</ReactiveForm>
```

## example

[See a live demo](https://nichoth.github.io/components/)

```js
import { render } from 'preact'
import { useSignal } from '@preact/signals'
import HamburgerWrapper from '@nichoth/components/preact/hamburger'
import MobileNav from '@nichoth/components/preact/mobile-nav-menu'
import { CopyBtn, CopyIconBtn } from '@nichoth/components/preact/copy-btn'
import '@nichoth/components/copy-btn.css'
import '@nichoth/components/hamburger.css'
import '@nichoth/components/mobile-nav-menu.css'
import '@nichoth/components/z-index.css'

const App = function App () {
    const isOpen = useSignal(false)

    function mobileNavHandler (ev) {
        ev.preventDefault()
        isOpen.value = !isOpen.value
    }

    return <div class="app">
        <HamburgerWrapper isOpen={isOpen} onClick={mobileNavHandler} />
        <MobileNav isOpen={isOpen}>
            <a href="/baloney">baloney</a>
            <a href="/test">testing</a>
        <//>

        <CopyBtn payload="hurray">copy something</CopyBtn>

        <p>Copy this <CopyIconBtn payload="Copy this" /></p>
    </div>
}

const el = document.getElementById('root')
if (el) render(<App />, el)
```

### css
We look for a css variable `--hamburger-color`, or by default use a black color.

```css
/* in your css file */
:root {
    --hamburger-color: #FAFAFA;
}
```
