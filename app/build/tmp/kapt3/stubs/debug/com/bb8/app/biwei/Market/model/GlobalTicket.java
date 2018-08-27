package com.bb8.app.biwei.Market.model;

import java.lang.System;

/**
 * * Created by fengfeng on 2018/8/24.
 */
@kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\b\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b*\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\u009d\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\t\u0012\u0006\u0010\u000b\u001a\u00020\t\u0012\u0006\u0010\f\u001a\u00020\t\u0012\u0006\u0010\r\u001a\u00020\t\u0012\u0006\u0010\u000e\u001a\u00020\t\u0012\u0006\u0010\u000f\u001a\u00020\t\u0012\u0006\u0010\u0010\u001a\u00020\u0005\u0012\f\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012\u0012\f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012\u0012\f\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012\u0012\f\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012\u00a2\u0006\u0002\u0010\u0017J\t\u0010,\u001a\u00020\u0003H\u00c6\u0003J\t\u0010-\u001a\u00020\tH\u00c6\u0003J\t\u0010.\u001a\u00020\tH\u00c6\u0003J\t\u0010/\u001a\u00020\u0005H\u00c6\u0003J\u000f\u00100\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012H\u00c6\u0003J\u000f\u00101\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012H\u00c6\u0003J\u000f\u00102\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012H\u00c6\u0003J\u000f\u00103\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012H\u00c6\u0003J\t\u00104\u001a\u00020\u0005H\u00c6\u0003J\t\u00105\u001a\u00020\u0005H\u00c6\u0003J\t\u00106\u001a\u00020\u0005H\u00c6\u0003J\t\u00107\u001a\u00020\tH\u00c6\u0003J\t\u00108\u001a\u00020\tH\u00c6\u0003J\t\u00109\u001a\u00020\tH\u00c6\u0003J\t\u0010:\u001a\u00020\tH\u00c6\u0003J\t\u0010;\u001a\u00020\tH\u00c6\u0003J\u00c1\u0001\u0010<\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\b\b\u0002\u0010\b\u001a\u00020\t2\b\b\u0002\u0010\n\u001a\u00020\t2\b\b\u0002\u0010\u000b\u001a\u00020\t2\b\b\u0002\u0010\f\u001a\u00020\t2\b\b\u0002\u0010\r\u001a\u00020\t2\b\b\u0002\u0010\u000e\u001a\u00020\t2\b\b\u0002\u0010\u000f\u001a\u00020\t2\b\b\u0002\u0010\u0010\u001a\u00020\u00052\u000e\b\u0002\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00130\u00122\u000e\b\u0002\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00130\u00122\u000e\b\u0002\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00130\u00122\u000e\b\u0002\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012H\u00c6\u0001J\u0013\u0010=\u001a\u00020>2\b\u0010?\u001a\u0004\u0018\u00010\u0001H\u00d6\u0003J\t\u0010@\u001a\u00020AH\u00d6\u0001J\t\u0010B\u001a\u00020\u0005H\u00d6\u0001R\u0011\u0010\u000e\u001a\u00020\t\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\u0007\u001a\u00020\u0005\u00a2\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0017\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012\u00a2\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u0017\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012\u00a2\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001dR\u0011\u0010\u0006\u001a\u00020\u0005\u00a2\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u001bR\u0017\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012\u00a2\u0006\b\n\u0000\u001a\u0004\b \u0010\u001dR\u0017\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012\u00a2\u0006\b\n\u0000\u001a\u0004\b!\u0010\u001dR\u0011\u0010\n\u001a\u00020\t\u00a2\u0006\b\n\u0000\u001a\u0004\b\"\u0010\u0019R\u0011\u0010\u000b\u001a\u00020\t\u00a2\u0006\b\n\u0000\u001a\u0004\b#\u0010\u0019R\u0011\u0010\f\u001a\u00020\t\u00a2\u0006\b\n\u0000\u001a\u0004\b$\u0010\u0019R\u0011\u0010\u000f\u001a\u00020\t\u00a2\u0006\b\n\u0000\u001a\u0004\b%\u0010\u0019R\u0011\u0010\u0010\u001a\u00020\u0005\u00a2\u0006\b\n\u0000\u001a\u0004\b&\u0010\u001bR\u0011\u0010\b\u001a\u00020\t\u00a2\u0006\b\n\u0000\u001a\u0004\b\'\u0010\u0019R\u0011\u0010\u0004\u001a\u00020\u0005\u00a2\u0006\b\n\u0000\u001a\u0004\b(\u0010\u001bR\u0011\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\b)\u0010*R\u0011\u0010\r\u001a\u00020\t\u00a2\u0006\b\n\u0000\u001a\u0004\b+\u0010\u0019\u00a8\u0006C"}, d2 = {"Lcom/bb8/app/biwei/Market/model/GlobalTicket;", "", "symbol", "Lcom/bb8/app/biwei/Market/model/Symbol;", "shortName", "", "enname", "cnname", "price", "", "increase1440", "increase60", "increaseDay7", "volume1440", "circulationCount", "issueValue", "logo", "hour1", "", "Lcom/bb8/app/biwei/Market/model/PriceTime;", "hour24", "day7", "day30", "(Lcom/bb8/app/biwei/Market/model/Symbol;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;DDDDDDDLjava/lang/String;Ljava/util/List;Ljava/util/List;Ljava/util/List;Ljava/util/List;)V", "getCirculationCount", "()D", "getCnname", "()Ljava/lang/String;", "getDay30", "()Ljava/util/List;", "getDay7", "getEnname", "getHour1", "getHour24", "getIncrease1440", "getIncrease60", "getIncreaseDay7", "getIssueValue", "getLogo", "getPrice", "getShortName", "getSymbol", "()Lcom/bb8/app/biwei/Market/model/Symbol;", "getVolume1440", "component1", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "copy", "equals", "", "other", "hashCode", "", "toString", "app_debug"})
public final class GlobalTicket {
    @org.jetbrains.annotations.NotNull()
    private final com.bb8.app.biwei.Market.model.Symbol symbol = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String shortName = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String enname = null;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String cnname = null;
    private final double price = 0.0;
    private final double increase1440 = 0.0;
    private final double increase60 = 0.0;
    private final double increaseDay7 = 0.0;
    private final double volume1440 = 0.0;
    private final double circulationCount = 0.0;
    private final double issueValue = 0.0;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String logo = null;
    @org.jetbrains.annotations.NotNull()
    private final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> hour1 = null;
    @org.jetbrains.annotations.NotNull()
    private final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> hour24 = null;
    @org.jetbrains.annotations.NotNull()
    private final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> day7 = null;
    @org.jetbrains.annotations.NotNull()
    private final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> day30 = null;
    
