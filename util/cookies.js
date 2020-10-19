import cookie from 'js-cookie';

export function getProductListFromCookies() {
  // Use "|| []" in order to use a default
  // value, in case this is undefined
  const productList = cookie.getJSON('productList') || [];
  return productList;
}

export function productInCookie(product, newQuantity) {
  // ['1', '3']
  const productList = getProductListFromCookies();

  let newProductList;

  const newProduct = {
    id: product.id,
    quantity: newQuantity,
  };

  // following.find(function checkProduct(product) {
  //   product.id = id.id;
  //   return product;
  // });

  // following.find((product) => (product.id = newId.id));
  // if ((following.length = 0)) {
  //   newFollowing = [...following, newId];
  //   console.log('1', newFollowing);
  // } else {
  const checkProduct = productList.filter((item) => item.id === newProduct.id);
  console.log('1', checkProduct);
  const updatedProductList = productList.filter(
    (item) => item.id !== newProduct.id,
  );
  console.log('2', updatedProductList);
  if (checkProduct.length === 0) {
    newProductList = [...productList, newProduct];
    console.log('3', newProductList);
  } else {
    newProduct.quantity = checkProduct[0].quantity + newQuantity;
    console.log('4', newProduct.quantity);
    newProductList = [...updatedProductList, newProduct];
    console.log('5', newProductList);
  }

  // if (!checkProduct) {
  //   newFollowing = [...following, newId];
  // } else {
  //   updatedFollowing = following.filter((product) => product.id != newId.id);
  //   newId.quantity = checkProduct.quantity + newQuantity;
  //   if (updatedFollowing.length == 0) {
  //     newFollowing = [newId];
  //   } else {
  //     newFollowing = [...updatedFollowing, newId];
  //   }
  // }

  console.log('New cookie', newProductList);

  // if (following.includes(id)) {
  //   //   // If the user id is already in the following
  //   //   // array, then remove it from the array
  //   newFollowing = following.filter((followed) => followed !== id);
  // } else {
  //   //   // If the user id is not in the array,
  //   //   // add it to the array
  // newFollowing = [...following, newId];
  //   //   // Alternative version:
  //   //   // newFollowing = following.concat(id);
  //   // }
  // console.log(newFollowing);
  cookie.set('productList', newProductList);
  return newProductList;
}

export default function deleteFunction(id) {
  // ['1', '3']
  const productList = getProductListFromCookies();
  const newProductListInCookies = productList.filter(
    (product) => product.id !== id,
  );
  cookie.set('productList', newProductListInCookies);
  return newProductListInCookies;
}
