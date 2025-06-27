import ContactForm from "@/components/ContactForm";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, } from 'react-icons/fa';

export default function Contact(){
    return(
        <section id='contact' className="flex-col py-16 px-4 bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-black center text-center">
                Contact Me
            </h2>

            <div className="flex flex-col md:flex-row w-full justify-center items-start gap-8 mt-12 max-w-6xl mx-auto">

                <div className="max-w-md w-full">
                    <ContactForm/>
                </div>
                
                <div className="w-full md:w-[450px] md:h-[408px] bg-white p-8 shadow rounded">
                    <h2 className="text-xl font-bold mb-4">Information</h2>
                    <div className="flex flex-col justify-between h-[290px] mt-5">
                        <div className="flex">
                            <CiMail className='w-6 h-6 mt-2'/>
                            <div className="flex flex-col ml-3">
                                <p className="text-sm font-semibold text-gray-600">Email</p>
                                    <a 
                                        href="mailto:michael.rasco24@gmail.com" 
                                        className="hover:text-blue-700 text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                    michael.rasco24@gmail.com
                                    </a>
                            </div>

                        </div>

                        <div className="flex">
                            <MdOutlineLocalPhone className="w-6 h-6 mt-2"/>
                            <div className="flex flex-col ml-3">
                                <p className="text-sm font-semibold text-gray-600">Mobile</p>
                                    <a 
                                        href="https://wa.me/6584985657" 
                                        className="hover:text-blue-700 text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                    +65 8498 5657
                                    </a>
                            </div>
                        </div>

                        <div className="flex">
                            <FaLinkedin className="w-6 h-6 mt-2"/>
                            <div className="flex flex-col ml-3">
                                <p className="text-sm font-semibold text-gray-600">LinkedIn</p>
                                    <a 
                                        href="https://www.linkedin.com/in/michaeljrr" 
                                        className="hover:text-blue-700 text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                    Michael Jr
                                    </a>
                            </div>
                        </div>

                        <div className="flex">
                            <FaGithub className="w-6 h-6 mt-2"/>
                            <div className="flex flex-col ml-3">
                                <p className="text-sm font-semibold text-gray-600">Github</p>
                                    <a 
                                        href="https://github.com/michaeljrr" 
                                        className="hover:text-blue-700 text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                    michaeljrr
                                    </a>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>

        </section>
    );
}