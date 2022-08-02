import silentImg from '../images/silent-euphoria-logo.png';
import closeIcon from '../images/close-icon.png';
import React, { useState, useEffect, ReactChild } from 'react';
interface modalProps {
  setIsShown: Function;
  isShown: Boolean;
  child: JSX.Element | JSX.Element[];
}
const ModalBox = ({ setIsShown, isShown, child }: modalProps) => {
  const closeModal = () => {
    window.document.querySelector('body')?.classList.remove('no-scroll');
    setIsShown(false);
  };

  const dynammicModalClass = () =>
    isShown ? { display: 'block' } : { display: 'none' };

  useEffect(() => {
    // if (!sessionStorage.popupModal) {
    //     const timer = setTimeout(() => {
    //         setIsShown(true);
    //         sessionStorage.popupModal = 1;
    //     }, 2000);
    //     return () => clearTimeout(timer);
    // }
  }, []);

  // return isShown ? <h3>Modal content</h3> : null;
  return isShown ? (
    // <div className="modal" style={dynammicModalClass()} id="channelModal">
    //     <div className="modal-dialog modal-dialog-centered" role="document">
    //         <div className="modal-content">
    //             <div className="modal-header">
    //                 <h5 className="modal-title text-light">Free Measure. Free Quote.</h5>

    //                 <button
    //                     onClick={closeModal}
    //                     style={{ color: '#fff' }}
    //                     type="button"
    //                     className="close"
    //                     data-dismiss="modal"
    //                     aria-label="Close"
    //                 >
    //                     <span aria-hidden="true">&times;</span>
    //                 </button>
    //             </div>

    //             <div className="modal-body">

    //                 {child}
    //             </div>

    //             {/* <div className="modal-footer">
    //                 <button className="btn-lg btn btn-primary">
    //                     <span style={{ color: '#fff' }}>
    //                         <i className="fa fa-phone mr-1 " />
    //                         <a href="tel:01234567" style={{ color: '#fff' }}>
    //                             0123 4567{' '}
    //                         </a>
    //                     </span>
    //                 </button>
    //                 <button onClick={closeModal} type="button" className="btn btn-lg">
    //                     No Thanks
    //                 </button>
    //             </div> */}
    //         </div>
    //     </div>
    // </div>
    <div id="myNav" className="overlay">
      <div className="menu-modal-body">
        <img src={silentImg.src} alt="" className="silent-btm-logo" />
        <div className="menu-modal-content">
          <div className="menu-modal-left"></div>
          <div className="menu-modal-right">
            <div className="close-icon">
              <img onClick={closeModal} src={closeIcon.src} alt="" />
            </div>
            <div className="menu-modal-header-links">
              <span className="signup-link">Sign Up</span>
            </div>
            {child}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalBox;
