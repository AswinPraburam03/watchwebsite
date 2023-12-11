import './banner.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Banner = () => {
  return (
    <div className='banner'>
        <div className="bannerwrapper">
            <div className="bannerDetails">

            <h6>New Collection</h6>
          <span>The Collector's Edition is a</span>
        <span className='br'>masterpiece of horology</span>

        <button className='btn'>Show Collectons 
<ArrowForwardIcon className='Icon'/></button>

    
            </div>
        </div>


    </div>
  )
}

export default Banner