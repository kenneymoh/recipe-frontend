import React from 'react'
import videoBg from '../assets/videoBg.mp4'

const Main = () => {
  return (

    <div className='main w-full min-h-full object-cover'>
          <div className="fixed overlay bg-slate-800 md:flex overflow-hidden bg-opacity-50 h-auto">
            <video src={videoBg} autoPlay loop muted style={{ width: '100%', minHeight: '100px' } } />
            <div className="content font-serif text-white">
            <div className='absolute content flex flex-col items-center justify-center w-full h-full top-0'>
              <h1>Welcome</h1>
              <p>To my site.</p>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Main
