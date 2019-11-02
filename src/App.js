import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./RootReducer";
import createSagaMiddleware from 'redux-saga'
import {authWatcher} from "./authentication/AuthSaga";
import {Provider} from "react-redux";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faAt, faBars, faCheckSquare, faCoffee, faTerminal} from '@fortawesome/free-solid-svg-icons'
import './App.scss'
import Amplify from 'aws-amplify';
import AuthWatcher from "./authentication/AuthWatcher";
import {withFederated} from "aws-amplify-react";
import Header from "./header";
import Blog from "./routes/blog";
import Mentor from "./sections/Mentoring";
import Developer from "./sections/Developer";
import Designer from "./sections/Designer";
import AboutMe from "./sections/AboutMe";
import Footer from "./Footer";
import Admin from "./routes/Admin";
import {loadConfig} from "./aws/awsConfig";
import ContactUs from "./components/ContactUs";
import Feedback from "./feedback/Feedback";

Amplify.configure(loadConfig());

library.add(fab, faCheckSquare, faCoffee, faBars, faAt, faTerminal)
const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(authWatcher);

const App = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Feedback/>
                <AuthWatcher/>
                <div className="shane-preater">
                    <Header showContact={() => setShowContact(true)}/>
                    <ContactUs show={showContact} setShow={setShowContact}/>
                    <div className="content">
                        <Route path="/blog" component={Blog}/>
                        <Route path="/mentor" component={Mentor}/>
                        <Route path="/dev" component={Developer}/>
                        <Route path="/design" component={Designer}/>
                        <Route path="/admin" component={Admin}/>
                        <Route path="/" exact component={AboutMe}/>
                    </div>
                    <Footer showContact={() => setShowContact(true)}/>
                </div>
            </Provider>
        </BrowserRouter>
    );
};

export default withFederated(App);
