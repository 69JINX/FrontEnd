let cache = {};

export function getData(url) { // with caching promise
    if (!cache[url]) {
        cache[url] = fetch(url).then(res => res.json());
    }
    return cache[url];
}

export function getData1(url) { // without caching promise. Normal Fetch
    const promise = fetch(url).then(res => res.json())
    return promise;
}