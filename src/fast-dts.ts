import { parse } from 'node:path'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { isolatedDeclaration } from 'oxc-transform'

export async function generate(input: string, output: string): Promise<void> {
  const text = await readFile(input, 'utf8')
  const code = isolatedDeclaration(input, text)
  const dir = parse(output).dir
  if (dir !== '') {
    await mkdir(dir, { recursive: true })
  }
  return await writeFile(output, code.sourceText)
}
