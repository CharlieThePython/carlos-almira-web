import { useState } from 'react'
import './App.css'
import ProfileImage from './Components/ProfileImage/ProfileImage'
import BookSection from './Components/BookSection/BookSection'
import Menu from './Components/Menu/Menu'

function App() {

  return (
    <>
    <Menu />
    <BookSection />
    <ProfileImage />
    </>
  )
}

export default App
