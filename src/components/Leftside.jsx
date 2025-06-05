import React from 'react'
import instagramlogo from "../assests/Instagramlogo.png"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GestureIcon from '@mui/icons-material/Gesture';
import MenuIcon from '@mui/icons-material/Menu';
import './Leftside.css'



const Leftside = () => {
  return (
    <div className='leftsidepart'>

        <div className='logoPart'>

            <img  className="logoImg"src={instagramlogo} alt='instagram'></img>
        </div>
        <div className='navLinkPart'>

            <div className='navlink'>
                <HomeIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}></HomeIcon>
                <div className='NavHome'>Home</div>
                
            </div>



            <div className='navlink'>
                <SearchIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}></SearchIcon>
                <div className='NavHome'>search</div>
                
            </div>


            <div className='navlink'>
                <ExploreIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}></ExploreIcon>
                <div className='NavHome'>Explore</div>
                
            </div>


            <div className='navlink'>
                <OndemandVideoIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}></OndemandVideoIcon>
                <div className='NavHome'>reel</div>
                
            </div>



             <div className='navlink'>
                <EmailIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}></EmailIcon>
                <div className='NavHome'>Message</div>
                
            </div>



           



            <div className='navlink'>
                <FavoriteBorderIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}></FavoriteBorderIcon>
                <div className='NavHome'>Notification</div>
                
            </div>


            <div className='navlink'>
                <AddBoxIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}></AddBoxIcon>
                <div className='NavHome'>create</div>
                
            </div>




             <div className='navlink'>
                <AccountCircleIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}></AccountCircleIcon>
                <div className='NavHome'>Profile</div>
                
            </div>



             <div className='navlink'>
                <GestureIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}></GestureIcon>
                <div className='NavHome'>Thread</div>
                
            </div>


            <div className='navlink'>
                <MenuIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}></MenuIcon>
                <div className='NavHome'>More</div>
                
            </div>
        </div>

      
    </div>
  )
}

export default Leftside
