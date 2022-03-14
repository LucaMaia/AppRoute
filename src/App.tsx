import React,{ useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from './components/Login'
import { ProtectedLayout } from './components/ProtectdLayout'
import { AuthProvider } from './context/AuthProvider'

 function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/profile' >
                <ProtectedLayout>
                  <h2>Olá esse é o componente profile!</h2>
                </ProtectedLayout>
            </Route>

            <Route path='/login' element={<Login />}>
            </Route>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
