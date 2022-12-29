import React from 'react'
import List from './List'
import Form from './Form'
import { useState, useEffect} from 'react'
import "./styles.css"
function Contacts() {
    const [contacts,setContacts]=useState([
        {fullName:"Adem",phoneNumber:723},
        {fullName:"Mahmut",phoneNumber:256},
        {fullName:"Çağrı",phoneNumber:853}
    ]);
    useEffect(()=>{
        console.log(contacts);
    },[contacts])
  return (
    <div id='container'>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
