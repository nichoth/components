import glob from 'glob'
import fs from 'node:fs'
import esbuild from 'esbuild'
import path from 'node:path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// js
glob('src/*.mjs', async (err, files) => {
    if (err) throw err
    if (!files || !files.length) return

    // build .mjs files to cjs
    await Promise.all(files.map(file => {
        const baseFile = path.basename(file, '.mjs')
        const target = path.join(__dirname, 'dist')

        return Promise.all([
            // copy .mjs to dist
            fs.promises.copyFile(
                file,
                path.join(target, `${baseFile}.mjs`)
            ),

            // build cjs format
            esbuild.build({
                entryPoints: [file],
                bundle: false,
                keepNames: true,
                minify: false,
                define: { global: 'window' },
                sourcemap: 'inline',
                format: 'cjs',
                outfile: path.join(target, `${baseFile}.cjs`),
                platform: 'browser'
            })
        ])
    }))
})

glob('src/*.ts', async (err, files) => {
    if (err) throw err
    if (!files || !files.length) return

    await Promise.all(files.map(file => {
        const baseFile = path.basename(file)
        const target = path.join(__dirname, 'dist', baseFile)

        // copy .ts to dist
        return fs.promises.copyFile(file, target)
    }))
})

// css
glob('src/*.css', async (err, files) => {
    if (err) throw err
    if (!files || !files.length) return

    await Promise.all(files.map(file => {
        return fs.promises.copyFile(
            file,
            path.join(__dirname, 'dist', path.basename(file))
        )
    }))
})
