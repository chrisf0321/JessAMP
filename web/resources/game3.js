var rootURL = "http://amptest.elasticbeanstalk.com/rest/tec";
var hasTouch = ('ontouchstart' in window);
var TOUCH_START = hasTouch ? "touchstart" : "mousedown";
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
var q95logic = false;
var q98logic = false;
var q100logic = false;
var q103logic = false;
var q105logic = false;
var q108logic = false;
var q110logic = false;
var q113logic = false;
var q115logic = false;
var q118logic = false;
var q120logic = false;
var q123logic = false;
var q125logic = false;
var q128logic = false;
var q130logic = false;
var q133logic = false;
var q135logic = false;
var q138logic = false;
var q144logic = false;
var q159logic = false;
var base3Loaded = false;
var navArry = [];
var vis = [];
var navPos = 0;
var surArry = {NSSI_yn_t3 : "", Cut_yn_t3 : "", Cut_freq_t3 : "", Burn_yn_t3 : "", Burn_freq_t3 : "", OtherNSSI_yn_t3 : "", OtherNSSI_freq_t3 : "", NSSI_desirestop_t3 : "",
    NSSI_likelihood_t3 : "", Plan_yn_t3 : "", Plan_lethal_t3 : "", Plan_place_t3 : "", Plan_time_t3 : "", Plan_placetime_t3 : "",
    Plan_freq_t3 : "", Plan_freq2_t3 : "", Plan_intent_t3 : "", Plan_likelihood_t3 : "", Prep_yn_t3 : "", Prep_conf_t3 : "", AbortedSA_yn_t3 : "", AbortedSA_freq_t3 : "",
    InteruptSA_yn_t3 : "", InteruptSA_freq_t3 : "", Attempt_yn_t3 : "", Attempt_freq_t3 : "", Attempt_method_t3_0 : "", Attempt_method_t3_1 : "", Attempt_method_t3_2 : ""
    , Attempt_method_t3_3 : "", Attempt_method_t3_4 : "", Attempt_method_t3_5 : "", Attempt_method_t3_6 : "", Attempt_method_t3_7 : "", Attempt_method_t3_8 : ""
    , Attempt_method_t3_9 : "", Attempt_method_t3_10 : "", Attempt_method_t3_11 : "", Attempt_method_t3_12 : "", Attempt_method_t3_13 : "", Attempt_inj_t3 : "", Attempt_desire_t3 : "",
    Attempt_conf_t3 : "", Attempt_likelihood_t3 : "", ACSS1_t3 : "", ACSS2_t3 : "", ACSS3_t3 : "", ACSS4_t3 : "", ACSS5_t3 : "", ACSS6_t3 : "", ACSS7_t3 : "", BAM1_t3 : "", BAM2_t3 : "", BAM3_t3 : "",
    ISI1_t3 : "", ISI2_t3 : "", ISI3_t3 : "", ISI4_t3 : "", ISI5_t3 : "", ISI6_t3 : "", ISI7_t3 : "", ASQanx_t3 : "", ASQanx_dist_t3 : "",
    ASQanx_inc_t3 : "", ASQrage_t3 : "", ASQrage_dist_t3 : "", ASQrage_inc_t3 : "",
    ASQdesp_t3 : "", ASQdesp_dist_t3 : "", ASQdesp_inc_t3 : "", ASQlonely_t3 : "",
    ASQlonely_dist_t3 : "", ASQlonely_inc_t3 : "", ASQhope_t3 : "", ASQhope_dist_t3 : "", ASQhope_inc_t3 : "", ASQaban_t3 : "", ASQaban_dist_t3 : "", ASQaban_inc_t3 : "",
    ASQselfhate_t3 : "", ASQselfhate_dist_t3 : "", ASQselfhate_inc_t3 : "", ASQguilt_t3 : "",
    ASQguilt_dist_t3 : "", ASQguilt_inc_t3 : "", ASQhumil_t3 : "", ASQhumil_dist_t3 : "",
    ASQhumil_inc_t3 : "", BSS1_t3 : "", BSS2_t3 : "", BSS3_t3 : "", BSS4_t3 : "", BSS5_t3 : "", BSS6_t3 : "", BSS7_t3 : "", BSS8_t3 : ""
    , BSS9_t3 : "", BSS10_t3 : "", BSS11_t3 : "", BSS12_t3 : "", BSS13_t3 : "", BSS14_t3 : "", BSS15_t3 : "", BSS16_t3 : "", BSS17_t3 : "", BSS18_t3 : ""
    , BSS19_t3 : "", BSS20_t3 : "", BSS21_t3 : "", BSI1_t3 : "", BSI2_t3 : "", BSI3_t3 : "", BSI4_t3 : "", BSI5_t3 : "", BSI6_t3 : "", BSI7_t3 : ""
    , BSI8_t3 : "", BSI9_t3 : "", BSI10_t3 : "", BSI11_t3 : "", BSI12_t3 : "", BSI13_t3 : "", BSI14_t3 : "", BSI15_t3 : "", BSI16_t3 : "", BSI17_t3 : "", BSI18_t3 : ""
    , BHS1_t3 : "", BHS2_t3 : "", BHS3_t3 : "", BHS4_t3 : "", BHS5_t3 : "", BHS6_t3 : "", BHS7_t3 : "", BHS8_t3 : "", BHS9_t3 : "", BHS10_t3 : "", BHS11_t3 : ""
    , BHS12_t3 : "", BHS13_t3 : "", BHS14_t3 : "", BHS15_t3 : "", BHS16_t3 : "", BHS17_t3 : "", BHS18_t3 : "", BHS19_t3 : "", BHS20_t3 : ""
    , DSWS1_t3 : "", DSWS2_t3 : "", DSWS3_t3 : "", DSWS4_t3 : "", DSWS5_t3 : "", DSWS6_t3 : "", DSWS7_t3 : "", DSWS8_t3 : "", DSWS9_t3 : "", DSWS10_t3 : ""
    , DSWS11_t3 : "", DSWS12_t3 : "", SFS1_t3 : "", SFS2_t3 : "", SFS3_t3 : "", SFS4_t3 : "", SFS5_t3 : "", SFS6_t3 : "", SFS7_t3 : "", SFS8_t3 : ""
    , SFS9_t3 : "", SFS10_t3 : "", SFS11_t3 : "", SFS12_t3 : "", SFS13_t3 : ""}

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        forwardBtn();
    }
});

$(document).on('pagebeforeshow', '#base', function() {
    navArry = [];
    $("#2, #3, #4, #5, #6, #7, #8, #9, #10, #s1Fin, #err1st, #back").hide();
    vis = ["#q1Btn", "#q2Btn", "#q3Btn", "#q4Btn", "#q5Btn", "#q6Btn", "#q7Btn", "#q8Btn", "#q9Btn", "#q10Btn"];
    //FastClick.attach(document.body);
    $(function(){
        $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
    });
    bindBase();
});

$(document).on('pagebeforeshow', '#base2', function() {
    navArry = [];
    $("#11, #14, #15, #19, #s2Fin, #baseInst3, #back, #20, #24, #29, #30").hide();
    vis = ["#q11Btn", "#q14Btn", "#q15Btn", "#q19Btn", "#q20Btn",
        "#q24Btn", "#q25Btn", "#q29Btn", "#q30Btn",
        "#bInst3Btn", "#bInst3Btn"];
    //FastClick.attach(document.body);
    bindBase2();
});

$(document).on('pagebeforeshow', '#base3', function() {
    navArry = [];
    $("#31, #32, #33, #34, #35, #38, #s3Fin, #back, #40, #41, #44, #45, #46").hide();
    vis = ["#q31Btn", "#q32Btn", "#q33Btn", "#q34Btn", "#q35Btn", "#q38Btn", "#q40Btn",
        "#q41Btn", "#q44Btn", "#q45Btn", "#q46Btn", "#bInst3Btn"];
    //FastClick.attach(document.body);
    bindBase3();
});

$(document).on('pagebeforeshow', '#base4', function() {
    navArry = [];
    $("#47, #48, #52, #53, #s4Fin, #back").hide();
    vis = ["#q47Btn", "#q48Btn", "#q52Btn", "#q53Btn", "#bInst4Btn"];
    //FastClick.attach(document.body);
    bindBase4();
});

$(document).on('pagebeforeshow', '#base5', function() {
    navArry = [];
    $("#57, #58, #64, #65, #s5Fin, #back, #66, #67, #77").hide();
    vis = ["#q57Btn", "#q58Btn", "#q64Btn", "#q65Btn", "#q66Btn",
        "#bInst5Btn", "#q67Btn", "#q77Btn"];
    //FastClick.attach(document.body);
    bindBase5();
});

$(document).on('pagebeforeshow', '#base6', function() {
    navArry = [];
    $("#78, #79, #80, #81, #82, #83, #84, #85, #86, #s6Fin, #back, #87, #baseInst6-1").hide();
    vis = ["#q78Btn", "#q79Btn", "#q80Btn", "#q81Btn", "#q82Btn", "#q83Btn", "#q84Btn", "#q85Btn", "#q86Btn", "#q87Btn",
        "#bInst6Btn", "#baseInst6_1Btn", "#q68Btn"];
    //FastClick.attach(document.body);
    bindBase6();
});

$(document).on('pagebeforeshow', '#base7', function() {
    navArry = [];
    $("#88, #89, #90, #91, #92, #93, #94, #95, #96, #s7Fin, #back, #98, #100, #101, #103, #105, #106").hide();
    $("#108, #110, #111, #113, #115, #116, #118, #120, #121, #123, #125, #126, #128").hide();
    $("#130, #131, #133, #135, #136, #138").hide();
    vis = ["#q88Btn", "#q89Btn", "#q90Btn", "#q91Btn", "#q92Btn", "#q93Btn", "#q94Btn", "#q95Btn", "#q96Btn",
        "#bInst7Btn", "#q98Btn", "#q100Btn", "#q101Btn", "#q103Btn", "#q105Btn", "#q106Btn"
        , "#q108Btn", "#q110Btn", "#q111Btn", "#q113Btn", "#q115Btn", "#q116Btn"
        , "#q118Btn", "#q120Btn", "#q121Btn", "#q123Btn", "#q125Btn", "#q126Btn"
        , "#q128Btn", "#q130Btn", "#q131Btn", "#q133Btn", "#q135Btn", "#q136Btn"
        , "#q138Btn"];
    //FastClick.attach(document.body);
    bindBase7();
});

$(document).on('pagebeforeshow', '#base8', function() {
    navArry = [];
    $("#140, #141, #142, #143, #144, #145, #146, #147, #148, #s8Fin, #back, #149, #150, #151, #152, #153, #154, #155, #156, #157, #158, #159, #160").hide();
    vis = ["#q140Btn", "#q141Btn", "#q142Btn", "#q143Btn", "#q144Btn", "#q145Btn", "#q146Btn", "#q147Btn", "#q148Btn", "#q149Btn",
        "#bInst8Btn", "#q150Btn", "#q151Btn", "#q152Btn", "#q153Btn", "#q154Btn", "#q155Btn", "#q156Btn", "#q157Btn", "#q158Btn"
        , "#q159Btn", "#q160Btn"];
    //FastClick.attach(document.body);
    bindBase8();
});

$(document).on('pagebeforeshow', '#base9', function() {
    navArry = [];
    $("#161, #162, #163, #164, #165, #166, #167, #168, #169, #s9Fin, #back, #170, #171, #172, #173, #174, #175, #176, #177, #178").hide();
    vis = ["#q161Btn", "#q162Btn", "#q163Btn", "#q164Btn", "#q165Btn", "#q166Btn", "#q167Btn", "#q168Btn", "#q169Btn", "#q170Btn",
        "#bInst9Btn", "#q171Btn", "#q172Btn", "#q173Btn", "#q174Btn", "#q175Btn", "#q176Btn", "#q177Btn", "#q178Btn"];
    //FastClick.attach(document.body);
    bindBase9();
});

$(document).on('pagebeforeshow', '#base10', function() {
    navArry = [];
    $("#179, #180, #181, #182, #183, #184, #185, #186, #187, #s10Fin, #back, #188, #189, #190, #191, #192, #193, #194, #195, #196, #197, #198").hide();
    vis = ["#q179Btn", "#q180Btn", "#q181Btn", "#q182Btn", "#q183Btn", "#q184Btn", "#q185Btn", "#q186Btn", "#q187Btn", "#q188Btn",
        "#bInst30Btn", "#q189Btn", "#q190Btn", "#q191Btn", "#q192Btn", "#q193Btn", "#q194Btn", "#q195Btn", "#q196Btn", "#q197Btn", "#q198Btn"];
    //FastClick.attach(document.body);
    bindBase10();
});

$(document).on('pagebeforeshow', '#base11', function() {
    navArry = [];
    $("#199, #200, #201, #202, #203, #204, #205, #206, #207, #s11Fin, #back, #208, #209, #210").hide();
    vis = ["#q199Btn", "#q200Btn", "#q201Btn", "#q202Btn", "#q203Btn", "#q204Btn", "#q205Btn", "#q206Btn", "#q207Btn", "#q208Btn",
        "#bInst31Btn", "#q209Btn", "#q210Btn"];
    //FastClick.attach(document.body);
    bindBase11();
});

$(document).on('pagebeforeshow', '#base12', function() {
    navArry = [];
    $("#211, #212, #213, #214, #215, #216, #217, #218, #219, #s12Fin, #back, #220, #221, #222, #223").hide();
    vis = ["#q211Btn", "#q212Btn", "#q213Btn", "#q214Btn", "#q215Btn", "#q216Btn", "#q217Btn", "#q218Btn", "#q219Btn", "#q220Btn",
        "#bInst32Btn", "#q221Btn", "#q222Btn", "#q223Btn"];
    FastClick.attach(document.body);
    bindBase12();
});

