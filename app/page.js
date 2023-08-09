import { addRequestMeta } from 'next/dist/server/request-meta'
import Review from './components/review.js'
import Benefits from './components/benefits.js'
import Discount from './components/discount.js'
import MonthProduct from './components/monthProduct.js'
import Banner from './components/banner.js'
import BestProduct from './components/bestProduct.js'
import Bgslide from './components/bgslide.js'
export default function Home() {

  return (
    /* nextjs 에서 설치할 라이브러리 1. npm install react-hook-form*/
    <main>
      <Bgslide/>
      <BestProduct/>
      <Banner/>
      <MonthProduct/>
      <Discount/>
      <Benefits/>
      <Review/>
    </main>
  )
}