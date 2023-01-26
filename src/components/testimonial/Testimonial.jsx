import React from "react";
import "./tesimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {  Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const data = [
  {
      avatar: AVTR1,
      name: 'Sarita Mahawar',
      review: 'its a nice and beautiful website made by my friend Sandeep. He just created his resume but in a very fantastic way.'
  },
   {
      avatar: AVTR2,
      name: "Sachhin Kumawat",
      review: 'Your site is very useful to us I made a site to learn  to our new ideas and planning extra and your site is very easy to understand'
   },
   {
      avatar: AVTR3,
      name: "Tanishq Sharma",
      review: 'Got here just by surfing on my friends circle accounts,  but then I just realised its a nice and beautiful website made by my friend Sandeep. He just created his resume but in a very fantastic way.'


  },
   {
      avatar: AVTR4,
      name: "Rahul Kumawat",
      review: 'Your site is very useful to us I made a site to learn  to our new ideas and planning extra and your site is very easy to understand'
  },
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testinomials</h2>

      <Swiper className="container testimonials_container"  
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide article key={index} className="testinomial">
        <div className="client_avatar">
             <img src={avatar} alt=""/>
        </div>
          <h5 className="client_name">{name}</h5>
          <small className="client_review">
            {review}
          </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;
