import React from 'react'
import "../App.css"
import "./services.css"
const services = () => {
  return (
    <section class="services" id="services">

    <div class="container">


        <h2 class="h2 section-title"  style={{marginBottom: "15px"}}>Services We Provide</h2>
        <hr style={{marginBottom: "15px"}}/>

      

        <ul class="services-list">

          <li>
          <div className="services-card">

              <div class="card-icon">
                <ion-icon name="briefcase-outline"></ion-icon>
              </div>

              <h3 class="h3 card-title">Election Campaign Management</h3>

              <p class="card-text">
              From strategic planning to grassroots mobilization, we're here to elevate your campaign to victory
              </p>

            </div>
          </li>

          <li>
            <div class="services-card">

              <div class="card-icon">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>

              <h3 class="h3 card-title">Digital Business Solutions</h3>

              <p class="card-text">
              Empower your organization with our comprehensive suite of digital business solutions
              </p>

            </div>
          </li>

          <li>
            <div class="services-card">

              <div class="card-icon">
                <ion-icon name="rocket-outline"></ion-icon>
              </div>

              <h3 class="h3 card-title">Social Media Management</h3>

              <p class="card-text">
              Transform your social media presence into a dynamic asset with our strategic management solutions
              </p>

            </div>
          </li>

         

        </ul>


    </div>
  </section>
  )

 
}

export default services