import Lottie from 'lottie-react'
import animationData from '../../public/lottie-animation.json'
import Clients from '../clients/clients'
import Header from '../header'

const Hero2 = ()=> {
    return(
        <div className="relative bg-gradient-to-r  from-[#f9f9f9] to-[#ffffff]">
            <Header/>
            <div class="pt-32 md:py-12 xl:container m-auto px-6 md:px-12 font-sans z-10">
                <div aria-hidden="true" class="absolute inset-0 my-auto w-96 h-32 rotate-45 blur-3xl opacity-50 dark:opacity-20"></div>
                <div class="relative lg:flex lg:items-center lg:gap-12">
                    <div class="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12 ">
                        <h1 class="text-gray-900 font-extrabold text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] dark:text-white">Your Product Engineering + Business Support Services<p class="text-primaryOrange dark:text-primaryLight">Powerhouse</p></h1>
                        <p class="mt-8 font-bold text-gray-600 dark:text-gray-300 text-xl">Mobizz provides everything from expert advice to dedicated staffing, taking your business from idea to implementation.</p>
                        <div>
                            <form action="" class="w-full mt-12">
                                <div class="relative flex items-center px-2 p-1 rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
                                    <div class="pl-6 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-auto fill-blue-900/60 dark:fill-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <input autocomplete="email" placeholder="Your mail address" class="w-full p-4 rounded-full placeholder-gray-600 dark:placeholder-white bg-transparent" type="email"/>
                                    <div class="md:pr-1.5 lg:pr-0">
                                        <button type="button" title="Start buying" class="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                            <span class="relative hidden w-max text-white dark:text-gray-900 font-semibold md:block">
                                                Contact Us
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="relative h-6 w-6 mx-auto text-white dark:text-gray-900 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0">
                            <img src="./images/clients/airbnb.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                            <img src="./images/clients/ge.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                            <img src="./images/clients/coty.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                            <img src="./images/clients/microsoft.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                        </div>
                    </div>
                    <div class="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
                    <Lottie animationData={animationData} className="h-[55rem]"/>
                            <div className='h-28 w-24 bg-white absolute right-[-3rem] bottom-[10rem]'></div>
                    </div>
                </div>
                
            </div> 
            <Clients/>
        </div>                                  
                                        
                                        
    )
}


export default Hero2