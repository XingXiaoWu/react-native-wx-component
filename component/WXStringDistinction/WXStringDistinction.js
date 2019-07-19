/*************************************************************************************************
 * <pre>
 * @项目名称:   RevenueReport
 * @版权所有:   无星 (C) 2019
 *
 *
 * @类描述:
 * @版本:         V2.0.0
 * @作者:         wuxing
 * @邮箱:
 * @创建时间:
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
    ViewPropTypes,
} from 'react-native';
import PropTypes from "prop-types";

export class WXStringDistinction extends Component {
    static propTypes = {
        delimiter: PropTypes.string,
        value: PropTypes.number,
        style: PropTypes.any,
        style1: PropTypes.any,
        style2: PropTypes.any
    };

    static defaultProps = {
        delimiter: null,
        value: 0,
        style: {
            alignSelf: 'flex-end'
        },
        style1: {
            alignSelf: 'flex-end',
        },
        style2: {
            alignSelf: 'flex-end'
        },
    };


    render() {
        return (
            <View style={[{flexDirection: 'row'}]}>
                <Text style={[{alignSelf: 'flex-end'}, this.props.style]}>{this.getFirst(this.props.value)}</Text>
                <Text style={[{alignSelf: 'flex-end'}, this.props.style1]}>{this.props.delimiter}</Text>
                <Text style={[{alignSelf: 'flex-end'}, this.props.style2]}>{this.getLast(this.props.value)}</Text>
            </View>
        );
    }


    getFirst(value) {
        let data = value.toString()
        if (data.length > 2 && this.props.delimiter) {
            let array = data.split(this.props.delimiter)
            return array[0]
        }
        return ""
    }

    getLast(value) {
        let data = value.toString()
        if (data.length > 2 && this.props.delimiter) {
            let array = data.split(this.props.delimiter)
            return array[1]
        }
        return ""
    }
}
