
#import "RNWxComponent.h"
#import "MBProgressHUD.h"
#import "ZHBPopTipView.h"
@interface RNWxComponent()
@property (nonatomic, strong) MBProgressHUD *hud;
@end

@implementation RNWxComponent

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE(wxComponent)


#pragma mark -- loading
//普通loading
RCT_EXPORT_METHOD(showLoading){
    dispatch_async(dispatch_get_main_queue(), ^{
        UIWindow *window = [UIApplication sharedApplication].delegate.window;
        if(self.hud){
            [self.hud hideAnimated:YES];
        }
        self.hud = [MBProgressHUD showHUDAddedTo:window animated:YES];
    });
}
//
RCT_EXPORT_METHOD(dismissLoading){
    dispatch_async(dispatch_get_main_queue(), ^{
        if (self.hud) {
            [self.hud hideAnimated:YES];
        }
    });
}

#pragma mark -- Toast展示
RCT_EXPORT_METHOD(showToast:(NSString*)message){
    dispatch_async(dispatch_get_main_queue(), ^{
        [ZHBPopTipView showText:message position:ZHBPopTipViewPositionCenter duration:2];
    });
}

@end
  