$(document).on('pagebeforeshow', '#base13', function() {
    navArry = [];
    $("#224, #225, #226, #227, #228, #229, #230, #231, #232, #s13Fin, #back, #233, #234, #235, #236, #237, #238").hide();
    vis = ["#q224Btn", "#q225Btn", "#q226Btn", "#q227Btn", "#q228Btn", "#q229Btn", "#q230Btn", "#q231Btn", "#q232Btn", "#q233Btn",
        "#bInst33Btn", "#q234Btn", "#q235Btn", "#q236Btn", "#q237Btn", "#q238Btn"];
    //FastClick.attach(document.body);
});

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
        surArry.NSSI_yn_t3 = $(this).val();
        setTimeout(function() {
            q11();
        }, 200);
    });

    $("#q14Op1, #q14Op2").on('change', function() {
        surArry.Cut_yn_t3 = $(this).val();
        setTimeout(function() {
            q14();
        }, 200);
    });

    $("#q19Op1, #q19Op2").on('change', function() {
        surArry.Burn_yn_t3 = $(this).val();
        setTimeout(function() {
            q19();
        }, 200);
    });

    $("#q24Op1, #q24Op2").on('change', function() {
        surArry.OtherNSSI_yn_t3 = $(this).val();
        setTimeout(function() {
            q24();
        }, 200);
    });

    $("#q29Op1, #q29Op2, #q29Op3, #q29Op4, #q29Op5, #q29Op6, #q29Op7, #q29Op8, #q29Op9, #q29Op10, #q29Op11").on('change', function() {
        surArry.NSSI_desirestop_t3 = $(this).val();
        setTimeout(function() {
            q29();
        }, 200);
    });

    $("#q30Op1, #q30Op2, #q30Op3, #q30Op4, #q30Op5, #q30Op6, #q30Op7, #q30Op8, #q30Op9, #q30Op10, #q30Op11").on('change', function() {
        surArry.NSSI_likelihood_t3 = $(this).val();
        if (!base3Loaded) {
            base3Loaded = true;
            $(":mobile-pagecontainer").pagecontainer("load", "base2line3.html", {showLoadMsg: false});
        }
        setTimeout(function() {
            q30();
        }, 200);
    });
}

function bindBase3() {
    $("#q31Op1, #q31Op2").on('change', function() {
        surArry.Plan_yn_t3 = $(this).val();
        setTimeout(function() {
            q31();
        }, 200);
    });

    $("#q32Op1, #q32Op2, #q32Op3, #q32Op4, #q32Op5, #q32Op6, #q32Op7, #q32Op8, #q32Op9, #q32Op10, #q32Op11").on('change', function() {
        surArry.Plan_lethal_t3 = $(this).val();
        setTimeout(function() {
            q32();
        }, 200);
    });

    $("#q33Op1, #q33Op2").on('change', function() {
        surArry.Plan_place_t3 = $(this).val();
        setTimeout(function() {
            q33();
        }, 200);
    });

    $("#q34Op1, #q34Op2").on('change', function() {
        surArry.Plan_time_t3 = $(this).val();
        setTimeout(function() {
            q34();
        }, 200);
    });

    $("#q35Op1, #q35Op2").on('change', function() {
        surArry.Plan_placetime_t3 = $(this).val();
        setTimeout(function() {
            q35();
        }, 200);
    });

    $("#q38Op1, #q38Op2, #q38Op3, #q38Op4, #q38Op5, #q38Op6, #q38Op7").on('change', function() {
        surArry.Plan_freq_t3 = $(this).val();
        setTimeout(function() {
            q38();
        }, 200);
    });

    $("#q41Op1, #q41Op2, #q41Op3, #q41Op4, #q41Op5, #q41Op6, #q41Op7, #q41Op8, #q41Op9, #q41Op10, #q41Op11").on('change', function() {
        surArry.Plan_intent_t3 = $(this).val();
        setTimeout(function() {
            q41();
        }, 200);
    });

    $("#q44Op1, #q44Op2, #q44Op3, #q44Op4, #q44Op5, #q44Op6, #q44Op7, #q44Op8, #q44Op9, #q44Op10, #q44Op11").on('change', function() {
        surArry.Plan_likelihood_t3 = $(this).val();
        setTimeout(function() {
            q44();
        }, 200);
    });

    $("#q45Op1, #q45Op2").on('change', function () {
        surArry.Prep_yn_t3 = $(this).val();
        setTimeout(function () {
            q45();
        }, 200);
    });

    $("#q46Op1, #q46Op2, #q46Op3, #q46Op4, #q46Op5, #q46Op6, #q46Op7, #q46Op8, #q46Op9, #q46Op10, #q46Op11").on('change', function() {
        surArry.Prep_conf_t3 = $(this).val();
        if (!base3Loaded) {
            base3Loaded = true;
            $(":mobile-pagecontainer").pagecontainer("load", "base2line4.html", {showLoadMsg: false});
        }
        setTimeout(function() {
            q46();
        }, 200);
    });
}

function bindBase4() {
    $("#q47Op1, #q47Op2").on('change', function () {
        surArry.AbortedSA_yn_t3 = $(this).val();
        setTimeout(function () {
            q47();
        }, 200);
    });

    $("#q52Op1, #q52Op2").on('change', function () {
        surArry.InteruptSA_yn_t3 = $(this).val();
        setTimeout(function () {
            q52();
        }, 200);
    });
}

function bindBase5() {
    $("#q57Op1, #q57Op2").on('change', function () {
        surArry.Attempt_yn_t3 = $(this).val();
        setTimeout(function () {
            q57();
        }, 200);
    });

    $("#q65Op1, #q65Op2, #q65Op3, #q65Op4, #q65Op5").on('change', function () {
        surArry.Attempt_inj_t3 = $(this).val();
        setTimeout(function () {
            q65();
        }, 200);
    });

    $("#q66Op1, #q66Op2, #q66Op3, #q66Op4, #q66Op5,#q66Op6, #q66Op7, #q66Op8, #q66Op9, #q66Op10, #q66Op11").on('change', function () {
        surArry.Attempt_desire_t3 = $(this).val();
        setTimeout(function () {
            q66();
        }, 200);
    });

    $("#q67Op1, #q67Op2, #q67Op3, #q67Op4, #q67Op5, #q67Op6, #q67Op7, #q67Op8, #q67Op9, #q67Op10, #q67Op11").on('change', function () {
        surArry.Attempt_conf_t3 = $(this).val();
        setTimeout(function () {
            q67();
        }, 200);
    });

    $("#q77Op1, #q77Op2, #q77Op3, #q77Op4, #q77Op5, #q77Op6, #q77Op7, #q77Op8, #q77Op9, #q77Op10, #q77Op11").on('change', function () {
        surArry.Attempt_likelihood_t3 = $(this).val();
        setTimeout(function () {
            q77();
        }, 200);
    });
}

function bindBase6() {
    $("#q78Op1, #q78Op2, #q78Op3, #q78Op4, #q78Op5").on('change', function () {
        surArry.ACSS1_t3 = $(this).val();
        setTimeout(function () {
            q78();
        }, 200);
    });

    $("#q79Op1, #q79Op2, #q79Op3, #q79Op4, #q79Op5").on('change', function () {
        surArry.ACSS2_t3 = $(this).val();
        setTimeout(function () {
            q79();
        }, 200);
    });

    $("#q80Op1, #q80Op2, #q80Op3, #q80Op4, #q80Op5").on('change', function () {
        surArry.ACSS3_t3 = $(this).val();
        setTimeout(function () {
            q80();
        }, 200);
    });

    $("#q81Op1, #q81Op2, #q81Op3, #q81Op4, #q81Op5").on('change', function () {
        surArry.ACSS4_t3 = $(this).val();
        setTimeout(function () {
            q81();
        }, 200);
    });

    $("#q82Op1, #q82Op2, #q82Op3, #q82Op4, #q82Op5").on('change', function () {
        surArry.ACSS5_t3 = $(this).val();
        setTimeout(function () {
            q82();
        }, 200);
    });

    $("#q83Op1, #q83Op2, #q83Op3, #q83Op4, #q83Op5").on('change', function () {
        surArry.ACSS6_t3 = $(this).val();
        setTimeout(function () {
            q83();
        }, 200);
    });

    $("#q84Op1, #q84Op2, #q84Op3, #q84Op4, #q84Op5").on('change', function () {
        surArry.ACSS7_t3 = $(this).val();
        setTimeout(function () {
            q84();
        }, 200);
    });

    $("#q85Op1, #q85Op2, #q85Op3, #q85Op4, #q85Op5, #q85Op6, #q85Op7").on('change', function () {
        surArry.BAM1_t3 = $(this).val();
        setTimeout(function () {
            q85();
        }, 200);
    });

    $("#q86Op1, #q86Op2, #q86Op3, #q86Op4, #q86Op5, #q86Op6, #q86Op7").on('change', function () {
        surArry.BAM2_t3 = $(this).val();
        setTimeout(function () {
            q86();
        }, 200);
    });

    $("#q87Op1, #q87Op2, #q87Op3, #q87Op4, #q87Op5, #q87Op6, #q87Op7").on('change', function () {
        surArry.BAM3_t3 = $(this).val();
        setTimeout(function () {
            q87();
        }, 200);
    });
}

function bindBase7() {
    $("#q88Op1, #q88Op2, #q88Op3, #q88Op4, #q88Op5").on('change', function () {
        surArry.ISI1_t3 = $(this).val();
        setTimeout(function () {
            q88();
        }, 200);
    });

    $("#q89Op1, #q89Op2, #q89Op3, #q89Op4, #q89Op5").on('change', function () {
        surArry.ISI2_t3 = $(this).val();
        setTimeout(function () {
            q89();
        }, 200);
    });

    $("#q90Op1, #q90Op2, #q90Op3, #q90Op4, #q90Op5").on('change', function () {
        surArry.ISI3_t3 = $(this).val();
        setTimeout(function () {
            q90();
        }, 200);
    });

    $("#q91Op1, #q91Op2, #q91Op3, #q91Op4, #q91Op5").on('change', function () {
        surArry.ISI4_t3 = $(this).val();
        setTimeout(function () {
            q91();
        }, 200);
    });

    $("#q92Op1, #q92Op2, #q92Op3, #q92Op4, #q92Op5").on('change', function () {
        surArry.ISI5_t3 = $(this).val();
        setTimeout(function () {
            q92();
        }, 200);
    });

    $("#q93Op1, #q93Op2, #q93Op3, #q93Op4, #q93Op5").on('change', function () {
        surArry.ISI6_t3 = $(this).val();
        setTimeout(function () {
            q93();
        }, 200);
    });

    $("#q94Op1, #q94Op2, #q94Op3, #q94Op4, #q94Op5").on('change', function () {
        surArry.ISI7_t3 = $(this).val();
        setTimeout(function () {
            q94();
        }, 200);
    });

    $("#q95Op1, #q95Op2").on('change', function () {
        surArry.ASQanx_t3 = $(this).val();
        setTimeout(function () {
            q95();
        }, 200);
    });

    $("#q96Op2, #q96Op3, #q96Op4, #q96Op5").on('change', function () {
        surArry.ASQanx_dist_t3 = $(this).val();
        setTimeout(function () {
            q96();
        }, 200);
    });

    $("#q98Op1, #q98Op2").on('change', function () {
        surArry.ASQanx_inc_t3 = $(this).val();
        setTimeout(function () {
            q98();
        }, 200);
    });

    $("#q100Op1, #q100Op2").on('change', function () {
        surArry.ASQrage_t3 = $(this).val();
        setTimeout(function () {
            q100();
        }, 200);
    });

    $("#q101Op2, #q101Op3, #q101Op4, #q101Op5").on('change', function () {
        surArry.ASQrage_dist_t3 = $(this).val();
        setTimeout(function () {
            q101();
        }, 200);
    });

    $("#q103Op1, #q103Op2").on('change', function () {
        surArry.ASQrage_inc_t3 = $(this).val();
        setTimeout(function () {
            q103();
        }, 200);
    });

    $("#q105Op1, #q105Op2").on('change', function () {
        surArry.ASQdesp_t3 = $(this).val();
        setTimeout(function () {
            q105();
        }, 200);
    });

    $("#q106Op2, #q106Op3, #q106Op4, #q106Op5").on('change', function () {
        surArry.ASQdesp_dist_t3 = $(this).val();
        setTimeout(function () {
            q106();
        }, 200);
    });

    $("#q108Op1, #q108Op2").on('change', function () {
        surArry.ASQdesp_inc_t3 = $(this).val();
        setTimeout(function () {
            q108();
        }, 200);
    });

    $("#q110Op1, #q110Op2").on('change', function () {
        surArry.ASQlonely_t3 = $(this).val();
        setTimeout(function () {
            q110();
        }, 200);
    });

    $("#q111Op2, #q111Op3, #q111Op4, #q111Op5").on('change', function () {
        surArry.ASQlonely_dist_t3 = $(this).val();
        setTimeout(function () {
            q111();
        }, 200);
    });

    $("#q113Op1, #q113Op2").on('change', function () {
        surArry.ASQlonely_inc_t3 = $(this).val();
        setTimeout(function () {
            q113();
        }, 200);
    });

    $("#q115Op1, #q115Op2").on('change', function () {
        surArry.ASQhope_t3 = $(this).val();
        setTimeout(function () {
            q115();
        }, 200);
    });

    $("#q116Op2, #q116Op3, #q116Op4, #q116Op5").on('change', function () {
        surArry.ASQhope_dist_t3 = $(this).val();
        setTimeout(function () {
            q116();
        }, 200);
    });

    $("#q118Op1, #q118Op2").on('change', function () {
        surArry.ASQhope_inc_t3 = $(this).val();
        setTimeout(function () {
            q118();
        }, 200);
    });

    $("#q120Op1, #q120Op2").on('change', function () {
        surArry.ASQaban_t3 = $(this).val();
        setTimeout(function () {
            q120();
        }, 200);
    });

    $("#q121Op2, #q121Op3, #q121Op4, #q121Op5").on('change', function () {
        surArry.ASQaban_dist_t3 = $(this).val();
        setTimeout(function () {
            q121();
        }, 200);
    });

    $("#q123Op1, #q123Op2").on('change', function () {
        surArry.ASQaban_inc_t3 = $(this).val();
        setTimeout(function () {
            q123();
        }, 200);
    });

    $("#q125Op1, #q125Op2").on('change', function () {
        surArry.ASQselfhate_t3 = $(this).val();
        setTimeout(function () {
            q125();
        }, 200);
    });

    $("#q126Op2, #q126Op3, #q126Op4, #q126Op5").on('change', function () {
        surArry.ASQselfhate_dist_t3 = $(this).val();
        setTimeout(function () {
            q126();
        }, 200);
    });

    $("#q128Op1, #q128Op2").on('change', function () {
        surArry.ASQselfhate_inc_t3 = $(this).val();
        setTimeout(function () {
            q128();
        }, 200);
    });

    $("#q130Op1, #q130Op2").on('change', function () {
        surArry.ASQguilt_t3 = $(this).val();
        setTimeout(function () {
            q130();
        }, 200);
    });

    $("#q131Op2, #q131Op3, #q131Op4, #q131Op5").on('change', function () {
        surArry.ASQguilt_dist_t3 = $(this).val();
        setTimeout(function () {
            q131();
        }, 200);
    });

    $("#q133Op1, #q133Op2").on('change', function () {
        surArry.ASQguilt_inc_t3 = $(this).val();
        setTimeout(function () {
            q133();
        }, 200);
    });

    $("#q135Op1, #q135Op2").on('change', function () {
        surArry.ASQhumil_t3 = $(this).val();
        setTimeout(function () {
            q135();
        }, 200);
    });

    $("#q136Op2, #q136Op3, #q136Op4, #q136Op5").on('change', function () {
        surArry.ASQhumil_dist_t3 = $(this).val();
        setTimeout(function () {
            q136();
        }, 200);
    });

    $("#q138Op1, #q138Op2").on('change', function () {
        surArry.ASQhumil_inc_t3 = $(this).val();
        setTimeout(function () {
            q138();
        }, 200);
    });
}

