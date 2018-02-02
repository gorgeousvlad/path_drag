import './styles.css';
import $ from "jquery";
const Snap = require("imports-loader?this=>window,fix=>module.exports=0!./snap.svg-min.js" );
const svgpath = require('svgpath');
const R = require("ramda");
window.Snap = Snap;


let paper = Snap("#paper"),
//test info
  draggablePath =  svgpath("M 10 150 c 120 120 120 120 120 20 z").toString(),
  sl1Path = "M 200 10 c 120 120 120 120 120 20 z",
  sl2Path = "M 400 100 c 120 120 120 120 120 20 z",
  sl3Path = "M 300 100 c 120 120 120 120 120 20 z",
  sl4Path = "M 450 50 c 120 120 120 120 120 20 z",
  draggable = paper
    .path(draggablePath)
    .attr({stroke:"green",strokeWidth:1}),
  sl1 = paper.path(sl1Path)
    .attr({stroke:"blue",strokeWidth:1,fill:"transparent"})
    .data({"fill":"blue"}),
  sl2 = paper.path(sl2Path)
    .attr({stroke:"purple",strokeWidth:1,fill:"transparent"})
    .data({"fill":"purple"}),
  sl3 = paper.path(sl3Path)
    .attr({stroke:"orange",strokeWidth:1,fill:"transparent"})
    .data({"fill":"orange"}),
  sl4 = paper.path(sl4Path)
    .attr({stroke:"red",strokeWidth:1,fill:"transparent"})
    .data({"fill":"red"}),
  slots = [sl1,sl2,sl3,sl4]

//drag handlers
const move = function(dx,dy) {
  this.attr({
    transform: `t${sumArr(this.data('orig'),[dx, dy])}`
  })
  let intersect = isPathIntersect(this,slots);
  if (Object.keys(intersect).length){
    intersect.slot.attr("fill",intersect.slot.data("fill"))
    slots
      .filter((s)=>s.id !== intersect.slot.id)
      .forEach((s)=>s.attr("fill","transparent"))
  }
  else{
    slots.forEach((s)=>{
      s.attr("fill","tramsparent")
    })
  }
}

const start = function() {
  this.appendTo(paper)
  let init = this.transform().local,
    initd = init? init.slice(1).split(",").map((p) => parseInt(p)) : [0,0]
  this.data('orig', initd);
}
const stop = function() {
  this.appendTo(paper)
}

//helpers
const sumArr = function (a,b){
  return a.map( (el,index) => el + b[index])
}
const calcIntersectionArea = (obj,slot) =>{
  let {x:x1, y:y1, width:width1, height: height1} = obj.getBBox(),
    {x:x2, y:y2, width:width2, height: height2}= slot.getBBox(),
    x_overlap = Math.max(0, Math.min(x1 + width1, x2 + width2) - Math.max(x1, y1)),
    y_overlap = Math.max(0, Math.min(y1 + height1, y2 + height2) - Math.max(y1, y2));
  return {slot:slot, area : x_overlap * y_overlap};
}
const isPathIntersect = (obj,slots) => {
  let intersections = [];
  for (let slot of slots) {
     if (Snap.path.isBBoxIntersect(obj.getBBox(),slot.getBBox())){
        let t = obj.attr('transform')
        .string
        .split(",")
        .map((v) => v.replace("t","")),
          tstring = svgpath(draggablePath).translate(parseInt(t[0]),parseInt(t[1])).abs().toString(),
          tpath = paper.path(tstring).attr({"stroke":"transparent",strokeWidth:1}),
          len = tpath.getTotalLength();
          let step = (len * 3.6)/100
        for (var i = 0; i < len; i+=step) {
          let {x,y} = tpath.getPointAtLength(i);
          if (Snap.path.isPointInside(slot,x,y)){
            intersections.push(slot);
            break;
          }
        }
        tpath.remove()
    }
  }
  return intersections.length? _calcMax(obj,intersections):[]
}
const _calcMax = (obj,intersections) => {
  return intersections
    .map(R.curry(calcIntersectionArea)(obj))
    .reduce((acc,cur)=>{
      return acc.area > cur.area? acc:cur
  })
}

//include drag
draggable.mouseover((obj)=> {draggable.attr({fill:"green"})})
draggable.mouseout((obj)=>draggable.attr({fill:"transparent"}))
draggable.drag(move, start, stop);

