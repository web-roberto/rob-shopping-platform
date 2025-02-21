//import sampleData from "@/db/sample-data"
import { getLatestProducts } from '@/lib/actions/product.actions'
import ProductList from '@/components/shared/product/product-list'
export const metadata ={
  title:'Home',
}
const Homepage =  async () => {
  const latestProducts= await getLatestProducts()
  console.log(latestProducts)
  return (
    <div>
      <ProductList data={latestProducts} title='Newest Arrivals'/>
    </div>
  )
}
export default Homepage
