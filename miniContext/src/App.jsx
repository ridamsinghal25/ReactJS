import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Mini Context Project</h1>
        <Login />
        <br />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;

// steps to make mini context

// step 1
// create userContext

// step 2
// create useContextProvider

// step 3
// config the App.jsx file

// step 4
// create Login component

// step 5
// create Profile component
