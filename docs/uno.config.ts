import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [presetUno({}), presetIcons({ autoInstall: true })],
  transformers: [transformerVariantGroup({ separators: [':'] })],
})
