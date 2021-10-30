import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Navigations from './Components/Shared/Navbar/Navbar';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import SingUp from './Components/Accountpage/SignUp';
import SignIn from './Components/Accountpage/SignIn';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/Private route/PrivateRoute'
import MyBooking from './Components/My-Orders/MyBooking';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navigations />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/accounts">
              <SignIn />
            </Route>
            <PrivateRoute exact path="/my-booking" >
              <MyBooking />
            </PrivateRoute>
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
