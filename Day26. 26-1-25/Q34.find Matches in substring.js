function findMatching(str, pat) {

    let n = str.length;
    let m = pat.length;
    for (let i = 0; i <= n - m; i++) {
        let subStr1 = str.slice(i, i + m);
        if (subStr1 === pat) {
            console.log("Yes");
            return;
        }
    }
    console.log("No");
}
findMatching("hello", "lo");  // yes
findMatching("dhoni", "india"); // No
findMatching("himalaya", "him"); // yes
