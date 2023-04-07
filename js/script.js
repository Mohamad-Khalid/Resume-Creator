// Contact with me 
// linkedin.com/in/muhamad-khalid
// github.com/Mohamad-Khalid

// Resume Creator

// Header : name , email , mobile , address, contact links (linkedin,github,portfolio)
// Summary 
// Education  
// Skills
// Projects
// Certificate & Awards
// Volunteering


//----- Common Data ------------------------
let buttons = document.querySelectorAll('.section')
let hrs = document.querySelectorAll('hr')
let ps = document.querySelectorAll('p')
let allSectionNames = document.querySelectorAll('h3')
let cvSections = document.querySelectorAll('.cv-section')

for(let i=0; i<ps.length ;i++){
  ps[i].style = "margin:0"
}

for(let i=0; i<hrs.length; i++){
  hrs[i].style = "display:none"
}

for(let i=0 ; i<allSectionNames.length; i++){
  allSectionNames[i].style = "margin:0 ; padding:0"
}

function deletePreviousInfo(){
  let forms = document.querySelectorAll('form')
  for (f of forms){
    f.remove()
  }

  document.querySelector('.order-area').textContent=''

}



function setSectionHead(sectionId , Name){
  document.querySelector(`#${sectionId} hr`).style 
  = 'display:block ; margin:0; border: 1px solid'
  let sectionName = document.querySelector(`#${sectionId} h3`)
  sectionName.textContent = Name;
}



//------------- Header -------------------------------------
function makeHeader(){
  document.getElementById('hdr').onclick = 
  function (ev){
    deletePreviousInfo()
      let form = document.createElement('form')
      form.innerHTML += '<input class="form-control" type="text" name="" id="" placeholder="Name">'
      form.innerHTML += '<input class="form-control" type="text" name="" id="c1" placeholder="Email">'
      form.innerHTML += '<input class="form-control" type="tel" name="" id="c2" placeholder="Mobile">'
      form.innerHTML += '<input class="form-control" type="text" name="" id="" placeholder="Addres">'
      form.innerHTML += '<input class="form-control" type="text" name="" id="c3" placeholder="Linkedin link">'
      form.innerHTML += '<input class="form-control" type="text" name="" id="c4" placeholder="GitHub link">'
      form.innerHTML += '<input class="form-control" type="text" name="" id="c5" placeholder="Portfolio link">'
      form.innerHTML += '<input type="submit" id="submit" class="btn btn-info">'
      document.getElementById('show-form').append(form)
      putHeaderInfo()
  }
}

function putHeaderInfo(){
  document.querySelector('form').onsubmit = 
  function(ev){
    ev.preventDefault();
    let headerInputValues = document.getElementsByClassName('form-control')
    let headerOutputValues = document.getElementById('header').children
    for(let i =0 ; i<headerInputValues.length; i++){
      let element = headerInputValues[i].value
      if(i==0){
        headerOutputValues[0].children[0].textContent = element;
      }
      else{

        if(i-1==0){
          headerOutputValues[1].children[i-1].children[0].setAttribute('href',`mailto:${element}`)
          headerOutputValues[1].children[i-1].children[0].textContent = element
        }
        else if(i-1==3 || i-1==4 ||i-1==5 ){
          if(element.length>0){
            headerOutputValues[1].children[i-1].children[0].textContent = (i-1==3?'Linkedin': i-1==4? 'GitHub':'Portfolio')
            headerOutputValues[1].children[i-1].children[0].setAttribute('href',element)
          }

        }
        else{
          headerOutputValues[1].children[i-1].textContent = element;
        }
      }
    }
    styleHeader()
  }
}

function styleHeader(){
  document.querySelector('#header').style = 'font-family:"Calibri",sans-serif;margin-bottom:5px;'
  let headerNamme = document.querySelector('#header h1')
  headerNamme.style = 'text-align:center; margin-bottom:2px'

  let cont = document.querySelector('.contacts')
  cont.style = "display:flex;justify-content:center;flex-wrap:wrap"
 
  let contacts = document.querySelector('.contacts').children
  for(let i=0 ;i<contacts.length;i++){
    if(contacts[i].textContent.length>0){
      contacts[i].style ='margin:0 8px;'
    }else{
      contacts[i].style =''
    }
  }
}


