import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./header";
import Routes from "./router";
import Banner from "./jumbotron/Banner";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./RootReducer";
import createSagaMiddleware from 'redux-saga'
import {authWatcher} from "./authentication/AuthSaga";
import {Provider} from "react-redux";
import './App.scss'
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(saga))

saga.run(authWatcher)

const App = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <Banner/>
                    <Container id="main-content">
                        <Routes/>
                    </Container>
                    <Footer/>
                </div>
            </Provider>
        </BrowserRouter>
    );
};

export default App;