function bindBase8() {
    $("#q140Op1, #q140Op2, #q140Op3").on('change', function () {
        surArry.BSS1_t3 = $(this).val();
        setTimeout(function () {
            q140();
        }, 200);
    });

    $("#q141Op1, #q141Op2, #q141Op3").on('change', function () {
        surArry.BSS2_t3 = $(this).val();
        setTimeout(function () {
            q141();
        }, 200);
    });

    $("#q142Op1, #q142Op2, #q142Op3").on('change', function () {
        surArry.BSS3_t3 = $(this).val();
        setTimeout(function () {
            q142();
        }, 200);
    });

    $("#q143Op1, #q143Op2, #q143Op3").on('change', function () {
        surArry.BSS4_t3 = $(this).val();
        setTimeout(function () {
            q143();
        }, 200);
    });

    $("#q144Op1, #q144Op2, #q144Op3").on('change', function () {
        surArry.BSS5_t3 = $(this).val();
        setTimeout(function () {
            q144();
        }, 200);
    });

    $("#q145Op1, #q145Op2, #q145Op3").on('change', function () {
        surArry.BSS6_t3 = $(this).val();
        setTimeout(function () {
            q145();
        }, 200);
    });

    $("#q146Op1, #q146Op2, #q146Op3").on('change', function () {
        surArry.BSS7_t3 = $(this).val();
        setTimeout(function () {
            q146();
        }, 200);
    });

    $("#q147Op1, #q147Op2, #q147Op3").on('change', function () {
        surArry.BSS8_t3 = $(this).val();
        setTimeout(function () {
            q147();
        }, 200);
    });

    $("#q148Op1, #q148Op2, #q148Op3").on('change', function () {
        surArry.BSS9_t3 = $(this).val();
        setTimeout(function () {
            q148();
        }, 200);
    });

    $("#q149Op1, #q149Op2, #q149Op3").on('change', function () {
        surArry.BSS10_t3 = $(this).val();
        setTimeout(function () {
            q149();
        }, 200);
    });

    $("#q150Op1, #q150Op2, #q150Op3").on('change', function () {
        surArry.BSS11_t3 = $(this).val();
        setTimeout(function () {
            q150();
        }, 200);
    });

    $("#q151Op1, #q151Op2, #q151Op3").on('change', function () {
        surArry.BSS12_t3 = $(this).val();
        setTimeout(function () {
            q151();
        }, 200);
    });

    $("#q152Op1, #q152Op2, #q152Op3").on('change', function () {
        surArry.BSS13_t3 = $(this).val();
        setTimeout(function () {
            q152();
        }, 200);
    });

    $("#q153Op1, #q153Op2, #q153Op3").on('change', function () {
        surArry.BSS14_t3 = $(this).val();
        setTimeout(function () {
            q153();
        }, 200);
    });

    $("#q154Op1, #q154Op2, #q154Op3").on('change', function () {
        surArry.BSS15_t3 = $(this).val();
        setTimeout(function () {
            q154();
        }, 200);
    });

    $("#q155Op1, #q155Op2, #q155Op3").on('change', function () {
        surArry.BSS16_t3 = $(this).val();
        setTimeout(function () {
            q155();
        }, 200);
    });

    $("#q156Op1, #q156Op2, #q156Op3").on('change', function () {
        surArry.BSS17_t3 = $(this).val();
        setTimeout(function () {
            q156();
        }, 200);
    });

    $("#q157Op1, #q157Op2, #q157Op3").on('change', function () {
        surArry.BSS18_t3 = $(this).val();
        setTimeout(function () {
            q157();
        }, 200);
    });

    $("#q158Op1, #q158Op2, #q158Op3").on('change', function () {
        surArry.BSS19_t3 = $(this).val();
        setTimeout(function () {
            q158();
        }, 200);
    });

    $("#q159Op1, #q159Op2, #q159Op3").on('change', function () {
        surArry.BSS20_t3 = $(this).val();
        setTimeout(function () {
            q159();
        }, 200);
    });

    $("#q160Op1, #q160Op2, #q160Op3").on('change', function () {
        surArry.BSS21_t3 = $(this).val();
        setTimeout(function () {
            q160();
        }, 200);
    });
}

function bindBase9() {
    $("#q161Op1, #q161Op2, #q161Op3, #q161Op4, #q161Op5").on('change', function () {
        surArry.BSI1_t3 = $(this).val();
        setTimeout(function () {
            q161();
        }, 200);
    });

    $("#q162Op1, #q162Op2, #q162Op3, #q162Op4, #q162Op5").on('change', function () {
        surArry.BSI2_t3 = $(this).val();
        setTimeout(function () {
            q162();
        }, 200);
    });

    $("#q163Op1, #q163Op2, #q163Op3, #q163Op4, #q163Op5").on('change', function () {
        surArry.BSI3_t3 = $(this).val();
        setTimeout(function () {
            q163();
        }, 200);
    });

    $("#q164Op1, #q164Op2, #q164Op3, #q164Op4, #q164Op5").on('change', function () {
        surArry.BSI4_t3 = $(this).val();
        setTimeout(function () {
            q164();
        }, 200);
    });

    $("#q165Op1, #q165Op2, #q165Op3, #q165Op4, #q165Op5").on('change', function () {
        surArry.BSI5_t3 = $(this).val();
        setTimeout(function () {
            q165();
        }, 200);
    });

    $("#q166Op1, #q166Op2, #q166Op3, #q166Op4, #q166Op5").on('change', function () {
        surArry.BSI6_t3 = $(this).val();
        setTimeout(function () {
            q166();
        }, 200);
    });

    $("#q167Op1, #q167Op2, #q167Op3, #q167Op4, #q167Op5").on('change', function () {
        surArry.BSI7_t3 = $(this).val();
        setTimeout(function () {
            q167();
        }, 200);
    });

    $("#q168Op1, #q168Op2, #q168Op3, #q168Op4, #q168Op5").on('change', function () {
        surArry.BSI8_t3 = $(this).val();
        setTimeout(function () {
            q168();
        }, 200);
    });

    $("#q169Op1, #q169Op2, #q169Op3, #q169Op4, #q169Op5").on('change', function () {
        surArry.BSI9_t3 = $(this).val();
        setTimeout(function () {
            q169();
        }, 200);
    });

    $("#q170Op1, #q170Op2, #q170Op3, #q170Op4, #q170Op5").on('change', function () {
        surArry.BSI10_t3 = $(this).val();
        setTimeout(function () {
            q170();
        }, 200);
    });

    $("#q171Op1, #q171Op2, #q171Op3, #q171Op4, #q171Op5").on('change', function () {
        surArry.BSI11_t3 = $(this).val();
        setTimeout(function () {
            q171();
        }, 200);
    });

    $("#q172Op1, #q172Op2, #q172Op3, #q172Op4, #q172Op5").on('change', function () {
        surArry.BSI12_t3 = $(this).val();
        setTimeout(function () {
            q172();
        }, 200);
    });

    $("#q173Op1, #q173Op2, #q173Op3, #q173Op4, #q173Op5").on('change', function () {
        surArry.BSI13_t3 = $(this).val();
        setTimeout(function () {
            q173();
        }, 200);
    });

    $("#q174Op1, #q174Op2, #q174Op3, #q174Op4, #q174Op5").on('change', function () {
        surArry.BSI14_t3 = $(this).val();
        setTimeout(function () {
            q174();
        }, 200);
    });

    $("#q175Op1, #q175Op2, #q175Op3, #q175Op4, #q175Op5").on('change', function () {
        surArry.BSI15_t3 = $(this).val();
        setTimeout(function () {
            q175();
        }, 200);
    });

    $("#q176Op1, #q176Op2, #q176Op3, #q176Op4, #q176Op5").on('change', function () {
        surArry.BSI16_t3 = $(this).val();
        setTimeout(function () {
            q176();
        }, 200);
    });

    $("#q177Op1, #q177Op2, #q177Op3, #q177Op4, #q177Op5").on('change', function () {
        surArry.BSI17_t3 = $(this).val();
        setTimeout(function () {
            q177();
        }, 200);
    });

    $("#q178Op1, #q178Op2, #q178Op3, #q178Op4, #q178Op5").on('change', function () {
        surArry.BSI18_t3 = $(this).val();
        setTimeout(function () {
            q178();
        }, 200);
    });
}

function bindBase10() {
    $("#q179Op1, #q179Op2").on('change', function () {
        surArry.BHS1_t3 = $(this).val();
        setTimeout(function () {
            q179();
        }, 200);
    });

    $("#q180Op1, #q180Op2").on('change', function () {
        surArry.BHS2_t3 = $(this).val();
        setTimeout(function () {
            q180();
        }, 200);
    });

    $("#q181Op1, #q181Op2").on('change', function () {
        surArry.BHS3_t3 = $(this).val();
        setTimeout(function () {
            q181();
        }, 200);
    });

    $("#q182Op1, #q182Op2").on('change', function () {
        surArry.BHS4_t3 = $(this).val();
        setTimeout(function () {
            q182();
        }, 200);
    });

    $("#q183Op1, #q183Op2").on('change', function () {
        surArry.BHS5_t3 = $(this).val();
        setTimeout(function () {
            q183();
        }, 200);
    });

    $("#q184Op1, #q184Op2").on('change', function () {
        surArry.BHS6_t3 = $(this).val();
        setTimeout(function () {
            q184();
        }, 200);
    });

    $("#q185Op1, #q185Op2").on('change', function () {
        surArry.BHS7_t3 = $(this).val();
        setTimeout(function () {
            q185();
        }, 200);
    });

    $("#q186Op1, #q186Op2").on('change', function () {
        surArry.BHS8_t3 = $(this).val();
        setTimeout(function () {
            q186();
        }, 200);
    });

    $("#q187Op1, #q187Op2").on('change', function () {
        surArry.BHS9_t3 = $(this).val();
        setTimeout(function () {
            q187();
        }, 200);
    });

    $("#q188Op1, #q188Op2").on('change', function () {
        surArry.BHS10_t3 = $(this).val();
        setTimeout(function () {
            q188();
        }, 200);
    });

    $("#q189Op1, #q189Op2").on('change', function () {
        surArry.BHS11_t3 = $(this).val();
        setTimeout(function () {
            q189();
        }, 200);
    });

    $("#q190Op1, #q190Op2").on('change', function () {
        surArry.BHS12_t3 = $(this).val();
        setTimeout(function () {
            q190();
        }, 200);
    });

    $("#q191Op1, #q191Op2").on('change', function () {
        surArry.BHS13_t3 = $(this).val();
        setTimeout(function () {
            q191();
        }, 200);
    });

    $("#q192Op1, #q192Op2").on('change', function () {
        surArry.BHS14_t3 = $(this).val();
        setTimeout(function () {
            q192();
        }, 200);
    });

    $("#q193Op1, #q193Op2").on('change', function () {
        surArry.BHS15_t3 = $(this).val();
        setTimeout(function () {
            q193();
        }, 200);
    });

    $("#q194Op1, #q194Op2").on('change', function () {
        surArry.BHS16_t3 = $(this).val();
        setTimeout(function () {
            q194();
        }, 200);
    });

    $("#q195Op1, #q195Op2").on('change', function () {
        surArry.BHS17_t3 = $(this).val();
        setTimeout(function () {
            q195();
        }, 200);
    });

    $("#q196Op1, #q196Op2").on('change', function () {
        surArry.BHS18_t3 = $(this).val();
        setTimeout(function () {
            q196();
        }, 200);
    });

    $("#q197Op1, #q197Op2").on('change', function () {
        surArry.BHS19_t3 = $(this).val();
        setTimeout(function () {
            q197();
        }, 200);
    });

    $("#q198Op1, #q198Op2").on('change', function () {
        surArry.BHS20_t3 = $(this).val();
        setTimeout(function () {
            q198();
        }, 200);
    });
}

function bindBase11() {
    $("#q199Op1, #q199Op2, #q199Op3, #q199Op4, #q199Op5, #q199Op6, #q199Op7").on('change', function () {
        surArry.DSWS1_t3 = $(this).val();
        setTimeout(function () {
            q199();
        }, 200);
    });

    $("#q200Op1, #q200Op2, #q200Op3, #q200Op4, #q200Op5, #q200Op6, #q200Op7").on('change', function () {
        surArry.DSWS2_t3 = $(this).val();
        setTimeout(function () {
            q200();
        }, 200);
    });

    $("#q201Op1, #q201Op2, #q201Op3, #q201Op4, #q201Op5, #q201Op6, #q201Op7").on('change', function () {
        surArry.DSWS3_t3 = $(this).val();
        setTimeout(function () {
            q201();
        }, 200);
    });

    $("#q202Op1, #q202Op2, #q202Op3, #q202Op4, #q202Op5, #q202Op6, #q202Op7").on('change', function () {
        surArry.DSWS4_t3 = $(this).val();
        setTimeout(function () {
            q202();
        }, 200);
    });

    $("#q203Op1, #q203Op2, #q203Op3, #q203Op4, #q203Op5, #q203Op6, #q203Op7").on('change', function () {
        surArry.DSWS5_t3 = $(this).val();
        setTimeout(function () {
            q203();
        }, 200);
    });

    $("#q204Op1, #q204Op2, #q204Op3, #q204Op4, #q204Op5, #q204Op6, #q204Op7").on('change', function () {
        surArry.DSWS6_t3 = $(this).val();
        setTimeout(function () {
            q204();
        }, 200);
    });

    $("#q205Op1, #q205Op2, #q205Op3, #q205Op4, #q205Op5, #q205Op6, #q205Op7").on('change', function () {
        surArry.DSWS7_t3 = $(this).val();
        setTimeout(function () {
            q205();
        }, 200);
    });

    $("#q206Op1, #q206Op2, #q206Op3, #q206Op4, #q206Op5, #q206Op6, #q206Op7").on('change', function () {
        surArry.DSWS8_t3 = $(this).val();
        setTimeout(function () {
            q206();
        }, 200);
    });

    $("#q207Op1, #q207Op2, #q207Op3, #q207Op4, #q207Op5, #q207Op6, #q207Op7").on('change', function () {
        surArry.DSWS9_t3 = $(this).val();
        setTimeout(function () {
            q207();
        }, 200);
    });

    $("#q208Op1, #q208Op2, #q208Op3, #q208Op4, #q208Op5, #q208Op6, #q208Op7").on('change', function () {
        surArry.DSWS10_t3 = $(this).val();
        setTimeout(function () {
            q208();
        }, 200);
    });

    $("#q209Op1, #q209Op2, #q209Op3, #q209Op4, #q209Op5, #q209Op6, #q209Op7").on('change', function () {
        surArry.DSWS11_t3 = $(this).val();
        setTimeout(function () {
            q209();
        }, 200);
    });

    $("#q210Op1, #q210Op2, #q210Op3, #q210Op4, #q210Op5, #q210Op6, #q210Op7").on('change', function () {
        surArry.DSWS12_t3 = $(this).val();
        setTimeout(function () {
            q210();
        }, 200);
    });
}

