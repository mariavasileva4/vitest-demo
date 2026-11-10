import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AlterCheck from './AlterCheck.vue'

describe('AlterCheck', () => {
  it('zeigt "Nicht volljährig" bei 17', async () => {
    // 1. Zeigen: die Komponente aufbauen
    const seite = mount(AlterCheck)
    // 2. Eingeben: 17 in das Feld schreiben
    await seite.find('input').setValue(17)
    // 3. Prüfen: steht der richtige Text da?
    expect(seite.find('p').text()).toBe('Nicht volljährig')
  })

  it('zeigt "Volljährig" bei 18', async () => {
    const seite = mount(AlterCheck)
    await seite.find('input').setValue(18)
    expect(seite.find('p').text()).toBe('Volljährig')
  })
})
