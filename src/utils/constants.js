import { CustomEdge, DestinationNode, SourceNode } from "../components";

export const initialNodes = [
  {
    id: "1",
    position: { x: -500, y: 100 },
    data: { title: "Source 1" },
    type: "source-node",
  },
  {
    id: "2",
    position: { x: -100, y: 200 },
    data: { title: "Destination 1" },
    type: "destination-node",
  },
];

export const initialEdges = [];

export const nodeTypes = {
  "source-node": SourceNode,
  "destination-node": DestinationNode,
};
export const edgeTypes = {
  "custom-edge": CustomEdge,
};


