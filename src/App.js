import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import UserContext from "contexts/user";
import firebase from "utils/firebase";
import { Link } from "react-router-dom";
import Resume from "pages/Resume";
import Work from "pages/Work";
import WhatsNew from "pages/WhatsNew";
import Contact from "pages/Contact";

const App = () => {
    // fetch() my user data, ensure it's on every page
    const [userData, setUserData] = useState({
        id: 1234,
        username: `juneate`,
        photo: `tim-berners-lee.jpg`,
        favourites: [],
        cart: [],
    });

    // Connect to the DB
    const db = firebase.firestore();

    // Runs only once, after the first render
    useEffect(() => {}, []);

    return (
        <Router>
            <UserContext.Provider
                value={{
                    data: userData,
                }}
            >
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                    <Route path="/work">
                        <Work />
                    </Route>
                    <Route path="/whatsnew">
                        <WhatsNew />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </UserContext.Provider>
        </Router>
    );
};

export default App;
