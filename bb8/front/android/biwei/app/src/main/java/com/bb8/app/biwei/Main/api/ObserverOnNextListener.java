package com.bb8.app.biwei.Main.api;

/**
 * Created by fengfeng on 2018/8/13.
 */


public interface ObserverOnNextListener<T> {
    void onNext(T t,Throwable throwable);
}