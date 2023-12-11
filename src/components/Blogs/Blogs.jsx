import './blogs.scss'

const Blogs = () => {
  return (
    <div className='blogs'>
        <div className="blogsWrapper">
            <div className="ourblog">
            <span>From Our Blog</span>
            <p>The Fascinating World of Vintage Watches</p>
            </div>


<div className="vintageWatch">


            <div className="vintage">
                <img src="/Assets/vintage1.jpg" alt="" />
                <h6>The Collection 21 Apr 2002</h6>
                <span>Cosmograph Daytona</span>
                <p>Most people associate vintage Rolex watches <br /> with the record-breaking auction prices that they frequently </p>
            </div>

            <div className="vintage">
                <img src="/Assets/vintage2.jpg" alt="" />

                <h6>The Collection 21 Apr 2005</h6>
                <span>Explorer</span>
                <p>Most people associate vintage Rolex watches <br /> with the record-breaking auction prices that they frequently </p>
            </div> 

            <div className="vintage">
                <img src="/Assets/vintage3.jpg" alt="" />

                <h6>The Collection 21 Apr 2003</h6>
                <span>Air-King</span>
                <p>Most people associate vintage Rolex watches <br /> with the record-breaking auction prices that they frequently </p>
            </div>
            </div>

            </div>
        </div>

  )
}

export default Blogs