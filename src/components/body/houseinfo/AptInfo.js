import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Table
} from 'reactstrap';
import { fetchList } from '../../../redux';

const AptInfo = ({fetchList, houses}) => {
    const [house, setHouse] = useState([]);
    //const [data, setData] = useState(houses);
    console.log("==============:",house);
//console.log("=========:",data);
    useEffect(() => {
        fetchList();
        setHouse(houses);
    },[house])
    //console.log("[apt]:",apt);
    let housesTag = null;
    
    /*let housesTag = houses.data.map((house=> <tr key={house.PBLANC_NO}>
                                                <td>{house.HOUSE_MANAGE_NO}</td>
                                                <td>{house.PBLANC_NO}</td>
                                                <td>{house.HOUSE_NM}</td>
                                                <td>{house.SUBSCRPT_AREA_CODE_NM}</td>
                                                <td>{house.HSSPLY_ADRES}</td>
                                                <td>{house.TOT_SUPLY_HSHLDCO}</td>
                                                <td>{house.RCRIT_PBLANC_DE}</td>
                                                <td>{house.RCEPT_BGNDE}</td>
                                                <td>{house.RCEPT_ENDDE}</td>
                                                <td>{house.PRZWNER_PRESNATN_DE}</td>
                                                <td>{house.CNSTRCT_ENTRPS_NM}</td>
                                                <td>{house.SPECLT_RDN_EARTH_AT}</td>
                                              </tr>
        )
     );*/

    return (
        <div>
        <div style={{width:'100%',height:'850px',overflowX:'auto'}}>
        <p style={{float:'left', fontWeight:'bold'}}>총 건수: {houses.totalCount}</p>
        <Table bordered style={{width:'100%'}}>
            <thead>
                <tr>
                    <th style={{width:'130px'}}>주택관리번호</th>
                    <th style={{width:'100px'}}>공고번호</th>
                    <th>주택명</th>
                    <th style={{width:'100px'}}>공급지역명</th>
                    <th>공급위치</th>
                    <th style={{width:'100px'}}>공급규모</th>
                    <th style={{width:'130px'}}>모집공고일</th>
                    <th style={{width:'130px'}}>청약접수시작일</th>
                    <th style={{width:'130px'}}>청약접수종료일</th>
                    <th style={{width:'130px'}}>당첨자발표일</th>
                    <th>건설업체명</th>
                    <th style={{width:'130px'}}>투기과열지구</th>
                </tr>
            </thead>
            <tbody>
                {housesTag}
            </tbody>
        </Table>
        </div>
    </div>
    );
};

const mapStateToProps = ({housesObj}) => {
    //console.log("==========================s:",housesObj);
    return {
        houses: housesObj.items
    }
}

const mapDispatchToProps = {
    fetchList
}

export default connect(mapStateToProps, mapDispatchToProps)(AptInfo);