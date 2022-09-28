import Homepage from "./components/pages/homepage/Homepage";
// import QuestionPage from "./components/pages/questionpage/Questionpage";
import ResultPage from "./components/pages/resultpage/ResultPage";
import QuestionListPage from "./components/questionlistpage/QuestionListPage";

import classes from './App.module.css';
import { useState } from "react";


function App() {
  
  let name;
  
  const restartHandler = () => {
    setAppDiv(<Homepage usernameHandler={usernameHandler}/>)
  }

  const scoreHandler = (score) => {
    setAppDiv(<ResultPage name={name} score={score} restartHandler={restartHandler}/>)
  }

  const usernameHandler = (username) => {
    name = username;
    setAppDiv(<QuestionListPage username={username} scoreHandler={scoreHandler}/>)
  };

  const [appDiv, setAppDiv] = useState(<Homepage usernameHandler={usernameHandler}/>);


  return (
    <div className={classes.appContainer}>
      {/* <Routes>
        <Route path="/" element={<Homepage usernameHandler={usernameHandler}/>}/>
        <Route path="/questions" element={<QuestionListPage/>} username={name}/>
        <Route path="/result" element={<ResultPage/>}/>
      </Routes> */}
      {appDiv}
    </div>
  );
}

export default App;
