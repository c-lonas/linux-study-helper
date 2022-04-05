import React, { FunctionComponent } from 'react';

import { motion } from "framer-motion";

const footer = {
    hidden: { opacity: 0, x: -250, fontStyle: "italic"},
    visible: { 
        opacity: 1,
        fontStyle: "normal",
        x: 0,
        transition: {
            delayChildren: 1,
            staggerChildren: 1,
            type: 'spring', 
        }
    }
}

const itemAnchor = {
    hidden: { opacity: 0},
    visible: { opacity: 1, transition: { delay: 2.5 }}
}


const AppFooter: React.FC = () => {
    return (
        <footer>
            <motion.p
                variants={footer}
                initial="hidden"
                animate="visible"
            > Created by <motion.a
                            variants={itemAnchor}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ color: "var(--color-legend)" }}
                            href='https://chaselonas.dev' 
                            target="_blank"
                        > 
                            chaselonas.dev 
                        </motion.a> 
            </motion.p>
        </footer>
    )
    
}

export default AppFooter