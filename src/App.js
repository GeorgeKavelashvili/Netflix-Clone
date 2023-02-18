import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/Home/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth);
      } else {
        //logged out
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}
export default App;

//tu ginda ro homepage naxo essaa
// export default App;
// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomeScreen from "./screens/Home/HomeScreen";
// import LoginScreen from "./screens/LoginScreen";
// function App() {
//   const user = null;
//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomeScreen />}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
