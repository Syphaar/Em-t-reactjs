const Heading = [
    {
        id:1, 
        text: "Blogs",
        text2: "Some of our latest news",
    }
]

const News = [
    {
        id:1,
        // img: <img src="src/assets/images/bg.JPG" alt="" className="w-full h-full rounded-xl" />,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740652542/blog-one_jkebr6.jpg",
        header: "Top Trends in Modern Construction",
        date: "May 20 2022",
        description: "Stay ahead with the latest trends in construction, from smart home technology to eco-friendly materials. Discover how modern innovations are shaping the future of building.",
    },
    {
        id:2,
        // img: <img src="src/assets/images/bg.JPG" alt="" className="w-full h-full rounded-xl" />,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740652541/blog-two_gcquxu.jpg",
        header: "Choosing the Right Contractor Guide",
        date: "March 29 2020",
        description: "Finding a reliable contractor is crucial for a successful project. Learn key factors to consider, from experience and licensing to customer reviews and project timelines.",
    },
    {
        id:3,
        // img: <img src="src/assets/images/bg.JPG" alt="" className="w-full h-full rounded-xl" />,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740652538/blog-three_hu9elq.jpg",
        header: "Sustainable Building and Its Benefits",
        date: "October 20 2023",
        description: "Sustainable construction saves energy, reduces costs, and benefits the environment. Explore eco-friendly materials and green building techniques for a smarter future.",
    },
    {
        id:4,
        // img: <img src="src/assets/images/bg.JPG" alt="" className="w-full h-100 rounded-xl" />,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740652522/blog-four_a1kowa.jpg",
        header: "Avoiding Common Construction Mistakes",
        date: "June 13 2020",
        description: "Mistakes in construction can lead to delays and costly repairs. Identify common pitfalls and learn how to prevent them with careful planning and expert guidance.",
    },
]


const Blog = () => {
    return (
        <section className="bg-white">
            <div className="px-7 py-12 md:px-10 lg:px-16 xl:px-20" data-aos="fade-up">
                <div>
                    {Heading.map((data) => (
                        <div key={data.id} className="">
                            <div className="flex gap-5 lg:w-[80%]">
                                <div className="hidden pt-2 md:block">
                                    <p className="w-7 h-1 bg-black rounded-full"></p>
                                </div>
                                <div>
                                    <h2 className="text-black uppercase">{data.text}</h2>
                                    <p className="text-3xl text-black font-bold uppercase pt-2 pb-5 sm:w-[90%] xl:pb-3">{data.text2}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
                        {News.map((data2) => (
                            <div key={data2.id}>
                                {/* <div>{data2.img}</div> */}
                                <div>
                                    <div>
                                        <img src={data2.img} alt="" className="rounded-xl" />
                                    </div>
                                    <h4 className="font-bold uppercase pt-2">{data2.header}</h4>
                                    <p className="py-2">{data2.date}</p>
                                    <p>{data2.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sm:flex sm:justify-center pt-6">
                    <a href="">
                        <button className="bg-transparent rounded-sm border-2 border-black hover:bg-black transition-all duration-500 cursor-pointer">
                            <p className="text-black font-bold px-4 py-1 uppercase transition-all duration-500 hover:text-white">View More</p>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Blog;