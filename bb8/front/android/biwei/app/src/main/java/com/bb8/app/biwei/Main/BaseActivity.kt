package com.bb8.app.biwei.Main

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
//import butterknife.ButterKnife
//import butterknife.Unbinder
import android.support.annotation.NonNull
import android.view.ViewGroup
import android.support.design.widget.TabLayout
import android.os.Build








/**
 * Created by fengfeng on 2018/8/13.
 */


open class  BaseActivity : AppCompatActivity() {


//    var unbinder: Unbinder? = null;
//
//
//    fun ButterKnifeBind() {
//        unbinder = ButterKnife.bind(this)
//    }
//
//    override fun onDestroy() {
//        super.onDestroy()
//        unbinder?.unbind()
//    }

//    fun <T> bindUntilEvent(event: ActivityLifeCycleEvent): Observable.Transformer<T, T> {
//        return object : Observable.Transformer<T, T>() {
//            fun call(sourceObservable: Observable<T>): Observable<T> {
//                val compareLifecycleObservable = lifecycleSubject.takeFirst(object : Func1<ActivityLifeCycleEvent, Boolean>() {
//                    fun call(activityLifeCycleEvent: ActivityLifeCycleEvent): Boolean? {
//                        return activityLifeCycleEvent.equals(event)
//                    }
//                })
//                return sourceObservable.takeUntil(compareLifecycleObservable)
//            }
//        }
//    }


    fun reduceMarginsInTabs(tabLayout: TabLayout, marginOffset: Int) {
        val tabStrip = tabLayout.getChildAt(0)
        if (tabStrip is ViewGroup) {
            for (i in 0 until tabStrip.childCount) {
                val tabView = tabStrip.getChildAt(i)
                if (tabView.layoutParams is ViewGroup.MarginLayoutParams) {
                    (tabView.layoutParams as ViewGroup.MarginLayoutParams).leftMargin = marginOffset
                    (tabView.layoutParams as ViewGroup.MarginLayoutParams).rightMargin = marginOffset
                }
            }
            tabLayout.requestLayout()
        }
    }


    fun wrapTabIndicatorToTitle(tabLayout: TabLayout, externalMargin: Int, internalMargin: Int) {
        val tabStrip = tabLayout.getChildAt(0)
        if (tabStrip is ViewGroup) {
            val childCount = tabStrip.childCount
            for (i in 0 until childCount) {
                val tabView = tabStrip.getChildAt(i)
                //set minimum width to 0 for instead for small texts, indicator is not wrapped as expected
                tabView.minimumWidth = 0
                // set padding to 0 for wrapping indicator as title
                tabView.setPadding(0, tabView.paddingTop, 0, tabView.paddingBottom)
                // setting custom margin between tabs
                if (tabView.layoutParams is ViewGroup.MarginLayoutParams) {
                    val layoutParams = tabView.layoutParams as ViewGroup.MarginLayoutParams
                    if (i == 0) {
                        // left
                        settingMargin(layoutParams, externalMargin, internalMargin)
                    } else if (i == childCount - 1) {
                        // right
                        settingMargin(layoutParams, internalMargin, externalMargin)
                    } else {
                        // internal
                        settingMargin(layoutParams, internalMargin, internalMargin)
                    }
                }
            }

            tabLayout.requestLayout()
        }
    }

    private fun settingMargin(layoutParams: ViewGroup.MarginLayoutParams, start: Int, end: Int) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            layoutParams.marginStart = start
            layoutParams.marginEnd = end
            layoutParams.leftMargin = start
            layoutParams.rightMargin = end
        } else {
            layoutParams.leftMargin = start
            layoutParams.rightMargin = end
        }
    }

}