import {cn} from '@/lib/utils'
const ProductPrice = ({value,className}:{value:number,className?:string}) => {
  //Ensure two decimal posicions
  const stringValue =value.toFixed(2)
  //Convert the number to float
  const [initValue,floatValue]=stringValue.split('.')

  return (
    // aplico la clase 'text-2xl' mas las que el pase como argumento al componente:
    <p className={cn('text-2xl',className)}>
      <span className='text-xs align-super'>$</span>
      {initValue}
      <span className='text-xs align-super'>.{floatValue}</span>
    </p>
  )
}
export default ProductPrice
