'use strict'	;

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		let recursiveInsert = (node, data) => {
			if  (node == null) {
				return new Node (data, null, null);
			} else if (node.data > data) {
				node.left = recursiveInsert(node.left, data);
			} else {
				node.right = recursiveInsert(node.right, data)
			}

			return node;
		};

		this.root = recursiveInsert(this.root, data);
	}

	contains(data) {
		let recursiveContains = (node, data) => {
			if (node == null) {
				return false;
			}
				return node.data == data || 
					   recursiveContains(node.left, data) ||
					   recursiveContains(node.right, data);
		};

		return recursiveContains(this.root, data);
	}

	minimum (node) {
		if  (node.left == null) {
			return node;
		}

		return this.minimum(node.left);
	}

	remove(data) {
		let recursiveRemove = (node, data) => {
			if (node == null) {
				return node; 
			}

			if (node.data > data) {
				node.left = recursiveRemove(node.left, data);
			} else if (node.data < data) {
				node.right = recursiveRemove(node.right, data);
			} else if (node.left != null && node.right != null) {
				node.data = this.minimum(node.right).data;
				node.right = recursiveRemove(node.right, node.right.data);
			} else if (node.left != null) {
				node = node.left;
			} else {
				node = node.right;
			};

			return node
		}

		this.root = recursiveRemove(this.root, data);
	}

	size() {
		let recursiveSize = (node) => {
			let count = 0;

			if (node !== null) {
				count = 1 + recursiveSize(node.left) + recursiveSize(node.right);
			}

			return count;
		};

		return recursiveSize(this.root);
	}

	isEmpty() {
		if (this.root != null){
			return false;
		}

		return true;
	}
}
