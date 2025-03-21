import PropTypes from "prop-types"; // Import prop-types

const Projects = ({ projectsRef }) => {
    return (
        <section ref={projectsRef} id="projects">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740652535/one_vz6v7v.jpg)] bg-cover bg-no-repeat bg-center w-full h-70 lg:h-100">
                        {/* <h4>Arch building projects</h4> */}
                    </div>  
                    <div className="bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740652540/two_n0xzln.jpg)] bg-cover bg-no-repeat bg-center w-full h-70 lg:h-100">
                        {/* <h4>Furniture design projects</h4> */}
                    </div>
                    <div className="bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740652537/three_gfigtu.jpg)] bg-cover bg-no-repeat bg-center w-full h-70 lg:h-100">
                        {/* <h4>Our Intentions Projects</h4> */}
                    </div>
                </div>
            </div>
        </section>
    )
};

// Define prop types
Projects.propTypes = {
    projectsRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

export default Projects;