import { useEffect } from "react";
import { RouterProvider } from "react-router/dom";
import "./App.css";
import { router } from "./routes";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <RouterProvider router={router} />,
    </>
  );
}

export default App;
