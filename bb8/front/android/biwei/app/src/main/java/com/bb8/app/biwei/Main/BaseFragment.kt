package com.bb8.app.biwei.Main

import android.content.Intent
import android.support.v4.app.Fragment
import com.bb8.app.biwei.R


/**
 * Created by fengfeng on 2018/9/4.
 */


open class  BaseFragment :Fragment(){



    protected var currentFragment: Fragment? = null

//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        setContentView(R.layout.activity_fragment_base)
//    }

    protected fun setDefaultFragment(rid:Int,fragment: Fragment) {
        // 开启Fragment事务
        val fragmentTransaction = childFragmentManager.beginTransaction()
        // 使用fragment的布局替代frame_layout的控件并提交事务
        fragmentTransaction.replace(rid, fragment).commit()
        currentFragment = fragment
    }

    protected fun switchFragment(rid:Int,fragment: Fragment) {
        if (fragment !== currentFragment) {
            if (!fragment.isAdded) {
                childFragmentManager.beginTransaction().hide(currentFragment)
                        .add(rid, fragment).commit()
            } else {
                childFragmentManager.beginTransaction().hide(currentFragment)
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