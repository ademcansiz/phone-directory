import {useState,useEffect} from 'react'

function Form({addContact,contacts}) {
    const initialValues = {fullName:"",phoneNumber:""}; 
    const [form,setForm] = useState(initialValues)
    
    useEffect(()=>{
        setForm(initialValues)
    },[contacts])

    const onChaneInput = (e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if (form.fullName === "" || form.phoneNumber === "") {
            return false;
        }
        addContact([...contacts,form]);
    }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name='fullName' value={form.fullName} placeholder='Full Name' onChange={onChaneInput}></input>
      </div>
      <div>
        <input name='phoneNumber' value={form.phoneNumber} placeholder='Phone Number' onChange={onChaneInput}></input>
      </div>
      <div>
        <button className='btn'>Add</button>
      </div>
    </form>
  )
}

export default Form
