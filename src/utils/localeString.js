export function createLocaleString(localeArray) {
    return localeArray.reduce((string, item, index) => {
        return string += (index === 0 ? "" : " > ") + item;
    }, "");
}