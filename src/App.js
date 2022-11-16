import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route
              path="/"
              element={currentUser ? <Home /> : <Login/>}
            />
            <Route
              path="/register"
              element={currentUser ? <Home /> : <Register />}
            />
            <Route
              path="/login"
              element={currentUser ? <Home /> : <Login/>}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
