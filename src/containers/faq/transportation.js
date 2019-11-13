import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactJWPlayer from 'react-jw-player';

import Victor from'../../assets/static/images/Faq/Victor.png';

class FaqHome extends Component {

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

    let header_topic = "การเดินทาง"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">การเดินทางมายัง Garage@SEAC</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                ผู้เรียนสามารถเข้าชมวิธีการเตรียมตัวก่อนมาเรียนได้จากคลิปวีดีโอนี้ <br/><br/>
                <ReactJWPlayer
                    playerId='Trans_JW_Player'
                    playerScript='https://cdn.jwplayer.com/libraries/aZQreqhw.js'
                    file='https://content.jwplatform.com/videos/lMGF5XPr-CjCvISKr.mp4'
                  />
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">การเดินทางมายัง Victor Club</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                ผู้เรียนสามารถใช้ลิฟท์ของอาคารที่ 1 ข้างร้าน So asean เพื่อไปห้อง Victor 1 และ2 ที่ชั้น 2 <br/><br/>
                <img src={Victor} width="100%"/><br/><br/>
              </p>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default FaqHome
