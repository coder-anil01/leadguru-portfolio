import React, { useEffect, useState } from 'react'
import studentImg from '../image/student.png' 
import teacherImg from '../image/teacher.png' 
import moneyImg from '../image/money.png'
import liveclassImg from '../image/live-class.png'
import '../style/MyBussiness.css'
import axios from 'axios'


const MyBussiness = () => {
  const ApiLink = "https://coder-anil01.github.io/products.json/Data.json"
  const [data, setData] = useState([])

  const getData = async()=>{
    const response = await axios.get(ApiLink)
      setData(response.data.Data)
  }
  useEffect(()=>{
    getData();
  },[])

  return (
    <div className='bussiness-container'>
        <div className='main-head-opacity'>Bussiness</div>

        <div className='bussiness-text-box'>
          <div className='flex-wrap'>
            <img className='leadsguru-img' src="https://www.leadsguru.in/assets/img/hero-img-4.png" alt="" />
            <div className='bussiness-text'>
              <p>Innovation in education</p>
              <h1>Welcome to India’s</h1>
              <h2>Leading Learning Platform.</h2>
            </div>
          </div>

          <div className='flex-wrap'>
            <div className='bussiness-grow-text'>
              <img src={teacherImg} alt="" />
              <div>
                <h2>100+</h2>
                <p>Trainers</p>
              </div>
            </div>
            <div className='bussiness-grow-text'>
              <img src={studentImg} alt="" />
              <div>
                <h2>1.2 Lakh +</h2>
                <p>Students Enrolled</p>
              </div>
            </div>
            <div className='bussiness-grow-text'>
              <img src={liveclassImg} alt="" />
              <div>
                <h2>500+</h2>
                <p>Live Training</p>
              </div>
            </div>
            <div className='bussiness-grow-text'>
              <img src={moneyImg} alt="" />
              <div>
                <h2>40 Cr +</h2>
                <p>Community Earning</p>
              </div>
            </div>
          </div>
          <h2>Our Exclusive Packages</h2>
          <p>With our exclusive packages, now you can be assured to acquire the best knowledge and expertise from our team of experts. We believe you can empower the world with industry-leading courses.</p>
        </div>
{/* PRODUCT */}
        <div className="product-container">
        {data.map((value)=>{
          return(
            <a href={value.url} target='_blank' rel="noreferrer" className='product-card' key={value.id}>
              <img className='product-image' src={value.image} alt="" />
              <div className='product-price' >
                <h3>₹{value.orgprice}</h3>
                <h5>₹{value.price}</h5>
              </div>
              <div className='product-catd-text'>
                <div className='product-title' >{value.title}</div>
                <div className='product-courses' >📚 {value.courses}</div>
                <p></p>
                <li className='product-desc' >{value.desc[0]}</li>
                <li className='product-desc' >{value.desc[1]}</li>
                <li className='product-desc' >{value.desc[2]}</li>
                <a className='product-button' href={value.url} target='_blank' rel="noreferrer">View Details</a>
              </div>
            </a>
            )
          })}
          </div>
    </div>
  )
}

export default MyBussiness
