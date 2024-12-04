"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2018],{52018:(e,t,l)=>{l.r(t),l.d(t,{default:()=>g});var a=l(7552),i=l(943),o=l(1343),n=l(5401),r=l(75785),s=l(99546),c=l(91468);const u=(0,r.n9)()((e=>({paper:{margin:e.spacing(),padding:e.spacing()},submit:{marginTop:25,marginBottom:100,display:"block"}})));function m(e){const{webUtils:t}=window.require("electron");return s.isElectron?{localPath:t.getPathForFile(e),locationType:"LocalPathLocation"}:(0,c.storeBlobLocation)({blob:e})}function g({model:e}){const{classes:t}=u(),[l,r]=(0,a.useState)(""),[c,g]=(0,a.useState)("MultiWiggle"+ +Date.now());return a.createElement(i.A,{className:t.paper},a.createElement("ul",null,a.createElement("li",null,"Enter list of URLs for bigwig files in the textbox"),a.createElement("li",null,"Or, use the button below the text box to select files from your computer")),a.createElement(o.A,{multiline:!0,fullWidth:!0,rows:10,value:l,placeholder:"Paste list of URLs here, or use file selector below",variant:"outlined",onChange:e=>{r(e.target.value)}}),a.createElement(n.A,{variant:"outlined",component:"label"},"Choose Files from your computer",a.createElement("input",{type:"file",hidden:!0,multiple:!0,onChange:({target:e})=>{const t=[...e.files||[]].map((e=>({type:"BigWigAdapter",bigWigLocation:m(e),source:e.name})));r(JSON.stringify(t,null,2))}})),a.createElement(o.A,{value:c,helperText:"Track name",onChange:e=>{g(e.target.value)}}),a.createElement(n.A,{variant:"contained",className:t.submit,onClick:()=>{const t=(0,s.getSession)(e);try{const a=[`${c.toLowerCase().replaceAll(" ","_")}-${Date.now()}`,t.adminMode?"":"-sessionTrack"].join("");let i;try{i=JSON.parse(l)}catch(e){i=l.split(/\n|\r\n|\r/).map((e=>e.trim())).filter((e=>!!e))}const o="string"==typeof i[0]?{bigWigs:i}:{subadapters:i};(0,s.isSessionWithAddTracks)(t)&&(t.addTrackConf({trackId:a,type:"MultiQuantitativeTrack",name:c,assemblyNames:[e.assembly],adapter:{type:"MultiWiggleAdapter",...o}}),e.view?.showTrack(a)),e.clearData(),(0,s.isSessionModelWithWidgets)(t)&&t.hideWidget(e)}catch(e){console.error(e),t.notifyError(`${e}`,e)}}},"Submit"),a.createElement("p",null,"Additional notes: "),a.createElement("ul",null,a.createElement("li",null,"The list of bigwig files in the text box can be a list of URLs, or a list of elements like"," ",a.createElement("code",null,'[{"type":"BigWigAdapter","bigWigLocation":{"uri":"http://host/file.bw"}, "color":"green","source":"name for subtrack"}]')," ","to apply e.g. the color attribute to the view"),a.createElement("li",null,'Adding local files will update the textbox with JSON contents that are ready to submit with the "Submit" button')))}}}]);
//# sourceMappingURL=2018.79a92d58.chunk.js.map