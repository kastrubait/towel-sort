
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
    if((typeof matrix ==='undefined')||(matrix.length === 0)) return []
        else 
        for (let i = 0; i < matrix.length; i++) {
            let arr = [];
            if ( i % 2 === 0 ) res = res.concat(matrix[i].slice(0, matrix[i].length))
               else arr = arr.concat(matrix[i].slice(0, matrix[i].length));
            res = res.concat(arr.reverse());
        }    
    return res;
}
