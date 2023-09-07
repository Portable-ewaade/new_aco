import { Banner, Section2, Section3 } from '@/components/about'
import { Footer, Navbar,  } from '@/components/common'
import { Section5, Section6 } from '@/components/landing-page'
import React from 'react'

const index = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Section2 />
        <Section3 />
        <Section5/>
        <Section6/>
        <Footer />
    </>
  )
}

export default index