'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

function reversePrint(head) {
  if (!head) return;
  reversePrint(head.next);
  console.log(head.data);
}

function reverse(head) {
  if (!head || !head.next) return head;
  var prev = head;
  var curr = head.next;
  var next = head.next.next;
  head.next = null;
  curr.next = head;
  while (next) {
    prev = curr;
    curr = next;
    next = next.next;
    curr.next = prev;
  }
  curr.next = prev;
  head = curr;
  return head;
}


function deleteNode(head, position) {
    if (!position){ return head.next; }
    head.next = deleteNode(head.next, position-1);
    return head;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
        llist.insertNode(llistItem);
    }

    const position = parseInt(readLine(), 10);

    let llist1 = deleteNode(llist.head, position);

    printSinglyLinkedList(llist1, " ", ws)
    ws.write("\n");

    ws.end();
}

function compareLists(llist1, llist2) {
  if (llist1 === null || llist2 === null) {
    if (llist1) return 0;
    if (llist2) return 0;
    return 1;
  }
  if (llist1.data == llist2.data) {
    return compareLists(llist1.next, llist2.next);
  } else {
    return 0;
  }
}

exports.deleteNode = deleteNode;
exports.reversePrint = reversePrint;
exports.reverse = reverse;
exports.compareLists = compareLists;
