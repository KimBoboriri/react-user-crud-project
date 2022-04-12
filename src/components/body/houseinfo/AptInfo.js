import React, { useCallback, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { 
    Form,
    FormGroup,
    Label,
    Col,
    Button,
    Table
} from 'reactstrap';

import { fetchList, changeArea } from '../../../redux';
import Paging from '../pagination/Paging';

const AptInfo = ({fetchList, changeArea, loading, err, houses, areaList, selectedArea}) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
      fetchList(page, selectedArea);
    },[page])

    const areaTag = loading ? null : <select value={selectedArea} onChange={(e)=> handleChangeArea(e)}>
                                            {areaList.map((area =>
                                                <option value={area.key}>{area.name}</option>
                                            ))}
                                    </select>
   
   const housesTag = loading ? (<tr><td colSpan="12">loading...</td></tr>) : 
                                            err === null ?
                                            houses.data.map((house=> <tr key={house.HOUSE_MANAGE_NO}>
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
                                             ) : 
                                             (<tr><td colSpan="12">오류가 발생하였습니다.</td></tr>)
                                              
    const totalCount = loading ? 0 : houses.matchCount;

    const handleChangeArea = (e) => {
        const initialSelectedArea = e.target.value === '' ? '' : e.target.value;
        changeArea(initialSelectedArea);
    }

    const handlePageChange = (page) => {
        setPage(page);
    }

    return (
        <div>

        <Form>
            <FormGroup row>
                <Label
                for="exampleEmail"
                sm={1}
                >
                총 건수: {totalCount}
                </Label>
                <Label
                for="exampleEmail"
                sm={2}
                >
                공급지역명&nbsp; 
                {areaTag}
                </Label>
            </FormGroup>
        </Form>

        <div style={{width:'100%',height:'80vh',overflowX:'auto', overflowY:'auto'}}>    
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
        <Paging page={page} count={totalCount} setPage={handlePageChange} />
    </div>
    );
};

const mapStateToProps = ({housesObj}) => {
    console.log("housesObj.areaList:",housesObj.areaList);
    return {
        houses: housesObj.items,
        loading: housesObj.loading,
        err: housesObj.err,
        areaList: housesObj.areaList,
        selectedArea : housesObj.selectedArea
    }
}

const mapDispatchToProps = {
    fetchList, changeArea
}

export default connect(mapStateToProps, mapDispatchToProps)(AptInfo);