function bindBase12() {
    $("#q211Op1, #q211Op2, #q211Op3, #q211Op4").on('change', function () {
        surArry.SFS1_t3 = $(this).val();
        setTimeout(function () {
            q211();
        }, 212);
    });

    $("#q212Op1, #q212Op2, #q212Op3, #q212Op4").on('change', function () {
        surArry.SFS2_t3 = $(this).val();
        setTimeout(function () {
            q212();
        }, 212);
    });

    $("#q213Op1, #q213Op2, #q213Op3, #q213Op4, #q213Op5").on('change', function () {
        surArry.SFS3_t3 = $(this).val();
        setTimeout(function () {
            q213();
        }, 212);
    });

    $("#q214Op1, #q214Op2, #q214Op3, #q214Op4").on('change', function () {
        surArry.SFS4_t3 = $(this).val();
        setTimeout(function () {
            q214();
        }, 212);
    });

    $("#q215Op1, #q215Op2, #q215Op3, #q215Op4").on('change', function () {
        surArry.SFS5_t3 = $(this).val();
        setTimeout(function () {
            q215();
        }, 212);
    });

    $("#q216Op1, #q216Op2, #q216Op3, #q216Op4").on('change', function () {
        surArry.SFS6_t3 = $(this).val();
        setTimeout(function () {
            q216();
        }, 212);
    });

    $("#q217Op1, #q217Op2").on('change', function () {
        surArry.SFS7_t3 = $(this).val();
        setTimeout(function () {
            q217();
        }, 212);
    });

    $("#q218Op1, #q218Op2, #q218Op3, #q218Op4").on('change', function () {
        surArry.SFS8_t3 = $(this).val();
        setTimeout(function () {
            q218();
        }, 212);
    });

    $("#q219Op1, #q219Op2, #q219Op3, #q219Op4").on('change', function () {
        surArry.SFS9_t3 = $(this).val();
        setTimeout(function () {
            q219();
        }, 212);
    });

    $("#q220Op1, #q220Op2, #q220Op3, #q220Op4").on('change', function () {
        surArry.SFS10_t3 = $(this).val();
        setTimeout(function () {
            q220();
        }, 212);
    });

    $("#q221Op1, #q221Op2, #q221Op3, #q221Op4, #q221Op5").on('change', function () {
        surArry.SFS11_t3 = $(this).val();
        setTimeout(function () {
            q221();
        }, 212);
    });

    $("#q222Op1, #q222Op2, #q222Op3, #q222Op4").on('change', function () {
        surArry.SFS12_t3 = $(this).val();
        setTimeout(function () {
            q222();
        }, 212);
    });

    $("#q223Op1, #q223Op2, #q223Op3, #q223Op4").on('change', function () {
        surArry.SFS13_t3 = $(this).val();
        setTimeout(function () {
            q223();
        }, 212);
    });
}

function base2St() {
    $("#11").hide();
    $("#err11").hide();
    $("#back").hide();
    $("#baseInst3").show();
}

function bInst3() {
    base3Loaded = false;
    $("#baseInst3").hide();
    $("#err11").hide();
    $("#11").show();
    $("#back").show();
    addArry(base2St);
}

function q11() {
    var choice = surArry.NSSI_yn_t3;
    if (choice === "1") {
        q11logic = false;
        $("#err11").hide();
        $("#11").hide();
        $("#baseInst3").show();
        addArry(bInst3);
    }
    else if (choice === "0") {
        q11logic = true;
        $("#err11").hide();
        $("#err30").hide();
        $("#11").hide();
        surArry.Cut_yn_t3 = "";
        surArry.Cut_freq_t3 = "";
        surArry.Burn_yn_t3 = "";
        surArry.Burn_freq_t3 = "";
        surArry.OtherNSSI_yn_t3 = "";
        surArry.OtherNSSI_freq_t3 = "";
        surArry.NSSI_desirestop_t3 = "";
        $("#14, #19, #24, #29").find("input").each(function() {
            if ($(this).is(":checked")) {
                $(this).prop("checked", false).checkboxradio("refresh");
            }
        });
        $("#15, #20, #25").find("input").each(function() {
            $(this).val("");
        });
        $("#30").show();
        $("#fwd").show();
        addArry(bInst3);
    }
    else {
        $("#err11").show();
    }
}

function bInst3() {
    $("#baseInst3").hide();
    $("#err14").hide();
    $("#14").show();
    addArry(q11);
}

function q14() {
    var choice = surArry.Cut_yn_t3;
    if (choice === "1") {
        q14logic = false;
        $("#err14").hide();
        $("#err15").hide();
        $("#14").hide();
        $("#15").show();
        $("#age5").focus();
        addArry(bInst3);
    }
    else if (choice === "0") {
        q14logic = true;
        $("#err14").hide();
        $("#err19").hide();
        $("#14").hide();
        surArry.Cut_freq_t3 = "";
        $("#15, #16, #17, #18").find("input").each(function() {
            $(this).val("");
        });
        $("#19").show();
        addArry(bInst3);
    }
    else {
        $("#err14").show();
    }
}

function q15() {
    var age = parseInt($("#age5").val());
    if (age >= 0 && age < 100000) {
        surArry.Cut_freq_t3 = age.toString();
        $("#err15").hide();
        $("#err19").hide();
        $("#15").hide();
        $("#19").show();
        addArry(q14);
    }
    else {
        $("#err15").show();
    }
}

function q19() {
    var choice = surArry.Burn_yn_t3;
    if (choice === "1") {
        q19logic = false;
        $("#err19").hide();
        $("#err20").hide();
        $("#19").hide();
        $("#20").show();
        $("#age9").focus();
        if (q14logic) {
            addArry(q14);
        }
        else {
            addArry(q15);
        }
    }
    else if (choice === "0") {
        q19logic = true;
        $("#err19").hide();
        $("#err24").hide();
        $("#19").hide();
        surArry.Burn_freq_t3 = "";
        $("#20").find("input").each(function() {
            $(this).val("");
        });
        $("#24").show();
        if (q14logic) {
            addArry(q14);
        }
        else {
            addArry(q15);
        }
    }
    else {
        $("#err19").show();
    }
}

function q20() {
    var age = parseInt($("#age9").val());
    if (age >= 0 && age < 100000) {
        surArry.Burn_freq_t3 = age.toString();
        $("#err20").hide();
        $("#err24").hide();
        $("#20").hide();
        $("#24").show();
        addArry(q19);
    }
    else {
        $("#err20").show();
    }
}

function q24() {
    var choice = surArry.OtherNSSI_yn_t3;
    if (choice === "1") {
        q24logic = false;
        $("#err24").hide();
        $("#err25").hide();
        $("#24").hide();
        $("#25").show();
        $("#age13").focus();
        if (q19logic) {
            addArry(q19);
        }
        else {
            addArry(q20);
        }
    }
    else if (choice === "0") {
        q24logic = true;
        $("#err24").hide();
        $("#err30").hide();
        $("#24").hide();
        surArry.OtherNSSI_freq_t3 = "";
        surArry.NSSI_desirestop_t3 = "";
        $("#25").find("input").each(function() {
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
            addArry(q20);
        }
    }
    else {
        $("#err24").show();
    }
}

function q25() {
    var age = parseInt($("#age13").val());
    if (age >= 0 && age < 100000) {
        surArry.OtherNSSI_freq_t3 = age.toString();
        $("#err25").hide();
        $("#err29").hide();
        $("#25").hide();
        $("#29").show();
        addArry(q24);
    }
    else {
        $("#err25").show();
    }
}

function q29() {
    if (surArry.NSSI_desirestop_t3 != "") {
        $("#err29").hide();
        $("#err30").hide();
        $("#29").hide();
        $("#30").show();
        $("#fwd").show();
        addArry(q25);
    }
    else {
        $("#err29").show();
    }
}

function q30() {
    if (surArry.NSSI_likelihood_t3 != "") {
        $("#err30").hide();
        $("#30").hide();
        $("#fwd").hide();
        $("#s2Fin").show();
        var progressbar = $( "#progressbar2" );
        var progressLabel = $( ".progress-label" );
        progressbar.progressbar({value: 5});
        progressLabel.text(progressbar.progressbar( "value" ) + "%" );
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
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#base3");
    }, 2000);
}

function base3St() {
    $("#31").hide();
    $("#err31").hide();
    $("#back").hide();
    $("#baseInst3").show();
}

function bInst3() {
    base3Loaded = false;
    $("#baseInst3").hide();
    $("#err31").hide();
    $("#31").show();
    $("#back").show();
    addArry(base3St);
}

function q31() {
    if (surArry.Plan_yn_t3 != "") {
        $("#err31").hide();
        $("#err32").hide();
        $("#err44").hide();
        $("#31").hide();
        $("#fwd").show();
        if (surArry.Plan_yn_t3 == "0") {
            q31logic = true;
            surArry.Plan_lethal_t3 = "";
            surArry.Plan_place_t3 = "";
            surArry.Plan_time_t3 = "";
            surArry.Plan_placetime_t3 = "";
            surArry.Plan_freq_t3 = "";
            surArry.Plan_freq2_t3 = "";
            surArry.Plan_intent_t3 = "";
            $("#40").find("input").each(function() {
                $(this).val("");
            });
            $("#32, #33, #34, #35, #38, #41").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#44").show();
        }
        else {
            q31logic = false;
            $("#32").show();
        }
        addArry(bInst3);
    }
    else {
        $("#err31").show();
    }
}

function q32() {
    if (surArry.Plan_lethal_t3 != "") {
        $("#err32").hide();
        $("#err33").hide();
        $("#32").hide();
        $("#33").show();
        addArry(q31);
    }
    else {
        $("#err32").show();
    }
}

function q33() {
    if (surArry.Plan_place_t3 != "") {
        $("#err33").hide();
        $("#err34").hide();
        $("#33").hide();
        $("#34").show();
        addArry(q32);
    }
    else {
        $("#err33").show();
    }
}

function q34() {
    if (surArry.Plan_time_t3 != "") {
        $("#err34").hide();
        $("#err35").hide();
        $("#34").hide();
        $("#35").show();
        addArry(q33);
    }
    else {
        $("#err34").show();
    }
}

function q35() {
    if (surArry.Plan_placetime_t3 != "") {
        $("#err35").hide();
        $("#err38").hide();
        $("#35").hide();
        $("#38").show();
        addArry(q34);
    }
    else {
        $("#err35").show();
    }
}

function q38() {
    if (surArry.Plan_freq_t3 != "") {
        $("#err38").hide();
        $("#err40").hide();
        $("#38").hide();
        $("#40").show();
        $("#periods").focus();
        addArry(q35);
    }
    else {
        $("#err38").show();
    }
}

function q40() {
    var period = parseInt($("#periods").val());
    if (period >= 0 && period < 100000) {
        surArry.Plan_freq2_t3 = period.toString();
        $("#err40").hide();
        $("#err41").hide();
        $("#40").hide();
        $("#41").show();
        addArry(q38);
    }
    else {
        $("#err40").show();
    }
}

function q41() {
    if (surArry.Plan_intent_t3 != "") {
        $("#err41").hide();
        $("#err42").hide();
        $("#41").hide();
        $("#42").show();
        addArry(q40);
    }
    else {
        $("#err41").show();
    }
}

function q44() {
    if (surArry.Plan_likelihood_t3 != "") {
        $("#err44").hide();
        $("#err45").hide();
        $("#44").hide();
        $("#45").show();
        if (q31logic) {
            addArry(q31);
        }
        else {
            addArry(q41);
        }
    }
    else {
        $("#err44").show();
    }
}

function q45() {
    if (surArry.Prep_yn_t3 != "") {
        $("#err45").hide();
        $("#err46").hide();
        $("#45").hide();
        if (surArry.Prep_yn_t3 == "0") {
            q45logic = true;
            $("#fwd").hide();
            surArry.Prep_conf_t3 = "";
            $("#46").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#s3Fin").show();
            var progressbar = $( "#progressbar3" );
            var progressLabel = $( ".progress-label" );
            progressbar.progressbar({value: 12});
            progressLabel.text(progressbar.progressbar( "value" ) + "%" );
            $(":mobile-pagecontainer").pagecontainer("load", "base2line4.html", {showLoadMsg: false});
        }
        else {
            q45logic = false;
            $("#fwd").show();
            $("#46").show();
        }
        addArry(q44);
    }
    else {
        $("#err45").show();
    }
}

function q46() {
    if (surArry.Prep_conf_t3 != "") {
        $("#err46").hide();
        $("#46").hide();
        $("#fwd").hide();
        $("#s3Fin").show();
        var progressbar = $( "#progressbar3" );
        var progressLabel = $( ".progress-label" );
        progressbar.progressbar({value: 12});
        progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        addArry(q45);
    }
    else {
        $("#err46").show();
    }
}

function s3Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#base4");
    }, 2000);
}

function base4St() {
    $("#47").hide();
    $("#err47").hide();
    $("#back").hide();
    $("#baseInst4").show();
}

function bInst4() {
    base3Loaded = false;
    $("#baseInst4").hide();
    $("#err47").hide();
    $("#47").show();
    $("#back").show();
    addArry(base4St);
}

