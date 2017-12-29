import './styles.css';
const Snap = require("imports-loader?this=>window,fix=>module.exports=0!./snap.svg-min.js" );
const svgpath = require('svgpath');
const R = require("ramda");
window.Snap = Snap;
let path__ =  svgpath("M2.66,2.63S15.31-.06,16.51,19.45,8.75,97.3,30.48,106l.1,0s-13.25,5.14-14.41,33,.33,37.5.33,46.33.33,25-14,24.5").scale(0.3).toString()
let p1 = "M 50 10 c 120 120 120 120 120 20 z",
  p2 = "M 200 10 c 120 120 120 120 120 20 z",
  p3 = "M 400 100 c 120 120 120 120 120 20 z",
  paper = Snap("#paper"),
  pathdrag = paper.path(path__).attr({stroke:"green",strokeWidth:1,fill:"transparent"}),
  pathstatic = paper.path(p2).attr({stroke:"blue",strokeWidth:1,fill:"transparent"}),
  pathstatic2 = paper.path(p3).attr({stroke:"blue",strokeWidth:1,fill:"transparent"});


var move = function(dx,dy) {
  this.attr({
    transform: `t${sumArr(this.data('orig'),[dx, dy])}`
  })
  console.log(isPathIntersect(pathdrag,[pathstatic,pathstatic2]))
}


const start = function() {
  let init = this.transform().local,
    initd = init? init.slice(1).split(",").map((p) => parseInt(p)) : [0,0]
  this.data('orig', initd);
}
const stop = function() {
}
const sumArr = function (a,b){
  return a.map( (el,index) => el + b[index])
}
const calcIntersectionArea = (obj,slot) =>{
  let {x:x1, y:y1, width:width1, height: height1} = obj.getBBox(),
    {x:x2, y:y2, width:width2, height: height2}= slot.getBBox(),
    x_overlap = Math.max(0, Math.min(x1 + width1, x2 + width2) - Math.max(x1, y1)),
    y_overlap = Math.max(0, Math.min(y1 + height1, y2 + height2) - Math.max(y1, y2));
  return x_overlap * y_overlap;
}
const isPathIntersect = (obj,slots) => {
  let intersection = [];
  for (let slot of slots) {
     if (Snap.path.isBBoxIntersect(obj.getBBox(),slot.getBBox())){
        let t = obj.attr('transform')
        .string
        .split(",")
        .map((v) => v.replace("t","")),
          tstring = svgpath(path__).translate(parseInt(t[0]),parseInt(t[1])).abs().toString(),
          tpath = paper.path(tstring).attr({"stroke":"transparent",strokeWidth:1}),
          len = tpath.getTotalLength();
        for (var i = 0; i < len; i++) {
          let {x,y} = tpath.getPointAtLength(i)
          if (Snap.path.isPointInside(slot,x,y)){
            intersection.push(slot);
            break;
          }
        }
        tpath.remove()
    }
  }
  return intersection? Math.max(...intersection.map(R.curry(calcIntersectionArea)(obj))) : []
}
pathdrag.drag(move, start, stop);

