export function makeDistinct(array: any) {
    const seen = new Set();
    return array.filter((value:any) => {
        if (seen.has(value)) {
            return false;
        }
        seen.add(value);
        return true;
    });
}