function q47() {
    if (surArry.AbortedSA_yn_t3 != "") {
        $("#err47").hide();
        $("#err48").hide();
        $("#err52").hide();
        $("#47").hide();
        $("#fwd").show();
        if (surArry.AbortedSA_yn_t3 == "0") {
            q47logic = true;
            surArry.AbortedSA_freq_t3 = "";
            $("#48").find("input").each(function() {
                $(this).val("");
            });
            $("#52").show();
        }
        else {
            q47logic = false;
            $("#48").show();
            $("#times").focus();
        }
        addArry(bInst4);
    }
    else {
        $("#err47").show();
    }
}

function q48() {
    var times = parseInt($("#times").val());
    if (times >= 0 && times < 100000) {
        surArry.AbortedSA_freq_t3 = times.toString();
        $("#err48").hide();
        $("#err52").hide();
        $("#48").hide();
        $("#52").show();
        $("#times1").focus();
        addArry(q47);
    }
    else {
        $("#err48").show();
    }
}

function q52() {
    if (surArry.InteruptSA_yn_t3 != "") {
        $("#err52").hide();
        $("#err53").hide();
        $("#52").hide();
        $("#fwd").show();
        if (surArry.InteruptSA_yn_t3 == "0") {
            q52logic = true;
            surArry.InteruptSA_freq_t3 = "";
            $("#53").find("input").each(function() {
                $(this).val("");
            });
            $("#fwd").hide();
            $(":mobile-pagecontainer").pagecontainer("load", "base2line5.html", {showLoadMsg: false});
            $("#s4Fin").show();
            var progressbar = $( "#progressbar4" );
            var progressLabel = $( ".progress-label" );
            progressbar.progressbar({value: 15});
            progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        }
        else {
            q52logic = false;
            $("#53").show();
            $("#times4").focus();
        }
        if (q47logic) {
            addArry(q47);
        }
        else {
            addArry(q48);
        }
    }
    else {
        $("#err52").show();
    }
}

function q53() {
    var times = parseInt($("#times4").val());
    if (times >= 0 && times < 100000) {
        surArry.InteruptSA_wk_t3 = times.toString();
        $("#err53").hide();
        $("#err54").hide();
        $("#53").hide();
        $("#54").show();
        $("#times5").focus();
        addArry(q52);
        var progressbar = $( "#progressbar4" );
        var progressLabel = $( ".progress-label" );
        progressbar.progressbar({value: 15});
        progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        $(":mobile-pagecontainer").pagecontainer("load", "base2line5.html", {showLoadMsg: false});
    }
    else {
        $("#err53").show();
    }
}

function s4Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#base5");
    }, 2000);
}

function base5St() {
    $("#57").hide();
    $("#err57").hide();
    $("#back").hide();
    $("#fwd").show();
    $("#baseInst5").show();
}

function bInst5() {
    base3Loaded = false;
    $("#baseInst5").hide();
    $("#err57").hide();
    $("#57").show();
    $("#back").show();
    addArry(base5St);
}

function q57() {
    if (surArry.Attempt_yn_t3 != "") {
        $("#err57").hide();
        $("#err58").hide();
        $("#err77").hide();
        $("#57").hide();
        $("#fwd").show();
        if (surArry.Attempt_yn_t3 == "0") {
            q57logic = true;
            surArry.Attempt_freq_t3 = "";
            surArry.Attempt_method_t3_0 = "";
            surArry.Attempt_method_t3_1 = "";
            surArry.Attempt_method_t3_2 = "";
            surArry.Attempt_method_t3_3 = "";
            surArry.Attempt_method_t3_4 = "";
            surArry.Attempt_method_t3_5 = "";
            surArry.Attempt_method_t3_6 = "";
            surArry.Attempt_method_t3_7 = "";
            surArry.Attempt_method_t3_8 = "";
            surArry.Attempt_method_t3_9 = "";
            surArry.Attempt_method_t3_10 = "";
            surArry.Attempt_method_t3_11 = "";
            surArry.Attempt_method_t3_12 = "";
            surArry.Attempt_method_t3_13 = "";
            surArry.Attempt_inj_t3 = "";
            surArry.Attempt_desire_t3 = "";
            surArry.Attempt_conf_t3 = "";
            $("#58").find("input").each(function() {
                $(this).val("");
            });
            $("#64, #65, #66, #67").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#77").show();
        }
        else {
            q57logic = false;
            $("#58").show();
            $("#times8").focus();
        }
        addArry(bInst5);
    }
    else {
        $("#err57").show();
    }
}

function q58() {
    var times = parseInt($("#times8").val());
    if (times >= 0 && times < 100000) {
        surArry.Attempt_freq_t3 = times.toString();
        $("#err58").hide();
        $("#err59").hide();
        $("#fwd").show();
        $("#58").hide();
        $("#59").show();
        $("#times9").focus();
        addArry(q57);
    }
    else {
        $("#err58").show();
    }
}

function q64() {
    ans = false;

    if ($("#q64Op1").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_0 = $("#q64Op1").val();
    }
    else {
        surArry.Attempt_method_t3_0 = "";
    }
    if ($("#q64Op2").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_1 = $("#q64Op2").val();
    }
    else {
        surArry.Attempt_method_t3_1 = "";
    }
    if ($("#q64Op3").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_2 = $("q64Op3").val();
    }
    else {
        surArry.Attempt_method_t3_2 = "";
    }
    if ($("#q64Op4").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_3 = $("#q64Op4").val();
    }
    else {
        surArry.Attempt_method_t3_3 = "";
    }
    if ($("#q64Op5").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_4 = $("#q64Op5").val();
    }
    else {
        surArry.Attempt_method_t3_4 = "";
    }
    if ($("#q64Op6").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_5 = $("#q64Op6").val();
    }
    else {
        surArry.Attempt_method_t3_5 = "";
    }
    if ($("#q64Op7").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_6 = $("#q64Op7").val();
    }
    else {
        surArry.Attempt_method_t3_6 = "";
    }
    if ($("#q64Op8").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_7 = $("#q64Op8").val();
    }
    else {
        surArry.Attempt_method_t3_7 = "";
    }
    if ($("#q64Op9").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_8 = $("#q64Op9").val();
    }
    else {
        surArry.Attempt_method_t3_8 = "";
    }
    if ($("#q64Op10").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_9 = $("#q64Op10").val();
    }
    else {
        surArry.Attempt_method_t3_9 = "";
    }
    if ($("#q64Op11").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_10 = $("#q64Op11").val();
    }
    else {
        surArry.Attempt_method_t3_10 = "";
    }
    if ($("#q64Op12").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_11 = $("#q64Op12").val();
    }
    else {
        surArry.Attempt_method_t3_11 = "";
    }
    if ($("#q64Op13").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_12 = $("#q64Op13").val();
    }
    else {
        surArry.Attempt_method_t3_12 = "";
    }
    if ($("#q64Op14").prop('checked')) {
        ans = true;
        surArry.Attempt_method_t3_13 = $("#q64Op14").val();
    }
    else {
        surArry.Attempt_method_t3_13 = "";
    }
    if (ans) {
        $("#err64").hide();
        $("#err65").hide();
        $("#fwd").show();
        $("#64").hide();
        $("#65").show();
        addArry(q58);
    }
    else {
        $("#err64").show();
    }
}

function q65() {
    if (surArry.Attempt_inj_t3 != "") {
        $("#err65").hide();
        $("#err66").hide();
        $("#65").hide();
        $("#fwd").show();
        $("#66").show();
        addArry(q64);
    }
    else {
        $("#err65").show();
    }
}

function q66() {
    if (surArry.Attempt_desire_t3 != "") {
        $("#err66").hide();
        $("#err67").hide();
        $("#66").hide();
        $("#fwd").show();
        $("#67").show();
        addArry(q65);
    }
    else {
        $("#err66").show();
    }
}

function q67() {
    if (surArry.Attempt_conf_t3 != "") {
        $("#err67").hide();
        $("#err77").hide();
        $("#67").hide();
        $("#fwd").show();
        $("#77").show();
        addArry(q66);
    }
    else {
        $("#err66").show();
    }
}

function q77() {
    if (surArry.Attempt_likelihood_t3 != "") {
        $("#err77").hide();
        $("#77").hide();
        $("#fwd").hide();
        $("#s5Fin").show();
        var progressbar = $( "#progressbar5" );
        var progressLabel = $( ".progress-label" );
        progressbar.progressbar({value: 19});
        progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        if (q57logic) {
            addArry(q57);
        }
        else {
            addArry(q67);
        }
        $(":mobile-pagecontainer").pagecontainer("load", "base2line6.html", {showLoadMsg: false});
    }
    else {
        $("#err77").show();
    }
}

function s5Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#base6");
    }, 2000);
}

function base6St() {
    $("#78").hide();
    $("#err78").hide();
    $("#back").hide();
    $("#fwd").show();
    $("#baseInst6").show();
}

function bInst6() {
    base3Loaded = false;
    $("#baseInst6").hide();
    $("#err78").hide();
    $("#78").show();
    $("#back").show();
    addArry(base6St);
}

function q78() {
    if (surArry.ACSS1_t3 != "") {
        $("#err78").hide();
        $("#err79").hide();
        $("#78").hide();
        $("#fwd").show();
        $("#79").show();
        addArry(bInst6);
    }
    else {
        $("#err78").show();
    }
}

function q79() {
    if (surArry.ACSS2_t3 != "") {
        $("#err79").hide();
        $("#err80").hide();
        $("#79").hide();
        $("#fwd").show();
        $("#80").show();
        addArry(q78);
    }
    else {
        $("#err79").show();
    }
}

function q80() {
    if (surArry.ACSS3_t3 != "") {
        $("#err80").hide();
        $("#err81").hide();
        $("#80").hide();
        $("#fwd").show();
        $("#81").show();
        addArry(q79);
    }
    else {
        $("#err80").show();
    }
}

function q81() {
    if (surArry.ACSS4_t3 != "") {
        $("#err81").hide();
        $("#err82").hide();
        $("#81").hide();
        $("#fwd").show();
        $("#82").show();
        addArry(q80);
    }
    else {
        $("#err81").show();
    }
}

function q82() {
    if (surArry.ACSS5_t3 != "") {
        $("#err82").hide();
        $("#err83").hide();
        $("#82").hide();
        $("#fwd").show();
        $("#83").show();
        addArry(q81);
    }
    else {
        $("#err82").show();
    }
}

function q83() {
    if (surArry.ACSS6_t3 != "") {
        $("#err83").hide();
        $("#err84").hide();
        $("#83").hide();
        $("#fwd").show();
        $("#84").show();
        addArry(q82);
    }
    else {
        $("#err83").show();
    }
}

function q84() {
    if (surArry.ACSS7_t3 != "") {
        $("#err84").hide();
        $("#err85").hide();
        $("#84").hide();
        $("#fwd").show();
        $("#baseInst6-1").show();
        addArry(q83);
    }
    else {
        $("#err84").show();
    }
}

function bInst6_1() {
    $("#baseInst6-1").hide();
    $("#err85").hide();
    $("#85").show();
    addArry(q84);
}

function q85() {
    if (surArry.BAM1_t3 != "") {
        $("#err85").hide();
        $("#err86").hide();
        $("#85").hide();
        $("#fwd").show();
        $("#86").show();
        addArry(bInst6_1);
    }
    else {
        $("#err85").show();
    }
}

function q86() {
    if (surArry.BAM2_t3 != "") {
        $("#err86").hide();
        $("#err87").hide();
        $("#86").hide();
        $("#fwd").show();
        $("#87").show();
        addArry(q85);
    }
    else {
        $("#err86").show();
    }
}

function q87() {
    if (surArry.BAM3_t3 != "") {
        $("#err87").hide();
        $("#87").hide();
        $("#fwd").hide();
        $("#s6Fin").show();
        var progressbar = $( "#progressbar6" );
        var progressLabel = $( ".progress-label" );
        progressbar.progressbar({value: 25});
        progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        addArry(q86);
        $(":mobile-pagecontainer").pagecontainer("load", "base2line7.html", {showLoadMsg: false});
    }
    else {
        $("#err87").show();
    }
}

function s6Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#base7");
    }, 2000);
}
function base7St() {
    $("#88").hide();
    $("#err88").hide();
    $("#back").hide();
    $("#fwd").show();
    $("#baseInst7").show();
}

function bInst7() {
    base3Loaded = false;
    $("#baseInst7").hide();
    $("#err88").hide();
    $("#88").show();
    $("#back").show();
    addArry(base7St);
}

function q88() {
    if (surArry.ISI1_t3 != "") {
        $("#err88").hide();
        $("#err89").hide();
        $("#88").hide();
        $("#fwd").show();
        $("#89").show();
        addArry(bInst7);
    }
    else {
        $("#err88").show();
    }
}

function q89() {
    if (surArry.ISI2_t3 != "") {
        $("#err89").hide();
        $("#err90").hide();
        $("#89").hide();
        $("#fwd").show();
        $("#90").show();
        addArry(q88);
    }
    else {
        $("#err89").show();
    }
}

function q90() {
    if (surArry.ISI3_t3 != "") {
        $("#err90").hide();
        $("#err91").hide();
        $("#90").hide();
        $("#fwd").show();
        $("#91").show();
        addArry(q89);
    }
    else {
        $("#err90").show();
    }
}

function q91() {
    if (surArry.ISI4_t3 != "") {
        $("#err91").hide();
        $("#err92").hide();
        $("#91").hide();
        $("#fwd").show();
        $("#92").show();
        addArry(q90);
    }
    else {
        $("#err91").show();
    }
}

function q92() {
    if (surArry.ISI5_t3 != "") {
        $("#err92").hide();
        $("#err93").hide();
        $("#92").hide();
        $("#fwd").show();
        $("#93").show();
        addArry(q91);
    }
    else {
        $("#err92").show();
    }
}

function q93() {
    if (surArry.ISI6_t3 != "") {
        $("#err93").hide();
        $("#err94").hide();
        $("#93").hide();
        $("#fwd").show();
        $("#94").show();
        addArry(q92);
    }
    else {
        $("#err93").show();
    }
}

function q94() {
    if (surArry.ISI7_t3 != "") {
        $("#err94").hide();
        $("#err95").hide();
        $("#94").hide();
        $("#fwd").show();
        $("#95").show();
        addArry(q93);
    }
    else {
        $("#err94").show();
    }
}

function q95() {
    if (surArry.ASQanx_t3 != "") {
        $("#err95").hide();
        $("#err96").hide();
        $("#err100").hide();
        $("#95").hide();
        $("#fwd").show();
        if (surArry.ASQanx_t3 == "0") {
            q95logic = true;
            surArry.ASQanx_dist_t3 = "";
            surArry.ASQanx_inc_t3 = "";
            $("#96, #98").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#100").show();
        }
        else {
            q95logic = false;
            $("#96").show();
        }
        addArry(q94);
    }
    else {
        $("#err95").show();
    }
}