// ------------------- summary --------------------------------
function makeSummary(){
  document.getElementById('smr').onclick = 
  function (ev){
    deletePreviousInfo()
    let form = document.createElement('form')
    form.innerHTML += '<textarea style="word-wrap:break-word;" class="form-control" type="text" name="" id="" placeholder="Suummary" rows="10"></textarea>'
    form.innerHTML += '<input type="submit" id="submit" class="btn btn-info">'
    document.getElementById('show-form').append(form)
    putSummary()
  }
}

function putSummary(){
 document.querySelector('form').onsubmit = 
  function(ev){
    ev.preventDefault()
    setSectionHead('summary','Summary')
    let summaryContent = document.querySelector('.form-control').value
    let target = document.querySelector('#summary p')
    target.textContent = summaryContent
    styleSummary()
  }
}

function styleSummary(){
  document.querySelector('#summary').style ='font-family:"Calibri",sans-serif;margin-bottom:5px;'
}



//---------------Education --------------------
function makeEducation(){
  document.getElementById('edu').onclick = 
  function (ev){
    deletePreviousInfo()
    // add div in edu section
    let divToAll = document.createElement('div')
    divToAll.setAttribute('class','div-all')
    let div1 = document.createElement('div')
    div1.setAttribute('class','edu-div1')
    let div2 = document.createElement('div')
    div2.setAttribute('class','edu-div2')

    div1.innerHTML += '<p class="edu-degree"></p>'
    div1.innerHTML += '<p class="edu-school"></p>'
    div1.innerHTML += '<pre class="edu-description"></pre>'
    div2.innerHTML += '<p class="edu-date"></p>'
    divToAll.append(div1)
    divToAll.append(div2)
    document.getElementById('education').append(divToAll)
    let form = document.createElement('form')
    form.innerHTML += '<input class="form-control" type="text" placeholder="Degree">'
    form.innerHTML += '<input class="form-control" type="text" placeholder="School">'
    form.innerHTML += '<textarea  oninput="bulletTextArea(event)" rows="10" style="word-wrap:break-word;" class="form-control" placeholder="Description"></textarea>'
    form.innerHTML += '<input class="form-control" type="text" placeholder="Date from-To  ex: Oct 2010 - Jan 2015">'
    form.innerHTML += '<input type="submit" id="submit" class="btn btn-info">'
    document.getElementById('show-form').append(form)
    putEducation()
  }
}


function putEducation(){
  document.querySelector('form').onsubmit = 
   function(ev){
     ev.preventDefault()
     setSectionHead('education','Education')

     let eduData = document.querySelectorAll('.form-control') // 4
     let eduDiv = document.querySelector('#education .div-all:last-of-type').children //2
     
     for(let i=0; i<eduData.length; i++){
      if(i==0 || i==1 || i==2){
        eduDiv[0].children[i].textContent = eduData[i].value;
      }
      else{
        eduDiv[1].children[0].textContent = eduData[i].value
      }
     }
     styleEducation()
    }
 }

function styleEducation(){
 document.querySelector('#education').style = 'font-family:"Calibri",sans-serif;margin-bottom:5px;'
 let divAll = document.querySelectorAll('.div-all')
 for(let i=0; i<divAll.length; i++){
  divAll[i].style = "display:flex ;flex-wrap:wrap ; justify-content:space-between;margin-bottom:3px;"
 }

 let pre = document.querySelectorAll('#education pre')
 for(let i=0 ;i<pre.length;i++){
   pre[i].style = 'overflow:hidden;white-space: pre-wrap;margin:0px 0px  3px 10px; font-family:"Calibri",sans-serif; font-size: 1rem;'
 }

 let ps = document.querySelectorAll('#education p')
 for(let i=0; i< ps.length; i++){
  ps[i].style = 'margin:0;word-wrap:break-word;'
 }

 let div1 = document.querySelectorAll('.edu-div1')  
 for(let i=0 ;i<div1.length;i++){
  div1[i].style = "width:75%"
 }
 
 let deg = document.querySelectorAll('.edu-degree')
 for(let i=0 ;i<deg.length;i++){
   deg[i].style = "font-weight:bold; margin:0"
 }
 let div2 = document.querySelector('.edu-div2') 
}


