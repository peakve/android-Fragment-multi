package com.bb8.app.biwei

import android.app.Application

import com.bb8.app.biwei.Main.adapter.ImageAdapter
import com.taobao.weex.InitConfig
import com.taobao.weex.WXSDKEngine
import android.content.Context
import com.bb8.app.biwei.Main.wxcomponent.RichText
import com.bb8.app.biwei.Main.wxmodule.Module
import com.scwang.smartrefresh.header.MaterialHeader
import com.scwang.smartrefresh.layout.footer.ClassicsFooter
import com.scwang.smartrefresh.layout.api.RefreshLayout
import com.scwang.smartrefresh.layout.api.RefreshFooter
import com.scwang.smartrefresh.layout.api.DefaultRefreshFooterCreator
import com.scwang.smartrefresh.layout.SmartRefreshLayout
import com.scwang.smartrefresh.layout.SmartRefreshLayout.setDefaultRefreshHeaderCreator
import com.scwang.smartrefresh.layout.header.ClassicsHeader
import com.scwang.smartrefresh.layout.api.RefreshHeader
import com.scwang.smartrefresh.layout.api.DefaultRefreshHeaderCreator

/**
 * Created by fengfeng on 2018/8/13.
 */

class  App:Application(){

    companion object {
        @JvmStatic lateinit var application: App
        private  set
    }

    override fun onCreate() {
        super.onCreate()
        application=this
        //初始化weex
        initWeex()
    }


    private fun initWeex() {
        var builder : InitConfig.Builder = InitConfig.Builder()
        builder.setImgAdapter(ImageAdapter())
        var initconfig : InitConfig = builder.build()
        WXSDKEngine.initialize(this,initconfig)
        WXSDKEngine.registerComponent("richText",RichText::class.java)
        WXSDKEngine.registerModule("Module",Module::class.java)
        initLayoutConfig()

    }

    fun initLayoutConfig(){


        //设置全局的Header构建器
        setDefaultRefreshHeaderCreator(object : DefaultRefreshHeaderCreator {
            override fun createRefreshHeader(context: Context, layout: RefreshLayout): RefreshHeader {
                layout.setPrimaryColorsId(R.color.colorPrimary, android.R.color.white)//全局设置主题颜色
                return MaterialHeader(context)//.setTimeFormat(new DynamicTimeFormat("更新于 %s"));//指定为经典Header，默认是 贝塞尔雷达Header
            }
        })
        //设置全局的Footer构建器
        SmartRefreshLayout.setDefaultRefreshFooterCreator(object : DefaultRefreshFooterCreator {
            override fun createRefreshFooter(context: Context, layout: RefreshLayout): RefreshFooter {
                //指定为经典Footer，默认是 BallPulseFooter
                return ClassicsFooter(context).setDrawableSize(20f)
            }
        })
    }
}