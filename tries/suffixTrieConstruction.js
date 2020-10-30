/*
Write a SuffixTrie class for a Suffix-Trie-like data structure. The class should 
have a root property set to be the root node of the trie and should support:
    - Creating the trie from a string; this will be done by calling the 
    populateSuffixTrieFrom method upon class instantiation, which should populate the root
    of the class

    - Searching for strings in the trie.

Noe that every string added to the tries should end with the special endSymbol
character: "*".

Sample Output(for creation)
    {
        "c" : {"*" : true},
        "b" : {
            "c": { "*": true},
            "a": {"b" : {"c":{"*" : true}}},
        },
        "a" : {"b" : {"c" : {"*" : true}}},
    }

Sample Input
 string = "abc"
Sample Output
 true
*/

class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    populateSuffixTrieFrom(string) {
      // Write your code here.
          for (let i = 0; i < string.length; i++){
              this.insertSubstringStartingAt(i, string)
          }
    }
      insertSubstringStartingAt( i , string) {
          let node = this.root
          for (let j = i; j < string.length; j++){
              const letter = string[j]
              if(!(letter in node)) node[letter] = {}
              node = node[letter]
          }
          node[this.endSymbol] = true
      }
    contains(string) {
      // Write your code here.
          let node =this.root
          for (const letter of string) {
              if (!(letter in node)) return false;
              node = node[letter]
          }
          return this.endSymbol in node;
    }
  }