    @org.jetbrains.annotations.NotNull()
    public final com.bb8.app.biwei.Market.model.Symbol getSymbol() {
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
    
    public final double getPrice() {
        return 0.0;
    }
    
    public final double getIncrease1440() {
        return 0.0;
    }
    
    public final double getIncrease60() {
        return 0.0;
    }
    
    public final double getIncreaseDay7() {
        return 0.0;
    }
    
    public final double getVolume1440() {
        return 0.0;
    }
    
    public final double getCirculationCount() {
        return 0.0;
    }
    
    public final double getIssueValue() {
        return 0.0;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getLogo() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> getHour1() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> getHour24() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> getDay7() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> getDay30() {
        return null;
    }
    
    public GlobalTicket(@org.jetbrains.annotations.NotNull()
    com.bb8.app.biwei.Market.model.Symbol symbol, @org.jetbrains.annotations.NotNull()
    java.lang.String shortName, @org.jetbrains.annotations.NotNull()
    java.lang.String enname, @org.jetbrains.annotations.NotNull()
    java.lang.String cnname, double price, double increase1440, double increase60, double increaseDay7, double volume1440, double circulationCount, double issueValue, @org.jetbrains.annotations.NotNull()
    java.lang.String logo, @org.jetbrains.annotations.NotNull()
    java.util.List<com.bb8.app.biwei.Market.model.PriceTime> hour1, @org.jetbrains.annotations.NotNull()
    java.util.List<com.bb8.app.biwei.Market.model.PriceTime> hour24, @org.jetbrains.annotations.NotNull()
    java.util.List<com.bb8.app.biwei.Market.model.PriceTime> day7, @org.jetbrains.annotations.NotNull()
    java.util.List<com.bb8.app.biwei.Market.model.PriceTime> day30) {
        super();
    }
    
    @org.jetbrains.annotations.NotNull()
    public final com.bb8.app.biwei.Market.model.Symbol component1() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component2() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component3() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component4() {
        return null;
    }
    
    public final double component5() {
        return 0.0;
    }
    
    public final double component6() {
        return 0.0;
    }
    
    public final double component7() {
        return 0.0;
    }
    
    public final double component8() {
        return 0.0;
    }
    
    public final double component9() {
        return 0.0;
    }
    
    public final double component10() {
        return 0.0;
    }
    
    public final double component11() {
        return 0.0;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component12() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> component13() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> component14() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> component15() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.bb8.app.biwei.Market.model.PriceTime> component16() {
        return null;
    }
    
    /**
     * * Created by fengfeng on 2018/8/24.
     */
    @org.jetbrains.annotations.NotNull()
    public final com.bb8.app.biwei.Market.model.GlobalTicket copy(@org.jetbrains.annotations.NotNull()
    com.bb8.app.biwei.Market.model.Symbol symbol, @org.jetbrains.annotations.NotNull()
    java.lang.String shortName, @org.jetbrains.annotations.NotNull()
    java.lang.String enname, @org.jetbrains.annotations.NotNull()
    java.lang.String cnname, double price, double increase1440, double increase60, double increaseDay7, double volume1440, double circulationCount, double issueValue, @org.jetbrains.annotations.NotNull()
    java.lang.String logo, @org.jetbrains.annotations.NotNull()
    java.util.List<com.bb8.app.biwei.Market.model.PriceTime> hour1, @org.jetbrains.annotations.NotNull()
    java.util.List<com.bb8.app.biwei.Market.model.PriceTime> hour24, @org.jetbrains.annotations.NotNull()
    java.util.List<com.bb8.app.biwei.Market.model.PriceTime> day7, @org.jetbrains.annotations.NotNull()
    java.util.List<com.bb8.app.biwei.Market.model.PriceTime> day30) {
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