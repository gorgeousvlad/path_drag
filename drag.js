import './styles.css';
import $ from "jquery";
const Snap = require("imports-loader?this=>window,fix=>module.exports=0!./snap.svg-min.js" );
const svgpath = require('svgpath');
const R = require("ramda");
window.Snap = Snap;


let path__ =  svgpath("M 18.6026 3.36831L 18.7443 3.84782L 18.7875 3.83503L 18.8278 3.8147L 18.6026 3.36831ZM 0.103264 42.8681L -0.396506 42.8529L 0.103264 42.8681ZM 21.1027 115.868L 20.6566 116.094L 21.1027 115.868ZM 49.6035 122.868L 49.8607 123.297L 50.1476 123.125L 50.0979 122.794L 49.6035 122.868ZM 55.1035 114.368L 55.2572 113.893L 55.1035 114.368ZM 115.603 103.868L 115.239 103.526L 115.239 103.526L 115.603 103.868ZM 115.603 87.8683L 116.098 87.7976L 116.094 87.7646L 116.085 87.7326L 115.603 87.8683ZM 80.1024 42.868L 79.6375 43.052L 79.6532 43.0918L 79.6755 43.1283L 80.1024 42.868ZM 44.1024 1.36906L 44.4955 1.06015L 44.3966 0.934213L 44.2429 0.889208L 44.1024 1.36906ZM 18.4609 2.8888C 17.4458 3.18873 16.4111 3.8547 15.385 4.77379C 14.355 5.69639 13.3088 6.89653 12.2723 8.30105C 10.1991 11.1101 8.13703 14.7745 6.29867 18.7718C 2.62713 26.755 -0.193633 36.1581 -0.396506 42.8529L 0.603035 42.8832C 0.800161 36.378 3.5624 27.1146 7.20719 19.1896C 9.02699 15.2327 11.0564 11.6326 13.0769 8.89486C 14.0871 7.52597 15.0883 6.38212 16.0522 5.51867C 17.0201 4.6517 17.9261 4.08955 18.7443 3.84782L 18.4609 2.8888ZM -0.396506 42.8529C -0.647062 51.1213 -0.648454 59.0482 2.05434 70.1121C 4.75424 81.1642 10.1474 95.3273 20.6566 116.094L 21.5488 115.642C 11.0569 94.9099 5.70031 80.823 3.02577 69.8748C 0.354132 58.9384 0.35359 51.1149 0.603035 42.8832L -0.396506 42.8529ZM 20.6566 116.094C 23.1394 121 25.8876 124.128 28.7218 125.989C 31.5623 127.855 34.4578 128.426 37.1895 128.27C 42.6109 127.961 47.3956 124.776 49.8607 123.297L 49.3462 122.44C 46.811 123.961 42.2561 126.979 37.1326 127.272C 34.5919 127.417 31.9135 126.889 29.2707 125.153C 26.6215 123.414 23.9768 120.44 21.5488 115.642L 20.6566 116.094ZM 50.0979 122.794C 49.8551 121.176 49.8752 118.708 50.5878 116.891C 50.9417 115.988 51.4456 115.298 52.1191 114.921C 52.779 114.551 53.6847 114.435 54.9498 114.844L 55.2572 113.893C 53.7973 113.421 52.5906 113.511 51.6303 114.049C 50.6834 114.579 50.0592 115.5 49.6568 116.526C 48.8568 118.565 48.8518 121.228 49.109 122.942L 50.0979 122.794ZM 54.9498 114.844C 71.2279 120.103 82.7031 121.509 92.0183 119.545C 101.351 117.577 108.438 112.242 115.968 104.21L 115.239 103.526C 107.768 111.494 100.854 116.659 91.812 118.566C 82.7522 120.477 71.4779 119.133 55.2572 113.893L 54.9498 114.844ZM 115.968 104.21C 118.604 101.399 120.013 99.2301 120.59 97.4679C 121.179 95.6686 120.895 94.3038 120.208 93.1705C 119.553 92.0914 118.515 91.2144 117.71 90.4122C 116.869 89.574 116.24 88.7895 116.098 87.7976L 115.108 87.939C 115.3 89.2805 116.147 90.2665 117.004 91.1206C 117.898 92.0107 118.782 92.7477 119.353 93.6891C 119.891 94.5763 120.137 95.6384 119.64 97.1569C 119.131 98.7125 117.839 100.753 115.239 103.526L 115.968 104.21ZM 116.085 87.7326C 115.143 84.3924 112.598 80.0324 109.558 76.1714C 106.523 72.316 102.922 68.8654 99.8138 67.4149L 99.3909 68.3211C 102.283 69.6706 105.765 72.9702 108.773 76.7899C 111.775 80.6041 114.231 84.8442 115.122 88.004L 116.085 87.7326ZM 99.8138 67.4149C 98.4065 66.7582 96.7528 65.334 94.9783 63.4031C 93.2138 61.483 91.3678 59.1044 89.5717 56.5899C 85.9798 51.5611 82.6139 46.0264 80.5293 42.6077L 79.6755 43.1283C 81.7575 46.5429 85.1416 52.1082 88.758 57.1711C 90.5661 59.7024 92.4388 62.1175 94.242 64.0798C 96.0353 66.0311 97.7982 67.5778 99.3909 68.3211L 99.8138 67.4149ZM 80.5673 42.684C 78.9646 38.6353 75.8642 33.1682 72.257 28.6078C 70.4526 26.3266 68.5102 24.2579 66.5522 22.7044C 64.6018 21.157 62.5923 20.086 60.6576 19.871L 60.5472 20.8649C 62.2124 21.05 64.0447 21.9915 65.9307 23.4878C 67.8091 24.9781 69.698 26.9844 71.4727 29.2282C 75.0239 33.7178 78.0734 39.1007 79.6375 43.052L 80.5673 42.684ZM 60.6576 19.871C 59.0045 19.6874 57.3974 18.7666 55.8389 17.3483C 54.2831 15.9326 52.815 14.0571 51.4408 12.0373C 50.0675 10.0189 48.8028 7.87899 47.6442 5.93765C 46.4932 4.00906 45.4362 2.25734 44.4955 1.06015L 43.7092 1.67797C 44.6019 2.81411 45.624 4.50393 46.7855 6.45013C 47.9394 8.3836 49.2205 10.5517 50.614 12.5998C 52.0064 14.6464 53.5258 16.5955 55.1659 18.088C 56.8032 19.5779 58.6002 20.6486 60.5472 20.8649L 60.6576 19.871ZM 44.2429 0.889208C 39.852 -0.396433 28.5385 -2.20529 18.3773 2.92192L 18.8278 3.8147C 28.6653 -1.1492 39.6849 0.596597 43.9619 1.84891L 44.2429 0.889208Z").scale(1).toString()
let p1 = "M 50 10 c 120 120 120 120 120 20 z",
  p2 = "M 200 10 c 120 120 120 120 120 20 z",
  p3 = "M 400 100 c 120 120 120 120 120 20 z",
  p4 = "M 300 100 c 120 120 120 120 120 20 z",
  paper = Snap("#paper"),
  draggable = paper.path(path__).attr({stroke:"green",strokeWidth:1,fill:"transparent"}),
  pathstatic = paper.path(p2).attr({stroke:"blue",strokeWidth:1,fill:"transparent"}),
  pathstatic2 = paper.path(p3).attr({stroke:"blue",strokeWidth:1,fill:"transparent"}),
  pathstatic3 = paper.path(p4).attr({stroke:"blue",strokeWidth:1,fill:"transparent"}),
  slots = [pathstatic,pathstatic2,pathstatic,pathstatic3],
  clone = path__
  console.log("P",draggable.attr("path"))

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

      currency = props.currency || 300
      this._createPaper();
      this._findElements();
      this._createCallbacks(props.callbacks)


    }
    launch(){
      this.plates.forEach((p)=>p.drag(this.cbs.onmove,this.cbs.onstart,this.cbs.onend))
    }
    _createPaper(){
      $(this.svgString).attr("id","paper").appendTo(this.parent)
      this.paper = Snap("#paper")
    }
    _findElements(){
      this.slots = this.slots.map((slot,index) => {return this.paper
          .select(`#slot-${slot}`)
          .data({
            "index__":slot
          })}
        )
      //slots = this.slots
      this.plates = this.plates.map((plate,index) => {return this.paper
          .select(`#plate-${plate}`)
          .data({
            "index__":plate,
            "outline__":this.paper.select(`#outline-${plate}`)
          })}
        )
    }
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
console.log("DRAG",SnapDrag)


















const move = function(dx,dy) {
  this.attr({
    transform: `t${sumArr(this.data('orig'),[dx, dy])}`
  })
  let intersect = isPathIntersect(this,[pathstatic,pathstatic2,pathstatic3]);
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
          // const steps = len < 300 ? len : 300,
          //       shift = len/steps;
          let step = (len*3.6)/100
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

draggable.drag(move, start, stop);

