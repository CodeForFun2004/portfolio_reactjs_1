import React from 'react'
import { useState } from 'react'

// Cú pháp mới để tạo component: rafce

const Contact = () => {

  // Create state
  const [data, setData] = useState({
    name: '',
    email: '',
    msg: ''
  });

  const eventHandler = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return ({
        ...preVal,
        [name]: value,
      }
      );
    })
  }

  const submitHandler = (event) => {
    // to prevent page to reload
    event.preventDefault();
    alert(`Name: ${data.name}, Email: ${data.email}, Msg: ${data.msg}`)
  }

  return (
    <div>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-4 mb-5">
              <h1>Contact</h1>
              <hr />
            </div>
          </div>

          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 mb-5">
                {/* add mb-5 */}
                <form onSubmit={submitHandler}>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Fullname</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                      name="name"
                      onChange={eventHandler}
                      value={data.name}
                    />
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      name="email"
                      onChange={eventHandler}
                      value={data.email}

                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                     name="msg"
                     onChange={eventHandler}
                     value={data.msg}
                    ></textarea>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact