/*$(function() {
    FastClick.attach(document.body);
});*/
var rootURL = "http://amptest.elasticbeanstalk.com/rest/tec";
var hasTouch = ('ontouchstart' in window);
var TOUCH_START = hasTouch ? "touchstart" : "mousedown";
var aCnt = 0;
var bCnt = 0;
var cCnt = 0;
var aCat = 0;
var bCat = 0;
var cCat = 0;
var dCat = 0;
var eCat = 0;
var fCat = 0;
var aScr = 0.0;
var bScr = 0.0;
var cScr = 0.0;
var dScr = 0.0;
var eScr = 0.0;
var fScr = 0.0;
var ampCnt = 0;
var right = 0;
var wrong = 0;
var hide = false;
var totTime = 0.0;
var pId = "";
var active = false;
var ampArry = [];
var ampScr = {};
var ampSym = [];

$(window).on('popstate', function(e) {
    e.preventDefault();
    return;
});

$("#idtxt").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        idSt();
    }
});

var aArry = ["resources/images/a1.jpg", "resources/images/a2.jpg", "resources/images/a3.jpg", "resources/images/a4.jpg", "resources/images/a5.jpg", "resources/images/a6.jpg", "resources/images/a7.jpg",
    "resources/images/a8.jpg", "resources/images/a9.jpg", "resources/images/a10.jpg", "resources/images/a11.jpg", "resources/images/a12.jpg"];

var bArry = ["resources/images/b1.jpg", "resources/images/b2.jpg", "resources/images/b3.jpg", "resources/images/b4.jpg", "resources/images/b5.jpg", "resources/images/b6.jpg", "resources/images/b7.jpg",
    "resources/images/b8.jpg", "resources/images/b9.jpg", "resources/images/b10.jpg", "resources/images/b11.jpg", "resources/images/b12.jpg", "resources/images/b13.jpg", "resources/images/b14.jpg",
    "resources/images/b15.jpg", "resources/images/b16.jpg", "resources/images/b17.jpg", "resources/images/b18.jpg", "resources/images/b19.jpg", "resources/images/b20.jpg", "resources/images/b21.jpg",
    "resources/images/b22.jpg", "resources/images/b23.jpg", "resources/images/b24.jpg", "resources/images/b25.jpg", "resources/images/b26.jpg", "resources/images/b27.jpg", "resources/images/b28.jpg",
    "resources/images/b29.jpg", "resources/images/b30.jpg", "resources/images/b31.jpg", "resources/images/b32.jpg", "resources/images/b33.jpg", "resources/images/b34.jpg", "resources/images/b35.jpg",
    "resources/images/b36.jpg", "resources/images/b37.jpg", "resources/images/b38.jpg", "resources/images/b39.jpg", "resources/images/b40.jpg", "resources/images/b41.jpg", "resources/images/b42.jpg",
    "resources/images/b43.jpg", "resources/images/b44.jpg", "resources/images/b45.jpg", "resources/images/b46.jpg", "resources/images/b47.jpg", "resources/images/b48.jpg", "resources/images/b49.jpg",
    "resources/images/b50.jpg", "resources/images/b51.jpg"];

