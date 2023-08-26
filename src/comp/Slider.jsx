import React, { Component } from "react";
import Slider from "react-slick";
import './comp.css'


let array = ['https://images.unsplash.com/photo-1692460285275-2a5e79974567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8anIxWGRvWFBuWWN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' , 'https://images.unsplash.com/photo-1692767873267-fba0f7d85011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8anIxWGRvWFBuWWN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' , 'https://images.unsplash.com/photo-1692455173071-b7d8016e97bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8anIxWGRvWFBuWWN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' , 'https://images.unsplash.com/photo-1686871841750-685c6cc1a7e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8anIxWGRvWFBuWWN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' , 'https://images.unsplash.com/photo-1692767873166-07315f0d7fdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8anIxWGRvWFBuWWN8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' , 'https://images.unsplash.com/photo-1578318099756-6e3134cbfad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGpyMVhkb1hQblljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60' , 'https://images.unsplash.com/photo-1609331697491-34bff6b1d27d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGpyMVhkb1hQblljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60' , 'https://images.unsplash.com/photo-1674152708104-29d315740c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGpyMVhkb1hQblljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60' , 'https://images.unsplash.com/photo-1664444263366-dbdf4d2d8f22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGpyMVhkb1hQblljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'];

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="slider">
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
           <img src={array[0]} alt="" />
          </div>
          <div>
          <img src={array[1]} alt="" />
          </div>
          <div>
          <img src={array[2]} alt="" />
          </div>
          <div>
          <img src={array[3]} alt="" />
          </div>
          <div>
          <img src={array[4]} alt="" />
          </div>
          <div>
          <img src={array[5]} alt="" />
          </div>
          <div>
          <img src={array[6]} alt="" />
          </div>
          <div>
          <img src={array[7]} alt="" />
          </div>
          <div>
          <img src={array[8]} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}