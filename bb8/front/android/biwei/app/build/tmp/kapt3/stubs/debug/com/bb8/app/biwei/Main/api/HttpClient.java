package com.bb8.app.biwei.Main.api;

import java.lang.System;

/**
 * * Created by fengfeng on 2018/8/13.
 */
@kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 \u00172\u00020\u0001:\u0001\u0017B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002J\u0012\u0010\t\u001a\u00020\n2\b\u0010\u000b\u001a\u0004\u0018\u00010\fH\u0002J\u0006\u0010\r\u001a\u00020\u000eJ\u0006\u0010\u000f\u001a\u00020\u0006J&\u0010\u000b\u001a\b\u0012\u0004\u0012\u0002H\u00110\u0010\"\u0004\b\u0000\u0010\u00112\u0012\u0010\u0012\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00110\u00130\u0010J4\u0010\u000b\u001a\u00020\u0014\"\u0004\b\u0000\u0010\u00112\u0012\u0010\u0012\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00110\u00130\u00102\u0012\u0010\u0015\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00110\u00130\u0016R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082D\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0006X\u0082\u000e\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082\u000e\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0018"}, d2 = {"Lcom/bb8/app/biwei/Main/api/HttpClient;", "", "()V", "SEFAILT_TIMEOUT", "", "apiServers", "Lcom/bb8/app/biwei/Main/api/ApiServers;", "retrofit", "Lretrofit2/Retrofit;", "bodyToString", "", "request", "Lokhttp3/RequestBody;", "genericClient", "Lokhttp3/OkHttpClient;", "getAPIServers", "Lio/reactivex/Observable;", "T", "observable", "Lcom/bb8/app/biwei/Main/api/ObjectResponse;", "", "observer", "Lio/reactivex/Observer;", "Companion", "app_debug"})
public final class HttpClient {
    private final long SEFAILT_TIMEOUT = 20L;
    private retrofit2.Retrofit retrofit;
    private com.bb8.app.biwei.Main.api.ApiServers apiServers;
    @org.jetbrains.annotations.NotNull()
    private static final com.bb8.app.biwei.Main.api.HttpClient instance = null;
    public static final com.bb8.app.biwei.Main.api.HttpClient.Companion Companion = null;
    
    @org.jetbrains.annotations.NotNull()
    public final com.bb8.app.biwei.Main.api.ApiServers getAPIServers() {
        return null;
    }
    
    public final <T extends java.lang.Object>void request(@org.jetbrains.annotations.NotNull()
    io.reactivex.Observable<com.bb8.app.biwei.Main.api.ObjectResponse<T>> observable, @org.jetbrains.annotations.NotNull()
    io.reactivex.Observer<com.bb8.app.biwei.Main.api.ObjectResponse<T>> observer) {
    }
    
    @org.jetbrains.annotations.NotNull()
    public final <T extends java.lang.Object>io.reactivex.Observable<T> request(@org.jetbrains.annotations.NotNull()
    io.reactivex.Observable<com.bb8.app.biwei.Main.api.ObjectResponse<T>> observable) {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final okhttp3.OkHttpClient genericClient() {
        return null;
    }
    
    private final java.lang.String bodyToString(okhttp3.RequestBody request) {
        return null;
    }
    
    private HttpClient() {
        super();
    }
    
    @kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u0011\u0010\u0003\u001a\u00020\u0004\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006\u00a8\u0006\u0007"}, d2 = {"Lcom/bb8/app/biwei/Main/api/HttpClient$Companion;", "", "()V", "instance", "Lcom/bb8/app/biwei/Main/api/HttpClient;", "getInstance", "()Lcom/bb8/app/biwei/Main/api/HttpClient;", "app_debug"})
    public static final class Companion {
        
        @org.jetbrains.annotations.NotNull()
        public final com.bb8.app.biwei.Main.api.HttpClient getInstance() {
            return null;
        }
        
        private Companion() {
            super();
        }
    }
}