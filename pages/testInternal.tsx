import type { NextPage } from 'next'

import FlashcardList from '../components/FlashcardList'


interface SAMPLE_FLASHCARD_TYPE {
        id: number;
        question: string;
        answer: string;
        options: [string, string, string, string]
}


const testInternal: NextPage = () => {

    const data = FlashcardList

    return (
        <>
            <h1> Internal Test Page </h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}> {item.question} </li>

                ))}
                <li>{data[0].answer}</li>

            </ul>
      
        </>
    )
    
    

}


export default testInternal