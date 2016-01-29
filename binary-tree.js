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
		return this.containsWithNodeParam(this.root, data);
	}

	containsWithNodeParam(node, data) {
		if (node == null) {
			return false;
		}
		return node.data == data || 
			   this.containsWithNodeParam(node.left, data) ||
			   this.containsWithNodeParam(node.right, data);
		
		
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
