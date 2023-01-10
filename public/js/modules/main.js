export default function mainFn () {
    try {
        (function () {
    
            document.addEventListener('click', listenerClick);
            window.addEventListener('scroll', listenerScroll);
            
            // при клике на меню(логика) -----------------------------------------------------------------  
            function listenerClick (odject) {
                const clickOdject = odject.target;
                
                if(clickOdject.closest('.header__button')){
                    document.querySelector('body').classList.toggle('active');
            
                    const clickOdjectParent = clickOdject.closest('.header__button');
                    clickOdjectParent.classList.toggle('active');
            
                    clickOdjectParent.closest('.header__burger').classList.toggle('active');
            
                    const lineAll = document.querySelectorAll('.header__line');
                    lineAll.forEach(function (line){
                        line.classList.toggle('active');
                    });
            
                    const linkAll = document.querySelectorAll('.header__link');
                    linkAll.forEach(function (link){
                        link.classList.toggle('active');
                    });
            
                    if(!clickOdject.classList.contains('active')){
                        const activeSub = document.querySelectorAll('.active-sub');
                        activeSub.forEach(function(activeSubItem){
                            activeSubItem.classList.remove('active-sub');
                        });
                    }
                }
            
                if(clickOdject.closest('.header__line') && window.innerWidth <= 1020){
            
                    const headerLine = clickOdject.closest('.header__line');
                    const headerLink = headerLine.querySelector('.header__link');
            
                    if(headerLink.classList.contains('_sub')){
                        headerLine.classList.toggle('active-sub');
                    }
                    
                    const listSubAll = headerLine.querySelectorAll('.header__list-sub');
                    listSubAll.forEach(function (listSub){
                        listSub.classList.toggle('active-sub');
                    });
            
                    const lineSubAll = headerLine.querySelectorAll('.header__line-sub');
                    lineSubAll.forEach(function (lineSub){
                        lineSub.classList.toggle('active-sub');
                    });
            
                    const linkSubAll = headerLine.querySelectorAll('.header__link-sub');
                    linkSubAll.forEach(function (linkSub){
                        linkSub.classList.toggle('active-sub');
                    });
            
                }
            }
            
            // hover ----------------------------------------------------------------------------------------
            const hoverAll = document.querySelectorAll('._sub');
            
            hoverAll.forEach(function (hover){
            hover.addEventListener('mouseover', hoverOver);
            hover.addEventListener('mouseout', hoverOut);
            });
            
            function hoverOver (hover){
                const width = window.innerWidth;
            
                if(width > 1020){
            
                const over = hover.target;
            
                const overParent = over.closest('.header__line');
            
                const overListSub = overParent.querySelector('.header__list-sub');
                overListSub.classList.add('hover-sub');
            
                overListSub.addEventListener('mouseover', hoverOverSub);
                overListSub.addEventListener('mouseout', hoverOutSub);
            
            
                function hoverOverSub (e){
                    const overLineSub = overParent.querySelectorAll('.header__line-sub');
                    overListSub.classList.add('hover-sub');
                    overLineSub.forEach(function(e){
                        e.classList.add('hover-sub');
                    });
                
                    const overLinkSub = overParent.querySelectorAll('.header__link-sub');
                    overLinkSub.forEach(function(e){
                    e.classList.add('hover-sub');
                    });
                }
            
                function hoverOutSub (e){
                    const overLineSub = overParent.querySelectorAll('.header__line-sub');
                    overListSub.classList.remove('hover-sub');
                    overLineSub.forEach(function(e){
                        e.classList.remove('hover-sub');
                    });
                
                    const overLinkSub = overParent.querySelectorAll('.header__link-sub');
                    overLinkSub.forEach(function(e){
                    e.classList.remove('hover-sub');
                    });
                }
            
                const overLineSub = overParent.querySelectorAll('.header__line-sub');
                    overLineSub.forEach(function(e){
                    e.classList.add('hover-sub');
                });
            
                const overLinkSub = overParent.querySelectorAll('.header__link-sub');
                overLinkSub.forEach(function(e){
                e.classList.add('hover-sub');
                });
                }
            }
            
            function hoverOut (hover){
                const out = hover.target;
                const outParent = out.closest('.header__line');
            
                const outListSub = outParent.querySelector('.header__list-sub');
                outListSub.classList.remove('hover-sub');
            
                const outLineSub = outParent.querySelectorAll('.header__line-sub');
                outLineSub.forEach(function(e){
                    e.classList.remove('hover-sub');
                });
            
                const outLinkSub = outParent.querySelectorAll('.header__link-sub');
                outLinkSub.forEach(function(e){
                    e.classList.remove('hover-sub');
                });  
                
            }
            
            // крепеж бургера ---------------------------------------------------------------------
            const burger = document.querySelector('.header__burger');
            const burgerPxTop = burger.getBoundingClientRect().top;
            const headerList = document.querySelector('.header__list');
            
            
            // высота меню для скрола
            function fnHeaderList (){
                const burgerPxBottom = document.documentElement.clientHeight - burger.getBoundingClientRect().bottom;
                headerList.style.cssText = `max-height: ${burgerPxBottom}px;`;
            }
            fnHeaderList();
            //---
            
            function listenerScroll () {
                // высота меню для скрола
                fnHeaderList();
                //---
            
                if(burgerPxTop <= window.scrollY){
                    burger.classList.add('fix-burger');
                    headerList.classList.add('fix-burger');
            
                }else{
                    burger.classList.remove('fix-burger');
                    headerList.classList.remove('fix-burger');
                }
            }
            
            // бегуший текст------------------------------------------------
            
            const age17 = document.querySelector('.age-17');
            
            if(age17){
            
                window.addEventListener('scroll', numberScroll);
                let flag = 0;
                let age17Show = age17.getBoundingClientRect().bottom - document.documentElement.clientHeight;
                function numberScroll () {
                    if(window.scrollY >= age17Show && flag === 0){
                        startTime();
                        flag = 1;
                    }
                }
            }
            
            function startTime(){
                const elAge = document.getElementById('age');
                let timeAge = Number(elAge.dataset.time);
                let startAge = Number(elAge.dataset.start);
                let endAge = Number(elAge.dataset.end);
            
                const elAge1 = document.getElementById('age1');
                let timeAge1 = Number(elAge1.dataset.time);
                let startAge1 = Number(elAge1.dataset.start);
                let endAge1 = Number(elAge1.dataset.end);
                
                const elBurial = document.getElementById('burial');
                let timeBurial = Number(elBurial.dataset.time);
                let startBurial = Number(elBurial.dataset.start);
                let endBurial = Number(elBurial.dataset.end);
                
                const elCremation = document.getElementById('cremation');
                let timeCremation = Number(elCremation.dataset.time);
                let startCremation = Number(elCremation.dataset.start);
                let endCremation = Number(elCremation.dataset.end);
                
                showText(timeCremation, startCremation, endCremation, elCremation);
                showText(timeAge, startAge, endAge, elAge);
                showText(timeAge1, startAge1, endAge1, elAge1);
                showText(timeBurial, startBurial, endBurial, elBurial);
            }
            
            function showText (time, start, end, el) {
                const timeInterval = time / end;
                let step = 1;
                if(timeInterval < 10){
                    let proc = Math.trunc(10 / timeInterval);
                    step = proc;
                }
                let timeOut =  setTimeout(showText, timeInterval, time, step + start, end, el);
                if (start >= end) {
                    clearTimeout(timeOut);
                    start = end;
                }
                el.innerText = start + '+';
            }
            }());
        } catch (error) {
            console.log('',error);
        }
}