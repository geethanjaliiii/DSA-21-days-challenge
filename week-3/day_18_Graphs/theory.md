# Graph Representations

Graphs can be represented in three common ways:

1. **Adjacency Matrix** (Efficient but can be harder to work with).
2. **Adjacency List** (Simple and widely used).
3. **Edge List** (Less efficient but straightforward).

---

## 1. **Adjacency Matrix**

An adjacency matrix is a 2D array where each cell `(i, j)` indicates whether there is an edge from vertex `i` to vertex `j`. For a directed graph, the direction of edges matters.

### Example: Directed Graph
Graph:
```
A → B → C
↓     ↘
D       D
```

### Adjacency Matrix
```
    A  B  C  D
A [ 0  1  0  1 ]
B [ 0  0  1  1 ]
C [ 0  0  0  0 ]
D [ 0  0  0  0 ]
```

**Advantages:**
- Efficient for dense graphs.
- Easy to check if an edge exists between two vertices.

**Disadvantages:**
- Consumes more memory for sparse graphs.
- Harder to modify dynamically.

---

## 2. **Adjacency List**

An adjacency list represents a graph as a list of lists (or a map/dictionary). Each vertex has a list of all vertices it connects to.

### Example: Directed Graph
Graph:
```
    A → B
    ↓   ↘
    C     D
    ↑   ↙
    E
```

### Adjacency List
```
A → [ B, C ]
B → [ D ]
C → [ E ]
D → [ C ]
E → []
```

**Advantages:**
- Space-efficient for sparse graphs.
- Simple to modify and add new vertices or edges.

**Disadvantages:**
- Checking for the existence of a specific edge is slower compared to an adjacency matrix.

---

## 3. **Edge List**

An edge list represents a graph as a list of all edges. Each edge is stored as a pair `(u, v)` where `u` is the starting vertex and `v` is the ending vertex.

### Example: Directed Graph
Graph:
```
A → B → C
↓     ↘
D       D
```

### Edge List
```
[A, B]
[A, D]
[B, C]
[B, D]
```

**Advantages:**
- Simple representation.
- Useful for algorithms that process edges directly.

**Disadvantages:**
- Inefficient for querying and graph traversal.

---

## Choosing the Right Representation

- Use **Adjacency Matrix** for dense graphs or when edge existence queries are frequent.
- Use **Adjacency List** for sparse graphs or when memory efficiency is critical.
- Use **Edge List** when the focus is on edge operations or when working with dynamic edge sets.

