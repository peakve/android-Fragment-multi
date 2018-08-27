package com.bb8.app.biwei.Main

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import butterknife.ButterKnife
import butterknife.Unbinder
import android.support.annotation.NonNull




/**
 * Created by fengfeng on 2018/8/13.
 */


open class  BaseActivity : AppCompatActivity() {


    var unbinder: Unbinder? = null;


    fun ButterKnifeBind() {
        unbinder = ButterKnife.bind(this)
    }

    override fun onDestroy() {
        super.onDestroy()
        unbinder!!.unbind()
    }

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
}
