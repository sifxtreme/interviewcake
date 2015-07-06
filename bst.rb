class Node
	include Comparable

	attr_accessor :value, :left, :right

	def initialize(val)
		@value = val
	end

	def <=>(other)
		self.value <=> other.value
	end

	def insert(node)
		if node < self
			if !left
				self.left = node
			else
				left.insert(node)
			end
		elsif node > self
			if !right
				self.right = node
			else
				right.insert(node)
			end
		end
	end

	def display
		left.display if left
		puts self.value
		right.display if right
	end

end

class BSTree
	attr_accessor :root

	def initialize(val)
		@root = Node.new(val)
	end

	def insert(val)
		root.insert( Node.new(val) )
	end

	def display
		root.display
	end
end


tree = BSTree.new(10)
tree.insert(15)
tree.insert(5)
tree.insert(2)
tree.insert(3)

puts tree.inspect # => 5,10,15
