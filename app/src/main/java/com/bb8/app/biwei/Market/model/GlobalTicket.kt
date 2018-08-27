package com.bb8.app.biwei.Market.model


/**
 * Created by fengfeng on 2018/8/24.
 */


data class GlobalTicket(
    val symbol: Symbol,
    val shortName: String,
    val enname: String,
    val cnname: String,
    val price: Double,
    val increase1440: Double,
    val increase60: Double,
    val increaseDay7: Double,
    val volume1440: Double,
    val circulationCount: Double,
    val issueValue: Double,
    val logo: String,
    val hour1: List<PriceTime>,
    val hour24: List<PriceTime>,
    val day7: List<PriceTime>,
    val day30: List<PriceTime>
)


data class Recommend(
    val id: Any,
    val name: String,
    val showname: String,
    val website: String,
    val logo: String,
    val volume1440: Double,
    val volume1440Increase: Any,
    val country: Any
)

data class Symbol(
    val quote: String,
    val coin: String,
    val name: String
)


data class PriceTime(
    val price: Double,
    val time: Int
)

