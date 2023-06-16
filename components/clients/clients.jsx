'use client'

import Image from 'next/image'
import ClientImages from './client-images'
import {motion} from 'framer-motion'
import styles from './styles.module.css'

export default function Clients() {

 
  
    return (
      <section className="bg-gray-900">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="text-4xl font-sans text-gray-100">Trusted by leading brands, including:</h2>
          </div>
  
          <div className="relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-gray-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-gray-900">
            <div className="!ease-linear select-none">
              {/* Carousel items */}

              <motion.div className={styles.carousel}>
                <motion.div drag="x" className={styles.inner_carousel}>
                 {
                  ClientImages.map(image=>{
                    return(
                      <motion.div className={`${styles.item} !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group`}>
                        <Image src={image} className={`${styles.image_item} opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out`}/>
                      </motion.div>
                    )
                  })
                 }
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>  
      </section>
    )
  }