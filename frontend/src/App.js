import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Bmi from "./pages/Bmi";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Homescreen from "./pages/Homescreen";
import About from "./pages/About";
import { FoodForm } from "./pages/FoodForm";
import { Profile } from "./pages/Profile";
import { itemList } from "./pages/itemList";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {
  return (
    <div>
      {/* Routing */}
      <Router>
        <Header />
        <Route exact path="/" component={Homescreen} />
        <Route exact path="/bmi" component={Bmi} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/fooditems" component={itemList} />
        <Route exact path="/addfooditems" component={FoodForm} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile" component={Profile} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
