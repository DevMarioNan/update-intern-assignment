import LoginPage from './scenes/LoginPage'

import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {


  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
