import { FeatureTitle } from '../features/title'
import { Colors, Music, SchedulingLinks, Team, Todo } from '../features/card'

const features = [
    {
        title: "Mobizz provides flexible teams, advice, and support to take you from launching your MVP and sprint planning to handling large-scale enterprise projects.",
        id: "todo-list1",
        card: Music
    },
    {
        title: " We provide expert HR solutions and outsourced business support services to enhance the ultimate customer value.",
        id: "todo-list",
        card: Todo
    },
    {
        title: "Mobizz provides flexible teams, advice, and support to take you from launching your MVP and sprint planning to handling large-scale enterprise projects.",
        id: "colors",
        card: Colors
    },
    {
        title: "Color your calendar as a todo list",
        id: "colors1",
        card: SchedulingLinks
    },
    {
        title: "Color your calendar as a todo list",
        id: "colors2",
        card: Team
    },

]

const Hero = ()=>{

    return(
        <div className='flex mx-auto max-w-[85rem] px-4 gap-20 relative items-start'>
            <div className='w-full py-[50vh]'>
                <ul>
                    {
                        features.map((feature) =>(
                            <li key={feature.id}>
                                <FeatureTitle id={feature.id}>
                                {feature.title}
                                </FeatureTitle>
                            </li>
                            
                        ))
                    }
                </ul>
            </div>
            <div className='w-full sticky top-0 h-screen flex items-center'>
                <div className='relative w-full aspect-square '>
                    {
                        features.map(feature=>(
                            <feature.card key={feature.id} id={feature.id}/>
                        ))
                    }
                </div>
            </div>
            {/* <div className='h-screen'>More room to scroll</div> */}
        </div>
    )
}

export default Hero