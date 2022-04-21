import React, { useState } from 'react';
import Image from 'next/image';

import { motion } from "framer-motion";


const list = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: .35,
            type: 'spring', 
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20},
    visible: { 
        y: 0,
        opacity: 1, 
    }
}




const AppHeader: React.FC = () => {
    const [showInfo, setShowInfo] = useState<boolean>(false);

    return (
        <header>
            <motion.ul className='header-nav-list'
                variants={list}
                initial="hidden"
                animate="visible"       
            >
                    <motion.li variants={item} whileHover={{ scale: 1.1 }} > <Image className='nav-image' src="/linux-white.png" height={20} width={20} /> </motion.li> 
                    <motion.li variants={item} whileHover={{ scale: 1.1 }} className='header-title'> Linux Essentials Study Tool </motion.li> 
                    <motion.li 
                        variants={item} 
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setShowInfo(!showInfo)} 
                    > <Image className='nav-image' src="/info-white.png" height={20} width={20} /> 
                         
                        {showInfo ? 
                            <motion.div className='info-container' layout>
                                <div
                                className='info-X' 
                                onClick={() => setShowInfo(false)}
                                >
                                </div>

                                <p> This project is designed to help with studying for the <a href='https://www.lpi.org/our-certifications/linux-essentials-overview' target='_blank'> Linux Essentials Exam </a> from the Linux Professional Institute. </p>
                                <br></br>
                                <p> Questions and answers were primarily drawn from the <a href='https://learning.lpi.org/en/learning-materials/010-160/' target="_blank"> study resources </a> provided by the Linux Professional Institute. </p>
                                <br></br>
                                <p> This project also includes an <a href='' target="_blank">API</a> you are welcome to use in your own projects </p>
                                <br></br>
                                <p> Flashcards for additional modules and exams may be added in the future </p>
                            </motion.div> 

                            :<></>
                        }
                    </motion.li>
                    {/* <motion.li variants={item} whileHover={{ scale: 1.1 }} > <Image className='nav-image' src="/login-white.png" height={20} width={20} /> </motion.li> */}
            </motion.ul>
        </header>
    )
}

export default AppHeader