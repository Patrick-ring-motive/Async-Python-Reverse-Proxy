void async function getPrism(){

  addEventListener("DOMContentLoaded", (event) => {
    getp();
  });  

getp();
setTimeout(function(){getp();},1);

}();


async function getp(){
/*nope*/return;

  let thisLang = 'python';
  let codes=document.querySelectorAll('pre:not([highlighted])');
  let codes_length=codes.length;
  for(let i=0;i<codes_length;i++){
    codes[i].innerHTML='<code class="language-'+thisLang+'">'+codes[i].innerHTML+'</code>';
    codes[i].setAttribute('highlighted','true');
  }

  if(!document.querySelector('[id="prismmincss"]')){
  let l=document.createElement('link');
  l.href='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css';
  l.rel='stylesheet';
  l.id="prismmincss";
  document.body.appendChild(l);
  }

  if(!document.querySelector('[id="prismminjs"]')){
  let m=document.createElement('script');
  m.src='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js';
  m.id="prismminjs";
  m.onload=function(){
    if(!document.querySelector('[id="prism'+thisLang+'minjs"]')){
    let g=document.createElement('script');
    g.src='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-'+thisLang+'.min.js';
    g.id="prism"+thisLang+"minjs";
    g.onload=function(){Prism.highlightAll();};
    document.body.appendChild(g); 
    }  
  };
  document.body.appendChild(m);
  }






}