/* Write a function - fetch_cached() which will check in local cache. Otherwise, download the link using axios get and save the results in local storage. */

function fetch_cached(cacheName, url) {
    if(localStorage[cacheName]) {
        return localStorage[cacheName];
    } else {
        axios.get(url)
            .then(response => {
                //storing in localstorage
                localStorage[cacheName] = response;
            }).catch(error => {
                //error handling
                console.log(error);
            });
    }
}
