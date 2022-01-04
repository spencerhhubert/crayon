import os

img_dir = "data/images/"
label_dir = "data/labels/"
js_line = "";
for part in sorted(os.listdir(img_dir)):
	part_dir = img_dir+part+'/';
	for img in sorted(os.listdir(part_dir)):
		js_line += f"{part_dir+img}, ";
js_line = f'let list = "{js_line}";\n';

with open("crayon.js") as f:
	lines = f.readlines();
lines[0] = js_line;
with open("crayon.js", 'w') as f:
	f.writelines(lines);
