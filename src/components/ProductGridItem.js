import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, getPage} from '../utils';
import Picture from './Picture';
import SmallBuyButton from './SmallBuyButton';

export default class ProductGridItem extends React.Component {
    render() {
        let product_page = _.get(this.props, 'product_page', null);
        return (
            <li className="product-grid__item">
                <Link href={withPrefix(_.get(product_page, 'stackbit_url_path', null))}>
                    <figure className="product-grid__item-figure js-figure-link">
                        <Picture {...this.props} image={_.get(product_page, 'default_thumbnail_image', null)} alt={_.get(product_page, 'title', null)} cssClass={'product-grid__item-image'} />
                        <figcaption>
                            <SmallBuyButton {...this.props} product_page={product_page} component={'product-grid'} />
                        </figcaption>
                    </figure>
                </Link>
                <div className="product-grid__definition">
                    <Link href={withPrefix(_.get(product_page, 'stackbit_url_path', null))}><h3 className="product-grid__title">{_.get(product_page, 'title', null)}</h3></Link>
                    {_.get(product_page, 'category', null) && ((() => {
                        let category_page = getPage(this.props.pages, _.get(product_page, 'category', null).stackbit_url_path);
                        return (
                            <span className="product-grid__category"> {_.get(category_page, 'title', null)} </span>
                        );
                    })())}
                    <span className="product-grid__price"> ${_.get(product_page, 'price', null)} </span>
                </div>
            </li>
        );
    }
}
