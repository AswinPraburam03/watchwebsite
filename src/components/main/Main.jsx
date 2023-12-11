import './main.scss'
import React, {useEffect} from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

import aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {

  // create a react hook function (fade-up) function:
  useEffect(() => {
        aos.init({duration:2000})
      },[])
    

  return (
    <div className='main'>
        <div className="mainwrapper">
            <div className="mainProduct">
                <span data-aos="fade-up">Best Selling</span>
                <p data-aos="fade-up">To mark the 60th anniversary of the watch, Rolex ensures the legend <br />lives on by revisiting the entire range, through high-precision reworking <br /> that concerns the case and face as well as the movement.</p>
            </div>
        </div>

            <div className="proList">
        <div data-aos="fade-up" className="product">
                <img src="Assets/watch1.jpg" alt="" />

                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>Yacht-Master 42</h4>
        <div className="price">
        <span>Rs.1,147,000</span>
        </div>
            </div>
        <div data-aos="fade-up" className="product">
                <img src="Assets/watch2.jpg" alt="" />
                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>Deepsea Challenge</h4>
        <div className="price">
        <span>Rs.2,122,550</span>
        </div>

            </div>
        <div data-aos="fade-up" className="product">
                <img src="Assets/watch3.jpg" alt="" />

                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>Cosmograph Daytona</h4>
        <div className="price">
        <span>Rs.2,249,000</span>
        </div>
</div> 


        <div data-aos="fade-up" className="product">
                <img src="Assets/watch4.jpg" alt="" />

                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>Cosmograph Daytona</h4>
        <div className="price">
        <span>Rs.3,227,000</span>
        </div>
</div> 


        <div data-aos="fade-up" className="product">
                <img src="Assets/watch5.jpg" alt="" />

                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>Cosmograph Daytona</h4>
        <div className="price">
        <span>Rs.2,619,000</span>
        </div>
</div> 


        <div data-aos="fade-up" className="product">
                <img src="Assets/watch6.jpg" alt="" />

                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>Day-Date-40</h4>
        <div className="price">
        <span>Rs.4,794,000</span>
        </div>
</div> 


        <div data-aos="fade-up" className="product">
                <img src="Assets/watch7.jpg" alt="" />

                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>Sky-Dweller</h4>
        <div className="price">
        <span>Rs.3,483,000</span>
        </div>
</div> 


        <div data-aos="fade-up" className="product">
                <img src="Assets/watch8.jpg" alt="" />

                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>1908</h4>
        <div className="price">
        <span>Rs.1,797,000</span>
        </div>
</div> 


        <div data-aos="fade-up" className="product">
                <img src="Assets/watch9.jpg" alt="" />

                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>Explorer 36</h4>
        <div className="price">
        <span>Rs.9,85,000</span>
        </div>
</div> 


        <div data-aos="fade-up" className="product">
                <img src="Assets/watch10.jpg" alt="" />

                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>Oyster Perpetual</h4>
        <div className="price">
        <span>Rs.5,22,000</span>
        </div>
</div> 



        <div data-aos="fade-up" className="product">
                <img src="Assets/watch11.jpg" alt="" />

                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>Sea Dweller</h4>
        <div className="price">
        <span>Rs.1,472,000</span>
        </div>
</div> 


        <div data-aos="fade-up" className="product">
                <img src="Assets/watch12.jpg" alt="" />

                <div className="rating">
        <StarOutlinedIcon /> <span>4 reviews</span>
        </div>
        <h4>Sky-Dweller</h4>
        <div className="price">
        <span>Rs.1,292,000</span>
        </div>
</div> 
       
            </div>
    </div>
  )
}

export default Main