import {Show} from "./show.js";

const show = new Show({resolution: 3000});

show.appendTo(body);

for (
  let xy = 1, wh = 1, hue = 0;
  xy < 100 - wh; 
  wh *= 1.226, xy += wh * 0.9, hue += 30
) {
  const cxy = xy + wh / 2;
  const color1 = `hsl(${hue}, 90%, 50%)`;
  const color2 = `hsl(${hue + 60}, 90%, 50%)`;
  
  show.rect(xy, xy, wh, wh, color1);
  show.circle(cxy, cxy, wh / 2.1, color2);
}
  
