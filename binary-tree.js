'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
		
	}

	insert(data) {
		this.root = this.insertUsingRecursion(this.root, data);
	}

	insertUsingRecursion(node, data) {
		if  (node == null) {
			return new Node (data, null, null);
		} else if (node.data > data) {
			node.left = this.insertUsingRecursion(node.left, data);
		} else {
			node.right = this.insertUsingRecursion(node.right, data)
		}
		return node;
	}

	contains(data) {
		return this.containsUsingRecursion(this.root, data);
	}

	containsUsingRecursion(node, data) {
		if (node == null) {
			return false;
		}
		return node.data == data || 
			   this.containsUsingRecursion(node.left, data) ||
			   this.containsUsingRecursion(node.right, data);
			
	}

	minimum (node) {
		if  (node.left == null) {
			return node;
		}
		return minimum(node.left);
	}

	remove(data) {
		this.root = this.removeUsingRecursion(this.root, data);
	}



	removeUsingRecursion(node, data) {
		if (node == null) {
			return node; 
		}
		if (node.data > data) {
			node.left = this.removeUsingRecursion(node.left, data);
		} else if (node.data < data) {
			node.right = this.removeUsingRecursion(node.right, data);
		} else if (node.left != null && node.right != null && node.data == data) {
			node.data = this.minimum(node.right).data;
			node.right = this.removeUsingRecursion(node.right, node.right.data);
		} else if (node.left != null && node.data == data) {
			node = node.left;
		} else if (node.data == data){
			node = node.right;
		}
		return node
	}

	size() {
		if (this.root == null) {
			return 0;
		}

		this.sizeUsingRecursion(this.root, 0);

		var tempCounter = this.counter;
		this.counter = 0;
		return tempCounter;

	}

	sizeUsingRecursion(node){
		if (node != null) {
			this.counter++;
			this.sizeUsingRecursion(node.left);
			this.sizeUsingRecursion(node.right);
		} 
	}

	isEmpty() {
		if (this.root != null){
			return false;
		} else {
			return true;
		}
	}
}
