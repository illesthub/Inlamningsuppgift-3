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
  const { featured, getFeatured } = useProductContext() as ProductContextType

  useEffect(() => {
    getFeatured(8)
  }, [])

  window.parent.document.title = 'Fixxo.'

  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" items={featured} />
      <PamelaSection />
      <DealSection /> 
      <CustomerSection />
      <FooterSection />
    </>
  )
}

export default Home