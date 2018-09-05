package com.bb8.app.biwei.Main.wxmodule;

import android.widget.Toast;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

/**
 * Created by pc on 2018/9/5.
 */

public class Module extends WXModule {
    //run ui thread
    @JSMethod(uiThread = true)
    public void printLog(String msg) {
        Toast.makeText(mWXSDKInstance.getContext(),msg, Toast.LENGTH_SHORT).show();
    }

    //run JS thread
    @JSMethod (uiThread = false)
    public void fireEventSyncCall(){
        //implement your module logic here
    }
}
