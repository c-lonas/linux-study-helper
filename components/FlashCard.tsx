import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';


import FlashcardList from './FlashcardList';

import { motion, useAnimation } from "framer-motion";



const options = {
    hidden: { opacity: 0, x: 100},
    visible: (i: number) => ({ 
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: (i *.25) 
        }
    })
}

const list = {
    hidden: { opacity: 0, y: -35 },
    visible: { 
        opacity: 1,
        y: 0, 
        transition: {
            staggerChildren: 2,
            type: 'spring', 
        }
    }
}




const FlashCard: React.FC = () => {


    // We can make this a state that chooses what flashcard list you are pulling from

    //the downside of a bunch of discrete lists is you might lose the option to pull a random one from the total pile
    // we also need to think about how to make sublists, like can there be a pile for ones you've already pulled so you can't pull the same card again?
    // would that even be a good thing?

    const [data, setData] = useState(FlashcardList)

    // This should maybe be data.length if I'm gonna make data a state thing
    const totalCards = FlashcardList.length


    // Flashcard Flip-State Handler
    const [flip , setFlip] = useState<boolean>(false)

    // Flashcard Multiple Choice Handler
    const [revealChoices, setRevealChoices] = useState<boolean>(false)

    // Flashcard ID handler
    const [flashcardID, setFlashcardID] = useState<number>(0)

    const [showSettings, setShowSettings] = useState<boolean>(false);


    

    const controls = useAnimation()
    // Flashcard Animation Handlers
    function handleClickFlip(){
         
            setFlip(!flip);
            controls.start({
                rotateX: 360,
                rotate: 360,
                scale: [1, 1.2, 1.3, 1.4, 1.5, 1.51, 1.5, .9, 1],
                boxShadow: ["10px 10px 10px black", "15px 15px 15px var(--color-theme)", "10px 10px 10px black"],
                transition: { type: 'spring', stiffness: 35, },
                transitionEnd: {
                    rotateX: 0,
                    rotate: 0
                }
            });
            
    } 

    function handleClickNew(){
           
            controls.start({
                rotate: [0, 720, -90, 0],
                scale: [1, 0, 0, 1],
                y: [0, -200, -200, 0],
                x: [0, 200, -200, 0],
                transition: { type: 'spring', stiffness: 150},
            });
            setFlip(false);
            setRevealChoices(false);
            setFlashcardID( Math.floor(Math.random() * totalCards) );            
    }  

    return (
        <div className='flash-card-container'>
            <motion.div className="flash-card"
                initial={{x:0, y:0, rotate:0, scale:1}}
                animate={controls}
                onClick={handleClickFlip}
            >
                <motion.h3 layout> Card #{data[flashcardID].id} </motion.h3>
                { flip ? 
                    <motion.p layout> Answer: {data[flashcardID].answer} </motion.p> 
                    : 
                    <motion.p layout> Question: {data[flashcardID].question} </motion.p>
                }
                { !flip ? revealChoices ?
                    <motion.div>
                    {data[flashcardID].options.map((option, i) => {
                        return <motion.li 
                                variants={options}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                                >
                                    {option}
                                </motion.li>
                    })}
                    
                    </motion.div>
                    :    
                    <motion.p layout></motion.p> : <></>   
                }
                
            </motion.div>

            <div className="deck-controls">
                <ul className='deck-controls-list'>
                    <li id='settings-li'
                        onClick={() => setShowSettings(!showSettings)}
                    >
                        <Image className='nav-image' src="/settings-white.png" height={20} width={20} />
                    </li>
                    { showSettings ? 
                    <motion.ul className='deck-controls-list'
                        variants={list}
                        initial="hidden"
                        animate="visible"
                    >
                        <li> All </li>
                        <li> 1.1 </li>
                        <li> 1.2 </li>
                    </motion.ul>
                    : <></>  
                    }
                </ul>
            </div>

            <div className='flash-card-controls'>
                { !flip ?
                     <motion.button layout onClick={() => setRevealChoices(!revealChoices)} >{revealChoices ? "Hide" : "Reveal"} Choices </motion.button>
                     :<></>
                }
               
                <motion.button layout onClick={handleClickFlip} > Flip Card </motion.button>
                <motion.button layout onClick={handleClickNew} > New Card </motion.button>
            </div>


        </div>
    )
    
}


// This should be obsolete now, but how is it currently getting the intellisense info?
interface SAMPLE_FLASHCARD_TYPE {
        id: number;
        question: string;
        answer: string;
        options: [string, string, string, string]
}




export default FlashCard