// generateRPattern

function generateRpattern(n){

    for(let i=1; i<=n; i++){
        let temp="";
        if(i===1){
            for(let j=1; j<=n; j++){
                temp+="*"+" "
            }
            // temp+="&"
        }else{
            temp+="*"
            for(let j=i; j<n; j++){
                temp+="  "
            }
            temp+="*"+" "
        }
       console.log(temp);
    }    
    for(let i=1; i<n; i++){
        let tem=""
        tem+="*"
        for(let j=1; j<=i; j++){
            tem+="  ";
        }
        tem+="*"
        console.log(tem)
    }
}
generateRpattern(3)

//  _ _
// |  /    * * * 
// | /     *  * 
// |\      **
// | \     *  *
//         *    *

generateRpattern(6)
// * * * * * * 
// *        * 
// *      *
// *    *
// *  *
// **
// *  *
// *    *
// *      *
// *        *
// *          *