import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom'

class Menu extends Component {

  render() {

    let lang = "th"

    let my_account = "บัญชีของฉัน"
    let dashboard = "แดชบอร์ดของฉัน"
    let learning_catalog = "รายการการเรียนรู้"
    let enrollment = "การลงทะเบียนเรียน"
    let assessment = "แบบประเมินตัวเอง"
    let certification = "ประกาศนียบัตร"
    let community = "ชุมชน"
    let transportation = "การเดินทาง"
    let it = "หลักสูตรออนไลน์"
    let food = "ร้านอาหาร"
    let my_learning = "การเรียนรู้ของฉัน"

    if(lang === "en"){
      my_account = "My Account"
      dashboard = "Dashboard"
      learning_catalog = "Learning Catalog"
      enrollment = "Enrollment"
      assessment = "Assessment"
      certification = "Certification"
      community = "Community"
      transportation = "Transportation"
      it = "Online Course"
      food = "Food"
      my_learning = "My learning"
    }

    return (
      <div>
        <ul className="cd-faq-categories">
          <li>
            <Link to={'/my_account:' + lang}>
              {my_account}
            </Link>
          </li>
          <li>
            <Link to={'/dashboard:' + lang}>
              {dashboard}
            </Link>
          </li>
          <li>
            <Link to={'/my_learning:' + lang}>
              {my_learning}
            </Link>
          </li>
          <li>
            <Link to={'/learning_catalog:' + lang}>
              {learning_catalog}
            </Link>
          </li>
          <li>
            <Link to={'/enrollment:' + lang}>
              {enrollment}
            </Link>
          </li>
          <li>
            <Link to={'/assessment:' + lang}>
              {assessment}
            </Link>
          </li>
          <li>
            <Link to={'/certification:' + lang}>
              {certification}
            </Link>
          </li>
          <li>
            <Link to={'/transportation:' + lang}>
              {transportation}
            </Link>
          </li>
          <li>
            <Link to={'/it:' + lang}>
              {it}
            </Link>
          </li>
          <li>
            <Link to={'/food:' + lang}>
              {food}
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}


export default Menu
