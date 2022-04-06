import React, { FunctionComponent } from 'react';

import { motion, useAnimation } from "framer-motion";

const card = {
    hidden: { opacity: 0, y: 100},
    visible: { 
        opacity: 1,
        y: 0,
    
        transition: {
            type: 'spring', 
        }
    }
}



const FlashCards: React.FC = () => {
    const controls = useAnimation()

    function handleClickFlip(e: any){
            e.preventDefault();
            controls.start({
                rotateX: 360,
                rotate: 180,
                scale: [1, 1.2, 1.3, 1.4, 1.5, 1.51, 1.5, .9, 1],
                borderRadius: ["0%", "3%", "0%"],
                boxShadow: "-10px -10px 10px black",
                color: "var(--color-gray)",
                transition: { type: 'spring', stiffness: 75},

            });
    } 

    function handleClickNew(e: any){
            // e.preventDefault();
            controls.start({
                rotate: 720,
                scale: .001,
                y: -200,
                x: 200,
                boxShadow: "5px 5px 5px var(--color-theme)",
                transition: { type: 'spring', stiffness: 50},
                transitionEnd: { display: "none" }
            });
    } 

    return (
        <div className='flash-card-container'>
            <motion.div className="flash-card"
                variants={card}
                animate={controls}
            >
                <h3>Question #</h3>
                <p>Here is the text for the first question. It's a really good question</p>
            </motion.div>

            <div className='flash-card-controls'>
                <button onClick={handleClickFlip} > Flip Card </button>
                <button onClick={handleClickNew} >New Card </button>
            </div>


        </div>
    )
    
}

export default FlashCards