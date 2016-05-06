var n; var q;

function videoAppears(videoNumber) {
  
	slideOrVideo = videoNumber;
	
	document.getElementById("demo").innerHTML = "";

	clearTimeout(GoORstop); 

	var i = videoNumber - 1;

	if (slideOrVideo === 0) {document.getElementById("closevideo").innerHTML = ""; document.getElementById('borderForCenterTextinBox2').style = ''; document.getElementById('ChangeText2').innerHTML = ''; BigFunction(1,0); myFunction(0); myFunction2(0); myFunction3(); WordsOnButtonFull(); slideit(); pauseSlides(); PrevNextParametersForPausePlay2(); changeparameters(); play();}
	
    if (slideOrVideo >= 1) {multivideos(slideOrVideo); var vid = 'https://www.youtube.com/embed/' + multivideo[0] + '?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1&vq=720p&rel=0&start=' + StartTimeMulti[0] + '&end=' + EndTimeMulti[0]; var posterURL = 'http://images.weserv.nl/?url=i.ytimg.com/vi/CVWJBM_gwGg/maxresdefault.jpg';		
      	
        mycode = '<iframe id = "myvid" style = "position: relative; z-index:4; top:28px;" width="700" height="393" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allowfullscreen="true" allowscriptaccess="always" quality="high" bgcolor="#000000" name="my-video" style=""' + 'src= "' + vid + '"' + 'type="application/x-shockwave-flash"></iframe>' + '<a style = "position: absolute; z-index:10; top:428px; left:0px; right:0px; text-align:center; text-decoration: none" href="' + sourceUrl[i] + '" target="_blank"><font id = "talkLink" size="2">' + author[i] + ', &quot;' + sourceName[i] + ',&quot; ' + source[i] + ', ' + monthYear[i] + '</font></a>';

	    document.getElementById("showVideo").innerHTML = mycode;
        CloseVideo();
        KeepImageBorderColor();

    }

	onYouTubeIframeAPIReady();
	
if ("ontouchstart" in document.documentElement) {document.getElementById('myvid').setAttribute('poster', posterURL);}

}

var video2 = clone(video);

var Explain2 = clone(Explain);

var PlayButton = new Array();
var Play = new Array();
var locate = new Array();
var number = new Array();
for (var i = 0; i < NumberOfVideos; i++) 
{PlayButton[i] = "PlayButton" + i;
Play[i] = "Play" + i;
locate[i] = "locate" + i;
number[i] = i+1;};

var number2 = clone(number);

var iVarPassed;

function detectTouchMouse(iVarPassed) {

	if ("ontouchstart" in document.documentElement) {videoAppears(iVarPassed);} 
	else {videoAppears(iVarPassed);}

}

var number3=[];

function shuffle() {
    for (var t = 0; t < NumberOfVideos; t++) {number3[t] = t+1;}
    var length0 = 0,
        length = arguments.length,
        i,
        j,
        rnd,
        tmp;

    for (i = 0; i < length; i += 1) {
        if ({}.toString.call(arguments[i]) !== "[object Array]") {
            throw new TypeError("Argument is not an array.");
        }

        if (i === 0) {
            length0 = arguments[0].length;
        }

        if (length0 !== arguments[i].length) {
            throw new RangeError("Array lengths do not match.");
        }
    }


    for (i = 0; i < length0; i += 1) {
        rnd = Math.floor(Math.random() * i);
        for (j = 0; j < length; j += 1) {
            tmp = arguments[j][i];
            arguments[j][i] = arguments[j][rnd];
            arguments[j][rnd] = tmp;
        }
    }

    
}

shuffle(video, PlayButton, Explain, number, number3);

function myFunction2(x) {
        var text = new Array();	
    for (var i = 0; i < NumberOfVideos; i++) {

    text[i] = '<div class="leftcolumn1">' + '<div class = "crop"><a><img src="' + preVideoURL + video2[i] + postSmallVideoURL + '" alt="" width="140" border="0" /></a></div>' + '<a onmouseover="ClosePreviousPlayPauseNext2(); BigFunction(2,'+x+'); document.getElementById(Play['+i+']).src=\'./buttons/GreenPlayButton2.png\';' + 'document.getElementById(\'Big\').src=\'' + preVideoURL + video2[i] + postVideoURL + '\';' + 'document.getElementById(\'Big\').onerror = function() {document.getElementById(\'Big\').src=\'' + preVideoURL + video2[i] + '/hqdefault.jpg&trim=20\';};' + 'document.getElementById(\'ChangeText\').innerHTML = Explain2['+i+']"' + 'onmouseout="BigFunction(1,'+x+'); document.getElementById(Play['+i+']).src=\'./buttons/TransparentImage.png\';' + 'document.getElementById(\'Big\').src=\'./buttons/TransparentImage.png\';' + 'document.getElementById(\'ChangeText\').innerHTML = \'\'">' + '<img onclick = "n=1; myFunctionB(); myFunction2B(); myFunction3B(); detectTouchMouse(number2['+i+']);" class="leftcolumn2" id="' + Play[i] + '" src="./buttons/TransparentImage.png" alt="" width = "171" height = "89" border="0" /></a></div>'; 

document.getElementById(locate[i]).innerHTML=text[i];

    }
 
}

