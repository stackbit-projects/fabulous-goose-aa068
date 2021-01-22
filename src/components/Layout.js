import React from 'react';
import Head from 'next/head';
import _ from 'lodash';

import {withPrefix, toStyleObj} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>
                        {_.get(this.props, 'page.title', null)}
                    </title>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.css" />
                    <link rel="icon" type="image/png" href={withPrefix(_.get(this.props, 'data.config.favicon', null))}/>
                </Head>
                    <div className="site-wrapper">
                        <Header {...this.props} page={this.props.page} site={this.props} />
                        {this.props.children}
                        <Footer {...this.props} page={this.props.page} site={this.props} />
                    </div>
                    <div style={toStyleObj("display: none")} id="template-params" data-api-key={_.get(this.props, 'data.config.snipcart_api_key', null)} data-templates-url={withPrefix('js/snipcart-templates.vue')}/>
            </React.Fragment>
        );
    }
}
