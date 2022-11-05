export const generateNum: any = (min: number, max: number, arr: any) => {
  const randomNum = Math.floor(Math.random() * (max - min) + min)
  const isHas = arr.find((item: any) => item.value === randomNum)
  if (isHas) {
    return generateNum(min, max, arr)
  } else {
    return randomNum
  }
}
