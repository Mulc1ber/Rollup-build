import babel from '@rollup/plugin-babel'
import styles from 'rollup-plugin-styles'
import image from '@rollup/plugin-image'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
    input: './index.js',
    output: {
        file: './build/bundle.js',
        format: 'cjs'
    },
    plugins: [
        // resolve(),
        babel({babelHelpers: 'bundled'}),
        styles(),
        image(),
        serve({ open: true }),
        livereload()
    ]
}
