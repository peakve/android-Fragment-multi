package com.github.mikephil.charting.stockChart.view;

import android.content.Context;
import android.os.Handler;
import android.os.Message;
import android.support.annotation.Nullable;
import android.support.v4.content.ContextCompat;
import android.util.AttributeSet;
import android.view.LayoutInflater;

import com.github.mikephil.charting.R;
import com.github.mikephil.charting.charts.Chart;
import com.github.mikephil.charting.components.AxisBase;
import com.github.mikephil.charting.components.Legend;
import com.github.mikephil.charting.components.XAxis;
import com.github.mikephil.charting.components.YAxis;
import com.github.mikephil.charting.data.BarData;
import com.github.mikephil.charting.data.BarDataSet;
import com.github.mikephil.charting.data.BarEntry;
import com.github.mikephil.charting.data.CandleData;
import com.github.mikephil.charting.data.CandleDataSet;
import com.github.mikephil.charting.data.CandleEntry;
import com.github.mikephil.charting.data.CombinedData;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.LineData;
import com.github.mikephil.charting.formatter.IAxisValueFormatter;
import com.github.mikephil.charting.formatter.VolFormatter;
import com.github.mikephil.charting.highlight.Highlight;
import com.github.mikephil.charting.listener.OnChartValueSelectedListener;
import com.github.mikephil.charting.stockChart.BarBottomMarkerView;
import com.github.mikephil.charting.stockChart.CandleCombinedChart;
import com.github.mikephil.charting.stockChart.CoupleChartGestureListener;
import com.github.mikephil.charting.stockChart.KRightMarkerView;
import com.github.mikephil.charting.stockChart.LeftMarkerView;
import com.github.mikephil.charting.stockChart.MyCombinedChart;
import com.github.mikephil.charting.stockChart.data.KLineDataManage;
import com.github.mikephil.charting.stockChart.enums.TimeType;
import com.github.mikephil.charting.utils.CommonUtil;
import com.github.mikephil.charting.utils.NumberUtils;
import com.github.mikephil.charting.utils.Utils;
import com.github.mikephil.charting.utils.ViewPortHandler;

import java.util.ArrayList;

/**
 * K线view
 */
public class KLineView extends BaseView {

    private Context mContext;
    private CandleCombinedChart candleChart;
    private MyCombinedChart barChart;

    private XAxis xAxisBar, xAxisK;
    private YAxis axisLeftBar, axisLeftK;
    private YAxis axisRightBar, axisRightK;

    private KLineDataManage kLineData;

    private boolean isFirst = true;//是否是第一次加载数据
    private int zbColor[];

    public Handler handler = new Handler() {
        @Override
        public void handleMessage(Message msg) {

            candleChart.setAutoScaleMinMaxEnabled(true);
            barChart.setAutoScaleMinMaxEnabled(true);
            candleChart.notifyDataSetChanged();
            barChart.notifyDataSetChanged();
            candleChart.invalidate();
            barChart.animateY(1000);
        }
    };

    public KLineView(Context context) {
        this(context, null);
    }

    public KLineView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        mContext = context;
        LayoutInflater.from(context).inflate(R.layout.view_kline, this);
        candleChart = (CandleCombinedChart) findViewById(R.id.candleChart);
        barChart = (MyCombinedChart) findViewById(R.id.barchart);

