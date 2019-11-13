import React, { Component } from 'react';
import {connect} from "react-redux";

import Archived from'../../assets/static/images/Faq/Archived.png';
import Archived2 from'../../assets/static/images/Faq/Archived2.png';
import Archived3 from'../../assets/static/images/Faq/Archived3.png';

class My_learning extends Component {

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

    let header_topic = "การเรียนรู้ของฉัน"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">กล่อง “จัดเก็บแล้ว” หรือ “Archived” คืออะไร</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                กล่อง “จัดเก็บแล้ว” หรือ “Archived” เป็นกล่องที่สามารถนำหลักสูตรที่เรียนเสร็จสมบูรณ์แล้วเข้าไปไว้ เพื่อไม่ให้
                หน้า <span className="orange bold"> “การเรียนรู้ของฉัน”</span> หรือ <span className="orange bold"> “My Learning”</span> มีจำนวนหลักสูตรมากเกินไป
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">กล่อง “จัดเก็บแล้ว” อยู่ตรงไหน</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                กล่อง <span className="orange bold"> “จัดเก็บแล้ว”</span> จะอยู่ในหน้า <span className="orange bold">“My Learning”</span> ทางด้านมุมบนขวา<br/><br/>
              </p>
              <div className="center"><img src={Archived} className="max_width"/></div><br/>
              <p className="padding_bottom">
                TIPS : หากสมาชิกหาหลักสูตรที่เคยลงทะเบียนเรียนไว้ไม่พบ สามารถเข้าไปตรวจสอบที่กล่อง “จัดเก็บแล้ว”
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">จัดเก็บหลักสูตรที่เคยเรียนแล้ว ในกล่อง “จัดเก็บแล้ว” อย่างไร</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
              1.	คลิกที่เมนู <span className="orange bold">"การเรียนรู้ของฉัน"</span> หรือ <span className="orange bold">"My Learning"</span><br/>
              2.	เลือกหลักสูตรที่ต้องการยกเลิกโดยคลิกที่จุด 3 จุด เพื่อให้แสดงตัวเลือกเมนู<br/>
              3.	คลิกที่ <span className="orange bold">"จัดเก็บ"</span> หรือ <span className="orange bold">"Archive"</span>
              <br/><br/>
              </p>
              <div className="center"><img src={Archived2} className="max_width"/></div><br/>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">ยกเลิกการจัดเก็บหลักสูตรที่เคยเรียนแล้วในกล่อง “จัดเก็บแล้ว” อย่างไร</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
              1.	คลิกที่เมนู <span className="orange bold">"การเรียนรู้ของฉัน"</span> หรือ <span className="orange bold">"My Learning"</span><br/>
              2.	คลิกที่กล่อง <span className="orange bold">“จัดเก็บแล้ว”</span> หรือ <span className="orange bold">“Archived”</span><br/>
              3.	เลือกหลักสูตรที่ต้องการยกเลิกโดยคลิกที่จุด 3 จุด เพื่อให้แสดงตัวเลือกเมนู<br/>
              4.	คลิกที่ <span className="orange bold">"ยกเลิกการจัดเก็บ"</span> หรือ <span className="orange bold">"Unarchive"</span>
              <br/><br/>
              </p>
              <div className="center"><img src={Archived3} className="max_width"/></div><br/>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default My_learning