myFunction2();

function myFunction2B() {
        var text = new Array();	
    for (var i = 0; i < NumberOfVideos; i++) {

    text[i] = '<div class="leftcolumn1">' + '<div class = "crop"><a><img src="' + preVideoURL + video2[i] + postSmallVideoURL + '" alt="" width="140" border="0" /></a></div>' + '<a onmouseover="ClosePreviousPlayPauseNext2(); document.getElementById(Play['+i+']).src=\'./buttons/GreenPlayButton2.png\';' + 'document.getElementById(\'borderForCenterTextinBox2\').style = \'border-style: solid; border-color: #000000; border-width: 3px\';' + 'document.getElementById(\'ChangeText2\').innerHTML = Explain2['+i+']"' + 'onmouseout="document.getElementById(Play['+i+']).src=\'./buttons/TransparentImage.png\';' + 'document.getElementById(\'borderForCenterTextinBox2\').style = \'\';' + 'document.getElementById(\'ChangeText2\').innerHTML = \'\'">' + '<img onclick = "n=1; detectTouchMouse(number2['+i+']);" class="leftcolumn2" id="' + Play[i] + '" src="./buttons/TransparentImage.png" alt="" width = "171" height = "89" border="0" /></a></div>'; 

document.getElementById(locate[i]).innerHTML=text[i];

    }

}

	var ButtonLocation = new Array();
	var para = new Array();
	for (var i = 0; i < NumberOfSmallButtons; i++) 
	{ButtonLocation[i] = "ButtonLocation" + i;
	para[i] = "para" + i;};

function myFunction3() {

	var bttn = new Array();	
    		for (var i = 0; i < NumberOfSmallButtons; i++) {

bttn[i] = '<div class="ButtonPosition"><div onclick="return toggleMe(para['+i+'])" class = "ButtonSize"' + 'onmouseover="ClosePreviousPlayPauseNext2(); this.className=\'ButtonSize2\';' + 'style.color=\'#ffffff\';' + 'document.getElementById(\'ChangeText\').innerHTML = WordsOnButtonFullDescription['+i+']"' + 'onmouseout="this.className=\'ButtonSize\';' + 'style.color=\'#000000\';' + 'document.getElementById(\'ChangeText\').innerHTML = \'\'">&nbsp;&nbsp;' + WordOnButton[i] + '</div></div>';

document.getElementById(ButtonLocation[i]).innerHTML=bttn[i];

    }

}

myFunction3();

function myFunction3B() {

	var bttn = new Array();	
    		for (var i = 0; i < NumberOfSmallButtons; i++) {

bttn[i] = '<div class="ButtonPosition"><div onclick="return toggleMe(para['+i+'])" class = "ButtonSize"' + 'onmouseover="ClosePreviousPlayPauseNext2(); this.className=\'ButtonSize2\';' + 'style.color=\'#ffffff\';' + 'document.getElementById(\'borderForCenterTextinBox2\').style = \'border-style: solid; border-color: #000000; border-width: 3px\';' + 'document.getElementById(\'ChangeText2\').innerHTML = WordsOnButtonFullDescription['+i+']"' + 'onmouseout="this.className=\'ButtonSize\';' + 'style.color=\'#000000\';' + 'document.getElementById(\'borderForCenterTextinBox2\').style = \'\';' + 'document.getElementById(\'ChangeText2\').innerHTML = \'\'">&nbsp;&nbsp;' + WordOnButton[i] + '</div></div>';

document.getElementById(ButtonLocation[i]).innerHTML=bttn[i];

    }

}
	
function showExplain3() {document.getElementById('ChangeText2').innerHTML = Explain3[step-1]; document.getElementById('borderForCenterTextinBox2').style = 'border-style: solid; border-color: #000000; border-width: 3px';}

function closeExplain3() {document.getElementById('ChangeText2').innerHTML = ''; document.getElementById('borderForCenterTextinBox2').style = '';}

