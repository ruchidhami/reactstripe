import React from 'react';

import Chip from 'material-ui/Chip';
import { green200, red200 } from 'material-ui/styles/colors';

function ActiveChip() {
  return <Chip backgroundColor={green200}>Active</Chip>;
}

function InActiveChip() {
  return <Chip backgroundColor={red200}>Inactive</Chip>;
}

function Active(props) {
  const active = props.active;
  if (active) {
    return <ActiveChip />;
  }
  return <InActiveChip />;
}

export default Active;