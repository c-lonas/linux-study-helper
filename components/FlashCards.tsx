import React, { FunctionComponent } from 'react';

import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0,},
    visible: { 
        opacity: 1,
    
        transition: {
            type: 'spring', 
        }
    }
}



const FlashCards: React.FC = () => {
    return (
        <div className='flash-card-container'>
            <div className="flash-card">
                <h3>Question #</h3>
                <p>Here is the text for the first question. It's a really good question</p>
            </div>
            <div className='flash-card-controls'>
                <button>Flip Card</button>
                <button>New Card</button>
            </div>


        </div>
    )
    
}

export default FlashCards