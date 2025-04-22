{/*

    Given the head of a linked list and the number k, Your task is to find the kth node from the end. If k is more than the number of nodes, then the output should be -1.

Examples

Input: LinkedList: 1->2->3->4->5->6->7->8->9, k = 2
Output: 8
Explanation: The given linked list is 1->2->3->4->5->6->7->8->9. The 2nd node from end is 8.

class Solution {

    // Function to find the data of kth node from the end of a linked list.
    int getKthFromLast(Node head, int k) {
        // Step 1: Initialize two pointers pointing to the head
        Node first = head;
        Node second = head;

        // Step 2: Move the 'first' pointer K steps ahead
        for (int i = 0; i < k; i++) {
            if (first == null) {
                // If K is greater than the length of the list
                return -1;
            }
            first = first.next;
        }

        // Step 3: Move both pointers until 'first' reaches the end
        while (first != null) {
            first = first.next;
            second = second.next;
        }

        // Step 4: 'second' now points to the Kth node from the end
        return second.data; // return the data of that node
    }
}

*/}