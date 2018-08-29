package com.bb8.app.biwei.Market.view

import android.graphics.Color
import android.support.design.widget.Snackbar

import android.support.v4.app.Fragment
import android.support.v4.app.FragmentManager
import android.support.v4.app.FragmentPagerAdapter
import android.os.Bundle
import android.os.Parcel
import android.os.Parcelable
import android.support.design.widget.TabLayout
import android.support.design.widget.TabLayout.Tab
import android.support.v7.widget.LinearLayoutManager
import android.view.LayoutInflater
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.view.ViewGroup
import com.bb8.app.biwei.App
import com.bb8.app.biwei.Main.BaseFragmentActivity
import com.bb8.app.biwei.Main.CommonAdapter
import com.bb8.app.biwei.Main.FragmentSwipeRefresh
import com.bb8.app.biwei.Main.api.HttpClient
import com.bb8.app.biwei.Main.api.NetworkScheduler
import com.bb8.app.biwei.Main.api.ObjectResponse
import com.bb8.app.biwei.Main.api.ObserverResponse
import com.bb8.app.biwei.Main.utils.L
import com.bb8.app.biwei.Market.adapter.TicketAdapter
import com.bb8.app.biwei.Market.model.GlobalTicket

import com.bb8.app.biwei.R
import kotlinx.android.synthetic.main.activity_home_demo.*
import kotlinx.android.synthetic.main.fragment_home_demo.*
import org.jetbrains.anko.toast

class HomeDemoActivity : BaseFragmentActivity()  {


    /**
     * The [android.support.v4.view.PagerAdapter] that will provide
     * fragments for each of the sections. We use a
     * {@link FragmentPagerAdapter} derivative, which will keep every
     * loaded fragment in memory. If this becomes too memory intensive, it
     * may be best to switch to a
     * [android.support.v4.app.FragmentStatePagerAdapter].
     */
    private var mSectionsPagerAdapter: SectionsPagerAdapter? = null

    private val mTitles: ArrayList<String> = arrayListOf("自选", "全部","BTC","区块链","世界杯","平台币","挖矿","智能合约")


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home_demo)

        setSupportActionBar(toolbar)
        // Create the adapter that will return a fragment for each of the three
        // primary sections of the activity.
        mSectionsPagerAdapter = SectionsPagerAdapter(supportFragmentManager)

        // Set up the ViewPager with the sections adapter.
        container.adapter = mSectionsPagerAdapter


        container.addOnPageChangeListener(TabLayout.TabLayoutOnPageChangeListener(tabs))
        tabs.addOnTabSelectedListener(TabLayout.ViewPagerOnTabSelectedListener(container))



        for (tab in mTitles){
            val t = tabs.newTab().setText(tab)

            tabs.addTab(t)
        }

//        reduceMarginsInTabs(tabs,60)

//        wrapTabIndicatorToTitle(tabs,0,20)


        fab.setOnClickListener { view ->
            Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                    .setAction("Action", null).show()
        }

    }


    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.menu_home_demo, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        val id = item.itemId

        if (id == R.id.action_settings) {
            return true
        }

        return super.onOptionsItemSelected(item)
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

        override fun getCount(): Int {
            // Show 3 total pages.
            return mTitles.size
        }
    }


    /**
     * A placeholder fragment containing a simple view.
     */
    class PlaceholderFragment() : FragmentSwipeRefresh<GlobalTicket>() {


//        var datas:List<GlobalTicket> = ArrayList()
//        var page:Int=1
//        var size:Int=20
//        var rlistAdapter : CommonAdapter<GlobalTicket>? = null

        override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                                  savedInstanceState: Bundle?): View? {
            val rootView = inflater.inflate(R.layout.fragment_home_demo, container, false)
//            rootView.section_label.text = getString(R.string.section_format, arguments?.getInt(ARG_SECTION_NUMBER))
            return rootView
        }

        override fun onActivityCreated(savedInstanceState: Bundle?) {
            super.onActivityCreated(savedInstanceState)

            listview.layoutManager = LinearLayoutManager(activity)



            mSwipeRefresh.setColorSchemeColors(Color.rgb(47, 223, 189))
            mSwipeRefresh.setOnRefreshListener(this)

            rlistAdapter = TicketAdapter(datas){ it: GlobalTicket ->

                activity.toast("Hello world!")

            }
            listview.adapter = rlistAdapter

            initReresh(listview)

            mSwipeRefresh.isRefreshing = true
            loadData()

        }
        override fun onRefresh() {

            this.page = 1
            loadData()

        }

        override fun onLoadMore() {
            L.d("onLoadMore")
            loadData()
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
                            mSwipeRefresh.isRefreshing = false
                        }

                        override fun success(data: ObjectResponse<List<GlobalTicket>>) {
                            mSwipeRefresh.isRefreshing = false
                            L.d(data.toString())
                            if (page > 1) {
                                datas += data.list!!
                            }else {
                                datas = data.list!!
                            }

                            rlistAdapter?.items = datas
                            rlistAdapter?.notifyDataSetChanged()
                            mSwipeRefresh.isRefreshing = false
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
}
