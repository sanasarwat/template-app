import { products as DBProducts } from "../data/products";

const getSearchData = (data, searchItem) => {
  return data.filter((product) => {
    //console.log(searchItem);
    let searchMatch = true;
    if (searchItem && product.title.toLowerCase())
      searchMatch = product.title
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    return searchMatch;
  });
};

// const getSearchData = (data, searchString) => {
//   const fuse = new Fuse(data, {
//     threshold: 0.6,
//     minMatchCharLength: 2,
//     keys: ["title", "category", "description"],
//   });
//   return fuse.search(searchString);
// };
const getFilterData = (
  data,
  selectedCategories,
  selectedRating,
  selectedBrand
) => {
  return data.filter((product) => {
    // console.log("hello" + data);
    // category filter
    let categoryMatch = true;
    if (selectedCategories.length && product.category)
      categoryMatch = selectedCategories.includes(product.category);

    // rating filter
    let ratingMatch = true;
    if (selectedRating && product.rating)
      ratingMatch = Number(product.rating) >= Number(selectedRating);

    let brandMatch = true;
    if (selectedBrand && product.brand)
      brandMatch = product.brand
        .toLowerCase()
        .includes(selectedBrand.toLowerCase());

    return categoryMatch && ratingMatch && brandMatch;
  });
};

const getPageData = (data, indexFrom, limit) => {
  return data.slice(indexFrom, indexFrom + limit);
};

const getSortData = (data, sortBy) => {
  return data.sort((product1, product2) => {
    if (sortBy === "PriceHighToLow") {
      return product1.price > product2.price ? -1 : 1;
    } else if (sortBy === "PriceLowToHigh") {
      return product1.price < product2.price ? -1 : 1;
    } else if (sortBy === "RatingLowToHigh") {
      return product1.rating < product2.rating ? -1 : 1;
    } else {
      // default 'RatingHighToLow'
      return product1.rating > product2.rating ? -1 : 1;
    }
  });
};

export const getVisibleProducts = ({
  selectedCategories,
  searchItem,
  selectedRating,
  indexFrom,
  limit,
  sortBy,
  selectedBrand,
}) => {
  let products = DBProducts;

  if (searchItem) products = getSearchData(products, searchItem);

  if (selectedCategories.length || selectedRating || selectedBrand)
    products = getFilterData(
      products,
      selectedCategories,
      selectedRating,
      selectedBrand
    );
  const total = products.length;

  //sort data call
  products = getSortData(products, sortBy);

  if (indexFrom && limit) products = getPageData(products, indexFrom, limit);
  const hasMoreData = total > indexFrom + limit;

  return { products, hasMoreData, total };
};
