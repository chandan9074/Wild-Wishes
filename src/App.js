//import files
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Navigations from './Components/Shared/Navbar/Navbar';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import SingUp from './Components/Accountpage/SignUp';
import SignIn from './Components/Accountpage/SignIn';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/Private route/PrivateRoute'
import MyBooking from './Components/My Bookings/MyBooking';
import ServiceDetails from './Components/Homepage/ServiceDetails/ServiceDetails';
import AddTour from './Components/AddTourgpage/AddTour';
import ManageAllBook from './Components/ManageAllBookings/ManageAllBook';
import NotFound from './Components/NotFoundPage/NotFund';

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
            <Route exact path="/home">
              <Homepage />
            </Route>
            <Route exact path="/accounts">
              <SignIn />
            </Route>
            <PrivateRoute exact path="/my-booking" >
              <MyBooking />
            </PrivateRoute>
            <PrivateRoute exact path="/manage-booking" >
              <ManageAllBook />
            </PrivateRoute>
            <PrivateRoute exact path="/add-tour" >
              <AddTour />
            </PrivateRoute>
            <PrivateRoute exact path="/booking-details/:id" >
              <ServiceDetails />
            </PrivateRoute>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
