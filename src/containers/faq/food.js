import React, { Component } from 'react';
import {connect} from "react-redux";

import Food1 from'../../assets/static/images/Faq/Food/Food1.png';
import Food2 from'../../assets/static/images/Faq/Food/Food2.png';
import Food3 from'../../assets/static/images/Faq/Food/Food3.png';
import Food4 from'../../assets/static/images/Faq/Food/Food4.png';
import Food5 from'../../assets/static/images/Faq/Food/Food5.png';
import Food6 from'../../assets/static/images/Faq/Food/Food6.png';
import Food7 from'../../assets/static/images/Faq/Food/Food7.png';
import Food8 from'../../assets/static/images/Faq/Food/Food8.png';
import Food9 from'../../assets/static/images/Faq/Food/Food9.png';
import Food10 from'../../assets/static/images/Faq/Food/Food10.png';
import Food11 from'../../assets/static/images/Faq/Food/Food11.png';

import Food2_1 from'../../assets/static/images/Faq/Food/Food2-1.png';
import Food2_2 from'../../assets/static/images/Faq/Food/Food2-2.png';
import Food2_3 from'../../assets/static/images/Faq/Food/Food2-3.png';

class Food extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle(event) {

      event.preventDefault();

      $(event.target).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');

  }

  render() {

    let header_topic = "ร้านอาหารที่เปิดให้บริการบริเวณตึก FYI"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">ชั้น 1 ตึก FYI</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                <div class="row">
                  <div class="col-sm-4">
                    <img src={Food1} width="100%"/><br/><br/>
                  </div>
                  <div class="col-sm-4">
                    <img src={Food2} width="100%"/><br/><br/>
                  </div>
                  <div class="col-sm-4">
                    <img src={Food3} width="100%"/><br/><br/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <img src={Food4} width="100%"/><br/><br/>
                  </div>
                  <div class="col-sm-4">
                    <img src={Food5} width="100%"/><br/><br/>
                  </div>
                  <div class="col-sm-4">
                    <img src={Food6} width="100%"/><br/><br/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <img src={Food7} width="100%"/><br/><br/>
                  </div>
                  <div class="col-sm-4">
                    <img src={Food8} width="100%"/><br/><br/>
                  </div>
                  <div class="col-sm-4">
                    <img src={Food9} width="100%"/><br/><br/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <img src={Food10} width="100%"/><br/><br/>
                  </div>
                  <div class="col-sm-4">
                    <img src={Food11} width="100%"/><br/><br/>
                  </div>
                  <div class="col-sm-4">

                  </div>
                </div>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">ชั้น 2 ฝั่งอาคาร 1</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                <div class="row">
                  <div class="col-sm-4">
                    <img src={Food2_1} width="100%"/><br/><br/>
                  </div>
                  <div class="col-sm-4">
                    <img src={Food2_2} width="100%"/><br/><br/>
                  </div>
                  <div class="col-sm-4">
                    <img src={Food2_3} width="100%"/><br/><br/>
                  </div>
                </div>
              </p>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default Food
