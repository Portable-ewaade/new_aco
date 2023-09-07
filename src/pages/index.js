import { Footer, Navbar } from '@/components/common'
import { Banner, Section2, Section3, Section4, Section5, Section6 } from '@/components/landing-page'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>A & Co Consulting</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <Banner />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer/>
    </>
  )
}
