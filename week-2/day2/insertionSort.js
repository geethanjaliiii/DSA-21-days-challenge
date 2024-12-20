function insertionSort(arr){
    //we need to loops
    //1 st go from start to end
    //2 nd  for shifting elem to right
    let n=arr.length
    for(let i=1;i<n;i++){
        let current=arr[i];//safely stored current elem
        let j=i-1
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j]//move larger elem one pos to right
            j--//for placing current in the pos just after this
        }
        //put current to the right pos after sorting all larger elements
        arr[j+1]=current
    }
    return arr
    }
    console.log(insertionSort([4,2,3,1]));

    //time complexity
    //best-o(n)
    //avg & worst-o(n^2)

    