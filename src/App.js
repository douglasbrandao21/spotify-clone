import React, { Component, Fragment } from "react";

import { Provider } from "react-redux";

import "./config/reactotron";

import GlobalStyle from "./styles/global";

import Sidebar from "./components/Slidebar";
import Player from "./components/Player";
import Header from "./components/Header";
import ErrorBox from "./components/ErrorBox";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Wrapper>
            <GlobalStyle />
            <Container>
              <Sidebar />
              <Content>
                <ErrorBox />
                <Header />
                <Routes />
              </Content>
            </Container>

            <Player />
          </Wrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;