package com.bb8.app.biwei.Main.api;

import java.lang.System;

/**
 * * Created by fengfeng on 2018/8/13.
 */
@kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\bf\u0018\u0000 \r2\u00020\u0001:\u0001\rJ:\u0010\u0002\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00050\u00040\u00032$\b\u0001\u0010\u0006\u001a\u001e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b0\u0007j\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b`\tH\'J@\u0010\n\u001a\u0014\u0012\u0010\u0012\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\f0\u000b0\u00040\u00032$\b\u0001\u0010\u0006\u001a\u001e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b0\u0007j\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b`\tH\'\u00a8\u0006\u000e"}, d2 = {"Lcom/bb8/app/biwei/Main/api/ApiServers;", "", "getBitcoinInfo", "Lio/reactivex/Observable;", "Lcom/bb8/app/biwei/Main/api/ObjectResponse;", "Lcom/bb8/app/biwei/Market/model/Bitcoin;", "params", "Ljava/util/HashMap;", "", "Lkotlin/collections/HashMap;", "getGlobalTickets", "", "Lcom/bb8/app/biwei/Market/model/GlobalTicket;", "Companion", "app_debug"})
public abstract interface ApiServers {
    public static final com.bb8.app.biwei.Main.api.ApiServers.Companion Companion = null;
    
    @org.jetbrains.annotations.NotNull()
    @retrofit2.http.POST(value = "api/coin/info")
    public abstract io.reactivex.Observable<com.bb8.app.biwei.Main.api.ObjectResponse<com.bb8.app.biwei.Market.model.Bitcoin>> getBitcoinInfo(@org.jetbrains.annotations.NotNull()
    @retrofit2.http.Body()
    java.util.HashMap<java.lang.String, java.lang.String> params);
    
    @org.jetbrains.annotations.NotNull()
    @retrofit2.http.POST(value = "api/market/query")
    public abstract io.reactivex.Observable<com.bb8.app.biwei.Main.api.ObjectResponse<java.util.List<com.bb8.app.biwei.Market.model.GlobalTicket>>> getGlobalTickets(@org.jetbrains.annotations.NotNull()
    @retrofit2.http.Body()
    java.util.HashMap<java.lang.String, java.lang.String> params);
    
    @kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u0014\u0010\u0003\u001a\u00020\u0004X\u0086D\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006\u00a8\u0006\u0007"}, d2 = {"Lcom/bb8/app/biwei/Main/api/ApiServers$Companion;", "", "()V", "BASE_URL", "", "getBASE_URL", "()Ljava/lang/String;", "app_debug"})
    public static final class Companion {
        @org.jetbrains.annotations.NotNull()
        private static final java.lang.String BASE_URL = "http://www.51bb8.com/web/";
        
        @org.jetbrains.annotations.NotNull()
        public final java.lang.String getBASE_URL() {
            return null;
        }
        
        private Companion() {
            super();
        }
    }
}