import PropTypes from "prop-types"; // Import prop-types

const Heading = [
    {
        id:1, 
        text: "Architecture / interior",
        text2: "we are building experts",
    },
]

const Sectionone = ({ sectiononeRef }) => {
    return (
        <section ref={sectiononeRef} id="sectionone" className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image */}
            <div className="fixed top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dlcoacdkb/image/upload/v1740652524/bg_mrszgr.jpg')] bg-cover bg-center bg-no-repeat -z-10"></div>

            {/* Content Section */}
            <div className="relative flex justify-center items-center w-full min-h-screen px-7 md:px-10 lg:px-16 xl:px-20">
                <div className="w-full">
                   {Heading.map((data) => (
                        <div key={data.id} className="pb-12 xl:pb-0">
                            <h2 className="text-white uppercase">{data.text}</h2>
                            <p className="text-3xl text-white font-bold uppercase pt-2 pb-6 w-[70%] sm:text-4xl md:text-5xl xl:text-7xl xl:pb-7">{data.text2}</p>
                            <div>
                                <a href="/">
                                    <button className="bg-transparent rounded-sm border-2 border-white hover:text-black hover:bg-white transition-all duration-500 cursor-pointer">
                                        <p className="text-white font-bold px-4 py-1 uppercase transition-all duration-500 hover:text-black">Our projects</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
};

// Define prop types
Sectionone.propTypes = {
    sectiononeRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

export default Sectionone;