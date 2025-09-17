export class Show {
  constructor({resolution}) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const unit = resolution / 100;

    canvas.width = canvas.height = resolution;
    ctx.translate(0, resolution);
    ctx.scale(unit, -unit);
    Object.assign(this, {canvas, ctx, unit});
  }

  appendTo(parent) {
    parent.append(this.canvas);
  }

  rect(x, y, w, h, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }

  circle(x, y, r, color) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  polygon(...args) {
    const color = args.pop();
    const coords = args.flat();
    const points = coords.reduce(
      (points, coord) => {
        if (points.at(-1).length > 1) points.push([]);
        points.at(-1).push(coord);
        return points;
      }, [[]]
    )

    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(...points.shift());

    for (const [x, y] of points) this.ctx.lineTo(x, y);

    this.ctx.closePath();
    this.ctx.fill();
  }
}