        zbColor = new int[]{ContextCompat.getColor(context, R.color.ma5), ContextCompat.getColor(context, R.color.ma10), ContextCompat.getColor(context, R.color.ma20)};
    }

    /**
     * 初始化图表数据
     */
    public void initChart(boolean landscape) {
        this.landscape = landscape;
        //蜡烛图
        candleChart.setDrawBorders(true);
        candleChart.setBorderWidth(0.7f);
        candleChart.setBorderColor(ContextCompat.getColor(mContext, R.color.border_color));
        candleChart.setDragEnabled(true);
        candleChart.setScaleYEnabled(false);
        candleChart.setHardwareAccelerationEnabled(true);
        Legend mChartKlineLegend = candleChart.getLegend();
        mChartKlineLegend.setEnabled(false);
        candleChart.setDragDecelerationEnabled(true);
        candleChart.setDragDecelerationFrictionCoef(0.6f);//0.92持续滚动时的速度快慢，[0,1) 0代表立即停止。
        candleChart.setDoubleTapToZoomEnabled(true);
        candleChart.setNoDataText(getResources().getString(R.string.loading));

        //副图
        barChart.setDrawBorders(true);
        barChart.setBorderWidth(0.7f);
        barChart.setBorderColor(ContextCompat.getColor(mContext, R.color.border_color));
        barChart.setDragEnabled(true);
        barChart.setScaleYEnabled(false);
        barChart.setHardwareAccelerationEnabled(true);
        Legend mChartChartsLegend = barChart.getLegend();
        mChartChartsLegend.setEnabled(false);
        barChart.setDragDecelerationEnabled(true);
        barChart.setDragDecelerationFrictionCoef(0.6f);//设置太快，切换滑动源滑动不同步
        barChart.setDoubleTapToZoomEnabled(true);
        barChart.setNoDataText(getResources().getString(R.string.loading));

        //蜡烛图X轴
        xAxisK = candleChart.getXAxis();
        xAxisK.setDrawLabels(false);
        xAxisK.setLabelCount(landscape ? 5 : 4, true);
        xAxisK.setDrawGridLines(true);
        xAxisK.setDrawAxisLine(false);
        xAxisK.setGridLineWidth(0.7f);
        xAxisK.setGridColor(ContextCompat.getColor(mContext, R.color.grid_color));
        xAxisK.setTextColor(ContextCompat.getColor(mContext, R.color.label_text));
        xAxisK.setPosition(XAxis.XAxisPosition.BOTTOM);
        xAxisK.setAvoidFirstLastClipping(true);
        xAxisK.setDrawLimitLinesBehindData(true);

        //蜡烛图左Y轴
        axisLeftK = candleChart.getAxisLeft();
        axisLeftK.setDrawGridLines(true);
        axisLeftK.setDrawAxisLine(false);
        axisLeftK.setDrawLabels(true);
        axisLeftK.setLabelCount(5, true);
        axisLeftK.enableGridDashedLine(CommonUtil.dip2px(mContext, 4), CommonUtil.dip2px(mContext, 3), 0);
        axisLeftK.setTextColor(ContextCompat.getColor(mContext, R.color.label_text));
        axisLeftK.setGridColor(ContextCompat.getColor(mContext, R.color.grid_color));
        axisLeftK.setGridLineWidth(0.7f);
        axisLeftK.setValueLineInside(true);
        axisLeftK.setDrawTopBottomGridLine(false);
        axisLeftK.setPosition(landscape ? YAxis.YAxisLabelPosition.OUTSIDE_CHART : YAxis.YAxisLabelPosition.INSIDE_CHART);
        axisLeftK.setValueFormatter(new IAxisValueFormatter() {
            @Override
            public String getFormattedValue(float value, AxisBase axis) {
                return NumberUtils.keepPrecisionR(value, precision);
            }
        });

        //蜡烛图右Y轴
        axisRightK = candleChart.getAxisRight();
        axisRightK.setDrawLabels(false);
        axisRightK.setDrawGridLines(false);
        axisRightK.setDrawAxisLine(false);
        axisRightK.setPosition(YAxis.YAxisLabelPosition.INSIDE_CHART);

        //副图X轴
        xAxisBar = barChart.getXAxis();
        xAxisBar.setDrawGridLines(true);
        xAxisBar.setDrawAxisLine(false);
        xAxisBar.setDrawLabels(true);
        xAxisBar.setLabelCount(landscape ? 5 : 4, true);
        xAxisBar.setTextColor(ContextCompat.getColor(mContext, R.color.label_text));
        xAxisBar.setPosition(XAxis.XAxisPosition.BOTTOM);
        xAxisBar.setGridColor(ContextCompat.getColor(mContext, R.color.grid_color));
        xAxisBar.setGridLineWidth(0.7f);
        xAxisBar.setAvoidFirstLastClipping(true);
        xAxisBar.setDrawLimitLinesBehindData(true);

        //副图左Y轴
        axisLeftBar = barChart.getAxisLeft();
        axisLeftBar.setAxisMinimum(0);
        axisLeftBar.setDrawGridLines(false);
        axisLeftBar.setDrawAxisLine(false);
        axisLeftBar.setTextColor(ContextCompat.getColor(mContext, R.color.label_text));
        axisLeftBar.setDrawLabels(true);
        axisLeftBar.setLabelCount(2, true);
        axisLeftBar.setValueLineInside(true);
        axisLeftBar.setPosition(landscape ? YAxis.YAxisLabelPosition.OUTSIDE_CHART : YAxis.YAxisLabelPosition.INSIDE_CHART);

        //副图右Y轴
        axisRightBar = barChart.getAxisRight();
        axisRightBar.setDrawLabels(false);
        axisRightBar.setDrawGridLines(false);
        axisRightBar.setDrawAxisLine(false);

        //手势联动监听
        gestureListenerCandle = new CoupleChartGestureListener(candleChart, new Chart[]{barChart});
        gestureListenerBar = new CoupleChartGestureListener(barChart, new Chart[]{candleChart});
        candleChart.setOnChartGestureListener(gestureListenerCandle);
        barChart.setOnChartGestureListener(gestureListenerBar);

        candleChart.setOnChartValueSelectedListener(new OnChartValueSelectedListener() {
            @Override
            public void onValueSelected(Entry e, Highlight h) {
                candleChart.highlightValue(h);
                if (barChart.getData().getBarData().getDataSets().size() != 0) {
                    Highlight highlight = new Highlight(h.getX(), h.getDataSetIndex(), h.getStackIndex());
                    highlight.setDataIndex(h.getDataIndex());
                    barChart.highlightValues(new Highlight[]{highlight});
                } else {
                    Highlight highlight = new Highlight(h.getX(), 2, h.getStackIndex());
                    highlight.setDataIndex(0);
                    barChart.highlightValues(new Highlight[]{highlight});
                }
                updateText(e.getXIndex(), true);
            }

            @Override
            public void onNothingSelected() {
                barChart.highlightValues(null);
                updateText(kLineData.getKLineDatas().size() - 1, false);
            }
        });
        barChart.setOnChartValueSelectedListener(new OnChartValueSelectedListener() {

            @Override
            public void onValueSelected(Entry e, Highlight h) {
                barChart.highlightValue(h);
                Highlight highlight = new Highlight(h.getX(), 0, h.getStackIndex());
                highlight.setDataIndex(1);
                candleChart.highlightValues(new Highlight[]{highlight});

                updateText(e.getXIndex(), true);
            }

            @Override
            public void onNothingSelected() {
                candleChart.highlightValues(null);
                updateText(kLineData.getKLineDatas().size() - 1, false);
            }
        });


    }

    /**
     * 设置K线数据
     */
    public void setDataToChart(KLineDataManage data) {
        kLineData = data;
        if (kLineData.getKLineDatas().size() == 0) {
            candleChart.setNoDataText(getResources().getString(R.string.no_data));
            barChart.setNoDataText(getResources().getString(R.string.no_data));
            return;
        }
        axisLeftBar.setValueFormatter(new VolFormatter(mContext, data.getAssetId()));

        if (data.getAssetId().endsWith(".HK") && !data.getAssetId().contains("IDX")) {
            setPrecision(3);
        } else {
            setPrecision(2);
        }

        CombinedData candleChartData;
        CombinedData barChartData;
        CandleDataSet candleDataSet = null;
        /*************************************蜡烛图数据*****************************************************/
        candleDataSet = kLineData.getCandleDataSet();
        candleDataSet.setPrecision(precision);
        candleChartData = new CombinedData();
        candleChartData.setData(new CandleData(candleDataSet));
        candleChartData.setData(new LineData(kLineData.getLineDataMA()));
        candleChart.setData(candleChartData);
        /*************************************成交量数据*****************************************************/
        barChartData = new CombinedData();
        barChartData.setData(new BarData(kLineData.getVolumeDataSet()));
        barChartData.setData(new LineData());
        barChartData.setData(new CandleData());
        //重新请求数据时保持副图指标还是显示原来的指标
        if (chartType1 == 1) {
            barChart.setData(barChartData);
        }

        if (isFirst) {
            barChart.getXAxis().setValueFormatter(new IAxisValueFormatter() {
                @Override
                public String getFormattedValue(float value, AxisBase axis) {
                    int index = (int) (value - kLineData.getOffSet());
                    if (index < 0 || index >= kLineData.getxVals().size()) {
                        return "";
                    } else {
                        return kLineData.getxVals().get(index);
                    }
                }
            });

            //设置图表边距
            float left_right = 0;
            if (landscape) {
                float volwidth = Utils.calcTextWidth(mPaint, "###0.00");
                float pricewidth = Utils.calcTextWidth(mPaint, NumberUtils.keepPrecision(data.getPreClosePrice() + "", precision) + "#");
                left_right = CommonUtil.dip2px(mContext, pricewidth > volwidth ? pricewidth : volwidth);
                candleChart.setViewPortOffsets(left_right, CommonUtil.dip2px(mContext, 15), CommonUtil.dip2px(mContext, 5), 0);
                barChart.setViewPortOffsets(left_right, CommonUtil.dip2px(mContext, 15), CommonUtil.dip2px(mContext, 5), CommonUtil.dip2px(mContext, 16));
            } else {
                left_right = CommonUtil.dip2px(mContext, 5);
                candleChart.setViewPortOffsets(left_right, CommonUtil.dip2px(mContext, 15), CommonUtil.dip2px(mContext, 5), 0);
                barChart.setViewPortOffsets(left_right, CommonUtil.dip2px(mContext, 15), CommonUtil.dip2px(mContext, 5), CommonUtil.dip2px(mContext, 16));
            }

            setMarkerView(kLineData);
            setBottomMarkerView(kLineData);

            updateText(kLineData.getKLineDatas().size() - 1, false);

            float xScale = calMaxScale(kLineData.getxVals().size());
            ViewPortHandler viewPortHandlerCombin = candleChart.getViewPortHandler();
            viewPortHandlerCombin.setMinMaxScaleX(2, 50);
            candleChart.zoom(xScale, 0, 0, 0);

            ViewPortHandler viewPortHandlerBar = barChart.getViewPortHandler();
            viewPortHandlerBar.setMinMaxScaleX(2, 50);
            barChart.zoom(xScale, 0, 0, 0);

            candleChart.getXAxis().setAxisMaximum(kLineData.getKLineDatas().size() < 60 ? 60 : candleChartData.getXMax() + kLineData.getOffSet());
            barChart.getXAxis().setAxisMaximum(kLineData.getKLineDatas().size() < 60 ? 60 : barChartData.getXMax() + kLineData.getOffSet());
            if (kLineData.getKLineDatas().size() > 60) {
                candleChart.moveViewToX(kLineData.getKLineDatas().size() - 1);
                barChart.moveViewToX(kLineData.getKLineDatas().size() - 1);
            }
            isFirst = false;
        }
        handler.sendEmptyMessageDelayed(0, 100);
    }

    protected int chartType1 = 1;
    protected int chartTypes1 = 5;

    public void doBarChartSwitch(int chartType) {
        chartType1 = chartType;
        if (chartType1 > chartTypes1) {
            chartType1 = 1;
        }
        switch (chartType1) {
            case 1:
                setVolumeToChart();
                break;
            case 2:
                setMACDToChart();
                break;
            case 3:
                setKDJToChart();
                break;
            case 4:
                setBOLLToChart();
                break;
            case 5:
                setRSIToChart();
                break;
            default:
                break;
        }
        chartSwitch(kLineData.getKLineDatas().size() - 1);
    }

    /**
     * 副图指标成交量
     */
    public void setVolumeToChart() {
        if (barChart != null) {
            if (barChart.getBarData() != null) {
                barChart.getBarData().clearValues();
            }
            if (barChart.getLineData() != null) {
                barChart.getLineData().clearValues();
            }
            if (barChart.getCandleData() != null) {
                barChart.getCandleData().clearValues();
            }
            axisLeftBar.resetAxisMaximum();
            axisLeftBar.resetAxisMinimum();
            axisLeftBar.setAxisMinimum(0);
            axisLeftBar.setValueFormatter(new VolFormatter(mContext, kLineData.getAssetId()));

            CombinedData combinedData = barChart.getData();
            combinedData.setData(new BarData(kLineData.getVolumeDataSet()));
            combinedData.setData(new LineData());
            barChart.notifyDataSetChanged();
            barChart.animateY(1000);
        }
    }

    /**
     * 副图指标MACD
     */
    public void setMACDToChart() {
        if (barChart != null) {
            if (barChart.getBarData() != null) {
                barChart.getBarData().clearValues();
            }
            if (barChart.getLineData() != null) {
                barChart.getLineData().clearValues();
            }
            if (barChart.getCandleData() != null) {
                barChart.getCandleData().clearValues();
            }

            axisLeftBar.resetAxisMaximum();
            axisLeftBar.resetAxisMinimum();
            axisLeftBar.setValueFormatter(new IAxisValueFormatter() {
                @Override
                public String getFormattedValue(float value, AxisBase axis) {
                    return NumberUtils.keepPrecision(value, precision);
                }
            });

            CombinedData combinedData = barChart.getData();
            combinedData.setData(new LineData(kLineData.getLineDataMACD()));
            combinedData.setData(new BarData(kLineData.getBarDataMACD()));
            barChart.notifyDataSetChanged();
            barChart.invalidate();
        }
    }

    /**
     * 副图指标KDJ
     */
    public void setKDJToChart() {
        if (barChart != null) {
            if (barChart.getBarData() != null) {
                barChart.getBarData().clearValues();
            }
            if (barChart.getLineData() != null) {
                barChart.getLineData().clearValues();
            }
            if (barChart.getCandleData() != null) {
                barChart.getCandleData().clearValues();
            }

            axisLeftBar.resetAxisMaximum();
            axisLeftBar.resetAxisMinimum();
            axisLeftBar.setValueFormatter(new IAxisValueFormatter() {
                @Override
                public String getFormattedValue(float value, AxisBase axis) {
                    return NumberUtils.keepPrecision(value, precision);
                }
            });

            CombinedData combinedData = barChart.getData();
            combinedData.setData(new LineData(kLineData.getLineDataKDJ()));
            barChart.notifyDataSetChanged();
            barChart.invalidate();
        }
    }

    /**
     * 副图指标BOLL
     */
    public void setBOLLToChart() {
        if (barChart != null) {
            if (barChart.getBarData() != null) {
                barChart.getBarData().clearValues();
            }
            if (barChart.getLineData() != null) {
                barChart.getLineData().clearValues();
            }
            if (barChart.getCandleData() != null) {
                barChart.getCandleData().clearValues();
            }

            axisLeftBar.resetAxisMaximum();
            axisLeftBar.resetAxisMinimum();
            axisLeftBar.setValueFormatter(new IAxisValueFormatter() {
                @Override
                public String getFormattedValue(float value, AxisBase axis) {
                    return NumberUtils.keepPrecision(value, precision);
                }
            });

            CombinedData combinedData = barChart.getData();
            combinedData.setData(new CandleData(kLineData.getBollCandleDataSet()));
            combinedData.setData(new LineData(kLineData.getLineDataBOLL()));
            barChart.notifyDataSetChanged();
            barChart.invalidate();
        }
    }

    /**
     * 副图指标RSI
     */
    public void setRSIToChart() {
        if (barChart != null) {
            if (barChart.getBarData() != null) {
                barChart.getBarData().clearValues();
            }
            if (barChart.getLineData() != null) {
                barChart.getLineData().clearValues();
            }
            if (barChart.getCandleData() != null) {
                barChart.getCandleData().clearValues();
            }

            axisLeftBar.resetAxisMaximum();
            axisLeftBar.resetAxisMinimum();
            axisLeftBar.setValueFormatter(new IAxisValueFormatter() {
                @Override
                public String getFormattedValue(float value, AxisBase axis) {
                    return NumberUtils.keepPrecision(value, precision);
                }
            });

            CombinedData combinedData = barChart.getData();
            combinedData.setData(new LineData(kLineData.getLineDataRSI()));
            barChart.notifyDataSetChanged();
            barChart.invalidate();
        }
    }

    public void setMarkerView(KLineDataManage kLineData) {
        LeftMarkerView leftMarkerView = new LeftMarkerView(mContext, R.layout.my_markerview, precision);
        KRightMarkerView rightMarkerView = new KRightMarkerView(mContext, R.layout.my_markerview, precision);
        candleChart.setMarker(leftMarkerView, rightMarkerView, kLineData);
    }

    public void setBottomMarkerView(KLineDataManage kLineData) {
        BarBottomMarkerView bottomMarkerView = new BarBottomMarkerView(mContext, R.layout.my_markerview);
        barChart.setMarker(bottomMarkerView, kLineData, TimeType.TIME_DATE);
    }

    public float calMaxScale(float count) {
        float xScale = 1;
        if (count >= 800) {
            xScale = 5f;
        } else if (count >= 500) {
            xScale = 4f;
        } else if (count >= 300) {
            xScale = 3f;
        } else if (count >= 150) {
            xScale = 1.2f;
        } else if (count >= 100) {
            xScale = 0.1f;
        } else {
            xScale = 0.001f;
        }
        return xScale;
    }

    public void updateText(int index, boolean isSelect) {
        if (mHighlightValueSelectedListener != null) {
            mHighlightValueSelectedListener.onKHighlightValueListener(kLineData, index, isSelect);
        }
        candleChart.setDescriptionCustom(zbColor, new String[]{"MA5:" + NumberUtils.keepPrecision(kLineData.getKLineDatas().get(index).getMa5(), 3), "MA10:" + NumberUtils.keepPrecision(kLineData.getKLineDatas().get(index).getMa20(), 3), "MA20:" + NumberUtils.keepPrecision(kLineData.getKLineDatas().get(index).getMa30(), 3)});
        chartSwitch(index);
    }

    //副图切换
    private void chartSwitch(int index) {
        switch (chartType1) {
            case 1:
                barChart.setDescriptionCustom(ContextCompat.getColor(mContext, R.color.label_text), getResources().getString(R.string.vol_name) + NumberUtils.formatVol(mContext, kLineData.getAssetId(), kLineData.getKLineDatas().get(index).getVolume()));
                break;
            case 2:
                barChart.setDescriptionCustom(zbColor, new String[]{"DIFF:" + (kLineData.getDifData().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getDifData().get(index).getY(), 3)), "DEA:" + (kLineData.getDeaData().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getDeaData().get(index).getY(), 3)), "MACD:" + (kLineData.getMacdData().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getMacdData().get(index).getY(), 3))});
                break;
            case 3:
                barChart.setDescriptionCustom(zbColor, new String[]{"K:" + (kLineData.getkData().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getkData().get(index).getY(), 3)), "D:" + (kLineData.getdData().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getdData().get(index).getY(), 3)), "J:" + (kLineData.getjData().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getjData().get(index).getY(), 3))});
                break;
            case 4:
                barChart.setDescriptionCustom(zbColor, new String[]{"UPPER:" + (kLineData.getBollDataUP().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getBollDataUP().get(index).getY(), 3)), "MID:" + (kLineData.getBollDataMB().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getBollDataMB().get(index).getY(), 3)), "LOWER:" + (kLineData.getBollDataDN().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getBollDataDN().get(index).getY(), 3))});
                break;
            case 5:
                barChart.setDescriptionCustom(zbColor, new String[]{"RSI6:" + (kLineData.getRsiData6().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getRsiData6().get(index).getY(), 3)), "RSI12:" + (kLineData.getRsiData12().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getRsiData12().get(index).getY(), 3)), "RSI24:" + (kLineData.getRsiData24().size() <= index ? "--" : NumberUtils.keepPrecision(kLineData.getRsiData24().get(index).getY(), 3))});
                break;
            default:
                barChart.setDescriptionCustom(ContextCompat.getColor(mContext, R.color.label_text), getResources().getString(R.string.vol_name) + NumberUtils.formatVol(mContext, kLineData.getAssetId(), kLineData.getKLineDatas().get(index).getVolume()));
                break;
        }
    }

}
