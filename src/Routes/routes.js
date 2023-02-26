import React, { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { createBrowserHistory } from "history";
//import { Settings } from "@mui/icons-material";

const ForgotPassword = lazy(() =>
  import("../Components/ForgotPassword/ForgotPassword.js")
);
const Login = lazy(() => import("../Components/Login/Login.js"));
const LandingPagePatient = lazy(() =>
  import("../Components/LandingPagePatient/LandingPagePatient")
);
const ChatRoom = lazy(() => import("../Components/ChatRoom/ChatRoom.js"));
const CreateAlter = lazy(() =>
  import("../Components/CreateAlter/CreateAlter.js")
);

const CreateAccount = lazy(() =>
  import("../Components/CreateAccount/CreateAccount.js")
);
const AlterHomePage = lazy(() =>
  import("../Components/AlterHomePage/AlterHomePage.js")
);
const Loader = lazy(() => import("../Atoms/Loader/Loader"));
const CreateRoom = lazy(() => import("../Components/MyRoom/MyRoom.js"));
const SettingsPage = lazy(() =>
  import("../Components/SettingsPage/SettingsPage.js")
);

class RouterClass extends Component {
  render() {
    const history = createBrowserHistory();

    return (
      <div className="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              exact
              path="/home"
              element={<AlterHomePage history={history} />}
            />
            <Route
              path="/landing-page"
              element={<LandingPagePatient history={history} />}
            />
            <Route
              path="/forgot-password"
              element={<ForgotPassword history={history} />}
            />
            <Route
              path="/create-account"
              element={<CreateAccount history={history} />}
            />
            <Route
              path="/create-alter"
              element={<CreateAlter history={history} />}
            />
            <Route path="/my-room" element={<CreateRoom history={history} />} />
            <Route
              exact
              path="/settings"
              element={<SettingsPage history={history} />}
            />
            <Route path="/chat-room" element={<ChatRoom history={history} />} />
            <Route exact path="/" element={<Login history={history} />} />
            {/* <Route exact path='/' element={<Loader />} /> */}
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default RouterClass;
