export const metadata = {
    title: 'About -- Mobizz',
    description: 'Page description',
}

import Hero from '@/components/hero-about'
import Header from '@/components/header'
import FeaturesGallery from '@/components/features-gallery'
import Timeline from '@/components/timeline'
import Cta from '@/components/cta'
import Footer from '@/components/footer'

export default function About(){
    return(
        <>
        <Header/>
         <Hero/>
         <FeaturesGallery/>
         <Timeline/>
         <Cta/>
         <Footer/>
        </>
    )
}