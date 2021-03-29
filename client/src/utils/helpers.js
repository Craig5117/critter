export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // this will open the db connection to a db called critter in idb
    // version number is set to 1 by the second parameter
    const request = window.indexedDB.open('critter', 1);

    let db, tx, store;

    request.onupgradeneeded = function (event) {
      const db = request.result;
      // sets up stores for petTypes, tails, and pets
      db.createObjectStore('petTypes', { keyPath: '_id' });
      db.createObjectStore('tails', { keyPath: '_id' });
      db.createObjectStore('pets', { keyPath: '_id' });
    };

    // handles the connection errors
    request.onerror = function (event) {
      console.log('Did you allow this app access to IndexedDB?');
    };

    request.onsuccess = function (event) {
      // create a reference to the db state on connection
      db = request.result;

      // open a transaction that will handle get, post, and put requests
      tx = db.transaction(storeName, 'readwrite');
      // references one of the object stores based on the name recieved
      store = tx.objectStore(storeName);

      // log errors
      db.onerror = function (error) {
        console.log('error', error);
      };

      // a switch to toggle this functions action based on the recieved method
      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('Not a valid method.');
          break;
      }

      // close connection after transaction completion
      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
