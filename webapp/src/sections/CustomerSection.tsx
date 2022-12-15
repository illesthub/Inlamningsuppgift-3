import React from 'react'
import CustomerSupport from "../assets/images/customer-support-placeholder.svg"
import SecuredPayment from "../assets/images/secured-payment-placeholder.svg"
import FreeHomeDelivery from "../assets/images/free-home-delivery-placeholder.svg"
import ThirtyDayReturn from "../assets/images/thirty-day-reuters.svg"

const CustomerSection: React.FC = () => {
  return (
    <section className='customer-section'>
        <div className='container-fluid'>
            <div className='customer-support'>
                <img src={CustomerSupport} />
                <h2>Customer Support</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className='secured-payment'>
            <img src={SecuredPayment}/>
                <h2>Secured Payment</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className='free-home-delivery'>
            <img src={FreeHomeDelivery} />
                <h2>Free Home Delivery</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className='thirty-day-reuters'>
            <img src={ThirtyDayReturn} />
                <h2>30 Day Returns</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
    </section>
  )
}

export default CustomerSection