{
  // Definition for node.
  class Node {
    val: number
    prev: Node | null
    next: Node | null
    child: Node | null
    constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
      this.val = val === undefined ? 0 : val
      this.prev = prev === undefined ? null : prev
      this.next = next === undefined ? null : next
      this.child = child === undefined ? null : child
    }
  }

  function flatten(head: Node | null): Node | null {
    const dfs = (node: Node): Node => {
      let cur = node
      // last node of linked list
      let last = null
      while (cur) {
        let next = cur.next
        if (cur.child) {
          const childLast = dfs(cur.child)
          next = cur.next

          cur.next = cur.child
          cur.child.prev = cur

          if (next !== null) {
            childLast.next = next
            next.prev = childLast
          }

          cur.child = null
          last = childLast
        } else {
          last = cur
        }
        cur = next
      }
      return last
    }
    dfs(head)
    return head
  }
}