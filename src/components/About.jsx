import React from 'react'
import img from '../assets/images/User.png'

// Cú pháp mới để tạo component: rafce

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-4">
              <h1>About</h1>
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row my-5">
            {/* add my-5 */}
            <div className="col-md-6 mx-auto">
              {/* add mx-auto */}
              <img src={img} alt="John Smith" height={300} width={300} />
            </div>

            <div className="col-md-6 my-5">
              <h1 className="display-5 mb-4">John Smith</h1>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officiis ea quod architecto officia illo sunt modi delectus suscipit, quos quis dolorem, quisquam numquam. Doloremque nisi a officia harum molestias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque delectus quisquam similique, ullam laboriosam repellat ea numquam dicta excepturi. Officia autem laudantium, voluptates et nemo libero incidunt consequatur quo!</p>

              {/*Progress of career  */}
              <div className="progress my-4" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                {/* add my-4 */}
                <div className="progress-bar bg-success" style={{width:"25%" }}>CSS</div>
                <span className='pro'>25%</span>
                {/* add span.pro */}
              </div>
              <div className="progress my-4" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-info" style={{width: "50%"}}>HTML/HTML5</div>
                <span className="pro">50%</span>
              </div>
              <div className="progress my-4" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-warning" style={{width: "75%"}}>Javascript</div>
                <span className="pro">75%</span>
              </div>
              <div className="progress my-4" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-danger" style={{width: "100%"}}>React</div>
                <span className="pro">100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About