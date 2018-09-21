package com.bb8.app.biwei.Market.view

import android.content.Intent
import android.os.Bundle
import android.support.design.widget.Snackbar
import android.support.v4.app.Fragment
import android.support.v4.app.FragmentManager
import android.support.v4.app.FragmentPagerAdapter
import android.support.v7.app.AppCompatActivity
import android.support.v7.widget.DefaultItemAnimator
import android.support.v7.widget.LinearLayoutManager
import android.view.*
import com.bb8.app.biwei.App
import com.bb8.app.biwei.Chart.view.HalfPieChartActivity
import com.bb8.app.biwei.Chart.view.LineChartActivity
import com.bb8.app.biwei.Chart.view.PieChartActivity
import com.bb8.app.biwei.Main.CommonAdapter
import com.bb8.app.biwei.Main.api.HttpClient
import com.bb8.app.biwei.Main.api.NetworkScheduler
import com.bb8.app.biwei.Main.api.ObjectResponse
import com.bb8.app.biwei.Main.api.ObserverResponse
import com.bb8.app.biwei.Main.utils.L
import com.bb8.app.biwei.Market.adapter.TicketAdapter
import com.bb8.app.biwei.Market.model.GlobalTicket
import com.bb8.app.biwei.R
import com.bb8.app.biwei.Stock.ui.market.activity.StockDetailActivity
import com.bb8.app.biwei.Stock.ui.market.activity.StockDetailLandActivity
import kotlinx.android.synthetic.main.fragment_home.*
import kotlinx.android.synthetic.main.fragment_home_third_demo.*
import org.jetbrains.anko.intentFor
import org.jetbrains.anko.singleTop
import org.jetbrains.anko.toast
import android.widget.Toast
import com.bb8.app.biwei.Main.common.Global
import com.bb8.app.biwei.MainActivity
import com.bb8.app.biwei.Main.widget.SegmentControlView
import com.bb8.app.biwei.Main.widget.SegmentControlView.dp2px
import org.jetbrains.anko.longToast


/**
 * Created by fengfeng on 2018/8/31.
 */


class HomeFragment : Fragment() {


    private var mSectionsPagerAdapter: SectionsPagerAdapter? = null

    private val mTitles: ArrayList<String> = arrayListOf("自选", "全部","BTC","区块链","世界杯","平台币","挖矿","智能合约")



    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View? {
        val rootView = inflater.inflate(R.layout.fragment_home, container, false)
        return rootView
    }
    override fun onViewCreated(view: View?, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        mSectionsPagerAdapter = SectionsPagerAdapter(childFragmentManager)

        // Set up the ViewPager with the sections adapter.
        container.adapter = mSectionsPagerAdapter

        tabs.setViewPager(container)

//        ( activity as AppCompatActivity).setSupportActionBar(toolbar)


    }

    /**
     * A [FragmentPagerAdapter] that returns a fragment corresponding to
     * one of the sections/tabs/pages.
     */
    inner class SectionsPagerAdapter(fm: FragmentManager) : FragmentPagerAdapter(fm) {

        override fun getItem(position: Int): Fragment {
            // getItem is called to instantiate the fragment for the given page.
            // Return a PlaceholderFragment (defined as a static inner class below).
            return PlaceholderFragment.newInstance(position + 1)
        }

        override fun getPageTitle(position: Int): CharSequence {
            return mTitles[position]
        }


        override fun getCount(): Int {
            // Show 3 total pages.
            return mTitles.size
        }
    }

    /**
     * A placeholder fragment containing a simple view.
     */
    class PlaceholderFragment : Fragment() {


        var datas:List<GlobalTicket> = ArrayList()
        var page:Int=1
        var size:Int=20
        var rlistAdapter : CommonAdapter<GlobalTicket>? = null


        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setHasOptionsMenu(true)
        }

        override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                                  savedInstanceState: Bundle?): View? {
            val rootView = inflater.inflate(R.layout.fragment_home_third_demo, container, false)
//            rootView.section_label.text = getString(R.string.section_format, arguments?.getInt(ARG_SECTION_NUMBER))

            return rootView
        }

        override fun onActivityCreated(savedInstanceState: Bundle?) {
            super.onActivityCreated(savedInstanceState)




            refreshLayout.setOnRefreshListener {

                //
                loadData()
                activity.toast("onrefresh")
                refreshLayout.finishRefresh()
            }

            refreshLayout.setOnLoadMoreListener {
                activity.toast("loadMore")
                loadData()
                refreshLayout.finishLoadMore()
            }

            rv.layoutManager = LinearLayoutManager(activity)
            rv.itemAnimator = DefaultItemAnimator()

            rlistAdapter = TicketAdapter(datas){ it: GlobalTicket ->


                activity.toast("Hello world!")
                //TODO
                startActivity(activity.intentFor<HomeDemoActivity>("name" to "peakfeng", "age" to 13).singleTop())


            }
            rv.adapter = rlistAdapter



            refreshLayout.autoRefresh()
        }

        fun loadData(){

            var httpClient = HttpClient.instance
            //
            var params = HashMap<String,Any>()
            params.put("name","BTC")
            params.put("page", this.page)
            params.put("size", this.size)

            httpClient.getAPIServers().getGlobalTickets(params)
                    .compose(NetworkScheduler.compose())
                    .subscribe( object : ObserverResponse<ObjectResponse<List<GlobalTicket>>>(App.application){

                        override fun failure(statusCode: Int, message: String) {

                        }

                        override fun success(data: ObjectResponse<List<GlobalTicket>>) {

                            L.d(data.toString())
                            if (page > 1) {
                                datas += data.list!!
                            }else {
                                datas = data.list!!
                            }

                            rlistAdapter?.items = datas
                            rlistAdapter?.notifyDataSetChanged()

                            page ++
                        }

                    })

            //1
        }

        companion object {
            /**
             * The fragment argument representing the section number for this
             * fragment.
             */
            private val ARG_SECTION_NUMBER = "section_number"

            /**
             * Returns a new instance of this fragment for the given section
             * number.
             */
            fun newInstance(sectionNumber: Int): PlaceholderFragment {
                val fragment = PlaceholderFragment()
                val args = Bundle()
                args.putInt(ARG_SECTION_NUMBER, sectionNumber)
                fragment.arguments = args
                return fragment
            }
        }
    }

//    override fun onCreateOptionsMenu(menu: Menu?, inflater: MenuInflater?) {
//
//        inflater?.inflate(R.menu.menu_home, menu)
//        super.onCreateOptionsMenu(menu, inflater)
//
//    }
//
//    override fun onOptionsItemSelected(item: MenuItem): Boolean {
//        // Handle action bar item clicks here. The action bar will
//        // automatically handle clicks on the Home/Up button, so long
//        // as you specify a parent activity in AndroidManifest.xml.
//        val id = item.itemId
//
//        if (id == R.id.menu_home_1) {
//            activity.toast("menu_home_1")
//            return true
//        }
//
//        else if (id == R.id.menu_home_2) {
//            activity.toast("menu_home_2")
//            return true
//        }
//
//        else if (id == R.id.menu_home_3) {
//            activity.toast("menu_home_3")
//            this.startActivity(Intent(activity, StockDetailActivity::class.java))
//
//            return true
//        }
//
//        return super.onOptionsItemSelected(item)
//    }

}