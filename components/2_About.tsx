'use client';
import { motion } from 'framer-motion';

export default function About(){
    return(
        <section id='about' className='bg-white h-auto w-full py-16 px-8'>
            <h2 className="text-2xl font-semibold mb-4 text-black text-center">
                About Me
            </h2>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            <p className="mb-4 text-center mx-auto max-w-3xl mt-12">
            I&apos;m Michael, an undergraduate at the Singapore University of Technology and Design (SUTD), with a strong focus on full-stack development and cybersecurity.
            <br /><br />
            As a project-oriented individual who enjoys taking ideas from concept to completion, I am always eager to explore new technologies, expand my skill set, and push beyond my comfort zone. I love combining creativity with critical thinking in my work, and I&apos;m constantly seeking opportunities to grow, build, and refine my expertise.
            </p>
            </motion.div>
        </section>
    );
}