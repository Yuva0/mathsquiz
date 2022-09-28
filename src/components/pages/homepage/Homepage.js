import { Fragment, useState } from 'react';
import classes from './css/Homepage.module.css';
import homepageImage from '../../../assets/images/project.png';
const Homepage = (props) => {

    const [name, setName] = useState("");
    const nameChangeHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const returnHandler = (e) => {
        e.preventDefault();
        if(name.length !== 0){
            return props.usernameHandler(name);
        }
    };


    let homepageDiv=undefined;
        homepageDiv = <Fragment><div className={classes.image}><img alt="maths" src={homepageImage}/></div>
        <div className={classes.mainTitle}><h4>maths quiz</h4></div>
        <form onSubmit={returnHandler}>
            <div className={classes.name}>
                <div><h3><label htmlFor="name">Enter Your Name:</label></h3></div>
                <div className={classes.inputNameDiv}><input className={classes.inputName} type="text" id="name" name="name" value={name} required onChange={nameChangeHandler}/></div>
            </div>
            <button className={classes.play} type="submit"><h3>Let's Play!</h3></button>
        </form></Fragment>
    

    return (
        <div className={classes.homepageContainer}>
            {/* <div className={classes.subTitle}><h3>Quiz App</h3></div> */}
            {homepageDiv}
        </div>
    );
};

export default Homepage;