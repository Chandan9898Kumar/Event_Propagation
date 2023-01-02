import React from "react";
import "./styles.css";
import ReactPaginate from "react-paginate";
const Url = "https://dummyjson.com/products";
const PER_PAGE = 5;
class PaginationClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      pageCount: 0,
      Data: [],
    };
  }

  componentDidMount() {
    fetch(Url)
      .then((response) => response.json())
      .then((data) =>
        this.setState((prev) => ({
          ...prev,
          Data: data.products,
          pageCount: data ? Math.ceil(data.products.length / PER_PAGE) : 0,
        }))
      )
      .catch((err) => {
        alert("SomeThing Went Wrong.");
      });
  }

  handlePageClick = ({ selected: selectedPage }) => {
    this.setState({
      currentPage: selectedPage,
    });
  };

  RenderingData = () => {
    const { Data, currentPage } = this.state;
    let offSet = currentPage * PER_PAGE;
    return (
      <div className="products" style={{ marginLeft: "350px" }}>
        {Data.slice(offSet, offSet + PER_PAGE).map((thumburl, index) => (
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

  render() {
    const { pageCount } = this.state;
    return (
      <div>
        {this.RenderingData()}
        <ReactPaginate
          className="footer"
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={(page) => this.handlePageClick(page)}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    );
  }
}
export default PaginationClass;
