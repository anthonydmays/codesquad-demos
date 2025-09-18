#!/usr/bin/env node

/**
 * Data Structures and Algorithms Demo CLI
 * A simple demonstration tool for teaching concepts in lectures
 */

// Example: Stack implementation
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
    console.log(`📚 Pushed: ${item}`);
    this.display();
  }

  pop(): T | undefined {
    const item = this.items.pop();
    console.log(`🗑️  Popped: ${item}`);
    this.display();
    return item;
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  display(): void {
    console.log(`Stack: [${this.items.join(', ')}]`);
    console.log(`Size: ${this.size()}\n`);
  }
}

// Example: Binary Search implementation
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  console.log(`🔍 Searching for ${target} in [${arr.join(', ')}]`);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];
    console.log(`   Checking index ${mid} (value: ${midValue})`);

    if (midValue === target) {
      console.log(`✅ Found ${target} at index ${mid}!\n`);
      return mid;
    }

    if (midValue! < target) {
      left = mid + 1;
      console.log(`   Target is larger, searching right half`);
    } else {
      right = mid - 1;
      console.log(`   Target is smaller, searching left half`);
    }
  }

  console.log(`❌ ${target} not found in array\n`);
  return -1;
}

// Demo functions
function demonstrateStack(): void {
  console.log('='.repeat(50));
  console.log('📚 STACK DEMONSTRATION');
  console.log('='.repeat(50));

  const stack = new Stack<string>();
  
  // Demonstrate stack operations
  stack.push('First');
  stack.push('Second');
  stack.push('Third');
  
  console.log(`Top element: ${stack.peek()}`);
  
  stack.pop();
  stack.pop();
  
  console.log(`Is empty? ${stack.isEmpty()}`);
  console.log('');
}

function demonstrateBinarySearch(): void {
  console.log('='.repeat(50));
  console.log('🔍 BINARY SEARCH DEMONSTRATION');
  console.log('='.repeat(50));

  const sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 67, 78];
  
  // Search for existing elements
  binarySearch(sortedArray, 23);
  binarySearch(sortedArray, 5);
  
  // Search for non-existing element
  binarySearch(sortedArray, 30);
}

// Main execution
function main(): void {
  const args = process.argv.slice(2);
  
  console.log('🎯 Data Structures & Algorithms Demo\n');
  
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log('Usage: npm run demo [demo-name]');
    console.log('');
    console.log('Available demos:');
    console.log('  stack    - Demonstrate stack data structure');
    console.log('  search   - Demonstrate binary search algorithm');
    console.log('  all      - Run all demonstrations');
    console.log('');
    console.log('Examples:');
    console.log('  npm run demo stack');
    console.log('  npm run demo search');
    console.log('  npm run demo all');
    return;
  }

  const demo = args[0]?.toLowerCase();

  switch (demo) {
    case 'stack':
      demonstrateStack();
      break;
    case 'search':
      demonstrateBinarySearch();
      break;
    case 'all':
      demonstrateStack();
      demonstrateBinarySearch();
      break;
    default:
      console.log(`❌ Unknown demo: ${demo}`);
      console.log('Run with --help for available options');
      process.exit(1);
  }
}

// Run the main function
main();