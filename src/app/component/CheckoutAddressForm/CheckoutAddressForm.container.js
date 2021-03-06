/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { connect } from 'react-redux';

import CheckoutAddressForm from './CheckoutAddressForm.component';

/** @namespace Component/CheckoutAddressForm/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    countries: state.ConfigReducer.countries,
    default_country: state.ConfigReducer.default_country,
    shippingFields: state.CheckoutReducer.shippingFields
});

/** @namespace Component/CheckoutAddressForm/Container/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars
export const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutAddressForm);
