let data_paths = ["data/source/113.jpg", "data/source/114.jpg", "data/source/115.jpg", "data/source/116.jpg", "data/source/117.jpg", "data/source/118.jpg", "data/source/119.jpg", "data/source/130.jpg", "data/source/135.jpg", "data/source/136.jpg", "data/source/137.jpg", "data/source/143.jpg", "data/source/144.jpg", "data/source/148.jpg", "data/source/149.jpg", "data/source/150.jpg", "data/source/151.jpg", "data/source/164.jpg", "data/source/165.jpg", "data/source/166.jpg", "data/source/167.jpg", "data/source/1677925157.6845257_147.jpg", "data/source/1677925158.7360945_148.jpg", "data/source/1677925159.7859716_149.jpg", "data/source/1677925160.8374655_150.jpg", "data/source/1677925161.8861961_151.jpg", "data/source/1677925162.9370928_152.jpg", "data/source/1677925169.1872547_158.jpg", "data/source/1677925176.4400275_165.jpg", "data/source/1677925177.486158_166.jpg", "data/source/1677925178.5202842_167.jpg", "data/source/1677925179.5540884_168.jpg", "data/source/1677925180.5982823_169.jpg", "data/source/1677925181.6431503_170.jpg", "data/source/1677925182.6828861_171.jpg", "data/source/1677925183.731814_172.jpg", "data/source/1677925184.7727485_173.jpg", "data/source/1677925185.8295345_174.jpg", "data/source/1677925186.8870308_175.jpg", "data/source/1677925187.9343565_176.jpg", "data/source/1677925188.9816089_177.jpg", "data/source/1677925190.024353_178.jpg", "data/source/1677925191.0587008_179.jpg", "data/source/1677925192.1033132_180.jpg", "data/source/1677925193.1507323_181.jpg", "data/source/1677925194.1856143_182.jpg", "data/source/1677925199.3855457_187.jpg", "data/source/1677925200.4205055_188.jpg", "data/source/1677925201.4649856_189.jpg", "data/source/1677925202.5058534_190.jpg", "data/source/1677925203.5523708_191.jpg", "data/source/1677925204.5993428_192.jpg", "data/source/1677925222.3005202_209.jpg", "data/source/1677925223.340125_210.jpg", "data/source/1677925224.373477_211.jpg", "data/source/1677925225.4082906_212.jpg", "data/source/1677925226.44314_213.jpg", "data/source/1677925227.4897282_214.jpg", "data/source/1677925228.524365_215.jpg", "data/source/1677925229.56997_216.jpg", "data/source/1677925230.616272_217.jpg", "data/source/1677925231.6503558_218.jpg", "data/source/1677925247.276603_233.jpg", "data/source/1677925248.3107703_234.jpg", "data/source/1677925249.3464892_235.jpg", "data/source/1677925250.3806646_236.jpg", "data/source/1677925251.42648_237.jpg", "data/source/1677925252.4680786_238.jpg", "data/source/1677925253.5014694_239.jpg", "data/source/1677925254.5371695_240.jpg", "data/source/1677925255.5823522_241.jpg", "data/source/1677925256.6279445_242.jpg", "data/source/1677925257.6684363_243.jpg", "data/source/1677925258.7149932_244.jpg", "data/source/1677925259.7608294_245.jpg", "data/source/1677925260.8051002_246.jpg", "data/source/1677925261.85149_247.jpg", "data/source/1677925262.9081736_248.jpg", "data/source/1677925263.9580295_249.jpg", "data/source/1677925264.9992063_250.jpg", "data/source/1677925266.0349116_251.jpg", "data/source/1677925267.0683544_252.jpg", "data/source/1677925268.1349494_253.jpg", "data/source/1677925269.1844244_254.jpg", "data/source/1677925270.2179558_255.jpg", "data/source/1677925271.2642725_256.jpg", "data/source/1677925272.303133_257.jpg", "data/source/1677925288.96134_273.jpg", "data/source/1677925289.9964569_274.jpg", "data/source/1677925291.0297394_275.jpg", "data/source/1677925292.0781522_276.jpg", "data/source/1677925293.1124687_277.jpg", "data/source/1677925294.1522326_278.jpg", "data/source/1677925295.184545_279.jpg", "data/source/1677925296.2307465_280.jpg", "data/source/1677925297.2664027_281.jpg", "data/source/1677925298.3083456_282.jpg", "data/source/1677925303.4998205_287.jpg", "data/source/1677925304.5470917_288.jpg", "data/source/1677925305.6026876_289.jpg", "data/source/1677925306.6516552_290.jpg", "data/source/1677925307.6996927_291.jpg", "data/source/1677925308.733618_292.jpg", "data/source/1677925309.7796087_293.jpg", "data/source/1677925310.842069_294.jpg", "data/source/1677925311.8916686_295.jpg", "data/source/1677925312.9389806_296.jpg", "data/source/1677925313.9767938_297.jpg", "data/source/1677925315.011101_298.jpg", "data/source/1677925316.0523207_299.jpg", "data/source/1677925317.0856094_300.jpg", "data/source/1677925318.120414_301.jpg", "data/source/1677925319.154631_302.jpg", "data/source/1677925320.20246_303.jpg", "data/source/1677925321.2368784_304.jpg", "data/source/1677925322.2782977_305.jpg", "data/source/1677925358.755177_340.jpg", "data/source/1677925359.7900636_341.jpg", "data/source/1677925360.836602_342.jpg", "data/source/1677925378.4996765_359.jpg", "data/source/1677925379.5472658_360.jpg", "data/source/1677925380.5803528_361.jpg", "data/source/1677925381.6154237_362.jpg", "data/source/1677925382.6632898_363.jpg", "data/source/1677925383.7110066_364.jpg", "data/source/1677925384.7564042_365.jpg", "data/source/1677925385.7912598_366.jpg", "data/source/1677925386.8308127_367.jpg", "data/source/1677925387.8792217_368.jpg", "data/source/1677925388.920379_369.jpg", "data/source/1677925389.967263_370.jpg", "data/source/1677925391.012797_371.jpg", "data/source/1677925392.046182_372.jpg", "data/source/1677925393.0856912_373.jpg", "data/source/1677925394.120121_374.jpg", "data/source/1677925395.1556118_375.jpg", "data/source/1677925396.2020726_376.jpg", "data/source/1677925397.236348_377.jpg", "data/source/1677925398.279862_378.jpg", "data/source/1677925405.542844_385.jpg", "data/source/1677925406.5901334_386.jpg", "data/source/1677925407.6383903_387.jpg", "data/source/1677925451.3187804_429.jpg", "data/source/1677925458.6363673_436.jpg", "data/source/1677925459.687576_437.jpg", "data/source/1677925460.7213962_438.jpg", "data/source/1677925465.9749372_443.jpg", "data/source/1677925467.0110605_444.jpg", "data/source/1677925475.328031_452.jpg", "data/source/1677925476.3643703_453.jpg", "data/source/1677925477.3997207_454.jpg", "data/source/1677925478.4342496_455.jpg", "data/source/1677925486.7919888_463.jpg", "data/source/1677925487.8383074_464.jpg", "data/source/1677925488.8844202_465.jpg", "data/source/1677925497.2257166_473.jpg", "data/source/1677925556.6998093_530.jpg", "data/source/1677925557.7489648_531.jpg", "data/source/1677925558.796397_532.jpg", "data/source/1677925559.8469071_533.jpg", "data/source/1677925560.9137685_534.jpg", "data/source/1677925561.9664888_535.jpg", "data/source/1677925563.0022225_536.jpg", "data/source/1677925564.0435617_537.jpg", "data/source/1677925565.0784411_538.jpg", "data/source/1677925571.3463378_544.jpg", "data/source/1677925572.3804815_545.jpg", "data/source/1677925573.4157865_546.jpg", "data/source/1677925574.4632845_547.jpg", "data/source/1677925575.4968448_548.jpg", "data/source/1677925576.5412176_549.jpg", "data/source/1677925577.586353_550.jpg", "data/source/1677925578.632571_551.jpg", "data/source/1677925579.6810756_552.jpg", "data/source/1677925580.7257855_553.jpg", "data/source/1677925581.7722764_554.jpg", "data/source/1677925582.8212545_555.jpg", "data/source/1677925583.8715146_556.jpg", "data/source/1677925584.9203176_557.jpg", "data/source/1677925585.9558222_558.jpg", "data/source/1677925587.0026278_559.jpg", "data/source/1677925588.0380447_560.jpg", "data/source/1677925589.079616_561.jpg", "data/source/1677925590.1142244_562.jpg", "data/source/1677925591.1493385_563.jpg", "data/source/1677925592.1844246_564.jpg", "data/source/1677925593.2284257_565.jpg", "data/source/1677925594.2639189_566.jpg", "data/source/1677925595.3121836_567.jpg", "data/source/1677925596.347402_568.jpg", "data/source/1677925597.382431_569.jpg", "data/source/1677925598.4288962_570.jpg", "data/source/1677925599.4725177_571.jpg", "data/source/1677925600.5399535_572.jpg", "data/source/1677925601.5905044_573.jpg", "data/source/1677925602.6343_574.jpg", "data/source/1677925603.6815445_575.jpg", "data/source/1677925604.7238388_576.jpg", "data/source/1677925605.780006_577.jpg", "data/source/1677925606.8310802_578.jpg", "data/source/1677925607.881137_579.jpg", "data/source/1677925608.924104_580.jpg", "data/source/1677925609.9725418_581.jpg", "data/source/1677925611.015512_582.jpg", "data/source/1677925612.0520627_583.jpg", "data/source/1677925613.086369_584.jpg", "data/source/1677925614.1212935_585.jpg", "data/source/1677925615.155496_586.jpg", "data/source/1677925616.197357_587.jpg", "data/source/1677925617.2324336_588.jpg", "data/source/1677925618.2670982_589.jpg", "data/source/1677925619.302559_590.jpg", "data/source/1677925620.3384545_591.jpg", "data/source/1677925621.4050038_592.jpg", "data/source/1677925622.4549203_593.jpg", "data/source/1677925623.4908297_594.jpg", "data/source/1677925624.5404136_595.jpg", "data/source/1677925625.5902915_596.jpg", "data/source/1677925626.6537147_597.jpg", "data/source/1677925627.6883922_598.jpg", "data/source/1677925628.7273023_599.jpg", "data/source/1677925629.7751713_600.jpg", "data/source/1677925630.8161943_601.jpg", "data/source/1677925631.8650827_602.jpg", "data/source/1677925632.91525_603.jpg", "data/source/1677925633.9638097_604.jpg", "data/source/1677925635.0006838_605.jpg", "data/source/1677925636.0430033_606.jpg", "data/source/1677925637.07795_607.jpg", "data/source/1677925638.1123288_608.jpg", "data/source/1677925639.1468532_609.jpg", "data/source/1677925640.1820688_610.jpg", "data/source/1677925641.2297409_611.jpg", "data/source/1677925642.2678764_612.jpg", "data/source/1677925643.3156948_613.jpg", "data/source/1677925644.358259_614.jpg", "data/source/1677925645.4053135_615.jpg", "data/source/1677925646.450803_616.jpg", "data/source/1677925647.4923654_617.jpg", "data/source/1677925648.5312102_618.jpg", "data/source/1677925649.5764866_619.jpg", "data/source/1677925650.6249585_620.jpg", "data/source/1677925651.6765091_621.jpg", "data/source/168.jpg", "data/source/169.jpg", "data/source/170.jpg", "data/source/171.jpg", "data/source/172.jpg", "data/source/173.jpg", "data/source/174.jpg", "data/source/175.jpg", "data/source/176.jpg", "data/source/177.jpg", "data/source/178.jpg", "data/source/179.jpg", "data/source/180.jpg", "data/source/181.jpg", "data/source/182.jpg", "data/source/183.jpg", "data/source/184.jpg", "data/source/185.jpg", "data/source/186.jpg", "data/source/187.jpg", "data/source/188.jpg", "data/source/189.jpg", "data/source/190.jpg", "data/source/191.jpg", "data/source/192.jpg", "data/source/193.jpg", "data/source/194.jpg", "data/source/195.jpg", "data/source/196.jpg", "data/source/197.jpg", "data/source/198.jpg", "data/source/199.jpg", "data/source/200.jpg", "data/source/201.jpg", "data/source/212.jpg", "data/source/213.jpg", "data/source/214.jpg", "data/source/215.jpg", "data/source/216.jpg", "data/source/217.jpg", "data/source/218.jpg", "data/source/219.jpg", "data/source/220.jpg", "data/source/221.jpg", "data/source/222.jpg", "data/source/223.jpg", "data/source/224.jpg", "data/source/225.jpg", "data/source/226.jpg", "data/source/227.jpg", "data/source/228.jpg", "data/source/229.jpg", "data/source/230.jpg", "data/source/231.jpg", "data/source/232.jpg", "data/source/233.jpg", "data/source/234.jpg", "data/source/235.jpg", "data/source/236.jpg", "data/source/237.jpg", "data/source/238.jpg", "data/source/239.jpg", "data/source/240.jpg", "data/source/246.jpg", "data/source/247.jpg", "data/source/253.jpg", "data/source/254.jpg", "data/source/255.jpg", "data/source/256.jpg", "data/source/261.jpg", "data/source/262.jpg", "data/source/263.jpg", "data/source/264.jpg", "data/source/265.jpg", "data/source/266.jpg", "data/source/267.jpg", "data/source/268.jpg", "data/source/269.jpg", "data/source/270.jpg", "data/source/271.jpg", "data/source/272.jpg", "data/source/273.jpg", "data/source/274.jpg", "data/source/275.jpg", "data/source/276.jpg", "data/source/277.jpg", "data/source/278.jpg", "data/source/279.jpg", "data/source/28.jpg", "data/source/280.jpg", "data/source/281.jpg", "data/source/282.jpg", "data/source/283.jpg", "data/source/284.jpg", "data/source/285.jpg", "data/source/286.jpg", "data/source/287.jpg", "data/source/288.jpg", "data/source/289.jpg", "data/source/29.jpg", "data/source/290.jpg", "data/source/291.jpg", "data/source/292.jpg", "data/source/293.jpg", "data/source/294.jpg", "data/source/295.jpg", "data/source/296.jpg", "data/source/297.jpg", "data/source/298.jpg", "data/source/299.jpg", "data/source/30.jpg", "data/source/300.jpg", "data/source/301.jpg", "data/source/302.jpg", "data/source/303.jpg", "data/source/304.jpg", "data/source/305.jpg", "data/source/306.jpg", "data/source/307.jpg", "data/source/308.jpg", "data/source/309.jpg", "data/source/310.jpg", "data/source/311.jpg", "data/source/312.jpg", "data/source/313.jpg", "data/source/314.jpg", "data/source/315.jpg", "data/source/316.jpg", "data/source/317.jpg", "data/source/318.jpg", "data/source/319.jpg", "data/source/320.jpg", "data/source/321.jpg", "data/source/322.jpg", "data/source/323.jpg", "data/source/324.jpg", "data/source/325.jpg", "data/source/326.jpg", "data/source/327.jpg", "data/source/328.jpg", "data/source/329.jpg", "data/source/330.jpg", "data/source/331.jpg", "data/source/332.jpg", "data/source/333.jpg", "data/source/334.jpg", "data/source/335.jpg", "data/source/336.jpg", "data/source/337.jpg", "data/source/338.jpg", "data/source/339.jpg", "data/source/340.jpg", "data/source/341.jpg", "data/source/342.jpg", "data/source/343.jpg", "data/source/344.jpg", "data/source/345.jpg", "data/source/346.jpg", "data/source/347.jpg", "data/source/348.jpg", "data/source/349.jpg", "data/source/362.jpg", "data/source/363.jpg", "data/source/364.jpg", "data/source/365.jpg", "data/source/366.jpg", "data/source/367.jpg", "data/source/368.jpg", "data/source/369.jpg", "data/source/370.jpg", "data/source/387.jpg", "data/source/388.jpg", "data/source/405.jpg", "data/source/418.jpg", "data/source/419.jpg", "data/source/425.jpg", "data/source/426.jpg", "data/source/437.jpg", "data/source/438.jpg", "data/source/468.jpg", "data/source/479.jpg", "data/source/480.jpg", "data/source/485.jpg", "data/source/486.jpg", "data/source/55.jpg", "data/source/56.jpg", "data/source/57.jpg", "data/source/593.jpg", "data/source/594.jpg", "data/source/595.jpg", "data/source/596.jpg", "data/source/597.jpg", "data/source/598.jpg", "data/source/599.jpg", "data/source/600.jpg", "data/source/601.jpg", "data/source/602.jpg", "data/source/603.jpg", "data/source/604.jpg", "data/source/605.jpg", "data/source/606.jpg", "data/source/611.jpg", "data/source/628.jpg", "data/source/632.jpg", "data/source/633.jpg", "data/source/97.jpg", ]

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
    console.log("setting up ",img)
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
	if(save){saveCords();}
	setupDraw(imgs[current]);
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
