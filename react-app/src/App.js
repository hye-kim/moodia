import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { authenticate } from "./store/session";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import MoodPage from "./components/MoodPage/MoodPage";
import Sidebar from "./components/Elements/Sidebar/Sidebar";
import Navbar from "./components/Elements/Navbar";
import GoalPage from "./components/GoalPage/GoalPage";
import ObservationPage from "./components/ObservationPage/ObservationPage";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  const user = useSelector((state) => state.session.user);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/signup" exact={true}>
          <SignUpPage />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/dashboard">
          <Navbar />
          <div className="flex justify-center mx-2">
            <div className="flex flex-col md:flex-row md:justify-between w-full lg:w-5/6 md:m-0">
              <Sidebar />
              <Switch>
                <ProtectedRoute path="/dashboard" exact={true}>
                  <DashboardPage user={user} />
                </ProtectedRoute>
                <ProtectedRoute path="/dashboard/moods" exact={true}>
                  <MoodPage user={user} />
                </ProtectedRoute>
                <ProtectedRoute path="/dashboard/goals" exact={true}>
                  <GoalPage user={user} />
                </ProtectedRoute>
                <ProtectedRoute path="/dashboard/habits" exact={true}>
                  <div>Hello</div>
                </ProtectedRoute>
                <ProtectedRoute path="/dashboard/observations" exact={true}>
                  <ObservationPage user={user} />
                </ProtectedRoute>
                <ProtectedRoute>
                  <Redirect to="/not-found" />
                </ProtectedRoute>
              </Switch>
            </div>
          </div>
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <LandingPage user={user} />
        </Route>
        <Route path="/not-found" exact={true}>
          <NotFoundPage user={user} />
        </Route>
        <Route>
          <Redirect to="/not-found" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
