import React, { useState, useEffect } from "react";
import "./styles.css";
import ReactPaginate from "react-paginate";
const Url = "https://dummyjson.com/products";
const PER_PAGE = 5;
const PaginationFunctional = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [result, setResult] = useState({
    Data: [],
  });

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = () => {
    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        setResult((prev) => ({
          ...prev,
          Data: data.products,
        }));
      });
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * PER_PAGE;

  //   const RenderingData = result.Data.slice(offset, offset + PER_PAGE).map(
  //     (thumburl) => <img src={thumburl.images[0]} alt='' />
  //   );

  //   Note : use above commented or below function.
  const Renting = () => {
    return (
      <div className="products">
        {result.Data.slice(offset, offset + PER_PAGE).map((thumburl, index) => (
          <div key={index}>
            <p>
              {thumburl.brand}
              <img src={thumburl.images[0]} alt="" />
            </p>
          </div>
        ))}
      </div>
    );
  };

  const pageCount = result.Data ? Math.ceil(result.Data.length / PER_PAGE) : 0;

  return (
    <div className="HeightWidth">
      {Renting()}
      {/* {RenderingData} */}
      <ReactPaginate
        className="footer"
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={(page) => handlePageClick(page)}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default PaginationFunctional;
