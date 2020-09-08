/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((value) => resolve(asyncTransformer(value)))
      .catch((err) => reject(err));
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then((value) =>
    slowAsyncProcess(value).then((res) => res)
  );
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    return getUserById(userId)
      .then((user) =>
        getOrganizationById(user.organizationId).then((organ) => {
          user.organization = organ;
          return user;
        })
      )
      .catch((error) => undefined);
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};
