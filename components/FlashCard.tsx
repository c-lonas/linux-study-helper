import React, { FunctionComponent, useState } from 'react';

import { motion, useAnimation } from "framer-motion";

import Flashcardlist from './Flashcardlist';



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



const FlashCard: React.FC = () => {

    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
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
                <Flashcardlist flashcards={flashcards} />
            </motion.div>

            <div className='flash-card-controls'>
                <button > Reveal Multiple Choice </button>
                <button onClick={handleClickFlip} > Flip Card </button>
                <button onClick={handleClickNew} > New Card </button>
            </div>


        </div>
    )
    
}

const SAMPLE_FLASHCARDS: {} = [

  {
    id: 1,
    question: "this is the first question text",
    answer: "this is the answer to the first question",
    options: [
      'option a',
      'option b',
      'option c',
      'option d',

    ]

  },

  {
    id: 2,
    question: "this is the second question text",
    answer: "this is the answer to the second question",
    options: [
      'option 1',
      'option 2',
      'option 3',
      'option 4',

    ]

  },

]




export default FlashCard