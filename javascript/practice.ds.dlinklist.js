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

const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}


// Complete the sortedInsert function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
  var curr = head;
  if (!head || head.data > data) {
    var node = new DoublyLinkedListNode();
    node.data = data;
    node.prev = null;
    node.next = head;
    head = node;
    return head;
  }
  while(curr.next && curr.next.data <= data) {
    curr = curr.next;
  }
  if (!curr.next) {
    curr.next = new DoublyLinkedListNode();
    curr.next.data = data;
    curr.next.prev = curr;
  } else {
    var node = new DoublyLinkedListNode();
    node.data = data;
    node.prev = curr;
    node.next = curr.next;
    curr.next = node;
  }
  
  return head;
}


function reverse(head) {
  if (!head || !head.next) return head;
  var curr = head;
  var prev = null
  
  while(curr.next) {
    var tmp = curr.next;
    curr.next = prev;
    curr.prev = tmp;
    prev = curr;
    curr = curr.prev;
  }
  curr.next = prev;
  curr.prev = null;
  head = curr;
  return head;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new DoublyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        const data = parseInt(readLine(), 10);

        let llist1 = sortedInsert(llist.head, data);

        printDoublyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}

exports.reverse = reverse;
exports.sortedInsert = sortedInsert;
