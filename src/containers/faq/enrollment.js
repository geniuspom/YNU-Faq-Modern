import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactJWPlayer from 'react-jw-player';

import Cancel_Event_En from'../../assets/static/images/Faq/Cancel Event 1 (EN).jpg';
import Cancel_Event_Th from'../../assets/static/images/Faq/Cancel Event 1 (TH).jpg';
import Cancel_Event_2_En from'../../assets/static/images/Faq/Cancel Event 2 (EN).jpg';
import Cancel_Event_2_Th from'../../assets/static/images/Faq/Cancel Event 2 (TH).jpg';
import Reschedule_En from'../../assets/static/images/Faq/Reschedule 1 (EN).jpg';
import Reschedule_Th from'../../assets/static/images/Faq/Reschedule 1 (TH).jpg';
import Reschedule_2_En from'../../assets/static/images/Faq/Reschedule 2 (EN).jpg';
import Reschedule_2_Th from'../../assets/static/images/Faq/Reschedule 2 (TH).jpg';
import Reschedule_3_En from'../../assets/static/images/Faq/Reschedule 3 (EN).jpg';
import Reschedule_3_Th from'../../assets/static/images/Faq/Reschedule 3 (TH).jpg';
import Pre_Requisite from'../../assets/static/images/Faq/Pre-Requisite.jpg';
import Prepare from'../../assets/static/images/Faq/Prepare.jpg';
import Repeat from'../../assets/static/images/Faq/Repeat.png';
import Full_Event1 from'../../assets/static/images/Faq/Full_Event1.png';
import Full_Event2 from'../../assets/static/images/Faq/Full_Event2.png';


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

    let header_topic = "การลงทะเบียนเรียน"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">วิธีการลงทะเบียน</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                ผู้เรียนสามารถเข้าชมวิธีการลงทะเบียนเรียนได้จากคลิปวีดีโอนี้ <br/><br/>
                <ReactJWPlayer
                    playerId='Enroll_JW_Player'
                    playerScript='https://cdn.jwplayer.com/libraries/aZQreqhw.js'
                    file='https://content.jwplatform.com/videos/493SLSMq-CjCvISKr.mp4'
                  />
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">การลงทะเบียนเรียนหลักสูตรที่ต่อเนื่องกัน</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                ในการลงทะเบียนเรียนหลักสูตรที่ต้องเรียงตามลำดับ เมื่อผู้เรียนลงทะเบียนเรียนหลักสูตรลำดับที่ 2 หลังจากการลงทะเบียนเรียนหลักสูตรลำดับที่ 1 เรียบร้อยแล้ว<br/><br/>
                1. ระบบจะขึ้นหน้า <span className="orange bold">“Pre-Requisite(Required)”</span> เพื่อเป็นการแจ้งให้สมาชิกทำการลงทะเบียนเรียนหลักสูตรลำดับที่ 1 ก่อน<br/>
                2. ผู้เรียนสามารถกดปุ่ม <span className="orange bold">“Add to My Learning”</span> หรือ <span className="orange bold">“เพิ่ม”</span> ที่อยู่ทางด้านมุมขวาบนเพื่อทำการลงทะเบียนเรียนหลักสูตรที่ 2<br/><br/>
                <img src={Pre_Requisite} width="100%"/><br/><br/>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">วิธีการยกเลิกหลักสูตรที่ลงทะเบียนเรียนอย่างไร</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                1. คลิกที่เมนู <span className="orange bold">&#34;การเรียนรู้ของฉัน&#34;</span> หรือ <span className="orange bold">&#34;My Learning&#34;</span><br/>
                2. เลือกหลักสูตรที่ต้องการยกเลิกโดยคลิกที่จุด 3 จุด เพื่อให้แสดงตัวเลือกเมนู<br/>
                3. คลิกที่ <span className="orange bold">&#34;ยกเลิก&#34;</span> หรือ <span className="orange bold">&#34;Cancel&#34;</span><br/><br/>
                <img src={Cancel_Event_Th} width="100%"/><br/><br/>
                <img src={Cancel_Event_En} width="100%"/><br/><br/>
                4. ระบบจะแสดงหน้าต่างขึ้นมาเพื่อให้เรายืนยันการยกเลิกหลักสูตร คลิก <span className="orange bold">&#34;Yes&#34;</span><br/><br/>
                <img src={Cancel_Event_2_Th} width="100%"/><br/><br/>
                <img src={Cancel_Event_2_En} width="100%"/><br/><br/>
                <br/>
                หรือผู้เรียนสามารถเข้าชมวิธีการยกเลิกหลักสูตรที่ลงทะเบียนเรียนไว้ได้จากคลิปวีดีโอนี้ <br/><br/>
                <ReactJWPlayer
                    playerId='Cancel_JW_Player'
                    playerScript='https://cdn.jwplayer.com/libraries/aZQreqhw.js'
                    file='https://content.jwplatform.com/videos/ww1DhMCh-CjCvISKr.mp4'
                  />
                <br/>
                อย่างไรก็ตาม ผู้เรียนต้องยกเลิกก่อนกำหนดการเรียนไม่น้อยกว่า 48 ชั่วโมง
                หากมีการสำรองที่นั่งแต่ไม่เข้าเรียนหลักสูตรติดต่อกันสามครั้ง ไม่ว่าด้วยเหตุผลใดๆ เราขอสงวนสิทธิ์ระงับไม่ให้เข้าถึงเป็นเวลา 30 วัน
                ดูข้อกำหนดในการลงทะเบียนและการยกเลิกได้
                <span className="orange bold">
                  <a href='https://www.seasiacenter.com/enrollment-cancellation-policy/' target='_blank'>ที่นี่</a>
                </span>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">ต้องการเปลี่ยนวันและเวลาเรียน</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">

                1. คลิกที่เมนู <span className="orange bold">&#34;การเรียนรู้ของฉัน&#34;</span> หรือ <span className="orange bold">&#34;My Learning&#34;</span><br/>
                2. เลือกหลักสูตรทีต้องการเปลี่ยนวันและเวลาเรียนโดยคลิกที่จุด 3 จุด เพื่อให้แสดงตัวเลือกเมนู<br/>
                3. คลิกที่ <span className="orange bold">&#34;Reschedule&#34;</span><br/><br/>
                <img src={Reschedule_Th} width="100%"/><br/><br/>
                <img src={Reschedule_En} width="100%"/><br/><br/>
                4. ระบบจะพาไปยังหน้ารายละเอียดของบทเรียนพร้องแสดงตารางเวลาของวิชาที่ต้องการเปลี่ยนวันและเวลาเรียน<br/><br/>
                <img src={Reschedule_2_Th} width="100%"/><br/><br/>
                <img src={Reschedule_2_En} width="100%"/><br/><br/>
                5. ทำการคลิกเลือกเวลาที่ต้องการเปลี่ยน แล้วคลิก <span className="orange bold">&#34;ลงทะเบียน&#34;</span> หรือ <span className="orange bold">&#34;Enroll&#34;</span><br/><br/>
                <img src={Reschedule_3_Th} width="100%"/><br/><br/>
                <img src={Reschedule_3_En} width="100%"/><br/><br/>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">ต้องเตรียมอะไรบ้างตอนไปเรียน</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                <img src={Prepare} width="100%"/><br/><br/>
                ผู้เรียนสามารถเข้าชมวิธีการเตรียมตัวก่อนมาเรียนได้จากคลิปวีดีโอนี้ <br/><br/>
                <ReactJWPlayer
                    playerId='Prepare_JW_Player'
                    playerScript='https://cdn.jwplayer.com/libraries/aZQreqhw.js'
                    file='https://content.jwplatform.com/videos/qLW62bpd-CjCvISKr.mp4'
                  />
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">การลงทะเบียนเรียนซ้ำ</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                หากสมาชิกต้องการลงทะเบียนเรียนซ้ำ สามารถทำได้โดยการเข้าไปหน้า <span className="orange bold">“My Learning”</span> และ
                นำหลักสูตรที่เคยเรียนออกก่อน จึงจะสามารถลงทะเบียนเรียนหลักสูตรนั้นซ้ำอีกครั้งได้<br/><br/>
              </p>
              <div className="center"><img src={Repeat} className="max_width"/></div><br/>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">ไม่มีปุ่มให้กดลงทะเบียนเรียน</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                หากไม่มีปุ่มให้กดลงทะบียนเรียน หมายความว่า <span className="orange bold">“คลาสเรียนเต็ม”</span> โดยจะแสดงให้เห็นเป็น 2 ลักษณะ คือ<br/>
              </p>
              <p className="indent_45">
                1. เมื่อเปิดจาก <span className="orange bold">“รายการการเรียนรู้”</span>  จะขึ้นคำว่า <span className="orange bold">“Full”</span><br/><br/>
              </p>
              <div className="center"><img src={Full_Event1} className="max_width"/></div><br/>
              <p className="indent_45">
                2. เมื่อเปิดจาก <span className="orange bold">“ปฏิทิน”</span> จะ<u>ไม่ขึ้น</u>ปุ่มให้กดลงทะเบียนเรียน<br/><br/>
              </p>
              <div className="center"><img src={Full_Event2} className="max_width"/></div><br/>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default FaqHome
