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
 * @创建时间:     2019-07-11 14:03
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
import PropTypes from "prop-types";
import {WXModal, WXMask} from "..";
import {toDips, toDipsHeight} from "../../untils";

export class WXBottomModal extends Component {

    //可选数据类型
    static dataType = {
        //酒店列表
        hotel: "hotel",
        analysisType:"analysisType"
    }

    static propTypes = {
        //数据源
        data: PropTypes.object,
        dismiss: PropTypes.func,
    }

    static defaultProps = {
        data: {
            //数据源类型
            type: "",
            //数据源
            list: [],
            //当前数值
            curItem: {},
            //点击选项触发返回方法
            onPress: () => {
            },
        },
        //消失由外部控制
        dismiss: () => {
        }
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    show() {
        this.model.show()
    }

    dismiss() {
        this.model.dismiss()
    }

    render() {
        return (
            <WXModal
                ref={(ref) => {
                    this.model = ref
                }}
            >
                <WXMask
                    onPress={() => {
                        this.dismiss()
                    }}
                />
                <BottomList
                    data={this.props.data.list}
                    curItem={this.props.data.curItem}
                    type={this.props.data.type}
                    onPress={(item) => {
                        this.props.data.onPress(item)
                    }}
                />
            </WXModal>
        );
    }
}

//底部弹窗选项卡
class BottomList extends Component {

    static propTypes = {
        data: PropTypes.array,
        curItem: PropTypes.object,
        type: PropTypes.string,
        onPress: PropTypes.func,
    }

    static defaultProps = {
        data: [],
        curItem: {},
        type: "",
        onPress: () => {

        },
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }


    renderItems(item) {
        //    判断类型,渲染不同item
        //todo 优化,将外部数据转成内部特有数据
        switch (this.props.type) {
            //酒店
            case WXBottomModal.dataType.hotel : {
                return this.renderItem(item.item, item.item.hotelName)
            }
            case WXBottomModal.dataType.analysisType: {
                return this.renderItem(item.item, item.item.title)
            }
            // case CssHotelDropModal.dataType.tableType: {
            //     return this.renderItem(item.item, item.item.tableTypeName)
            // }
            // case CssHotelDropModal.dataType.tablePlace: {
            //     return this.renderItem(item.item, item.item.tablePlaceName)
            // }
            // case CssHotelDropModal.dataType.floor: {
            //     return this.renderItem(item.item, item.item.floorName)
            // }
            // case CssHotelDropModal.dataType.roomType: {
            //     return this.renderItem(item.item, item.item.typeName)
            // }
            // case CssHotelDropModal.dataType.roomState: {
            //     return this.renderRoomState(item.item, item.item.stateName)
            // }
            default: {
                return this.renderDefaultItem(item.item)
            }
        }
    }


    renderItem(item, text) {
        return (
            <TouchableOpacity
                style={CssHotelBottomModalStyles.cellsStyle}
                onPress={() => {
                    this.props.onPress(item)
                }}
            >
                <Text style={this.getTextStyle(item)}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }

    //判断是否item是当前已选中数值
    getTextStyle(item) {
        if (this.props.curItem == item) {
            return CssHotelBottomModalStyles.textSelectedStyle
        }
        return CssHotelBottomModalStyles.textNormalStyle
    }

    //默认样式
    renderDefaultItem(item) {
        return <View><Text>123</Text></View>
    }


    render() {
        return (
            <View style={{
                height: toDipsHeight(600),
                backgroundColor: "#fff"
            }}>
                <FlatList
                    data={this.props.data}
                    renderItem={(item) => {
                        return this.renderItems(item)
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}


let CssHotelBottomModalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cellsStyle: {
        height: toDipsHeight(80),
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    textNormalStyle: {
        color: "#000A5D",
        fontSize: toDips(30)
    },
    textSelectedStyle: {
        color: "#6C6EFF",
        fontSize: toDips(30)
    }
});
