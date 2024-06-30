#!/usr/bin/env node
import { styleText } from 'node:util'
import { argv } from 'node:process'
import { generate } from './fast-dts'

(async () => {
  if (argv.length < 4) {
    console.log(styleText('bgGreen', 'Usage   : fast-dts <input> <output>'))
    console.log(styleText('bgGreen', 'Example : fast-dts src/index.ts dist/index.d.ts'))
  }
  else {
    const input = argv[2]
    const output = argv[3]
    await generate(input, output)
    console.log(styleText('green', `▶ Generated: ${output}`))
  }
})()
