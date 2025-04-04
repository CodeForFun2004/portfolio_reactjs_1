import React from 'react'
import DATA from './Data'

// Cú pháp mới để tạo component: rafce

const Service = () => {

  const card = (props) => {
    return(
      <div className="col-md-4 mb-5 py-4 " key={props.index}>
      <div className="card text-center py-5" >
        <img src={props.img} className="card-img-top mx-auto" alt={props.title}/>
        {/* mx auto để căn giữa */}
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
          </div>
      </div>
    </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 text-center py-4 mb-5">
            <h1>Services</h1>
            <hr />
          </div>
        </div>

        <div className="row py-5 mb-5">
          {
            DATA.map(card)
          }
        </div>
      </div>
    </div>
  )
}

export default Service