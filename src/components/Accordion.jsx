import React, { useState } from 'react'

const Accordion = () => {
    const data=[
        {id:1,title: "Title 1",content:"Content for title 1"},
        {id:2,title: "Title 2",content:"Content for title 2"},
        {id:3,title: "Title 3",content:"Content for title 3"},
        {id:4,title: "Title 4",content:"Content for title 4"},
        {id:5,title: "Title 5",content:"Content for title 5"},
    ]
    const[openAccordion,setOpenAccordion]=useState(null);
    const toggleAccordion=(id)=>{
        setOpenAccordion(openAccordion===id?null:id)
    }
  return (
    <div>
        {data.map((item)=>
        (
        <div key={item.id}>
            <div onClick={()=>toggleAccordion(item.id)}
                style={{cursor:'pointer',padding:'12px',border:'1px solid black',marginBottom:'6px',background:openAccordion===item.id?'#eee':'transparent'}}
            >
                {item.title}
            </div>
            <div style={{padding:'12px',border:'2px solid red',display:openAccordion===item.id?'block':'none'}}>
                {item.content}
            </div>
        </div>))}
    </div>
  )
}

export default Accordion;