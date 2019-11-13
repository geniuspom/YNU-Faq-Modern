import React, { Component } from 'react';
import {connect} from "react-redux";

import Assessment from'../../assets/static/images/Faq/Assessment.png';

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

    let header_topic = "แบบประเมินตัวเอง"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">หลักสูตรที่ต้องใช้แบบประเมิน “Psytech” ในห้องเรียน</a>
            <div className="cd-faq-content">
              <p className="indent_25">
                1.	หลักสูตร Emotional Intelligence 1 และ 2
              </p>
              <p className="indent_25">
                2.	หลักสูตร Discover Yourself with Personality Assessment<br/><br/>
              </p>
              <p className="indent_25">
              <span className="orange bold">***แบบประเมินก่อนเรียนของหลักสูตร Emotional Intelligence 1, 2 และหลักสูตร Discover Yourself with Personality Assessment เป็นชุด
              เดียวกัน แต่การวิเคราะห์ผลต่างกัน</span> หากผู้เรียนเคยเรียนหลักสูตรใดหลักสูตรหนึ่งแล้ว ไม่จำเป็นต้องทำใหม่ โดยทาง YourNextU จะส่งผลการประเมิน
              (Report) ไปให้ท่านใหม่ภายใน 2 วันทำการหลังจากท่านลงทะเบียนเรียน***<br/><br/>
              </p>
              <p>
              TIPS : การทำแบบประเมินตนเอง “Psytech” online assessment เมื่อทำถึงข้อสุดท้ายจะมีหน้าต่างเปิดขึ้นมาเพื่อให้ตรวจสอบ
              คำตอบ ให้เลือกว่า “ไม่ใช่” เพื่อจบการทำแบบทดสอบ และรอรับผลการประเมินภายใน 2 วันทำการ<br/><br/>
              </p>
              <div className="clear_both center"><img src={Assessment} /></div><br/>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">หลักสูตรที่ต้องใช้แบบประเมิน “Extended DISC” ในห้องเรียน</a>
            <div className="cd-faq-content">
              <p className="indent_25">
                1.	The Four Houses of DISC 1 และ 2
              </p>
              <p className="indent_25">
                2.	Managing Up with Extended DISC
              </p>
              <p className="indent_25">
                3.	DISC is Love
              </p>
              <p className="indent_25">
                4.	DISC is the key to my dream partner
              </p>
              <p className="indent_25">
                5.	The Practice: Read me if you can!
              </p>
              <p className="indent_25">
                6.	ฉลาดเกมส์คน (Human Game)<br/><br/>
              </p>
              <p className="indent_25">
              ***หากผู้เรียนเคยเรียนหลักสูตรใดหลักสูตรหนึ่งมาแล้ว ไม่จำเป็นต้องทำแบบประเมินใหม่ และ
              สามารถใช้ผลการประเมิน (Report) ที่ใช้เรียนหลักสูตรนั้นได้เลย***<br/><br/>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">เมื่อไหร่จะได้รับแบบประเมินตนเอง (Assessment)</a>
            <div className="cd-faq-content">
              <p className="indent_25">
                ผู้เรียนจะได้รับแบบประเมินตนเองผ่านทางอีเมลภายใน 2 วันทำการหลังจากการลงทะเบียนเรียน<br/><br/>
              </p>
              <p>
                TIPS : อีเมลที่ถูกส่งไปอาจตกหล่นอยู่ใน “Junk Mail”
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">เมื่อไหร่จะได้รับผลการประเมินตนเอง (Report)</a>
            <div className="cd-faq-content">
              <p className="indent_25">
                ผู้เรียนจะได้รับผลการประเมินตนเองผ่านทางอีเมลภายใน 1 วันทำการหลังจากการทำแบบประเมิน โดยสามารถดูผ่าน Smartphone หรือ Print ออกมาด้วยตัวเอง และนำมาในวันที่เรียน
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">หากผู้เรียนมีปัญหาในการทำแบบประเมินตนเอง</a>
            <div className="cd-faq-content">
              <p className="indent_25">
                สามารถติดต่อเจ้าหน้าที่ได้ที่หมายเลข <span className="orange bold">06-1420-5959 กด 2</span> ในวันและเวลาทำการ (จันทร์-ศุกร์ 9.00-18.00 น.)
              </p>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default FaqHome
