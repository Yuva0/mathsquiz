import { Fragment } from 'react';
import classes from './css/ResultPage.module.css';
import star from '../../../assets/images/star.png';
import medal from '../../../assets/images/medal.png';
import thumbs from '../../../assets/images/thumb.png';
import tripping from '../../../assets/images/mistake.png';

const ResultPage = (props) => {

    const returnHandler = () => {
        return props.restartHandler();
    };

    let scoreCardDiv;
    if(props.score === 10){
        scoreCardDiv = <Fragment><img alt="Result" className={classes.trophyImage} src={star}/>
        <div className={classes.congrats}><h2>Perfect Score {props.name}!!</h2></div></Fragment>;
    }
    else if(props.score >= 7){
        scoreCardDiv = <Fragment><img alt="Result" className={classes.medalImage} src={medal}/>
        <div className={classes.congrats}><h3>Congratulations {props.name}!</h3></div></Fragment>;
    }
    else if(props.score >= 4){
        scoreCardDiv = <Fragment><img alt="Result" className={classes.thumbs} src={thumbs}/>
        <div className={classes.congrats}><h3>Well done {props.name}</h3></div></Fragment>;
    }
    else{
        scoreCardDiv = <Fragment><img alt="Result" className={classes.tripping} src={tripping}/>
        <div className={classes.congrats}><h3>Not good {props.name}!</h3></div></Fragment>;
    }

    

    return (
        <div className={classes.resultPageContainer}>
            {scoreCardDiv}
            <div className={classes.scored}><h1>You scored {props.score}/10!</h1></div>
            <button className={classes.playAgain} onClick={returnHandler}><h3>Play Again!</h3></button>
        </div>
    );
};

export default ResultPage;