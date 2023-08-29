import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Form />
    </>
  );
};

export default App;
