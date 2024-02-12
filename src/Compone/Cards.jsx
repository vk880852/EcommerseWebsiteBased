import React, { useState } from 'react'
import Card from './Card'
const Cards = (props) => {
  let courses1=props.courses;
  let Catagory=props.Catagory;
  const [liked,setliked]=useState([]);
  let allcourses=[];
   let togetdata=()=>
   {
    if(Catagory==='All')
    {
     Object.values(courses1).forEach(course=>
      {
            course.forEach(course1=>
            {
              allcourses.push(course1);
            });
      }
    
      )
      return allcourses;
    }
    else 
    {
      return courses1[Catagory];
    }
    
   }
  return (
    <div>
      {
        togetdata().map((x)=>
        (
          <Card key={x.id} course={x} liked={liked} setliked={setliked}  className='Card'/>
        )
        )
      }
    </div>
  )
}

export default Cards
