import React from 'react'

const FooterSection: React.FC = () => {
  return (
    <footer>
        <div className='socialmedia'>
            <a href="https://facebook.com" target="_blank"><i className='fa-brands fa-facebook-f'></i></a>
            <a href="https://instagram.com" target="_blank"><i className='fa-brands fa-instagram'></i></a>
            <a href="https://twitter.com" target="_blank"><i className='fa-brands fa-twitter'></i></a>
            <a href="https://google.com" target="_blank"><i className='fa-brands fa-google'></i></a>
            <a href="https://linkedin.com" target="_blank"><i className='fa-brands fa-linkedin'></i></a>
        </div>
        <div className='copyright'>
            <i className="fa-regular fa-copyright"></i> 2022 Fixxo. All Rights Reserved.
        </div>
    </footer>
  )
}

export default FooterSection