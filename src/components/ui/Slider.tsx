import { memo } from 'react'

interface ISlider {
  defaultValue: number
  minValue: number
  maxValue: number
  step: number
  label?: string[]
  onChange: (value: number) => void
}

function Slider({
  defaultValue,
  minValue,
  maxValue,
  step,
  label,
  onChange,
}: ISlider) {
  return (
    <>
      <input
        type='range'
        min={minValue}
        max={maxValue}
        defaultValue={defaultValue}
        className='range'
        onChange={(e: any) => {
          onChange(e.target.value)
        }}
        step={step}
      />
      <div className='w-full flex justify-between text-xs px-2'>
        {label?.map((item: any, index: number) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </>
  )
}

export default memo(Slider)
