package com.bb8.app.biwei.Stock.ui.market.activity;

import android.os.Bundle;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;

import com.bb8.app.biwei.R;
import com.bb8.app.biwei.Stock.common.adapter.SimpleFragmentPagerAdapter;
import com.bb8.app.biwei.Stock.common.viewpager.NoTouchScrollViewpager;
import com.bb8.app.biwei.Stock.ui.market.fragment.ChartFiveDayFragment;
import com.bb8.app.biwei.Stock.ui.market.fragment.ChartKLineFragment;
import com.bb8.app.biwei.Stock.ui.market.fragment.ChartOneDayFragment;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * 股票详情页-横屏
 */
public class StockDetailLandActivity extends AppCompatActivity {

    @BindView(R.id.tab)
    TabLayout tabLayout;
    @BindView(R.id.view_pager)
    NoTouchScrollViewpager viewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_stock_detail_land);
        ButterKnife.bind(this);

        Fragment[] fragments = {ChartOneDayFragment.newInstance(true), ChartFiveDayFragment.newInstance(true),
                ChartKLineFragment.newInstance(1,true), ChartKLineFragment.newInstance(7,true),
                ChartKLineFragment.newInstance(30,true)};
        String[] titles = {"分时", "五日", "日K", "周K", "月K"};
        viewPager.setOffscreenPageLimit(fragments.length);
        viewPager.setAdapter(new SimpleFragmentPagerAdapter(getSupportFragmentManager(), fragments, titles));
        tabLayout.setupWithViewPager(viewPager);
    }
}
