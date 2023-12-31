import Link from "next/link"

export default function Header(){
    return(
        <header className='top-0 sticky z-20'>
        <input type="checkbox" name="hbr" id="hbr" class="hbr peer" hidden aria-hidden="true"/>
        <nav class="fixed  w-full bg-yellow-300 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-yellow-300 dark:shadow-none">
            <div class="xl:container m-auto px-6 md:px-12">
                <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                    <div class="w-full flex justify-between lg:w-auto">
                        <a href="#" aria-label="logo" class="flex space-x-2 items-center">
                            <div aria-hidden="true" class="flex space-x-1">
                                <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200"></div>
                                <div class="h-6 w-2 bg-primary dark:bg-primaryLight"></div>
                            </div>
                            <span class="text-base font-black text-gray-600 dark:text-white font-sans lg:text-2xl">Mobizz</span>
                        </a>
                        <label for="hbr" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                            <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                            <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                        </label>
                    </div>
                    <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                        <div class="text-gray-600 dark:text-gray-300 lg:pr-4 font-sans">
                            <ul class="space-y-6 tracking-wide font-medium text-base lg:text-xl lg:flex lg:font-bold lg:space-y-0 ">
                                <li>
                                    <Link href="/" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                        <span>About</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                        <span>Services</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
    
                        <div class="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                            <a href="#" class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                <span class="relative text-sm font-semibold text-primary dark:text-primaryLight font-sans">Gallery</span>                    
                            </a>
                            <a href="#" class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                <span class="relative text-sm font-semibold text-white dark:text-gray-900 font-sans">Contact Us</span>                    
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
}