import { Routes, Route } from "react-router-dom"
import { routes } from "./routes"
import Layout from "./layout"

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Layout>
  )
}

export default App
