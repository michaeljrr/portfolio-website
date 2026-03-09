'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import certifications, { type Certification } from '@/data/certifications';

export default function Certifications(){
    return(
        <section id='certifications' className='bg-gray-50 h-auto w-full py-16 px-8'>
            <h2 className="text-2xl font-semibold mb-4 text-black text-center">
                My Certifications
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mt-12 max-w-5xl mx-auto">
                {certifications.map((cert: Certification, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center max-w-sm w-full relative"
                    >
                        <div className="mb-4 relative" style={{ width: `${cert.logoWidth || 128}px`, height: `${cert.logoHeight || 128}px` }}>
                            <Image
                                src={cert.logo}
                                alt={`${cert.issuer} logo`}
                                fill
                                className="object-contain"
                            />
                        </div>
                        
                        <h3 className="text-xl font-semibold text-center mb-2 text-black">
                            {cert.name}
                        </h3>
                        
                        <p className="text-gray-600 text-center mb-4">
                            {cert.issuer}
                        </p>
                        
                        {cert.inProgress ? (
                            <div className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full">
                                In Progress
                            </div>
                        ) : (
                            <div className="text-sm text-gray-500 text-center space-y-1">
                                {cert.credentialId && (
                                    <p>
                                        <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                                    </p>
                                )}
                                {cert.issuedDate && (
                                    <p>
                                        <span className="font-semibold">Issued:</span> {cert.issuedDate}
                                    </p>
                                )}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}