package com.bb8.app.biwei.Main

import android.content.Intent
import android.os.Bundle
import android.support.v4.app.Fragment
import android.support.v7.app.AppCompatActivity
import com.bb8.app.biwei.R


/**
 * Created by fengfeng on 2018/8/29.
 */

open class BaseFragmentActivity : BaseActivity() {
    protected var currentFragment: Fragment? = null

//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        setContentView(R.layout.activity_fragment_base)
//    }

    protected fun setDefaultFragment(fragment: Fragment) {
        // 开启Fragment事务
        val fragmentTransaction = supportFragmentManager.beginTransaction()
        // 使用fragment的布局替代frame_layout的控件并提交事务
        fragmentTransaction.replace(R.id.frame_layout, fragment).commit()
        currentFragment = fragment
    }

    protected fun switchFragment(fragment: Fragment) {
        if (fragment !== currentFragment) {
            if (!fragment.isAdded) {
                supportFragmentManager.beginTransaction().hide(currentFragment)
                        .add(R.id.frame_layout, fragment).commit()
            } else {
                supportFragmentManager.beginTransaction().hide(currentFragment)
                        .show(fragment).commit()
            }
            currentFragment = fragment
        }
    }

    override fun onResume() {
        super.onResume()
        currentFragment?.userVisibleHint = true
    }

    override fun onPause() {
        super.onPause()
        currentFragment?.userVisibleHint = false
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent) {
        super.onActivityResult(requestCode, resultCode, data)
        currentFragment?.onActivityResult(requestCode, resultCode, data)
    }

    override fun onDestroy() {
        super.onDestroy()
    }
}
