import React, {useState ,useEffect } from 'react'
import './singlePost.css'
import post from '../logo/pg.jpg'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

function SinglePost() {

  const location = useLocation()
  const path = location.pathname.split('/')[2] //this will give the post id
  const [post,setPost] = useState({})

  useEffect(()=>{
    const getPost = async()=>{
      const res = await axios.get('/posts/'+path)
      setPost(res.data)
    }
    getPost()
  },[post])


  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
          {
            post.photo &&

            <img className='singlePostImg' src={post.photo} alt='' />
          }
           
            <h1 className='singlePostTitle'> {post.title}
                <div className='singlePostEdit'> 
                    <i className='singlePostIcon far fa-edit'></i>
                    <i className='singlePostIcon far fa-trash-alt'></i>
                </div>
            </h1>
            <div className="singlePostInfo">
          <span>
            <b className="singlePostAuthor">
              <Link to={`/?user=${post.username}`} className='link'>
              Author: <b>{post.username}</b>
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
            <p className='singlePostDesc'>
                {/* Its not Good if I reveal the story...But it  Goes around A Treasure and What are The consequences A corrupt cop Faces in that...Those Are Really Awesome....This Movie is completely Different From his Past movies like Kirik party, 777 charlie,etc.
                Its must watch movie for Kannada movie lovers as it got all the elements so don't wait for other's review just go and watch it.
                Good story based on treasure hunt as shown in trailer already , You will be there in their world till movie get finished.Superb background music by Ajaneesh in some scenes it will give goosebumps
                Two songs are good to watch and listen where in other two are good to watch Screenplay and camera work is really worth to watch Balaji as village has shown his complete talent and you will start comparing with KGF-2 Adhira character
                Last but not the least .. The real man Rakshit shetty's acting,comedy timing, Humour and fight sequences are simpy superb and he has just nailed it. */}
                {post.desc}
            </p>
        </div>
    </div>
  )
}

export default SinglePost