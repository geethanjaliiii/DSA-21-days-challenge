# Queue: Theory and Concepts

## Introduction to Queues
A **Queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle. This means that the first element added to the queue will be the first one to be removed.

### Key Characteristics:
1. **Order**: Maintains the sequence in which elements are added.
2. **Operations**:
   - **Enqueue**: Add an element to the end of the queue.
   - **Dequeue**: Remove an element from the front of the queue.
3. **Access Restriction**: Elements are only added at the rear and removed from the front.

---

## Types of Queues

### 1. **Simple Queue**
- Follows the FIFO principle.
- Operations:
  - Enqueue at the rear.
  - Dequeue from the front.

### 2. **Circular Queue**
- The rear of the queue connects to the front to form a circle.
- Efficiently utilizes memory by reusing empty spaces after dequeue operations.

### 3. **Priority Queue**
- Each element has a priority.
- Elements are dequeued based on priority rather than the order of arrival.

### 4. **Double-Ended Queue (Deque)**
- Allows insertion and deletion at both the front and rear.
- Types:
  - **Input-restricted deque**: Insertion allowed only at one end.
  - **Output-restricted deque**: Deletion allowed only at one end.

---

## Queue Operations

1. **Enqueue (Insertion)**:
   - Add an element to the rear of the queue.
   - Example:
     - Queue: [1, 2, 3]
     - Enqueue(4)
     - New Queue: [1, 2, 3, 4]

2. **Dequeue (Deletion)**:
   - Remove an element from the front of the queue.
   - Example:
     - Queue: [1, 2, 3]
     - Dequeue()
     - New Queue: [2, 3]

3. **Peek/Front**:
   - Retrieve the element at the front without removing it.

4. **IsEmpty**:
   - Check if the queue is empty.

5. **IsFull**:
   - Check if the queue has reached its capacity (for fixed-size implementations).

---

## Applications of Queues

1. **Task Scheduling**:
   - Operating system process scheduling (e.g., Round Robin scheduling).

2. **Data Transfer**:
   - Network packets are managed using queues.

3. **Breadth-First Search (BFS)**:
   - Used in graph traversal algorithms.

4. **Print Queue**:
   - Managing tasks in a printer.

5. **Real-Time Systems**:
   - Handling requests in a service system (e.g., customer service).

---

## Advantages of Queues
- **Efficiency**: Ensures ordered processing of elements.
- **Versatility**: Adaptable to various use cases like BFS, task scheduling, and buffering.

## Limitations of Queues
- **Limited Access**: Only the front and rear can be accessed directly.
- **Fixed Size**: For static arrays, the size must be predetermined, leading to potential wastage or overflow.

---

## Summary
Queues are fundamental data structures that provide organized access to elements using the FIFO principle. Their versatility and efficiency make them essential for solving real-world problems in computing and other fields.

