import { Footer, Navbar } from '@/components/common'
import { Section4, Section5, Section6 } from '@/components/landing-page'
import { Banner, Section2 } from '@/components/services'
import React from 'react'

const index = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <Section2 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Footer />
    </>
  )
}

export default index