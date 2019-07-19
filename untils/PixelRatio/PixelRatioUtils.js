/*************************************************************************************************
 * <pre>
 * @项目名称:   react-native-wx-template
 * @版权所有:   无星 (C) 2019
 *
 *
 * @类描述:    px转pt的适配
 * @版本:         V2.0.0
 * @作者:         wuxing
 * @邮箱:         329106954@qq.com
 * @创建时间:     14:52
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import {Dimensions, PixelRatio, Platform} from "react-native";
//得到的是pt
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const pix = PixelRatio.get();
//6s的设备像素尺寸
const defaultWidth = 750;
const defaultHeight = 1334;


//换算 字体，尺寸，行距
function toDips(px) {
    return Math.round(px / 2);
}


//fontSize, left, right, width   使用对象
function toDipsWidth(px) {
    return Math.round(px * screenWidth / defaultWidth);

}


//top, bottom, height   使用对象
function toDipsHeight(px) {
    return Math.round(px * screenHeight / defaultHeight);
}

export {
    toDips,
    toDipsWidth,
    toDipsHeight,
    screenHeight,
    screenWidth,
    pix
};