import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";
import { RxCross1 } from "react-icons/rx";

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  targetPosition,
  sourcePosition,
}) => {
  const { setEdges } = useReactFlow();
  const handleEdgeDelete = () => {
    setEdges((prevEdges) => prevEdges.filter((edge) => edge?.id !== id));
  };
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    targetPosition,
    sourcePosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <button
          className="h-8 w-8 absolute opacity-30 hover:opacity-100 nodrag nopans"
          style={{
            transform: `translate(-40%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          onClick={handleEdgeDelete}
        >
          <RxCross1 color="red"/>
        </button>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
