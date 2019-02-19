export function serialize(obj) {
    const str = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(
                `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
            );
        }
    }
    return '?' + str.join('&');
}
