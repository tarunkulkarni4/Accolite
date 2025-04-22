{/*

    ZIG ZAG TRAVERSAL
    
A deque is a data structure that supports adding and removing elements from both ends efficiently (in constant time, O(1)). In this problem, alternating the traversal direction (left-to-right or right-to-left) at each level is crucial, and the deque allows us to do this efficiently.

class Solution {
    ArrayList<Integer> findSpiral(Node root) {
        ArrayList<Integer> result = new ArrayList<>();
        if (root == null) {
            return result;
        }

        // Deque to hold the nodes at each level
        Deque<Node> deque = new LinkedList<>();
        deque.add(root);
        
        // Flag to determine the order of traversal (left-to-right or right-to-left)
        boolean leftToRight = false;

        // Traverse the tree level by level
        while (!deque.isEmpty()) {
            int size = deque.size();  // Number of nodes at the current level
            ArrayList<Integer> level = new ArrayList<>();  // List to store nodes of the current level

            // Process each node at the current level
            for (int i = 0; i < size; i++) {
                Node node = deque.pollFirst();  // Poll the front node from the deque

                if (node != null) {
                    level.add(node.data);  // Add the node's data to the level list

                    // Add children of the current node to the deque for the next level
                    if (node.left != null) {
                        deque.addLast(node.left);  // Left child first
                    }
                    if (node.right != null) {
                        deque.addLast(node.right);  // Right child second
                    }
                }
            }

            // If the current level needs to be added in reverse order, reverse the level array
            if (!leftToRight) {
                Collections.reverse(level);
            }

            // Add the current level's nodes to the result list
            result.addAll(level);
            
            // Toggle the direction for the next level
            leftToRight = !leftToRight;
        }

        return result;
    }
}

 
*/}