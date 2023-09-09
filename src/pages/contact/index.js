import { Footer, Navbar } from '@/components/common'
import { ContactForm } from '@/components/contact'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default index