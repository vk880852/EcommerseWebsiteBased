import React from 'react'
import './Card.css'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = (props) => {
   let t=(props.course);
   let liked=props.liked;
   let setliked=props.setliked;
   let islike=props.islike;
   let setlike=props.setlike;
   const click=()=>
   {
      if(liked.includes(t.id))
      {
        setliked(pre=>pre.filter((cid)=>cid!==t.id));
        toast.warning("You unlike yourself Radhey Radhey");
      }
      else 
      {
        if(liked.length===0)
        {
          setliked([t.id]);
        }
        else 
        {
          setliked(pre=>[...pre,t.id]);
        }
        toast.success("You liked yourself Ram Ram");
      }
     
   }
  return (
    <div>
    <div className='Vinay'>
      <img src={t.image.url} alt={t.image.alt}/>
      <button onClick={click}>
        {liked.includes(t.id)?(<FcLike/>):(<FcLikePlaceholder/>)}
      </button>
      <ToastContainer/>
    </div>
    <div>
      {
        <h3>
          {t.title};
        </h3>
      }
    </div>
    <div>
       <p>{t.description}</p>
    </div>
    </div>
  )
}

export default Card
