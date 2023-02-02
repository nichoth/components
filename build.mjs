import glob from 'glob'
import fs from 'node:fs'
import esbuild from 'esbuild'
import path from 'node:path'
import { fileURLToPath } from 'url'
import { mkdirp } from 'mkdirp'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// build .mjs files to cjs
glob('src/*.mjs', async (err, files) => {
    if (err) throw err
    if (!files || !files.length) return

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

// build *.ts files
glob('src/*.ts', async (err, files) => {
    if (err) throw err
    if (!files || !files.length) return

    await mkdirp(path.join(__dirname, 'dist', 'ts'))

    // copy *.ts to dist/ts/*
    await Promise.all(files.map(async file => {
        const target = path.join(__dirname, 'dist', 'ts')
        return fs.promises.copyFile(
            file,
            path.join(target, path.basename(file))
        )
    }))

    // build *.ts files to .cjs output
    await Promise.all(files.map(async file => {
        const baseFile = path.basename(file, '.ts')
        const target = path.join(__dirname, 'dist')

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
