interface IArray {
  id: number
  value: number
  name: string
}

export const isAscending = (a: IArray[]) => {
  return a
    .slice(1)
    .map((item, index) => item.value > a[index].value)
    .every((x) => x)
}

export const isDescending = (a: IArray[]) => {
  return a
    .slice(1)
    .map((item, index) => item.value < a[index].value)
    .every((x) => x)
}
