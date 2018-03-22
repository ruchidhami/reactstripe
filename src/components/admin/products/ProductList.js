import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
//Component
import Layout from '../Layout';
import Active from '../../shared/ActiveTag'
import SkuCount from './SkuCount'

import { listProductFromApi } from '../../../actions/productAction';

class ProductList extends Component {
  render() {
    return (
      <div>
        <Layout />

        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
                List of Products
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Attributes</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={false}>
            {this.props.products.map( (product, index) => (
              <TableRow key={index}>
                <TableRowColumn>{product.name}</TableRowColumn>
                <TableRowColumn><Active active={product.active}/></TableRowColumn>
                <TableRowColumn><SkuCount attributes={product.attributes}/></TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div> 
    );
  }

  componentDidMount() {
    this.props.callApi();
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    callApi: listProductFromApi
  }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductList);