package com.bb8.app.biwei.Market.model


/**
 * Created by fengfeng on 2018/8/14.
 */


data class Bitcoin(
    val id: String,
    val ctime: Long,
    val utime: Long,
    val enable: Boolean,
    val cuser: Any,
    val uuser: Any,
    val coin: String,
    val shortName: String,
    val enname: String,
    val cnname: String,
    val logo: String,
    val desc: String,
    val whitepaperUrl: String,
    val whitepaperLink: String,
    val issueTime: String,
    val coinCategory: CoinCategory,
    val canDig: Boolean,
    val marketNum: Int,
    val sourceUrl: String,
    val blockBrowser: String,
    val website: String,
    val team: String,
    val twitter: String,
    val facebook: String,
    val blog: String,
    val bbs: String,
    val telegram: String,
    val qq: String,
    val wechat: String,
    val weibo: String,
    val hot: Boolean,
    val circNum: Int,
    val issueNum: Int,
    val concept: List<Concept>,
    val recommend: List<Any>,
    val circulationCount: Double,
    val circulationValue: Double,
    val issueCount: Double,
    val issueValue: Double,
    val newFlag: Boolean
)

data class CoinCategory(
    val key: String,
    val label: String
)

data class Concept(
    val key: String,
    val label: String
)

