import cookie from 'js-cookie';
import { users } from '../database';

export function getFollowingFromCookies() {
  // Use "|| []" in order to use a default
  // value, in case this is undefined
  const following = cookie.getJSON('following') || [];
  return following;
}

export function toggleFollowUserInCookie(id, newQuantity) {
  // ['1', '3']
  const following = getFollowingFromCookies();

  let newFollowing;

  const newId = {
    id: id.id,
    name: id.name,
    description: id.description,
    quantity: newQuantity,
    price: id.price,
    img: id.img,
    // total: newTotal,
  };

  // if (following.includes(id)) {
  //   //   // If the user id is already in the following
  //   //   // array, then remove it from the array
  //   newFollowing = following.filter((followed) => followed !== id);
  // } else {
  //   //   // If the user id is not in the array,
  //   //   // add it to the array
  newFollowing = [...following, newId];
  //   //   // Alternative version:
  //   //   // newFollowing = following.concat(id);
  //   // }
  // console.log(newFollowing);
  cookie.set('following', newFollowing);
  console.log(newFollowing);
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
