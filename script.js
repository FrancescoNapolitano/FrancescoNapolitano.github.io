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
    var div= $("<div></div>").attr("id","div-list-"+i).addClass("list");
    div.hover((eventIn)=>{
        idTarget = eventIn.currentTarget.id.slice(-1);
        //$("#left-arrow-"+idTarget).show();
        $("#right-arrow-"+idTarget).show();
        $("#text-menu-"+idTarget).addClass("text-menu-animation");
        menuList.forEach((el, i)=>{
            if(i != idTarget){
                $("#left-arrow-"+i).hide();
                $("#right-arrow-"+i).hide();
                $("#text-menu-"+i).removeClass("text-menu-animation");
            }
        })
    },
    (eventOut)=>{
        menuList.forEach((el, i)=>{

                $("#left-arrow-"+i).hide();
                $("#right-arrow-"+i).hide();
                $("#text-menu-"+i).removeClass("text-menu-animation");
            
        })
    })
    var leftArrow = $("<p></p>").text("⇨").attr("id","left-arrow-"+i).hide();
    var icon = $("<i></i>").addClass(menuText["icon-class"]);
    //var leftArrow = $("<img>").attr("src","./arrow.gif").attr("id","left-arrow-"+i).addClass("arrow-image").hide();
    var text =  $("<p></p>").attr("id","text-menu-"+i).text(menuText.text);
    //var rightArrow = $("<p></p>").text("⇦").attr("id","right-arrow-"+i).hide();
    div.append(leftArrow).append(icon).append(text);
    li.append(div);
    $("#menu-list").append(li);
}

