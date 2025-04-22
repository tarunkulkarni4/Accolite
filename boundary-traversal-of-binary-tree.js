{/*
  
Step 1: Root node (if not a leaf)
Step 2: Left boundary (excluding leaves)
Step 3: All leaf nodes (from left to right)
Step 4: Right boundary (excluding leaves, printed bottom-up)

Complexity	Value
Time	O(N)
Space	O(H) aux + O(N) result

    
    class Node {
    int data;
    Node left, right;

    Node(int item) {
        data = item;
        left = right = null;
    }
}

class Solution {
    // Main function to perform boundary traversal
    ArrayList<Integer> boundaryTraversal(Node root) {
        ArrayList<Integer> res = new ArrayList<>();
        if (root == null) return res;

        // Step 1: Add root if it's not a leaf
        if (!isLeaf(root)) {
            res.add(root.data);
        }

        // Step 2: Add left boundary (excluding leaves)
        addLeftBoundary(root.left, res);

        // Step 3: Add all leaf nodes (left to right)
        addLeaves(root, res);

        // Step 4: Add right boundary (excluding leaves, in reverse order)
        addRightBoundary(root.right, res);

        return res;
    }

    // Step 2: Traverse left boundary
    private void addLeftBoundary(Node node, ArrayList<Integer> res) {
        while (node != null) {
            if (!isLeaf(node)) {
                res.add(node.data);
            }
            node = (node.left != null) ? node.left : node.right;
        }
    }

    // Step 3: Add leaf nodes using DFS
    private void addLeaves(Node node, ArrayList<Integer> res) {
        if (node == null) return;
        if (isLeaf(node)) {
            res.add(node.data);
            return;
        }
        addLeaves(node.left, res);
        addLeaves(node.right, res);
    }

    // Step 4: Traverse right boundary in reverse order
    private void addRightBoundary(Node node, ArrayList<Integer> res) {
        Stack<Integer> stack = new Stack<>();
        while (node != null) {
            if (!isLeaf(node)) {
                stack.push(node.data);
            }
            node = (node.right != null) ? node.right : node.left;
        }

        while (!stack.isEmpty()) {
            res.add(stack.pop());
        }
    }

    // Utility: Check if node is leaf
    private boolean isLeaf(Node node) {
        return (node

*/}