{/*

    Queue is inuff ,if input is large then priority queue

    class Solution {
    public ArrayList<Integer> nodesAtOddLevels(Node root) {
        // List to store the result
        ArrayList<Integer> result = new ArrayList<>();
        
        // Edge case: if the tree is empty
        if (root == null) {
            return result;
        }

        // Priority Queue (Min Heap) to store the nodes in sorted order
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        // Queue for level-order traversal
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        // Variable to track the level
        int level = 1;

        // Perform level-order traversal
        while (!queue.isEmpty()) {
            int size = queue.size();
            ArrayList<Integer> currentLevelNodes = new ArrayList<>();
            
            // Process each node at the current level
            for (int i = 0; i < size; i++) {
                Node node = queue.poll();
                
                // Add node's data to the list for current level
                currentLevelNodes.add(node.data);
                
                // Add children to the queue
                if (node.left != null) {
                    queue.add(node.left);
                }
                if (node.right != null) {
                    queue.add(node.right);
                }
            }
            
            // If the current level is odd, add the nodes to the priority queue
            if (level % 2 != 0) {
                pq.addAll(currentLevelNodes);
            }

            // Increment the level after processing the current level
            level++;
        }

        // Transfer the sorted nodes from the priority queue to the result list
        while (!pq.isEmpty()) {
            result.add(pq.poll());
        }

        return result;
    }
}

    
*/}