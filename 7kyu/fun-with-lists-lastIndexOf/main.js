// Implement the method lastIndexOf (last_index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

// For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }

// Note: the list may be null and can hold any type of value.

// Good luck!

function lastIndexOf(head, value) {
    if (head === null) {
        console.log(-1)
        return -1
    }
    console.log(head)
    if (head.includes(value) === true) {
        let search = (element) => element === value
    let reverseHead = head.reverse();

    let revPos = (reverseHead.findIndex(search))

    let actualPos
    if (revPos === 0) {
        actualPos = head.length - 1
    } else {
        actualPos = head.length - revPos - 1
    }

    console.log(`array length: ${head.length}, therefor origin index of value: ${value} is: ${actualPos}`)

    return actualPos

    } else {
        // if value is not found, return -1
        console.log(-1)
        return -1;
    }
}

// lastIndexOf([1,2,3], 1)

// lastIndexOf([1,2,3], 4)

lastIndexOf(['one','alpha','ichi', 'one'], 'one')

lastIndexOf(null, '17');