function q96() {
    if (surArry.ASQanx_dist_t3 != "") {
        $("#err96").hide();
        $("#err98").hide();
        $("#96").hide();
        $("#fwd").show();
        $("#98").show();
        addArry(q95);
    }
    else {
        $("#err96").show();
    }
}

function q98() {
    if (surArry.ASQanx_inc_t3 != "") {
        $("#err98").hide();
        $("#err100").hide();
        $("#98").hide();
        $("#fwd").show();
        $("#100").show();
        addArry(q96);
    }
    else {
        $("#err98").show();
    }
}

function q100() {
    if (surArry.ASQrage_t3 != "") {
        $("#err100").hide();
        $("#err101").hide();
        $("#err105").hide();
        $("#100").hide();
        $("#fwd").show();
        if (surArry.ASQrage_t3 == "0") {
            q100logic = true;
            surArry.ASQrage_dist_t3 = "";
            surArry.ASQrage_inc_t3 = "";
            $("#101, #103").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#105").show();
        }
        else {
            q100logic = false;
            $("#101").show();
        }
        if (q95logic) {
            addArry(q95);
        }
        else {
            addArry(q98);
        }
    }
    else {
        $("#err100").show();
    }
}

function q101() {
    if (surArry.ASQrage_dist_t3 != "") {
        $("#err101").hide();
        $("#err103").hide();
        $("#101").hide();
        $("#fwd").show();
        $("#103").show();
        addArry(q100);
    }
    else {
        $("#err101").show();
    }
}

function q103() {
    if (surArry.ASQrage_inc_t3 != "") {
        $("#err103").hide();
        $("#err105").hide();
        $("#103").hide();
        $("#fwd").show();
        $("#105").show();
        addArry(q101);
    }
    else {
        $("#err103").show();
    }
}

function q105() {
    if (surArry.ASQdesp_t3 != "") {
        $("#err105").hide();
        $("#err106").hide();
        $("#err110").hide();
        $("#105").hide();
        $("#fwd").show();
        if (surArry.ASQdesp_t3 == "0") {
            q105logic = true;
            surArry.ASQdesp_dist_t3 = "";
            surArry.ASQdesp_inc_t3 = "";
            $("#106, #108").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#110").show();
        }
        else {
            q105logic = false;
            $("#106").show();
        }
        if (q100logic) {
            addArry(q100);
        }
        else {
            addArry(q103);
        }
    }
    else {
        $("#err105").show();
    }
}

function q106() {
    if (surArry.ASQdesp_dist_t3 != "") {
        $("#err106").hide();
        $("#err108").hide();
        $("#106").hide();
        $("#fwd").show();
        $("#108").show();
        addArry(q105);
    }
    else {
        $("#err106").show();
    }
}

function q108() {
    if (surArry.ASQdesp_inc_t3 != "") {
        $("#err108").hide();
        $("#err110").hide();
        $("#108").hide();
        $("#fwd").show();
        $("#110").show();
        addArry(q106);
    }
    else {
        $("#err108").show();
    }
}

function q110() {
    if (surArry.ASQlonely_t3 != "") {
        $("#err110").hide();
        $("#err111").hide();
        $("#err115").hide();
        $("#110").hide();
        $("#fwd").show();
        if (surArry.ASQlonely_t3 == "0") {
            q110logic = true;
            surArry.ASQlonely_dist_t3 = "";
            surArry.ASQlonely_inc_t3 = "";
            $("#111, #113").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#115").show();
        }
        else {
            q110logic = false;
            $("#111").show();
        }
        if (q105logic) {
            addArry(q105);
        }
        else {
            addArry(q108);
        }
    }
    else {
        $("#err110").show();
    }
}

function q111() {
    if (surArry.ASQlonely_dist_t3 != "") {
        $("#err111").hide();
        $("#err113").hide();
        $("#111").hide();
        $("#fwd").show();
        $("#113").show();
        addArry(q110);
    }
    else {
        $("#err111").show();
    }
}

function q113() {
    if (surArry.ASQlonely_inc_t3 != "") {
        $("#err113").hide();
        $("#err115").hide();
        $("#113").hide();
        $("#fwd").show();
        $("#115").show();
        addArry(q111);
    }
    else {
        $("#err113").show();
    }
}

function q115() {
    if (surArry.ASQhope_t3 != "") {
        $("#err115").hide();
        $("#err116").hide();
        $("#err120").hide();
        $("#115").hide();
        $("#fwd").show();
        if (surArry.ASQhope_t3 == "0") {
            q115logic = true;
            surArry.ASQhope_dist_t3 = "";
            surArry.ASQhope_inc_t3 = "";
            $("#116, #118").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#120").show();
        }
        else {
            q115logic = false;
            $("#116").show();
        }
        if (q110logic) {
            addArry(q110);
        }
        else {
            addArry(q113);
        }
    }
    else {
        $("#err115").show();
    }
}

function q116() {
    if (surArry.ASQhope_dist_t3 != "") {
        $("#err116").hide();
        $("#err118").hide();
        $("#116").hide();
        $("#fwd").show();
        $("#118").show();
        addArry(q115);
    }
    else {
        $("#err116").show();
    }
}

function q118() {
    if (surArry.ASQhope_inc_t3 != "") {
        $("#err118").hide();
        $("#err120").hide();
        $("#118").hide();
        $("#fwd").show();
        $("#120").show();
        addArry(q116);
    }
    else {
        $("#err118").show();
    }
}

function q120() {
    if (surArry.ASQaban_t3 != "") {
        $("#err120").hide();
        $("#err121").hide();
        $("#err125").hide();
        $("#120").hide();
        $("#fwd").show();
        if (surArry.ASQaban_t3 == "0") {
            q120logic = true;
            surArry.ASQaban_dist_t3 = "";
            surArry.ASQaban_inc_t3 = "";
            $("#121, #123").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#125").show();
        }
        else {
            q120logic = false;
            $("#121").show();
        }
        if (q115logic) {
            addArry(q115);
        }
        else {
            addArry(q118);
        }
    }
    else {
        $("#err120").show();
    }
}

function q121() {
    if (surArry.ASQaban_dist_t3 != "") {
        $("#err121").hide();
        $("#err123").hide();
        $("#121").hide();
        $("#fwd").show();
        $("#123").show();
        addArry(q120);
    }
    else {
        $("#err121").show();
    }
}

function q123() {
    if (surArry.ASQaban_inc_t3 != "") {
        $("#err123").hide();
        $("#err125").hide();
        $("#123").hide();
        $("#fwd").show();
        $("#125").show();
        addArry(q121);
    }
    else {
        $("#err123").show();
    }
}

function q125() {
    if (surArry.ASQselfhate_t3 != "") {
        $("#err125").hide();
        $("#err126").hide();
        $("#err130").hide();
        $("#125").hide();
        $("#fwd").show();
        if (surArry.ASQselfhate_t3 == "0") {
            q125logic = true;
            surArry.ASQselfhate_dist_t3 = "";
            surArry.ASQselfhate_inc_t3 = "";
            $("#126, #128").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#130").show();
        }
        else {
            q125logic = false;
            $("#126").show();
        }
        if (q120logic) {
            addArry(q120);
        }
        else {
            addArry(q123);
        }
    }
    else {
        $("#err125").show();
    }
}

function q126() {
    if (surArry.ASQselfhate_dist_t3 != "") {
        $("#err126").hide();
        $("#err128").hide();
        $("#126").hide();
        $("#fwd").show();
        $("#128").show();
        addArry(q125);
    }
    else {
        $("#err126").show();
    }
}

function q128() {
    if (surArry.ASQselfhate_inc_t3 != "") {
        $("#err128").hide();
        $("#err130").hide();
        $("#128").hide();
        $("#fwd").show();
        $("#130").show();
        addArry(q126);
    }
    else {
        $("#err128").show();
    }
}

function q130() {
    if (surArry.ASQguilt_t3 != "") {
        $("#err130").hide();
        $("#err131").hide();
        $("#err135").hide();
        $("#130").hide();
        $("#fwd").show();
        if (surArry.ASQguilt_t3 == "0") {
            q130logic = true;
            surArry.ASQguilt_dist_t3 = "";
            surArry.ASQguilt_inc_t3 = "";
            $("#131, #133").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#135").show();
        }
        else {
            q130logic = false;
            $("#131").show();
        }
        if (q125logic) {
            addArry(q125);
        }
        else {
            addArry(q128);
        }
    }
    else {
        $("#err130").show();
    }
}

function q131() {
    if (surArry.ASQguilt_dist_t3 != "") {
        $("#err131").hide();
        $("#err133").hide();
        $("#131").hide();
        $("#fwd").show();
        $("#133").show();
        addArry(q130);
    }
    else {
        $("#err131").show();
    }
}

function q133() {
    if (surArry.ASQguilt_inc_t3 != "") {
        $("#err133").hide();
        $("#err135").hide();
        $("#133").hide();
        $("#fwd").show();
        $("#135").show();
        addArry(q131);
    }
    else {
        $("#err133").show();
    }
}

function q135() {
    if (surArry.ASQhumil_t3 != "") {
        $("#err135").hide();
        $("#err136").hide();
        $("#135").hide();
        $("#fwd").show();
        if (surArry.ASQhumil_t3 == "0") {
            q135logic = true;
            surArry.ASQhumil_dist_t3 = "";
            surArry.ASQhumil_inc_t3 = "";
            $("#136, #138").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            $("#fwd").hide();
            $("#s7Fin").show();
            var progressbar = $( "#progressbar7" );
            var progressLabel = $( ".progress-label" );
            progressbar.progressbar({value: 47});
            progressLabel.text(progressbar.progressbar( "value" ) + "%" );
            $(":mobile-pagecontainer").pagecontainer("load", "base2line8.html", {showLoadMsg: false});
        }
        else {
            q135logic = false;
            $("#136").show();
        }
        if (q130logic) {
            addArry(q130);
        }
        else {
            addArry(q133);
        }
    }
    else {
        $("#err135").show();
    }
}

function q136() {
    if (surArry.ASQhumil_dist_t3 != "") {
        $("#err136").hide();
        $("#err138").hide();
        $("#136").hide();
        $("#fwd").show();
        $("#138").show();
        addArry(q135);
    }
    else {
        $("#err136").show();
    }
}

function q138() {
    if (surArry.ASQhumil_inc_t3 != "") {
        $("#err138").hide();
        $("#err139").hide();
        $("#138").hide();
        $("#fwd").show();
        $("#s7Fin").show();
        var progressbar = $( "#progressbar7" );
        var progressLabel = $( ".progress-label" );
        progressbar.progressbar({value: 47});
        progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        $(":mobile-pagecontainer").pagecontainer("load", "base2line8.html", {showLoadMsg: false});
        addArry(q136);
    }
    else {
        $("#err138").show();
    }
}

function s7Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#base8");
    }, 2000);
}

function base8St() {
    $("#140").hide();
    $("#err140").hide();
    $("#back").hide();
    $("#fwd").show();
    $("#baseInst8").show();
}

function bInst8() {
    base3Loaded = false;
    $("#baseInst8").hide();
    $("#err140").hide();
    $("#140").show();
    $("#back").show();
    addArry(base8St);
}

function q140() {
    if (surArry.BSS1_t3 != "") {
        $("#err140").hide();
        $("#err141").hide();
        $("#140").hide();
        $("#fwd").show();
        $("#141").show();
        addArry(bInst8);
    }
    else {
        $("#err140").show();
    }
}

function q141() {
    if (surArry.BSS2_t3 != "") {
        $("#err141").hide();
        $("#err142").hide();
        $("#141").hide();
        $("#fwd").show();
        $("#142").show();
        addArry(q140);
    }
    else {
        $("#err141").show();
    }
}

function q142() {
    if (surArry.BSS3_t3 != "") {
        $("#err142").hide();
        $("#err143").hide();
        $("#142").hide();
        $("#fwd").show();
        $("#143").show();
        addArry(q141);
    }
    else {
        $("#err142").show();
    }
}

function q143() {
    if (surArry.BSS4_t3 != "") {
        $("#err143").hide();
        $("#err144").hide();
        $("#143").hide();
        $("#fwd").show();
        $("#144").show();
        addArry(q142);
    }
    else {
        $("#err143").show();
    }
}

function q144() {
    if (surArry.BSS5_t3 != "") {
        $("#err144").hide();
        $("#err145").hide();
        $("#err159").hide();
        $("#144").hide();
        $("#fwd").show();
        if (surArry.BSS4_t3 == "0" && surArry.BSS5_t3 == "0") {
            q144logic = true;
            surArry.BSS6_t3 = "";
            surArry.BSS7_t3 = "";
            surArry.BSS8_t3 = "";
            surArry.BSS9_t3 = "";
            surArry.BSS10_t3 = "";
            surArry.BSS11_t3 = "";
            surArry.BSS12_t3 = "";
            surArry.BSS13_t3 = "";
            surArry.BSS14_t3 = "";
            surArry.BSS15_t3 = "";
            surArry.BSS16_t3 = "";
            surArry.BSS17_t3 = "";
            surArry.BSS18_t3 = "";
            surArry.BSS19_t3 = "";
            $("#159").show();
        }
        else {
            q144logic = false;
            $("#145").show();
        }
        addArry(q143);
    }
    else {
        $("#err144").show();
    }
}

function q145() {
    if (surArry.BSS6_t3 != "") {
        $("#err145").hide();
        $("#err146").hide();
        $("#145").hide();
        $("#fwd").show();
        $("#146").show();
        addArry(q144);
    }
    else {
        $("#err145").show();
    }
}

function q146() {
    if (surArry.BSS7_t3 != "") {
        $("#err146").hide();
        $("#err147").hide();
        $("#146").hide();
        $("#fwd").show();
        $("#147").show();
        addArry(q145);
    }
    else {
        $("#err146").show();
    }
}

function q147() {
    if (surArry.BSS8_t3 != "") {
        $("#err147").hide();
        $("#err148").hide();
        $("#147").hide();
        $("#fwd").show();
        $("#148").show();
        addArry(q146);
    }
    else {
        $("#err147").show();
    }
}

function q148() {
    if (surArry.BSS9_t3 != "") {
        $("#err148").hide();
        $("#err149").hide();
        $("#148").hide();
        $("#fwd").show();
        $("#149").show();
        addArry(q147);
    }
    else {
        $("#err148").show();
    }
}