var cArry = ["resources/images/c1.jpg", "resources/images/c2.jpg", "resources/images/c3.jpg", "resources/images/c4.jpg", "resources/images/c5.jpg", "resources/images/c6.jpg", "resources/images/c7.jpg",
    "resources/images/c8.jpg", "resources/images/c9.jpg", "resources/images/c10.jpg", "resources/images/c11.jpg", "resources/images/c12.jpg", "resources/images/c13.jpg", "resources/images/c14.jpg",
    "resources/images/c15.jpg", "resources/images/c16.jpg", "resources/images/c17.jpg", "resources/images/c18.jpg", "resources/images/c19.jpg", "resources/images/c20.jpg", "resources/images/c21.jpg",
    "resources/images/c22.jpg", "resources/images/c23.jpg", "resources/images/c24.jpg", "resources/images/c25.jpg", "resources/images/c26.jpg", "resources/images/c27.jpg", "resources/images/c28.jpg",
    "resources/images/c29.jpg", "resources/images/c30.jpg", "resources/images/c31.jpg", "resources/images/c32.jpg", "resources/images/c33.jpg", "resources/images/c34.jpg", "resources/images/c35.jpg",
    "resources/images/c36.jpg", "resources/images/c37.jpg", "resources/images/c38.jpg", "resources/images/c39.jpg", "resources/images/c40.jpg", "resources/images/c41.jpg", "resources/images/c42.jpg",
    "resources/images/c43.jpg", "resources/images/c44.jpg", "resources/images/c45.jpg", "resources/images/c46.jpg", "resources/images/c47.jpg", "resources/images/c48.jpg", "resources/images/c49.jpg",
    "resources/images/c50.jpg", "resources/images/c51.jpg", "resources/images/c52.jpg", "resources/images/c53.jpg", "resources/images/c54.jpg", "resources/images/c55.jpg", "resources/images/c56.jpg",
    "resources/images/c57.jpg", "resources/images/c58.jpg", "resources/images/c59.jpg", "resources/images/c60.jpg", "resources/images/c61.jpg", "resources/images/c62.jpg"];

var dArry = ["resources/images/d1.jpg", "resources/images/d2.jpg", "resources/images/d3.jpg", "resources/images/d4.jpg", "resources/images/d5.jpg", "resources/images/d6.jpg", "resources/images/d7.jpg",
    "resources/images/d8.jpg", "resources/images/d9.jpg", "resources/images/d10.jpg", "resources/images/d11.jpg", "resources/images/d12.jpg", "resources/images/d13.jpg", "resources/images/d14.jpg",
    "resources/images/d15.jpg", "resources/images/d16.jpg", "resources/images/d17.jpg", "resources/images/d18.jpg", "resources/images/d19.jpg", "resources/images/d20.jpg", "resources/images/d21.jpg",
    "resources/images/d22.jpg", "resources/images/d23.jpg", "resources/images/d24.jpg", "resources/images/d25.jpg", "resources/images/d26.jpg", "resources/images/d27.jpg", "resources/images/d28.jpg",
    "resources/images/d29.jpg", "resources/images/d30.jpg", "resources/images/d31.jpg", "resources/images/d32.jpg", "resources/images/d33.jpg", "resources/images/d34.jpg", "resources/images/d35.jpg",
    "resources/images/d36.jpg", "resources/images/d37.jpg", "resources/images/d38.jpg"];

var eArry = ["resources/images/e1.jpg", "resources/images/e2.jpg", "resources/images/e3.jpg", "resources/images/e4.jpg", "resources/images/e5.jpg", "resources/images/e6.jpg"
    , "resources/images/e7.jpg", "resources/images/e8.jpg", "resources/images/e9.jpg", "resources/images/e10.jpg", "resources/images/e11.jpg", "resources/images/e12.jpg", "resources/images/e13.jpg"
    , "resources/images/e14.jpg", "resources/images/e15.jpg", "resources/images/e16.jpg", "resources/images/e17.jpg", "resources/images/e18.jpg", "resources/images/e19.jpg", "resources/images/e20.jpg"
    , "resources/images/e21.jpg", "resources/images/e22.jpg"];

var fArry = ["resources/images/f1.jpg", "resources/images/f2.jpg", "resources/images/f3.jpg", "resources/images/f4.jpg", "resources/images/f5.jpg", "resources/images/f6.jpg"
    , "resources/images/f7.jpg", "resources/images/f8.jpg", "resources/images/f9.jpg", "resources/images/f10.jpg", "resources/images/f11.jpg", "resources/images/f12.jpg"
    , "resources/images/f13.jpg", "resources/images/f14.jpg"];

