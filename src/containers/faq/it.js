import React, { Component } from 'react';
import {connect} from "react-redux";

import Addon1 from'../../assets/static/images/Faq/SimpliLearn Video/Addon1.png';
import Addon2 from'../../assets/static/images/Faq/SimpliLearn Video/Addon2.png';
import Cookie1 from'../../assets/static/images/Faq/SimpliLearn Video/Cookie1.png';
import Cookie2 from'../../assets/static/images/Faq/SimpliLearn Video/Cookie2.png';
import Cookie3 from'../../assets/static/images/Faq/SimpliLearn Video/Cookie3.png';
import Cookie4 from'../../assets/static/images/Faq/SimpliLearn Video/Cookie4.png';
import DueDate from'../../assets/static/images/Faq/Duedate.png';
import Coorp_Laptop from'../../assets/static/images/Faq/Coorp_Laptop.png';
import Coorp_Mobile1 from'../../assets/static/images/Faq/Coorp_Mobile1.png';
import Coorp_Mobile2 from'../../assets/static/images/Faq/Coorp_Mobile2.png';



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

    let header_topic = "หลักสูตรออนไลน์"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">เข้าเรียนหลักสูตร OnLine ไม่ได้</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                กรุณาตรวจสอบสิ่งต่อไป<br/>
              </p>
              <p className="padding_bottom indent_25">
                1. คอร์สเรียนออนไลน์ของ Simplilearn ถูกออกแบบมาเพื่อให้ผู้เรียนได้รับประสบการณ์การเรียนที่ดีที่
                สุดผ่าน Desktop (เครื่องคอมพิวเตอร์ หรือ แล็บท็อป) เท่านั้นและผู้เรียนยังจำเป็นที่จะต้องดาวน์โหลด
                เอกสารประกอบการเรียนควบคู่ไปอีกด้วย
              </p>
              <p className="padding_bottom indent_25">
                2. หากผู้เรียนไม่สามารถเข้าเรียนหลักสูตร OnLine ได้ โดยมีหน้าต่างขึ้นมาให้กรอก Username และ Password ลองทำตามขั้นตอนต่อไปนี้
                <span className="orange bold"> (แนะนำให้ใช้ Google Chrome ในการเข้าเรียนหลักสูตร)</span><br/><hr/>
              </p>
              <p className="sub_title">&#9657; ตรวจสอบส่วนเสริมของบราวเซอร์</p>
              <p className="indent_25">กรุณาตรวจสอบดูว่าเว็บบราวเซอร์ (Google Chrome, Safari or etc.) ของผู้เรียนมีการติดตั้งส่วนเสริม “บล็อคโฆษณา” ต่างๆ ไว้อยู่หรือไม่
              (Adblock) หากมีการติดตั้งไว้ ผู้เรียนจำเป็นต้องปิดการใช้งานก่อนเข้าเรียนหลักสูตร<br/><br/></p>
              <p className="indent_25"><span className="orange bold">ขั้นตอนการตรวจสอบ สำหรับ Google Chrome</span></p>
              <p className="indent_45">
                1. ที่ด้านบนมุมขวาของเว็บบราวเซอร์ ให้กดที่รูปจุด 3 จุด<br/><br/>
              </p>
              <div className="center"><img src={Addon1} className="max_width"/></div><br/>
              <p className="indent_45">
                2. จากนั้นให้เลือกเมนู Setting และ กดที่ปุ่ม Extensions ที่อยู่ทางด้านซ้าย<br/><br/>
              </p>
              <div className="center"><img src={Addon2} className="max_width"/></div><br/>
              <p className="indent_45">
                3. ตรวจสอบดูว่ามีส่วนเสริมบล็อคโฆษณาต่างๆ (Adblock) หรือไม่ หากมีให้กดปิดการใช้งานโดยคลิกที่ปุ่มแถบเลื่อนสีฟ้า ให้กลายเป็นสีเทา
              </p><br/><hr/>
              <p className="sub_title">&#9657; ตรวจสอบว่าไม่มีการบล็อคคุกกี้ (Block Cookies)</p><br/>
              <p className="indent_25"><span className="orange bold">สำหรับ Google Chrome วิธีตรวจสอบ คือ</span></p>
              <p className="indent_45">
                1. ที่ด้านบนมุมขวาของเว็บบราวเซอร์ ให้กดที่รูปจุด 3 จุด<br/><br/>
              </p>
              <div className="center"><img src={Addon1} /></div><br/>
              <p className="indent_45">
                2. จากนั้นให้เลือกเมนู Setting และค้นหาคำว่า Cookie จาก Search bar ด้านบน<br/>
              </p>
              <p className="indent_45">
                3. ในหัวข้อ Privacy and security ให้เลือกที่เมนู Site Settings<br/><br/>
              </p>
              <div className="center"><img src={Cookie1} width="100%" className="max_width"/></div><br/>
              <p className="indent_45">
                4. หลังจากกดเข้ามาจะพบกับหัวข้อ “Cookies” ให้กดเข้าไป
              </p>
              <p className="indent_45">
                5. หากหัวข้อที่ 3 (Block third-party cookies) ถูกเปิดใช้งานอยู่ให้ผู้เรียนปิดการใช้งาน หรือหากหัว
                ข้อที่ 1 (Allow sites to save and read cookie data) ปิดการใช้งานอยู่ให้ผู้เรียนเปิดการใช้งาน ให้เป็นไปตามภาพด้านล่าง
              </p><br/>
              <div className="center"><img src={Cookie2} width="100%" className="max_width"/></div><br/>
              <p className="indent_25"><span className="orange bold">สำหรับ Safari</span></p>
              <p className="indent_45">
                1. คลิกที่ Safari ที่ด้านบนซ้ายของหน้าจอ แล้วเลือก Preferences<br/><br/>
              </p>
              <div className="center"><img src={Cookie3} className="max_width"/></div><br/>
              <p className="indent_45">
                2. เลือกที่เมนู Privacy<br/>
              </p>
              <p className="indent_45">
                3. สังเกตว่าคำสั่ง “Prevent cross-site tracking” ถูกเปิดใช้งานไว้อยู่หรือไม่ หากเปิดใช้งานอยู่ให้ให้ปิดการใช้งาน ตามภาพด้านล่าง<br/><br/>
              </p>
              <div className="center"><img src={Cookie4} className="max_width"/></div><br/>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">Due Date คืออะไร</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                Due Date คือ วันที่สมาชิก<span className="orange bold">ตั้งเป้าหมายกับตนเอง</span>ว่าจะให้เรียนหลักสูตรนั้นๆให้จบ<br/><br/>
              </p>
              <div className="center"><img src={DueDate} className="max_width"/></div><br/>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">วิธีเปลี่ยนภาษา หลักสูตรออนไลน์ Coorpacademy</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                เมื่อสมาชิกเข้าเรียนหลักสูตรออนไลน์ของ Coorpacademy แล้ว<span className="orange bold">คำถาม และซับไตเติ้ลเป็นภาษาอังกฤษ</span> สามารถแก้ไขได้ ตามวิธีการต่อไปนี้<br/>
              </p>
              <p className="sub_title">&#9657; หากเข้าผ่าน Laptop</p>
              <p className="indent_45">
                1. ไปที่สัญลักษณ์<span className="orange bold">ฟันเฟือง</span> หรือ <span className="orange bold">setting</span> ทางด้านมุมบนขวา<br/>
              </p>
              <p className="indent_45">
                2. กดเปลี่ยนภาษา จาก <span className="orange bold">ภาษาอังกฤษ</span> เป็น <span className="orange bold">ภาษาไทย</span><br/><br/>
              </p>
              <div className="center"><img src={Coorp_Laptop} className="max_width"/></div><br/>
              <p className="sub_title">&#9657; หากเข้าผ่าน โทรศัพท์มือถือ</p>
              <p className="indent_45">
                1. ไปที่สัญลักษณ์ <span className="orange bold">YourNextU</span> ทางด้านมุมบนซ้าย<br/><br/>
              </p>
              <div className="center"><img src={Coorp_Mobile1} /></div><br/>
              <p className="indent_45">
                2. กดเปลี่ยนภาษา จาก <span className="orange bold">ภาษาอังกฤษ</span> เป็น <span className="orange bold">ภาษาไทย</span><br/><br/>
              </p>
              <div className="center"><img src={Coorp_Mobile2} /></div><br/>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default FaqHome
