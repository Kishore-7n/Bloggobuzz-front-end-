import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Form.css'
export default function Form() {
    useEffect(()=>{
        window.scrollTo(0,0);
    })
    
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const converttobase = (e) =>{

            var reader = new FileReader()
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = ()=>{
                console.log(reader.result);
                setImage(reader.result)
            }
    }
    const handlesubmit =  (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/create',{
            method:'post',
            headers:{"Content-Type":"application/json"},
            body:
            JSON.stringify({
                "title":event.target.title.value,
                "snippet":event.target.snippet.value,
                "author":event.target.author.value,
                "Description":event.target.Description.value,
                base64:image,
            }),

        })
        navigate('/postpreview')

    }

    return (
        <div>
            <form action='/create' onSubmit={handlesubmit} className="form-F">
            <div className="form-head" >
                Create New BlogPost
            </div>
                <div className="form-group" >
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    <input type="text" className="form-control"  id="exampleFormControlInput1" placeholder="" name='title' />
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleFormControlInput1">Snippet</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name='snippet' />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Author</label>
                    <input type="text" className="form-control"id="exampleFormControlInput1" placeholder="" name='author' />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name='Description' rows="10" cols="15"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Upload</label>
                    <input type="file" className="form-control"id="exampleFormControlInput1" onChange={e=>converttobase(e)} placeholder="" name='image' accept='image/*' />
                </div>
                <div className='form-btn'>
                    <button type='submit' className='btn1'>Create Post</button>
                    <button type='reset'className='btn2'>Cancel</button>
                    <button className='btn3'><Link className='formlink' to="/">Go Back</Link></button>
                </div>
            </form>
        </div>                  
    )
}
