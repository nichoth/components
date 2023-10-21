# components
A collection of UI components made with [preact](https://www.npmjs.com/package/preact) and [tonic](https://tonicframework.dev/).


## install
```
npm i -S @nichoth/components
```


## use
I recommend using this with [vite](https://www.npmjs.com/package/vite) + ESM, because it is easy. These are [preact](https://www.npmjs.com/package/preact) and [tonic](https://tonicframework.dev/) components; you will need to install `preact` or `tonic`.

The `preact` version is recommended, because some of the animations do not work well in the `tonic` version. In particular the `radio-group`, and `hamburger` components do not work well.

### ESM
```js
import { Hamburger } from '@nichoth/components/preact/hamburger.jsx'
import '@nichoth/hamburger.css'
```

## example
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
