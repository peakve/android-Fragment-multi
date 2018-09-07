package com.bb8.app.biwei

import android.os.Bundle
import android.support.design.widget.BottomNavigationView
import android.support.v4.app.Fragment
import android.support.v7.app.AppCompatActivity
import android.view.View
import android.view.Window
import com.bb8.app.biwei.Main.BaseActivity
import com.bb8.app.biwei.Main.BaseFragmentActivity
import com.bb8.app.biwei.Main.utils.BottomNavigationViewHelper
import com.bb8.app.biwei.Market.view.HomeFragment
import com.bb8.app.biwei.Market.view.HomeMainSegentFragment
import kotlinx.android.synthetic.main.activity_home.*

class HomeActivity : BaseFragmentActivity() {


    private var fragments:ArrayList<Fragment> = arrayListOf()

    private val mOnNavigationItemSelectedListener = BottomNavigationView.OnNavigationItemSelectedListener { item ->
        when (item.itemId) {
            R.id.home_tab_1 -> {

                switchFragment(fragments.get(0))
//                setDefaultFragment(fragments.get(0))


                return@OnNavigationItemSelectedListener true
            }
            R.id.home_tab_2 -> {

                switchFragment(fragments.get(1))
//                setDefaultFragment(fragments.get(1))

                return@OnNavigationItemSelectedListener true
            }
            R.id.home_tab_3 -> {

                switchFragment(fragments.get(2))
//                setDefaultFragment(fragments.get(2))

                return@OnNavigationItemSelectedListener true
            }
            R.id.home_tab_4 -> {

                switchFragment(fragments.get(3))
//                setDefaultFragment(fragments.get(3))

                return@OnNavigationItemSelectedListener true
            }
            R.id.home_tab_5 -> {

                switchFragment(fragments.get(4))
//                setDefaultFragment(fragments.get(4))

                return@OnNavigationItemSelectedListener true
            }
        }
        false
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
//        requestWindowFeature(Window.FEATURE_NO_TITLE);
//
//        var options = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
//        getWindow().getDecorView().setSystemUiVisibility( options )
        setContentView(R.layout.activity_home)

        supportInvalidateOptionsMenu()


//        val fragment1 = HomeFragment()
//        fragments.add(fragment1)
//
//
//        val fragment2 = HomeFragment()
//        fragments.add(fragment2)
//
//
//        val fragment3 = HomeFragment()
//        fragments.add(fragment3)
//
//        val fragment4 = HomeFragment()
//        fragments.add(fragment4)
//
//        val fragment5 = HomeFragment()
//        fragments.add(fragment5)


        val fragment1 = HomeMainSegentFragment()
        fragments.add(fragment1)


        val fragment2 = HomeMainSegentFragment()
        fragments.add(fragment2)


        val fragment3 = HomeMainSegentFragment()
        fragments.add(fragment3)

        val fragment4 = HomeMainSegentFragment()
        fragments.add(fragment4)

        val fragment5 = HomeMainSegentFragment()
        fragments.add(fragment5)


        setDefaultFragment(fragment3)

        navigation.setSelectedItemId(navigation.getMenu().getItem(2).getItemId());
        BottomNavigationViewHelper.disableShiftMode(navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener)

    }
}
