import { useState } from 'react'

const Cards = () => {

    const QuestionCard = [

        { img: "./src/assets/Start.png", answer: "Press the arrow button to start"},
        { img: "./src/assets/Australia.png", answer: "Australia" },
        { img: "./src/assets/Brazil.png", answer: "Brazil" },
        { img: "./src/assets/Egypt.png", answer: "Egypt" },
        { img: "./src/assets/India.png", answer: "India" },
        { img: "./src/assets/Madagascar.jpg", answer: "Madagascar" },
        { img: "./src/assets/Mexico.png", answer: "Mexico" },
        { img: "./src/assets/New-Zealand.png", answer: "New Zealand" },
        { img: "./src/assets/Panama.webp", answer: "Panama" },
        { img: "./src/assets/Singapore.png", answer: "Singapore" },
        { img: "./src/assets/United-States.jpg", answer: "United States" },
        
    ]
    const [correct_country, setCheckedCountry] = useState('');
    const [flip, setFlip] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);
    const total = 10;

    const [inputs, setInputs] = useState({
        'country': ''
    });

    const flipCard = () => {
        setFlip(!flip)
    };
    
    const onCheckAnswer = () => {
        if (QuestionCard[currentIndex].answer != inputs['country']){

            setCheckedCountry('wrong');
            if (currentStreak > longestStreak)
            {
                setLongestStreak(currentStreak)
            }
            setCurrentStreak(0);
        }
        else {
            setCheckedCountry("correct");
            setCurrentStreak(currentStreak + 1);
        }
    }

    const handleNext = () => {
        setCheckedCountry('');
        setInputs({ 'country': ''});
        setCurrentIndex(currentIndex + 1);
        setFlip(false);
    }

    const handlePrev = () => {
        setCheckedCountry('');
        setInputs({ 'country': ''});
        setCurrentIndex(currentIndex - 1)
        setFlip(false);
    }

    return (
        <>
        <h3 className='streak'>Current Streak: {currentStreak} Longest Streak: {longestStreak}</h3>
        <div className={`card ${flip ? 'flip' : ''}`} onClick={flipCard}>
                <img className='card-front' src={QuestionCard[currentIndex].img}/>
                <div className='card-back' >{QuestionCard[currentIndex].answer}</div>
            </div>
        <div className='submit-answer' >Guess the answer here:
            <input id={correct_country} name='country' type="text" placeholder='Place your answer here...' value={inputs['country']}
             onChange={(e) =>
                setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}></input>
            <button className="button-submit" onClick={onCheckAnswer}>Submit Guess</button>
        </div>
        <button className= 'navigation'onClick={handlePrev} disabled={currentIndex === 0}>🡰</button>
        <button className='navigation' onClick={handleNext} disabled={currentIndex === QuestionCard.length - 1}>🡲</button>
        </>

    )

}
export default Cards;