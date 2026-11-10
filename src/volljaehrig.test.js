import { describe, it, expect } from 'vitest'
import { istVolljaehrig } from './volljaehrig.js'

describe('istVolljaehrig', () => {
  it('17 Jahre: nein', () => {
    expect(istVolljaehrig(17)).toBe(false)
  })

  it('30 Jahre: ja', () => {
    expect(istVolljaehrig(30)).toBe(true)
  })

  // Die Grenze! Hier passieren die meisten Fehler.
  it('genau 18 Jahre: ja', () => {
    expect(istVolljaehrig(18)).toBe(true)
  })
})
