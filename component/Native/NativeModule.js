/*************************************************************************************************
 * <pre>
 * @项目名称:   react-native-wx-template
 * @版权所有:   无星 (C) 2019
 *
 *
 * @类描述:
 * @版本:         V2.0.0
 * @作者:         wuxing
 * @邮箱:         329106954@qq.com
 * @创建时间:     2019-04-29 16:17
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import {NativeModules, Platform, ToastAndroid} from "react-native";

let nativeModule = NativeModules.wxComponent

export class Native {

    /**
     * toast
     *
     * @param message
     */
    static showToast(message){
        nativeModule.showToast(message)
    }

    /**
     * loading框
     */
    static showLoading(){
        nativeModule.showLoading()
    }

    /**
     * loading框小时
     */
    static dismissLoading(){
        nativeModule.dismissLoading()
    }
}
