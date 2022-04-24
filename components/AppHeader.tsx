import React, { useState } from 'react';
import Image from 'next/image';

import { motion, useAnimation } from "framer-motion";


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

    const animInfo = useAnimation();

    function animateInfo() {
        if (showInfo === false) {
            setShowInfo(!showInfo);
            animInfo.start({
            y: [-250, 0],
            x: [185, 0],
            opacity: [0, 1],
            scale: [0, 1],
            transition: {
                type: "spring"
            }
            })
        } else {
            setShowInfo(!showInfo);
            animInfo.start({
            y: [0, -250],
            x: [0, 185],
            scale: [1, 0],
            opacity: [1, 0],
            
            })
        }
    }

    return (
        <header>
            <motion.ul className='header-nav-list'
                variants={list}
                initial="hidden"
                animate="visible"       
            >
                    <motion.li variants={item} whileHover={{ scale: 1.1 }} >
                        <div className='nav-image-container'> 
                            <Image className='nav-image' src="/linux-white.png" alt="Linux(Home) Icon" layout="fill"/>
                        </div> 
                    </motion.li> 
                    <motion.li variants={item} whileHover={{ scale: 1.1 }} className='header-title'> Linux Essentials Study Tool </motion.li> 
                    <motion.li 
                        variants={item} 
                        onClick={ animateInfo } 
                   
                    > 
                        <div className='nav-image-container'>
                            <Image className='nav-image' src="/info-white.png" alt="Information Icon" layout='fill'/> 
                        </div> 
                    
                        <motion.div className='info-container' animate={animInfo}>
                            <div
                            className='info-X' 
                            onClick={() => setShowInfo(false)}
                            
                            >
                            </div>

                            <p> This project is designed to help with studying for the <a href='https://www.lpi.org/our-certifications/linux-essentials-overview' target='_blank' rel="noreferrer"> Linux Essentials Exam </a> from the Linux Professional Institute. </p>
                            <br></br>
                            <p> Questions and answers were primarily drawn from the <a href='https://learning.lpi.org/en/learning-materials/010-160/' target="_blank" rel="noreferrer"> study resources </a> provided by the Linux Professional Institute. </p>
                            <br></br>
                            <p> This project also includes an <a href='/api/data' target="_blank">API</a> you are welcome to use in your own projects. </p>
                            <br></br>
                            <p> Flashcards for additional modules and exams may be added in the future. </p>
                        </motion.div> 

                    </motion.li>
            </motion.ul>
        </header>
    )
}

export default AppHeader