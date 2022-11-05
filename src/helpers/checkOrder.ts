export const isAscending = (a: any) => {
  return a
    .slice(1)
    .map((item: any, index: any) => item.value > a[index].value)
    .every((x: any) => x)
}

export const isDescending = (a: any) => {
  return a
    .slice(1)
    .map((item: any, index: any) => item.value < a[index].value)
    .every((x: any) => x)
}
