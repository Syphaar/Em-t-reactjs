

const Heading = [
    {
        id:1, 
        text: "Who are we",
        text2: "Architecture studio",
        subhead: "Innovative, sustainable, and functional designs shaping the future of construction.",
        info: "We are committed to building strong, reliable structures with quality craftsmanship. From homes to commercial spaces, we bring your vision to life with precision and care. Our team prioritizes safety, efficiency, and durability in every project. Let’s build something great together.",
    },
]


const About = ({ aboutRef }) => {
    return (
        <section ref={aboutRef} id="about" className="bg-white">
            <div className="px-7 py-12 md:px-10 lg:px-16 xl:px-20">
                <div>
                    {Heading.map((data) => (
                        <div key={data.id} className="lg:flex lg:flex-row-reverse lg:gap-9">
                            <div className="flex gap-5 lg:w-[80%] lg:mt-20" data-aos="fade-left">
                                <div className="hidden pt-2 md:block">
                                    <p className="w-7 h-1 bg-black rounded-full"></p>
                                </div>
                                <div>
                                    <h2 className="text-black uppercase">{data.text}</h2>
                                    <p className="text-3xl text-black font-bold uppercase pt-2 pb-5 w-[20%] xl:pb-3">{data.text2}</p>
                                    <h3 className="font-bold">{data.subhead}</h3>
                                    <p className="pt-3 pb-5">{data.info}</p>
                                    <div className="pb-6 lg:pb-0">
                                        <a href="/">
                                            <button className="bg-transparent rounded-sm border-2 border-black hover:bg-black transition-all duration-500 cursor-pointer">
                                                <p className="text-black font-bold px-4 py-1 uppercase transition-all duration-500 hover:text-white">Read More</p>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:flex sm:gap-8" data-aos="fade-right">
                                <div>
                                    <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740652523/about-one_jb2mvw.jpg" alt="" className="w-full h-full mb-6 rounded-xl sm:w-full sm:h-full sm:mb-0 lg:w-100 lg:h-100 lg:object-cover xl:h-90" />
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1740652524/about-two_jhgjtu.jpg" alt="" className="w-full h-full rounded-xl sm:w-full sm:h-full lg:w-100 lg:h-100 lg:mt-20 lg:object-cover xl:h-90" />
                                </div>
                            </div>
                            
                        </div>
                    ))} 
                </div>
                <div></div>
            </div>
        </section>
    )
}

export default About;