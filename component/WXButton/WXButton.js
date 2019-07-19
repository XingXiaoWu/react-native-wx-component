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
 * @创建时间:     2019-06-19 16:13
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import React, {Component} from 'react';
import {
    TouchableOpacity,
    ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

export class WXButton extends Component {

    static propTypes = {
        onPress: PropTypes.func,
        style: ViewPropTypes.style,
        disabled: PropTypes.bool,
        touchType: PropTypes.bool,//true标示去抖,false表示节流
        activeOpacity: PropTypes.number,
    }

    static defaultProps = {
        onPress: () => {
        },
        style: {},
        disabled: false,
        touchType: true,
        activeOpacity: 0.2
    }

    constructor(props) {
        super(props)
        //    新建一个定时器用于去抖节流使用
        this.debounceTimer = null
        //    以下变量用于节流
        //节流等待时长
        this.waitTime = 250
        //    上一次执行的时间
        this.previous = 0

    }

    componentDidMount() {

    }

    render() {
        return (
            <TouchableOpacity
                style={this.props.style}
                disabled={this.props.disabled}
                onPress={() => {
                    if (this.props.touchType) {
                        this.debounce(this.props.onPress)
                    } else {
                        this.throttle(this.props.onPress)
                    }
                }}
                activeOpacity={this.props.activeOpacity}
            >
                {this.props.children}
            </TouchableOpacity>
        );
    }


    // 去抖和节流是不同的，因为节流虽然中间的处理函数被限制了，但是只是减少了频率，而去抖则把中间的处理函数全部过滤掉了，只执行规判定时间内的最后一个事件。


//    添加去抖:在一段时间内只会触发一次
    debounce(callBack) {
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer)
        }
        this.debounceTimer = setTimeout(() => {
            callBack()
        }, 250)
    }

    //节流,判断时间是否达到设置阈值(todo 修bug)
    throttle(callBack) {
        //获取当前毫秒数
        let now = new Date().getMilliseconds();
        //    如果上一次不存在,本次直接执行
        //    如果当前时间已经大于上次时间+等待时间
        if (!this.previous || now >= this.previous + this.waitTime) {
            this.previous = now
        }
        //判断是否相等
        if (this.previous === now) {
            callBack()
        } else {
            //todo,做一些业务需要的自定义操作
            //当前什么都不做
            console.log("节流中...请稍后点击...")
        }
    }

}

