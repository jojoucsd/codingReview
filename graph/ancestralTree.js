/*

*/

class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
  
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    // Write your code here.
      const depthOne = getDescendantDepth(descendantOne, topAncestor)
      const depthTwo = getDescendantDepth(descendantTwo, topAncestor)
      return depthOne > depthTwo ? backtrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo) : 
      backtrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne)
  }
  
  getDescendantDepth = (descendant, topAncestor) =>{
      let depth = 0
       while (descendant !== topAncestor) {
          descendant = descendant.ancestor
          depth++
       }
      return depth
  }
  
  backtrackAncestralTree = (lowerDescendant, higherDescendant, diff) =>{
      while (diff > 0) {
          lowerDescendant = lowerDescendant.ancestor;
          diff--
      }
      while (lowerDescendant !== higherDescendant) {
          lowerDescendant = lowerDescendant.ancestor;
          higherDescendant = higherDescendant.ancestor;
      }
      return lowerDescendant
  }

