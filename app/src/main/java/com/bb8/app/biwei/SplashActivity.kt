package com.bb8.app.biwei

import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.support.v4.app.FragmentActivity
import org.jetbrains.anko.startActivity


/**
 * Created by fengfeng on 2018/8/29.
 */


class SplashActivity : FragmentActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)


        Handler(Looper.getMainLooper()).postDelayed({
            startActivity<MainActivity>()
            this.finish()
        }, 3000);
    }

//    private fun initUser() = doAsync {
//        val userID = Request(this@SplashActivity).init()
//        uiThread {
//            uid = userID.user_id
//        }
//    }
}