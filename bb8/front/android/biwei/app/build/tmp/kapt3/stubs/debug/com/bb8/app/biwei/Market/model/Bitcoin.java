package com.bb8.app.biwei.Market.model;

import java.lang.System;

/**
 * * Created by fengfeng on 2018/8/14.
 */
@kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0010\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\bc\b\u0086\b\u0018\u00002\u00020\u0001B\u00d1\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\u0001\u0012\u0006\u0010\n\u001a\u00020\u0001\u0012\u0006\u0010\u000b\u001a\u00020\u0003\u0012\u0006\u0010\f\u001a\u00020\u0003\u0012\u0006\u0010\r\u001a\u00020\u0003\u0012\u0006\u0010\u000e\u001a\u00020\u0003\u0012\u0006\u0010\u000f\u001a\u00020\u0003\u0012\u0006\u0010\u0010\u001a\u00020\u0003\u0012\u0006\u0010\u0011\u001a\u00020\u0003\u0012\u0006\u0010\u0012\u001a\u00020\u0003\u0012\u0006\u0010\u0013\u001a\u00020\u0003\u0012\u0006\u0010\u0014\u001a\u00020\u0015\u0012\u0006\u0010\u0016\u001a\u00020\b\u0012\u0006\u0010\u0017\u001a\u00020\u0018\u0012\u0006\u0010\u0019\u001a\u00020\u0003\u0012\u0006\u0010\u001a\u001a\u00020\u0003\u0012\u0006\u0010\u001b\u001a\u00020\u0003\u0012\u0006\u0010\u001c\u001a\u00020\u0003\u0012\u0006\u0010\u001d\u001a\u00020\u0003\u0012\u0006\u0010\u001e\u001a\u00020\u0003\u0012\u0006\u0010\u001f\u001a\u00020\u0003\u0012\u0006\u0010 \u001a\u00020\u0003\u0012\u0006\u0010!\u001a\u00020\u0003\u0012\u0006\u0010\"\u001a\u00020\u0003\u0012\u0006\u0010#\u001a\u00020\u0003\u0012\u0006\u0010$\u001a\u00020\u0003\u0012\u0006\u0010%\u001a\u00020\b\u0012\u0006\u0010&\u001a\u00020\u0018\u0012\u0006\u0010\'\u001a\u00020\u0018\u0012\f\u0010(\u001a\b\u0012\u0004\u0012\u00020*0)\u0012\f\u0010+\u001a\b\u0012\u0004\u0012\u00020\u00010)\u0012\u0006\u0010,\u001a\u00020-\u0012\u0006\u0010.\u001a\u00020-\u0012\u0006\u0010/\u001a\u00020-\u0012\u0006\u00100\u001a\u00020-\u0012\u0006\u00101\u001a\u00020\b\u00a2\u0006\u0002\u00102J\t\u0010c\u001a\u00020\u0003H\u00c6\u0003J\t\u0010d\u001a\u00020\u0003H\u00c6\u0003J\t\u0010e\u001a\u00020\u0003H\u00c6\u0003J\t\u0010f\u001a\u00020\u0003H\u00c6\u0003J\t\u0010g\u001a\u00020\u0003H\u00c6\u0003J\t\u0010h\u001a\u00020\u0003H\u00c6\u0003J\t\u0010i\u001a\u00020\u0003H\u00c6\u0003J\t\u0010j\u001a\u00020\u0015H\u00c6\u0003J\t\u0010k\u001a\u00020\bH\u00c6\u0003J\t\u0010l\u001a\u00020\u0018H\u00c6\u0003J\t\u0010m\u001a\u00020\u0003H\u00c6\u0003J\t\u0010n\u001a\u00020\u0005H\u00c6\u0003J\t\u0010o\u001a\u00020\u0003H\u00c6\u0003J\t\u0010p\u001a\u00020\u0003H\u00c6\u0003J\t\u0010q\u001a\u00020\u0003H\u00c6\u0003J\t\u0010r\u001a\u00020\u0003H\u00c6\u0003J\t\u0010s\u001a\u00020\u0003H\u00c6\u0003J\t\u0010t\u001a\u00020\u0003H\u00c6\u0003J\t\u0010u\u001a\u00020\u0003H\u00c6\u0003J\t\u0010v\u001a\u00020\u0003H\u00c6\u0003J\t\u0010w\u001a\u00020\u0003H\u00c6\u0003J\t\u0010x\u001a\u00020\u0003H\u00c6\u0003J\t\u0010y\u001a\u00020\u0005H\u00c6\u0003J\t\u0010z\u001a\u00020\u0003H\u00c6\u0003J\t\u0010{\u001a\u00020\bH\u00c6\u0003J\t\u0010|\u001a\u00020\u0018H\u00c6\u0003J\t\u0010}\u001a\u00020\u0018H\u00c6\u0003J\u000f\u0010~\u001a\b\u0012\u0004\u0012\u00020*0)H\u00c6\u0003J\u000f\u0010\u007f\u001a\b\u0012\u0004\u0012\u00020\u00010)H\u00c6\u0003J\n\u0010\u0080\u0001\u001a\u00020-H\u00c6\u0003J\n\u0010\u0081\u0001\u001a\u00020-H\u00c6\u0003J\n\u0010\u0082\u0001\u001a\u00020-H\u00c6\u0003J\n\u0010\u0083\u0001\u001a\u00020-H\u00c6\u0003J\n\u0010\u0084\u0001\u001a\u00020\bH\u00c6\u0003J\n\u0010\u0085\u0001\u001a\u00020\bH\u00c6\u0003J\n\u0010\u0086\u0001\u001a\u00020\u0001H\u00c6\u0003J\n\u0010\u0087\u0001\u001a\u00020\u0001H\u00c6\u0003J\n\u0010\u0088\u0001\u001a\u00020\u0003H\u00c6\u0003J\n\u0010\u0089\u0001\u001a\u00020\u0003H\u00c6\u0003J\n\u0010\u008a\u0001\u001a\u00020\u0003H\u00c6\u0003J\u00a6\u0003\u0010\u008b\u0001\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\u00012\b\b\u0002\u0010\n\u001a\u00020\u00012\b\b\u0002\u0010\u000b\u001a\u00020\u00032\b\b\u0002\u0010\f\u001a\u00020\u00032\b\b\u0002\u0010\r\u001a\u00020\u00032\b\b\u0002\u0010\u000e\u001a\u00020\u00032\b\b\u0002\u0010\u000f\u001a\u00020\u00032\b\b\u0002\u0010\u0010\u001a\u00020\u00032\b\b\u0002\u0010\u0011\u001a\u00020\u00032\b\b\u0002\u0010\u0012\u001a\u00020\u00032\b\b\u0002\u0010\u0013\u001a\u00020\u00032\b\b\u0002\u0010\u0014\u001a\u00020\u00152\b\b\u0002\u0010\u0016\u001a\u00020\b2\b\b\u0002\u0010\u0017\u001a\u00020\u00182\b\b\u0002\u0010\u0019\u001a\u00020\u00032\b\b\u0002\u0010\u001a\u001a\u00020\u00032\b\b\u0002\u0010\u001b\u001a\u00020\u00032\b\b\u0002\u0010\u001c\u001a\u00020\u00032\b\b\u0002\u0010\u001d\u001a\u00020\u00032\b\b\u0002\u0010\u001e\u001a\u00020\u00032\b\b\u0002\u0010\u001f\u001a\u00020\u00032\b\b\u0002\u0010 \u001a\u00020\u00032\b\b\u0002\u0010!\u001a\u00020\u00032\b\b\u0002\u0010\"\u001a\u00020\u00032\b\b\u0002\u0010#\u001a\u00020\u00032\b\b\u0002\u0010$\u001a\u00020\u00032\b\b\u0002\u0010%\u001a\u00020\b2\b\b\u0002\u0010&\u001a\u00020\u00182\b\b\u0002\u0010\'\u001a\u00020\u00182\u000e\b\u0002\u0010(\u001a\b\u0012\u0004\u0012\u00020*0)2\u000e\b\u0002\u0010+\u001a\b\u0012\u0004\u0012\u00020\u00010)2\b\b\u0002\u0010,\u001a\u00020-2\b\b\u0002\u0010.\u001a\u00020-2\b\b\u0002\u0010/\u001a\u00020-2\b\b\u0002\u00100\u001a\u00020-2\b\b\u0002\u00101\u001a\u00020\bH\u00c6\u0001J\u0015\u0010\u008c\u0001\u001a\u00020\b2\t\u0010\u008d\u0001\u001a\u0004\u0018\u00010\u0001H\u00d6\u0003J\n\u0010\u008e\u0001\u001a\u00020\u0018H\u00d6\u0001J\n\u0010\u008f\u0001\u001a\u00020\u0003H\u00d6\u0001R\u0011\u0010 \u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\b3\u00104R\u0011\u0010\u001a\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\b5\u00104R\u0011\u0010\u001f\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\b6\u00104R\u0011\u0010\u0016\u001a\u00020\b\u00a2\u0006\b\n\u0000\u001a\u0004\b7\u00108R\u0011\u0010&\u001a\u00020\u0018\u00a2\u0006\b\n\u0000\u001a\u0004\b9\u0010:R\u0011\u0010,\u001a\u00020-\u00a2\u0006\b\n\u0000\u001a\u0004\b;\u0010<R\u0011\u0010.\u001a\u00020-\u00a2\u0006\b\n\u0000\u001a\u0004\b=\u0010<R\u0011\u0010\u000e\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\b>\u00104R\u0011\u0010\u000b\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\b?\u00104R\u0011\u0010\u0014\u001a\u00020\u0015\u00a2\u0006\b\n\u0000\u001a\u0004\b@\u0010AR\u0017\u0010(\u001a\b\u0012\u0004\u0012\u00020*0)\u00a2\u0006\b\n\u0000\u001a\u0004\bB\u0010CR\u0011\u0010\u0004\u001a\u00020\u0005\u00a2\u0006\b\n\u0000\u001a\u0004\bD\u0010ER\u0011\u0010\t\u001a\u00020\u0001\u00a2\u0006\b\n\u0000\u001a\u0004\bF\u0010GR\u0011\u0010\u0010\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bH\u00104R\u0011\u0010\u0007\u001a\u00020\b\u00a2\u0006\b\n\u0000\u001a\u0004\bI\u00108R\u0011\u0010\r\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bJ\u00104R\u0011\u0010\u001e\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bK\u00104R\u0011\u0010%\u001a\u00020\b\u00a2\u0006\b\n\u0000\u001a\u0004\bL\u00108R\u0011\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bM\u00104R\u0011\u0010/\u001a\u00020-\u00a2\u0006\b\n\u0000\u001a\u0004\bN\u0010<R\u0011\u0010\'\u001a\u00020\u0018\u00a2\u0006\b\n\u0000\u001a\u0004\bO\u0010:R\u0011\u0010\u0013\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bP\u00104R\u0011\u00100\u001a\u00020-\u00a2\u0006\b\n\u0000\u001a\u0004\bQ\u0010<R\u0011\u0010\u000f\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bR\u00104R\u0011\u0010\u0017\u001a\u00020\u0018\u00a2\u0006\b\n\u0000\u001a\u0004\bS\u0010:R\u0011\u00101\u001a\u00020\b\u00a2\u0006\b\n\u0000\u001a\u0004\bT\u00108R\u0011\u0010\"\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bU\u00104R\u0017\u0010+\u001a\b\u0012\u0004\u0012\u00020\u00010)\u00a2\u0006\b\n\u0000\u001a\u0004\bV\u0010CR\u0011\u0010\f\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bW\u00104R\u0011\u0010\u0019\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bX\u00104R\u0011\u0010\u001c\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bY\u00104R\u0011\u0010!\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bZ\u00104R\u0011\u0010\u001d\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\b[\u00104R\u0011\u0010\u0006\u001a\u00020\u0005\u00a2\u0006\b\n\u0000\u001a\u0004\b\\\u0010ER\u0011\u0010\n\u001a\u00020\u0001\u00a2\u0006\b\n\u0000\u001a\u0004\b]\u0010GR\u0011\u0010\u001b\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\b^\u00104R\u0011\u0010#\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\b_\u00104R\u0011\u0010$\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\b`\u00104R\u0011\u0010\u0012\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\ba\u00104R\u0011\u0010\u0011\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\bb\u00104\u00a8\u0006\u0090\u0001"}, d2 = {"Lcom/bb8/app/biwei/Market/model/Bitcoin;", "", "id", "", "ctime", "", "utime", "enable", "", "cuser", "uuser", "coin", "shortName", "enname", "cnname", "logo", "desc", "whitepaperUrl", "whitepaperLink", "issueTime", "coinCategory", "Lcom/bb8/app/biwei/Market/model/CoinCategory;", "canDig", "marketNum", "", "sourceUrl", "blockBrowser", "website", "team", "twitter", "facebook", "blog", "bbs", "telegram", "qq", "wechat", "weibo", "hot", "circNum", "issueNum", "concept", "", "Lcom/bb8/app/biwei/Market/model/Concept;", "recommend", "circulationCount", "", "circulationValue", "issueCount", "issueValue", "newFlag", "(Ljava/lang/String;JJZLjava/lang/Object;Ljava/lang/Object;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/bb8/app/biwei/Market/model/CoinCategory;ZILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ZIILjava/util/List;Ljava/util/List;DDDDZ)V", "getBbs", "()Ljava/lang/String;", "getBlockBrowser", "getBlog", "getCanDig", "()Z", "getCircNum", "()I", "getCirculationCount", "()D", "getCirculationValue", "getCnname", "getCoin", "getCoinCategory", "()Lcom/bb8/app/biwei/Market/model/CoinCategory;", "getConcept", "()Ljava/util/List;", "getCtime", "()J", "getCuser", "()Ljava/lang/Object;", "getDesc", "getEnable", "getEnname", "getFacebook", "getHot", "getId", "getIssueCount", "getIssueNum", "getIssueTime", "getIssueValue", "getLogo", "getMarketNum", "getNewFlag", "getQq", "getRecommend", "getShortName", "getSourceUrl", "getTeam", "getTelegram", "getTwitter", "getUtime", "getUuser", "getWebsite", "getWechat", "getWeibo", "getWhitepaperLink", "getWhitepaperUrl", "component1", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "component2", "component20", "component21", "component22", "component23", "component24", "component25", "component26", "component27", "component28", "component29", "component3", "component30", "component31", "component32", "component33", "component34", "component35", "component36", "component37", "component38", "component39", "component4", "component40", "component5", "component6", "component7", "component8", "component9", "copy", "equals", "other", "hashCode", "toString", "app_debug"})
public final class Bitcoin {
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String id = null;
    private final long ctime = 0L;
    private final long utime = 0L;
    private final boolean enable = false;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.Object cuser = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.Object uuser = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String coin = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String shortName = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String enname = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String cnname = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String logo = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String desc = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String whitepaperUrl = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String whitepaperLink = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String issueTime = null;
    @org.jetbrains.annotations.NotNull()
    private final com.bb8.app.biwei.Market.model.CoinCategory coinCategory = null;
    private final boolean canDig = false;
    private final int marketNum = 0;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String sourceUrl = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String blockBrowser = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String website = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String team = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String twitter = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String facebook = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String blog = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String bbs = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String telegram = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String qq = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String wechat = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String weibo = null;
    private final boolean hot = false;
    private final int circNum = 0;
    private final int issueNum = 0;
    @org.jetbrains.annotations.NotNull()
    private final java.util.List<com.bb8.app.biwei.Market.model.Concept> concept = null;
    @org.jetbrains.annotations.NotNull()
    private final java.util.List<java.lang.Object> recommend = null;
    private final double circulationCount = 0.0;
    private final double circulationValue = 0.0;
    private final double issueCount = 0.0;
    private final double issueValue = 0.0;
    private final boolean newFlag = false;
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getId() {
        return null;
    }
    
