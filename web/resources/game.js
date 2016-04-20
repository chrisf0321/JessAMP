$(function() {
    FastClick.attach(document.body);
});
var rootURL = "http://amptest.elasticbeanstalk.com/rest/tec";
var hasTouch = ('ontouchstart' in window);
var TOUCH_START = hasTouch ? "touchstart" : "mousedown";
var gamCnt = 0;
var imgCnt = 0;
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
var points = 0;
var fnLoop = false;
var q11logic = false;
var q14logic = false;
var q19logic = false;
var q24logic = false;
var q31logic = false;
var q45logic = false;
var q47logic = false;
var q52logic = false;
var q57logic = false;
var q68logic = false;
var base3Loaded = false;
var matchArry = [];
var trialMtch = [];
var ampArry = [];
var ampScr = {};
var ampSym = [];
var navArry = [];
var vis = [];
var navPos = 0;
var surArry = {DOB : "", Age : "", Gender : "", Language : "", Race : "", Education : "", Employment : "", School : "", Orientation : ""
               , Twitter : "", NSSI_yn_t1 : "", NSSI_agestart_t1 : "", NSSI_agelast_t1 : "", Cut_yn_t1 : "", Cut_wk_t1 : "", Cut_mth_t1 : "",
               Cut_yr_t1 : "", Cut_life_t1 : "", Burn_yn_t1 : "", Burn_wk_t1 : "", Burn_mth_t1 : "", Burn_yr_t1 : "", Burn_life_t1 : "",
               AltNSSI_yn_t1 : "", AltNSSI_wk_t1 : "", AltNSSI_mth_t1 : "", AltNSSI_yr_t1 : "", AltNSSI_life_t1 : "", NSSI_desirestop_t1 : "",
               NSSI_likelihood_t1 : "", Plan_yn_t1 : "", Plan_lethal_t1 : "", Plan_place_t1 : "", Plan_time_t1 : "", Plan_placetime_t1 : "",
               Plan_freq_t1 : "", Plan_wk_t1 : "", Plan_mth_t1 : "", Plan_yr_t1 : "", Plan_life_t1 : "", Plan_intent_t1 : "", wPlan_freq_t1 : "",
               wPlan_intent_t1 : "", Plan_likelihood_t1 : "", Prep_yn_t1 : "", Prep_conf_t1 : ""}

