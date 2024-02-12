import React from 'react'

const Filter = (props) => {
  const filterData=props.filterData;
  let p=props.Catagory;
  let sp=props.setCatagory;
  const click=(e)=>
  {
     sp(e);
  }
  return (
    <div>
    {
        filterData.map((data)=>
        (
            <button key={data.id} onClick={()=>click(data.title)}>
                {data.title}
            </button>)
        )
    }
    </div>
  )
}

export default Filter


