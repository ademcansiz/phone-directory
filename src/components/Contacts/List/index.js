import {useState} from 'react'

function List({contacts}) {
    const [textFilter,setTextFilter]=useState("");

    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
        item[key]
        .toString()
        .toLowerCase()
        .includes(textFilter.toLowerCase())
        );
    });

  return (
    <div>
      <h1>
        Contacts
      </h1>
        <input placeholder='Filter contact' value={textFilter} onChange={(e)=>setTextFilter(e.target.value)}/>
        <br></br>
      <ul >
        {filtered.map((contact,i)=> <li key={i} className='li'>
         <span className='spanName'>{contact.fullName}</span> <span className='spanPhone'>{contact.phoneNumber}</span>
          </li> )}
      </ul>
      <p className='pContacts'>
         
        {`Total Contacts : ${filtered.length}`}
      </p>
    </div>
  )
}

export default List
