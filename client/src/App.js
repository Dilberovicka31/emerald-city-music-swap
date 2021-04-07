
import Home from "./pages/Home";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuthTokenStore } from "./utils/auth"
import GuestRoute from "./components/GuestRoute";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import BrowseForm from "./components/BrowseForm";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost"
import {Route } from "react-router-dom";



function App() {
 const isAuthDone = useAuthTokenStore()
  return (
  <div>

    {isAuthDone && 
    <div>
      <NavTabs/>
      <Route exact path="/" component={Home}/>
      <GuestRoute exact path="/browse" component={BrowseForm} redirect to ="/userPage" />
      <PrivateRoute exact path="/createpost" component={CreatePost} redirectTo = "/login"/>
      <PrivateRoute exact path="/updatepost" component={UpdatePost} redirect to ="/userPage"/>
      <PrivateRoute exact path="/myPosts" component={LandingPage} redirect to ="/userPage"/>
      <GuestRoute exact path ="/signup" component={Signup} redirectTo = "/userPage"/>
      <GuestRoute exact path ="/login" component={Login} redirectTo = "/userPage"/>
      <GuestRoute exact path ="/userPage" component={LandingPage} />
      <Footer />
    </div>

    }
  </div>
  )
}

export default App;
