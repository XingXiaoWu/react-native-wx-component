/*************************************************************************************************
 * <pre>
 * @项目名称:   RevenueReport
 * @版权所有:   无星 (C) 2019
 *
 *
 * @类描述:    版权声明组件
 * @版本:         V2.0.0
 * @作者:         wuxing
 * @邮箱:         329106954@qq.com
 * @创建时间:     2019-06-06 11:11
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
} from 'react-native';
import PropTypes from "prop-types";
import {toDips,toDipsWidth,toDipsHeight} from '../../untils';

export class WXStatement extends PureComponent {

    static propTypes = {
        version: PropTypes.string.isRequired,  //版本
        versionShow: PropTypes.bool,
        style: ViewPropTypes.style,
    }

    static defaultProps = {
        version: "",  //版本
        versionShow: true,
        style: {},
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={[CssHotelStatementStyles.container,this.props.style]}>
                <View style={CssHotelStatementStyles.viewStyle}>
                    <View style={CssHotelStatementStyles.lineStyle}/>
                    <Text style={CssHotelStatementStyles.textStyle}>版权归属xxxx有限责任公司</Text>
                    <View style={CssHotelStatementStyles.lineStyle}/>
                </View>
                {
                    this.props.versionShow ?
                        <Text style={CssHotelStatementStyles.textStyle}>当前版本:
                            V{this.props.version}</Text>
                        :
                        null
                }

            </View>
        );
    }
}

let CssHotelStatementStyles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    lineStyle: {
        height: toDips(1),
        backgroundColor: "#C1C3D4",
        width: toDipsWidth(80)
    },
    textStyle: {
        color: "#C1C3D4",
        fontSize: toDips(22),
    }
});
