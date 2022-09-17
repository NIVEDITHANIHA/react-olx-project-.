import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { firebaseContext } from '../../store/Context';
import { postContext } from '../../store/PostContext';
import './View.css';
function View() {
  const [userDetails , setUserDetails] = useState()
  const {postDetails} = useContext(postContext)
  const {firebase} = useContext(firebaseContext)
  useEffect(()=>{
     const {userId} = postDetails
    firebase.firestore().collection('users').where('id','==' ,userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; { postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
      {userDetails &&  <div className="contactDetails">
          <p>seller Details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;