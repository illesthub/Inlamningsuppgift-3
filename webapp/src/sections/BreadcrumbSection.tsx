import React from 'react'
import { NavLink } from 'react-router-dom'

interface BreadcrumbType {
  currentPage: string
}

const Breadcrumb: React.FC<BreadcrumbType> = ({currentPage}) => {
  return (
    <section className='breadcrumb'>
      <div className='container'>             
        <ul className='breadcrumb-list'>
          <li>
            <NavLink to="/" className="me-1">Home</NavLink>
          </li>
          <li>{currentPage}</li>
        </ul>
      </div>
    </section>
  )
}

export default Breadcrumb