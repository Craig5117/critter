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
            db.createObjectStore('petTypes', { keyPath: '_id' });
        }

    })
}