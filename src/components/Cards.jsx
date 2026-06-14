import { useState } from 'react'

const Cards = () => {

    const QuestionCard = [
        { img: "./src/assets/Australia.png", answer: "Australia" },
        { img: "./src/assets/Brazil.png", answer: "Brazil" },
        { img: "./src/assets/Egypt.png", answer: "Egypt" },
        { img: "./src/assets/India.png", answer: "India" },
        { img: "./src/assets/Madagascar.jpg", answer: "Madagascar" },
        { img: "./src/assets/Mexico.png", answer: "Mexico" },
        { img: "./src/assets/New-Zealand.png", answer: "New Zealand" },
        { img: "./src/assets/Panama.webp", answer: "Panama" },
        { img: "./src/assets/Singapore.png", answer: "Singapore" },
        { img: "./src/assets/United-States.jpg", answer: "United States" }
    ]


    function shuffle() {
        return (Math.floor(Math.random() * 10))    
    }
    
    const [flip, setFlip] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(shuffle(QuestionCard))

    shuffle(QuestionCard)

    
    
    const flipCard = () => {
        setFlip(!flip)
    };
    

    const handleNext = () => {
            setCurrentIndex(shuffle(currentIndex))
            setFlip(false)
    }

    shuffle(QuestionCard)

    return (
        <><div className={`card ${flip ? 'flip' : ''}`} onClick={flipCard}>
                <img className='card-front' src={QuestionCard[currentIndex].img}/>
                <div className='card-back' >{QuestionCard[currentIndex].answer}</div>
            </div>
        <button onClick={handleNext}>🡲</button></>

    )

}
export default Cards;