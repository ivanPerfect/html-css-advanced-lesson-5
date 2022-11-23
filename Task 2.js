const ctx = document.querySelector('canvas').getContext('2d');
for (let i = 1; i <= 10; i++) {
	ctx.moveTo(40, 10*i + 40);
	ctx.lineTo(150, 10*i + 40);
	}
for (let i = 1; i <= 10; i++) {
    ctx.moveTo(10*i + 40, 40);
	ctx.lineTo(10*i + 40, 150);
	}
	ctx.stroke();