/*$("a").on(TOUCH_START, function() {
    var linkID = $(this).attr('id');
    var parID = '#' + $(this).parent().attr('id');

    if (linkID !== "instBtn1" && linkID !== "instBtn2") {
        if (linkID) {
            var num = parseInt(linkID);
            //countClick(num, parID);
        }
    }
});*/

function loadSur() {
    if (pId.toLowerCase() == "sur2") {
        var gameJS = $("<script type='text/javascript' src='resources/game2.js'>");
    }
    else if (pId.toLowerCase() == "sur3") {
        var gameJS = $("<script type='text/javascript' src='resources/game3.js'>");
    }
    else {
        var gameJS = $("<script type='text/javascript' src='resources/game.js'>");
    }
    $("body").append(gameJS);
}

$(document).on('pagebeforeshow', '#idHome', function() {
    $("#err0").hide();
    $("#err1").hide();
    if ($(window).width() > $(window).height()) {
        $('.sur3').css({'margin-left': '40%', 'margin-right': '40%', 'margin-top': '10%'});
    }
    $("#idtxt").focus();
});

$(document).on('pagebeforeshow', '#amp', function() {
    if (pId === "") {
        $.mobile.changePage("#idHome");
    }
    $('.ui-block-a, .ui-block-b').css({'border': '0px', 'padding-right': '0px', 'padding-top': '0px', 'padding-left': '0px', 'background-color': 'transparent'});
    if ($(window).width() > 1100) {
        $('.ui-grid-a').css({'margin-left': '0', 'margin-right': '0'});
    }
    $("#amp1, #amp2, #amp3").hide();
    $("#amp4").show();

    ampSt();
});

$(document).on('pagebeforeshow', '#home', function() {
    if (pId === "") {
        $.mobile.changePage("#idHome");
    }
});

