import { useState } from "react";
    
const Navbar = ({ scrollToSection, activeSection }) => {
    let Links = [
        {lname:"Home", ref: "sectiononeRef", number:"01. ", id: "sectionone"},
        {lname:"About", ref: "aboutRef", number:"02. ", id: "about"},
        {lname:"Services", ref: "servicesRef", number:"03. ", id: "services"},
        {lname:"Projects", ref: "projectsRef", number:"04. ", id: "projects"},
        {lname:"Contact", ref: "contactRef", number:"05. ", id: "contact"},
    ]

    let [open, setOpen] = useState(false);

    const handleLinkClick = (ref) => {
        scrollToSection(ref); // Scroll to the section
        setOpen(false); // Close the navbar after clicking a link
    };

//     <button
//     onClick={() => handleLinkClick(link.ref)}
//     className="text-white hover:text-red-500 duration-500"
// >
//     {link.number}{link.lname}
// </button>

    return (
        <div className="shadow-md w-full sticky top-0 left-0 z-40">
            <div className="md:flex items-center justify-between bg-black py-4 px-7 md:px-10 lg:px-16 xl:px-20">
                <div className="font-bold text-lg sm:text-2xl cursor-pointer flex items-center text-white">
                    <a href="/">
                        {/* <span className="text-3xl text-milkey mr-1 pt-2">
                            <ion-icon name="logo-ionic"></ion-icon>
                        </span> */}
                        Em & T
                    </a>
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl text-white absolute right-8 top-4 sm:top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 text-center bg-black transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {Links.map((link) => (
                            <li key={link.lname} className="md:ml-6 lg:ml-8 text-xl md:my-0 my-7 transition-all duration-500 cursor-pointer">
                                <a onClick={() => handleLinkClick(link.ref)} className={`font-bold duration-500 ${ activeSection === link.id ? "text-beige" : "text-white"} hover:text-beige`}>{link.lname}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;