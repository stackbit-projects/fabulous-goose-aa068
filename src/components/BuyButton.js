import React from 'react';
import _ from 'lodash';

import {withPrefix, getPage} from '../utils';

export default class BuyButton extends React.Component {
    render() {
        let product_page = _.get(this.props, 'product_page', null);
        return (
            <button className="button button--std snipcart-add-item"
                data-item-name={_.get(product_page, 'title', null)}
                data-item-url={_.get(product_page, 'stackbit_url_path', null)}
                data-item-price={_.get(product_page, 'price', null)}
                {...(_.get(product_page, 'default_thumbnail_image', null) ? ({"data-item-image": withPrefix(_.get(product_page, 'default_thumbnail_image', null))}) : null)}
                data-item-description={_.get(product_page, 'description', null)}
                {...(_.get(product_page, 'category', null) ? ((() => {
                    let category_page = getPage(this.props.pages, _.get(product_page, 'category', null).stackbit_url_path);
                    return ({"data-item-categories": _.get(category_page, 'title', null)});
                })()) : null)}
                data-item-id={_.get(product_page, 'id', null)}>
                <span className="button__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.2896 4.94327C22.7844 4.81588 22.2535 5.1214 22.1272 5.63093L20.0304 13.9616H7.8562L4.97602 2.16559C4.87538 1.73269 4.49648 1.42717 4.0416 1.42717H0.960093C0.429223 1.42717 0 1.86007 0 2.39549C0 2.93091 0.429223 3.36381 0.960093 3.36381H3.3095L7.19908 19.3624C7.29973 19.7953 7.67862 20.1009 8.13351 20.1009H19.2223C19.7531 20.1009 20.1824 19.668 20.1824 19.1325C20.1824 18.5971 19.7531 18.1642 19.2223 18.1642H8.86555L8.31003 15.8972H20.7378C21.1671 15.8972 21.546 15.5917 21.6723 15.1836L23.9714 6.11341C24.0977 5.60487 23.7947 5.07044 23.2895 4.94306L23.2896 4.94327Z" fill="#88DD9B"/>
                        <path d="M11.4678 22.4455C11.4678 23.3034 10.7781 24 9.92751 24C9.07596 24 8.38623 23.3034 8.38623 22.4455C8.38623 21.5877 9.07596 20.891 9.92751 20.891C10.7781 20.891 11.4678 21.5877 11.4678 22.4455Z" fill="#88DD9B"/>
                        <path d="M19.4244 22.4455C19.4244 23.3034 18.7346 24 17.8841 24C17.0325 24 16.3428 23.3034 16.3428 22.4455C16.3428 21.5877 17.0325 20.891 17.8841 20.891C18.7346 20.891 19.4244 21.5877 19.4244 22.4455Z" fill="#88DD9B"/>
                        <path d="M16.6972 6.11442L14.9793 7.84704V0.96832C14.9793 0.432901 14.5501 0 14.0192 0C13.4884 0 13.0592 0.432901 13.0592 0.96832V7.84704L11.3413 6.11442C11.1646 5.93628 10.912 5.83376 10.6594 5.83376C10.4068 5.83376 10.1799 5.93527 9.9776 6.11442C9.59869 6.49657 9.59869 7.1076 9.9776 7.46489L13.3375 10.8535C13.6907 11.2098 14.3222 11.2098 14.6765 10.8535L18.0363 7.46489C18.4152 7.08274 18.4152 6.4717 18.0363 6.11442C17.6821 5.73227 17.0762 5.73227 16.6973 6.11442H16.6972Z" fill="#88DD9B"/>
                    </svg>
                </span>
                <span className="button__text">
                    Add to cart
                </span>
            </button>
        );
    }
}