$(window).on('popstate', function(e) {
    e.preventDefault();
    return;
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

$("a").on(TOUCH_START, function() {
    var linkID = $(this).attr('id');
    var parID = '#' + $(this).parent().attr('id');
    
    if (linkID !== "instBtn1" && linkID !== "instBtn2") {
        if (linkID) {
            var num = parseInt(linkID);
            //countClick(num, parID);
        }
    }
});

$(document).on('pagebeforeshow', '#idHome', function() { 
    $("#err0").hide();
    $("#err1").hide();
    if ($(window).width() > $(window).height()) {
        $('.sur3').css({'margin-left': '40%', 'margin-right': '40%', 'margin-top': '10%'});
    }
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

$(document).on('pagebeforeshow', '#base', function() {
    navArry = [];
    $("#2, #3, #4, #5, #6, #7, #8, #9, #10, #s1Fin, #err1st, #back").hide();
    vis = ["#q1Btn", "#q2Btn", "#q3Btn", "#q4Btn", "#q5Btn", "#q6Btn", "#q7Btn", "#q8Btn", "#q9Btn", "#q10Btn"];
    FastClick.attach(document.body);
    $(function(){
        $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
    });
    bindBase();
});

$(document).on('pagebeforeshow', '#base2', function() {
    navArry = [];
    $("#11, #12, #13, #14, #15, #16, #17, #18, #19, #s2Fin, #baseInst2, #back, #20, #21, #22, #23, #24, #25, #26, #27, #28, #29, #30").hide();
    vis = ["#q11Btn", "#q12Btn", "#q13Btn", "#q14Btn", "#q15Btn", "#q16Btn", "#q17Btn", "#q18Btn", "#q19Btn", "#q20Btn",
            "#q21Btn", "#q22Btn", "#q23Btn", "#q24Btn", "#q25Btn", "#q26Btn", "#q27Btn", "#q28Btn", "#q29Btn", "#q30Btn",
            "#bInst2Btn", "#bInst1Btn"];
    FastClick.attach(document.body);
    bindBase2();
});

$(document).on('pagebeforeshow', '#base3', function() {
    navArry = [];
    $("#31, #32, #33, #34, #35, #36, #37, #38, #39, #s3Fin, #back, #40, #41, #42, #43, #44, #45, #46").hide();
    vis = ["#q31Btn", "#q32Btn", "#q33Btn", "#q34Btn", "#q35Btn", "#q36Btn", "#q37Btn", "#q38Btn", "#q39Btn", "#q40Btn",
        "#q41Btn", "#q42Btn", "#q43Btn", "#q44Btn", "#q45Btn", "#q46Btn", "#bInst3Btn"];
    FastClick.attach(document.body);
    bindBase3();
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
    $(":mobile-pagecontainer" ).pagecontainer( "load", "baseline.html", { showLoadMsg: false } );
});

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
    gamCnt = 0;
    points = 0;
    imgCnt = 0;
    totTime = 0.0;
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
    matchArry = [];
    trialMtch = [];
    active = false;
    hide = false;
    fnLoop = false;
}

function bindBase() {
    $("#q3Op1, #q3Op2, #q3Op3, #q3Op4").on('change', function() {
        surArry.Gender = $(this).val();
        setTimeout(function() {
            q3();
        }, 200);
    });

    $("#q4Op1, #q4Op2, #q4Op3, #q4Op4, #q4Op5, #q4Op6, #q4Op7, #q4Op8, #q4Op9, #q4Op10, #q4Op11").on('change', function() {
        surArry.Language = $(this).val();
        setTimeout(function() {
            q4();
        }, 200);
    });

    $("#q5Op1, #q5Op2, #q5Op3, #q5Op4, #q5Op5, #q5Op6, #q5Op7").on('change', function() {
        surArry.Race = $(this).val();
        setTimeout(function() {
            q5();
        }, 200);
    });

    $("#q6Op1, #q6Op2, #q6Op3, #q6Op4, #q6Op5, #q6Op6, #q6Op7, #q6Op8").on('change', function() {
        surArry.Education = $(this).val();
        setTimeout(function() {
            q6();
        }, 200);
    });

    $("#q7Op1, #q7Op2, #q7Op3").on('change', function() {
        surArry.Employment = $(this).val();
        setTimeout(function() {
            q7();
        }, 200);
    });

    $("#q8Op1, #q8Op2").on('change', function() {
        surArry.School = $(this).val();
        setTimeout(function() {
            q8();
        }, 200);
    });

    $("#q9Op1, #q9Op2, #q9Op3, #q9Op4").on('change', function() {
        surArry.Orientation = $(this).val();
        setTimeout(function() {
            q9();
        }, 200);
    });
}

function bindBase2() {
    $("#q11Op1, #q11Op2").on('change', function() {
        surArry.NSSI_yn_t1 = $(this).val();
        setTimeout(function() {
            q11();
        }, 200);
    });

    $("#q14Op1, #q14Op2").on('change', function() {
        surArry.Cut_yn_t1 = $(this).val();
        setTimeout(function() {
            q14();
        }, 200);
    });

    $("#q19Op1, #q19Op2").on('change', function() {
        surArry.Burn_yn_t1 = $(this).val();
        setTimeout(function() {
            q19();
        }, 200);
    });

    $("#q24Op1, #q24Op2").on('change', function() {
        surArry.AltNSSI_yn_t1 = $(this).val();
        setTimeout(function() {
            q24();
        }, 200);
    });

    $("#q29Op1, #q29Op2, #q29Op3, #q29Op4, #q29Op5, #q29Op6, #q29Op7, #q29Op8, #q29Op9, #q29Op10, #q29Op11").on('change', function() {
        surArry.NSSI_desirestop_t1 = $(this).val();
        setTimeout(function() {
            q29();
        }, 200);
    });

    $("#q30Op1, #q30Op2, #q30Op3, #q30Op4, #q30Op5, #q30Op6, #q30Op7, #q30Op8, #q30Op9, #q30Op10, #q30Op11").on('change', function() {
        surArry.NSSI_likelihood_t1 = $(this).val();
        if (!base3Loaded) {
            base3Loaded = true;
            $(":mobile-pagecontainer").pagecontainer("load", "baseline3.html", {showLoadMsg: false});
        }
        setTimeout(function() {
            q30();
        }, 200);
    });
}

function bindBase3() {
    $("#q31Op1, #q31Op2").on('change', function() {
        surArry.Plan_yn_t1 = $(this).val();
        setTimeout(function() {
            q31();
        }, 200);
    });

    $("#q32Op1, #q32Op2, #q32Op3, #q32Op4, #q32Op5, #q32Op6, #q32Op7, #q32Op8, #q32Op9, #q32Op10, #q32Op11").on('change', function() {
        surArry.Plan_lethal_t1 = $(this).val();
        setTimeout(function() {
            q32();
        }, 200);
    });

    $("#q33Op1, #q33Op2").on('change', function() {
        surArry.Plan_place_t1 = $(this).val();
        setTimeout(function() {
            q33();
        }, 200);
    });

    $("#q34Op1, #q34Op2").on('change', function() {
        surArry.Plan_time_t1 = $(this).val();
        setTimeout(function() {
            q34();
        }, 200);
    });

    $("#q35Op1, #q35Op2").on('change', function() {
        surArry.Plan_placetime_t1 = $(this).val();
        setTimeout(function() {
            q35();
        }, 200);
    });

    $("#q36Op1, #q36Op2, #q36Op3, #q36Op4, #q36Op5, #q36Op6, #q36Op7, #q36Op8").on('change', function() {
        surArry.Plan_freq_t1 = $(this).val();
        setTimeout(function() {
            q36();
        }, 200);
    });

    $("#q37Op1, #q37Op2, #q37Op3, #q37Op4, #q37Op5, #q37Op6, #q37Op7, #q37Op8").on('change', function() {
        surArry.Plan_wk_t1 = $(this).val();
        setTimeout(function() {
            q37();
        }, 200);
    });

    $("#q38Op1, #q38Op2, #q38Op3, #q38Op4, #q38Op5, #q38Op6, #q38Op7").on('change', function() {
        surArry.Plan_mth_t1 = $(this).val();
        setTimeout(function() {
            q38();
        }, 200);
    });

    $("#q39Op1, #q39Op2, #q39Op3, #q39Op4, #q39Op5, #q39Op6, #q39Op7").on('change', function() {
        surArry.Plan_yr_t1 = $(this).val();
        setTimeout(function() {
            q39();
        }, 200);
    });

    $("#q41Op1, #q41Op2, #q41Op3, #q41Op4, #q41Op5, #q41Op6, #q41Op7, #q41Op8, #q41Op9, #q41Op10, #q41Op11").on('change', function() {
        surArry.Plan_intent_t1 = $(this).val();
        setTimeout(function() {
            q41();
        }, 200);
    });

    $("#q42Op1, #q42Op2, #q42Op3, #q42Op4, #q42Op5, #q42Op6, #q42Op7").on('change', function() {
        surArry.wPlan_freq_t1 = $(this).val();
        setTimeout(function() {
            q42();
        }, 200);
    });

    $("#q43Op1, #q43Op2, #q43Op3, #q43Op4, #q43Op5, #q43Op6, #q43Op7, #q43Op8, #q43Op9, #q43Op10, #q43Op11").on('change', function() {
        surArry.wPlan_intent_t1 = $(this).val();
        setTimeout(function() {
            q43();
        }, 200);
    });

    $("#q44Op1, #q44Op2, #q44Op3, #q44Op4, #q44Op5, #q44Op6, #q44Op7, #q44Op8, #q44Op9, #q44Op10, #q44Op11").on('change', function() {
        surArry.Plan_likelihood_t1 = $(this).val();
        setTimeout(function() {
            q44();
        }, 200);
    });

    $("#q45Op1, #q45Op2").on('change', function () {
        surArry.Prep_yn_t1 = $(this).val();
        setTimeout(function () {
            q45();
        }, 200);
    });

    $("#q46Op1, #q46Op2, #q46Op3, #q46Op4, #q46Op5, #q46Op6, #q46Op7, #q46Op8, #q46Op9, #q46Op10, #q46Op11").on('change', function() {
        surArry.Prep_conf_t1 = $(this).val();
        setTimeout(function() {
            q46();
        }, 200);
    });
}

function baseSt() {
    $("#2").hide();
    $("#back").hide();
    $("#1").show();
}

function q1() {
    var bDate = $("#date").val();
    if(isValidDate(bDate)) {
        surArry.DOB = bDate
        $("#err1st").hide();
        $("#err2").hide();
        $("#1").hide();
        $("#2").show();
        $("#back").show();
        addArry(baseSt);
    }
    else {
        $("#err1st").show();
    }
}

function q2() {
    var age = parseInt($("#age").val());
    if (age > 0 && age < 150) {
        surArry.Age = age.toString();
        $("#err2").hide();
        $("#err3").hide();
        $("#2").hide();
        $("#3").show()
        addArry(q1);
    }
    else {
        $("#err2").show();
    }
}

function q3() {
    if (surArry.Gender != "") {
        $("#err3").hide();
        $("#err4").hide();
        $("#3").hide();
        $("#4").show();
        addArry(q2);
    }
    else {
        $("#err3").show();
    }
}

function q4() {
    if (surArry.Language != "") {
        $("#err4").hide();
        $("#err5").hide();
        $("#4").hide();
        $("#5").show();
        addArry(q3);
    }
    else {
        $("#err4").show();
    }
}

function q5() {
    if (surArry.Race != "") {
        $("#err5").hide();
        $("#err6").hide();
        $("#5").hide();
        $("#6").show();
        addArry(q4);
    }
    else {
        $("#err5").show();
    }
}

function q6() {
    if (surArry.Education != "") {
        $("#err6").hide();
        $("#err7").hide();
        $("#6").hide();
        $("#7").show();
        addArry(q5);
    }
    else {
        $("#err6").show();
    }
}

function q7() {
    if (surArry.Employment != "") {
        $("#err7").hide();
        $("#err8").hide();
        $("#7").hide();
        $("#8").show();
        addArry(q6);
    }
    else {
        $("#err7").show();
    }
}

function q8() {
    if (surArry.School != "") {
        $("#err8").hide();
        $("#err9").hide();
        $("#8").hide();
        $("#9").show();
        addArry(q7);
    }
    else {
        $("#err8").show();
    }
}

function q9() {
    if (surArry.Orientation != "") {
        $("#err9").hide();
        $("#err10").hide();
        $("#9").hide();
        $("#10").show();
        $("#fwd").show();
        addArry(q8);
    }
    else {
        $("#err9").show();
    }
}

function q10() {
    var handle = $("#twitter").val();
    if (handle != "" && handle.length < 20) {
        if (handle.toLowerCase() != "none") {
            var firstLetter = handle[0];
            if (firstLetter != "@") {
                handle = "@" + handle;
            }
        }
        surArry.Twitter = handle;
        $("#err10").hide();
        $("#10").hide();
        $("#s1Fin").show();
        $("#fwd").hide();
        addArry(q9);
        $(":mobile-pagecontainer" ).pagecontainer( "load", "baseline2.html", { showLoadMsg: false } );
    }
    else {
        $("#err10").show();
    }
}

function s1Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.changePage("#base2");
}

function base2St() {
    $("#11").hide();
    $("#err11").hide();
    $("#back").hide();
    $("#baseInst1").show();
}

function bInst1() {
    $("#baseInst1").hide();
    $("#err11").hide();
    $("#11").show();
    $("#back").show();
    addArry(base2St);
}

function q11() {
    var choice = surArry.NSSI_yn_t1;
    if (choice === "1") {
        q11logic = false;
        $("#err11").hide();
        $("#err12").hide();
        $("#11").hide();
        $("#12").show();
        addArry(bInst1);
    }
    else if (choice === "0") {
        q11logic = true;
        $("#err11").hide();
        $("#err30").hide();
        $("#11").hide();
        surArry.NSSI_agestart_t1 = "";
        surArry.NSSI_agelast_t1 = "";
        surArry.Cut_yn_t1 = "";
        surArry.Cut_wk_t1 = "";
        surArry.Cut_mth_t1 = "";
        surArry.Cut_yr_t1 = "";
        surArry.Cut_life_t1 = "";
        surArry.Burn_yn_t1 = "";
        surArry.Burn_wk_t1 = "";
        surArry.Burn_mth_t1 = "";
        surArry.Burn_yr_t1 = "";
        surArry.Burn_life_t1 = "";
        surArry.AltNSSI_yn_t1 = "";
        surArry.AltNSSI_wk_t1 = "";
        surArry.AltNSSI_mth_t1 = "";
        surArry.AltNSSI_yr_t1 = "";
        surArry.AltNSSI_life_t1 = "";
        surArry.NSSI_desirestop_t1 = "";
        $("#14, #19, #24, #29").find("input").each(function() {
            if ($(this).is(":checked")) {
                $(this).prop("checked", false).checkboxradio("refresh");
            }
        });
        $("#12, #13, #15, #16, #17, #18, #20, #21, #22, #23, #25, #26, #27, #28").find("input").each(function() {
            $(this).val("");
        });
        $("#30").show();
        $("#fwd").show();
        addArry(bInst1);
    }
    else {
        $("#err11").show();
    }
}

function q12() {
    var age = parseInt($("#age2").val());
    if (age > 0 && age < 100000) {
        surArry.NSSI_agestart_t1 = age.toString();
        $("#err12").hide();
        $("#err13").hide();
        $("#12").hide();
        $("#13").show();
        addArry(q11);
    }
    else {
        $("#err12").show();
    }
}

function q13() {
    var age = parseInt($("#age3").val());
    if (age > 0 && age < 100000) {
        surArry.NSSI_agelast_t1 = age.toString();
        $("#err13").hide();
        $("#err14").hide();
        $("#13").hide();
        $("#baseInst2").show();
        addArry(q12);
    }
    else {
        $("#err13").show();
    }
}

function bInst2() {
    $("#baseInst2").hide();
    $("#err14").hide();
    $("#14").show();
    addArry(q13);
}

function q14() {
    var choice = surArry.Cut_yn_t1;
    if (choice === "1") {
        q14logic = false;
        $("#err14").hide();
        $("#err15").hide();
        $("#14").hide();
        $("#15").show();
        addArry(bInst2);
    }
    else if (choice === "0") {
        q14logic = true;
        $("#err14").hide();
        $("#err19").hide();
        $("#14").hide();
        surArry.Cut_wk_t1 = "";
        surArry.Cut_mth_t1 = "";
        surArry.Cut_yr_t1 = "";
        surArry.Cut_life_t1 = "";
        $("#15, #16, #17, #18").find("input").each(function() {
            $(this).val("");
        });
        $("#19").show();
        addArry(bInst2);
    }
    else {
        $("#err14").show();
    }
}

function q15() {
    var age = parseInt($("#age5").val());
    if (age > 0 && age < 100000) {
        surArry.Cut_wk_t1 = age.toString();
        $("#err15").hide();
        $("#err16").hide();
        $("#15").hide();
        $("#16").show();
        addArry(q14);
    }
    else {
        $("#err15").show();
    }
}

function q16() {
    var age = parseInt($("#age6").val());
    if (age > 0 && age < 100000) {
        surArry.Cut_mth_t1 = age.toString();
        $("#err16").hide();
        $("#err17").hide();
        $("#16").hide();
        $("#17").show();
        addArry(q15);
    }
    else {
        $("#err16").show();
    }
}

function q17() {
    var age = parseInt($("#age7").val());
    if (age > 0 && age < 100000) {
        surArry.Cut_yr_t1 = age.toString();
        $("#err17").hide();
        $("#err18").hide();
        $("#17").hide();
        $("#18").show();
        addArry(q16);
    }
    else {
        $("#err17").show();
    }
}

function q18() {
    var age = parseInt($("#age8").val());
    if (age > 0 && age < 100000) {
        surArry.Cut_life_t1 = age.toString();
        $("#err18").hide();
        $("#err19").hide();
        $("#18").hide();
        $("#19").show();
        addArry(q17);
    }
    else {
        $("#err18").show();
    }
}

function q19() {
    var choice = surArry.Burn_yn_t1;
    if (choice === "1") {
        q19logic = false;
        $("#err19").hide();
        $("#err20").hide();
        $("#19").hide();
        $("#20").show();
        if (q14logic) {
            addArry(q14);
        }
        else {
            addArry(q18);
        }
    }
    else if (choice === "0") {
        q19logic = true;
        $("#err19").hide();
        $("#err24").hide();
        $("#19").hide();
        surArry.Burn_wk_t1 = "";
        surArry.Burn_mth_t1 = "";
        surArry.Burn_yr_t1 = "";
        surArry.Burn_life_t1 = "";
        $("#20, #21, #22, #23").find("input").each(function() {
            $(this).val("");
        });
        $("#24").show();
        if (q14logic) {
            addArry(q14);
        }
        else {
            addArry(q18);
        }
    }
    else {
        $("#err19").show();
    }
}

function q20() {
    var age = parseInt($("#age9").val());
    if (age > 0 && age < 100000) {
        surArry.Burn_wk_t1 = age.toString();
        $("#err20").hide();
        $("#err21").hide();
        $("#20").hide();
        $("#21").show();
        addArry(q19);
    }
    else {
        $("#err20").show();
    }
}

function q21() {
    var age = parseInt($("#age10").val());
    if (age > 0 && age < 100000) {
        surArry.Burn_mth_t1 = age.toString();
        $("#err21").hide();
        $("#err22").hide();
        $("#21").hide();
        $("#22").show();
        addArry(q20);
    }
    else {
        $("#err21").show();
    }
}

function q22() {
    var age = parseInt($("#age11").val());
    if (age > 0 && age < 100000) {
        surArry.Burn_yr_t1 = age.toString();
        $("#err22").hide();
        $("#err23").hide();
        $("#22").hide();
        $("#23").show();
        addArry(q21);
    }
    else {
        $("#err22").show();
    }
}

function q23() {
    var age = parseInt($("#age12").val());
    if (age > 0 && age < 100000) {
        surArry.Burn_life_t1 = age.toString();
        $("#err23").hide();
        $("#err24").hide();
        $("#23").hide();
        $("#24").show();
        addArry(q22);
    }
    else {
        $("#err23").show();
    }
}

function q24() {
    var choice = surArry.AltNSSI_yn_t1;
    if (choice === "1") {
        q24logic = false;
        $("#err24").hide();
        $("#err25").hide();
        $("#24").hide();
        $("#25").show();
        if (q19logic) {
            addArry(q19);
        }
        else {
            addArry(q23);
        }
    }
    else if (choice === "0") {
        q24logic = true;
        $("#err24").hide();
        $("#err30").hide();
        $("#24").hide();
        surArry.AltNSSI_wk_t1 = "";
        surArry.AltNSSI_mth_t1 = "";
        surArry.AltNSSI_yr_t1 = "";
        surArry.AltNSSI_life_t1 = "";
        $("#25, #26, #27, #28").find("input").each(function() {
            $(this).val("");
        });
        $("#29").find("input").each(function() {
            if ($(this).is(":checked")) {
                $(this).prop("checked", false).checkboxradio("refresh");
            }
        });
        $("#30").show();
        $("#fwd").show();
        if (q19logic) {
            addArry(q19);
        }
        else {
            addArry(q23);
        }
    }
    else {
        $("#err24").show();
    }
}

function q25() {
    var age = parseInt($("#age13").val());
    if (age > 0 && age < 100000) {
        surArry.AltNSSI_wk_t1 = age.toString();
        $("#err25").hide();
        $("#err26").hide();
        $("#25").hide();
        $("#26").show();
        addArry(q24);
    }
    else {
        $("#err25").show();
    }
}

function q26() {
    var age = parseInt($("#age14").val());
    if (age > 0 && age < 100000) {
        surArry.AltNSSI_mth_t1 = age.toString();
        $("#err26").hide();
        $("#err27").hide();
        $("#26").hide();
        $("#27").show();
        addArry(q25);
    }
    else {
        $("#err26").show();
    }
}

function q27() {
    var age = parseInt($("#age15").val());
    if (age > 0 && age < 100000) {
        surArry.AltNSSI_yr_t1 = age.toString();
        $("#err27").hide();
        $("#err28").hide();
        $("#27").hide();
        $("#28").show();
        addArry(q26);
    }
    else {
        $("#err27").show();
    }
}

function q28() {
    var age = parseInt($("#age16").val());
    if (age > 0 && age < 100000) {
        surArry.AltNSSI_life_t1 = age.toString();
        $("#err28").hide();
        $("#err29").hide();
        $("#28").hide();
        $("#29").show();
        addArry(q27);
    }
    else {
        $("#err28").show();
    }
}

function q29() {
    if (surArry.NSSI_desirestop_t1 != "") {
        $("#err29").hide();
        $("#err30").hide();
        $("#29").hide();
        $("#30").show();
        $("#fwd").show();
        addArry(q28);
    }
    else {
        $("#err29").show();
    }
}

function q30() {
    if (surArry.NSSI_likelihood_t1 != "") {
        $("#err30").hide();
        $("#30").hide();
        $("#fwd").hide();
        $("#s2Fin").show();
        if (q11logic) {
            addArry(q11);
        }
        else if (q24logic) {
            addArry(q24);
        }
        else {
            addArry(q29);
        }
    }
    else {
        $("#err30").show();
    }
}

function s2Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.changePage("#base3");
}

function base3St() {
    $("#31").hide();
    $("#err31").hide();
    $("#back").hide();
    $("#baseInst3").show();
}

function bInst3Btn() {

}

function q31() {

}

function q32() {

}

function q33() {

}

function q34() {

}

function q35() {

}

function q36() {

}

function q37() {

}

function q38() {

}

function q39() {

}

function q40() {

}

function q41() {

}

function q42() {

}

function q43() {

}

function q44() {

}

function q45() {

}

function q46() {

}

function s3Fin() {

}

function addArry(blk) {
    if ($.inArray(blk, navArry) === -1) {
        navArry.push(blk);
        navPos = navArry.length;
    }
    else {
        navPos = $.inArray(blk, navArry) + 1;
    }
}

function removeArry(blk) {
    pos = $.inArray(blk, navArry);
    if (pos !== -1) {
        navArry.splice(pos, navArry.length - pos);
    }
}

function backBtn() {
    if (navPos > 0) {
        if (hideAll()) {
            navPos--;
            navArry[navPos]();
        }
    }
}

function forwardBtn() {
    for (i = 0; i < vis.length; i++) {
        if ($(vis[i]).is(':visible')) {
            $(vis[i]).click();
            break;
        }
    }
}

function hideAll() {
    $("#1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #s1Fin").hide();
    $("#baseInst1, #11, #12, #13, #14, #baseInst2, #15, #16, #17, #18, #19, #20, #21, #22, #23, #24, #25, #26, #27, #28, #29, #30, #s2Fin").hide();
    return true;
}