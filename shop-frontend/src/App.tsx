import React from 'react';
import {Container, CssBaseline} from "@mui/material";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import {Route, Routes} from "react-router-dom";
import Products from "./features/products/Products";


function App() {
  return (
    <>
      <CssBaseline/>
      <header>
        <AppToolbar/>
      </header>
        <main>
            <Container maxWidth="xl">
                <Routes>
                    <Route path="/" element={<Products/>}/>
                </Routes>
            </Container>
        </main>
    </>
  );
}

export default App;
