!function(){"use strict";var e,t={52:function(){var e=window.wp.blocks,t=window.wp.element,a=(window.wp.i18n,window.wp.blockEditor),l=window.wp.data,n=window.wp.components;const{__:__}=wp.i18n,{registerBlockType:r}=wp.blocks;r("create-block/tab",{title:__("Tab"),icon:"welcome-add-page",parent:["create-block/tabs"],category:"design",attributes:{tabLabel:{type:"string",default:""},blockIndex:{type:"number",default:""}},keywords:[__("tab")],edit:e=>{const{attributes:{tabLabel:r,blockIndex:o},setAttributes:c}=e,s=wp.data.select("core/block-editor").getBlockParentsByBlockName(e.clientId,["create-block/tabs"]);var i=o;const b=wp.data.select("core/block-editor").getBlockOrder(s).indexOf(e.clientId),d=(0,l.subscribe)((()=>{var t=wp.data.select("core/block-editor").getBlockOrder(s).indexOf(e.clientId);t!==i&&(d(),c({blockIndex:t}),wp.data.dispatch("core/block-editor").updateBlockAttributes(s,{updateChild:!0}))}));return(0,t.createElement)("div",{className:e.className},(0,t.createElement)("h4",null,"Tab Label"),(0,t.createElement)(n.TextControl,{className:"tab-label_input",value:r,onChange:e=>{c({tabLabel:e}),c({blockIndex:b}),wp.data.dispatch("core/block-editor").updateBlockAttributes(s,{updateChild:!0})},placeholder:"Add Tab Label",type:"text"}),(0,t.createElement)("h4",null,"Tab Content"),(0,t.createElement)(a.InnerBlocks,null))},save:e=>{const{attributes:{tabLabel:l}}=e;return(0,t.createElement)("div",{className:"tab-panel",role:"tabpanel",tabindex:"0","aria-labelledby":l},(0,t.createElement)(a.InnerBlocks.Content,null))}});const o=["create-block/tab"],{RawHTML:c}=wp.element;(0,e.registerBlockType)("create-block/tabs",{edit:function(e){const{attributes:r,setAttributes:c}=e,{tabLabelsArray:s,updateChild:i,sideTabLayout:b}=r;var d=(()=>{const t=e.clientId,{innerBlockCount:a}=(0,l.useSelect)((e=>({innerBlockCount:e("core/block-editor").getBlockCount(t)})));var n=[];for(let e=0;e<a;e++){let a=wp.data.select("core/block-editor").getBlocks(t)[e].attributes.tabLabel;n.push(a)}return n})();return(d.length!==s.length||i)&&(c({tabLabelsArray:d}),c({updateChild:!1})),(0,t.createElement)("div",(0,a.useBlockProps)(),(0,t.createElement)("h2",null,"Tabbed Layout Block"),(0,t.createElement)(n.ToggleControl,{label:"Switch to side tab layout",help:b?"Side tab layout selected":"Defoult layout",checked:b,onChange:e=>{c({sideTabLayout:e})}}),(0,t.createElement)(a.InnerBlocks,{allowedBlocks:o,renderAppender:a.InnerBlocks.ButtonBlockAppender}))},save:function(e){const{attributes:{tabLabelsArray:l,sideTabLayout:n}}=e;var r=a.useBlockProps.save();return n&&(r=a.useBlockProps.save({className:"side-tab-layout"})),(0,t.createElement)("div",r,(0,t.createElement)("ul",{className:"tab-labels",role:"tablist","aria-label":"tabbed content"},l.map(((e,a)=>(0,t.createElement)("li",{className:0==a?"tab-label active":"tab-label",role:"tab","aria-selected":0==a?"true":"false","aria-controls":e,tabindex:"0"},(0,t.createElement)(c,null,e))))),(0,t.createElement)("div",{className:"tab-content"},(0,t.createElement)(a.InnerBlocks.Content,null)))}})}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,a,n,r){if(!a){var o=1/0;for(b=0;b<e.length;b++){a=e[b][0],n=e[b][1],r=e[b][2];for(var c=!0,s=0;s<a.length;s++)(!1&r||o>=r)&&Object.keys(l.O).every((function(e){return l.O[e](a[s])}))?a.splice(s--,1):(c=!1,r<o&&(o=r));if(c){e.splice(b--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var b=e.length;b>0&&e[b-1][2]>r;b--)e[b]=e[b-1];e[b]=[a,n,r]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,o=a[0],c=a[1],s=a[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(s)var b=s(l)}for(t&&t(a);i<o.length;i++)r=o[i],l.o(e,r)&&e[r]&&e[r][0](),e[o[i]]=0;return l.O(b)},a=self.webpackChunktabs=self.webpackChunktabs||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var n=l.O(void 0,[46],(function(){return l(52)}));n=l.O(n)}();