    public final long getCtime() {
        return 0L;
    }
    
    public final long getUtime() {
        return 0L;
    }
    
    public final boolean getEnable() {
        return false;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.Object getCuser() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.Object getUuser() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getCoin() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getShortName() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getEnname() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getCnname() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getLogo() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getDesc() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getWhitepaperUrl() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getWhitepaperLink() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getIssueTime() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final com.bb8.app.biwei.Market.model.CoinCategory getCoinCategory() {
        return null;
    }
    
    public final boolean getCanDig() {
        return false;
    }
    
    public final int getMarketNum() {
        return 0;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getSourceUrl() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getBlockBrowser() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getWebsite() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getTeam() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getTwitter() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getFacebook() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getBlog() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getBbs() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getTelegram() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getQq() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getWechat() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getWeibo() {
        return null;
    }
    
    public final boolean getHot() {
        return false;
    }
    
    public final int getCircNum() {
        return 0;
    }
    
    public final int getIssueNum() {
        return 0;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.bb8.app.biwei.Market.model.Concept> getConcept() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<java.lang.Object> getRecommend() {
        return null;
    }
    
    public final double getCirculationCount() {
        return 0.0;
    }
    
    public final double getCirculationValue() {
        return 0.0;
    }
    
    public final double getIssueCount() {
        return 0.0;
    }
    
    public final double getIssueValue() {
        return 0.0;
    }
    
    public final boolean getNewFlag() {
        return false;
    }
    
    public Bitcoin(@org.jetbrains.annotations.NotNull()
    java.lang.String id, long ctime, long utime, boolean enable, @org.jetbrains.annotations.NotNull()
    java.lang.Object cuser, @org.jetbrains.annotations.NotNull()
    java.lang.Object uuser, @org.jetbrains.annotations.NotNull()
    java.lang.String coin, @org.jetbrains.annotations.NotNull()
    java.lang.String shortName, @org.jetbrains.annotations.NotNull()
    java.lang.String enname, @org.jetbrains.annotations.NotNull()
    java.lang.String cnname, @org.jetbrains.annotations.NotNull()
    java.lang.String logo, @org.jetbrains.annotations.NotNull()
    java.lang.String desc, @org.jetbrains.annotations.NotNull()
    java.lang.String whitepaperUrl, @org.jetbrains.annotations.NotNull()
    java.lang.String whitepaperLink, @org.jetbrains.annotations.NotNull()
    java.lang.String issueTime, @org.jetbrains.annotations.NotNull()
    com.bb8.app.biwei.Market.model.CoinCategory coinCategory, boolean canDig, int marketNum, @org.jetbrains.annotations.NotNull()
    java.lang.String sourceUrl, @org.jetbrains.annotations.NotNull()
    java.lang.String blockBrowser, @org.jetbrains.annotations.NotNull()
    java.lang.String website, @org.jetbrains.annotations.NotNull()
    java.lang.String team, @org.jetbrains.annotations.NotNull()
    java.lang.String twitter, @org.jetbrains.annotations.NotNull()
    java.lang.String facebook, @org.jetbrains.annotations.NotNull()
    java.lang.String blog, @org.jetbrains.annotations.NotNull()
    java.lang.String bbs, @org.jetbrains.annotations.NotNull()
    java.lang.String telegram, @org.jetbrains.annotations.NotNull()
    java.lang.String qq, @org.jetbrains.annotations.NotNull()
    java.lang.String wechat, @org.jetbrains.annotations.NotNull()
    java.lang.String weibo, boolean hot, int circNum, int issueNum, @org.jetbrains.annotations.NotNull()
    java.util.List<com.bb8.app.biwei.Market.model.Concept> concept, @org.jetbrains.annotations.NotNull()
    java.util.List<? extends java.lang.Object> recommend, double circulationCount, double circulationValue, double issueCount, double issueValue, boolean newFlag) {
        super();
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component1() {
        return null;
    }
    
    public final long component2() {
        return 0L;
    }
    
    public final long component3() {
        return 0L;
    }
    
    public final boolean component4() {
        return false;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.Object component5() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.Object component6() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component7() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component8() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component9() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component10() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component11() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component12() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component13() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component14() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component15() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final com.bb8.app.biwei.Market.model.CoinCategory component16() {
        return null;
    }
    
    public final boolean component17() {
        return false;
    }
    
    public final int component18() {
        return 0;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component19() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component20() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component21() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component22() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component23() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component24() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component25() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component26() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component27() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component28() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component29() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component30() {
        return null;
    }
    
    public final boolean component31() {
        return false;
    }
    
    public final int component32() {
        return 0;
    }
    
    public final int component33() {
        return 0;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.bb8.app.biwei.Market.model.Concept> component34() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<java.lang.Object> component35() {
        return null;
    }
    
    public final double component36() {
        return 0.0;
    }
    
    public final double component37() {
        return 0.0;
    }
    
    public final double component38() {
        return 0.0;
    }
    
    public final double component39() {
        return 0.0;
    }
    
    public final boolean component40() {
        return false;
    }
    
    /**
     * * Created by fengfeng on 2018/8/14.
     */
    @org.jetbrains.annotations.NotNull()
    public final com.bb8.app.biwei.Market.model.Bitcoin copy(@org.jetbrains.annotations.NotNull()
    java.lang.String id, long ctime, long utime, boolean enable, @org.jetbrains.annotations.NotNull()
    java.lang.Object cuser, @org.jetbrains.annotations.NotNull()
    java.lang.Object uuser, @org.jetbrains.annotations.NotNull()
    java.lang.String coin, @org.jetbrains.annotations.NotNull()
    java.lang.String shortName, @org.jetbrains.annotations.NotNull()
    java.lang.String enname, @org.jetbrains.annotations.NotNull()
    java.lang.String cnname, @org.jetbrains.annotations.NotNull()
    java.lang.String logo, @org.jetbrains.annotations.NotNull()
    java.lang.String desc, @org.jetbrains.annotations.NotNull()
    java.lang.String whitepaperUrl, @org.jetbrains.annotations.NotNull()
    java.lang.String whitepaperLink, @org.jetbrains.annotations.NotNull()
    java.lang.String issueTime, @org.jetbrains.annotations.NotNull()
    com.bb8.app.biwei.Market.model.CoinCategory coinCategory, boolean canDig, int marketNum, @org.jetbrains.annotations.NotNull()
    java.lang.String sourceUrl, @org.jetbrains.annotations.NotNull()
    java.lang.String blockBrowser, @org.jetbrains.annotations.NotNull()
    java.lang.String website, @org.jetbrains.annotations.NotNull()
    java.lang.String team, @org.jetbrains.annotations.NotNull()
    java.lang.String twitter, @org.jetbrains.annotations.NotNull()
    java.lang.String facebook, @org.jetbrains.annotations.NotNull()
    java.lang.String blog, @org.jetbrains.annotations.NotNull()
    java.lang.String bbs, @org.jetbrains.annotations.NotNull()
    java.lang.String telegram, @org.jetbrains.annotations.NotNull()
    java.lang.String qq, @org.jetbrains.annotations.NotNull()
    java.lang.String wechat, @org.jetbrains.annotations.NotNull()
    java.lang.String weibo, boolean hot, int circNum, int issueNum, @org.jetbrains.annotations.NotNull()
    java.util.List<com.bb8.app.biwei.Market.model.Concept> concept, @org.jetbrains.annotations.NotNull()
    java.util.List<? extends java.lang.Object> recommend, double circulationCount, double circulationValue, double issueCount, double issueValue, boolean newFlag) {
        return null;
    }
    
    @java.lang.Override()
    public java.lang.String toString() {
        return null;
    }
    
    @java.lang.Override()
    public int hashCode() {
        return 0;
    }
    
    @java.lang.Override()
    public boolean equals(java.lang.Object p0) {
        return false;
    }
}