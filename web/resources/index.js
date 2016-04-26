/*$(function() {
    FastClick.attach(document.body);
});*/
var rootURL = "http://ampstudy.elasticbeanstalk.com/rest";
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
var allCat = 0;
var allScr = 0.0;
var imgName = "";
var surType = "";
var finData = {};

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

var bArry = ["resources/images/b46.jpg", "resources/images/b12.jpg", "resources/images/b42.jpg", "resources/images/b2.jpg", "resources/images/b20.jpg", "resources/images/b36.jpg", "resources/images/b50.jpg",
    "resources/images/b3.jpg", "resources/images/b41.jpg", "resources/images/b52.jpg", "resources/images/b19.jpg", "resources/images/b47.jpg"];

var eArry = ["resources/images/e1.jpg", "resources/images/e2.jpg", "resources/images/e5.jpg", "resources/images/e9.jpg", "resources/images/e10.jpg", "resources/images/e12.jpg", "resources/images/e13.jpg"
    , "resources/images/e14.jpg", "resources/images/e16.jpg", "resources/images/e17.jpg", "resources/images/e18.jpg", "resources/images/e19.jpg"];

var fArry = ["resources/images/f1.jpg", "resources/images/f2.jpg", "resources/images/f3.jpg", "resources/images/f4.jpg", "resources/images/f6.jpg"
    , "resources/images/f8.jpg", "resources/images/f9.jpg", "resources/images/f10.jpg", "resources/images/f11.jpg", "resources/images/f12.jpg"
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

var ampData = {"id" : "", "surType" : "", "AMP_suic" : "", "AMP_suic_low" : "", "AMP_suic_mod" : "", "AMP_suic_high" : "", "AMP_pos" : "", "AMP_bodybag" : "", "AMP_corpse" : "",
    "AMP_guntohead1" : "", "AMP_guntohead2" : "", "AMP_guntohead3" : "", "AMP_height" : "", "AMP_morgue" : "", "AMP_noosetree" : "", "AMP_noose" : "", "AMP_pills" : "",
    "AMP_ledge" : "", "AMP_suffocation" : "", "AMP_bathdrown" : "", "AMP_bathslit" : "", "AMP_bloodgun1" : "", "AMP_bloodgun2" : "", "AMP_bloodwrist" : "", "AMP_drowned" : "",
    "AMP_float" : "", "AMP_hanged" : "", "AMP_hanging1" : "", "AMP_hanging2" : "", "AMP_OD" : "", "AMP_suffocation2" : "", "AMP_burned" : "", "AMP_burned2" : "", "AMP_deadbody" : "",
    "AMP_fall" : "", "AMP_gsw1" : "", "AMP_gsw2" : "", "AMP_gsw3" : "", "AMP_hangedface" : "", "AMP_slitthroat" : "", "AMP_slitthroat2" : "", "AMP_suffocatehang" : "",
    "AMP_hangedface2" : "", "AMP_beach" : "", "AMP_cat" : "", "AMP_cats" : "", "AMP_girlwaves" : "",
    "AMP_high5" : "", "AMP_like" : "", "AMP_panda" : "", "AMP_pig" : "", "AMP_puppy" : "", "AMP_squirrel" : "", "AMP_ball" : "", "AMP_pancakes" : ""}

var imgMap = {"resources/images/b46.jpg" : "AMP_ball", "resources/images/b12.jpg" : "AMP_beach", "resources/images/b42.jpg" : "AMP_cat", "resources/images/b2.jpg" : "AMP_cats", "resources/images/b20.jpg" : "AMP_girlwaves", "resources/images/b36.jpg" : "AMP_high5", "resources/images/b50.jpg" : "AMP_like",
    "resources/images/b3.jpg" : "AMP_pancakes", "resources/images/b41.jpg" : "AMP_panda", "resources/images/b52.jpg" : "AMP_pig", "resources/images/b19.jpg" : "AMP_puppy", "resources/images/b47.jpg" : "AMP_squirrel",
    "resources/images/a1.jpg" : "AMP_suffocatehang", "resources/images/a2.jpg" : "AMP_gsw1", "resources/images/a3.jpg" : "AMP_gsw2", "resources/images/a4.jpg" : "AMP_fall", "resources/images/a5.jpg" : "AMP_slitthroat", "resources/images/a6.jpg" : "AMP_gsw3", "resources/images/a7.jpg" : "AMP_burned",
    "resources/images/a8.jpg" : "AMP_deadbody", "resources/images/a9.jpg" : "AMP_slitthroat2", "resources/images/a10.jpg" : "AMP_burned2", "resources/images/a11.jpg" : "AMP_hangedface", "resources/images/a12.jpg" : "AMP_hangedface2",
    "resources/images/f1.jpg" : "AMP_bathslit", "resources/images/f2.jpg" : "AMP_bloodgun2", "resources/images/f3.jpg" : "AMP_bloodgun1", "resources/images/f4.jpg" : "AMP_float", "resources/images/f6.jpg" : "AMP_drowned"
    , "resources/images/f8.jpg" : "AMP_bathdrown", "resources/images/f9.jpg" : "AMP_hanged", "resources/images/f10.jpg" : "AMP_hanging1", "resources/images/f11.jpg" : "AMP_hanging2", "resources/images/f12.jpg" : "AMP_OD"
    , "resources/images/f13.jpg" : "AMP_bloodwrist", "resources/images/f14.jpg" : "AMP_suffocation2", "resources/images/e1.jpg" : "AMP_bodybag", "resources/images/e2.jpg" : "AMP_corpse", "resources/images/e5.jpg" : "AMP_guntohead1", "resources/images/e9.jpg" : "AMP_guntohead2",
    "resources/images/e10.jpg" : "AMP_guntohead3", "resources/images/e12.jpg" : "AMP_noose", "resources/images/e13.jpg" : "AMP_morgue", "resources/images/e14.jpg" : "AMP_noosetree", "resources/images/e16.jpg" : "AMP_pills", "resources/images/e17.jpg" : "AMP_height", "resources/images/e18.jpg" : "AMP_ledge",
    "resources/images/e19.jpg" : "AMP_suffocation"}

function loadSur() {
    if (surType == "2") {
        var gameJS = $("<script type='text/javascript' src='resources/game2.js'>");
    }
    else if (surType == "3") {
        var gameJS = $("<script type='text/javascript' src='resources/game3.js'>");
    }
    else if (surType == "4") {
        var gameJS = $("<script type='text/javascript' src='resources/game4.js'>");
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
    if (window.localStorage.getItem("stored") !== null) {
        $("#reBtn").show();
    }
    else {
        $("#reBtn").hide();
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
    if (pId.toLowerCase() == "sur2" || pId.toLowerCase() == "sur3" || pId.toLowerCase() == "sur4") {
        $(":mobile-pagecontainer" ).pagecontainer( "load", "base2line2.html", { showLoadMsg: false } );
    }
    else {
        $(":mobile-pagecontainer").pagecontainer("load", "baseline.html", {showLoadMsg: false});
    }
});

/*function testSur() {
    if (pId.toLowerCase() == "sur2" || pId.toLowerCase() == "sur3" || pId.toLowerCase() == "sur4") {
        $.mobile.changePage("#base2");
    }
    else {
        $.mobile.changePage("#base");
    }
}*/

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
    if (active) {
        active = false;
        var num = ampScr[ampArry[ampCnt]];

        if (num === 1) {
            aCat++;
        }
        else if (num === 2) {
            bCat++;
        }
        else if (num === 3) {
            eCat++;
        }
        else if (num === 4) {
            fCat++;
        }
        ampCnt++;
        ampData[imgName] = "1";
        ampSt();
    }
}

function unBtn() {
    if (active) {
        active = false;
        ampCnt++;
        ampData[imgName] = "0";
        ampSt();
    }
}

function ampScore() {
    aScr = aCat / 12.0;
    bScr = bCat / 12.0;
    eScr = eCat / 12.0;
    fScr = fCat / 12.0;
    allCat = aCat + eCat + fCat;
    allScr = allCat / 36.0;

    aScr = Math.round(aScr * 100) / 100;
    bScr = Math.round(bScr * 100) / 100;
    eScr = Math.round(eScr * 100) / 100;
    fScr = Math.round(fScr * 100) / 100;
    allScr = Math.round(allScr * 100) / 100;

    ampData["id"] = pId;
    ampData["surType"] = surType;
    ampData["AMP_suic"] = allScr;
    ampData["AMP_suic_low"] = eScr;
    ampData["AMP_suic_mod"] = fScr;
    ampData["AMP_suic_high"] = aScr;
    ampData["AMP_pos"] = bScr;
}

function ampSt() {
    if (ampCnt < 48) {
        $("#amp1").attr('src', ampArry[ampCnt]);
        $("#amp3").attr('src', ampSym[ampCnt]);
        imgName = imgMap[ampArry[ampCnt]];

        setTimeout(function() {
            setTimeout(function() {
                setTimeout(function() {
                    setTimeout(function() {
                        $("#amp3").hide();
                        $("#amp4").show();
                        active = true;}, 100);
                    $("#amp2").hide();
                    $("#amp3").show();}, 125);
                $("#amp1").hide();
                $("#amp2").show();}, 75);
            $("#amp4").hide();
            $("#amp1").show();}, 500);
    }
    else {
        ampScore();
        setTimeout(function() {
            if (surType == "1") {
                $.mobile.changePage("#base", {transition: "slide"});
            }
            else {
                $.mobile.changePage("#base2", {transition: "slide"});
            }
        }, 300);
    }
}

function saveData() {
    var path;
    if (surType == "1") {
        path = "amp";
    }
    else if (surType == "2") {
        path = "amp2";
    }
    else if (surType == "3") {
        path = "amp3";
    }
    else {
        path = "amp4";
    }

    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: rootURL + "/" + path,
        dataType: "json",
        data: dataToJSON(),
        success: function(data, textStatus, jqXHR){
        },
        error: function(jqXHR, textStatus, errorThrown){
        }
    });
}

