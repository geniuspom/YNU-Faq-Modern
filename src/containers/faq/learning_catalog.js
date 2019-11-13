import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactJWPlayer from 'react-jw-player';

import Find_1_TH from'../../assets/static/images/Faq/Find_1_TH.png';
import Find_2_TH from'../../assets/static/images/Faq/Find_2_TH.png';
import Find_2_EN from'../../assets/static/images/Faq/Find_2_EN.png';
import Find_3_TH from'../../assets/static/images/Faq/Find_3_TH.png';
import Find_3_EN from'../../assets/static/images/Faq/Find_3_EN.png';

import Assessment from'../../assets/static/images/Faq/Faq_Assessment.jpg';

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

    let header_topic = "รายการการเรียนรู้"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">วิธีการค้นหาหลักสูตร</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                การค้นหาหลักสูตร สามารถค้นหาได้ 3 ช่องทาง<br/>
                1. พิมพ์ชื่อหลักสูตรที่ต้องการได้ที่ช่อง search ด้านบน<br/><br/>
                <img src={Find_1_TH} width="100%"/><br/><br/>
                2. สามารถเข้าไปที่ <span className="orange bold">“รายการการเรียนรู้”</span> หรือ <span className="orange bold">“Learning Catalog” </span>
                และสามารถเลือกหลักสูตรที่ต้องการตามหมวดหมู่ทั้ง 3 หมวดหมู่ คือ Your Focus, Your Aspiration และ Your Ways of Learning หรือคลิก Link :
                <a href="https://learning.yournextu.com/Catalog" target="_blank"> https://learning.yournextu.com/Catalog</a><br/><br/>
                <img src={Find_2_TH} width="100%"/><br/><br/>
                <img src={Find_2_EN} width="100%"/><br/><br/>
                3. สามารถเข้าไปดูที่ <span className="orange bold">“ปฏิทิน”</span> หรือ <span className="orange bold">“Events”</span> และเลือกไปที่
                <span className="orange bold"> “ดูปฏิทิน”</span> หรือ <span className="orange bold">“Calendar View”</span> เพื่อดูหลักสูตร in-line และ bee-line ที่เปิดสอนในวันต่างๆ<br/><br/>
                <img src={Find_3_TH} width="100%"/><br/><br/>
                <img src={Find_3_EN} width="100%"/><br/><br/>
                หรือผู้เรียนสามารถเข้าชมวิธีการค้นหาหลักสูตรได้จากคลิปวีดีโอนี้ <br/><br/>
                <ReactJWPlayer
                    playerId='Learning_JW_Player'
                    playerScript='https://cdn.jwplayer.com/libraries/aZQreqhw.js'
                    file='https://content.jwplatform.com/videos/01Wn3yI6-CjCvISKr.mp4'
                  />
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">วิธีการให้คะแนนและแสดงความคิดเห็นต่อหลักสูตร</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                ผู้เรียนสามารถเข้าชมวิธีการให้คะแนนและแสดงคิดเห็นต่อหลักสูตรได้จากคลิปวีดีโอนี้ <br/><br/>
                <ReactJWPlayer
                    playerId='Rating_JW_Player'
                    playerScript='https://cdn.jwplayer.com/libraries/aZQreqhw.js'
                    file='https://content.jwplatform.com/videos/z7C5366C-CjCvISKr.mp4'
                  />
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">Outward Mindset for Life กับ Outward Mindset at Work แตกต่างกันอย่างไร?</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                ทั้งสองหลักสูตรใช้ framework เหมือนกันแต่วิธีการนำเสนอต่างกัน และสามารถเลือกเรียนได้ทั้งสองหลักสูตร
              </p>
              <p className="indent_25">
                &#9657; หลักสูตร <span className="orange bold">Outward Mindset for Life</span> เน้นการนำไปใช้กับชีวิตในทุกๆ ด้าน ทั้งครอบครัว ความสัมพันธ์
              </p>
              <p className="indent_25">
                &#9657; หลักสูตร <span className="orange bold">Outward Mindset at Work</span> เน้นสถานการณ์ในที่ทำงาน เป็นมุมมองในบริบทการทำงาน
              </p>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default FaqHome
