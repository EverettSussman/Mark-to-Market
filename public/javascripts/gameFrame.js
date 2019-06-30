function init() {
  // Initialize canvas object and set width/height to full screen
  var canvas = document.getElementById('mainGameWindow');
  initCanvas(canvas);

  var ctx = canvas.getContext('2d');
  setBackground(ctx, canvas);

  setTitle(ctx, canvas);
}

function initCanvas(canvas) {
  canvas.width = $(window).width();
  canvas.height = $(window).height();
}

function setBackground(ctx, canvas) {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function setTitle(ctx, canvas) {
  ctx.font = '20px Ariel';
  ctx.fillStyle = 'red';
  ctx.textAlign = 'center';
  ctx.fillText('Mark-to-Market', canvas.width/2, canvas.height/25);
  drawRectangle(ctx, "1", "white", 0, 0, canvas.width, canvas.height/15);
}

init();
