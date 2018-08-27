package com.bb8.app.biwei

import android.app.Application


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

    }
}