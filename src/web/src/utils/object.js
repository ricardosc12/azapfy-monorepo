export function isEmpty(object, { except = [] } = {}) {
    if (except.length > 0 && except.includes(typeof object)) return true;

    if (typeof object === "string") return object.length <= 0;
    if (!object || typeof object !== "object") return true;

    if (Array.isArray(object)) return object.length <= 0;

    return Object.keys(object).length <= 0;
}

export function getKey(object, index = 0) {
    if (isEmpty(object)) return null;

    const key = Array.isArray(object)
        ? object[index]
        : Object.keys(object)[index];

    return { name: key, index, data: object[key] };
}

export function toArray(object) {
    if(!object) return []
    return Object.keys(object).map((key) => ({
        id: key,
        data: object[key],
    }));
}