import React, { Component } from 'react';
import {connect} from "react-redux";

import Membership1 from'../../assets/static/images/Faq/Membership1.jpg';
import Membership2 from'../../assets/static/images/Faq/Membership2.jpg';

import { GetCategories } from '../../actions/faq';

import Categories_Pages from '../../components/faq';

class Categories extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }

  }

  componentDidMount() {

      this.props.onLoadData('all')

  }

  render() {

    console.log(this.props.categoriesdata.data);

    let categories = this.props.categoriesdata.data;

      return (
        <div className="cd-faq-items">
          <Categories_Pages
            categories={this.props.categoriesdata.data}
          />
        </div>
      )

  }
}

const mapStatetoProps = (state)=> ({
    categoriesdata :state.faq_categories,
})

const mapDispatchtoProps = (dispatch)=> ({

  onLoadData(categories_id){
    dispatch(GetCategories(categories_id))
  }

})

const CategoriesWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Categories)
export default CategoriesWithConnect
