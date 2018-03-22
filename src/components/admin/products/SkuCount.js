import React from 'react';

function SkuCountDisplay(props) {
  const length = props.length;
  return <span>{length}</span>;
}

function DashDiplay() {
  return <span>-</span>;
}

function SkuCount(props) {
  const length = props.attributes.length;
  if (length) {
    return <SkuCountDisplay length={length} />;
  }
  return <DashDiplay />;
}

export default SkuCount;