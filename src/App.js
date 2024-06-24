import ReactFlow, {
  Background,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { AddNodesMenu } from "./components";
import {
  initialNodes,
  initialEdges,
  nodeTypes,
  edgeTypes,
} from "./utils/constants";
const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (connection) => {
    const edge = {
      ...connection,
      animated: true,
      id: `${edges.length + 1}`,
      type: "custom-edge",
    };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  };
  return (
    <div className="h-screen w-screen font-spaceGrotesk">
      <AddNodesMenu setNodes={setNodes} />
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default App;
