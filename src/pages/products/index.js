import React, { useMemo, useContext } from "react";
import HeaderFilter from "./HeaderFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import ProductListing from "./ProductListing";
import HeaderSection from "../../components/header/HeaderSection";
import Footer from "../../components/Footer";
import { getVisibleProducts } from "../../api/product-api";
import SearchFilter from "./SearchFilter";
import RatingFilter from "./RatingFilter";
import ItemFoundText from "./ItemFoundText";
import PaginationFilter from "./PaginationFilter";
import SortFilter from "./SortFilter";
import CartDrawer from "../cart/CartDrawer";
//import { getProducts } from "../../data/products";
import { FilterContext } from "../../helpers/FilterProvider";

export default function Collections() {
  // const [selectedCategories, setSelectedCategories] = useState([]);
  // const [searchItem, setSearchItem] = useState("");
  // const [selectedRating, setSelectedRating] = useState("");
  // const [sortBy, setSortBy] = useState("");
  // const [selectedBrand, setSelectedBrand] = useState("");

  const {
    selectedCategories,
    setSelectedCategories,
    searchItem,
    setSearchItem,
    selectedRating,
    setSelectedRating,
    sortBy,
    setSortBy,
    selectedBrand,
    setSelectedBrand,
    selectedMenu,
  } = useContext(FilterContext);

  const { products } = useMemo(
    () =>
      getVisibleProducts({
        selectedCategories,
        searchItem,
        selectedRating,
        sortBy,
        selectedBrand,
        selectedMenu,
      }),
    [
      selectedCategories,
      searchItem,
      selectedRating,
      sortBy,
      selectedBrand,
      selectedMenu,
    ]
  );

  return (
    <div>
      <CartDrawer />

      <HeaderSection />
      <div className="page-content section-ptb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 sidebar">
              <div className="theiaStickySidebar">
                <HeaderFilter
                  setSelectedCategories={setSelectedCategories}
                  setSelectedRating={setSelectedRating}
                  setSelectedBrand={setSelectedBrand}
                />
                <SearchFilter
                  searchItem={searchItem}
                  setSearchItem={setSearchItem}
                  placeholder="Search Products"
                />
                <CategoryFilter
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
                <PriceFilter />
                <BrandFilter
                  selectedBrand={selectedBrand}
                  setSelectedBrand={setSelectedBrand}
                />
                <RatingFilter
                  selectedRating={selectedRating}
                  setSelectedRating={setSelectedRating}
                />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-9">
                  <ItemFoundText
                    total={products.length}
                    string="Search String"
                  />
                </div>
                <div className="col-lg-3">
                  <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
                </div>
              </div>
              <ProductListing products={products} />

              <div className="col-12 text-center mt-4">
                <button className="loadMore">Load More</button>
              </div>
              <PaginationFilter />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
