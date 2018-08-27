package com.bb8.app.biwei

import android.os.Bundle
import android.util.Log
import com.bb8.app.biwei.Main.BaseActivity
import com.bb8.app.biwei.Main.api.*


import com.bb8.app.biwei.Main.utils.L
import com.bb8.app.biwei.Market.model.Bitcoin
import com.bb8.app.biwei.Market.model.GlobalTicket
import io.reactivex.Observable
import io.reactivex.ObservableEmitter
import io.reactivex.ObservableOnSubscribe
import io.reactivex.Observer

import io.reactivex.disposables.Disposable
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.schedulers.Schedulers
import retrofit2.adapter.rxjava2.Result


class MainActivity : BaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        var httpClient = HttpClient.instance
        //
        var params = HashMap<String,String>()
        params.put("name","BTC")
        httpClient.getAPIServers().getBitcoinInfo(params)
                .compose(NetworkScheduler.compose())
                .subscribe( object : ObserverResponse<ObjectResponse<Bitcoin>>(this){

                    override fun failure(statusCode: Int, message: String) {

                    }

                    override fun success(data: ObjectResponse<Bitcoin>) {

                        L.d(data.toString())
                    }

                })

        //1




        httpClient.request(httpClient.getAPIServers().getGlobalTickets(params),
                ProgressObserver<ObjectResponse<List<GlobalTicket>>>(this,
                        ObserverOnNextListener<ObjectResponse<List<GlobalTicket>>>
                        { respond: ObjectResponse<List<GlobalTicket>>?, throwable: Throwable? ->
                            //                        L.d(respond.data?.desc!!)
                            L.d((respond?.list?.size.toString()))

                            L.d("222222xxxxxxxxffffff")
                            respond?.list?.get(2)?.cnname?.let { L.d(it) }
                        }))

    }

}
