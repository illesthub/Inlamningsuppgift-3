import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import { useParams } from 'react-router-dom'

const ProductDetailsView: React.FC = () => {
    const params = useParams()

  return (
    <>
        <MainMenuSection />
        <div className='container mt-5'>
            <h1>{params.name}</h1>
        </div>
        <FooterSection />
    </>
  )
}

export default ProductDetailsView