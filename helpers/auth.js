import React from 'react'





// const username = process.env.CLIENT_USERNAME
// const password = process.env.CLIENT_PASSWORD

// const baseUrl = process.env.BASE_URL
const baseUrl = 'http://localhost:2002/'

// fetch(baseUrl+api/v5/token?grant_type=password&username"+ user+"&password="+pass,data)


export const requestApi =  async (url,data) => {
    alert(url)
    await fetch(baseUrl+url,data).then((res)=>{console.log(res)})
}


export const encode64 = (username,password) =>{
    let data =`${username}:${password}` ;
    let buff = new Buffer.from(data);
    let base64data=buff.toString('base64');
    return base64data;
}