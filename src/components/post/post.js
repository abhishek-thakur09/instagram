import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const Post= () => {
  return (
    <div>

 <div className="post">
          <div className="postInfo" >
            <img  className="postInfoImg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Freligious-maa-sherawali-goddess-art-jw7u62w3i40lfft9.jpg&f=1&nofb=1&ipt=f504bac1054bca04541abf195912cdce43ef810b8aafd63f7799a3de2c2e4f82"></img>
            <div className="postInfousername">Maa</div>
            <div className="timingInfo">36 min</div>
          </div>
          <div className="postImg">
            <img className="postImage" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.whoa.in%2Fdownload%2Fmata-rani-images-photos-quotes-wallpaper-durga-wishes---sherawali-mata-brown-photo-frame&f=1&nofb=1&ipt=6a458f22155c95b37f7834b3b3a67cb3e5e802c196526ecc363b8996b8e34d32" ></img>
          </div>
          <div className="iconBlock">
            <div className="lefticon">

                          <FavoriteBorderIcon sx={{fontSize:"25x"}}/>
                            <InsertCommentOutlinedIcon sx={{fontSize:"25x"}}/>
                              <SendIcon sx={{fontSize:"25x"}}/>

            </div>
            <div className="righticon">
               <BookmarkBorderOutlinedIcon sx={{fontSize:"25x"}}/>


            </div>


          </div>
          <div className="likesection">
            <div className="imagesLike">
                        <img  className='likeImg1'src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2421316.jpg&f=1&nofb=1&ipt=2691741010eefebbdf1c483dcef80a8475dca705d445705bf19e2243185a723f"/>
                           <img  className='likeImg2'src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2421316.jpg&f=1&nofb=1&ipt=2691741010eefebbdf1c483dcef80a8475dca705d445705bf19e2243185a723f"/>
            </div>
            <div className="noofLikes">12,890</div>

  
          </div>
          <div className="postAbout">
            <div className="postAboutName">Maa</div>
            <div className="infocomment">Jai Mata di</div>
          </div>
          <div className="noofcomment"> View All 467 comments</div>
          <div className="addComment">Add a comment...</div>
        </div>


         <div className="post">
                  <div className="postInfo" >
                    <img  className="postInfoImg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Freligious-maa-sherawali-goddess-art-jw7u62w3i40lfft9.jpg&f=1&nofb=1&ipt=f504bac1054bca04541abf195912cdce43ef810b8aafd63f7799a3de2c2e4f82"></img>
                    <div className="postInfousername">Maa</div>
                    <div className="timingInfo">36 min</div>
                  </div>
                  <div className="postImg">
                    <img className="postImage" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.whoa.in%2Fdownload%2Fmata-rani-images-photos-quotes-wallpaper-durga-wishes---sherawali-mata-brown-photo-frame&f=1&nofb=1&ipt=6a458f22155c95b37f7834b3b3a67cb3e5e802c196526ecc363b8996b8e34d32" ></img>
                  </div>
                  <div className="iconBlock">
                    <div className="lefticon">
        
                                  <FavoriteBorderIcon sx={{fontSize:"25x"}}/>
                                    <InsertCommentOutlinedIcon sx={{fontSize:"25x"}}/>
                                      <SendIcon sx={{fontSize:"25x"}}/>
        
                    </div>
                    <div className="righticon">
                       <BookmarkBorderOutlinedIcon sx={{fontSize:"25x"}}/>
        
        
                    </div>
        
        
                  </div>
                  <div className="likesection">
                    <div className="imagesLike">
                                <img  className='likeImg1'src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2421316.jpg&f=1&nofb=1&ipt=2691741010eefebbdf1c483dcef80a8475dca705d445705bf19e2243185a723f"/>
                                   <img  className='likeImg2'src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2421316.jpg&f=1&nofb=1&ipt=2691741010eefebbdf1c483dcef80a8475dca705d445705bf19e2243185a723f"/>
                    </div>
                    <div className="noofLikes">12,890</div>
        
          
                  </div>
                  <div className="postAbout">
                    <div className="postAboutName">Maa</div>
                    <div className="infocomment">Jai Mata di</div>
                  </div>
                  <div className="noofcomment"> View All 467 comments</div>
                  <div className="addComment">Add a comment...</div>
                </div>




      
    </div>

    
  )
}

export default Post
