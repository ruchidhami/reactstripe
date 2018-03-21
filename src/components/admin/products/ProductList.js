import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Component
import Layout from '../Layout';

import { listProductFromApi } from '../../../actions/productAction';

class ProductList extends Component {
    render() {
        return (
            <div>
                <Layout />
                <table>
                    <tbody>
                        {
                            this.props.products.map((product) => {
                                return (
                                    <tr key={product.id} >
                                        <td>
                                            {product.name}
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
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