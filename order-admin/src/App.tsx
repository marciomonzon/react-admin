import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthProvider';
import { ProtectedLayout } from './components/layout/ProtectedLayout';

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedLayout><Home /></ProtectedLayout>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<ProtectedLayout><About /></ProtectedLayout>}></Route>
            <Route path="/settings" element={<ProtectedLayout><Settings /></ProtectedLayout>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