function q149() {
    if (surArry.BSS10_t3 != "") {
        $("#err149").hide();
        $("#err150").hide();
        $("#149").hide();
        $("#fwd").show();
        $("#150").show();
        addArry(q148);
    }
    else {
        $("#err149").show();
    }
}

function q150() {
    if (surArry.BSS11_t3 != "") {
        $("#err150").hide();
        $("#err151").hide();
        $("#150").hide();
        $("#fwd").show();
        $("#151").show();
        addArry(q149);
    }
    else {
        $("#err150").show();
    }
}

function q151() {
    if (surArry.BSS12_t3 != "") {
        $("#err151").hide();
        $("#err152").hide();
        $("#151").hide();
        $("#fwd").show();
        $("#152").show();
        addArry(q150);
    }
    else {
        $("#err151").show();
    }
}

function q152() {
    if (surArry.BSS13_t3 != "") {
        $("#err152").hide();
        $("#err153").hide();
        $("#152").hide();
        $("#fwd").show();
        $("#153").show();
        addArry(q151);
    }
    else {
        $("#err152").show();
    }
}

function q153() {
    if (surArry.BSS14_t3 != "") {
        $("#err153").hide();
        $("#err154").hide();
        $("#153").hide();
        $("#fwd").show();
        $("#154").show();
        addArry(q152);
    }
    else {
        $("#err153").show();
    }
}

function q154() {
    if (surArry.BSS15_t3 != "") {
        $("#err154").hide();
        $("#err155").hide();
        $("#154").hide();
        $("#fwd").show();
        $("#155").show();
        addArry(q153);
    }
    else {
        $("#err154").show();
    }
}

function q155() {
    if (surArry.BSS16_t3 != "") {
        $("#err155").hide();
        $("#err156").hide();
        $("#155").hide();
        $("#fwd").show();
        $("#156").show();
        addArry(q154);
    }
    else {
        $("#err155").show();
    }
}

function q156() {
    if (surArry.BSS17_t3 != "") {
        $("#err156").hide();
        $("#err157").hide();
        $("#156").hide();
        $("#fwd").show();
        $("#157").show();
        addArry(q155);
    }
    else {
        $("#err156").show();
    }
}

function q157() {
    if (surArry.BSS18_t3 != "") {
        $("#err157").hide();
        $("#err158").hide();
        $("#157").hide();
        $("#fwd").show();
        $("#158").show();
        addArry(q156);
    }
    else {
        $("#err157").show();
    }
}

function q158() {
    if (surArry.BSS19_t3 != "") {
        $("#err158").hide();
        $("#err159").hide();
        $("#158").hide();
        $("#fwd").show();
        $("#159").show();
        addArry(q157);
    }
    else {
        $("#err158").show();
    }
}

function q159() {
    if (surArry.BSS20_t3 != "") {
        $("#err159").hide();
        $("#err160").hide();
        $("#159").hide();
        $("#fwd").show();
        if (surArry.BSS20_t3 == "0") {
            q159logic = true;
            $("#fwd").hide();
            surArry.BSS21_t3 = "";
            $("#s8Fin").show();
            var progressbar = $( "#progressbar8" );
            var progressLabel = $( ".progress-label" );
            progressbar.progressbar({value: 60});
            progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        }
        else {
            q159logic = false;
            $("#160").show();
        }
        if (q144logic) {
            addArry(q144);
        }
        else {
            addArry(q158);
        }
        $(":mobile-pagecontainer").pagecontainer("load", "base2line9.html", {showLoadMsg: false});
    }
    else {
        $("#err159").show();
    }
}

function q160() {
    if (surArry.BSS21_t3 != "") {
        $("#err160").hide();
        $("#160").hide();
        $("#fwd").hide();
        $("#s8Fin").show();
        var progressbar = $( "#progressbar8" );
        var progressLabel = $( ".progress-label" );
        progressbar.progressbar({value: 60});
        progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        addArry(q159);
        $(":mobile-pagecontainer").pagecontainer("load", "base2line9.html", {showLoadMsg: false});
    }
    else {
        $("#err160").show();
    }
}

function s8Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#base9");
    }, 2000);
}

function base9St() {
    $("#161").hide();
    $("#err161").hide();
    $("#back").hide();
    $("#fwd").show();
    $("#baseInst9").show();
}

function bInst9() {
    base3Loaded = false;
    $("#baseInst9").hide();
    $("#err161").hide();
    $("#161").show();
    $("#back").show();
    addArry(base9St);
}

function q161() {
    if (surArry.BSI1_t3 != "") {
        $("#err161").hide();
        $("#err162").hide();
        $("#161").hide();
        $("#fwd").show();
        $("#162").show();
        addArry(bInst9);
    }
    else {
        $("#err161").show();
    }
}

function q162() {
    if (surArry.BSI2_t3 != "") {
        $("#err162").hide();
        $("#err163").hide();
        $("#162").hide();
        $("#fwd").show();
        $("#163").show();
        addArry(q161);
    }
    else {
        $("#err162").show();
    }
}

function q163() {
    if (surArry.BSI3_t3 != "") {
        $("#err163").hide();
        $("#err164").hide();
        $("#163").hide();
        $("#fwd").show();
        $("#164").show();
        addArry(q162);
    }
    else {
        $("#err163").show();
    }
}

function q164() {
    if (surArry.BSI4_t3 != "") {
        $("#err164").hide();
        $("#err165").hide();
        $("#164").hide();
        $("#fwd").show();
        $("#165").show();
        addArry(q163);
    }
    else {
        $("#err164").show();
    }
}

function q165() {
    if (surArry.BSI5_t3 != "") {
        $("#err165").hide();
        $("#err166").hide();
        $("#165").hide();
        $("#fwd").show();
        $("#166").show();
        addArry(q164);
    }
    else {
        $("#err165").show();
    }
}

function q166() {
    if (surArry.BSI6_t3 != "") {
        $("#err166").hide();
        $("#err167").hide();
        $("#166").hide();
        $("#fwd").show();
        $("#167").show();
        addArry(q165);
    }
    else {
        $("#err166").show();
    }
}

function q167() {
    if (surArry.BSI7_t3 != "") {
        $("#err167").hide();
        $("#err168").hide();
        $("#167").hide();
        $("#fwd").show();
        $("#168").show();
        addArry(q166);
    }
    else {
        $("#err167").show();
    }
}

function q168() {
    if (surArry.BSI8_t3 != "") {
        $("#err168").hide();
        $("#err169").hide();
        $("#168").hide();
        $("#fwd").show();
        $("#169").show();
        addArry(q167);
    }
    else {
        $("#err168").show();
    }
}

function q169() {
    if (surArry.BSI9_t3 != "") {
        $("#err169").hide();
        $("#err170").hide();
        $("#169").hide();
        $("#fwd").show();
        $("#170").show();
        addArry(q168);
    }
    else {
        $("#err169").show();
    }
}

function q170() {
    if (surArry.BSI10_t3 != "") {
        $("#err170").hide();
        $("#err171").hide();
        $("#170").hide();
        $("#fwd").show();
        $("#171").show();
        addArry(q169);
    }
    else {
        $("#err170").show();
    }
}

function q171() {
    if (surArry.BSI11_t3 != "") {
        $("#err171").hide();
        $("#err172").hide();
        $("#171").hide();
        $("#fwd").show();
        $("#172").show();
        addArry(q170);
    }
    else {
        $("#err171").show();
    }
}

function q172() {
    if (surArry.BSI12_t3 != "") {
        $("#err172").hide();
        $("#err173").hide();
        $("#172").hide();
        $("#fwd").show();
        $("#173").show();
        addArry(q171);
    }
    else {
        $("#err172").show();
    }
}

function q173() {
    if (surArry.BSI13_t3 != "") {
        $("#err173").hide();
        $("#err174").hide();
        $("#173").hide();
        $("#fwd").show();
        $("#174").show();
        addArry(q172);
    }
    else {
        $("#err173").show();
    }
}

function q174() {
    if (surArry.BSI14_t3 != "") {
        $("#err174").hide();
        $("#err175").hide();
        $("#174").hide();
        $("#fwd").show();
        $("#175").show();
        addArry(q173);
    }
    else {
        $("#err174").show();
    }
}

function q175() {
    if (surArry.BSI15_t3 != "") {
        $("#err175").hide();
        $("#err176").hide();
        $("#175").hide();
        $("#fwd").show();
        $("#176").show();
        addArry(q174);
    }
    else {
        $("#err175").show();
    }
}

function q176() {
    if (surArry.BSI16_t3 != "") {
        $("#err176").hide();
        $("#err177").hide();
        $("#176").hide();
        $("#fwd").show();
        $("#177").show();
        addArry(q175);
    }
    else {
        $("#err176").show();
    }
}

function q177() {
    if (surArry.BSI17_t3 != "") {
        $("#err177").hide();
        $("#err178").hide();
        $("#177").hide();
        $("#fwd").show();
        $("#178").show();
        addArry(q176);
    }
    else {
        $("#err177").show();
    }
}

function q178() {
    if (surArry.BSI18_t3 != "") {
        $("#err178").hide();
        $("#178").hide();
        $("#fwd").hide();
        $("#s9Fin").show();
        var progressbar = $( "#progressbar9" );
        var progressLabel = $( ".progress-label" );
        progressbar.progressbar({value: 72});
        progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        addArry(q177);
        $(":mobile-pagecontainer").pagecontainer("load", "base2line10.html", {showLoadMsg: false});
    }
    else {
        $("#err178").show();
    }
}

function s9Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#base10");
    }, 2000);
}

function base10St() {
    $("#179").hide();
    $("#err179").hide();
    $("#back").hide();
    $("#fwd").show();
    $("#baseInst30").show();
}

function bInst30() {
    base3Loaded = false;
    $("#baseInst30").hide();
    $("#err179").hide();
    $("#179").show();
    $("#back").show();
    addArry(base10St);
}

function q179() {
    if (surArry.BHS1_t3 != "") {
        $("#err179").hide();
        $("#err180").hide();
        $("#179").hide();
        $("#fwd").show();
        $("#180").show();
        addArry(bInst30);
    }
    else {
        $("#err179").show();
    }
}

function q180() {
    if (surArry.BHS2_t3 != "") {
        $("#err180").hide();
        $("#err181").hide();
        $("#180").hide();
        $("#fwd").show();
        $("#181").show();
        addArry(q179);
    }
    else {
        $("#err180").show();
    }
}

function q181() {
    if (surArry.BHS3_t3 != "") {
        $("#err181").hide();
        $("#err182").hide();
        $("#181").hide();
        $("#fwd").show();
        $("#182").show();
        addArry(q180);
    }
    else {
        $("#err181").show();
    }
}

function q182() {
    if (surArry.BHS4_t3 != "") {
        $("#err182").hide();
        $("#err183").hide();
        $("#182").hide();
        $("#fwd").show();
        $("#183").show();
        addArry(q181);
    }
    else {
        $("#err182").show();
    }
}

function q183() {
    if (surArry.BHS5_t3 != "") {
        $("#err183").hide();
        $("#err184").hide();
        $("#183").hide();
        $("#fwd").show();
        $("#184").show();
        addArry(q182);
    }
    else {
        $("#err183").show();
    }
}

function q184() {
    if (surArry.BHS6_t3 != "") {
        $("#err184").hide();
        $("#err185").hide();
        $("#184").hide();
        $("#fwd").show();
        $("#185").show();
        addArry(q183);
    }
    else {
        $("#err184").show();
    }
}

function q185() {
    if (surArry.BHS7_t3 != "") {
        $("#err185").hide();
        $("#err186").hide();
        $("#185").hide();
        $("#fwd").show();
        $("#186").show();
        addArry(q184);
    }
    else {
        $("#err185").show();
    }
}

function q186() {
    if (surArry.BHS8_t3 != "") {
        $("#err186").hide();
        $("#err187").hide();
        $("#186").hide();
        $("#fwd").show();
        $("#187").show();
        addArry(q185);
    }
    else {
        $("#err186").show();
    }
}

function q187() {
    if (surArry.BHS9_t3 != "") {
        $("#err187").hide();
        $("#err188").hide();
        $("#187").hide();
        $("#fwd").show();
        $("#188").show();
        addArry(q186);
    }
    else {
        $("#err187").show();
    }
}

function q188() {
    if (surArry.BHS10_t3 != "") {
        $("#err188").hide();
        $("#err189").hide();
        $("#188").hide();
        $("#fwd").show();
        $("#189").show();
        addArry(q187);
    }
    else {
        $("#err188").show();
    }
}

function q189() {
    if (surArry.BHS11_t3 != "") {
        $("#err189").hide();
        $("#err190").hide();
        $("#189").hide();
        $("#fwd").show();
        $("#190").show();
        addArry(q188);
    }
    else {
        $("#err189").show();
    }
}

function q190() {
    if (surArry.BHS12_t3 != "") {
        $("#err190").hide();
        $("#err191").hide();
        $("#190").hide();
        $("#fwd").show();
        $("#191").show();
        addArry(q189);
    }
    else {
        $("#err190").show();
    }
}

function q191() {
    if (surArry.BHS13_t3 != "") {
        $("#err191").hide();
        $("#err192").hide();
        $("#191").hide();
        $("#fwd").show();
        $("#192").show();
        addArry(q190);
    }
    else {
        $("#err191").show();
    }
}

function q192() {
    if (surArry.BHS14_t3 != "") {
        $("#err192").hide();
        $("#err193").hide();
        $("#192").hide();
        $("#fwd").show();
        $("#193").show();
        addArry(q191);
    }
    else {
        $("#err192").show();
    }
}

function q193() {
    if (surArry.BHS15_t3 != "") {
        $("#err193").hide();
        $("#err194").hide();
        $("#193").hide();
        $("#fwd").show();
        $("#194").show();
        addArry(q192);
    }
    else {
        $("#err193").show();
    }
}

function q194() {
    if (surArry.BHS16_t3 != "") {
        $("#err194").hide();
        $("#err195").hide();
        $("#194").hide();
        $("#fwd").show();
        $("#195").show();
        addArry(q193);
    }
    else {
        $("#err194").show();
    }
}

function q195() {
    if (surArry.BHS17_t3 != "") {
        $("#err195").hide();
        $("#err196").hide();
        $("#195").hide();
        $("#fwd").show();
        $("#196").show();
        addArry(q194);
    }
    else {
        $("#err195").show();
    }
}

function q196() {
    if (surArry.BHS18_t3 != "") {
        $("#err196").hide();
        $("#err197").hide();
        $("#196").hide();
        $("#fwd").show();
        $("#197").show();
        addArry(q195);
    }
    else {
        $("#err196").show();
    }
}

