import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../assets/images/User.png'
import About from './About'
import Service from './Service'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      {/* section.container */}
      <section className="container my-5 py-4">
        {/* my-5: 48px margin trên dưới theo Oy, py-4: 24px trên dưới theo Oy */}
        <div className="row">
          <div className="col-md-5 mt-5">
            <h1 className="display-5 mb-4">I'm Web Developer <br/> John Smith</h1>
            {/* display-5 tăng kích thước tiêu đề ~ 3 rem */}
            <div className="lead mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, perspiciatis? Dolor quas veritatis non nihil officia maiores quibusdam repellendus ullam, sunt voluptates voluptate distinctio, quasi quis facere iusto consequatur eum?
            </div>

            <NavLink className="btn btn-outline-primary me-4" to="/contact" role="button">Get Started</NavLink>
            {/* me: margin-end tạo khoảng cách right, ms: margin-start tạo khoảng cách left */}
            <NavLink className="btn btn-primary" to="/about" role="button">More About me</NavLink>
          </div>


          {/* For Image */}
          <div className="col-md-7 d-flex justify-content-center align-items-center">  
            {/* d-flex: display flex sử dụng flexbox 
                align-items-center
            */}
            <img src={img} alt="John Smith" height={300} width={300}/>
          </div>
        </div>
      </section>

      <About/>
      <Service/>
      <Contact/>
    </div>
  )
}

export default Home  