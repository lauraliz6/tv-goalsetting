//btnMusic
var music = new Audio ();
music.src = "https://previews.customer.envatousercontent.com/files/275723079/preview.mp3";
var isPlaying = false;

document.getElementById("bgMusic").addEventListener("click", function togglePlay() {
    if (isPlaying) {
        music.pause();
    } else {
        music.play();
    }
});

music.onplaying = function() {
    isPlaying = true;
    document.getElementById("bgMusic").style.backgroundColor = "#8876de";
};

music.onpause = function() {
    isPlaying = false;
    document.getElementById("bgMusic").style.backgroundColor = "#707070";
};

//infoBtn
var infoBox1 = document.getElementById("infoBox_1");
var infoBox2 = document.getElementById("infoBox_2");
var infoBox3 = document.getElementById("infoBox_3");
var infoBox4 = document.getElementById("infoBox_4");

function infoIn() {
        infoBox1.style.display = "block";
        infoBox2.style.display = "block";
        infoBox3.style.display = "block";
        infoBox4.style.display = "block";
}

function infoOut() {
        infoBox1.style.display = "none";
        infoBox2.style.display = "none";
        infoBox3.style.display = "none";
        infoBox4.style.display = "none";
}

//video player enlarging 
var vidPlayer1 = document.getElementById('wrpVideo_1');
var vidPlayer2 = document.getElementById('wrpVideo_2');

vidPlayer1.addEventListener('play', function() {
    if (vidPlayer1.play) {
        vidPlayer1.style.width = "670px";
        vidPlayer1.style.height = "402px";
        document.getElementById('btnArrVidStop').style.top = "536px";
        document.getElementById('btnArrVidStop').style.transition = "0.4s all";
    }
});

vidPlayer1.addEventListener('pause', function() {
    if (vidPlayer1.paused) {
        vidPlayer1.style.width = "363.14px";
        vidPlayer1.style.height = "227.13px";
        document.getElementById('btnArrVidStop').style.top = "416.07px";
    }
});

vidPlayer2.addEventListener('play', function() {
    if (vidPlayer2.play) {
        vidPlayer2.style.width = "670px";
        vidPlayer2.style.height = "402px";
    }
});

vidPlayer2.addEventListener('pause', function() {
    if (vidPlayer2.paused) {
        vidPlayer2.style.width = "525.95px";
        vidPlayer2.style.height = "295.47px";
    }
});

document.getElementById('btnArrVidStop').addEventListener('click', function() {
    vidPlayer1.pause();
    document.getElementById('btnArrVidStop').style.transition = "0.4s background-color";
});

document.getElementById('vidBack').addEventListener('click', function() {
    vidPlayer2.pause();
});

//contentCard hover highlight & img/txt change //remove mouseover
document.getElementById('focusCard_1').addEventListener('mouseover', onHover_1);
document.getElementById('focusCard_1').addEventListener('mouseout', offHover_1);
document.getElementById('focusCard_2').addEventListener('mouseover', onHover_2);
document.getElementById('focusCard_2').addEventListener('mouseout', offHover_2);
document.getElementById('focusCard_3').addEventListener('mouseover', onHover_3);
document.getElementById('focusCard_3').addEventListener('mouseout', offHover_3);

function onHover_1() {
    $("#focus_1").attr('src', 'img/icons/icon_searchOne_01.png');
    document.getElementById("focusOne_color").style.color = "white";
    document.getElementById("focusCard_1").style.backgroundColor = "#8876de";
}

function offHover_1() {
    $("#focus_1").attr('src', 'img/icons/icon_searchOne_02.png');
    document.getElementById("focusOne_color").style.color = "#828282";
    document.getElementById("focusCard_1").style.backgroundColor = "white";
}

function onHover_2() {
    $("#focus_2").attr('src', 'img/icons/icon_searchTwo_01.png');
    document.getElementById("focusTwo_color").style.color = "white";
    document.getElementById("focusCard_2").style.backgroundColor = "#8876de";
}

function offHover_2() {
    $("#focus_2").attr('src', 'img/icons/icon_searchTwo_02.png');
    document.getElementById("focusTwo_color").style.color = "#828282";
    document.getElementById("focusCard_2").style.backgroundColor = "white";
}

function onHover_3() {
    $("#focus_3").attr('src', 'img/icons/icon_searchThree_01.png');
    document.getElementById("focusThree_color").style.color = "white";
    document.getElementById("focusCard_3").style.backgroundColor = "#8876de";
}

function offHover_3() {
    $("#focus_3").attr('src', 'img/icons/icon_searchThree_02.png');
    document.getElementById("focusThree_color").style.color = "#828282";
    document.getElementById("focusCard_3").style.backgroundColor = "white";
}

function removeMouseOff_1() {
    document.getElementById("focusCard_1").removeEventListener('mouseout', offHover_1);
}

