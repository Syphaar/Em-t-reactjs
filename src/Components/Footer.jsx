import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";


const Heading = [
    {
        id:1, 
        text: "Contact",
        text2: "Let's work together",
        description: "Have a project in mind? We’re here to help with expert advice, quality craftsmanship, and seamless execution. Contact us today to discuss your construction needs!",
    }
]


const Footer = ({ contactRef }) => {
    return (
        <section ref={contactRef} id="contact">
            <div className="bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740652541/footer_hh1m0l.jpg)] bg-cover bg-no-repeat bg-center px-7 pt-12 pb-32 md:px-10 lg:px-16 xl:px-20">
                <div>
                    <div>
                        {Heading.map((data) => (
                            <div key={data.id} className="">
                                <div className="flex gap-5 lg:w-[80%]">
                                    <div className="hidden pt-2 md:block">
                                        <p className="w-7 h-1 bg-white rounded-full"></p>
                                    </div>
                                    <div>
                                        <h2 className="text-white uppercase">{data.text}</h2>
                                        <p className="text-3xl text-white font-bold uppercase pt-2 pb-5 sm:w-[50%] xl:pb-3">{data.text2}</p>
                                        <div>
                                        <p className="text-white">{data.description}</p>
                                        </div>
                                        <div>
                                            <div className="flex gap-3 pt-4 pb-6 text-white text-lg">
                                                <div className="text-xl">
                                                    <a href="/" className="transition-all duration-500 hover:text-beige">
                                                        <FaFacebookF />
                                                    </a>
                                                </div>
                                                <div className="text-xl">
                                                    <a href="/" className="transition-all duration-500 hover:text-beige">
                                                        <FaWhatsapp />
                                                    </a>
                                                </div>
                                                <div className="text-xl">
                                                    <a href="/" className="transition-all duration-500 hover:text-beige">
                                                        <GrInstagram />
                                                    </a>
                                                </div>
                                                <div className="text-xl">
                                                    <a href="/" className="transition-all duration-500 hover:text-beige">
                                                        <FaTwitter />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="">
                                                <button className="bg-transparent rounded-sm border-2 border-white hover:bg-white transition-all duration-500 cursor-pointer">
                                                    <p className="text-white font-bold px-4 py-1 uppercase transition-all duration-500 hover:text-black">Contact Us</p>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;