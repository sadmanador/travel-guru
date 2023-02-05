import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";


function App() {
  return (
    <div className="App container mx-auto">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
