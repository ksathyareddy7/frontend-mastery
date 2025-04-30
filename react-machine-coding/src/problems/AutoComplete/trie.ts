// Trie Node class
class TrieNode {
  children: {};
  isEndOfWord: boolean;
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

// Trie class
export class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  searchPrefix(prefix) {
    let current = this.root;
    for (let char of prefix) {
      if (!current.children[char]) {
        return null;
      }
      current = current.children[char];
    }
    return current;
  }

  autoComplete(prefix) {
    const node = this.searchPrefix(prefix);
    const results: string[] = [];
    if (!node) return results;

    const dfs = (currentNode, path) => {
      if (currentNode.isEndOfWord) {
        results.push(path);
      }
      for (let char in currentNode.children) {
        dfs(currentNode.children[char], path + char);
      }
    };

    dfs(node, prefix);
    return results;
  }
}
