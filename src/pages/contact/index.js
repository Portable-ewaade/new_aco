import { Footer, Navbar } from '@/components/common'
import { ContactForm } from '@/components/contact'
import React from 'react'

const index = () => {
  return (
    <div className='wraper'>
        <Navbar />
        <ContactForm title="Send Us A Message " />
        <Footer />
    </div>
  )
}

export default index