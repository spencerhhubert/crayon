const svgNS = "http://www.w3.org/2000/svg";
let image_path = "test_subject.jpg";
let body_node = document.body;
let container_node = document.getElementById("canvas");
let image_node = document.getElementById("img");
image_node.setAttribute("src", image_path);
svg_node = document.getElementById('svg');

//wait for image to load and then draw vector canvas
image_node.onload = (event) => {
	let w = image_node.offsetWidth;
	let h = image_node.offsetHeight;
	svg_node.setAttribute("viewbox",  `0, 0, ${w}, ${h}`);
	svg_node.setAttribute("width", w);
	svg_node.setAttribute("height", h);
	container_node.appendChild(svg_node);
}

svg_node.onclick = function(click){handler(click)};
let clicks = 0;
let cords;
let polygon = [];
let point_node;
let color = "yellow";

function paintPoint(cords) {
	point_node = document.createElementNS(svgNS, 'circle');
	point_node.setAttribute("cx", cords[0]);
	point_node.setAttribute("cy", cords[1]);
	point_node.setAttribute("r", 5);
	point_node.setAttribute("fill", color);
	svg_node.appendChild(point_node);
}

function paintLine(cords1, cords2) {
	line_node = document.createElementNS(svgNS, 'line');
	line_node.setAttribute("x1", cords1[0]);
	line_node.setAttribute("y1", cords1[1]);
	line_node.setAttribute("x2", cords2[0]);
	line_node.setAttribute("y2", cords2[1]);
	line_node.setAttribute("stroke", color);
	line_node.setAttribute("stroke-width", 5);
	svg_node.appendChild(line_node);
}

function handler(click) {
	cords = [click.pageX, click.pageY];
	polygon.push(cords);
	paintPoint(cords);
	clicks += 1;
	if(clicks==1){
		return;
	}
	//need function to check if really close to click 1
	paintLine(polygon[clicks-2], polygon[clicks-1])
}

function printCords() {
	for(i=0; i<polygon.length; i++) {
		console.log(polygon[i])
	}
}
