import {useState} from 'react'
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import AboutLinkIcon from './components/AboutLinkIcon'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from './data/FeedbackData';
import Card from './components/shared/Card';
import FeedbackStats from './components/FeedbackStats';
import AboutPage from './pages/AboutPage';
import React from 'react';
import FeedbackForm from './components/FeedbackForm';
function App()
{
    const [feedback, setFeedback] = useState(FeedbackData);
    const addFeedback=(newFeedback)=>{newFeedback.id=uuidv4()
        setFeedback([newFeedback,...feedback])
    }
    const deleteFeedback=(id)=>{
        if(window.confirm("Are you sure you want to delete this feedback?")){
            setFeedback(feedback.filter((item)=>item.id!==id)
            )}
    }
    const [feedbackEdit,setFeedbackEdit]=useState({item:{},
        edit:false
    })
    const editFeedback=(item)=>{
       setFeedbackEdit({item,edit:true})
    }
    return(
    <Router>
        <Header />
        <div className="container">
        <Routes>
            <Route
              path='/'
              element={
                <>
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
            <feedbackEdit editFeedback={editFeedback}/>
            <FeedbackList
             feedback={feedback}
             handleDelete={deleteFeedback} />
              </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>

        <AboutLinkIcon/>
        </div>
    </Router>
    )
}
export default App;