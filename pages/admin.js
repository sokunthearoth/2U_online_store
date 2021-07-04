import { useState } from 'react';
const Admin = () => {
  // const user = await fetch('http://localhost:8000/api/users')
  // const product = await fetch('http://localhost:8000/api/products')
  // const userdata = await user.json()
  // const productdata = await product.json()
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');
    const [discount, setdiscount] = useState('');
    const [instock, setinstock] = useState('');
    const [img_url, setimg_url] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const product = { name,price,description,category,discount,instock,img_url };
  
      fetch('http://localhost:8000/api/products', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      }).then((res) => {
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    }
  // const form = document.getElementById('form').value
  // form.addEventListener('submit',(e) =>{
  //   e.preventDefault()
  //   const name = document.getElementById('name').value
  //   const price = document.getElementById('price').value
  //   const description = document.getElementById('description').value
  //   const category = document.getElementById('category').value
  //   const discount = document.getElementById('discount').value
  //   const instock = document.getElementById('instock').value
  //   const img_url = document.getElementById('img_url').value
  //   fetch('http://localhost:8000/api/products'),{
  //   method:'POST',
  //   body:JSON.stringify({
  //     name:name,
  //     price:price,
  //     description:description,
  //     category:category,
  //     discount:discount,
  //     instock:instock,
  //     img_url:img_url,
  //   })
  //   }
    
  // })
  // return {

  //   props: { userdata, productdata },
  // }


  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>users</h1>
      {
        userdata.map((user, index) => {
          return (
            <div>
              <h3 key={user._id} style={{ textAlign: "center" }}>{user.id} {user.email} {user.phone_number} {user.gender} {user._id}</h3>
            </div>
          )
        })
      }
      <h1 style={{ textAlign: "center" }}>products</h1>
      {
        productdata.map((product, index) => {
          return (
            <div>
              <h3 key={product._id} style={{ textAlign: "center" }}>{product.id} {product._id}</h3>
            </div>
          )
        })
      } */}
      <form id='form' onSubmit={handleSubmit}>
        <label>name:<input type="text" value={name} onChange={(e) => setname(e.target.value)} /></label><br></br>
        <label>Price:<input type="text" value={price} onChange={(e) => setprice(e.target.value)} /></label><br></br>
        <label>Category:<input type="text" value={category} onChange={(e) => setcategory(e.target.value)} /></label><br></br>
        <label>Description:<input type="text" value={description} onChange={(e) => setdescription(e.target.value)} /></label><br></br>
        <label>discount:<input type="text" value={discount} onChange={(e) => setdiscount(e.target.value)} /></label><br></br>
        <label>Instock:<input type="text" value={instock} onChange={(e) => setinstock(e.target.value)} /></label><br></br>
        <label>ImageURL:<input type="text" value={img_url} onChange={(e) => setimg_url(e.target.value)} /></label><br></br>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
    };
export default Admin;