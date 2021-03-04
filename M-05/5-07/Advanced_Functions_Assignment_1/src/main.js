/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, stateName) {
  return parks.filter(
    (park) => park.location.state.toLowerCase() === stateName.toLowerCase()
  );
};

function getWishlistParksForUser(parks, users, userName) {
  return parks.filter((park) =>
    users[userName].wishlist.includes(park.id) ? park : null
  );
};

// Custom Function
function getVisitedlistParksForUser(parks, users, userName) {
  return parks.filter((park) =>
    users[userName].visited.includes(park.id) ? park : null
  );
};

function userHasVisitedAllParksInState(parks, users, stateName, userName) {
  const statePull = getParksByState(parks, stateName).map((state) => state.id);
  const userPull = getVisitedlistParksForUser(parks, users, userName).map((user) => user.id);
  return userPull.every((num, index) => num === statePull[index]);
};

function userHasVisitedParkOnWishlist(users, userNameA, userNameB) {
  const userA = users[userNameA];
  const userB = users[userNameB];

  return userA.visited.some((value) => userB.wishlist.includes(value));
};

function getUsersForUserWishlist(users, userName) {
  const name = Object.keys(users);
  return name.filter((value) => userHasVisitedParkOnWishlist(users, value, userName));
};

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
