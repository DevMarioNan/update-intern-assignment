import LoginPage from './scenes/LoginPage'
import HomePage from './scenes/HomePage'
import { BrowserRouter , Routes , Navigate , Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  const isAuth = useSelector((state) => state.user);


  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
