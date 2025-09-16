const canvasSize = 3000;
const unit = canvasSize / 100;
const canvas = makeCanvas(canvasSize);
const {ctx} = canvas;

for (
  let xy = 1, wh = 1, hue = 0;
  xy < 100 - wh; 
  wh *= 1.226, xy += wh * 0.9, hue += 30
) {
  const color1 = `hsl(${hue}, 90%, 50%)`;
  const color2 = `hsl(${hue + 60}, 90%, 50%)`;
  
  drawRect(xy, xy, wh, wh, color1);
  drawCircle(xy + wh / 2, xy + wh / 2, wh / 2.1, color2);
}
  
function makeCanvas(size) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.height = size;
  canvas.ctx = ctx;  
  
  ctx.translate(0, size);
  ctx.scale(unit, -unit);

  body.append(canvas);
  
  return canvas;
}

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}
