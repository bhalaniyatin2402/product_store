import Navbar from "./components/Navbar/Navbar"
import CustomRoutes from "./routes/CustomRoutes"
import { Provider } from "react-redux"
import store from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CustomRoutes />
    </Provider>
  )
}

export default App
