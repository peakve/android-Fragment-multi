package com.bb8.app.biwei.Main

import android.os.Bundle
import android.support.v4.app.Fragment
import android.support.v4.widget.SwipeRefreshLayout
import android.support.v7.widget.LinearLayoutManager
import android.support.v7.widget.RecyclerView
import com.bb8.app.biwei.Main.utils.L
import com.bb8.app.biwei.Market.model.GlobalTicket


/**
 * Created by fengfeng on 2018/8/29.
 */


abstract open class FragmentSwipeRefresh<T>()
    : Fragment(), SwipeRefreshLayout.OnRefreshListener {

    var datas:List<GlobalTicket> = ArrayList()
    var page:Int=1
    var size:Int=20
    var rlistAdapter : CommonAdapter<T>? = null

    override  abstract fun onRefresh()

    abstract fun onLoadMore()

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
    }

    fun initReresh(recyclerView:RecyclerView){

        recyclerView.setOnScrollListener(object : RecyclerView.OnScrollListener() {
            var lastVisibleItem: Int? = 0
            override fun onScrollStateChanged(recyclerView: RecyclerView?, newState: Int) {
                super.onScrollStateChanged(recyclerView, newState)
                L.d("lastVisibleItem////"+lastVisibleItem)
                if (newState == RecyclerView.SCROLL_STATE_IDLE && lastVisibleItem!! + 3 >= recyclerView?.adapter?.itemCount ?: 0 ) {
                    onLoadMore()
                }
            }

            override fun onScrolled(recyclerView: RecyclerView?, dx: Int, dy: Int) {
                super.onScrolled(recyclerView, dx, dy)
                val layoutManager = recyclerView?.layoutManager as LinearLayoutManager
                //最后一个可见的ITEM
                lastVisibleItem = layoutManager.findLastVisibleItemPosition()
            }
        })


    }

    private fun isScrollToTop(recyclerView:RecyclerView): Boolean {
        val layoutManager = recyclerView.layoutManager as LinearLayoutManager
        val position = layoutManager.findFirstVisibleItemPosition()
        if (position != 0) {
            return false
        }
        val firstVisiableChildView = layoutManager.findViewByPosition(position)
        return firstVisiableChildView.top == 0
    }

    fun isScrollToBottom(recyclerView:RecyclerView): Boolean {
        return recyclerView.computeVerticalScrollExtent() + recyclerView.computeVerticalScrollOffset() >= recyclerView.computeVerticalScrollRange()
    }




}
