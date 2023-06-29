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
  }

  return (
    <div>
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

      <Routes>
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
