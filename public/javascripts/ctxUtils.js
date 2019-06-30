function drawRectangle(ctx, width, color, left, down, recW, recH) {
  // width - string
  // color - string
  // left, down, recW, recH - int
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.rect(left, down, recW, recH);
  ctx.stroke();
}
