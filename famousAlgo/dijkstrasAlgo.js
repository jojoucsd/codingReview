/*

*/

dijkstrasAlgo = (start, edges) => {
    const numberOfVertices = edges.length;

    const minDistances = []
    for (let i = 0; i < numberOfVertices; i ++){
        minDistances.push(Infinity)
    }
    minDistances[start] = 0

    const visited = new Set()

    while(visited.size != numberOfVertices) {
        const [ vertex, currentMinDistance] = getVertexWithMinDistance(minDistances, visited)

        if (currentMinDistance === Infinity){
            break
        }
        visited.add(vertex)

        for (const edge of edges[vertex]) {
            const [destination, distanceToDestination] = edge;

            if (visited.has(destination)) {
                continue;
            }
            
            const newPathDistance = currentMinDistance + distanceToDestination
            const currentDestinationDistance = minDistances[destination]

            if( newPathDistance < currentDestinationDistance) {
                minDistances[destination] = newPathDistance
            }
        }
    }
    return minDistances.map( x => (x === Infinity ? -1 : x))
}

getVertexWithMinDistance = (distances, visited) =>{
    let currentMinDistance = Infinity;
    let vertex = -1 

    for (const [vertexIdx, distance] of distances.entries()) {
        if (visited.has(vertexIdx)){
            continue;
        }
        if (distance <= currentMinDistance) {
            vertex = vertexIdx
            currentMinDistance = distance
        }
    }
    return [vertex, currentMinDistance]
}

const start = 0
const edges = [[[1, 7]], [[2, 6], [3, 20], [4, 3]], [[3, 14]], [[4, 2]], [], []]

console.log(dijkstrasAlgo(start, edges))