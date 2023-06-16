import classNames from "classnames"
import Image from "next/image"
import Card1Image from "@/public/outsourcing.jpg"
import Card2Image from "@/public/card2.gif"
import Card5Image from "@/public/card5.gif"
import { useFeatureStore } from "./store"

export const FeatureCard = ({gradient, children, id})=>{

    const inViewFeature = useFeatureStore((state)=> state.inViewFeature)
    return (
        <div className={classNames(
            "absolute inset-0 h-[490px] w-[650px] rounded-2xl bg-gradient-to-br opacity-0 flex items-center justify-center", 
            gradient,
            inViewFeature === id ? "opacity-100" : "opacity-0"
            )}>
                {children}
            </div>
    )
}

export const Todo = ({id}) => {
    return (
        <FeatureCard gradient ="bg-[#f0f0f0]" id={id}>
            <Image src={Card1Image} width={450} height={300} className="absolute   rounded-2xl"/>
        </FeatureCard>
    )
}

export const Colors = ({id}) => {
    return (
        <FeatureCard gradient ="bg-[#498fdd]" id={id}>
            <Image src={Card2Image} width={500} height={300} className="absolute rounded-2xl "/>
        </FeatureCard>
    )
}

export const Music = ({id}) => {
    return (
        <FeatureCard gradient ="bg-[#01a4f0] " id={id}>
            <Image src={Card5Image} width={650} height={500} className="absolute bottom-0 rounded-2xl"/>
        </FeatureCard>
    )
}

export const SchedulingLinks = ({id})=>{
    return(
        <FeatureCard gradient="from-[#fff7f5] to-[#adffd8]" id={id}>
            <span/>
        </FeatureCard>
    )
}

export const Team = ({id})=>{
    return(
        <FeatureCard gradient="from-[#fef5ff] to-[#ffade1]" id={id}>
            <span/>
        </FeatureCard>
    )
}
