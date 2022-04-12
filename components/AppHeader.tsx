import React, { FunctionComponent } from 'react';
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
    return (
        <header>
            <motion.ul className='header-nav-list'
                variants={list}
                initial="hidden"
                animate="visible"       
            >
                    <motion.li variants={item} whileHover={{ scale: 1.1 }} > <Image className='nav-image' src="/linux-white.png" height={20} width={20} /> Home </motion.li> 
                    <motion.li variants={item} whileHover={{ scale: 1.1 }} > <Image className='nav-image' src="/settings-white.png" height={20} width={20} /> Settings </motion.li>
                    <motion.li variants={item} whileHover={{ scale: 1.1 }} > <Image className='nav-image' src="/info-white.png" height={20} width={20} /> Info </motion.li>
                    <motion.li variants={item} whileHover={{ scale: 1.1 }} > <Image className='nav-image' src="/login-white.png" height={20} width={20} /> login </motion.li>
            </motion.ul>
        </header>
    )
}

export default AppHeader