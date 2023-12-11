import './home.scss'
import React, {useEffect} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

// create a react hook function (fade-up) function:
  useEffect(() => {
    aos.init({duration:2000})
  },[])

  return (

    <div className='home'>
    <div className="homewrapper">
        <div className="watchInfo">

        <h6 data-aos="fade-up">Winter 2022 Collection</h6>
  <span data-aos="fade-up">Timeless Elegance,</span>
  <span data-aos="fade-up" className='br'>Captured on Your Wrist</span>

  <p data-aos="fade-up">950 platinum and transparent case back</p>
<button data-aos="fade-up" className='btn'>Show Collectons 
<ArrowForwardIcon className='Icon'/></button>
</div>
</div>
</div>
  )
}

export default Home