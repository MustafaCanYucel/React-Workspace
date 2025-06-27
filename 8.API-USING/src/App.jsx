{/* Ben bu projede gerçek bir sunucuya bağlı değilim, onun yerine jsonplaceholder.typicode.com sitesini kullanıyorum. Bu site bana örnek veriler sağlıyor — yani sahte kullanıcılar, gönderiler, yorumlar vs.

Mesela bir kullanıcıyı ID’sine göre çekmek istiyorsam şöyle bir adres kullanabiliyorum:
https://jsonplaceholder.typicode.com/users/1
Bu, ID’si 1 olan örnek kullanıcıyı getiriyor.

Ben de uygulamamda sanki bu gerçekmiş gibi davranarak fetch ile bu URL’lere istek atıyorum. Böylece elimde test edecek veriler oluyor.
Bu sayede arka uç (backend) hazır olmasa bile, ön yüz (frontend) tarafını rahatlıkla geliştirebiliyorum.

Yani bu API, projeyi geliştirirken "gerçekmiş gibi" verilerle çalışmamı sağlıyor.*/}

import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BAse_URL = "http://localhost:3000"
function App() {
  const getAllUsers = async () => {// asecron bir yapı sekron yapabilmemiz için async await kullanılmalı
    const response = await axios.get(BAse_URL + "/users");// 8.satırın işi bitince devamını getir
    console.log(response.data)
  }
  const getUserById = async (userId) => {
    const response = await axios.get(`${BAse_URL}/users/${userId}`);//template literal kullanılarak da yapılabilir.
    return response.data.postId;
  }
  const getPostById = async (postId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId)
    return response.data;
  }
  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData)

  }
  {/*Eğer async ve await kullanılmazsa sırada bir karışıklık olacağı için post ıd getiremez daha sonrasında da postdatayı arayamaz */ }


  {/* Axios ile veri kaydetme 
  const createUser = async(newUser)=>{
    //POST: veri eklemek için kullanılır
   const response = await axios.post(`${BAse_URL}/users`, newUser);
   console.log("response", response.data);*/}
  {/* Axios ile ver güncelleme 
  const updateUser = async (userId, updatedUser) => {
    //PUT: veri güncellemek için kullanılır
    await axios.put(`${BAse_URL}/users/${userId}`, updatedUser);
  }*/}
  {/* Axios ile Veri Silme
  const deleteUserById = async (userId)=>{
   const deletedResponse = await axios.delete(`${BAse_URL}/users/${userId}`)
  console.log(deletedResponse.data);
  }*/}



  useEffect(() => {
    // getAllUsers();
    //getUserById(2)
    //  const newUser = {
    //    "username" : "bilal",
    //    "password" : "3636"

    // }
    //  createUser(newUser)

    //updateUser("2378", {
    //  "username": "yakup",
    //  "password": "5555"
    //})
    //deleteUserById("2378")
    getPost();

  }, []);
  return (
    <div>
      API-USING
    </div>
  )
}

export default App

//fetch ile istek attığımızd getirmek istediğimiz yapı promise döndüğü için then ile yakalamalıyız.then ile yakalarken yakaladığımız verileri .json formatına çeviriyoruz.Ardından bu gönderinin içindeki id değerini kullanarak, o gönderiye ait yorumları tekrar fetch ile alıyoruz. Yani önce gönderiyi, sonra ona bağlı yorumları sırayla çekmiş oluyoruz.Burada iç içe .then() kullanmamızın sebebi şu: İlk isteğin sonucunu beklemeden ikinciyi yapamayız çünkü ikinci istek, ilkinden gelen id bilgisine bağlı. Bu yüzden işlemleri sırayla ve bağımlı olacak şekilde zincirliyoruz.

// document.querySelector("#button").addEventListener("click", ()=>{
//fetch("https://jsonplaceholder.typicode.com/posts/1")
//.then((response) => response.json())
//.then((post)=> {
//console.log(post)
//fetch('https://jsonplaceholder.typicode.com/comments?postId=${post.id}')
//.then((response) => response.json())
//.then((comments)=> console.log(comments))
//})
// })


//Async Await ile yapılışı.
//document.querySelector("#button").addEventListener("click", async ()=>{
//const responsePost= [ await fetch("https://jsonplacehol "https://jsonplaceholder.typicode.com/posts/1"
//const post = await responsePost.json();
//const responseComments = await fetch('https://jsonplaceholder.typicode.com/comments?postId=${post.id}');
//const comments = await responseComments.json();
//console.log(post, comments)
//})

//ASYNC kullanım fakat bu sefer .json formatına çevirirken kısaltma uygulandı.

//document.querySelector("#button").addEventListener("click", async ()=>{
//const post= [ await(await fetch("https://jsonplacehol "https://jsonplaceholder.typicode.com/posts/1").json();
//const comments = await(await fetch('https://jsonplaceholder.typicode.com/comments?postId=${post.id}')).json();
//console.log(post, comments)


