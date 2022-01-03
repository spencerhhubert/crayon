import os

js_line = "";
for img in os.listdir("data/images/"):
	js_line += f"{img}, ";
js_line = f'let list = "{js_line}";\n';

with open("crayon.js") as f:
	lines = f.readlines();
lines[0] = js_line;
with open("crayon.js", 'w') as f:
	f.writelines(lines);
