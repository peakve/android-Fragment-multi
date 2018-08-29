package com.bb8.app.biwei.Main

import android.support.v7.widget.RecyclerView
import android.view.View
import com.bb8.app.biwei.Main.utils.T




/**
 * Created by fengfeng on 2018/8/29.
 */


 abstract  class CommonAdapter<T> (open var items : List<T>, open var itemClickListener: (T)->Unit)
    : RecyclerView.Adapter<CommonAdapter.ViewHolder<T>>() {

    //    private val context: Context,
     val HEADER = 0
     val NORMAL = 1
     val FOOTER = 2


//    abstract fun onRefresh(list: List<T>)
//
//    abstract fun onLoadMore(list: List<T>)


    override fun getItemCount(): Int = items.size

    override fun onBindViewHolder(holder: ViewHolder<T>, position: Int) {
        holder.bind(items[position])
    }

    override fun getItemViewType(position: Int): Int = when (position) {
        0 -> {
            HEADER
        }
        itemCount - 1 -> {
            FOOTER
        }
        else -> {
            NORMAL
        }
    }


    abstract  class ViewHolder<T>(open val view: View) : RecyclerView.ViewHolder(view) {
        open fun bind(news: T) {

        }
    }



}