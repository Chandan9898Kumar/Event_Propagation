import React, { useEffect, useState, useCallback } from "react";
import Pagination from "react-responsive-pagination";
import "./pagination.css";
const FetchedData = () => {
  const [defaultData, setDefaultData] = useState([]);
  const [result, setResult] = useState({
    current: 0,
    pageSize: 10,
    data: [],
    totalPages: 0,
  });

  useEffect(() => {
    GettingData();
  }, []);

  const GettingData = () => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => response.json())
      .then((result) => {
        setDefaultData(result.products);
        let paginatedData = GetPaginatedData(1, result.products);
        setResult((prev) => ({
          ...prev,
          current: 1,
          data: result.products ? paginatedData : [],
          totalPages: result.products
            ? Math.ceil(result.products.length / 10)
            : 0,
        }));
      })
      .catch((err) => {
        alert("err");
      });
  };

  const GetPaginatedData = (currentPage, data) => {
    const { pageSize } = result;
    let startIndex = currentPage * pageSize - pageSize;
    let endIndex = startIndex + pageSize - 1;

    return (
      data && data.filter((item, ind) => ind >= startIndex && ind <= endIndex)
    );
  };

  //   const GetPaginatedData = useCallback((currentPage, data) => {
  //     console.log('hello')
  //     const { pageSize } = result;
  //     let startIndex = currentPage * pageSize - pageSize;
  //     let endIndex = startIndex + pageSize - 1;

  //     return (
  //       data && data.filter((item, ind) => ind >= startIndex && ind <= endIndex)
  //     );
  //   }, []);

  const handlePageChange = (page) => {
    let newData = GetPaginatedData(page, defaultData);
    setResult((prev) => ({
      ...prev,
      current: page,
      data: newData,
    }));
  };

  const MyData = () => {
    let results = result.data.map((item, index) => (
      <img key={index} src={item.thumbnail} alt="" />
    ));
    return results;
  };
  return (
    <div>
      <div>{MyData()}</div>
      <div className="pagination">
        <Pagination
          total={result.totalPages}
          current={result.current}
          onPageChange={(page) => handlePageChange(page)}
          pageItemClassName="page-item"
        />
      </div>
    </div>
  );
};
export default FetchedData;