function removeMouseOff_2() {
    document.getElementById("focusCard_2").removeEventListener('mouseout', offHover_2);
}

function removeMouseOff_3() {
    document.getElementById("focusCard_3").removeEventListener('mouseout', offHover_3);
}
//choose one goal card (highlights on and off depending on click)
//also changes p6, p7, p18 focus area goal card
document.addEventListener('click', function(e) {
    var put_1 = document.getElementById("faTextOne");
    var put_2 = document.getElementById("faTextTwo");
    var put_3 = document.getElementById("faTextThree");
    if (e.target.matches('#focusCard_1, #focus_1, #focusOne_color')) {
        $("#focus_1").attr('src', 'img/icons/icon_searchOne_01.png');
        document.getElementById("focusOne_color").style.color = "white";
        document.getElementById("focusCard_1").style.background = "#8876de";
        $("#focus_2").attr('src', 'img/icons/icon_searchTwo_02.png');
        document.getElementById("focusTwo_color").style.color = "#828282";
        document.getElementById("focusCard_2").style.background = "white";
        document.getElementById('focusCard_2').addEventListener('mouseout', offHover_2);
        $("#focus_3").attr('src', 'img/icons/icon_searchThree_02.png');
        document.getElementById("focusThree_color").style.color = "#828282";
        document.getElementById("focusCard_3").style.background = "white";
        document.getElementById('focusCard_3').addEventListener('mouseout', offHover_3);
        removeMouseOff_1();
        //changing focusArea icons to selection
        $("#focusAreaIcon_1").attr('src', 'img/icons/icon_searchOne_01.png');
        $("#focusAreaIcon_2").attr('src', 'img/icons/icon_searchOne_01.png');
        $("#focusAreaIcon_3").attr('src', 'img/icons/icon_searchOne_01.png');
        //editable text
        var get_1 = 'Fully capture client brand across visuals, content, and communications';
        put_1.innerHTML = get_1;
        put_2.innerHTML = get_1;
        put_3.innerHTML = get_1;
    } else if (e.target.matches('#focusCard_2, #focus_2, #focusTwo_color')) {
        $("#focus_2").attr('src', 'img/icons/icon_searchTwo_01.png');
        document.getElementById("focusTwo_color").style.color = "white";
        document.getElementById("focusCard_2").style.background = "#8876de";
        $("#focus_1").attr('src', 'img/icons/icon_searchOne_02.png');
        document.getElementById("focusOne_color").style.color = "#828282";
        document.getElementById("focusCard_1").style.background = "white";
        document.getElementById('focusCard_1').addEventListener('mouseout', offHover_1);
        $("#focus_3").attr('src', 'img/icons/icon_searchThree_02.png');
        document.getElementById("focusThree_color").style.color = "#828282";
        document.getElementById("focusCard_3").style.background = "white";
        document.getElementById('focusCard_3').addEventListener('mouseout', offHover_3);
        removeMouseOff_2();
        //changing focusArea icons to selection
        $("#focusAreaIcon_1").attr('src', 'img/icons/icon_searchTwo_01.png');
        $("#focusAreaIcon_2").attr('src', 'img/icons/icon_searchTwo_01.png');
        $("#focusAreaIcon_3").attr('src', 'img/icons/icon_searchTwo_01.png');
        var get_2 = 'Establish end-to-end consistent internal communications and set consistent external expectations';
        put_1.innerHTML = get_2;
        put_2.innerHTML = get_2;
        put_3.innerHTML = get_2;
    } else if (e.target.matches('#focusCard_3, #focus_3, #focusThree_color')) {
        $("#focus_3").attr('src', 'img/icons/icon_searchThree_01.png');
        document.getElementById("focusThree_color").style.color = "white";
        document.getElementById("focusCard_3").style.background = "#8876de";
        $("#focus_2").attr('src', 'img/icons/icon_searchTwo_02.png');
        document.getElementById("focusTwo_color").style.color = "#828282";
        document.getElementById("focusCard_2").style.background = "white";
        document.getElementById('focusCard_2').addEventListener('mouseout', offHover_2);
        $("#focus_1").attr('src', 'img/icons/icon_searchOne_02.png');
        document.getElementById("focusOne_color").style.color = "#828282";
        document.getElementById("focusCard_1").style.background = "white";
        document.getElementById('focusCard_1').addEventListener('mouseout', offHover_1);
        removeMouseOff_3();
        //changing focusArea icons to selection
        $("#focusAreaIcon_1").attr('src', 'img/icons/icon_searchThree_01.png');
        $("#focusAreaIcon_2").attr('src', 'img/icons/icon_searchThree_01.png');
        $("#focusAreaIcon_3").attr('src', 'img/icons/icon_searchThree_01.png');
        var get_3 = 'Set ourselves as the leader in employee communications and embody that internally';
        put_1.innerHTML = get_3;
        put_2.innerHTML = get_3;
        put_3.innerHTML = get_3;
    }
});
