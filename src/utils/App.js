import React from "react";
import "../Main.css";
import { Provider } from "react-redux";
import { store } from "./Store";  
import Body from "../components/Body";
function App() {
  return (
    <>
    <Provider store={store}>
      <Body/>
    </Provider>
    </>
  );
}

export default App;