// --------------- Experience ----------------------
function makeExperience(){
  document.getElementById('exp').onclick = 
  function (ev){
    deletePreviousInfo()
    // add div in exp section
    let divToAll = document.createElement('div')
    divToAll.setAttribute('class','exp-div-all')
    let div1 = document.createElement('div')
    div1.setAttribute('class','exp-div1')
    let div2 = document.createElement('div')
    div2.setAttribute('class','exp-div2')

    div1.innerHTML += '<p class="exp-title"></p>'
    div1.innerHTML += '<p class="exp-company"></p>'
    div1.innerHTML += '<pre class="exp-description"></pre>'
    div2.innerHTML += '<p class="exp-date"></p>'
    divToAll.append(div1)
    divToAll.append(div2)
    document.getElementById('Experience').append(divToAll)
    let form = document.createElement('form')
    form.innerHTML += '<input class="form-control" type="text" placeholder="Title">'
    form.innerHTML += '<input class="form-control" type="text" placeholder="Company">'
    form.innerHTML += '<textarea  oninput="bulletTextArea(event)" rows="10" style="word-wrap:break-word;" class="form-control" placeholder="Description"></textarea>'
    form.innerHTML += '<input class="form-control" type="text" placeholder="Date from-To  ex: Oct 2010 - present">'
    form.innerHTML += '<input type="submit" id="submit" class="btn btn-info">'
    document.getElementById('show-form').append(form)
    putExperience()
  }
}


function putExperience(){
  document.querySelector('form').onsubmit = 
   function(ev){
     ev.preventDefault()
     setSectionHead('Experience','Experience')
     let expData = document.querySelectorAll('.form-control') // 3 
     let expDiv = document.querySelector('.exp-div-all:last-of-type').children //2
     
     for(let i=0; i<expData.length; i++){
      if(i==0 || i==1 || i==2){
        expDiv[0].children[i].textContent = expData[i].value;
      }
      else{
        expDiv[1].children[0].textContent = expData[i].value
      }
    }
    styleExperience()
    }
 }

function styleExperience(){
 document.querySelector('#Experience').style = 'font-family:"Calibri", sans-serif;margin-bottom:5px;'
 let divAll = document.querySelectorAll('.exp-div-all')
 for(let i=0; i<divAll.length; i++){
  divAll[i].style = "display:flex; justify-content:space-between;margin-bottom:3px;"
 }
 let ps = document.querySelectorAll('#Experience p')
 for(let i=0; i< ps.length; i++){
  ps[i].style = 'margin:0;word-wrap:break-word; '
  /// font-family: sans-serif;
 }

 let pre = document.querySelectorAll('#Experience pre')
  for(let i=0 ;i<pre.length;i++){
    pre[i].style = 'overflow:hidden;white-space: pre-wrap;margin:0px 0px  3px 10px; font-family:"Calibri",sans-serif; font-size: 1rem;'
  }


 let div1 = document.querySelectorAll('.exp-div1')
 for(let i=0 ;i<div1.length;i++){
  div1[i].style = "width:80%"
 }
  
 let title = document.querySelectorAll('.exp-title')
 for(let i=0 ;i<title.length ;i++){
   title[i].style = "font-weight:bold; margin:0"
 }
}



//---------------Skills------------------------------
function makeSkills(){
  document.getElementById('skill').onclick = 
  function(ev){
    deletePreviousInfo()
    let skilDiv = document.createElement('div')
    let category = document.createElement('span')
    category.setAttribute('class','cat')
    let categorySkills = document.createElement('span')
    categorySkills.setAttribute('class','cat-skills')
    skilDiv.append(category)
    skilDiv.append(categorySkills)
    document.getElementById('skills').append(skilDiv)

    let form = document.createElement('form')
    form.innerHTML += '<input class="form-control" type="text" placeholder="Categpry ex: Frameworks">'
    form.innerHTML += '<input class="form-control" type="text" placeholder="Skills ex: Spring , React">'
    form.innerHTML += '<input type="submit" id="submit" class="btn btn-info">'
    document.getElementById('show-form').append(form)
    putSkills()
  }
}

function putSkills(){
  
  document.querySelector('form').onsubmit = 
  function (ev){
    ev.preventDefault()
    setSectionHead('skills','Skills')

    let skillsData = document.querySelectorAll('.form-control')
    let skDiv = document.querySelector('#skills div:last-of-type').children
    skDiv[0].textContent = skillsData[0].value+ " : "
    skDiv[1].textContent = skillsData[1].value 
    styleSkills()
  }
}

