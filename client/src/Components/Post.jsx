import React from 'react'
import {useSelector} from 'react-redux'
function Post() {
    const cstate = useSelector((state)=> state.posts);
    console.log(cstate);
  return (
    <div>post</div>
  )
}

export default Post;