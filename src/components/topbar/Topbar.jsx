import  './topbar.scss';
import WatchIcon from '@mui/icons-material/Watch';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarLeft">
          <a href='/' className="logo">
            <WatchIcon />Watch Now
          </a>
        </div>

        <div className="topbarCenter">
            <span className="topbarLinks">Home <ArrowDropDownIcon className='icons'/></span>
            <span className="topbarLinks">Him <ArrowDropDownIcon className='icons'/></span>
            <span className="topbarLinks">Her <ArrowDropDownIcon className='icons'/></span>
            <span className="topbarLinks">Them <ArrowDropDownIcon className='icons'/></span>
            <span className="topbarLinks">Offers <ArrowDropDownIcon className='icons'/></span>
        </div>

    <div className="searchBar">
        <SearchIcon  className='searchIcon'/>
        <input placeholder="Search Products" className="searchinput" />
    </div>

    <div className="topbarRight">
    <div className="topbarIcons">
            <FavoriteBorderIcon />
        </div>

          <div className="topbarIcons">
            <ShoppingBagOutlinedIcon />
            <span className="topbarIconsbadge">1</span>
          </div>
          </div>
      

    </div>
  )
}

export default Topbar