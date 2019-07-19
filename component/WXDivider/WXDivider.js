/*************************************************************************************************
 * <pre>
 * @项目名称:   RevenueReport
 * @版权所有:   无星 (C) 2019
 *
 *
 * @类描述:    分割线
 * @版本:         V2.0.0
 * @作者:         wuxing
 * @邮箱:         329106954@qq.com
 * @创建时间:     2019-06-12 11:30
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React, {Component} from 'react';
import {
    StyleSheet, View, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import {toDips} from "../../untils";

export class WXDivider extends Component {
    static propTypes = {
        style: ViewPropTypes.style
    }

    static defaultProps = {
        style: {}
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={[CssHotelDividerViewStyles.container, this.props.style]}/>
        );
    }
}

let CssHotelDividerViewStyles = StyleSheet.create({
    container: {
        height: toDips(1),
        backgroundColor: "#DFE2E7",
    },
});
