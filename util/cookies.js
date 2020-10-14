import cookie from 'js-cookie';
import { users } from '../database';

export function getFollowingFromCookies() {
  // Use "|| []" in order to use a default
  // value, in case this is undefined
  const following = cookie.getJSON('following') || [];
  return following;
}

export function toggleFollowUserInCookie(product, newQuantity) {
  // ['1', '3']
  const following = getFollowingFromCookies();

  let newFollowing;

  const newProduct = {
    id: product.id,
    name: product.name,
    description: product.description,
    quantity: newQuantity,
    price: product.price,
    img: product.img,
    // total: newTotal,
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
  const checkProduct = following.filter((item) => item.id === newProduct.id);
  console.log('2', checkProduct);
  const updatedFollowing = following.filter(
    (item) => item.id !== newProduct.id,
  );
  console.log('3', updatedFollowing);
  if (checkProduct.length === 0) {
    newFollowing = [...following, newProduct];
    console.log('4', newFollowing);
  } else {
    newProduct.quantity = checkProduct[0].quantity + newQuantity;
    console.log('7', checkProduct.quantity);
    console.log('8', newQuantity);
    console.log('5', newProduct.quantity);
    newFollowing = [...updatedFollowing, newProduct];
    console.log('6', newFollowing);
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

  console.log('New cookie', newFollowing);

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
  cookie.set('following', newFollowing);
  return newFollowing;
}

export default function DeleteFunction(id) {
  // ['1', '3']
  const following = getFollowingFromCookies();
  let newFollowing;
  newFollowing = following.filter((user) => user.id !== id);
  cookie.set('following', newFollowing);
  return newFollowing;
}
