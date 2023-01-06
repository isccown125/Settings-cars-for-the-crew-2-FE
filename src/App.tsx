import React from 'react';
import AllVehicles from "./pages/AllVehicles";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/vehicles' element={<AllVehicles/>}></Route>
    </Routes>
  );
}

export default App;
