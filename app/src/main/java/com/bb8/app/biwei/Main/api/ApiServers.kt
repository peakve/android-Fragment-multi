package com.bb8.app.biwei.Main.api

import com.bb8.app.biwei.Market.model.Bitcoin
import com.bb8.app.biwei.Market.model.GlobalTicket
import io.reactivex.Observable
import retrofit2.http.Body
import retrofit2.http.POST


/**
 * Created by fengfeng on 2018/8/13.
 */

interface  ApiServers {


//    @Headers( "Content-Type: application/json" )
    @POST("api/coin/info")
    fun getBitcoinInfo( @Body params: HashMap<String, String>): Observable<ObjectResponse<Bitcoin>>


    @POST("api/market/query")
    fun getGlobalTickets(@Body params: HashMap<String, String>): Observable<ObjectResponse<List<GlobalTicket>>>



}
