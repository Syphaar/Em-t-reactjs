import { IoDiamondOutline } from "react-icons/io5";
import { GrAnchor } from "react-icons/gr";
import { PiHouseLineBold } from "react-icons/pi";
import { LiaHeadsetSolid } from "react-icons/lia";


const Heading = [
    {
        id:1, 
        text: "What we do",
        text2: "Provide the best services",
    },
]

const Skills = [
    {
        id:1,
        icon: <IoDiamondOutline />,
        header: "Architecture",
        description: "We turn ideas into architectural masterpieces with precision and creativity, designing spaces that are both functional and visually inspiring.",
    },
    {
        id:2,
        icon: <PiHouseLineBold />,
        header: "Interior Design",
        description: "Transforming interiors with style, comfort, and functionality. Our designs reflect your vision, creating spaces that inspire and elevate living.",
    },
    {
        id:3,
        icon: <GrAnchor />,
        header: "Furniture Design",
        description: "Designing custom furniture that perfectly fits your lifestyle. We combine practicality with style to create pieces that stand the test of time.",
    },
    {
        id:4,
        icon: <LiaHeadsetSolid />,
        header: "Consulting",
        description: "We offer expert consulting to guide your project from start to finish. Our team provides valuable insights and solutions for successful construction outcomes.",
    },
]


const Services = ({ servicesRef }) => {
    return (
        <section ref={servicesRef} id="services" className="bg-black">
            <div className="px-7 py-12 md:px-10 lg:px-16 xl:px-20" data-aos="fade-up">
                <div>
                    {Heading.map((data) => (
                        <div key={data.id} className="">
                            <div className="flex gap-5 lg:w-[80%]">
                                <div className="hidden pt-2 md:block">
                                    <p className="w-7 h-1 bg-white rounded-full"></p>
                                </div>
                                <div>
                                    <h2 className="text-white uppercase">{data.text}</h2>
                                    <p className="text-3xl text-white font-bold uppercase pt-2 pb-5 w-[90%] xl:pb-3">{data.text2}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=" grid grid-col-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
                    {Skills.map((data2) => (
                        <div key={data2.id} className="">
                            <div className="text-white">
                                <p className="text-3xl">{data2.icon}</p>
                                <h4 className="py-2 font-bold uppercase">{data2.header}</h4>
                                <p>{data2.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services; 