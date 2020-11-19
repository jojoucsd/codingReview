/*

*/
const inputArr = [   
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0]
]
const inputSource = 3

waterfallStreams = (array, source) =>{
    let rowAbove = [...array[0]]
    rowAbove[source] = -1;

    for (let row = 1; row <array.length; row++){
        const currentRow = [...array[row]]
        for (let i = 0 ; i < rowAbove.length; i++){
            const valueAbove = rowAbove[i]
            
            const hasWaterAbove = valueAbove < 0
            const hasBlock = currentRow[i] === 1

            if (!hasWaterAbove) continue;
            if (!hasBlock) {
                currentRow[i] += valueAbove;
                continue;
            }
            const splitWater = valueAbove / 2

            let rightIdx = i
            while(rightIdx +1 < rowAbove.length) {
                rightIdx ++
                if(rowAbove[rightIdx] === 1) break
                if(currentRow[rightIdx] !==1) {
                    currentRow[rightIdx] += splitWater;
                    break
                }
            }
            let leftIdx = i
            while(leftIdx -1 >=0){
                leftIdx--;
                if (rowAbove[leftIdx] === 1) break
                if (currentRow[leftIdx] !==1) {
                    currentRow[leftIdx] += splitWater;
                    break
                }
            }
        }
        rowAbove = currentRow
    }
    const finalPercentage = rowAbove.map(num => (num < 0 ? num * -100 : num))
    console.log(finalPercentage)
}

waterfallStreams(inputArr, inputSource)