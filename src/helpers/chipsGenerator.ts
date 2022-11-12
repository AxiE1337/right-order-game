import { generateNum } from './nonRepeatingNum'

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

interface IChip {
  id: number
  value: number
  name: string
}

export const chipsGenerator = (
  value: string,
  items: string,
  minValue: number
) => {
  const chips: IChip[] = []
  if (value !== 'A') {
    for (let i = 0; i < Number(items); i++) {
      const random = generateNum(minValue, +value, chips)
      chips.push({
        id: Date.now() + i,
        value: random,
        name: String(random),
      })
    }
  } else {
    for (let i = 0; i < Number(items); i++) {
      const random = generateNum(0, 9, chips)
      chips.push({
        id: Date.now() + i,
        value: random,
        name: letters[random],
      })
    }
  }

  return chips
}
