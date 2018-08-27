package com.bb8.app.biwei.Main.utils;

import java.lang.System;

@kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0003\b\u00c6\u0002\u0018\u00002\u00020\u0001:\u0001\u001aB\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002J\u0010\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u0004H\u0007J\u0010\u0010\u000e\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u0004H\u0007J\b\u0010\u000f\u001a\u00020\u0004H\u0002J\u0010\u0010\u0010\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u0004H\u0007J\u0014\u0010\u0011\u001a\u00020\f2\n\u0010\u0012\u001a\u0006\u0012\u0002\b\u00030\u0013H\u0007J\u0010\u0010\u0011\u001a\u00020\f2\u0006\u0010\u0014\u001a\u00020\u0004H\u0007J\u0010\u0010\u0015\u001a\u00020\f2\u0006\u0010\u0015\u001a\u00020\u0004H\u0007J\u0010\u0010\u0016\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u0004H\u0007J\u0012\u0010\u0017\u001a\u00020\u0018*\u00020\u00042\u0006\u0010\r\u001a\u00020\u0004J\u0012\u0010\u0019\u001a\u00020\u0018*\u00020\u00042\u0006\u0010\r\u001a\u00020\u0004R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082\u000e\u00a2\u0006\u0002\n\u0000R\u001a\u0010\u0005\u001a\u00020\u0006X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\n\u00a8\u0006\u001b"}, d2 = {"Lcom/bb8/app/biwei/Main/utils/L;", "", "()V", "TAG", "", "logLevel", "Lcom/bb8/app/biwei/Main/utils/L$LogLevel;", "getLogLevel", "()Lcom/bb8/app/biwei/Main/utils/L$LogLevel;", "setLogLevel", "(Lcom/bb8/app/biwei/Main/utils/L$LogLevel;)V", "d", "", "msg", "e", "getMethodNames", "i", "init", "clazz", "Ljava/lang/Class;", "tag", "json", "w", "isBlank", "", "isNotBlank", "LogLevel", "app_debug"})
public final class L {
    private static java.lang.String TAG;
    @org.jetbrains.annotations.NotNull()
    private static com.bb8.app.biwei.Main.utils.L.LogLevel logLevel;
    public static final com.bb8.app.biwei.Main.utils.L INSTANCE = null;
    
    @org.jetbrains.annotations.NotNull()
    public final com.bb8.app.biwei.Main.utils.L.LogLevel getLogLevel() {
        return null;
    }
    
    public final void setLogLevel(@org.jetbrains.annotations.NotNull()
    com.bb8.app.biwei.Main.utils.L.LogLevel p0) {
    }
    
    public static final void init(@org.jetbrains.annotations.NotNull()
    java.lang.Class<?> clazz) {
    }
    
    /**
     * * 支持用户自己传tag，可扩展性更好
     *     * @param tag
     */
    public static final void init(@org.jetbrains.annotations.NotNull()
    java.lang.String tag) {
    }
    
    public static final void e(@org.jetbrains.annotations.NotNull()
    java.lang.String msg) {
    }
    
    public static final void w(@org.jetbrains.annotations.NotNull()
    java.lang.String msg) {
    }
    
    public static final void i(@org.jetbrains.annotations.NotNull()
    java.lang.String msg) {
    }
    
    public static final void d(@org.jetbrains.annotations.NotNull()
    java.lang.String msg) {
    }
    
    public static final void json(@org.jetbrains.annotations.NotNull()
    java.lang.String json) {
    }
    
    private final java.lang.String getMethodNames() {
        return null;
    }
    
    public final boolean isBlank(@org.jetbrains.annotations.NotNull()
    java.lang.String $receiver, @org.jetbrains.annotations.NotNull()
    java.lang.String msg) {
        return false;
    }
    
    public final boolean isNotBlank(@org.jetbrains.annotations.NotNull()
    java.lang.String $receiver, @org.jetbrains.annotations.NotNull()
    java.lang.String msg) {
        return false;
    }
    
    private L() {
        super();
    }
    
    @kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0007\b\u0086\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u0012\u0010\u0003\u001a\u00020\u0004X\u00a6\u0004\u00a2\u0006\u0006\u001a\u0004\b\u0005\u0010\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\n\u00a8\u0006\u000b"}, d2 = {"Lcom/bb8/app/biwei/Main/utils/L$LogLevel;", "", "(Ljava/lang/String;I)V", "value", "", "getValue", "()I", "ERROR", "WARN", "INFO", "DEBUG", "app_debug"})
    public static enum LogLevel {
        /*public static final*/ ERROR /* = new @kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\b\u00c6\u0001\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u0014\u0010\u0003\u001a\u00020\u00048VX\u0096\u0004\u00a2\u0006\u0006\u001a\u0004\b\u0005\u0010\u0006\u00a8\u0006\u0007"}, d2 = {"Lcom/bb8/app/biwei/Main/utils/L$LogLevel$ERROR;", "Lcom/bb8/app/biwei/Main/utils/L$LogLevel;", "(Ljava/lang/String;I)V", "value", "", "getValue", "()I", "app_debug"}) ERROR(){
            
            @java.lang.Override()
            public int getValue() {
                return 0;
            }
            
            ERROR() {
                super();
            }
        } */,
        /*public static final*/ WARN /* = new @kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\b\u00c6\u0001\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u0014\u0010\u0003\u001a\u00020\u00048VX\u0096\u0004\u00a2\u0006\u0006\u001a\u0004\b\u0005\u0010\u0006\u00a8\u0006\u0007"}, d2 = {"Lcom/bb8/app/biwei/Main/utils/L$LogLevel$WARN;", "Lcom/bb8/app/biwei/Main/utils/L$LogLevel;", "(Ljava/lang/String;I)V", "value", "", "getValue", "()I", "app_debug"}) WARN(){
            
            @java.lang.Override()
            public int getValue() {
                return 0;
            }
            
            WARN() {
                super();
            }
        } */,
        /*public static final*/ INFO /* = new @kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\b\u00c6\u0001\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u0014\u0010\u0003\u001a\u00020\u00048VX\u0096\u0004\u00a2\u0006\u0006\u001a\u0004\b\u0005\u0010\u0006\u00a8\u0006\u0007"}, d2 = {"Lcom/bb8/app/biwei/Main/utils/L$LogLevel$INFO;", "Lcom/bb8/app/biwei/Main/utils/L$LogLevel;", "(Ljava/lang/String;I)V", "value", "", "getValue", "()I", "app_debug"}) INFO(){
            
            @java.lang.Override()
            public int getValue() {
                return 0;
            }
            
            INFO() {
                super();
            }
        } */,
        /*public static final*/ DEBUG /* = new @kotlin.Metadata(mv = {1, 1, 10}, bv = {1, 0, 2}, k = 1, d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\b\u00c6\u0001\u0018\u00002\u00020\u0001B\u0007\b\u0002\u00a2\u0006\u0002\u0010\u0002R\u0014\u0010\u0003\u001a\u00020\u00048VX\u0096\u0004\u00a2\u0006\u0006\u001a\u0004\b\u0005\u0010\u0006\u00a8\u0006\u0007"}, d2 = {"Lcom/bb8/app/biwei/Main/utils/L$LogLevel$DEBUG;", "Lcom/bb8/app/biwei/Main/utils/L$LogLevel;", "(Ljava/lang/String;I)V", "value", "", "getValue", "()I", "app_debug"}) DEBUG(){
            
            @java.lang.Override()
            public int getValue() {
                return 0;
            }
            
            DEBUG() {
                super();
            }
        } */;
        
        public abstract int getValue();
        
        LogLevel() {
        }
    }
}