$(window).on('orientationchange', function (e) {
    if (e.orientation == 'landscape') {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').removeClass('full_width');
        $('.ui-grid-c').css({'padding-left': '1px', 'padding-right': '1px', 'padding-top': '0px'});
    }
    if (e.orientation == 'portrait') {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').addClass('full_width');

        if ($(window).width() == 320 && $(window).height() <= 480) {
            $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() <= 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
});

$(document).on('pagebeforeshow', '#inst', function(){
    $("#instBtn2").hide();
    sizeC();
    preloadAmp();
    btnDelay();
    if (pId.toLowerCase() == "sur2" || pId.toLowerCase() == "sur3") {
        $(":mobile-pagecontainer" ).pagecontainer( "load", "base2line2.html", { showLoadMsg: false } );
    }
    else {
        $(":mobile-pagecontainer").pagecontainer("load", "baseline.html", {showLoadMsg: false});
    }
});

function testSur() {
    if (pId.toLowerCase() == "sur2" || pId.toLowerCase() == "sur3") {
        $.mobile.changePage("#base2");
    }
    else {
        $.mobile.changePage("#base");
    }
}

// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
function isValidDate(dateString)
{
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    var tdate = new Date();
    var curYear = tdate.getFullYear();

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < curYear - 150 || year >= curYear || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};

function sizeC() {
    if ($(window).height() > $(window).width()) {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').addClass('full_width');

        if ($(window).width() == 320 && $(window).height() <= 480) {
            $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() <= 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    else {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').removeClass('full_width');
    }
}


function btnDelay() {
    setTimeout(function() {
        $("#instBtn1, #instBtn2").show();
    }, 2000);
}

function plBtn() {
    var num = ampScr[ampArry[ampCnt]];

    if (num === 1) {
        aCat++;
    }
    else if (num === 2) {
        bCat++;
    }
    else if (num === 3) {
        cCat++;
    }
    else if (num === 4) {
        dCat++;
    }
    else if (num === 5) {
        eCat++;
    }
    else if (num === 6) {
        fCat++;
    }
    ampCnt++;
    ampSt();
}

function unBtn() {
    ampCnt++;
    ampSt();
}

function ampScore() {
    aScr = aCat / 12.0;
    bScr = bCat / 6.0;
    cScr = cCat / 6.0;
    dScr = dCat / 6.0;

    aScr = Math.round(aScr * 100) / 100;
    bScr = Math.round(bScr * 100) / 100;
    cScr = Math.round(cScr * 100) / 100;
    dScr = Math.round(dScr * 100) / 100;
}

function ampSt() {
    if (ampCnt < 72) {
        $("#amp1").attr('src', ampArry[ampCnt]);
        $("#amp3").attr('src', ampSym[ampCnt]);

        setTimeout(function() {
            setTimeout(function() {
                setTimeout(function() {
                    setTimeout(function() {
                        $("#amp3").hide();
                        $("#amp4").show();}, 100);
                    $("#amp2").hide();
                    $("#amp3").show();}, 125);
                $("#amp1").hide();
                $("#amp2").show();}, 75);
            $("#amp4").hide();
            $("#amp1").show();}, 500);
    }
    else {
        /*ampScore();
         var tDate = new Date();
         var ampData = {};
         var ampDate = formatDate(tDate) + " " + formatAMPM(tDate);
         ampData = {"id" : pId, "stimuli" : aScr, "pleasant" : bScr, "neutral" : cScr, "unpleasant" : dScr, "date" : ampDate};
         storeAmp(ampData);*/
        setTimeout(function() {
            $.mobile.changePage("#ampFin", {transition: "slide"});
        }, 300);
    }
}
function storeAmp(ampData) {
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: rootURL + "/amp",
        dataType: "json",
        data: JSON.stringify(ampData),
        success: function(data){
            resendDataAmp();
        },
        error: function(err) {
            var storedItems = JSON.parse(window.localStorage.getItem("amp")) || [];
            storedItems.push(ampData);
            window.localStorage.setItem("amp", JSON.stringify(storedItems));
        }
    });
}

function cleanupAmp(arr) {
    window.localStorage.removeItem("amp");

    if (arr.length > 0) {
        window.localStorage.setItem("amp", JSON.stringify(arr));
    }
}

function resendDataAmp() {
    var posi = 0;
    var newStore = [];
    if (window.localStorage.getItem("amp") !== null) {
        var redata = JSON.parse(window.localStorage.getItem("amp"));
        for (var i = 0; i < redata.length; i++) {
            var dataSend = redata[i];
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: rootURL + "/amp",
                dataType: "json",
                data: JSON.stringify(dataSend),
                success: function(data, textStatus, jqXHR){
                    if (posi === redata.length - 1) {
                        cleanupAmp(newStore);
                    }
                    posi++;
                },
                error: function(jqXHR, textStatus, errorThrown){
                    newStore.push(redata[posi]);
                    if (posi === redata.length - 1) {
                        cleanupAmp(newStore);
                    }
                    posi++;
                }
            });
        }
    }
}

function idSt() {
    pId = $("#idtxt").val();

    if (pId === "" || pId.length > 15) {
        $("#idtxt").val("");
        $("#err0").show();
    }
    else {
        loadSur();
        $.mobile.changePage("#home");
        /*$.ajax({
         type: 'GET',
         url: rootURL + '/' + pId,
         dataType: "json",
         success: function(data){
         var user = data;
         if (user.match) {
         $("#err0").hide;
         $("#err1").hide;
         $.mobile.changePage("#home");
         }
         else {
         $("#err0").show();
         }
         },
         error: function(err) {
         $("#err1").show();
         }
         });*/
    }
}

