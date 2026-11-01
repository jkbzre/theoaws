import streams from './streams.js';
import { mountVideo, destroyVideo } from './player.js';
import videoData from './videoData.js';
import gardenData from './gardenData.js';
import photographyData from './photographyData.js';
import projectImages from './project-images.js';
import projectVideoExtra from './project-video-extra.js';
import projectPhotography from './project-photography.js';
import resumeData from './archive-data/resumeData.js';
import groupData from './archive-data/groupData.js';
import collectionData from './archive-data/collectionData.js';
import prizeData from './archive-data/prizeData.js';
import videoinstallationData from './archive-data/videoinstallationData.js';
import interviewData from './archive-data/interviewData.js';
// Preserve direct links from the previous site while using the new hash routes.
const legacyPath=location.pathname.replace(/\/+$/, '');
const legacyProject=legacyPath.match(/^\/videos\/(installations|essay|single)\/([^/]+)$/);
const legacyPhoto=legacyPath.match(/^\/photography\/([^/]+)$/);
let legacyHash='';
if(legacyProject)legacyHash=`#work/${legacyProject[1]}/${legacyProject[2]}`;
else if(legacyPhoto)legacyHash=`#work/photography/${legacyPhoto[1]}`;
else if(legacyPath==='/garden-of-the-broken-hearted')legacyHash='#work/installations/garden-of-the-broken-hearted';
else if(legacyPath==='/adieu')legacyHash='#work/installations/adieu';
if(legacyHash)history.replaceState(null,'',`/${location.search}${location.hash||legacyHash}`);
// Preview-only comparison: ?indicator=gap selects the moving gap.
const indicator=new URLSearchParams(location.search).get('indicator');
document.documentElement.dataset.slideIndicator=['gap','marker'].includes(indicator)?indicator:'progress';
const grid=document.querySelector('#grid'),detail=document.querySelector('#detail'),home=document.querySelector('#home'),about=document.querySelector('#about'),contact=document.querySelector('#contact');
const names={installations:'Video installations',essay:'Essay films',single:'Single channel'};
const safeURL=u=>typeof u==='string'?u.replace(/^http:\/\/drqlcggpj7pli\.cloudfront\.net\//,'https://drqlcggpj7pli.cloudfront.net/'):'';
const items=Object.entries(videoData).flatMap(([category,projects])=>projects.map(p=>({...p,category}))).sort((a,b)=>(parseInt(b.year)||0)-(parseInt(a.year)||0));
items.unshift({...gardenData,category:'installations'});
const el=(tag,text,cls)=>{let n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n};
// Publication information is carried over from the original site and awaits editorial review.
const publications=[
  {title:'Adieu les demoiselle', year:'2024',size: '15.7 x 29.7 cm', isbn:'978-3-95763-548-8', image:'3.png', link:'https://revolver-publishing.com/adieu-les-demoiselles.html'},
  {title:'Till Death Us Do Part',year:'2023',image:'5.png',size:'27.5 × 25 cm',isbn:'978-3-947902-27-9',link:'https://www.iwalewabooks.com/product-page/theo-eshetu-till-death-us-do-part'},
  {title:'The Sorcerer’s Burden',year:'2019',image:'1.png',size:'22.8 × 31.7 cm',isbn:'978-1-942185-60-4',link:'https://www.radiusbooks.org/all-books/p/the-sorcerers-burden-contemporary-art-and-the-anthropological-turn'},
  {title:'The Body Electric',year:'2017',image:'2.png',size:'16.6 × 23.7 cm',isbn:'978-3-95679-341-7',link:'https://www.sternberg-press.com/product/the-body-electric/'},
  {title:'Blood' ,year:'2003',isbn:'978-85-7995-166-4',image:'4.png',size:'13 × 21 cm'}
];
function renderPublications(){
  const section=el('section',null,'work-section publications');section.id='section-publications';
  section.append(el('h2','Publications','section-heading'));
  const shelf=el('div',null,'publication-shelf');
  const details=el('div',null,'publication-details');details.hidden=true;details.id='publication-details';
  for(const p of publications){
    const button=el('button',null,'publication-item');button.type='button';button.dataset.publication=p.title;button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls',details.id);
    const cover=el('span',null,'publication-cover');const img=el('img');img.src=`https://drqlcggpj7pli.cloudfront.net/images/publications/${p.image}`;img.alt='';img.loading='lazy';cover.append(img);
    button.append(cover,el('span',p.title,'publication-title'),el('span',p.year,'publication-year'));
    button.addEventListener('click',()=>{
      const wasOpen=button.getAttribute('aria-expanded')==='true';
      shelf.querySelectorAll('button').forEach(b=>b.setAttribute('aria-expanded','false'));
      details.replaceChildren();details.hidden=wasOpen;if(wasOpen)return;
      button.setAttribute('aria-expanded','true');
      const info=el('div');const titleRow=el('div',null,'publication-detail-heading');titleRow.append(el('h3',p.title));
      if(p.link){const link=el('a','publisher');link.href=p.link;link.target='_blank';link.rel='noopener noreferrer';titleRow.append(link)}
      info.append(titleRow);if(p.subtitle)info.append(el('p',p.subtitle));
      const facts=el('div',null,'publication-facts');facts.append(el('span',p.year||''),el('span',p.size||''),el('span',p.isbn?`ISBN ${p.isbn}`:''));info.append(facts);details.append(info);
    });shelf.append(button);
  }
  section.append(shelf,details);return section;
}
// Three sample records for reviewing the proposed information hierarchy.
// Values come from the current site and remain subject to editorial verification.
const sampleDetails={
  'installations/ghost-dance':[
    ['Year','2021'],['Format','Single-screen 4K video projection and sound; video installation'],
    ['Duration','18 minutes'],['With','Edivaldo Ernesto and Yuko Kaseki'],
    ['Commission','Gwangju Biennale, Gwangju, South Korea, 2021']
  ],
  'essay/blood-is-not-fresh-water':[
    ['Year','1997'],['Format','Essay film on the history of Ethiopia'],
    ['Duration','58 minutes'],['Languages','English, Amharic and Italian']
  ],
  'photography/mystery-of-history':[['Year','2015'],['Format','Picture essay']]
};
// Provisional selection: replace these IDs when the featured works are agreed.
const featuredIds=['paradise','crocodiles','ghost-dance','atlas-kassel','brave-new-world','blood-is-not-fresh-water'];
const featured=[{...gardenData,category:'installations',portrait:true,onView:'on view - venice biennale - 2026'},...featuredIds.map(id=>items.find(p=>p.id===id)).filter(Boolean).map(p=>p.id==='crocodiles'?{...p,thumbnail:'assets/crocodile-original.jpg'}:p.id==='paradise'?{...p,thumbnail:'assets/dead-boys-original.jpg'}:p)];
const hero=document.querySelector('#hero-image'),heroLink=document.querySelector('#hero-link'),dots=document.querySelector('#dots'),slideTitle=document.querySelector('#slide-title'),exhibitionNote=document.querySelector('#exhibition-note');
let slide=0,timer=null,autoStartTimer=null,interactionStarted=false,hovering=false,focused=false;
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
const slideInfo=document.querySelector('.slide-info');
const captionCanvas=document.createElement('canvas');
const captionContext=captionCanvas.getContext('2d');
function fitSlideCaption(){
  if(!captionContext||home.hidden||!slideInfo.clientWidth)return;
  const baseSize=13,available=slideInfo.clientWidth-14;
  captionContext.font=`${baseSize}px ${getComputedStyle(slideInfo).fontFamily}`;
  const textWidth=captionContext.measureText(slideTitle.textContent.toLocaleLowerCase()).width+captionContext.measureText(exhibitionNote.textContent.toLocaleLowerCase()).width;
  const size=textWidth>available?Math.floor(baseSize*available/textWidth*100)/100:baseSize;
  slideInfo.style.fontSize=`${Math.max(1,size)}px`;
}
window.addEventListener('resize',fitSlideCaption);
document.fonts?.ready.then(fitSlideCaption);

function updateSlide(){const p=featured[slide];if(!p)return;hero.src=safeURL(p.thumbnail);hero.alt=p.title;heroLink.href=p.url||`#work/${p.category}/${p.id}`;hero.classList.toggle('portrait',!!p.portrait);slideTitle.textContent=p.title;exhibitionNote.textContent=p.onView||p.year||'';fitSlideCaption();heroLink.setAttribute('aria-label',`View ${p.title}`);[...dots.children].forEach((b,i)=>b.setAttribute('aria-current',String(i===slide)))}
featured.forEach((p,i)=>{const b=el('button');b.type='button';b.setAttribute('aria-label',`Show ${p.title}`);b.addEventListener('click',()=>{slide=i;updateSlide();restart()});dots.append(b)});
function restart(){clearInterval(timer);timer=null;dots.classList.toggle('has-started',interactionStarted);const playing=interactionStarted&&!hovering&&!focused&&!reduceMotion.matches&&!home.hidden&&featured.length>1;dots.classList.toggle('is-playing',playing);if(playing)timer=setInterval(()=>{slide=(slide+1)%featured.length;updateSlide()},3000)}
heroLink.addEventListener('pointerenter',event=>{if(event.pointerType==='touch')return;interactionStarted=true;hovering=true;restart()});
heroLink.addEventListener('pointerleave',event=>{if(event.pointerType==='touch')return;hovering=false;restart()});
home.addEventListener('focusin',()=>{focused=true;restart()});
home.addEventListener('focusout',event=>{if(!home.contains(event.relatedTarget)){focused=false;restart()}});
window.addEventListener('keydown',event=>{if(home.hidden || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || ['INPUT','TEXTAREA','SELECT'].includes(event.target.tagName) || event.target.isContentEditable || !['ArrowLeft','ArrowRight'].includes(event.key) || featured.length<2)return;event.preventDefault();slide=(slide+(event.key==='ArrowRight'?1:-1)+featured.length)%featured.length;updateSlide();restart()});
function visibility(section){destroyVideo();clearTimeout(autoStartTimer);home.hidden=section!=='home';grid.hidden=section!=='grid';detail.hidden=section!=='detail';about.hidden=section!=='about';contact.hidden=section!=='contact';restart();if(section==='home'&&!interactionStarted&&!reduceMotion.matches&&featured.length>1)autoStartTimer=setTimeout(()=>{if(home.hidden||reduceMotion.matches||interactionStarted)return;interactionStarted=true;if(!focused&&!hovering){slide=(slide+1)%featured.length;updateSlide()}restart()},10000)}
function render(){
  visibility('grid');grid.replaceChildren();
  const sections=[['installations','Video Installations'],['essay','Essay Films'],['single','Single Channel'],['photography','Photography']];
  for(const [category,title] of sections){
    const section=el('section',null,'work-section');section.id=`section-${category}`;
    const heading=el('h2',title,'section-heading');section.append(heading);
    const gallery=el('div',null,'grid');
    const works=category==='photography'?photographyData:items.filter(p=>p.category===category);
    for(const p of works){
      const card=el('a',null,'card');
      if(p.id==='garden-of-the-broken-hearted'&&category==='installations')card.classList.add('card-contain');
      card.href=category==='photography'?`#work/photography/${p.id}`:`#work/${p.category}/${p.id}`;
      card.setAttribute('aria-label',`${p.title}${p.year?', '+p.year:''}`);
      const img=el('img');img.src=safeURL(p.thumbnail);img.alt='';img.loading='lazy';img.onerror=()=>{img.remove();card.classList.add('missing')};
      card.append(img,el('span',p.title,'caption'));gallery.append(card);
    }
    section.append(gallery);grid.append(section);
  }
  grid.append(renderPublications());
}
function show(p){
  visibility('detail'); detail.replaceChildren();
  const layout=el('div',null,'project-layout');
  const visual=el('div',null,'project-visual');
  const stream=streams.find(x=>x.title===p.title);
  if(stream){mountVideo(visual,stream,p.title,safeURL(p.thumbnail));}
  else if(p.thumbnail){const img=el('img',null,'detail-image');img.src=safeURL(p.thumbnail);img.alt=p.title;img.onerror=()=>img.remove();visual.append(img)}
  const info=el('div',null,'project-info');
  const projectTypes={installations:'video installation',essay:'essay film',single:'single channel',photography:'photography'};
  const heading=el('div',null,'project-heading');
  const typeLine=el('div',null,'project-type-line');typeLine.append(el('span',projectTypes[p.category]||p.category,'project-type'),el('span',p.year||'','project-year'));heading.append(typeLine);
  const titleLine=el('div',null,'project-title-line');titleLine.append(el('h1',p.title));heading.append(titleLine);info.append(heading);
  const facts=el('div',null,'project-facts');
  const sample=sampleDetails[`${p.category}/${p.id}`];
  const factValues=sample||[['Format',p.undertitle],['Details',p.undertitle2],['Duration',p.length]];
  for(const [label,value] of factValues){if(!value||label.toLowerCase()==='year')continue;const row=el('div',null,'fact-row');let display=String(value).replace(/\bi\//g,'');if(label==='Duration')display=display.replace(/\bminutes?\b/gi,'m');row.append(el('span',label==='Duration'?'Work duration':label==='Format'?'Info':label,'fact-label'),el('span',display,'fact-value'));facts.append(row)}
  const omitEmptyFacts=!facts.childNodes.length&&(p.category==='photography'||(p.category==='installations'&&['lamu-project','garden-of-the-broken-hearted'].includes(p.id)));
  if(!omitEmptyFacts) info.append(facts);
  const description=el('div',null,'project-description');
  for(const key of (p.category==='photography'?['description']:['text','text2','text3','text4'])) if(p[key]) description.append(el('p',p[key].replace(/\bi\//g,'')));
  for(const paragraph of p.descriptionParagraphs||[]) description.append(el('p',paragraph));
  if(description.childNodes.length) info.append(description);
  if((p.category==='installations'&&p.id==='lamu-project')||(p.category==='photography'&&omitEmptyFacts)) heading.classList.add('project-heading-no-divider');
  const back=el('a','← back to works','back');back.href='#all';info.append(back);
  if(p.category==='installations'&&p.id==='garden-of-the-broken-hearted') renderGardenImages(visual);
  else if(p.category==='installations'&&p.id==='atlas-kassel') renderAtlasKasselBody(visual);
  else if((p.category==='photography'||p.id==='lamu-project')&&projectPhotography[p.id]) renderProjectArticle(visual,p);
  else if(projectVideoExtra[`${p.category}/${p.id}`]||projectImages[`${p.category}/${p.id}`]) renderProjectImages(visual,p,projectVideoExtra[`${p.category}/${p.id}`]||projectImages[`${p.category}/${p.id}`]);
  layout.append(visual,info);detail.append(layout);
  window.scrollTo(0,0);
}
function renderGardenImages(container){
  const body=el('section',null,'project-body');body.setAttribute('aria-label','The Garden of the Broken-Hearted images');
  for(const number of [2,3,4]){const figure=document.createElement('figure'),img=document.createElement('img');img.src=`assets/garden-${number}.jpg`;img.alt=`The Garden of the Broken-Hearted, image ${number-1}`;img.loading='lazy';img.decoding='async';figure.append(img);body.append(figure)}
  container.append(body);
}
function renderProjectArticle(container,project){
  const body=el('section',null,'project-body project-article');body.setAttribute('aria-label',`${project.title} images and information`);
  body.innerHTML=projectPhotography[project.id];
  body.querySelectorAll('img').forEach((img,index)=>{img.alt=`${project.title}, image ${index+1}`;if(project.category==='photography')return;if(img.closest('a'))return;const link=document.createElement('a');link.href=img.src;link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label',`Open ${project.title} image ${index+1} in a new tab`);img.replaceWith(link);link.append(img)});
  container.append(body);
}
function renderProjectImages(container,project,paths){
  const body=el('section',null,'project-body');body.setAttribute('aria-label',`${project.title} images`);
  paths.forEach((entry,index)=>{const {path,caption}=typeof entry==='string'?{path:entry}:entry;const figure=document.createElement('figure'),img=document.createElement('img');if(path==='images/articles/moving/moving.png')figure.className='moving-poster';img.src='https://drqlcggpj7pli.cloudfront.net/'+path;img.alt=`${project.title}, image ${index+1}`;img.loading='lazy';img.decoding='async';figure.append(img);if(caption)figure.append(el('figcaption',caption.replace(/\s+([,;.])/g,'$1')));body.append(figure)});
  if(project.category==='essay'&&project.id==='moving-museum'){const link=el('a','Read full script');link.href='https://drqlcggpj7pli.cloudfront.net/moving_museum_script.pdf';body.append(link)}
  const related={
    'installations/tdudp':['See also publication: Till Death Us Do Part','#publications/till-death-us-do-part'],
    'installations/adieu':['See also: Adieu Les Demoiselles Photo Series','#work/photography/adieu'],
    'installations/anima-mundi':['See also: Brave New World','#work/installations/brave-new-world'],
    'installations/veiled-woman':['See also: The Lamu Project','#work/installations/lamu-project'],
    'installations/festival-of-sacrifice':['See also: The Lamu Project','#work/installations/lamu-project'],
    'essay/blood-is-not-fresh-water':['See also: Blood Photo Series','#work/photography/blood']
  }[`${project.category}/${project.id}`];
  if(related){const link=el('a',related[0],'project-related');link.href=related[1];body.append(link)}
  container.append(body);
}
function renderAtlasKasselBody(container){
  const body=el('section',null,'project-body');
  body.setAttribute('aria-label','Atlas Fractured installation images and audio');
  const base='https://drqlcggpj7pli.cloudfront.net/images/articles/atlas_kassel/';
  const captions={7:'Installation view; Documenta14, Kassel, Germany 2017',8:'Installation view; Mask: The Art of Transformation. Kunst museum, Bonn 2019'};
  for(const number of [2,3,4,5,6,7,1,8]){
    if(number===8){
      const radio=el('section',null,'project-audio');
      radio.append(el('h2','Atlas Radio'),el('p','During Documenta in Kassel the radio program Atlas Radio was made with the soundtrack redesigned by Keir Fraser.'));
      const audio=document.createElement('audio');audio.controls=true;audio.preload='none';audio.src='https://drqlcggpj7pli.cloudfront.net/Atlas-Radio.wav';audio.setAttribute('aria-label','Atlas Radio');radio.append(audio);body.append(radio);
    }
    const figure=document.createElement('figure'),img=document.createElement('img');
    img.src=base+number+'.png';img.alt=`Atlas Fractured – Kassel, image ${number}`;img.loading='lazy';img.decoding='async';
    figure.append(img);if(captions[number])figure.append(el('figcaption',captions[number]));body.append(figure);
  }
  container.append(body);
}
const bioParagraphs=[
  "Theo Eshetu investigates the relationships between media, identity, and global information networks. After studying photography, he began producing videos in the early 1980s, aiming to deconstruct the hegemonic status of television, which he saw as an instrument of institutional power. His work, which includes documentaries, installations, and films, uses moving images to create a personal reality distinct from conventional institutional or political narratives. Shaped by his life in West Africa, Eshetu’s practice embraces a global perspective.",
  'Throughout his prolific oeuvre, Theo Eshetu has touched on themes taken from anthropology, art history, scientific research, and religious iconography to create a distinctive body of works based on a syncopated rhythmic montage of sounds and images. His works move freely from large-scale video installations to essay-like films that question the very reality of what images can reveal.',
  'Born in London to Ethiopian and Dutch parents and raised in Rome, his multi-national background speaks to the complexity of identity in an increasingly globalized world. World cultures, in particular the relationship between Africa and Europe, inform his work through images of a collective unconscious, to comment on how electronic media has shaped and formed our perception of the world.',
  'In 2012 he was a guest artist at the DAAD in Berlin and participated in documenta14 as well as touring exhibitions such as Snap Judgements, Senses of Time, and The Tropics. His works are in the collections of the Smithsonian Institute, MoMA, Tate Britain, the MET, and the Museo delle Civiltà among others.',
  'Theo Eshetu works between Rome and Berlin.'
];
const archiveSections={
  videography:{title:'complete videography',groups:[['',videoinstallationData]]},
  exhibitions:{title:'exhibitions',groups:[['solo shows and featured presentations',resumeData],['group shows, video and film festivals',groupData]]},
  collections:{title:'collection & awards',groups:[['works in collections',collectionData],['awards',prizeData]]},
  interviews:{title:'interviews & essays',groups:[['',interviewData]]}
};
function showAbout(){
  visibility('about');about.replaceChildren();
  const h=el('h1','about','about-heading');about.append(h);
  const intro=el('div',null,'about-intro'),copy=el('div',null,'about-copy');
  for(const paragraph of bioParagraphs) copy.append(el('p',paragraph));
  const video=document.createElement('video');video.className='about-portrait';video.src='https://drqlcggpj7pli.cloudfront.net/theo.mp4';video.autoplay=true;video.loop=true;video.muted=true;video.playsInline=true;video.preload='metadata';video.setAttribute('aria-label','Portrait video of Theo Eshetu');
  intro.append(copy,video);about.append(intro);
  const archive=el('section',null,'archive-index');archive.append(el('h2','archive','section-heading'));
  for(const [id,section] of Object.entries(archiveSections)){const link=el('a',null,'archive-link');link.href=`#about/${id}`;link.append(el('span',section.title));archive.append(link)}
  about.append(archive);window.scrollTo(0,0);
}
function renderArchiveGroup(container,heading,records){
  if(heading)container.append(el('h2',heading,'archive-subheading'));
  const grouped=new Map();for(const record of records){const key=String(record.date||'');if(!grouped.has(key))grouped.set(key,[]);grouped.get(key).push(record)}
  const entries=[...grouped.entries()].sort((a,b)=>{if(!a[0])return 1;if(!b[0])return -1;return (parseInt(b[0])||0)-(parseInt(a[0])||0)});
  for(const [year,rows] of entries){const group=el('div',null,'archive-year-group');group.append(el('div',year,'archive-year'));const list=el('div',null,'archive-list');
    for(const record of rows){const entry=el('article',null,'archive-entry');entry.append(el('p',String(record.title||'').replace(/\b[bi]\//g,'')));for(const k of ['subtitle','subtitle2','location'])if(record[k])entry.append(el('p',String(record[k]).replace(/\b[bi]\//g,''),'archive-secondary'));if(record.pdf||record.link2){const links=el('div',null,'archive-entry-links');for(const [label,url] of [['read pdf',record.pdf],['publication',record.link2]])if(url){const a=el('a',label+' ↗');a.href=safeURL(url);a.target='_blank';a.rel='noopener noreferrer';links.append(a)}entry.append(links)}list.append(entry)}
    group.append(list);container.append(group)
  }
}
function showArchive(id){const data=archiveSections[id];if(!data){showAbout();return}visibility('about');about.replaceChildren();const back=el('a','← about','archive-back');back.href='#about';about.append(back,el('h1',data.title,'about-heading'));for(const [heading,records] of data.groups)renderArchiveGroup(about,heading,records);window.scrollTo(0,0)}
function route(){let parts=location.hash.slice(1).split('/');if(!parts[0]||parts[0]==='home'){visibility('home');updateSlide();return}if(parts[0]==='publications'){render();const publication=[...grid.querySelectorAll('.publication-item')].find(button=>button.dataset.publication==='Till Death Us Do Part');if(parts[1]==='till-death-us-do-part'&&publication)publication.click();document.querySelector('#section-publications')?.scrollIntoView();return}if(parts[0]==='contact'){visibility('contact');window.scrollTo(0,0);return}if(parts[0]==='about'){if(parts[1])showArchive(parts[1]);else showAbout();return}if(parts[0]==='work'){let p=parts[1]==='photography'?photographyData.find(x=>x.id===parts[2]):items.find(x=>x.category===parts[1]&&x.id===parts[2]);if(p&&parts[1]==='photography')p={...p,category:'photography'};if(p){show(p);return}}render()}
window.addEventListener('hashchange',route);route();
