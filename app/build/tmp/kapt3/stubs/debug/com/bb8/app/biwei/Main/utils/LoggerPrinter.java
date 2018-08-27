package com.bb8.app.biwei.Main.utils;

import java.lang.System;

/**
 * * Created by fengfeng on 2018/8/13.
 */
@kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\f\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\f\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u00c6\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002J\u0019\u0010\u0017\u001a\u00020\f2\f\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u001a0\u0019\u00a2\u0006\u0002\u0010\u001bR\u0011\u0010\u0003\u001a\u00020\u0004\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006R\u000e\u0010\u0007\u001a\u00020\bX\u0082D\u00a2\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0004X\u0082D\u00a2\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\bX\u0082D\u00a2\u0006\u0002\n\u0000R\u0014\u0010\u000b\u001a\u00020\fX\u0086D\u00a2\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u000f\u001a\u00020\u0004\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0006R\u000e\u0010\u0011\u001a\u00020\bX\u0082D\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\fX\u0082D\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u0004X\u0082D\u00a2\u0006\u0002\n\u0000R\u0011\u0010\u0014\u001a\u00020\u0004\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0006R\u000e\u0010\u0016\u001a\u00020\bX\u0082D\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u001c"}, d2 = {"Lcom/bb8/app/biwei/Main/utils/LoggerPrinter;", "", "()V", "BOTTOM_BORDER", "", "getBOTTOM_BORDER", "()Ljava/lang/String;", "BOTTOM_LEFT_CORNER", "", "DOUBLE_DIVIDER", "HORIZONTAL_DOUBLE_LINE", "JSON_INDENT", "", "getJSON_INDENT", "()I", "MIDDLE_BORDER", "getMIDDLE_BORDER", "MIDDLE_CORNER", "MIN_STACK_OFFSET", "SINGLE_DIVIDER", "TOP_BORDER", "getTOP_BORDER", "TOP_LEFT_CORNER", "getStackOffset", "trace", "", "Ljava/lang/StackTraceElement;", "([Ljava/lang/StackTraceElement;)I", "app_debug"})
public final class LoggerPrinter {
    private static final int MIN_STACK_OFFSET = 3;
    
    /**
     * * Drawing toolbox
     */
    private static final char TOP_LEFT_CORNER = '\u2554';
    private static final char BOTTOM_LEFT_CORNER = '\u255a';
    private static final char MIDDLE_CORNER = '\u255f';
    private static final char HORIZONTAL_DOUBLE_LINE = '\u2551';
    private static final java.lang.String DOUBLE_DIVIDER = "\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550";
    private static final java.lang.String SINGLE_DIVIDER = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500";
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String TOP_BORDER = null;
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String BOTTOM_BORDER = null;
    @org.jetbrains.annotations.NotNull()
    private static final java.lang.String MIDDLE_BORDER = null;
    
    /**
     * * It is used for json pretty print
     */
    private static final int JSON_INDENT = 2;
    public static final com.bb8.app.biwei.Main.utils.LoggerPrinter INSTANCE = null;
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getTOP_BORDER() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getBOTTOM_BORDER() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getMIDDLE_BORDER() {
        return null;
    }
    
    public final int getJSON_INDENT() {
        return 0;
    }
    
    public final int getStackOffset(@org.jetbrains.annotations.NotNull()
    java.lang.StackTraceElement[] trace) {
        return 0;
    }
    
    private LoggerPrinter() {
        super();
    }
}