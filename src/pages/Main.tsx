import { useState } from 'react'
import Header from '../components/Header'
import InputField from '../components/InputField'
import Sidebar from '../components/Sidebar'

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <InputField />
        <Sidebar />
      </div>
    </>
  )
}

export default Main
