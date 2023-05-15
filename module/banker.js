function calcNeed(P, R, request, allocation) {
    let need = new Array(P)
    for(let i=0; i<P; i++) need[i]= new Array(R);
    for (let i = 0; i < P; i++) {
        for (let j = 0; j < R; j++) {
            need[i][j] = (request[i][j] - allocation[i][j]);
        }
    }
    return need;
} 

module.exports.calcNeed = calcNeed;
