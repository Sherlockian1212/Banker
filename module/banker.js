function calcNeed(P, R, request, allocation) {
    let need = new Array(P)
    for (let i = 0; i < P; i++) need[i] = new Array(R);
    for (let i = 0; i < P; i++) {
        for (let j = 0; j < R; j++) {
            need[i][j] = (request[i][j] - allocation[i][j]);
        }
    }
    return need;
}



function isSafe(P, R, request, allocation, available) {
    let need = calcNeed(P, R, request, allocation);
    let work = [...available];
    let finish = new Array(P).fill(false);
    let safeSeq = [];

    let count = 0;
    while (count < P) {
        let found = false;
        for (let p = 0; p < P; p++) {
            if (finish[p] === false) {
                let j;
                for (j = 0; j < R; j++) {
                    if (need[p][j] > work[j]) {
                        break;
                    }
                }

                if (j === R) {
                    for (let k = 0; k < R; k++) {
                        work[k] += allocation[p][k];
                    }
                    safeSeq[count] = p;
                    count++;

                    finish[p] = true;
                    found = true;
                }
            }
        }
        if (found === false) {
            console.log("System is not in a safe state");
            return [];
        }
    }
    console.log("System is in a safe state.\nSafe sequence is: " + safeSeq.join(" "));
    return safeSeq;
}
function calculateWorkMatrix(P, R, request, allocation, available) {
    let need = calcNeed(P, R, request, allocation);
    let work = [...available];
    let finish = new Array(P).fill(false);
    let safeSeq = [];

    let workMatrix = []; // Ma trận các giá trị của biến work khi nó thay đổi

    let count = 0;
    while (count < P) {
        let found = false;
        for (let p = 0; p < P; p++) {
            if (finish[p] === false) {
                let j;
                for (j = 0; j < R; j++) {
                    if (need[p][j] > work[j]) {
                        break;
                    }
                }

                if (j === R) {
                    for (let k = 0; k < R; k++) {
                        work[k] += allocation[p][k];
                    }
                    safeSeq[count] = p;
                    count++;

                    finish[p] = true;
                    found = true;

                    // Thêm ma trận work vào workMatrix
                    workMatrix.push([...work]);
                }
            }
        }
        if (found === false) {
            console.log("System is not in a safe state");
            return [];
        }
    }
    console.log(workMatrix);

    return workMatrix;
}


module.exports.calcNeed = calcNeed;
module.exports.isSafe = isSafe;
module.exports.calculateWorkMatrix = calculateWorkMatrix;
