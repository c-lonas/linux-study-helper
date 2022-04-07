import React, { FunctionComponent, useState } from 'react';

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



const FlashCard: React.FC = () => {

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
                <p>{SAMPLE_FLASHCARDS[0].question}</p>
                <p>{SAMPLE_FLASHCARDS[0].options[0]}</p>

            </motion.div>

            <div className='flash-card-controls'>
                <button > Reveal Multiple Choice </button>
                <button onClick={handleClickFlip} > Flip Card </button>
                <button onClick={handleClickNew} > New Card </button>
            </div>


        </div>
    )
    
}



interface SAMPLE_FLASHCARD_TYPE {
        id: number;
        question: string;
        answer: string;
        options: [string, string, string, string]
}

const FLASHCARD_ONE: SAMPLE_FLASHCARD_TYPE = {
    id: 1,
    question: "this is the first question text",
    answer: "this is the answer to the first question",
    options: [
      'option a',
      'option b',
      'option c',
      'option d',

    ]
}

const FLASHCARD_TWO: SAMPLE_FLASHCARD_TYPE = {
    id: 2,
    question: "this is the second question text",
    answer: "this is the answer to the second question",
    options: [
      'option 1',
      'option 2',
      'option 3',
      'option 4',

    ]

}

const SAMPLE_FLASHCARDS: SAMPLE_FLASHCARD_TYPE[] = []

SAMPLE_FLASHCARDS.push(FLASHCARD_ONE, FLASHCARD_TWO)



export default FlashCard