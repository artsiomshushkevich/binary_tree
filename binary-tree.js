'use strict';

class BinaryTree {
	constructor() {
		this.root = null;	
	}

	insert(data) {
		this.root = this.insertWithNodeParam(this.root, data);
	}

	insertWithNodeParam(node, data) {
		if  (node == null) {
			return new Node (data, null, null);
		} else if (node.data > data) {
			node.left = this.insertWithNodeParam(node.left, data);
		} else {
			node.right = this.insertWithNodeParam(node.right, data)
		}
		return node;
	}

	contains(data) {
	}

	containsWithNodeParam(node, data) {

	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {
		if (this.root != null){
			return false;
		} else {
			return true;
		}
	}
}