function styleSkills (){
  document.getElementById('skills').style = 'font-family:"Calibri", sans-serif;margin-bottom:5px;'
  //let all = document.getElementById('skills')
  let catSpans = document.querySelectorAll('.cat')
  let catSkils = document.querySelectorAll('.cat-skills')
  for(let i=0 ; i<catSpans.length;i++){
    catSpans[i].style = "font-weight:bold"
    catSkils[i].style = "word-wrap:break-word;"
  }

}


/// textareabullet
function bulletTextArea(event){
    let previousLength = 0;
    const bullet = "\u2022";
    const newLength = event.target.value.length;
    let line = document.querySelector('textarea').value
    
    const characterCode = event.target.value.substr(-1).charCodeAt(0);
    if (newLength > previousLength) {
      if (characterCode === 10) {
        event.target.value = `${event.target.value}${bullet} `;
      } else if (newLength === 1) {
        event.target.value = `${bullet} ${event.target.value}`;
      }
    }
    previousLength = newLength;
}

//------------- Projects-----------------------------------
function makeProject(){
  document.getElementById('proj').onclick = 
  function(ev){
    deletePreviousInfo()

    let projDiv = document.createElement('div')
    projDiv.setAttribute('class','')
    let projecName = document.createElement('span')
    projecName.setAttribute('class','proj-name')
    let githubLink = document.createElement('a')
    githubLink.setAttribute('class','git-link')
    let sep = document.createElement('span')
    sep.setAttribute('class','sep')
    
    let liveDemo = document.createElement('a')
    liveDemo.setAttribute('class','live-link')
    let projectDisc = document.createElement('pre')
    projectDisc.setAttribute('class','proj-desc')
    projDiv.append(projecName)
    projDiv.append(githubLink)
    projDiv.append(sep)
    projDiv.append(liveDemo)
    projDiv.append(projectDisc)
    document.getElementById('projects').append(projDiv)
   
    let form = document.createElement('form')
    form.innerHTML += '<input class="form-control" type="text" placeholder="Project Name">'
    form.innerHTML += '<input class="form-control" type="text" placeholder="GitHub Link">'
    form.innerHTML += '<input class="form-control" type="text" placeholder="Live Demo Link">'
    // bug here : input overflow in text area
    form.innerHTML += '<textarea  oninput="bulletTextArea(event)" rows="10" style="word-wrap:break-word;" class="form-control" placeholder="Project description"></textarea>'
    form.innerHTML += '<input type="submit" id="submit" class="btn btn-info">'
    document.getElementById('show-form').append(form)
    addProject()
  }
}

function addProject (){
  
  document.querySelector('form').onsubmit = 
  function (ev){
    ev.preventDefault()
    setSectionHead('projects','Projects')
    
    let projectData = document.querySelectorAll('.form-control') // 4
    let projectDiv = document.querySelector('#projects div:last-of-type').children // 5
    let j=0
    for(let i=0; i<projectData.length; i++){
      projectDiv[(j==2? ++j : j)].textContent = projectData[i].value
      j++;
    }
    styleProject()
  }
}


function styleProject(){
  document.getElementById('projects').style = 'font-family:"Calibri", sans-serif;margin-bottom:5px;'

  let projectName = document.querySelectorAll('.proj-name')
  for(let i=0 ;i<projectName.length ;i++){
    projectName[i].style = 'font-weight:bold;margin-right:10px'
  }

  let gitLink = document.querySelector('#projects div:last-of-type .git-link')
  const links = document.querySelectorAll('.form-control')
  if(gitLink.textContent.length > 0){
    let giturl = links[1].value
    gitLink.setAttribute('href', giturl)
    gitLink.setAttribute('target', '_blank')
    gitLink.textContent = 'Github Link'
    gitLink.style = "margin:0px 2px 0px 0;font-size:15px;color:#007bff;"
  }
 
  let livelink = document.querySelector('#projects div:last-of-type .live-link')
  if(livelink.textContent.length > 0){
    if(gitLink.textContent.length > 0){
      let sep = document.querySelector('#projects div:last-of-type .sep')
      sep.textContent='|'
    }
    
    let liveurl = links[2].value
    livelink.setAttribute('href',liveurl)
    livelink.setAttribute('target', '_blank')
    livelink.textContent = 'Live Preview'
    livelink.style = "margin:0px 0px 0px 2px;font-size:15px; color:#007bff;"
  }


  let pre = document.querySelectorAll('#projects pre')
  for(let i=0 ;i<pre.length;i++){
    pre[i].style = 'overflow:hidden;white-space: pre-wrap;margin:0px 0px  3px 10px; font-family:"Calibri",sans-serif; font-size: 1rem;'
  }
}


