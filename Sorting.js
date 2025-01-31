let arr = [3,6,3,7,37,47,58,3,837,58,85,4];

function BubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr)
}

// BubbleSort(arr)

function SelectionSort(arr){
    for(let i = 0; i < arr.length;i++){
        let smallest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < smallest){
                smallest = j;
            }
        }
        if(smallest !== i){
            let temp = arr[smallest];
            arr[smallest] = arr[i]
            arr[i] = temp;
        }
    }
    console.log(arr)
}

// SelectionSort(arr)

function InsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let j = i - 1;
        let key = arr[i];
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    console.log(arr)
}
// InsertionSort(arr)


function MergeSort(arr){
    if(arr.length <= 1)return arr;

    // split the array into two Half
    let mid = Math.floor(arr.length /2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    let sortedleft = MergeSort(left);
    let sortedright = MergeSort(right);

    return Merge(sortedleft,sortedright);
}
function Merge(arr1,arr2){
    let left = 0;
    let right = 0;
    let sortedarray = [];

    while(left < arr1.length && right < arr2.length){
        if(arr1[left] < arr2[right]){
            sortedarray.push(arr1[left]);
            left++;
        }
        else{
            sortedarray.push(arr2[right])
                right++;
            }
        }
    sortedarray.push(...arr1.slice(left));
    sortedarray.push(...arr2.slice(right))

    console.log(sortedarray);
    return sortedarray;
}
// MergeSort(arr);

function quickSort(arr){
    if(arr.length <= 1)return arr;

    let pivot = arr[arr.length - 1];
    let left = []
    let right = []

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}

// console.log(quickSort(arr))

function HeapSort(arr){
    let length = arr.length;

    // Build the heap

    for(let i = Math.floor(length / 2);i >=0; i--){
        Heapify(arr,length,i);
    }

    // Extract the element one by one from the heap

    for(let i = length - 1; i > 0;i--){
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        Heapify(arr,i,0)
    }
    return arr;
}
function Heapify(arr,length1,root){
    let left = root * 2 + 1;
    let right = root * 2 + 2;
    let largest = root;
    // compare the left child
    if(left < length1 && arr[left] > arr[largest]){
        largest = left
    }
    // compare the right child
    if(right < length1 && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest !== root){
        let temp = arr[largest];
        arr[largest] = arr[root];
        arr[root] = temp;

        Heapify(arr,length1,largest);
    }
}

// console.log(HeapSort(arr))