function dataToJSON() {
    finData["id"] = pId;

    $.each(ampData, function(key, value) {
        finData[key] = value;
    });
    $.each(surArry, function(key, value) {
        finData[key] = value;
    });

    return JSON.stringify(finData);
}

function cleanupAmp(arr) {
    window.localStorage.removeItem("stored");

    if (arr.length > 0) {
        window.localStorage.setItem("stored", JSON.stringify(arr));
    }
}

function resendData() {
    var online = window.navigator.onLine;
    var posi = 0;
    var newStore = [];
    if (!online) {
        return;
    }
    else {
        $("#reBtn").hide();
    }
    if (window.localStorage.getItem("stored") !== null) {
        var redata = JSON.parse(window.localStorage.getItem("stored"));
        for (var i = 0; i < redata.length; i++) {
            var dataSend = redata[i];
            var path;
            if (dataSend.surType == "1") {
                path = "amp";
            }
            else if (dataSend.surType == "2") {
                path = "amp2";
            }
            else if (dataSend.surType == "3") {
                path = "amp3";
            }
            else {
                path = "amp4";
            }
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: rootURL + "/" + path,
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
    else {
        $("#reBtn").hide();
    }
}

function idSt() {
    pId = $("#idtxt").val();

    if (pId === "" || pId.length > 15) {
        $("#idtxt").val("");
        $("#err0").show();
    }
    else {
        $.mobile.changePage("#home");
        $.ajax({
         type: 'GET',
         url: rootURL + '/' + pId,
         dataType: "json",
         success: function(data){
         var user = data;
         if (user.match) {
             $("#err0").hide;
             $("#err1").hide;
             $("#err1-1").hide();
             if (user.locked != "1") {
                 surType = user.surType;
                 loadSur();
                 $.mobile.changePage("#home");
             }
             else {
                 $("#err1-1").show();
             }
         }
         else {
            $("#err0").show();
            }
         },
         error: function(err) {
            $("#err1").show();
            }
         });
    }
}

function preloadAmp() {
    var preAmp = [];
    ampArry = [];
    ampScr = {};
    ampSym = [];

    ampArry = aArry.concat(bArry, eArry, fArry);

    for (var i = 0; i < 12; i++) {
        ampScr[aArry[i]] = 1;
        ampScr[bArry[i]] = 2;
        ampScr[eArry[i]] = 3;
        ampScr[fArry[i]] = 4;
    }

    for (var i = 0; i < 48; i++) {
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
