import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from './Compone/Navbar'
import Filter from './Compone/Filter'
import { filterData,api } from './Compone/Data'
import Cards from './Compone/Cards'
import './App.css'
import { toast } from 'react-toastify'
import Spinner from './Compone/Spinner'
function App() {
       const[val,setval]=useState(null);
       const[label,setlabel]=useState(false);
       const[Catagory,setCatagory]=useState("All");
       useEffect(()=>
       {
        const fetchdata= async()=>
        {
          try{
            let data1=await fetch(api);
            data1=await data1.json();
            console.log(data1.data);
            setval(data1.data);
            setlabel(true);
          }
          catch(error)
          {
            toast.error("something gone good");
          }
        }
        fetchdata();
       },[])
       
  return (
    <div className='min-h-screen flex flex-col'>
   
      <div>
         <Navbar/>
      </div>
      <div>
         <Filter filterData={filterData} courses={val} Catagory={Catagory} setCatagory={setCatagory}/>
      </div>
      <div>
        {
         (label?(<Cards courses={val} Catagory={Catagory}/>):(<Spinner/>))
        }
      </div>
    </div>
  )
}

export default App
