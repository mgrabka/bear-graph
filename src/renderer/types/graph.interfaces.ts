type NodeID = string;

export interface Node {
  id: NodeID;
}

export interface Link {
  source: NodeID;
  target: NodeID;
}

export interface Graph {
  nodes: Node[];
  links: Link[];
}
