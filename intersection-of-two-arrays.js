{/*
    Given two unsorted integer arrays a[] and b[] each consisting of distinct elements, the task is to return the count of elements in the intersection (or common elements) of the two arrays.

Intersection of two arrays can be defined as the set containing distinct common elements between the two arrays. 

Examples:

Input: a[] = [89, 24, 75, 11, 23], b[] = [89, 2, 4]
Output: 1
Explanation: 89 is the only element in the intersection of two arrays.
Input: a[] = [1, 2, 4, 3, 5, 6], b[] = [3, 4, 5, 6, 7]
Output: 4
Explanation: 3, 4, 5, and 6 are the elements in the intersection of two arrays.
Input: a[] = [20, 10, 30, 50, 40], b[] = [15, 25, 30, 20, 35]
Output: 2
Explanation: 20 and 30 are the elements in the intersection of the two arrays.

BruteForce:

class Solution {
    public static int numberofElementsInIntersection(int[] a, int[] b) {
        Set<Integer> set = new HashSet<>();

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < b.length; j++) {
                if (a[i] == b[j]) {
                    set.add(a[i]); // Only add once to avoid duplicates
                    break; // Move to next element in a[]
                }
            }
        }

        return set.size();
    }

import java.util.*;

class Solution {
    public static int countIntersection(int[] a, int[] b) {
        Set<Integer> set = new HashSet<>();
        int count = 0;

        // Step 1: Add all elements of array 'a' to the HashSet
        for (int num : a) {
            set.add(num);
        }

        // Step 2: Check if elements of 'b' are in the HashSet
        for (int num : b) {
            if (set.contains(num)) {
                count++;           // Common element found
                set.remove(num);   // Remove to ensure distinct count
            }
        }

        return count;
    }
}

using two pointer:



class Solution {
    public static int numberofElementsInIntersection(int[] a, int[] b) {
        Arrays.sort(a);
        Arrays.sort(b);
        
        int i = 0, j = 0;
        Set<Integer> intersection = new HashSet<>();

        while (i < a.length && j < b.length) {
            if (a[i] == b[j]) {
                intersection.add(a[i]);
                i++;
                j++;
            } else if (a[i] < b[j]) {
                i++;
            } else {
                j++;
            }
        }

        return intersection.size();
    }
}



*/}