import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons' 

const socials = () => {
  return (
    <div className='sm:w-[20%] sm:m-[2.5%] sm:static absolute bottom-[50px] left-[30%]'>
      <div className='flex sm:flex-col gap-10'>
        <FontAwesomeIcon color='white' icon={faFacebookF}/>
        <FontAwesomeIcon color="white" icon={faInstagram}/>
        <FontAwesomeIcon color="white" icon={faXTwitter}/>
        <FontAwesomeIcon color="white" icon={faLinkedinIn}/>
      </div>
    </div>
  )
}
export default socials
