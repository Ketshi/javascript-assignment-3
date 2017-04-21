// Do your work in this file.


var view = document.createElement("div");
view.className = 'view';
document.body.appendChild(view);


var grass = document.createElement("div");
grass.className = 'grass';
view.appendChild(grass);


var sun = document.createElement("div");
sun.className = 'sun';
view.appendChild(sun);


var i = 0;
while (i < 5) {
    var ray = document.createElement("div");
    ray.className = 'ray-' + (i + 1);
    sun.appendChild(ray);
    i++;
}

var mountain = document.createElement("div");
mountain.className = 'mountain';
view.appendChild(mountain);

var mountainTop = document.createElement("div");
mountainTop.className = 'mountain-top';
mountain.appendChild(mountainTop);

var i = 0;
do {
    var mountainCap = document.createElement("div");
    mountainCap.className = 'mountain-cap-' + (i + 1);
    mountainTop.appendChild(mountainCap);
    i++;
} while (i < 3);



