import React from 'react'
import { blueToViolet } from '@/modules/styles'
import { usePage } from '@inertiajs/react'

const Hero = () => {

    return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-5 mt-5">
        <div className="d-flex align-items-center flex-column text-center w-md">
            <h2 className='poppins-extrabold display-5'>Seamlessly <span style={blueToViolet}>track</span> and <span style={blueToViolet}>manage</span> your students' attendance</h2>
            <p className='fs-6 nunito-semib w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa quo dicta enim cupiditate necessitatibus.</p>
            <button className="px-3 py-1 bg-black text-white mt-3 rounded-pill">Get started</button>
        </div>
        <img src="/assets/img/laptop.svg" className='w-100' />
    </div>
)
}

export default Hero