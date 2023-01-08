import React, { useEffect, useState } from "react";
import "./pagination.css";
const URl = "https://dummyjson.com/products?limit=100";
const ManualPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    fetch(URl)
      .then((response) => response.json())
      .then((result) => setData(result.products))
      .catch((err) => {
        console.log(err);
      });
  };

  const RenderFunction = data
    .slice(currentPage * 10 - 10, currentPage * 10)
    .map((item) => (
      <div
        style={{
          width: "100%",
          height: "95%",
          objectFit: "cover",
          cursor: "pointer",
        }}
      >
        <img key={item.id} src={item.thumbnail} alt={item.title} />
        <span>{item.title}</span>
      </div>
    ));

  const HandleClick = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
    setActive(page);
  };

  return (
    <div>
      <div
        style={{
          width: "200px",
          marginLeft: "200px",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        {RenderFunction}
      </div>
      <div
        className="paginators"
        style={{
          backgroundColor: "gray",
          width: "min-content",
          borderRadius: "10px",
        }}
      >
        {/* Note : Below, like this we can change anything manually by using events */}
        <span
          onMouseEnter={(e) => {
            // console.log(e,'target')
            e.target.style.background = "blue";
            e.target.style.color = "white";
            e.target.style.borderRadius = "12px";
            e.target.style.marginRight = "5px";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "gray";
            e.target.style.color = "black";
          }}
          onClick={
            currentPage > 1
              ? (e) => {
                  setCurrentPage((prev) => prev - 1);
                  setActive((prev) => prev - 1);
                }
              : ""
          }
          className={currentPage === 1 ? "disabling" : ""}
        >
          Back
        </span>
        {[...Array(data.length / 10)].map((item, index) => {
          return (
            <span
              className={active && active === index + 1 ? "activeItem" : ""}
              onClick={(event) => HandleClick(event, index + 1)}
              key={index}
            >
              {index + 1}
            </span>
          );
        })}

        <span
          //   onClick={
          //     currentPage >= 1
          //       ? currentPage <= 9
          //         ? (e) => {
          //             setCurrentPage((prev) => prev + 1);
          //             setActive((prev) => prev + 1);
          //           }
          //         : ""
          //       : ""
          //   }
          // both are correct .
          onClick={
            currentPage >= 1 && currentPage <= 9
              ? (e) => {
                  setCurrentPage((prev) => prev + 1);
                  setActive((prev) => prev + 1);
                }
              : ""
          }
          onMouseEnter={(e) => {
            e.target.style.background = "blue";
            e.target.style.color = "white";
            e.target.style.borderRadius = "12px";
            e.target.style.marginRight = "5px";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "gray";
            e.target.style.color = "black";
          }}
          className={currentPage === 10 ? "disabling" : ""}
        >
          Next
        </span>
      </div>
    </div>
  );
};
export default ManualPagination;
