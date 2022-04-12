import React, { useEffect } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { fetchChartList } from '../../../redux';
import { connect } from 'react-redux';

const AptChart = ({fetchChartList, area, data, loading, err}) => {

    useEffect(() => {
        fetchChartList();
      },[])

    if(err !== null) return alert("오류가 발생하였습니다.");
    let series2 = [];
    if(!loading) {
        for(let obj of area) {
            series2.push({name: obj.name, y: 0});
        }
        for(let areaObj of series2) {
            for(let dataObj of data) {
                if(areaObj.name === dataObj.SUBSCRPT_AREA_CODE_NM) {
                    areaObj.y++;
                }
            }
        }
        series2.shift();  //전체 값 삭제
    } 

    const options = {
        chart: {
            type: 'bar'		// bar차트. 아무 설정이 없으면 line chart가 된다.
        },
        title: {
            text: '아파트 지역별 청약 건수 통계'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            type: 'category'
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.y}</b>",
                }
            }
        },
        series: [{ 
            name: '지역별 건수',
            colorByPoint: true,
            data: series2
        }]
 
    }

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

const mapStateToProps = ({housesObj}) => {
    return {
        area: housesObj.areaList,
        data: housesObj.items.data,
        loading: housesObj.loading,
        err: housesObj.err,
    }
}

const mapDispatchToProps = {
    fetchChartList
}

export default connect(mapStateToProps, mapDispatchToProps)(AptChart);