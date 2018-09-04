package com.bb8.app.biwei.Market.view

import android.os.Bundle
import android.view.View
import com.bb8.app.biwei.Main.BaseActivity
import com.bb8.app.biwei.R
import com.taobao.weex.IWXRenderListener
import com.taobao.weex.WXSDKInstance
import com.taobao.weex.common.WXRenderStrategy
import com.taobao.weex.utils.WXFileUtils
import kotlinx.android.synthetic.main.activity_weex_demo.*
import java.util.HashMap

class WeexDemoActivity : BaseActivity(),IWXRenderListener{
    lateinit var mWeexInstance : WXSDKInstance

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        //setContentView(R.layout.activity_weex_demo)

        mWeexInstance = WXSDKInstance(this)
        mWeexInstance.registerRenderListener(this)
        //mWeexInstance.render("weexDemo", WXFileUtils.loadAsset("hello.web.js", this),null,null,-1,-1,WXRenderStrategy.APPEND_ASYNC)
        mWeexInstance.render(WXFileUtils.loadAsset("dist/page/flashnews/candy.js", this),null,null)
    }

    override fun onViewCreated(instance: WXSDKInstance?, view: View?) {
        setContentView(view)
    }

    override fun onRefreshSuccess(instance: WXSDKInstance?, width: Int, height: Int) {
    }

    override fun onException(instance: WXSDKInstance?, errCode: String?, msg: String?) {
    }

    override fun onRenderSuccess(instance: WXSDKInstance?, width: Int, height: Int) {
    }

    override fun onResume() {
        super.onResume()
        mWeexInstance.onActivityResume()
    }

    override fun onPause() {
        super.onPause()
        mWeexInstance.onActivityPause()
    }

    override fun onStop() {
        super.onStop()
        mWeexInstance.onActivityStop()
    }

    override fun onDestroy() {
        super.onDestroy()
        mWeexInstance.onActivityDestroy()
    }
}
