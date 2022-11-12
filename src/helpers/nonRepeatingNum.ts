interface IArray {
  id: number
  value: number
  name: string
}

export const generateNum: any = (min: number, max: number, arr: IArray[]) => {
  const randomNum = Math.floor(Math.random() * (max - min) + min)
  const isHas = arr.find((item) => item.value === randomNum)
  if (isHas) {
    return generateNum(min, max, arr)
  } else {
    return randomNum
  }
}
