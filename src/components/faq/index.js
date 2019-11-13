import React, { Component } from 'react';
//import '../../../assets/styles/index.scss';
//import $ from 'jquery';
//import { Link , NavLink } from 'react-router';
//import Site_Logo from'../../../assets/static/images/ojlogo.png';
//import ClientPage from './client'

const Categories_Pages = ({
  categories
}) => (
  <main className='main-content bgc-grey-100'>
    <div id='mainContent'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="bgc-white bd bdrs-3 p-20 mB-20">
              <div className="mB-20">
                <button className="btn btn-primary">Reload / โหลดข้อมูลใหม่</button>
                &nbsp;&nbsp;
                <button className="btn btn-success">เพิ่ม</button>
              </div>
              <table id="dataTable" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>action</th>
                      <th>name_en</th>
                      <th>name_th</th>
                      <th>description_en</th>
                      <th>description_th</th>
                      <th>tag_name</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>ID</th>
                      <th>action</th>
                      <th>name_en</th>
                      <th>name_th</th>
                      <th>description_en</th>
                      <th>description_th</th>
                      <th>tag_name</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {
                      categories.map((categorie) => (
                        <tr key={categorie.id}>
                          <td>{categorie.id}</td>
                          <td></td>
                          <td>{categorie.name_en}</td>
                          <td>{categorie.name_th}</td>
                          <td>{categorie.description_en}</td>
                          <td>{categorie.description_th}</td>
                          <td>{categorie.tag_name}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
)

export default Categories_Pages;
