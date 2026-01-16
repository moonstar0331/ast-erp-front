import { Route, Routes } from 'react-router-dom'
import Login from './pages/loginPage.tsx'
import './tailwind.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
