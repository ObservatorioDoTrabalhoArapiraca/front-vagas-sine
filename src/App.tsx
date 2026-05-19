import { BrowserRouter, Route, Routes } from "react-router-dom"


import { Toaster } from "sonner"
import { routePaths } from "@/lib/routes"


function App() {
  return (
   
      <div className="App">
      <Toaster />
      <BrowserRouter>
   
        <main>
          {/* TODO: retirar os main de todas as páginas */}
          <Routes>
            {routePaths.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
      </BrowserRouter>

           
    </div>
    
  )
}

export default App
