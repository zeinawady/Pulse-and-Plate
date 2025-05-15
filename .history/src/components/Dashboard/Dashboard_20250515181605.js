import React from 'react'
import "../../App";
import SignUp from '../SignUp/SignUp';

const Dashboard = () => {
  return (
    <div className='container py-4'>
      <h1 className='text-center'>Admin Dashboard</h1>
      <div className='mb-4'>
        <SignUp />
      </div>
      <h2>csssss</h2>

    </div>
  )
}

export default Dashboard
