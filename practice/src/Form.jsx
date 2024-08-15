import {useState} from 'react'


const Form=()=>{
    const [formdata, setformdata]=useState({
        Name : '',
        Email: ''
    })

    const handlechange=(event)=>{
        const {name ,value}=event.target
        setformdata({
            ...setformdata, [name]:value
        });
    };
    const submit=(event)=>{
        event.preventDefault();
        console.log(formdata)
        
    };

    return(
        <>
        <h1>Basic Form</h1>
        <form onSubmit={submit}>
            <input
            value={formdata.Name}
            placeholder='name'
            name='Name'
            type='text'
            onChange={handlechange}
             />
             <input
            value={formdata.Email}
            placeholder='Email'
            name='Email'
            type='email'
            onChange={handlechange}
             />
             <button type='submit'>click</button>
        </form>
        </>
    )
}
export default Form;