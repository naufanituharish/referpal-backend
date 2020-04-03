
const lompatanKuda = (cell) => {

    if(cell===''||cell===undefined) return 'Parameters cannot be empty';
    if( cell.length > 2 ) return 'Parameters can only consist of two character';

    const horizontal = ['A','B','C','D','E','F','G','H'];
    const move = [[1,-2],[1,2],[2,-1],[2,1],[-2,1],[-2,-1],[-1,-2],[-1,2]]
    let cellAr = cell.split('');
    let horizontalValue = horizontal.indexOf(cellAr[0].toUpperCase());
    if( horizontalValue === undefined ) return 'Parameters can only consist letter A-H';

    let verticalValue = parseInt(cellAr[1]);
    if( verticalValue < 1 && verticalValue > 8) return 'Parameters can only consist integer 1-8';
    let result = 0; 
    let availCellToMove = [];
    for (let i=0;i < move.length; i++){ 
        if(horizontalValue+1+move[i][0] >= 1 && horizontalValue+1+move[i][0] <= 8){
            let string = horizontal[horizontalValue+move[i][0]];
            if(verticalValue+move[i][1] >= 1 && verticalValue+move[i][1] <= 8){
                let verticalMove = verticalValue+move[i][1];
                availCellToMove.push(string+verticalMove); 
                result = result + 1
            }
        }
    }
    
    return result

}

exports.lompatanKuda = lompatanKuda;