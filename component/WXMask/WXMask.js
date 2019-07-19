/*************************************************************************************************
 * <pre>
 * @项目名称:   RevenueReport
 * @版权所有:   无星 (C) 2019
 *
 *
 * @类描述:    蒙版,一般配合Modal使用
 * @版本:         V2.0.0
 * @作者:         wuxing
 * @邮箱:         329106954@qq.com
 * @创建时间:     2019-06-12 11:26
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

export class WXMask extends Component {

    static propTypes = {
        onPress: PropTypes.func,
        style: ViewPropTypes.style
    }

    static defaultProps = {
        onPress: null,
        style: {}
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={[{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0,0.5)'
                }, this.props.style]}
                onPress={() => {
                    this.props.onPress()
                }}
            />
        );
    }
}

let CssHotelMaskStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
