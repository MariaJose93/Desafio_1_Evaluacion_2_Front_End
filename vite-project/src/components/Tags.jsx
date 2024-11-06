import React from 'react';
import Badge  from 'react-bootstrap/Badge'

const Tags = ({ tagColor, tagText }) => {
  return (
    <Badge className={`btn bg-${tagColor} text-light`} style={{ fontSize: "1rem", cursor: "pointer", minheight: "40px", display: "flex", alignItems: "center", justifyContent: "center"  }}>
      {tagText}
    </Badge>
  );
};
  
export default Tags;