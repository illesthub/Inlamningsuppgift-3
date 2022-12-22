import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from "../components/ProductCard"
import { useProductContext, ProductContextType } from '../contexts/contexts'

// Hej Hasse jag körde tre i bredd på produkterna istället för två //
// för jag tycker att det är oändligt mycket snyggare. Mvh Harald //

const DealSection: React.FC = () => {
    const { cheapDeals, expensiveDeals, getCheapDeals, getExpensiveDeals } = useProductContext() as ProductContextType

    useEffect(() => {
        getCheapDeals(6)
        getExpensiveDeals(6)
    }, [])

    return (
        <section className='dealsection'>
            <div className='container-fluid'>
                <div className='two-for-one'>
                    <h1>2 FOR USD $29</h1>
                    <NavLink to={''} className='button btn-theme-light'>
                        <span className='corner-left'></span>
                        <span className='corner-right'></span>
                        FLASH SALE
                    </NavLink>
                </div>
                <div className='grid row row-cols-1 row-cols-md-2 g-2'>
                    {
                        cheapDeals.map(product => <ProductCard key={product.articleNumber} item={product} />)
                    }
                </div>
            </div>
            <div className='container-fluid-reverse'>
                <div className='grid row row-cols-1 row-cols-md-2 g-2'>
                    {
                        expensiveDeals.map(product => <ProductCard key={product.articleNumber} item={product} />)
                    }
                </div>
                <div className='two-for-one'>
                    <h1>2 FOR USD $49</h1>
                    <NavLink to={''} className='button btn-theme-light'>
                        <span className='corner-left'></span>
                        <span className='corner-right'></span>
                        FLASH SALE
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default DealSection