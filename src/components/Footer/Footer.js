import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='FooterPage'>
            <div className='FooterText'>
                <h3 className='thanks'>Thanks for visiting!</h3>
                <p className='footerMain'>
                    This website is a work in progress and I'm always trying to learn/work on new things so be sure to check back for updates. :)
                </p>
                <p className='footerCredit'>
                    A large portion of this website design was based on the personal websites of <a href='https://iuri.is/'>Iuri de Paula</a> and <a href='http://brandoncjohnson.com/'>Brandon C. Johnson</a>. Be sure to check out their websites to see some of the inspirations behind this one!
                </p>
            </div>
        </div>
    )
}

export default Footer