///--- certificates and awards -------------

function makeCert(){
  document.getElementById('cert').onclick = 
  function (ev){
    deletePreviousInfo()
    // add div in cert section
    let divToAll = document.createElement('div')
    divToAll.setAttribute('class','cert-div-all')
    let div1 = document.createElement('div')
    div1.setAttribute('class','cert-div1')
    let div2 = document.createElement('div')
    div2.setAttribute('class','cert-div2')

    div1.innerHTML += '<span class="cert-title"> </span>'
    div1.innerHTML += '<span class="cert-org"></span>'
    div1.innerHTML += '<pre class="cert-desc"></pre>'
    div1.innerHTML += '<span class="cert-link"></span>'
    div2.innerHTML += '<span class="cert-date"></span>'
    divToAll.append(div1)
    divToAll.append(div2)
    document.getElementById('certificate').append(divToAll)
    // not completed
    let form = document.createElement('form')
    form.innerHTML += '<input class="form-control" type="text" placeholder="Name">'
    form.innerHTML += '<input class="form-control" type="text" placeholder="Oraganization">'
    form.innerHTML += '<textarea  oninput="bulletTextArea(event)" rows="10" style="word-wrap:break-word;" class="form-control" placeholder="Description"></textarea>'
    form.innerHTML += '<input class="form-control" type="text" placeholder="Link">'
    form.innerHTML += '<input class="form-control" type="text" placeholder="Date ex: 2020 or Sep 2022">'
    form.innerHTML += '<input type="submit" id="submit" class="btn btn-info">'
    document.getElementById('show-form').append(form)
    putCert()
  }
}


function putCert(){
  document.querySelector('form').onsubmit = 
   function(ev){
     ev.preventDefault()
     setSectionHead('certificate','Certificates and Awards')
  
     let certData = document.querySelectorAll('.form-control') // 5
     let certDiv = document.querySelector('.cert-div-all:last-of-type').children //2
     
     for(let i=0; i<certData.length; i++){
      if(i==0 || i==1 || i==2){
        certDiv[0].children[i].textContent = certData[i].value;
      }
      else if(i==3){ // name   | www.google.com

        if(certData[i].value.length > 0){
          let certLink = document.createElement('a')
          certLink.setAttribute('href',certData[i].value)
          //certLink.setAttribute('style','color:#007bff')
          certLink.textContent = document.querySelector('.cert-div-all:last-of-type .cert-div1 .cert-title').textContent
          document.querySelector('.cert-div-all:last-of-type .cert-div1 .cert-title').textContent=''
          document.querySelector('.cert-div-all:last-of-type .cert-div1 .cert-title').append(certLink) 
        }

      }
      else{
        certDiv[1].children[0].textContent = certData[i].value
      }
      styleCert()
     }
    }
 }

function styleCert(){
 document.querySelector('#certificate').style = 'font-family:"Calibri", sans-serif;margin-bottom:5px;'
 let divAll = document.querySelectorAll('#certificate .cert-div-all')
 for(let i=0; i<divAll.length; i++){
  divAll[i].style = "display:flex; justify-content:space-between;margin-bottom:3px;"
 }

 let pre = document.querySelectorAll('#certificate pre')
 for(let i=0 ;i<pre.length;i++){
   pre[i].style = 'overflow:hidden;white-space: pre-wrap;margin:0px 0px  3px 10px; font-family:"Calibri",sans-serif; font-size: 1rem;'
 }

 let div1 = document.querySelectorAll('#certificate .cert-div1')
 for(let i=0 ;i<div1.length;i++){
  div1[i].style = "width:80%"
 }

// titile org desc date
 let title = document.querySelectorAll('#certificate .cert-title')
 for(let i=0 ;i<title.length ;i++){
   title[i].style = "font-weight:bold; margin-right: 5px"
 }

 let orgs = document.querySelectorAll('.cer-org')
 for(let i=0;i<orgs.length;i++){
  orgs[i].style = 'margin: 0px 5px'
 }


}

