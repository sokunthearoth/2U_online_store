import { useState } from 'react';
import {fireStorage} from "../services/firebase";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
export async function getStaticProps() {
  const user = await fetch('http://localhost:8000/api/users')
  const product = await fetch('http://localhost:8000/api/products')
  const userdata = await user.json()
  const productdata = await product.json()
  return {
    props: { userdata, productdata },
  }
}
const Admin = ({ userdata, productdata }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const [uname, setuname] = useState('');
  // const [uprice, setuprice] = useState('');
  // const [udescription, setudescription] = useState('');
  // const [ucategory, setucategory] = useState('');
  // const [udiscount, setudiscount] = useState('');
  // const [uinstock, setuinstock] = useState('');
  // const [uimg_url, setuimg_url] = useState('');
  // const uproducts = { uname, uprice, udescription, ucategory, udiscount, uinstock, uimg_url };
const [Url,setUrl]=useState('')
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [discount, setdiscount] = useState('');
  const [instock, setinstock] = useState('');
  const [img_url, setimg_url] = useState('');
  const products = { name, price, description, category, discount, instock, img_url };
  const handlePost = () => {
    fetch('http://localhost:8000/api/products/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(products)
    })
      .then(response => {response.json()})
      .then(data => console.log(data))
      .catch((err) => {
        console.error(err)
      })
  }
  const handleDeleteProduct = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/products/${id}`,
        {
          method: 'DELETE',
        }
      )
      console.log("user Deleted")
    } catch (err) {
      console.log(err)
    }
  }
//     const handleUpdate= async(id)=>{
//       fetch(`http://localhost:8000/api/products?id=${id}`)
//         .then(res=>res.json())
//         .then((res)=>{
//             console.log(res.name)
//         }).catch((err)=>{
//             console.log(err);
//         })
// }
const handleUploadFile=(e)=>{
  e.preventDefault();
  const file = e.target.files[0]
  const storageRef = fireStorage.ref('product-image/');
  const fileRef= storageRef.child(file.name);
  fileRef.put(file)
  .then((res)=>{
    console.info(res)
  }).catch((err)=>{
    console.log(err)
  })
}
const handleDeleteFile = ( e ) =>{
  e.preventDefault()
  const storageRef = fireStorage.ref('product-image/');
  const fileRef= storageRef.child("hi.png");
    fileRef.delete()
  .then((res)=>{
    console.log("URL::",res);
    setUrl(res)
  })
  .catch(e=>{
    console.log(e)
  })
}

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>users</h1>
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
              <h3 key={product._id} style={{ display: 'inline' }}>{product.name} {product._id}</h3>
              <button onClick={() => handleDeleteProduct(product._id)}>DELETE</button><button /*onClick={handleUpdate(product._id)}*/ style={{ display: 'inline' }}>UPDATE</button>
            </div>
          )
        })
      }
      <h1>Post</h1>
      <form id='form' onSubmit={handlePost}>
        <label>name:<input type="text" value={name} name="name" onChange={(e) => setname(e.target.value)} /></label><br></br>
        <label>Price:<input type="text" value={price} name="price" onChange={(e) => setprice(e.target.value)} /></label><br></br>
        <label>Category:<input type="text" value={category} name="category" onChange={(e) => setcategory(e.target.value)} /></label><br></br>
        <label>Description:<input type="text" value={description} name="description" onChange={(e) => setdescription(e.target.value)} /></label><br></br>
        <label>discount:<input type="text" value={discount} name="discount" onChange={(e) => setdiscount(e.target.value)} /></label><br></br>
        <label>Instock:<input type="text" value={instock} name="instock" onChange={(e) => setinstock(e.target.value)} /></label><br></br>
        <label>ImageURL:<input type="text" value={img_url} name="img_url" onChange={(e) => setimg_url(e.target.value)} /></label><br></br>
        <input type="submit" value="submit"></input>
      </form><br></br>
      <h1>firebase</h1>
      <label>File:<input onChange={handleUploadFile} type="file"/></label><br></br>
      <button onClick={handleDeleteFile}>delete</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Hello</Modal.Title>
          <form id='form' onSubmit={handlePost}>
        <label>name:<input type="text" value={name} name="name" onChange={(e) => setname(e.target.value)} /></label><br></br>
        <label>Price:<input type="text" value={price} name="price" onChange={(e) => setprice(e.target.value)} /></label><br></br>
        <label>Category:<input type="text" value={category} name="category" onChange={(e) => setcategory(e.target.value)} /></label><br></br>
        <label>Description:<input type="text" value={description} name="description" onChange={(e) => setdescription(e.target.value)} /></label><br></br>
        <label>discount:<input type="text" value={discount} name="discount" onChange={(e) => setdiscount(e.target.value)} /></label><br></br>
        <label>Instock:<input type="text" value={instock} name="instock" onChange={(e) => setinstock(e.target.value)} /></label><br></br>
        <label>ImageURL:<input type="text" value={img_url} name="img_url" onChange={(e) => setimg_url(e.target.value)} /></label><br></br>
        <input type="submit" value="submit"></input>
      </form><br></br>
        </Modal.Header>
      </Modal>
    </div>
  );
};
export default Admin;