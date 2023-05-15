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
    need = calcNeed(P, R, request, allocation);

    let work = [];
    for (let i = 0; i < R; i++) {
        work.push(available[i]);
    }

    let count = 0;
    while (count < P) {
        let found = false;
        for (let p = 0; p < P; p++) {
            if (finish[p] == false) {
                let j;
                for (j = 0; j < R; j++)
                    if (need[p][j] > work[j])
                        break;


                if (j == R) {
                    for (k = 0; k < R; k++) {
                        work[k] += allocation[p][k];
                    }
                    safeSeq[count] = p;
                    count++;

                    finish[p] = true;
                    found = true;
                }
            }
        }
        if (found == false) {
            console.log("System is not in safe state");
            return false;
        }
    }
    console.log("System is in safe state.\nSafe sequence is: ");
    for (let i = 0; i < P; i++) {
        console.log(safeSeq[i] + " ");
    }
    return true;
}

module.exports.calcNeed = calcNeed;
module.exports.isSafe = isSafe;
