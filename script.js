const menuList = [
    {
        "text":"SKILL",
        "icon-class":"fa-solid fa-gears",
        "detail-page": createLevelForSkillPage()
    },
    {
        "text":"WORKING EXPERIENCE",
        "icon-class":"fa-solid fa-laptop-code",
        "detail-page": null
    },
    {
        "text":"ABOUT ME",
        "icon-class":"fa-regular fa-user",
        "detail-page": null
    },
    {
        "text":"CONTACT ME",
        "icon-class":"fa-solid fa-phone",
        "detail-page": contactMePage()
    }];
    
var idTarget = 0;

$(document).ready(function(){
    //appearingText("Francesco Napolitano",'#appearing-name');
    $('#appearing-name').text("Francesco Napolitano");
    menuList.forEach((el,i) => {
        appendList(el, i);
    })
});

function contactMePage(){
    var numeroDiTelefono = "+39 3391056810";
    var email = "francesco.napolitano117@gmail.com"; 
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date);
    let contactMePage = `<div id="contact-me-page" class="contact-page row">`

    contactMePage = contactMePage + `<div><p>Mobile phone : ${numeroDiTelefono}</p></div>`
    contactMePage = contactMePage + `<div><p>Email : <a id="my-email" href="mailto:francesco.napolitano117@gmail.com">${email}</p></a></div>`
    contactMePage = contactMePage + "</div>"
    return contactMePage;
}

function appearingText(text, domId){
    var code = text.split("");
    var sentence = '';
    var index = 0;
    var intervalId = setInterval(codein, 80);
    function codein(){
    sentence += code[index];
    $(domId).text(sentence);
    index++;
    if (index == code.length) {
        clearInterval(intervalId);
    }
    }
}

function appendList(menuText, i){
    var li = $("<li></li>").attr("id","list-"+i);
    var div= $("<button></button>").attr("id","div-list-"+i).addClass("list").addClass("button-menu");
    div.hover((eventIn)=>{
        idTarget = eventIn.currentTarget.id.slice(-1);
        $("#div-list-"+idTarget).addClass("border-button-animation");
        $("#text-menu-"+idTarget).addClass("text-menu-animation");
        $("#icon-"+i).addClass("icon-animation");

        menuList.forEach((el, i)=>{
            if(i != idTarget){
                $("#div-list-"+i).removeClass("border-button-animation");
                $("#text-menu-"+i).removeClass("text-menu-animation");
                $("#icon-"+i).removeClass("icon-animation");
            }
        })
    },
    (eventOut)=>{
        menuList.forEach((el, i)=>{
            $("#div-list-"+i).removeClass("border-button-animation");
            $("#text-menu-"+i).removeClass("text-menu-animation");
            $("#icon-"+i).removeClass("icon-animation");
        })
    })
    var collapsedDiv = $("<div></div>").addClass("collapse").attr("id", "collapsed-text-"+i);
    collapsedDiv.append($.parseHTML(menuText["detail-page"]));
    var icon = $("<i></i>").addClass(menuText["icon-class"]).addClass("icon").attr("id", "icon-"+i);
    var text =  $("<p></p>").attr("id","text-menu-"+i).text(menuText.text).addClass("list-text");
    div.append(icon).append(text);
    li.addClass("menu-li");
    li.append(div).append(collapsedDiv);
    li.attr("data-bs-toggle", "collapse");
    li.attr("href", "#collapsed-text-"+i);
    li.attr("aria-expanded", "false");
    li.attr("aria-controls", "collapsed-text-"+i);

    let targetOfClick;
    //Onclick to hide all the other
    li.click((event)=>{
        targetOfClick = event.currentTarget.id.slice(-1);
        menuList.forEach((el, i)=>{
            if(i != idTarget){
                $("#collapsed-text-"+i).removeClass("show");
                if($("#list-"+i).css("display") == "none"){
                    $("#list-"+i).show();
                }
                else{
                    $("#list-"+i).hide();
                }

            }
        })
    })
    $("#menu-list").append(li);
}

function createLevelForSkillPage(){
    //later i will download this
    const skillsWithLevel = {
        "BACKEND":{
            skill:[
                {
                    "name":"JAVA",
                    "level": "4",
                    "icon-class":`<i class="fa-brands fa-java"></i>`
                },
                {
                    "name":"SPRINGBOOT",
                    "level": "4"
                },
                {
                    "name":"NODEJS",
                    "level": "3",
                    "icon-class":`<i class="fa-brands fa-node-js"></i>`
                }
            ],
            class:"col-sm-6 col-md-4"
        },
        "FRONTEND":{
            skill:[
                {
                    "name":"JAVASCRIPT",
                    "level": "4"
                },
                {
                    "name":"TYPESCRIPT",
                    "level": "2"
                },
                {
                    "name":"SVELTE",
                    "level": "3"
                }
            ],
            "class":"col-sm-6 col-md-4"
        },
        "BASIC KNOWLEDGE":{
            skill:[            {
                "name":"DOCKER"
            },
            {
                "name":"ANGULAR"
            },
            {
                "name":"MONGO DB"
            },
            {
                "name":"SQL"
            },
            {
                "name":"KAFKA"
            }],
            "class":"col-12 col-md-4"
        }
    };
    const maxLevel = 5;

    let skillPage = `<div class="skill-page row">`

    Object.keys(skillsWithLevel).forEach( key => {
        skillPage = skillPage + `<div class="skill-page-section ${skillsWithLevel[key].class}">`;
        skillPage = skillPage + `<p>${key}</p>`;
        skillsWithLevel[key].skill.forEach( singleSkill => {
            let skillName = singleSkill.name;
            skillPage = skillPage + `<div style="display:flex"><p>${skillName}</p></div>`;
            skillPage = skillPage + `<div style="display:flex">`;
            for( let i = 0; i< singleSkill.level; i++){
                skillPage = skillPage + `<div style="width: 20px; height: 20px; background-color: white; border: solid 2px black; margin: 1px">
                </div>`
            }
            for( let i = 0; i< ( maxLevel - singleSkill.level ); i++){
                skillPage = skillPage + `<div style="width: 20px; height: 20px; border: solid 2px black; margin: 1px">
                </div>`
            }
            skillPage = skillPage + `</div>`;
        })
        skillPage = skillPage + `</div>`;
    })

    skillPage = skillPage + "</div>";
    return skillPage;
}




