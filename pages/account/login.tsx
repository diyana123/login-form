import React, { useState } from 'react';
import type { NextPage } from 'next'
import { useForm } from "react-hook-form";
import Head from 'next/head'
import {useNavigate} from 'react-router-dom'
import {requestApi,encode64} from '../../helpers'
// const defaultFormFields = {
//   email : "",
//   password: "",
// }

// const SignInFormFields = () => {
//   const navigate = useNavigate();
//   const[formFields,setFormFields] = useState(defaultFormFields);
//   const{email,password} = formFields;

//   const resetFormFields = () => {
//     setFormFields(defaultFormFields);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     localStorage.setItem("user",JSON.stringify(Input));
//     navigate("/");

//     const loggedUser = localStorage.getItem("user");
//     if (email === loggedUser && password === loggedUser){
//       navigate("/");
//     }else{
//       alert("wrong email or password");
//     }

//     try{
//       const response = await signInWithEmailAndPassword(
//         email,
//         password
//       );
//       console.log(response);
//       resetFormFields();
//     } catch (error) {
//       switch (error.code){
//         case "auth/wrong-password":
//           alert("incorrect password for email");
//         break;
//         case "auth/user-not-found":
//           alert("no user associated with this email");
//           break;
//           default:
//             console.log(error);
//       }
//       console.log('user sign in failed',error);
//       resetFormFields();
//     }

//   }
//   const handleChange = (event) => {
//     const {name,value} = event.target;

//     setFormFields ({...formFields,[name]:value})
//   }
// }

const Home: NextPage = () => {
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
  const loginCall = () => {
    if(userName && password){
      // call api

      const requestData = {
        method:'POST',
        headers: {
          Authorization: 'Basic '+encode64('Web','1234') 
        },
        body: JSON.stringify({})
      }
      console.log(requestData)
      requestApi(`api/v5/token?grant_type=password&username${userName}&password=${password}`,requestData)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className= "bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className='w-3/5 p-5'>
          <div className='text-left font-bold'
><span className ="text-sky-600">Heyy</span> yoo!</div>
<div className='py-10'>
  <h2 className='text-3xl font-bold text-sky-500 mb-2'>Sign into account</h2>
  <div className='border-2 w-10 border-sky-600 inline-block mb-2'></div>
  <div className='flex justify-center my-2'>
    <a href = "#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
     <img className = "text-xs" src = "/fb.png" alt = ""></img>
    </a>

    <a href = "#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
     <img className = "text-sm" src = "/google.png" alt = "" style ={{width:16}}></img>
    
    </a>

    <a href = "#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
     <img className = "text-sm" src = "/instagram.png" alt = "" style={{width:16}}></img>
    </a>
  </div>
  <p className='text-gray-400 my-3'>or use your email account</p>
  <div className='flex-flex-col items-center '>
    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
      <img className='bg-gray-100 mr-2 ' src= '/env.png' style={{width:16}}></img>
      
    <input type ="email"
     name="email"
      placeholder ="Email"
      onChange={(e)=>setUserName(e.target.value)}
       className='bg-gray-100 outline-none text-sm flex-1' />

      </div>

      <div className='bg-gray-100 w-64 p-2 flex items-center'>
      <img className='bg-gray-100 mr-2 ' src= '/lock.png' style={{width:16}}></img>
    <input type ="password" 
      onChange={(e)=>setPassword(e.target.value)}
    
    name="password" 
    placeholder ="Password"
  
      // {...register("emailAddress", {
      //   required: true,
      //   pattern:
      //     //eslint-disable-next-line
      //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      // })}
     className='bg-gray-100 outline-none text-sm flex-1' />
      </div>
      <div className='flex justify-between w-64 mb-5 mt-2'>
        <label className='flex items-center text-xs'><input type ="checkbox" name="remember" className='mr-1'/>Remember me</label>
        <a href="#" className='text-xs'>Forgot Paasword?</a>
      </div>

      <a onClick={loginCall} className='border-2 border-sky-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-500 hover:text-white'>Sign In</a>

  </div>
  </div>        
</div>
        <div className='w-2/5 bg-sky-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h2 className = "text-3xl font-bold mb-2">Hello!</h2>
          <div className='border-2 w-10 border-white inline-block mb-2'></div>
          <p className='mb-2'>Fill up your info</p>
          <a href="#" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-sky-500'>Sign Up</a>
        </div>
        </div>
       
      </main>

     
    </div>
  )
}

export default Home
