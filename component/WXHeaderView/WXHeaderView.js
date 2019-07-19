/*************************************************************************************************
 * <pre>
 * @项目名称:   RevenueReport
 * @版权所有:   无星 (C) 2019
 *
 *
 * @类描述:
 * @版本:         V2.0.0
 * @作者:         wuxing
 * @邮箱:         329106954@qq.com
 * @创建时间:     2019-06-10 10:02
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React, { Component } from 'react';
import {
    StyleSheet, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from "react-native-linear-gradient";

import { toDipsHeight, toDipsWidth } from "../../untils";

export class WXHeaderView extends Component {

    static propTypes = {
        leftColor: PropTypes.string,
        rightColor: PropTypes.string,
        height: PropTypes.number,
        style: ViewPropTypes.style,
    }

    static defaultProps = {
        leftColor: "#77ADFF",
        rightColor: "#6C6EFF",
        height: toDipsHeight(132),
        style: {},
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <LinearGradient
                colors={[this.props.leftColor, this.props.rightColor]}
                start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 0.0 }}
                style={[CssHotelHeaderViewStyles.container, { height: this.props.height, }, this.props.style]}
            >
                {this.props.children}
            </LinearGradient>
        );
    }
}

let CssHotelHeaderViewStyles = StyleSheet.create({
    container: {
        paddingTop: toDipsHeight(15),
        paddingLeft: toDipsWidth(30),
        paddingRight: toDipsWidth(30)
    },
});
