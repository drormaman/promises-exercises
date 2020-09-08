/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return promise.then((value) => transformer(value));
  /* IMPLEMENT ME!! */
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  //   return numberPromise.then(
  //     (res) =>
  //       new Promise((resolve, reject) => {
  //         if (typeof res === "number") {
  //           resolve(res ** 2);
  //         } else if (!isNaN(res)) {
  //           resolve(Number(res) ** 2);
  //         } else {
  //           reject(`Cannot convert '${res}' to a number!`);
  //         }
  //       })
  //   );
  return numberPromise.then((res) => {
    if (typeof res === "number") {
      return res ** 2;
    } else if (!isNaN(res)) {
      return Number(res) ** 2;
    } else {
      throw `Cannot convert '${res}' to a number!`;
    }
  });
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch((res) => 0);
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise
    .then(
      (value) => {
        throw value;
      },
      (error) => {
        return error;
      }
    )
    .then(
      (value) => {
        return value;
      },
      (err) => {
        throw err;
      }
    );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
