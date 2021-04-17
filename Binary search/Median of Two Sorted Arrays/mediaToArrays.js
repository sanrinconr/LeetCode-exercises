/**
 * UTILS
 */
class Node {
	constructor(value, left, rigth) {
		this.value = value;
		this.left = left
		this.rigth = rigth
	}
}
class Tree {
	constructor() {
		this.root = null;
	}
	insert(data) {

		let newNode = new Node(data, null, null)
		if (this.root === null) {
			this.root = newNode
		} else {
			let parentNode = findPosition(this, data)
			if (data > parentNode.value) {
				parentNode.rigth = newNode
			} else if (data <= parentNode.value) {
				parentNode.left = newNode
			}
		}

		/**
		 * Find the parent node of the new actual node
		 */
		function findPosition(tree, data) {
			let target = tree.root
			while (target !== null) {
				if (data > target.value) {
					//Exist other target or this is?
					if (target.rigth !== null) {
						target = target.rigth
					} else {
						break
					}
				} else if (data <= target.value) {
					//Exist other target or this is?
					if (target.left !== null) {
						target = target.left
					} else {
						break
					}
				}
			}
			return target
		}
	}
	inorden() {
		let array = []
		inordenHelper(this.root)

		function inordenHelper(root) {
			if (root !== null) {
				inordenHelper(root.left)
				array.push(root.value)
				inordenHelper(root.rigth)
			}
		}
		return array
	}
}

function getMedium(array) {
	//Cant elements
	let len = array.length

	//If pairs
	if (len % 2 === 0) {
		len = len - 1
		return (array[parseInt(len / 2)] + array[parseInt(1 + len / 2)]) / 2
		//If impair
	} else {
		len = len - 1
		return (array[len / 2])
	}
}


/**
 * Function called
 */
var findMedianSortedArrays = function (nums1, nums2) {
	let tree = new Tree()
	let bestLength = nums1.length;
	if (nums2.length > bestLength) {
		bestLength = nums2.length
	}

	for (let i = 0; i < bestLength; i++) {
		if (nums1[i] !== undefined) {
			tree.insert(nums1[i])
		}
		if (nums2[i] !== undefined) {
			tree.insert(nums2[i])
		}
	}
	const array = tree.inorden()
	const medium = getMedium(array)
	return medium
};

module.exports = findMedianSortedArrays