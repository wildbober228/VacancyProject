import React, {useEffect, useState} from 'react';
import VacancyCard from "../vacancyCard/vacancyCard";
import ReactPaginate from "react-paginate";
import "./vacanciesList.css"

const VacanciesList = ({vacancies, itemsPerPage}) => {

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        setCurrentItems(vacancies)
    }, [])

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        if (vacancies) {
            setCurrentItems(vacancies.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(vacancies.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage, vacancies])


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % vacancies.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="vacancy-list-container">
            <div className="listContainer">
                {currentItems &&
                currentItems.map((vacancy) => (
                    <VacancyCard
                        vacancy={vacancy}
                    />
                ))}
            </div>
            <div className="paginationContainer">
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};

export default VacanciesList;