function PreviousPlayPauseNext() {

    var	textit = '<a id = "txt">' + '<div style="position:relative; left: 199px; top:-135px; width:100px; float:left; z-index:3">' + '<center><a id = "previous"></a></center></div>' + '<div style="position:relative; left: 200px; top:-135px; width:100px; float:left; z-index:3">' + '<center><a id = "PlayOrPause"></a></center></div>' + '<div style="position:relative; left: 199px; top:-135px; width:100px; float:left; z-index:3">' + '<center><a id = "next"></a></center></div>' + '</a>';

	document.getElementById('PreviousPlayPauseNext').innerHTML = textit;
	
	document.getElementById('ChangeText').innerHTML = '<div class="transparentfilmheight" onmouseout="ClosePreviousPlayPauseNext2()" onclick="detectTouchMouse2()"></div>';

}

// var cursorX; var cursorY; 
// document.onmousemove = function(e){cursorX = e.pageX; cursorY = e.pageY; document.getElementById('cursorx').innerHTML = cursorX; document.getElementById('cursory').innerHTML = step;};
// function ClosePreviousPlayPauseNext() {if (cursorX < 465 || cursorX > 1163 || cursorY > 480 || cursorY < 170) {}}

function ClosePreviousPlayPauseNext2() {document.getElementById('PreviousPlayPauseNext').innerHTML = ""; document.getElementById('ChangeText').innerHTML = "";}

function detectTouchMouse2() {if ("ontouchstart" in document.documentElement) {ClosePreviousPlayPauseNext2();} else {}}

function BigFunction(x,y) {
    
    var ShowSlideBoxOrShowVideoDescription = x;
  
    var VideoSelected = y;
    
    p = step - 1;

    if (ShowSlideBoxOrShowVideoDescription == 1 & VideoSelected == 0) {
        document.getElementById("showPlayRedGreenButton").innerHTML = '<img onmouseover = "q=2; showExplain3(); slideVideo(); ClosePreviousPlayPauseNext2()" onmouseout="q=1; closeExplain3(); SlideVideoOnOff = 2; closeslidevideo()" style = "position:absolute; top:6.5%; right:0; left:0; margin:auto; width:700px; height:312px; z-index:3;"' + 'onclick="detectTouchMouse3()"' + 'src="./buttons/TransparentImage.png" alt="" border="0" /></a>';

        document.getElementById("showVideo").innerHTML = '<img onmouseover = "PreviousPlayPauseNext(); previous(); next(); pauseit(); play();" id="Big" style = "position:absolute; top:81.5%; right:0; left:0; margin:auto; width:700px; height:82px; z-index:3;"' + 'src="./buttons/TransparentImage.png" alt="" border="0" /></a>';

    }

    if (ShowSlideBoxOrShowVideoDescription == 2 & VideoSelected == 0) {
        document.getElementById("showVideo").innerHTML = '<img id="Big" style = "position:absolute; top:28px; right:0; left:0; margin:auto; width:700px; z-index:2;"' + 'src="./buttons/TransparentImage.png" alt="" border="0" /></a>';}

}

var SlideVideoOnOff;

function slideVideo() {
    
    document.getElementById("PlayRedGreen").innerHTML = '<a onmouseover="q=2; showExplain3(); SlideVideoOnOff=1; document.getElementById(\'playredgreenbutton\').src=\'./buttons/play.green.png\'">' + '<img id="playredgreenbutton" onclick="n=2; q=1; pauseSlides(); closeslidevideo2(); PlayVideoFromSlide('+step+'); CloseVideo(); closeExplain3(); myFunctionB(); myFunction2B(); myFunction3B(); KeepImageBorderColor(); onYouTubeIframeAPIReady()" style="position: absolute; top: 0px; left: 0px; z-index:4;"' + 'src="./buttons/play.red.png" alt="" border="0" /></a>';}

function closeslidevideo() {    
    setTimeout(function(){	
        if (SlideVideoOnOff == 2) {document.getElementById("PlayRedGreen").innerHTML = "";}
    }, 1);
}

function closeslidevideo2() {document.getElementById("PlayRedGreen").innerHTML = ""; document.getElementById("demo").innerHTML = "";}

var detect3var = 1;

function detectTouchMouse3() {
    if ("ontouchstart" in document.documentElement) {closeslidevideotouch();}
}

function closeslidevideotouch() {
    if (detect3var == 1) {
        detect3var = 2;
        document.getElementById("PlayRedGreen").innerHTML = "";
        ClosePreviousPlayPauseNext2();
    }
    else if (detect3var == 2) {detect3var = 1; slideVideo(); PreviousPlayPauseNext(); previous(); next(); pauseit(); play();}
}

