import React from "react";

export default function SearchFilter(props) {
  const { searchItem, setSearchItem, placeholder } = props;
  //console.log(searchHandler);
  //search handler
  function searchHandler(e) {
    setSearchItem(e.target.value);
  }
  console.log(searchItem);
  return (
    <div>
      <div className="widget widget-head">
        <h6>Search Products</h6>
        <div className="d-flex justify-content-between align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="input-item">
                  <input
                    type="text"
                    name="name"
                    onChange={searchHandler}
                    placeholder={placeholder}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
