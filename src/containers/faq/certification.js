import React, { Component } from 'react';
import {connect} from "react-redux";

import CertificationEN from'../../assets/static/images/Faq/Certification (EN).jpg';
import CertificationTH from'../../assets/static/images/Faq/Certification (TH).jpg';

import Certification1 from'../../assets/static/images/Faq/Certification1.png';
import Certification2 from'../../assets/static/images/Faq/Certification2.png';
import Certification3 from'../../assets/static/images/Faq/Certification3.png';

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

    let header_topic = "ประกาศนียบัตร"

    return (
      <div className="cd-faq-items">

        <ul id="basics" className="cd-faq-group">
          <li className="cd-faq-title"><h2>{header_topic}</h2></li>
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">เรียนแล้วได้ประกาศนียบัตรทุกหลักสูตรหรือไม่</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
                หลักสูตรที่เรียนแล้วได้รับประกาศนียบัตร จะอยู่ในเมนูด้านซ้ายมือที่ชื่อว่า <span className="orange bold">&#34;ประกาศนียบัตร&#34;</span>
              หรือ <span className="orange bold">&#34;Certifications&#34;</span> หรือคลิก Link : <a href="https://learning.yournextu.com/Certification" target="_blank">https://learning.yournextu.com/Certification</a><br/><br/>
              <img src={CertificationTH} width="100%"/><br/><br/>
              <img src={CertificationEN} width="100%"/>
              </p>
            </div>
          </li>
        </ul>

        <ul id="basics" className="cd-faq-group">
          <li>
            <a className="cd-faq-trigger" onClick={this.toggle} href="#">การลงทะเบียน และดูวีดีโอหลักสูตรที่ได้ประกาศนียบัตรจากการเรียน</a>
            <div className="cd-faq-content">
              <p className="padding_bottom">
              หากท่านต้องการ ประกาศนียบัตร จาก หลักสูตร <span className="orange bold">“The e3 leader”</span> และหลักสูตร <span className="orange bold">“STEPIn Leader”</span> สามารถกดลงทะเบียน
              เรียนในหน้า <span className="orange bold">“ประกาศนียบัตร”</span> หรือ <span className="orange bold">“Certifications”</span> เพื่อรับทราบหลักสูตรที่ต้องเรียน ดังต่อไปนี้<br/><br/>
                1. เลือกวิชาที่ต้องการ<br/>
                2. กดเพิ่ม (หากไม่กดเพิ่ม จะไม่สามารถดูวิดีโอได้)<br/><br/>
                <img src={Certification1} width="100%"/><br/><br/>
                3. กดเริ่มต้น<br/><br/>
                <img src={Certification2} width="100%"/><br/><br/>
                4.	ดูที่ tab content จะคลิกดูวิดีโอได้<br/><br/>
                <img src={Certification3} width="100%"/><br/><br/>
              </p>
            </div>
          </li>
        </ul>

      </div>
    )

  }
}

export default FaqHome
