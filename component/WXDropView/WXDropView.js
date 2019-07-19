/*************************************************************************************************
 * <pre>
 * @项目名称:   RevenueReport
 * @版权所有:   无星 (C) 2019
 *
 *
 * @类描述:    下拉列表
 * @版本:         V2.0.0
 * @作者:         wuxing
 * @邮箱:         329106954@qq.com
 * @创建时间:     2019-06-18 14:38
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
    ViewPropTypes, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import {toDipsHeight} from "../../untils";

export class WXDropView extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
        renderItems: PropTypes.func,
        style: ViewPropTypes.style
    }

    static defaultProps = {
        data: [],
        renderItems: () => {
        },
        style: {}
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }


    render() {
        return (
            <View style={CssHotelDropViewStyles.container}>
                <View style={{height: toDipsHeight(400),backgroundColor: "#fff"}}>
                    <FlatList
                        // style={{height:toDipsHeight(100)}}
                        data={this.props.data}
                        renderItem={(item) => {
                            return this.props.renderItems(item)
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>
                {this.props.children}
            </View>
        );
    }
}

let CssHotelDropViewStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    },
});
