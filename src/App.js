// import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './components/home/Home';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import InsightPost from "./components/insightpost/InsightPost";
import { useDispatch, useSelector } from "react-redux";
import { setSignin, setSignout } from "./redux/Data/signSlice";
import axios from "axios";
import { useEffect } from "react";
import Profile from "./components/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import FindJobs from "./components/findJobs/FindJobs";
import CreateNewResume from "./components/createNewResume/CreateNewResume";

function App() {

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value)
  const location =useLocation()
  useEffect(()=>{
    if(localStorage.getItem('theme')===null){
      localStorage.setItem('theme',true)
    }
  },[])
  useEffect(() => {
    async function currentUser() {
      try {
            const userD = await axios.get(`http://localhost:8000/api/users/get`,
                { withCredentials: true }
            )
            if(userD?.data?.success===false){
              const userData = await axios.post("http://localhost:8000/api/auth/logout", {}, { withCredentials: true });
                dispatch(setSignout())
            }
            else{
                dispatch(setSignin(userD.data))
            }
        }
        catch (err) {
            
            // localStorage.removeItem("userData")
            console.log(err)
        }
    }
    currentUser()
}, [location.pathname])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/create-new-resume' element={<CreateNewResume />} />

          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/insightpost' element={<InsightPost />} />
        </Routes>
    </div>
  );
}

export default App;