function q197() {
    if (surArry.BHS19_t3 != "") {
        $("#err197").hide();
        $("#err198").hide();
        $("#197").hide();
        $("#fwd").show();
        $("#198").show();
        addArry(q196);
    }
    else {
        $("#err197").show();
    }
}

function q198() {
    if (surArry.BHS20_t3 != "") {
        $("#err198").hide();
        $("#198").hide();
        $("#fwd").hide();
        $("#s10Fin").show();
        var progressbar = $( "#progressbar10" );
        var progressLabel = $( ".progress-label" );
        progressbar.progressbar({value: 84});
        progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        addArry(q197);
        $(":mobile-pagecontainer").pagecontainer("load", "base2line11.html", {showLoadMsg: false});
    }
    else {
        $("#err198").show();
    }
}

function s10Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#base11");
    }, 2000);
}

function base11St() {
    $("#199").hide();
    $("#err199").hide();
    $("#back").hide();
    $("#fwd").show();
    $("#baseInst31").show();
}

function bInst31() {
    base3Loaded = false;
    $("#baseInst31").hide();
    $("#err199").hide();
    $("#199").show();
    $("#back").show();
    addArry(base11St);
}

function q199() {
    if (surArry.DSWS1_t3 != "") {
        $("#err199").hide();
        $("#err200").hide();
        $("#199").hide();
        $("#fwd").show();
        $("#200").show();
        addArry(bInst31);
    }
    else {
        $("#err199").show();
    }
}

function q200() {
    if (surArry.DSWS2_t3 != "") {
        $("#err200").hide();
        $("#err201").hide();
        $("#200").hide();
        $("#fwd").show();
        $("#201").show();
        addArry(q199);
    }
    else {
        $("#err200").show();
    }
}

function q201() {
    if (surArry.DSWS3_t3 != "") {
        $("#err201").hide();
        $("#err202").hide();
        $("#201").hide();
        $("#fwd").show();
        $("#202").show();
        addArry(q200);
    }
    else {
        $("#err201").show();
    }
}

function q202() {
    if (surArry.DSWS4_t3 != "") {
        $("#err202").hide();
        $("#err203").hide();
        $("#202").hide();
        $("#fwd").show();
        $("#203").show();
        addArry(q201);
    }
    else {
        $("#err202").show();
    }
}

function q203() {
    if (surArry.DSWS5_t3 != "") {
        $("#err203").hide();
        $("#err204").hide();
        $("#203").hide();
        $("#fwd").show();
        $("#204").show();
        addArry(q202);
    }
    else {
        $("#err203").show();
    }
}

function q204() {
    if (surArry.DSWS6_t3 != "") {
        $("#err204").hide();
        $("#err205").hide();
        $("#204").hide();
        $("#fwd").show();
        $("#205").show();
        addArry(q203);
    }
    else {
        $("#err204").show();
    }
}

function q205() {
    if (surArry.DSWS7_t3 != "") {
        $("#err205").hide();
        $("#err206").hide();
        $("#205").hide();
        $("#fwd").show();
        $("#206").show();
        addArry(q204);
    }
    else {
        $("#err205").show();
    }
}

function q206() {
    if (surArry.DSWS8_t3 != "") {
        $("#err206").hide();
        $("#err207").hide();
        $("#206").hide();
        $("#fwd").show();
        $("#207").show();
        addArry(q205);
    }
    else {
        $("#err206").show();
    }
}

function q207() {
    if (surArry.DSWS9_t3 != "") {
        $("#err207").hide();
        $("#err208").hide();
        $("#207").hide();
        $("#fwd").show();
        $("#208").show();
        addArry(q206);
    }
    else {
        $("#err207").show();
    }
}

function q208() {
    if (surArry.DSWS10_t3 != "") {
        $("#err208").hide();
        $("#err209").hide();
        $("#208").hide();
        $("#fwd").show();
        $("#209").show();
        addArry(q207);
    }
    else {
        $("#err208").show();
    }
}

function q209() {
    if (surArry.DSWS11_t3 != "") {
        $("#err209").hide();
        $("#err210").hide();
        $("#209").hide();
        $("#fwd").show();
        $("#210").show();
        addArry(q208);
    }
    else {
        $("#err209").show();
    }
}

function q210() {
    if (surArry.DSWS12_t3 != "") {
        $("#err210").hide();
        $("#210").hide();
        $("#fwd").hide();
        $("#s11Fin").show();
        var progressbar = $( "#progressbar11" );
        var progressLabel = $( ".progress-label" );
        progressbar.progressbar({value: 91});
        progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        addArry(q209);
        $(":mobile-pagecontainer").pagecontainer("load", "base2line12.html", {showLoadMsg: false});
    }
    else {
        $("#err210").show();
    }
}

function s11Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#base12");
    }, 2000);
}

function base12St() {
    $("#211").hide();
    $("#err211").hide();
    $("#back").hide();
    $("#fwd").show();
    $("#baseInst32").show();
}

function bInst32() {
    base3Loaded = false;
    $("#baseInst32").hide();
    $("#err211").hide();
    $("#211").show();
    $("#back").show();
    addArry(base12St);
}

function q211() {
    if (surArry.SFS1_t3 != "") {
        $("#err211").hide();
        $("#err212").hide();
        $("#211").hide();
        $("#fwd").show();
        $("#212").show();
        addArry(bInst32);
    }
    else {
        $("#err211").show();
    }
}

function q212() {
    if (surArry.SFS2_t3 != "") {
        $("#err212").hide();
        $("#err213").hide();
        $("#212").hide();
        $("#fwd").show();
        $("#213").show();
        addArry(q211);
    }
    else {
        $("#err212").show();
    }
}

function q213() {
    if (surArry.SFS3_t3 != "") {
        $("#err213").hide();
        $("#err214").hide();
        $("#213").hide();
        $("#fwd").show();
        $("#214").show();
        addArry(q212);
    }
    else {
        $("#err213").show();
    }
}

function q214() {
    if (surArry.SFS4_t3 != "") {
        $("#err214").hide();
        $("#err215").hide();
        $("#214").hide();
        $("#fwd").show();
        $("#215").show();
        addArry(q213);
    }
    else {
        $("#err214").show();
    }
}

function q215() {
    if (surArry.SFS5_t3 != "") {
        $("#err215").hide();
        $("#err216").hide();
        $("#215").hide();
        $("#fwd").show();
        $("#216").show();
        addArry(q214);
    }
    else {
        $("#err215").show();
    }
}

function q216() {
    if (surArry.SFS6_t3 != "") {
        $("#err216").hide();
        $("#err217").hide();
        $("#216").hide();
        $("#fwd").show();
        $("#217").show();
        addArry(q215);
    }
    else {
        $("#err216").show();
    }
}

function q217() {
    if (surArry.SFS7_t3 != "") {
        $("#err217").hide();
        $("#err218").hide();
        $("#217").hide();
        $("#fwd").show();
        $("#218").show();
        addArry(q216);
    }
    else {
        $("#err217").show();
    }
}

function q218() {
    if (surArry.SFS8_t3 != "") {
        $("#err218").hide();
        $("#err219").hide();
        $("#218").hide();
        $("#fwd").show();
        $("#219").show();
        addArry(q217);
    }
    else {
        $("#err218").show();
    }
}

function q219() {
    if (surArry.SFS9_t3 != "") {
        $("#err219").hide();
        $("#err220").hide();
        $("#219").hide();
        $("#fwd").show();
        $("#220").show();
        addArry(q218);
    }
    else {
        $("#err219").show();
    }
}

function q220() {
    if (surArry.SFS10_t3 != "") {
        $("#err220").hide();
        $("#err221").hide();
        $("#220").hide();
        $("#fwd").show();
        $("#221").show();
        addArry(q219);
    }
    else {
        $("#err220").show();
    }
}

function q221() {
    if (surArry.SFS11_t3 != "") {
        $("#err221").hide();
        $("#err222").hide();
        $("#221").hide();
        $("#fwd").show();
        $("#222").show();
        addArry(q220);
    }
    else {
        $("#err221").show();
    }
}

function q222() {
    if (surArry.SFS12_t3 != "") {
        $("#err222").hide();
        $("#err223").hide();
        $("#222").hide();
        $("#fwd").show();
        $("#223").show();
        addArry(q221);
    }
    else {
        $("#err222").show();
    }
}

function q223() {
    if (surArry.SFS12_t3 != "") {
        $("#err223").hide();
        $("#223").hide();
        $("#fwd").hide();
        $("#s12Fin").show();
        var progressbar = $( "#progressbar12" );
        var progressLabel = $( ".progress-label" );
        progressbar.progressbar({value: 100});
        progressLabel.text(progressbar.progressbar( "value" ) + "%" );
        addArry(q222);
        if (!base3Loaded) {
            base3Loaded = true;
            $(":mobile-pagecontainer").pagecontainer("load", "finished.html", {showLoadMsg: false});
        }
    }
    else {
        $("#err223").show();
    }
}

function s12Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#finish");
    }, 2000);
}

function base13St() {
    $("#224").hide();
    $("#back").hide();
    $("#fwd").show();
    $("#baseInst33").show();
}

function bInst33() {
    base3Loaded = false;
    $("#baseInst33").hide();
    $("#224").show();
    $("#back").show();
    addArry(base13St);
}

function q224() {
    surArry.Height_t3 = $("#slide1").val();
    $("#224").hide();
    $("#fwd").show();
    $("#225").show();
    addArry(bInst33);
}

function q225() {
    surArry.Suffocation_t3 = $("#slide2").val();
    $("#225").hide();
    $("#fwd").show();
    $("#226").show();
    addArry(q224);
}

function q226() {
    surArry.Bodybag_t3 = $("#slide3").val();
    $("#226").hide();
    $("#fwd").show();
    $("#227").show();
    addArry(q225);

}

function q227() {
    surArry.Guntohead_t3 = $("#slide4").val();
    $("#227").hide();
    $("#fwd").show();
    $("#228").show();
    addArry(q226);

}

function q228() {
    surArry.Noose_t3 = $("#slide5").val();
    $("#228").hide();
    $("#fwd").show();
    $("#229").show();
    addArry(q227);
}

function q229() {
    surArry.Bloodygun_t3 = $("#slide6").val();
    $("#229").hide();
    $("#fwd").show();
    $("#230").show();
    addArry(q228);
}

function q230() {
    surArry.Bloodywrist_t3 = $("#slide7").val();
    $("#230").hide();
    $("#fwd").show();
    $("#231").show();
    addArry(q229);
}

function q231() {
    surArry.Drowning_t3 = $("#slide8").val();
    $("#231").hide();
    $("#fwd").show();
    $("#232").show();
    addArry(q230);
}

function q232() {
    surArry.Hanged_t3 = $("#slide9").val();
    $("#232").hide();
    $("#fwd").show();
    $("#233").show();
    addArry(q231);
}

function q233() {
    surArry.Burned_t3 = $("#slide10").val();
    $("#233").hide();
    $("#fwd").show();
    $("#234").show();
    addArry(q232);
}

function q234() {
    surArry.Positive1_t3 = $("#slide11").val();
    $("#234").hide();
    $("#fwd").show();
    $("#235").show();
    addArry(q233);
}

function q235() {
    surArry.Positive2_t3 = $("#slide12").val();
    $("#235").hide();
    $("#fwd").show();
    $("#236").show();
    addArry(q234);
}

function q236() {
    surArry.Positive3_t3 = $("#slide13").val();
    $("#236").hide();
    $("#fwd").show();
    $("#237").show();
    addArry(q235);
}

function q237() {
    surArry.Positive4_t3 = $("#slide14").val();
    $("#237").hide();
    $("#fwd").show();
    $("#238").show();
    addArry(q236);
}

function q238() {
    surArry.Positive5_t3 = $("#slide15").val();
    $("#238").hide();
    $("#fwd").show();
    $("#s13Fin").show();
    var progressbar = $( "#progressbar13" );
    var progressLabel = $( ".progress-label" );
    progressbar.progressbar({value: 100});
    progressLabel.text(progressbar.progressbar( "value" ) + "%" );
    addArry(q237);
    $(":mobile-pagecontainer").pagecontainer("load", "finished.html", {showLoadMsg: false});
}

function s13Fin() {
    navArry = [];
    navPos = 0;
    $.mobile.loading("show");
    setTimeout(function () {
        $.mobile.loading("hide");
        $.mobile.changePage("#finish");
    }, 2000);
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
    $("#11, #12, #13, #14, #baseInst3, #15, #16, #17, #18, #19, #20, #21, #22, #23, #24, #25, #26, #27, #28, #29, #30, #s2Fin").hide();
    $("#31, #32, #33, #34, #35, #36, #37, #38, #39, #s3Fin, #40, #41, #42, #43, #44, #45, #46").hide();
    $("#47, #48, #49, #50, #51, #52, #53, #54, #55, #s4Fin, #56").hide();
    $("#57, #58, #59, #60, #61, #62, #63, #64, #65, #s5Fin, #66, #67, #68, #69, #70, #71, #72, #73, #74, #75, #76, #77").hide();
    $("#78, #79, #80, #81, #82, #83, #84, #85, #86, #s6Fin, #87, #baseInst6-1").hide();
    $("#88, #89, #90, #91, #92, #93, #94, #95, #96, #s7Fin, #97, #98, #99, #100, #101, #102, #103, #104, #105, #106, #107").hide();
    $("#108, #109, #110, #111, #112, #113, #114, #115, #116, #117, #118, #119, #120, #121, #122, #123, #124, #125, #126, #127, #128").hide();
    $("#129, #130, #131, #132, #133, #134, #135, #136, #137, #138, #139").hide();
    $("#140, #141, #142, #143, #144, #145, #146, #147, #148, #s8Fin, #149, #150, #151, #152, #153, #154, #155, #156, #157, #158, #159, #160").hide();
    $("#161, #162, #163, #164, #165, #166, #167, #168, #169, #s9Fin, #170, #171, #172, #173, #174, #175, #176, #177, #178").hide();
    $("#179, #180, #181, #182, #183, #184, #185, #186, #187, #s10Fin, #188, #189, #190, #191, #192, #193, #194, #195, #196, #197, #198").hide();
    $("#199, #200, #201, #202, #203, #204, #205, #206, #207, #s11Fin, #208, #209, #210").hide();
    $("#211, #212, #213, #214, #215, #216, #217, #218, #219, #s12Fin, #220, #221, #222, #223").hide();
    $("#224, #225, #226, #227, #228, #229, #230, #231, #232, #s13Fin, #233, #234, #235, #236, #237, #238").hide();
    return true;
}