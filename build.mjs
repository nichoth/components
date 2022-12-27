import glob from 'glob'
import esbuild from 'esbuild'
import path from 'node:path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

glob('src/*.mjs', async (err, files) => {
    if (err) return console.log('errr', err)
    if (!files || !files.length) return

    await Promise.all(files.map(file => {
        const baseFile = path.basename(file, '.mjs')
        const target = path.join(__dirname, 'dist', baseFile)

        return Promise.all([
            esbuild.build({
                entryPoints: [file],
                bundle: false,
                keepNames: true,
                minify: false,
                define: { global: 'window' },
                sourcemap: 'inline',
                format: 'esm',
                outfile: path.join(target, baseFile + '.mjs'),
                platform: 'browser'
            }),

            esbuild.build({
                entryPoints: [file],
                bundle: false,
                keepNames: true,
                minify: false,
                define: { global: 'window' },
                sourcemap: 'inline',
                format: 'cjs',
                outfile: path.join(target, baseFile + '.cjs'),
                platform: 'browser'
            })
        ])
    }))
})