function preloadAmp() {
    var preAmp = [];
    ampArry = [];
    ampScr = {};
    ampSym = [];

    for (var i = 0; i < 12; i++) {
        var ampImg = aArry[i];
        if ($.inArray(ampImg, ampArry) === -1) {
            ampArry.push(ampImg);
            ampScr[ampImg] = 1;
        }
        //else i--;
    }
    for (var i = 0; i < 12; i++) {
        var ampImg = bArry[Math.floor(Math.random() * bArry.length)];
        if ($.inArray(ampImg, ampArry) === -1) {
            ampArry.push(ampImg);
            ampScr[ampImg] = 2;
        }
        else i--;
    }
    for (var i = 0; i < 12; i++) {
        var ampImg = cArry[Math.floor(Math.random() * cArry.length)];
        if ($.inArray(ampImg, ampArry) === -1) {
            ampArry.push(ampImg);
            ampScr[ampImg] = 3;
        }
        else i--;
    }
    for (var i = 0; i < 12; i++) {
        var ampImg = dArry[Math.floor(Math.random() * dArry.length)];
        if ($.inArray(ampImg, ampArry) === -1) {
            ampArry.push(ampImg);
            ampScr[ampImg] = 4;
        }
        else i--;
    }
    for (var i = 0; i < 12; i++) {
        var ampImg = eArry[Math.floor(Math.random() * eArry.length)];
        if ($.inArray(ampImg, ampArry) === -1) {
            ampArry.push(ampImg);
            ampScr[ampImg] = 5;
        }
        else i--;
    }
    for (var i = 0; i < 12; i++) {
        var ampImg = fArry[Math.floor(Math.random() * fArry.length)];
        if ($.inArray(ampImg, ampArry) === -1) {
            ampArry.push(ampImg);
            ampScr[ampImg] = 6;
        }
        else i--;
    }
    /*ampArry = ampArry.concat(eArry);
     ampScr["resources/images/e1.jpg"] = 5;
     ampScr["resources/images/e2.jpg"] = 5;
     ampScr["resources/images/e3.jpg"] = 5;
     ampScr["resources/images/e4.jpg"] = 5;
     ampScr["resources/images/e5.jpg"] = 5;
     ampArry.push("resources/images/e5.jpg");
     ampArry.push("resources/images/f1.jpg");
     ampArry.push("resources/images/f2.jpg");
     ampArry.push("resources/images/f3.jpg");
     ampArry.push("resources/images/f4.jpg");
     ampArry.push("resources/images/f5.jpg");
     ampScr["resources/images/f1.jpg"] = 6;
     ampScr["resources/images/f2.jpg"] = 6;
     ampScr["resources/images/f3.jpg"] = 6;
     ampScr["resources/images/f4.jpg"] = 6;
     ampScr["resources/images/f5.jpg"] = 6;*/

    for (var i = 0; i < 72; i++) {
        var num = (Math.floor(Math.random() * 199)) + 1;
        var sImg = "resources/images/pic" + num + ".jpg";
        if ($.inArray(sImg, ampSym) === -1) {
            ampSym.push(sImg);
        }
        else {
            i--;
        }
    }
    ampArry.shuffle();
    ampSym.shuffle();
    preAmp = ampArry.concat(ampSym);
    for (var i = 0; i < preAmp.length; i++) {
        $("<img />").attr("src", preAmp[i]);
    }
    delete preAmp;
}

Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    if ( i === 0 ) return;
    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
};

function formatDate(tDate) {
    var day = tDate.getDate();
    var month = tDate.getMonth() + 1;
    var year = tDate.getFullYear();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }

    return month + "/" + day + "/" + year;
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function resetGame() {
    right = 0;
    wrong - 0;
    aCnt = 0;
    bCnt = 0;
    cCnt = 0;
    ampCnt = 0;
    aCat = 0;
    bCat = 0;
    cCat = 0;
    dCat = 0;
    eCat = 0;
    fCat = 0;
    aScr = 0.0;
    bScr = 0.0;
    cScr = 0.0;
    dScr = 0.0;
    eScr = 0.0;
    fScr = 0.0;
    totTime = 0;
    //correct = 0;
    ampArry = [];
    ampSym = [];
    ampScr = {};
    active = false;
    hide = false;
}
