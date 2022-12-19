import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import ProductGridSection from '../sections/ProductGridSection'
import PamelaSection from '../sections/PamelaSection'
import DealSection from '../sections/DealSection'
import CustomerSection from '../sections/CustomerSection'
import FooterSection from '../sections/FooterSection'
import { ProductContextType, useProductContext } from '../contexts/contexts'

const Home: React.FC = () => {

  const {featured, cheapDeals, expensiveDeals, getFeatured, getCheapDeals, getExpensiveDeals, getAll} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeatured(8)
  }, [])

  useEffect(() => {
    getCheapDeals(6)
  }, [])

  useEffect(() => {
    getExpensiveDeals(6)
  }, [])

  useEffect(() => {
    getAll()
  }, [])


  window.parent.document.title = 'Fixxo.'

  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" items={featured} />
      <PamelaSection />
      <DealSection title="Product Deals" items={cheapDeals} />
      <CustomerSection />
      <FooterSection />
    </>

  )
}

export default Home