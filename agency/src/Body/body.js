import React, {useRef} from 'react'
import Testimonials from '../Reviews/reviews'
import "../App.css"
import Services from "../Service/services"
import { IonIcon } from '@ionic/react';
import { logoGithub, logoInstagram, logoYoutube, logoFacebook } from 'ionicons/icons';
import {fireStore} from "../DataBase/firebase";
import {addDoc,collection} from "@firebase/firestore";


const Body = () => {

    const inputRefs = useRef({});

    const ref= collection(fireStore,"Contact form");
    const handleSave= async(e)=>{
      e.preventDefault();
  
      let dataToPass={
        name:inputRefs.current['name'].value,
        contact: inputRefs.current['phone'].value,
        email:inputRefs.current['email'].value,
        message:inputRefs.current['message'].value
      };
  
      try{
        addDoc(ref,dataToPass);
      } catch(e){
        console.log(e);
      }
    };

  return (
    <main>

<article>

  

  <section class="hero" id="home">
    <div class="container">

      <div class="hero-content">

        <h1 class="h1 hero-title">Let your brand soar!!</h1>

        <p class="hero-text">
        At <b>The JanSampark</b>, we're dedicated to unleashing your brand's full potential. Let us guide you to new heights of success with tailored solutions and innovative strategies. It's time to let your brand soar.        </p>

        <button class="btn btn-primary">Get started</button>

      </div>

      <div class="hero-banner"></div>

    </div>

    <img src="./assets/images/bg.png" alt="shape" class="shape-content"/>
  </section>





  

  <section class="about" id="about">
    <div class="container">

      <div class="about-top">

        <h2 class="h2 section-title">What we do</h2>

        <p class="section-text">
          Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
          development of
          the asset through its charitable foundation.
        </p>

        <ul class="about-list">

          <li>
            <div class="about-card">

              <div class="card-icon">
                <IonIcon name="briefcase-outline"></IonIcon>
              </div>

              <h3 class="h3 card-title">CONTENT CREATION / CONTENT MARKETING</h3>

              <p class="card-text">
              Crafting compelling narratives and captivating content to elevate your brand's digital presence and engage your target audience effectively.
              </p>

            </div>
          </li>

          <li>
            <div class="about-card">

              <div class="card-icon">
                <IonIcon name="chatbubbles-outline"></IonIcon>
              </div>

              <h3 class="h3 card-title">WEBSITE AND LANDING PAGE DEVELOPMENT</h3>

              <p class="card-text">
              Crafting captivating digital experiences that elevate your brand's online presence through expertly designed websites and landing pages.
             </p>

            </div>
          </li>

          <li>
            <div class="about-card">

              <div class="card-icon">
                <IonIcon name="rocket-outline"></IonIcon>
              </div>

              <h3 class="h3 card-title">DIGITAL BRANDINGS</h3>

              <p class="card-text">
                <span>DATA + EMOTIONS= A STRONG DIGITAL BRAND</span>
              Transforming brands into digital powerhouses through strategic storytelling and innovative design.
              </p>

            </div>
          </li>

          <li>
            <div class="about-card">

              <div class="card-icon">
                <IonIcon name="rocket-outline"></IonIcon>
              </div>

              <h3 class="h3 card-title">SEARCH ENGINE OPTIMISATION</h3>

              <p class="card-text">
              Maximize your online visibility and enhance user engagement with our expert Search Engine Optimization (SEO) strategies
              </p>

            </div>
          </li>

          <li>
            <div class="about-card">

              <div class="card-icon">
                <IonIcon name="rocket-outline"></IonIcon>
              </div>

              <h3 class="h3 card-title">SOCIAL MEDIA</h3>

              <p class="card-text">
                Quickly, creative and attractive will best define your social media profiles when you invest in our social media marketing serices.
              </p>

            </div>
          </li>

          <li>
            <div class="about-card">

              <div class="card-icon">
                <IonIcon name="rocket-outline"></IonIcon>
              </div>

              <h3 class="h3 card-title">PAID ADVETISEMENTS</h3>

              <p class="card-text">
              Maximize your brand's reach and engagement with targeted paid advertisements across various social media platforms.
              </p>

            </div>
          </li>

        </ul>

      </div>

      <div class="about-bottom">

        <figure class="about-bottom-banner">
          <img src="./assets/images/about-banner.png" alt="about banner" class="about-banner"/>
        </figure>

        <div class="about-bottom-content">

          <h2 class="h2 section-title">We’re obsessed with growth</h2>

          <p class="section-text">
      "Call us the growth gurus because we're obsessed with seeing <br /> your business flourish. We're like gardeners, nurturing your brand to    bloom into something extraordinary.
          </p>

          <button class="btn btn-secondary">Sign Up For Free</button>

        </div>

      </div>

    </div>
  </section>





  

  <section class="features" id="features">
    <div class="container">

      <h2 class="h2 section-title">Our team is made up of all different backgrounds from all over the world.</h2>

      <p class="section-text">
        Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
        development of
        the asset through its charitable foundation.
      </p>

      <ul class="features-list">

        <li class="features-item">

          <figure class="features-item-banner">
            <img src="./assets/images/feature-1.png" alt="feature banner"/>
          </figure>

          <div class="feature-item-content">
            <h3 class="h2 item-title">Cover your everyday expenses</h3>

            <p class="item-text">
              Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt
              ut labore et
              dolore magna aliqua.
            </p>
          </div>

        </li>

        <li class="features-item">

          <figure class="features-item-banner">
            <img src="./assets/images/feature-2.png" alt="feature banner"/>
          </figure>

          <div class="feature-item-content">
            <h3 class="h2 item-title">We offer low fees that are transparent</h3>

            <p class="item-text">
              Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
              development of
              the asset through its charitable foundation.
            </p>
          </div>

        </li>

      </ul>

    </div>
  </section>



<section>
<Services/>
</section>

  <section class="cta">
    <div class="container">

      <div class="cta-card">
<div class="review-title">THE JANSAMPARK REVIEWS</div>
<hr/>
      <Testimonials/>

      </div>

    </div>
  </section>

  




  <section class="contact" id="contact">
    <div class="container">

      <div class="contact-content">
        <h2 class="h2 contact-title">Let’s scale your brand, together</h2>

        <figure class="contact-banner">
          <img src="./assets/images/contact.png" alt="contact banner"/>
        </figure>
      </div>

      <form action="" onSubmit={handleSave} class="contact-form">

        <div class="input-wrapper">
          <label for="name" class="input-label">Name *</label>

          <input type="text" name="name" id="name" ref={el => inputRefs.current['name'] = el} required placeholder="Type Name" class="input-field"/>
        </div>

        <div class="input-wrapper">
          <label for="phone" class="input-label">Phone</label>

          <input type="tel" name="phone" id="phone" ref={el => inputRefs.current['phone'] = el} placeholder="Type Phone Number" class="input-field"/>
        </div>

        <div class="input-wrapper">
          <label for="email" class="input-label">Email Address *</label>

          <input type="email" name="email" id="email" ref={el => inputRefs.current['email'] = el} required placeholder="Type Email Address" class="input-field"/>
        </div>

        <div class="input-wrapper">
          <label for="message" class="input-label">How can we help? *</label>

          <textarea name="message" id="message"  ref={el => inputRefs.current['message'] = el}placeholder="Type Description" required
            class="input-field"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Send Message</button>

      </form>

    </div>
  </section>

</article>

</main>
  )
}

export default Body