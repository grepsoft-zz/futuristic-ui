export const Circle = ({
  cx,
  cy,
  strokeColor,
  strokeWidth,
  radius,
  dashOffset,
  dashArray,
  fill = "none",
  style = {}
}) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      fill={fill}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      r={radius}
      strokeDashoffset={dashOffset}
      strokeDasharray={dashArray}
      style={style}
    />
  );
};
