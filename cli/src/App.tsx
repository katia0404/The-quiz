import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import '/src/pages/Auth.tsx';
function App() {

  return (
    <div className="app">
        <AuthPage />
    </div>
  <RouterProvider router={router}/>

}

export default App;