var pauseiton = true;

var playon = false;

function changeparameters() {
    pauseiton = !pauseiton;
    playon = !playon;
}

function PrevNextParametersForPausePlay() {
    pauseiton = false;
    playon = true;
}

function PrevNextParametersForPausePlay2() {
    pauseiton = true;
    playon = false;
}

function pauseit() {
    
    if (pauseiton == true) {

    document.getElementById("PlayOrPause").innerHTML = '<a onmouseover="document.getElementById(\'pausebutton\').src=\'./buttons/pause.in.png\'"' + 'onmouseout="document.getElementById(\'pausebutton\').src=\'./buttons/pause.out.png\'">' + '<img id="pausebutton" onclick="changeparameters(); play(); pauseSlides();"' + 'src="./buttons/pause.out.png" alt="" border="0" /></a>';}    
    
} 

function play() {
    
    if (playon == true) {    

    document.getElementById("PlayOrPause").innerHTML = '<a onmouseover="document.getElementById(\'playbutton\').src=\'./buttons/play.in.png\'"' + 'onmouseout="document.getElementById(\'playbutton\').src=\'./buttons/play.out.png\'">' + '<img id="playbutton" onclick="changeparameters(); pauseit(); slideit();"' + 'src="./buttons/play.out.png" alt="" border="0" /></a>';}

}

function previous() {
    
    document.getElementById("previous").innerHTML = '<a onmouseover="document.getElementById(\'previousbutton\').src=\'./buttons/Prev.in.png\'"' + 'onmouseout="document.getElementById(\'previousbutton\').src=\'./buttons/Prev.out.png\'">' + '<img id="previousbutton" onclick="slideit(-1); pauseSlides(); PrevNextParametersForPausePlay(); play();"' + 'src="./buttons/Prev.out.png" alt="" border="0" /></a>';}

function next() {

	document.getElementById("next").innerHTML = '<a onmouseover="document.getElementById(\'nextbutton\').src=\'./buttons/Next.in.png\'"' + 'onmouseout="document.getElementById(\'nextbutton\').src=\'./buttons/Next.out.png\'">' + '<img id="nextbutton" onclick="slideit(1); pauseSlides(); PrevNextParametersForPausePlay(); play();"' + 'src="./buttons/Next.out.png" alt="" border="0" /></a>';}

function CloseVideo() {

    document.getElementById("closevideo").innerHTML = '<a onmouseover="document.getElementById(\'closevideobutton\').src=\'./buttons/close.in.png\'"' + 'onmouseout="document.getElementById(\'closevideobutton\').src=' + '\'./buttons/TransparentImage.png\'">' + '<img id="closevideobutton" onclick="videoAppears(0);" height = "20px"' + 'style="position: absolute; top: 15px; left: 428px; z-index:4;"' + 'src="./buttons/close.in.png" alt="" border="0" /></a>';}

function CloseVideo2() {
    
    document.getElementById("closevideo").innerHTML = '<a onmouseover="document.getElementById(\'closevideobutton\').src=\'./buttons/close.in.png\'"' + 'onmouseout="document.getElementById(\'closevideobutton\').src=' + '\'./buttons/TransparentImage.png\'">' + '<img id="closevideobutton" onclick="videoAppears(0);" height = "20px"' + 'style="position: absolute; top: 15px; left: 428px; z-index:4;"' + 'src="./buttons/TransparentImage.png" alt="" border="0" /></a>';}

// All this stuff below to function videoAppears is to create videos that connect back to back.

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    // first video
    player = new YT.Player('myvid', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.ENDED) {
    KeepImageBorderColor();
    videoAppears(0);
}
else if (n==1) {
    document.getElementById("talkLink").style.color = "white";
    document.getElementById("talkLink").onmouseover = function() {this.style.color = "#00ff00"; this.style.opacity="1"}    	
    document.getElementById("talkLink").onmouseout = function() {this.style.opacity="0"}
	
    setTimeout(function(){	
        document.getElementById("talkLink").style.opacity="0";
        CloseVideo2();	
    }, 3000);  	
}
else {	
    document.getElementById("talkLink2").style.color = "white";
    document.getElementById("talkLink2").onmouseover = function() {this.style.color = "#00ff00"; this.style.opacity="1"}    	
    document.getElementById("talkLink2").onmouseout = function() {this.style.opacity="0"}
	
    setTimeout(function(){	
        document.getElementById("talkLink2").style.opacity="0";
        CloseVideo2();	
    }, 3000);  	
}
}
