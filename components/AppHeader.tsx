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
    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [showSecondaryEssentials, setShowSecondaryEssentials] = useState<boolean>(false);

    const [flashcardDeck, setFlashcardDeck] = useState();

    return (
        <header>
            <motion.ul className='header-nav-list'
                variants={list}
                initial="hidden"
                animate="visible"       
            >
                    <motion.li variants={item} whileHover={{ scale: 1.1 }} > <Image className='nav-image' src="/linux-white.png" height={20} width={20} /> Home </motion.li> 
                    {/* <motion.li variants={item} whileHover={{ scale: 1.1 }} onClick={() => setShowSettings(!showSettings)} > <Image className='nav-image' src="/settings-white.png" height={20} width={20} /> 
                        Settings
                        {showSettings ?
                            <motion.div className='nav-settings-dropdown'>
                                <ul className='nav-settings-dropdown-list'>
                                    <li className='dropdown-item'
                                        onMouseOver={() => setShowSecondaryEssentials(true)}
                                        onMouseLeave={() => setShowSecondaryEssentials(false)}
                                    > 
                                        Linux Essentials
                                        {showSecondaryEssentials ?
                                            <ul className='essentials-list'>
                                                <li> All Essentials </li>
                                                <li> Topic 1: The Linux Community and a Career in Open Source </li>
                                                <li> Topic 2: Finding Your Way on a Linux System </li>
                                                <li> Topic 3: The Power of the Command Line </li>
                                                <li> Topic 4: The Linux Operating System </li>
                                                <li> Topic 5: Security and File Permissions </li>
                                            </ul> : <></>
                                        } 
                                    </li>
                                    <li className='dropdown-item'> LPIC-1 (Coming Soon) </li>
                                    <li className='dropdown-item'> LPIC-2 (Coming Soon) </li>
                                </ul>
                            </motion.div> : <></>
                        }
                    </motion.li> */}
                    <motion.li variants={item} whileHover={{ scale: 1.1 }} > <Image className='nav-image' src="/info-white.png" height={20} width={20} /> Info </motion.li>
                    <motion.li variants={item} whileHover={{ scale: 1.1 }} > <Image className='nav-image' src="/login-white.png" height={20} width={20} /> login </motion.li>
            </motion.ul>
        </header>
    )
}

export default AppHeader