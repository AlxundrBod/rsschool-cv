function inter(s1, s2) {
    return new Set([...s1].filter((item) => s2.has(item)))
}

const set1 = new Set([1, 2]);
const set2 = new Set([2, 3]);

console.log(inter(set1, set2));