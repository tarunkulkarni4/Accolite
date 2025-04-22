{/*

    Given an array arr[] and an integer k where k is smaller than the size of the array, your task is to find the kth smallest element in the given array.

Follow up: Don't solve it using the inbuilt sort function.

Examples :

Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
Output: 7
Explanation: 3rd smallest element in the given array is 7.
Input: arr[] = [2, 3, 1, 20, 15], k = 4 
Output: 15
Explanation: 4th smallest element in the given array is 15.



class Solution {
    public int kthSmallest(int[] arr, int k) {
        Arrays.sort(arr); // O(n log n)
        return arr[k - 1]; // 0-based indexing
    }
}


max-heap:


class Solution {
    public int kthSmallest(int[] arr, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

        for (int num : arr) {
            maxHeap.add(num);
            if (maxHeap.size() > k) {
                maxHeap.poll(); // remove largest
            }
        }

        return maxHeap.peek(); // K-th smallest
    }
}


min-heap:

import java.util.*;

class Solution {
    public int kthSmallest(int[] arr, int k) {
        // Create a Min-Heap to store elements
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        // Add all elements to the Min-Heap
        for (int num : arr) {
            minHeap.add(num);
        }

        // Pop the smallest element k-1 times
        int result = -1;
        for (int i = 0; i < k; i++) {
            result = minHeap.poll();
        }

        return result;
    }
}


*/}