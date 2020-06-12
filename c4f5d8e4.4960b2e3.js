(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{120:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(129),l=a.n(n),i=a(134),s=a(131),c=a(128),m=a(130),u=a(133),d=a(121),g=a.n(d);const p=[{title:"Less Boilerplate",imageUrl:"img/boilerplate.svg",description:o.a.createElement(o.a.Fragment,null,"MMF is designed from ground up to let you focus on what matters -- your model -- by providing boilerplate code for distributed training, common datasets and state-of-the-art pretrained baselines out-of-the-box.")},{title:"Powered by PyTorch",imageUrl:"img/pytorch_logo.svg",description:o.a.createElement(o.a.Fragment,null,"MMF is built on top of PyTorch that brings all of its power in your hands. MMF is not strongly opinionated. So you can use all of your PyTorch knowledge here.")},{title:"Modular and Composable",imageUrl:"img/puzzle_pieces.svg",description:o.a.createElement(o.a.Fragment,null,"MMF is created to be easily extensible and composable. Through our modular design, you can use specific components from MMF that you care about. Our configuration system allows MMF to easily adapt to your needs.")}];function b(){const{isDarkTheme:e}=Object(u.a)(),t=Object(m.a)("img/logo_white_text.svg"),a=Object(m.a)("img/logo.svg");return o.a.createElement("img",{className:l()(g.a.heroImg),src:e?t:a,alt:"MMF Logo"})}function h({imageUrl:e,title:t,description:a}){const{isDarkTheme:r}=Object(u.a)(),n=e.split(".")[0],i=Object(m.a)(n+"_white.svg"),s=Object(m.a)(e),c=r?i:s;return o.a.createElement("div",{className:l()("col col--4",g.a.feature,"text--center")},c&&o.a.createElement("div",{className:"text--center"},o.a.createElement("img",{className:g.a.featureImage,src:c,alt:t})),o.a.createElement("h3",null,t),o.a.createElement("p",null,a))}t.default=function(){const e=Object(c.a)(),{siteConfig:t={}}=e;return o.a.createElement(i.a,{title:"",description:"MMF is a modular framework powered by PyTorch for multimodal vision and language research from Facebook AI Research"},o.a.createElement("header",{className:l()("hero hero--primary",g.a.heroBanner)},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"hero__title"},o.a.createElement(b,null)),o.a.createElement("p",{className:"hero__subtitle"},t.tagline),o.a.createElement("div",{className:g.a.buttons},o.a.createElement(s.a,{className:l()("button button--primary button--lg",g.a.getStarted),to:Object(m.a)("docs")},"Get Started")))),o.a.createElement("main",null,p&&p.length&&o.a.createElement("section",{className:g.a.features},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},p.map(({title:e,imageUrl:t,description:a},r)=>o.a.createElement(h,{key:"feature"+r.toString(),title:e,imageUrl:t,description:a})))))))}}}]);