//-------------  Voluntering---------------------------

function makeVolunt(){
  document.getElementById('volunt').onclick = 
  function (ev){
    deletePreviousInfo()
    let divToAll = document.createElement('div')
    divToAll.setAttribute('class','volunt-div-all')
    let div1 = document.createElement('div')
    div1.setAttribute('class','volunt-div1')
    let div2 = document.createElement('div')
    div2.setAttribute('class','volunt-div2')

    div1.innerHTML += '<span class="volunt-title"> </span>'
    div1.innerHTML += '<span class="volunt-org"></span>'
    div1.innerHTML += '<pre class="volunt-desc"></pre>'
    div1.innerHTML += '<span class="volunt-link"></span>'
    div2.innerHTML += '<span class="volunt-date"></span>'
    divToAll.append(div1)
    divToAll.append(div2)
    document.getElementById('volunteering').append(divToAll)
    let form = document.createElement('form')
    form.innerHTML += '<input class="form-control" type="text" placeholder="Position">'
    form.innerHTML += '<input class="form-control" type="text" placeholder="Oraganization">'
    form.innerHTML += '<textarea  oninput="bulletTextArea(event)" rows="10" style="word-wrap:break-word;" class="form-control" placeholder="Description"></textarea>'
    form.innerHTML += '<input class="form-control" type="text" placeholder="Link">'
    form.innerHTML += '<input class="form-control" type="text" placeholder="Date">'
    form.innerHTML += '<input type="submit" id="submit" class="btn btn-info">'
    document.getElementById('show-form').append(form)
    putVolunt()
  }
}


function putVolunt(){
  document.querySelector('form').onsubmit = 
   function(ev){
     ev.preventDefault()
     setSectionHead('volunteering','Volunteering')

     let voluntData = document.querySelectorAll('.form-control') // 5
     let voluntDiv = document.querySelector('.volunt-div-all:last-of-type').children //2
     
     for(let i=0; i<voluntData.length; i++){
      if(i==0 || i==1 || i==2){
        voluntDiv[0].children[i].textContent = voluntData[i].value;
      }
      else if(i==3){ // name   | www.google.com

        if(voluntData[i].value.length > 0){
          let voluntLink = document.createElement('a')
          voluntLink.setAttribute('href',voluntData[i].value)
          voluntLink.textContent = document.querySelector('.volunt-div-all:last-of-type .volunt-div1 .volunt-title').textContent
          document.querySelector('.volunt-div-all:last-of-type .volunt-div1 .volunt-title').textContent=''
          document.querySelector('.volunt-div-all:last-of-type .volunt-div1 .volunt-title').append(voluntLink) 
        }

      }
      else{
        voluntDiv[1].children[0].textContent = voluntData[i].value
      }
      styleVolunt()
     }
    }
 }

function styleVolunt(){
 document.querySelector('#volunteering').style = 'font-family:"Calibri", sans-serif;margin-bottom:5px;'
 let divAll = document.querySelectorAll('.volunt-div-all')
 for(let i=0; i<divAll.length; i++){
  divAll[i].style = "display:flex; justify-content:space-between;margin-bottom:3px;"
 }

 let pre = document.querySelectorAll('#volunteering pre')
  for(let i=0 ;i<pre.length;i++){
    pre[i].style = 'overflow:hidden;white-space: pre-wrap;margin:0px 0px  3px 10px; font-family:"Calibri",sans-serif; font-size: 1rem;'
  }

 let div1 = document.querySelectorAll('.volunt-div1')
 for(let i=0 ;i<div1.length;i++){
  div1[i].style = "width:80%"
 }

// titile org desc date
 let title = document.querySelectorAll('.volunt-title')
 for(let i=0 ;i<title.length ;i++){
   title[i].style = "font-weight:bold; margin-right: 5px"
 }

 let orgs = document.querySelectorAll('.cer-org')
 for(let i=0;i<orgs.length;i++){
  orgs[i].style = 'margin: 0px 5px'
 }

}

function stylLinks(){
  document.querySelector('#button').onclick = 
  function(){
    let links = document.querySelectorAll('#prev a')
    for(let i=0 ; i<links.length;i++){
      links[i].style = 'color:#007bff; margin: 0px 5px 0px 5px; '
    }
  }
}


