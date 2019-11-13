import React, { Component } from 'react';
import {connect} from "react-redux";

import Membership1 from'../../assets/static/images/Faq/Membership1.jpg';
import Membership2 from'../../assets/static/images/Faq/Membership2.jpg';

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

    let header_topic = "บัญชีของฉัน"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">ไม่สามารถเข้าสู่ระบบ (Log in) ได้</a>
            <div className="cd-faq-content">
              <p>
                1. ตรวจสอบอีเมลที่ใช้เข้าระบบว่าตรงกับอีเมลที่ลงทะเบียนไว้<br/>
                2. หากยังเข้าไม่ได้ ให้กดที่ <span className="orange bold">“ลืมรหัสผ่านใช่ไหม”</span> หรือ
                <span className="orange bold"> “Forgot Password?”</span> และใส่อีเมลที่ได้ลงทะเบียนไว้ แล้วกด <span className="orange bold">“ส่ง” </span>
                  หรือ <span className="orange bold">“Submit”</span><br/>
                3. ระบบจะส่งอีเมลให้ตั้งรหัสผ่านใหม่ จากนั้นลองเข้าอีกครั้ง<br/>
                4. หากยังเข้าไม่ได้ โปรดติดต่อเจ้าหน้าที่ <span className="orange bold">โทร 061 420 5959 </span>
                หรือ อีเมล : <span className="orange bold"><a href="mailto:helpme@yournextu.com">helpme@yournextu.com</a></span>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">เปลี่ยนภาษาอย่างไร</a>
            <div className="cd-faq-content">
              <p>
                กดที่ตัวอักษร <span className="orange bold">TH/EN</span> จากเมนูบาร์ด้านบน และเลือกภาษาที่ต้องการ
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">แก้ไขข้อมูลส่วนตัวได้ที่ไหน</a>
            <div className="cd-faq-content">
              <p>
                1. คลิกที่รูป profile ตนเองบนเมนูบาร์ด้านมุมบนขวา เลือกที่ <span className="orange bold">“โปรไฟล์ของฉัน”</span> หรือ <span className="orange bold">“View Profile” </span><br/>
                2. กด <span className="orange bold">“แก้ไข”</span> หรือ <span className="orange bold">“Edit” </span><br/>
                3. จากนั้นแก้ไขข้อมูลในแต่ละหัวข้อ<br/>
                4. เมื่อแก้ไขเสร็จจึงกด <span className="orange bold">“บันทึก”</span> หรือ <span className="orange bold">“Save”</span>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">เปลี่ยน password อย่างไร</a>
            <div className="cd-faq-content">
              <p>
                1. คลิกที่รูป profile ตนเองตรงมุมบนขวา เลือก <span className="orange bold">“การตั้งค่าบัญชี”</span> หรือ <span className="orange bold">“My Account” </span><br/>
                2. กรอก password ที่ใช้อยู่ในปัจจุบันในช่อง <span className="orange bold">“รหัสผ่าน”</span> หรือ <span className="orange bold">“Password” </span><br/>
                3. กรอก password ใหม่ที่ต้องการเปลี่ยนในช่อง <span className="orange bold">“กรอกรหัสผ่านใหม่”</span> หรือ <span className="orange bold">“Enter New Password” </span><br/>
                4. กรอก password ใหม่ที่ต้องการเปลี่ยนอีกครั้งในช่อง <span className="orange bold">“กรอกรหัสผ่านใหม่อีกครั้ง”</span> หรือ <span className="orange bold">“Re-type New Password” </span><br/>
              5. กด <span className="orange bold">“เปลี่ยนรหัสผ่าน”</span> หรือ <span className="orange bold">“Change Password”</span>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">การตรวจสอบวันหมดอายุของสมาชิก</a>
            <div className="cd-faq-content">
              <p>
                1. คลิกที่รูป profile ตนเองตรงมุมบนขวา เลือก <span className="orange bold">“การตั้งค่าบัญชี”</span> หรือ <span className="orange bold">“My Account” </span><br/><br/>
                <img src={Membership1} width="100%"/><br/><br/>
                2. เลือกไปที่ <span className="orange bold">“การเป็นสมาชิก”</span> หรือ <span className="orange bold">“Membership” </span><br/><br/>
                <img src={Membership2} width="100%"/><br/><br/>
              </p>
            </div>
          </li>
        </ul>

      </div>
    )
  }
}

export default FaqHome
