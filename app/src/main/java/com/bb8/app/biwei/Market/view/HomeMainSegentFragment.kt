package com.bb8.app.biwei.Market.view

import android.content.Intent
import android.os.Bundle
import android.support.v4.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.bb8.app.biwei.Chart.view.HalfPieChartActivity
import com.bb8.app.biwei.Chart.view.LineChartActivity
import com.bb8.app.biwei.Chart.view.PieChartActivity
import com.bb8.app.biwei.Main.BaseFragment
import com.bb8.app.biwei.Main.widget.SegmentControlView
import com.bb8.app.biwei.R
import com.bb8.app.biwei.Stock.ui.market.activity.StockDetailActivity
import kotlinx.android.synthetic.main.fragment_home_seg.*
import org.jetbrains.anko.longToast
import org.jetbrains.anko.toast


/**
 * Created by fengfeng on 2018/9/4.
 */


class HomeMainSegentFragment: BaseFragment() {


    private var fragments:ArrayList<Fragment> = arrayListOf()

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View? {
        val rootView = inflater.inflate(R.layout.fragment_home_seg, container, false)
        return rootView
    }

    override fun onViewCreated(view: View?, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        //menu
        toolbar.inflateMenu(R.menu.menu_home)

        toolbar.setOnMenuItemClickListener {

            val id = it.itemId
            if (id == R.id.menu_home_1) {
                activity.toast("menu_home_1")
            }

            else if (id == R.id.menu_home_2) {
                activity.toast("menu_home_2")
                startActivity(Intent(activity, LineChartActivity::class.java))

            }

            else if (id == R.id.menu_home_3) {
                activity.toast("menu_home_3")
                //StockDetailActivity
                startActivity(Intent(activity, StockDetailActivity::class.java))
            }
            else if (id == R.id.menu_home_4) {
                activity.toast("menu_home_4")
                //StockDetailActivity
                startActivity(Intent(activity, LineChartActivity::class.java))
            }
            else if (id == R.id.menu_home_5) {
                activity.toast("menu_home_5")
                //StockDetailActivity
                startActivity(Intent(activity, PieChartActivity::class.java))
            }
            else if (id == R.id.menu_home_6) {
                activity.toast("menu_home_6")
                //StockDetailActivity
                startActivity(Intent(activity, HalfPieChartActivity::class.java))
            }

            true

        }


//segment
        var  lTitles = arrayOf("币种", "交易对", "交易所")
        segmentControlView.setViewWidthPx(SegmentControlView.dp2px(activity, 80.0f))
        segmentControlView.setViewHeightPx(SegmentControlView.dp2px(activity, 30.0f))
        segmentControlView.initData(lTitles)
        segmentControlView.btnClick(0)
        segmentControlView.setSegmentControlViewViewOnClickListener(SegmentControlView.SegmentControlViewOnClickListener { position ->

            activity.toast(lTitles[position])

            switchFragment(R.id.frame_layout_seg,fragments[position])
        })


        val fragment1 = HomeFragment()
        fragments.add(fragment1)


        val fragment2 = HomeFragment()
        fragments.add(fragment2)


        val fragment3 = HomeFragment()
        fragments.add(fragment3)

        val fragment4 = HomeFragment()
        fragments.add(fragment4)

        setDefaultFragment(R.id.frame_layout_seg,fragment1)

    }

}