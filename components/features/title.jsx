import { useEffect, useRef } from "react"
import { useInView } from "framer-motion";
import { useFeatureStore } from "./store";

export const FeatureTitle = ({children, id})=>{

    const ref = useRef(null);
    const isInView = useInView(ref,{margin:"-50% 0px -50% 0px"})
    const setInViewFeature = useFeatureStore(state => state.setInViewFeature)

    useEffect(() =>{
        if(isInView) setInViewFeature(id)
    }, [isInView])

    const classForActive = 'font-sans text-5xl py-16 leading-tight font-black font-sans text-5xl py-16 font-black'
    const classForInactive = 'font-sans text-5xl py-16 font-black text-gray-300 font-sans text-5xl py-16 text-gray-30'
    return(
        <p  ref={ref} className={ isInView? classForActive: classForInactive }>{children}</p>
    )
}