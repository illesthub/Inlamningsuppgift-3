import React, { useEffect } from 'react'
import { ProductContextType, useProductContext } from '../contexts/contexts'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'


const ProductsView: React.FC = () => {
  const {products, getAll} = useProductContext() as ProductContextType

  useEffect (() => {
    getAll()
  }, [])

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title='Products' items={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView