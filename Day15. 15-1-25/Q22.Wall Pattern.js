// pritn wall pattern 

function pritnWallPattern(row, column) {

    for (let i = 1; i <= row; i++) {

        let brick = "";
        for (let j = 1; j <= column * 2; j++) {
            if ((i + j) % 2 === 0) {
                brick += "[]"
            } else {
                brick += "  "
            }
        }
        console.log(brick)
    }
}
pritnWallPattern(10, 25);
