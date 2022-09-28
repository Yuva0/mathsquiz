import classes from './css/Questionpage.module.css';

import { useState } from 'react';

const QuestionPage = (props) => {

    const [classState, setClassState] = useState([0,0,0,0]);
    const [disabled, setDisabled] = useState(false);
    const [point, setPoint] = useState(0);
    
    const checkAnswerHandler = (e) => {
        const answer = e.target.innerHTML;
        if(disabled)
            return;
        if(answer === props.rightAnswer){
            setPoint(1);
            let tempClassState = [...classState];
            let index = props.answersArray.indexOf(props.rightAnswer);
            tempClassState[index] = 1;
            setClassState(tempClassState);
        }
        else{
            setPoint(0);
            let tempClassState = [...classState];
            let index = props.answersArray.indexOf(answer);
            tempClassState[index] = 2;

            index = props.answersArray.indexOf(props.rightAnswer);
            tempClassState[index] = 1;
            setClassState(tempClassState);
        }
        setDisabled(true);
    };

    const nextQuestionHandler = () => {
        props.nextQuestionHandler(point);
    };

    let answerListDiv;
    if(props.answersArray.length !== 0){
        answerListDiv = props.answersArray.map((answer, index) => {return <div
            className={classState[index] === 0 ? classes.defaultState : classState[index] === 1 ? classes.correctState : classes.wrongState}
            key={index} onClick={checkAnswerHandler}><h3 dangerouslySetInnerHTML={{__html: answer}}></h3></div>})
    }
    

    return (
        <div className={classes.questionContainer}>
            <div className={classes.number}><h2>Question {props.number}.</h2></div>
            <div className={classes.question}><h3 dangerouslySetInnerHTML={{__html: props.question}}/></div>
            <div className={classes.answers}>
                {answerListDiv}
            </div>
            <button className={classes.next} onClick={nextQuestionHandler}><h4>Next</h4></button>
        </div>
    );
};

export default QuestionPage;