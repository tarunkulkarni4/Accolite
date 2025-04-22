{/*
  Given an integer array arr, return all the unique pairs [arr[i], arr[j]] such that i != j and arr[i] + arr[j] == 0.

Note: The pairs must be returned in sorted order, the solution array should also be sorted, and the answer must not contain any duplicate pairs.

Examples:

Input: arr = [-1, 0, 1, 2, -1, -4]
Output: [[-1, 1]]
Explanation: arr[0] + arr[2] = (-1)+ 1 = 0.
arr[2] + arr[4] = 1 + (-1) = 0.
The distinct pair are [-1,1].

class Solution {
    public static ArrayList<ArrayList<Integer>> getPairs(int[] arr) {
        ArrayList<ArrayList<Integer>> result = new ArrayList<>();
        Arrays.sort(arr);
        int n = arr.length;
        HashSet<String> seen = new HashSet<>(); // To avoid duplicate pairs

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (arr[i] + arr[j] == 0) {
                    String pairKey = arr[i] + "," + arr[j];
                    if (!seen.contains(pairKey)) {
                        ArrayList<Integer> pair = new ArrayList<>();
                        pair.add(arr[i]);
                        pair.add(arr[j]);
                        result.add(pair);
                        seen.add(pairKey);
                    }
                }
            }
        }

        return result;
    }

}

using two pointer:

import java.util.*;

class Solution {
    public List<List<Integer>> twoSum(int[] arr) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(arr); // Sort the array
        
        int left = 0;
        int right = arr.length - 1;
        
        while (left < right) {
            int sum = arr[left] + arr[right];
            
            if (sum == 0) {
                result.add(Arrays.asList(arr[left], arr[right]));
                
                // Move both pointers to skip duplicates
                while (left < right && arr[left] == arr[left + 1]) left++;
                while (left < right && arr[right] == arr[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;  // Move left pointer to the right to increase the sum
            } else {
                right--; // Move right pointer to the left to decrease the sum
            }
        }
        
        return result;
    }
}

*/}