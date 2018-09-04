package com.bb8.app.biwei.Main.adapter;

import android.text.TextUtils;
import android.widget.ImageView;
import android.widget.Toast;

import com.bb8.app.biwei.App;
import com.bb8.app.biwei.R;
import com.bumptech.glide.Glide;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

/**
 * Created by pc on 2018/8/30.
 */

public class ImageAdapter implements IWXImgLoaderAdapter {
    public ImageAdapter() {
    }
    @Override
    public void setImage(final String url, final ImageView view, WXImageQuality quality, WXImageStrategy strategy) {
        WXSDKManager.getInstance().postOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (TextUtils.isEmpty(url)) {
                    view.setImageBitmap(null);
                    return;
                }
                String temp = url;
                if (url.startsWith("/assets/")) {
                    String[] split = url.split("/");
                    temp = split[3];
                    Glide.with(WXEnvironment.getApplication())
                            .load(R.mipmap.share)
                            .into(view);
                    Toast.makeText(App.getApplication(),temp,Toast.LENGTH_LONG).show();
                }
                if (url.startsWith("//")) {
                    temp = "http:" + url;
                    Glide.with(WXEnvironment.getApplication())
                            .load(temp)
                            .into(view);
                }
                if (view.getLayoutParams().width <= 0 || view.getLayoutParams().height <= 0) {
                    return;
                }

            }
        },0);
    }
}
