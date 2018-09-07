package com.bb8.app.biwei.Stock.ui.market.activity;

import android.os.Bundle;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;

import com.bb8.app.biwei.R;
import com.bb8.app.biwei.Stock.common.adapter.SimpleFragmentPagerAdapter;
import com.bb8.app.biwei.Stock.common.viewpager.NoTouchScrollViewpager;
import com.bb8.app.biwei.Stock.ui.market.fragment.ChartFiveDayFragment;
import com.bb8.app.biwei.Stock.ui.market.fragment.ChartKLineFragment;
import com.bb8.app.biwei.Stock.ui.market.fragment.ChartOneDayFragment;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * 股票详情页
 */
public class StockDetailActivity extends AppCompatActivity {

    @BindView(R.id.tab)
    TabLayout tabLayout;
    @BindView(R.id.view_pager)
    NoTouchScrollViewpager viewPager;
    @BindView(R.id.toolbar)
    Toolbar toolbar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_stock_detail);
        ButterKnife.bind(this);

        toolbar.setTitle("图表");

        Fragment[] fragments = {ChartOneDayFragment.newInstance(false), ChartFiveDayFragment.newInstance(false),
                ChartKLineFragment.newInstance(1, false), ChartKLineFragment.newInstance(7, false),
                ChartKLineFragment.newInstance(30, false)};
        String[] titles = {"分时", "五日", "日K", "周K", "月K"};
        viewPager.setOffscreenPageLimit(fragments.length);
        viewPager.setAdapter(new SimpleFragmentPagerAdapter(getSupportFragmentManager(), fragments, titles));
        tabLayout.setupWithViewPager(viewPager);



    }

}
