import React, { FunctionComponent } from 'react';

import { motion } from "framer-motion";

const list: { [key: string]: {} } = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            staggerChildren: .5
        }
    }
}

const item: { [key: string]: {} } = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    // hover: {scale: 1.2}
}


const AppHeader: React.FC = () => {
    return (
        <header>
            <motion.ul className='header-nav-list'
                variants={list}
                initial="hidden"
                animate="visible"
            >
                <motion.li variants={item}> Home </motion.li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <motion.li variants={item} > Settings </motion.li>
                <motion.li variants={item} > Info </motion.li>
                <motion.li variants={item} > login </motion.li>
            </motion.ul>
        </header>
    )
}

export default AppHeader