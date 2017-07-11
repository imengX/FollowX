//
//  ViewController.swift
//  FollowX
//
//  Created by imeng on 5/21/17.
//  Copyright © 2017 imeng. All rights reserved.
//

import UIKit
import WeexSDK

class ViewController: UIViewController {

    var weexView: UIView?
    
    var _instance: WXSDKInstance?
    var instance:WXSDKInstance! {
        get {
            if let aInstance = _instance {
                return aInstance;
            }
            _instance = WXSDKInstance()
            _instance?.viewController = self
            
            let width = self.view.frame.size.width;
            _instance?.frame = CGRect(x:self.view.frame.width-width, y:20, width:width, height:self.view.frame.height - 20);

            weak var weakSelf = self
            
            _instance?.onCreate = {(view: UIView?) -> Void in
                if let aView = view {
                    weakSelf?.weexView?.removeFromSuperview()
                    weakSelf?.weexView = aView
                    weakSelf?.view .addSubview((weakSelf?.weexView)!)
                    UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, weakSelf?.weexView);
                }
            }
            
            _instance?.onFailed = {(error: Error?) -> Void in
            
            }
            
            _instance?.renderFinish = {(view: UIView?) -> Void in
            
            }
            
            return _instance
        }
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.

        let url = Bundle.main.url(forResource: "index", withExtension: "js")
//        instance.render(with: url)
        
        instance.render(with: url, options: ["bundleUrl":url?.absoluteString], data: nil)
        
        
//        [_instance renderWithURL:[NSURL URLWithString:url] options:@{@"bundleUrl":url} data:nil];

        
//        NSURL *url = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"js"]
//        [instance renderWithURL:url options:@{@"bundleUrl":[self.url absoluteString]} data:nil];

    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

