import './featured.scss'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const Featured = () => {

  return (
    <div className='featured'>
      <div className="featuredwrapper">
        <div className="featureProduct">
          <img src="/Assets/rolex2.jpg" alt="" />
          <p>Making each watch one of a kind</p>
        </div>

    <div className="newProduct">
        <span>New collection</span>

        <div className="h1">
        <h1>The Classic Elegance & <br /> Modern Minimalist</h1>
        <p>The three new Day-Date 36 versions are endowed with bezels set with 52 brilliant-cut diamonds. Their hour markers and Roman numeral VI and IX are also encrusted with diamonds.

Rolex uses only naturally occurring gemstones of the highest quality, very carefully selected according to strict criteria of purity, clarity and intensity. The master gem-setters at Rolex are hailed for their technique in producing flawless setting and alignment and emphasizing the exquisite brilliance of the precious stones.</p>
        </div>

        <button className='btn'>Shop Now
        <ArrowForwardIcon className='Icon'/></button>

        <img src="/Assets/rolex3.jpg" alt="" />
        
</div>
        
      </div>

      <hr />

      <div className="bestselling">
        <div className="BestProduct">
          <span>
            Comming Soon
          </span>
          <p>With its latest creations, <br /> Rolex demonstrates its perpetual pursuit of excellence.</p>
        </div>
        


        <div className="image">
        <div className="productImg">
  
          <img src="/Assets/rolex4.jpg" alt="" />
          <h4>Oyster, 36mm, Everse gold and diamonds</h4>
          </div>

          <div className="productImg">
          <img src="/Assets/rolex5.jpg" alt="" />
          <h4>Oyster, 36mm, yello gold </h4>
          </div>

          <div className="productImg">
          <img src="/Assets/rolex6.jpg" alt="" />
            <h4>Oyster, 36mm, platinum</h4>
          </div>
          
          
          </div>
        


        <div className="BestProduct">
          <span>
            Latest Collections
          </span>
        </div>
        


        <div className="image">
        <div className="productImg">
  
          <img src="/Assets/rolex7.jpg" alt="" />
          <h4>Cosmograph Daytona</h4>
          <h5>Rs.6,351,500</h5>
          </div>

          <div className="productImg">
          <img src="/Assets/rolex8.jpg" alt="" />
          <h4>Rolex Deepsea </h4>
          <h5>Rs.1,81,000</h5>
          </div>

          <div className="productImg">
          <img src="/Assets/rolex9.jpg" alt="" />
            <h4>Sky-Dweller</h4>
            <h5>Rs.3,483,500</h5>
          </div>
          </div>
          
          </div>

      </div>
    
  )
}

export default Featured