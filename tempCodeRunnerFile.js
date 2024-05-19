// Sum the elements of an array

// let arr = [1, 2, 3, 4, 10];

// // we have to sum the give array elements

// let sum = arr.reduce((a, b) => a + b, 0);

// console.log(sum);  //...


// 3 sum 


// Javascript program to find a triplet
// returns true if there is triplet with sum equal 
// to 'sum' present in A[]. Also, prints the triplet 
function find3Numbers(A, arr_size, sum) 
{ 
	let l, r; 

	// Fix the first element as A[i] 
	for (let i = 0; i < arr_size - 2; i++) 
	{ 

		// Fix the second element as A[j] 
		for (let j = i + 1; j < arr_size - 1; j++) 
		{ 

			// Now look for the third number 
			for (let k = j + 1; k < arr_size; k++) 
			{ 
				if (A[i] + A[j] + A[k] == sum) 
				{ 
					document.write("Triplet is " + A[i] + 
						", " + A[j] + ", " + A[k]); 
					return true; 
				} 
			} 
		} 
	} 

	// If we reach here, then no triplet was found 
	return false; 
} 

/* Driver code */

	// let A = [ 1, 4, 45, 6, 10, 8 ]; 
	// let sum = 2; 
	// let arr_size = A.length; 
	// find3Numbers(A, arr_size, sum); 
	
// This code is contributed by Mayank Tyagi

// write a programer to add 3 Numbers 


// let a = 10;
// let b = 20;
// let c = 30;	
// let d = a + b + c;
// console.log(d);	
 
// write a programer to add 3 Numbers of array 

// how to add 3 numbers of array together in javascript



function add3NumsToSum(arr, sum) {
    let res = false;
    for(let i = 0; i < arr.length - 2; i++) {
        for(let j = i + 1; j < arr.length - 1; j++) {
            for(let k = j + 1; k < arr.length; k++) {
                if(arr[i] + arr[j] + arr[k] === sum) {
                    res = true;
                    break;
                }
            }
            if(res) break;
        }
        if(res) break;
    }
    return res;
}


let arr = [ 1, 4, 45, 6, 10, 8 ]; 
let sum = 20;
let arr_size = arr.length; 
add3NumsToSum(arr, sum);