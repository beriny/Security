/***
**param
*/


var addTwoNum = function (l1, l2) {
    var sum = l1 + l2
    return sum

}

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode pre = new ListNode(0);
        ListNode cur = pre;
        int carry = 0;
        while(l1 != null || l2 != null) {
            int x = l1 == null ? 0 : l1.val;
            int y = l2 == null ? 0 : l2.val;
            int sum = x + y + carry;

            carry = sum / 10;
            sum = sum % 10;
            cur.next = new ListNode(sum);

            cur = cur.next;
            if(l1 != null)
                l1 = l1.next;
            if(l2 != null)
                l2 = l2.next;
        }
        if(carry == 1) {
            cur.next = new ListNode(carry);
        }
        return pre.next;
    }
}

class Solution {
public:
ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode* head = new ListNode(-1);
    ListNode* node = head;
    int carry = 0;
    while (l1 || l2) {
        int val1 = 0, val2 = 0;
        if (l1 != nullptr) {
            val1 = l1->val;
            l1 = l1->next;
        }
        if (l2 != nullptr) {
            val2 = l2->val;
            l2 = l2->next;
        }
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        node->next = new ListNode(sum % 10);
        node = node->next;
    }
    if (carry != 0) node->next = new ListNode(carry);
    return head->next;
}
};
