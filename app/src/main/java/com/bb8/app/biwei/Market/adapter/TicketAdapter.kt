package com.bb8.app.biwei.Market.adapter

import android.view.View
import android.view.ViewGroup
import com.bb8.app.biwei.Main.CommonAdapter
import com.bb8.app.biwei.Main.utils.inflate
import com.bb8.app.biwei.Market.model.GlobalTicket
import com.bb8.app.biwei.R
import com.bumptech.glide.Glide
import kotlinx.android.synthetic.main.item_view_list_layout.view.*


/**
 * Created by fengfeng on 2018/8/29.
 */


class TicketAdapter(override var items : List<GlobalTicket>, override var itemClickListener: (GlobalTicket)->Unit)
    : CommonAdapter<GlobalTicket>(items,itemClickListener) {

//    private val context: Context,

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CommonAdapter.ViewHolder<GlobalTicket>? = when (viewType) {

        HEADER -> {
            val view = parent.inflate(R.layout.item_view_list_layout)

             ViewHolder(view, itemClickListener)
        }else -> {
            val view = parent.inflate(R.layout.item_view_list_layout)

            ViewHolder(view, itemClickListener)
        }

    }


    class ViewHolder(override val view: View, val itemClickListener: (GlobalTicket) -> Unit)
        : CommonAdapter.ViewHolder<GlobalTicket>(view) {
        override fun bind(news: GlobalTicket) {
            view.textView1.text = news.shortName
            view.textView2.text = "${news.enname}  -- ${news.price} , ${news.volume1440} , ${news.increase1440}"


            Glide.with(view.context).load(news.logo).into(view.imageView)


            view.setOnClickListener {
                itemClickListener(news)
            }
        }
    }
}
