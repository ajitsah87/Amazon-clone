import "./App.css";
import Header from "./Components/Header";
import { useEffect } from "react";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Payment from "./Components/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise=loadStripe("pk_test_51NP8xaSBhZx1xmzegZXmBywpCaWGNRfd1KptwDAHcebfgyYaSZMY9b954veuEKRlIsqqbYwn0RgOw6zCqrGgY5lV00pLpKt2A1")

function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // then user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />{" "}
              </>
            }
          />
          <Route
            path="/Payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>

                <Payment />{" "}
                </Elements>
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                {" "}
                <Header /> <Home />{" "}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
