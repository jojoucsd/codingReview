/*
You're given three inputs, all of which are instances of an "OrgChart" class that that have a 
"directReports" property pointing to their direct reports. The first input is the top manager
in an organizational chart (i.e., the only instance that isn't anybody else's direct report) ,
and the other two inputs are reports in the organizational chart. The two report are guaranteed to
be distinct.

Write a function that returns the lowest common manager to the two reports

Sample Input

topManager = Node A
reportOne = Node E
reportTwo = Node I

        A
       / \
      B   C
    /  \ /  \
   D   E F   G 
  / \  
 H   I

 Sample Output
 Node B
*/
const sampleInput = {
    "topManager": "A",
    "reportOne": "E",
    "reportTwo": "I",
    "orgChart": {
      "nodes": [
        {"directReports": ["B", "C"], "id": "A", "name": "A"},
        {"directReports": ["D", "E"], "id": "B", "name": "B"},
        {"directReports": ["F", "G"], "id": "C", "name": "C"},
        {"directReports": ["H", "I"], "id": "D", "name": "D"},
        {"directReports": [], "id": "E", "name": "E"},
        {"directReports": [], "id": "F", "name": "F"},
        {"directReports": [], "id": "G", "name": "G"},
        {"directReports": [], "id": "H", "name": "H"},
        {"directReports": [], "id": "I", "name": "I"}
      ]
    }
  }
getLowestCommonManager = (topManager, reportOne, reportTwo) =>{
return getOrgInfo(topManager, reportOne, reportTwo).getLowestCommonManager
}

getOrgInfo = (manager, reportOne, reportTwo) =>{
    let numImportantReports = 0
    for (const directReport of manager.directReports){
        const orgInfo = getOrgInfo(directReport, reportOne, reportTwo)
        if (!!orgInfo.lowestCommonManger) return orgInfo
        numImportantReports += orgInfo.numImportantReports
    }
    if (manager === reportOne || manager === reportTwo) numImportantReports++
    const lowestCommonManger = numImportantReports === 2 ? manager : null
    return { lowestCommonManger, numImportantReports}
}

class OrgChart {
    constructor(name){
        this.name = name;
        this.directReports = []
    }
}

const input = new OrgChart(sampleInput)
console.log(input)
// getLowestCommonManager(input.name.topManager,input.name.reportOne,input.name.reportTwo)