import { resolve } from 'node:path'

function r(p: string) {
  return resolve(__dirname, p)
}

export const alias: Record<string, string> = {
  '@ghoran/text/dist': r('./packages/text/dist/'),
  '@ghoran/text': r('./packages/text/src/'),
  '@ghoran/metadata': r('./packages/metadata/src/'),
}
