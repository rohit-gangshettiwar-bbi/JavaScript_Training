class arrayManipulation{
    getdata() {
        let arr = [4, 2, 7, 4, 1, 9, 7];
        console.log(arr);
        let sum = 0;
        let avg;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        console.log(sum);
        console.log(sum / arr.length);
        console.log(Math.max(...arr));
        console.log(Math.min(...arr));
        let set = new Set(arr);
        console.log(...set);
        const sorted = arr.sort();
        console.log(...sorted);
      }
    }
    const obj = new arrayManipulation();
    obj.getdata();