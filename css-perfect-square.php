<div class="square-container">
	<div class="square-inner">
	</div>
</div>

<style>
	.square-container {
		position:relative;
	}
	.square-container::after {
		padding-bottom:100%;
		display:block;
		content:"";
	}

	.square-inner {
		position:absolute;
		height:100%;
		width:100%;
		top:0;
		left:0;
		right:0;
		bottom:0;
	}
</style>

<?php /*

Padding bottom determines the height of the square.
The percentage is a factor of the width of the square; this is what makes it work.

You can change the shape by changing the percentage, consider it like an aspect ratio.

This code can also be used to create a circle by putting ``border-radius:50%`` on the ``.square-container``

*/ ?>
