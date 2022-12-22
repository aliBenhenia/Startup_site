import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Footer from './component/Footer';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Footer />
      {/* <Login /> */}
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
