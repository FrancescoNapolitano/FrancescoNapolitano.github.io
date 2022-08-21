const menuList = [
    {
        "text":"SKILL",
        "icon-class":"fa-solid fa-gears"
    },
    {
        "text":"WORKING EXPERIENCE",
        "icon-class":"fa-solid fa-laptop-code"
    },
    {
        "text":"ABOUT ME",
        "icon-class":"fa-regular fa-user"
    },
    {
        "text":"CONTACT ME",
        "icon-class":"fa-solid fa-phone"
    }];
    
var idTarget = 0;

$(document).ready(function(){
    appearingText("Francesco Napolitano",'#appearing-name');
    
    menuList.forEach((el,i) => {
        appendList(el, i);
    })
});


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
        //$("#left-arrow-"+idTarget).show();
        $("#right-arrow-"+idTarget).show();
        $("#text-menu-"+idTarget).addClass("text-menu-animation");
        menuList.forEach((el, i)=>{
            if(i != idTarget){
                $("#text-menu-"+i).removeClass("text-menu-animation");
            }
        })
    },
    (eventOut)=>{
        menuList.forEach((el, i)=>{
            $("#text-menu-"+i).removeClass("text-menu-animation");
        
        })
    })
    var collapsedDiv = $("<div></div>").addClass("collapse").attr("id", "collapsed-text-"+i);
    var textInsideCollapsedDive = $("<p></p>").text("Prova prova");

    collapsedDiv.append(textInsideCollapsedDive).append($.parseHTML(skillPage));
    var icon = $("<i></i>").addClass(menuText["icon-class"]);
    var text =  $("<p></p>").attr("id","text-menu-"+i).text(menuText.text).addClass("list-text");
    div.append(icon).append(text);
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
    //<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    $("#menu-list").append(li);
}

const skillPage = `
<div>
<h3>SKILL PAGE</h3>
<p>This is a skill page test</p>
</div>`;

