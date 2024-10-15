/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth/authPage'
import ChatPage from './pages/chat/ChatPage'
import ProfilePage from './pages/profile/ProfilePage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/auth' element={<AuthPage/>}/>
      <Route path='/chat' element={<ChatPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='*' element={<Navigate to="/auth"/>}/>
    </Routes>
    </>
  )
}

export default App
