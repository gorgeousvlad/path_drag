import './styles.css';
import $ from "jquery";
const Snap = require("imports-loader?this=>window,fix=>module.exports=0!./snap.svg-min.js" );
const svgpath = require('svgpath');
const R = require("ramda");
window.Snap = Snap;

//планировал реализовать
let SnapDrag;
(function(){

  let slots, currency;
  const move = function(dx,dy) {
    this.attr({
      transform: `t${sumArr(this.data('orig'),[dx, dy])}`
    })
    let intersect = isPathIntersect(this,slots);
    if (Object.keys(intersect).length){
      intersect.slot.attr("stroke","red")
      slots
        .filter((s)=>s.id !== intersect.slot.id)
        .forEach((s)=>s.attr("stroke","blue"))
    }
    else{
      slots.forEach((s)=>{
        s.attr("stroke","blue")
      })
    }
  }

  const start = function() {
    console.log("ARGUMENTS",arguments)
    let init = this.transform().local,
      initd = init? init.slice(1).split(",").map((p) => parseInt(p)) : [0,0]
    this.data('orig', initd);
  }
  const stop = function() {
    this.appendTo(paper)
  }
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
            tstring = svgpath(clone).translate(parseInt(t[0]),parseInt(t[1])).abs().toString(),
            tpath = paper.path(tstring).attr({"stroke":"transparent",strokeWidth:1}),
            len = tpath.getTotalLength();
            const steps = len < currency ? len : currency,
                  shift = len/steps;
          for (var i = 0; i < steps; i++) {
            let {x,y} = tpath.getPointAtLength(i*shift);
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

  class SnapDrag_{
    constructor(props){

      this.svgString = props.svgString
      this.parent = props.parent
      this.platesSrc = props.plates
      this.dragCallbacks = props.dragCallbacks
      this.panels = props.panel
      this.slots = props.slots
      this.panels.forEach((p)=>p.data({outline__:d.attr("path")}))

      currency = props.currency || 300
      this._createPaper();
      this._findElements();
      //this._createCallbacks(props.callbacks)


    }
    launch(){
      this.plates.forEach((p)=>p.drag(this.cbs.onmove,this.cbs.onstart,this.cbs.onend))
    }
    _createPaper(){
      $(this.svgString).attr("id","paper").appendTo(this.parent)
      this.paper = Snap("#paper")
    }
    // _findElements(){
    //   this.slots = this.slots.map((slot,index) => {return this.paper
    //       .select(`#slot-${slot}`)
    //       .data({
    //         "index__":slot
    //       })}
    //     )
    //   //slots = this.slots
    //   this.plates = this.plates.map((plate,index) => {return this.paper
    //       .select(`#plate-${plate}`)
    //       .data({
    //         "index__":plate,
    //         "outline__":this.paper.select(`#outline-${plate}`)
    //       })}
    //     )
    // }
    _createCallbacks(userCallbacks){
      let plates = this.plates
      this.cbs = {
        onstart: function(){
          start.call(this,...arguments);
          userCallbacks.onstart.call(this,...arguments)

        },
        onmove: function(){
          move.call(this,...arguments);
          userCallbacks.onmove.call(this,...arguments)

        },
        onend: function(){
          end.call(this,...arguments);
          userCallbacks.onend.call(this,...arguments)
          plates.forEach((p)=>p.undrag())
          userCallbacks.cb()
        }
      }
    }
  }
  SnapDrag = SnapDrag_
})()

export default SnapDrag;