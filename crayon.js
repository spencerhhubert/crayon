let data_paths = ["data/source/0.jpg", "data/source/1.jpg", "data/source/2.jpg", "data/source/3.jpg", "data/source/4.jpg", "data/source/5.jpg", "data/source/6.jpg", "data/source/7.jpg", ]

const svgNS = "http://www.w3.org/2000/svg";

function cutDir(path){
    path = path.substring(path.lastIndexOf("/")+1)
    path = path.substring(0, path.lastIndexOf("."))
	return path
}

function begin() {
    imgs = data_paths
	current = 0;
	setupDraw(imgs[current])
}

let current;
let imgs = [];
let body_node;
let container_node;
let image_node;
let clicks;
let cords;
let polygon = [];
let point_node;
let color;

function setupDraw(img) {
	body_node = document.body;
	container_node = document.getElementById("canvas");
	image_node = document.getElementById("img");
	image_node.setAttribute("src", img);
	svg_node = document.getElementById('svg');
	svg_node.innerHTML = '';
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
	clicks = 0;
	cords;
	polygon = [];
	point_node;
	color = "yellow";
}

function next(save) {
	setupDraw(imgs[current]);
	if(save){saveCords();}
}

function handler(click) {
	cords = [click.offsetX, click.offsetY];
	polygon.push(cords);
	clicks += 1;
	if(clicks==1){
		paintPoint(cords);
		return;
	}
	if(complete(cords)){
		paintLine(polygon[clicks-2], polygon[0]);
		//make these cords the same as the starting ones
		polygon[clicks-1]=polygon[0];
		changeColor("Chartreuse");
		saveCords();
		next(false);
	} else {
		paintPoint(cords);
		paintLine(polygon[clicks-2], polygon[clicks-1]);
	}
}
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

function complete(cords) {
	threshold = 5;
	if (Math.abs(cords[0]-polygon[0][0]) < threshold && Math.abs(cords[1]-polygon[0][1]) < threshold) {
		return true;
	} else {return false;}
}

function changeColor(color) {
	for(let i=0;i<svg_node.children.length;i++){
		svg_node.children[i].setAttribute("stroke", color);
		svg_node.children[i].setAttribute("fill", color);
	}
}

function saveCords() {
	let cords_string = "";
	for(let i=0;i<polygon.length;i++){
		cords_string += `${polygon[i][0]} ${polygon[i][1]}\n`;
	}
	download(cords_string, cutDir(imgs[current])+".txt" , "text");
	current += 1;
}

// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function printCords() {
	for(i=0; i<polygon.length; i++) {
		console.log(polygon[i])
	}
}

function getList() {
	let input_node = document.getElementById("list");
	return input_node.value;
}
