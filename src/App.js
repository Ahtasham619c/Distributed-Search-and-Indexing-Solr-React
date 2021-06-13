import React, { useState, Fragment } from "react";
import Navbar from "./components/layout/Navbar.js";
import "./App.css";
import Users from "./components/users/Users.js";
import Search from "./components/users/Search.js";
import Alert from "./components/layout/Alert.js";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //Search Solr 
 const searchUsers = async (text,field) => {
    setLoading(true);
    const net = await axios.get(`http://localhost:8983/solr/Netflix_data/select?q=${field}%3A${text}`);
    setUsers(net.data.response.docs);
    setLoading(false);
  };
  const clearUsers = () => {
    setUsers([]);
  };

  const showAlert = (msg, type) => {
    setAlert({ alert, msg });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0}
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
