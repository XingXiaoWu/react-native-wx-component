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
 * @创建时间:     2019-06-11 17:39
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React, {Component} from "react"
import {
    Modal,
    TouchableOpacity,
    StyleSheet, ViewPropTypes,
    SafeAreaView
} from "react-native";

import PropsType from "prop-types"

export class WXModal extends Component {
    static defaultProps = {
        style: ViewPropTypes.style
    }

    static props = {
        style: {}
    }

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    componentDidMount() {

    }

    show() {
        this.setState({
            visible: true
        })
    }

    dismiss() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <Modal
                visible={this.state.visible}
                transparent={true}
            >
                {this.props.children}
            </Modal>
        )
    }

}
