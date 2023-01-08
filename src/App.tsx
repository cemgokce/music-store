import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilPage";
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
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
          <Route path="/new-music" exact>
            <NewMusicPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
