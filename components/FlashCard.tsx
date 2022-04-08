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

    // Flashcard Flip-State Handler
    const [flip , setFlip] = useState<boolean>(false)

    const [revealChoices, setRevealChoices] = useState<boolean>(false)

    const [flashcardID, setFlashcardID] = useState<number>(0)

    const totalCards = SAMPLE_FLASHCARDS.length


    // Flashcard Animation Handlers
    function handleClickFlip(e: any){
            // e.preventDefault();
            setFlip(!flip);
            controls.start({
                rotateX: 360,
                rotate: 360,
                scale: [1, 1.2, 1.3, 1.4, 1.5, 1.51, 1.5, .9, 1],
                borderRadius: ["0%", "3%", "0%"],
                boxShadow: ["10px 10px 10px black", "15px 15px 15px var(--color-theme)", "10px 10px 10px black"],
                transition: { type: 'spring', stiffness: 35, },
                transitionEnd: {
                    rotateX: 0,
                    rotate: 0
                }
            });
            
    } 

    function handleClickNew(e: any){
            // e.preventDefault();
           
            controls.start({
                rotate: [0, 720, -90, 0],
                scale: [1, 0, 0, 1],
                y: [0, -200, -200, 0],
                x: [0, 200, -200, 0],
                transition: { type: 'spring', stiffness: 75},
            });
            setFlip(false);
            setRevealChoices(false);
            setFlashcardID( Math.floor(Math.random() * totalCards) );            

    } 

    

    return (
        <div className='flash-card-container'>
            <motion.div className="flash-card"
                animate={controls}
                onClick={handleClickFlip}
            >
                <h3> Question #{SAMPLE_FLASHCARDS[flashcardID].id} </h3>
                { flip ? 
                    <p> {SAMPLE_FLASHCARDS[flashcardID].answer} </p> 
                    : 
                    <p> {SAMPLE_FLASHCARDS[flashcardID].question} </p>
                }
                { !flip ? revealChoices ?
                    <motion.p layout>Revealing Choices</motion.p>
                    :    
                    <motion.p layout>Not Revealing Choices</motion.p> : <></>   
                }
                
               

            </motion.div>

            <div className='flash-card-controls'>
                <button onClick={() => setRevealChoices(!revealChoices)} > Reveal Multiple Choice </button>
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
    id: 0,
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
    id: 1,
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