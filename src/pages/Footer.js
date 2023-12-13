import React from 'react'
import '../style/Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer'>
          <div className='flex-wrap'>
            <div className='footer-contact-text'>
            <h1 className='footer-text'>Contact me</h1>
            <div className='footer-text'>🌎 India, Bihar(patna)</div>
            <div className='footer-text'>📩 anilkumar62034sgpa@mack.com</div>
            <div className='footer-text'>📞 +91 8987194176</div>
            </div>
          <iframe title="myFrame" className='location-map'src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bihar,patna,%20hazzrat%20jandaha+(Coder%20Anil)&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
          </div>
        </div>

        <div className='footer-down'>
          <div>@2023 made by Coder Anil</div>
        </div>

      </footer>
    </>
  )
}

export default Footer
