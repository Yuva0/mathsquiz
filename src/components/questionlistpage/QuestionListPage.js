import axios from 'axios';
import { useEffect, useState } from 'react';
import Shuffle from '../../util/shuffle';
import classes from './css/QuestionListPage.module.css';
import QuestionPage from '../pages/questionpage/Questionpage';
import BoxLoader from 'react-spinners/BounceLoader';

const QuestionListPage = (props) => {

    const [questionsList, setQuestionsList] = useState([]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [score, setScore] = useState(0);

    useEffect(() => {
        let isMount = true;
        const fetchQuestions = async() => {
            const res = await axios.get("https://opentdb.com/api.php?amount=10&category=19&type=multiple");
            setQuestionsList(res.data.results);
            setIsLoading(false);
        };

        if(isMount){
            fetchQuestions();
        }

        return () => {isMount=false};
    },[]);

    const questionsHandler = (point) => {
        setScore((score) => score+point);

        if(questionNumber === 9){
            return props.scoreHandler(score);
        }
        else{
            setQuestionNumber((value) => value+1);
        }
    };

    let questionsListDiv;
    
    if(questionsList.length !== 0){

        let answersArray = [...questionsList[questionNumber].incorrect_answers, questionsList[questionNumber].correct_answer];
        answersArray = Shuffle(answersArray);

        questionsListDiv = <QuestionPage key={questionNumber} number={questionNumber+1} 
        question={questionsList[questionNumber].question} answersArray={answersArray}
        wrongAnswer={questionsList[questionNumber].incorrect_answers} 
        rightAnswer={questionsList[questionNumber].correct_answer} 
        nextQuestionHandler = {questionsHandler}/>
    }
    
    return (
        <div className={classes.questionsListContainer}>
            {questionsListDiv}
            <BoxLoader color='white' loading={isLoading}/>
        </div>
    );

};

export default QuestionListPage;