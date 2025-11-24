// take rating from user 
import React from 'react'
import { useState } from 'react'

const UserRating = () => {
  const [feedback, setFeedback] = useState("");

 
  const word = feedback.split(" ");
  // console.log(word, word.length);
 function handleSubmit(){
   console.log(feedback);



   if(word.length<2){
     alert("enter more than this");
     return
   }
   if(word.length>20){
    alert("you are eceeding more");
    return
   }
 }
 


  return (
    <div>
      {/* <form > */}
        <textarea name="rating" id="rating" placeholder='Give your best feedback'onChange={(e) => setFeedback(e.target.value.trim())}></textarea>
        <p>{word.length}</p>
        <button onClick={handleSubmit}>Submit</button>
      {/* </form> */}
    </div>
  )
}

export default UserRating