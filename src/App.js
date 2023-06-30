import { Routes, Route, Link } from 'react-router-dom';

// Components
import BenAwardReactQuestions from './Components/BenAwardReactQuestions';
import Question1 from './Components/Question1.jsx'
import Question2 from './Components/Question2';
import Question3 from './Components/Question3';
import Question4 from './Components/Question4';
import Question5 from './Components/Question5';
import Question6 from './Components/Question6';
import Question7 from './Components/Question7';
import Question8 from './Components/Question8';
import Question9 from './Components/Question9';
import Question10 from './Components/Question10';
import Question11 from './Components/Question11';
import Question12 from './Components/Question12';
import Question13 from './Components/Question13';
import Question14 from './Components/Question14';
import Question15 from './Components/Question15';
import Question16 from './Components/Question16';
import Question17 from './Components/Question17';
import Question18 from './Components/Question18';
import Question19 from './Components/Question19';
import Question20 from './Components/Question20';
import Question21 from './Components/Question21';
import Question22 from './Components/Question22';
// Components

function App() {
  const myLinks = {
    "Load more users": {
      path: "/load-more-users",
      component: <BenAwardReactQuestions />
    },
    "Question1": {
      path: "/question/1",
      component: <Question1 />
    },
    "Question2": {
      path: "/question/2",
      component: <Question2 />
    },
    "Question3": {
      path: "/question/3",
      component: <Question3 name="Prajwal Gautam" age="22" title="React developer" />
    },
    "Question4": {
      path: "/question/4",
      component: <Question4 name="Prajwal Gautam" technology="React" />
    },
    "Question5": {
      path: "/question/5",
      component: <Question5 />
    },
    "Question6": {
      path: "/question/6",
      component: <Question6 />
    },
    "Question7": {
      path: "/question/7",
      component: <Question7 />
    },
    "Question8": {
      path: "/question/8",
      component: <Question8 />
    },
    "Question9": {
      path: "/question/9",
      component: <Question9 />
    },
    "Question10": {
      path: "/question/10",
      component: <Question10 />
    },
    "Question11": {
      path: "/question/11",
      component: <Question11 />
    },
    "Question12": {
      path: "/question/12",
      component: <Question12 />
    },
    "Question13": {
      path: "/question/13",
      component: <Question13 />
    },
    "Question14": {
      path: "/question/14",
      component: <Question14 />
    },
    "Question15": {
      path: "/question/15",
      component: <Question15 />
    },
    "Question16": {
      path: "/question/16",
      component: <Question16 />
    },
    "Question17": {
      path: "/question/17",
      component: <Question17 />
    },
    "Question18": {
      path: "/question/18",
      component: <Question18 />
    },
    "Question19": {
      path: "/question/19",
      component: <Question19 />
    },
    "Question20": {
      path: "/question/20",
      component: <Question20 />
    },
    "Question21": {
      path: "/question/21",
      component: <Question21 />
    },
    "Question22": {
      path: "/question/22",
      component: <Question22 />
    },
  }

  return (
    <div>

      <Routes>
        <Route path='/' element={
          <>
            <h1>Navigate to a specific page</h1>
            <div>
              {
                Object.keys(myLinks).map((key, idx) => {
                  return (
                    <div key={idx}>
                      <Link to={myLinks[key].path}>
                        {key}
                      </Link>
                    </div>
                  )
                })
              }
            </div>
            <hr />
          </>
        } />

        {
          Object.keys(myLinks).map((key, idx) => (
            <Route key={idx} path={myLinks[key].path} element={myLinks[key].component} />
          ))
        }

      </Routes>
    </div>
  );
}

export default App;
