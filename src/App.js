import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Layout from './layouts/Layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Shopping from './pages/Shopping';
import Vapers from './pages/Vapers';
import Eliquids from './pages/Eliquids';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/shopping" element={<Shopping/>} />
          <Route path="/vapers" element={<Vapers/>} />
          <Route path="/eliquids" element={<Eliquids/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}




export default App;