import React from 'react';
import { connect } from 'react-redux';
import { changeModal } from '../../redux';
import AptChart from '../body/housechart/AptChart';
import OfficeChart from '../body/housechart/OfficeChart';

const Modal = ({changeModal, modalStatus, modalLink, modalHeading}) => {
  // 열기, 닫기, 모달 헤더 텍스트를 리덕스 스토어에서 가져옴
  let modalComponent = null;
  console.log("==================[Modal value]==================");
  console.log("modalStatus:",modalStatus);
  console.log("modalLink:",modalLink);
  console.log("modalHeading:",modalHeading);
  if(modalStatus) {
      switch(modalLink) {
          case '/modal/aptchart':
              modalComponent = <AptChart /> 
              break;
          case '/modal/officechart':
              modalComponent = <OfficeChart /> 
              break;
          default: 
              modalComponent = null
      }
  }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={modalStatus ? 'openModal modal' : 'modal'}>
      {modalStatus ? (
        <section>
          <header>
            {modalHeading}
            <button className="close" onClick={()=> changeModal(false,'','')}>
              &times;
            </button>
          </header>
          <main>{modalComponent}</main>
          <footer>
            <button className="close" onClick={()=> changeModal(false,'','')}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({menuObj}) => {
    return {
        modalStatus: menuObj.modal_status,
        modalLink : menuObj.modal_link,
        modalHeading: menuObj.modal_heading
    }
}

const mapDispatchToProps = {
    changeModal: (modalStatus, modalLink, modalHeading) => changeModal(modalStatus, modalLink, modalHeading)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);