function clickToEdit(){
  document.getElementById('prev').onclick =
  function(event){
    deletePreviousInfo()
    let element = event.target
    let text = event.target.textContent
    let form = document.createElement('form')
      if(element.tagName == 'PRE'){
        form.innerHTML += '<textarea  oninput="bulletTextArea(event)" rows="10" style="word-wrap:break-word;" class="form-control" placeholder="Description"></textarea>'
      }
      else{
        form.innerHTML += '<input class="form-control" type="text" placeholder="Edit Here">'
      }
      form.innerHTML += '<input type="submit" id="submit" class="btn btn-info">'
      document.getElementById('left-side').append(form)
      document.querySelector('.form-control').value = text
      editText(element)
  }
}

function editText(element){
  document.querySelector('form').onsubmit = 
  function (ev){
    ev.preventDefault()
    element.textContent = document.querySelector('.form-control').value
  }
}

function preventPageReload(){
  const onConfirmRefresh = function (event) {
    event.preventDefault()
    return event.returnValue = "Are you sure you want to leave the page?"
  }
  window.addEventListener("beforeunload", onConfirmRefresh, { capture: true })
}





function orderSections(){
  document.getElementById('order-sections').onclick = 
  function(ev){

    deletePreviousInfo()

    let New = document.createElement('div')
    New.setAttribute('class','new-order col-sm-6')
    New.innerHTML ='<p>New Order</p>'


    let Old = document.createElement('div')
    Old.setAttribute('class','old-order col-sm-6')
    Old.innerHTML ='<p>Current Order</p>'

    let butDiv = document.createElement('div')
    butDiv.setAttribute('class','col-sm-12')
    butDiv.style = 'text-align: center;'
    butDiv.innerHTML =' <button class="btn btn-dark apply-order" id="ap-ord">Apply new order</button>'

    document.querySelector('.order-area').append(New)
    document.querySelector('.order-area').append(Old)
    document.querySelector('.order-area').append(butDiv)
  

    let sections = document.getElementById('prev').children
    for(let i=1; i<sections.length; i++){
      let name = sections[i].id
      let btn = document.createElement('button')
      btn.setAttribute('class','btn btn-dark btn-ord')
      btn.textContent = name
      document.querySelector('.old-order').append(btn)
    }

    moveSection()
  }
  
}

function moveSection(){
  let newOrder = document.querySelector('.new-order')
  document.querySelector('.old-order').onclick = 
  function(ev){
    if( ev.target.tagName =='BUTTON'){
      newOrder.append(ev.target)
    }
    applyNewOrder()
  }
}

function applyNewOrder(){
  document.getElementById('ap-ord').onclick = 
  function(){
    let arr =[]
    console.log(arr)

    let divs = document.querySelector('.new-order').children

    for(let i=1;i<divs.length;i++){
      let section = document.getElementById(divs[i].textContent)
      arr.push(section)                        
    }
    for(let j=0; j<arr.length; j++){
      document.getElementById('prev').append(arr[j])
    }
  }
}

// functioins call
makeHeader()
makeSummary()
makeEducation()
makeExperience()
makeSkills()
makeProject()
makeCert()
makeVolunt()
stylLinks()
clickToEdit()
orderSections()
preventPageReload()


//---------- generate pdf---------

//by window
let button = document.getElementById("button");
    let makepdf = document.getElementById("prev");
    button.addEventListener("click", function () {
        let mywindow = window.open("","PRINT","width=900,height=900");
        mywindow.document.write(prev.innerHTML);
        mywindow.document.close();
        mywindow.focus();
        mywindow.print();
        mywindow.close();
  
        return true;
    });



// Another ways to generate pdf but have problems
// html2pdf
// document.getElementById('button').onclick = function(){
//   let m = document.getElementById('prev')
//   console.log(m)
//   html2pdf(m)
// }



//jspdf
// var button = document.getElementById("button");
// button.addEventListener("click", function () {
//     var doc = new jsPDF();
//     var makePDF = document.querySelector("#prev");
//     // fromHTML Method
//     doc.fromHTML(makePDF);
//     doc.save("output.pdf");
// });

//------------------Remember-----------------------------------

//-----------
// date input : date not text
// page break preview
// save on info to file 
// can edit                                   done 
// can order sections                         done


