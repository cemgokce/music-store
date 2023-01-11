import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FovoritesPage from "./pages/FovoritesPage";
import NewMusicPage from "./pages/NewMusicPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/favorite">
            <FovoritesPage />
          </Route>
          <Route path="/new-music">
            <NewMusicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path='/music/:searchKey/search'>
            <MainPage />
          </Route>
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
