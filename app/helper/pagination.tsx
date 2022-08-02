import { useState } from "react";
import paginationArrowRight from '../images/pagination-arrow-right.png';
import paginationArrowLeft from '../images/pagination-arrow-left.png';

export function Pagination({ total, pageLimit, dataLimit, pages, setCurrentPage, currentPage, getUsersList }) {
    
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
        getUsersList()
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
        getUsersList()
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
        getUsersList()
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        // return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <section className="gallery-pagination">
            <div className="container">
                <div className="gallery-pagination-content">
                    <div onClick={goToPreviousPage}
                        className={`gallery-pagination-img prev ${currentPage === 1 ? 'disabled' : ''}`}> 
                        <img src={paginationArrowLeft.src} alt=""  />
                    </div>
                    <div className="gallery-pagination-item">
                    {getPaginationGroup().map((item, index) => (
                        <button
                            key={index}
                            onClick={changePage}
                            className={`gallery-pagination-item-no ${currentPage === item ? 'active' : null}`}
                        >
                            <span>{item}</span>
                        </button>
                    ))}
                    </div>
                    {/* <div className="gallery-pagination-item">
                        <a href="#" className="gallery-pagination-item-no active">
                            1
                        </a>
                        <a href="#" className="gallery-pagination-item-no">
                            2
                        </a>
                        <a href="#" className="gallery-pagination-item-no">
                            3
                        </a>
                        <span className="pagination-dots">. . .</span>
                        <a href="#" className="gallery-pagination-item-no">
                            100
                        </a>
                    </div> */}

                    <div onClick={goToNextPage}
                        className={`gallery-pagination-img ${currentPage === pages ? 'disabled' : ''}`}>
                        <img src={paginationArrowRight.src} alt="" />
                    </div>
                </div>
            </div>
        </section>
  );
}