var storage = window.localStorage;
if (!storage.frameColor) {
    storage.frameColor = '#629C70';

    var el = document.getElementsByClassName("tablecolor");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("tablecolor")[i].style.backgroundColor = storage.frameColor;}

}
else {

    var el = document.getElementsByClassName("tablecolor");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("tablecolor")[i].style.backgroundColor = storage.frameColor;}

}

var storage = window.localStorage;
if (!storage.buttonColor) {
    storage.buttonColor = '#85d495';
    
    var el = document.getElementsByClassName("BigButtonSize");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("BigButtonSize")[i].style.backgroundColor = storage.buttonColor;}
 
}
else {
    
    var el = document.getElementsByClassName("BigButtonSize");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("BigButtonSize")[i].style.backgroundColor = storage.buttonColor;}
     		
}

function KeepImageBorderColor() {

    var storage = window.localStorage;
    if (!storage.buttonColor) {
        storage.buttonColor = '#85d495';
        
        var el = document.getElementsByClassName("crop");
    	for (var i=0;i<el.length; i++) {
         		document.getElementsByClassName("crop")[i].style.borderColor = storage.buttonColor;}     		
    
    }
    else {
        
        var el2 = document.getElementsByClassName("crop");
    	for (var j=0;j<el2.length; j++) {
         		document.getElementsByClassName("crop")[j].style.borderColor = storage.buttonColor;}     		

    }

}

var storage = window.localStorage;
if (!storage.backgroundColor) {
	storage.backgroundColor = '#4b6261';
	document.body.style.backgroundColor=storage.backgroundColor;
	
}
else {
	document.body.style.backgroundColor=storage.backgroundColor;

}

var storage = window.localStorage;
if (!storage.titleColor) {
    storage.titleColor = '#181818';

    var el = document.getElementsByClassName("title");
	for (var i=0;i<el.length; i++) {
    document.getElementsByClassName("title")[i].style.color = storage.titleColor;
    }
}
else {

    var el = document.getElementsByClassName("title");
	for (var i=0;i<el.length; i++) {
    document.getElementsByClassName("title")[i].style.color = storage.titleColor;
    }
}    

var storage = window.localStorage;
if (!storage.buttontextColor) {
    storage.buttontextColor = '#4b6261';

    var el = document.getElementsByClassName("buttontext");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("buttontext")[i].style.color = storage.buttontextColor;
	}

}
else {

    var el = document.getElementsByClassName("buttontext");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("buttontext")[i].style.color = storage.buttontextColor;
	}

}

var storage = window.localStorage;
if (!storage.insideColor) {
	storage.insideColor = '#4b6261';
	document.getElementById("scrollbar_fatcuddly").style.backgroundColor = storage.insideColor;
	document.getElementById("scrollbar_fatcuddly_opposite").style.backgroundColor = storage.insideColor;
    	var el = document.getElementsByClassName("inside");
		for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("inside")[i].style.backgroundColor = storage.insideColor;}
}
else {
	document.getElementById("scrollbar_fatcuddly").style.backgroundColor = storage.insideColor;
	document.getElementById("scrollbar_fatcuddly_opposite").style.backgroundColor = storage.insideColor;
    	var el = document.getElementsByClassName("inside");
		for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("inside")[i].style.backgroundColor = storage.insideColor;}
}

var c=1;

function ColorPalette() {

	document.getElementById("colorpalette").innerHTML = '<div style = "position:relative"><a onmouseover="document.getElementById(\'colorbutton\').src=\'./buttons/color.in.png\'"' + 'onmouseout="document.getElementById(\'colorbutton\').src=' + 

'\'./buttons/color.out.png\'">' +

'<img id="colorbutton" style = "position:absolute; top:15px; right:104px;" onclick="show(\'EntireColorBox\'); PresetColors(); CloseOrOpenSlideShow()" height = "50px"' + 
 'src="./buttons/color.out.png" alt="" border="0" /></div></a>';}

ColorPalette();

function CloseOrOpenSlideShow() {
    if (c==1) {c=2; pauseSlides(); closeslidevideo2();}
    else {c=1; videoAppears(0);}
}

LetterOnButton = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

	var BigButtonLocation = new Array();
	var BigToggle = new Array();
	for (var i = 0; i < 26; i++) 
	{BigButtonLocation[i] = "BigButtonLocation" + i;
	BigToggle[i] = "BigToggle" + i;};

function myFunction4() {

	var BigBttn = new Array();	
    		for (var i = 0; i < 26; i++) {

BigBttn[i] = '<div id="bigbuttoncolorstays" class = "BigButtonPosition"><div onclick="return toggleMe(BigToggle['+i+'])" class = "BigButtonSize"' + 'onmouseover="ClosePreviousPlayPauseNext2(); this.className=\'BigButtonSize2\'; style.backgroundColor= \'#00ff00\'" ' + 'onmouseout="this.className=\'BigButtonSize\'; style.backgroundColor= \''+ storage.buttonColor + '\'">&nbsp;&nbsp;' + LetterOnButton[i] + '</div></div>';

    var el = document.getElementsByClassName("BigButtonSize");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("BigButtonSize")[i].style.backgroundColor = storage.buttonColor;}

document.getElementById(BigButtonLocation[i]).innerHTML=BigBttn[i];}
document.getElementsByClassName("BigButtonSize")[25].style.backgroundColor = storage.buttonColor;   
}

myFunction4();


function ColorChoice(ColorOfFrame, ColorOfButtons) {

    	storage.frameColor = ColorOfFrame;
    	storage.buttonColor = ColorOfButtons;

var el = document.getElementsByClassName("tablecolor");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("tablecolor")[i].style.backgroundColor = storage.frameColor;}

var el = document.getElementsByClassName("crop");
        for (var i=0;i<el.length; i++) {
                document.getElementsByClassName("crop")[i].style.borderColor = storage.buttonColor;}

var BigBttn = new Array();	
    	for (var i = 0; i < 26; i++) {

	BigBttn[i] = '<div class="BigButtonPosition"><div onclick="return toggleMe(BigToggle['+i+'])" class = "BigButtonSize"' + 'onmouseover="ClosePreviousPlayPauseNext2(); style.backgroundColor= \'#00ff00\'" ' + 'onmouseout="style.backgroundColor= \''+ storage.buttonColor + '\'">&nbsp;&nbsp;' + LetterOnButton[i] + '</div></div>';

document.getElementById(BigButtonLocation[i]).innerHTML=BigBttn[i];}

var el = document.getElementsByClassName("BigButtonSize");
	for (var i=0;i<el.length; i++) {
      		document.getElementsByClassName("BigButtonSize")[i].style.backgroundColor = storage.buttonColor;}

}

function ColorChoiceFrame(ColorOfFrame) {
    	storage.frameColor = ColorOfFrame;
	    var el = document.getElementsByClassName("tablecolor");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("tablecolor")[i].style.backgroundColor = storage.frameColor;}
}

function ColorChoiceButton(ColorOfButton) {
    	storage.buttonColor = ColorOfButton;

	    var el = document.getElementsByClassName("crop");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("crop")[i].style.borderColor = storage.buttonColor;}

	    var BigBttn = new Array();	
    	for (var i = 0; i < 26; i++) {

	BigBttn[i] = '<div class = "BigButtonPosition"><div onclick="return toggleMe(BigToggle['+i+'])" class = "BigButtonSize"' + 'onmouseover="ClosePreviousPlayPauseNext2(); style.backgroundColor= \'#00ff00\'" ' + 'onmouseout="style.backgroundColor= \''+ storage.buttonColor + '\'">&nbsp;&nbsp;' + LetterOnButton[i] + '</div></div>';

    document.getElementById(BigButtonLocation[i]).innerHTML=BigBttn[i];}

    	    var el = document.getElementsByClassName("BigButtonSize");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("BigButtonSize")[i].style.backgroundColor = storage.buttonColor;}

}

function ColorChoiceBackground(ColorOfBackground) {
    	storage.backgroundColor = ColorOfBackground;
	document.body.style.backgroundColor=storage.backgroundColor;
}

function ColorChoiceTitle(ColorOfTitle) {
    	storage.titleColor = ColorOfTitle;
	    var el = document.getElementsByClassName("title");
	for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("title")[i].style.color = storage.titleColor;}
}

function ColorChoiceButtonText(ColorOfButtonText) {
    	storage.buttontextColor = ColorOfButtonText;
    	var el = document.getElementsByClassName("buttontext");
	   for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("buttontext")[i].style.color = storage.buttontextColor;}
}

function ColorChoiceInside(ColorOfInside) {
    	storage.insideColor = ColorOfInside;
	document.getElementById("scrollbar_fatcuddly").style.backgroundColor = storage.insideColor;
	document.getElementById("scrollbar_fatcuddly_opposite").style.backgroundColor = storage.insideColor;
    	var el = document.getElementsByClassName("inside");
		for (var i=0;i<el.length; i++) {
     		document.getElementsByClassName("inside")[i].style.backgroundColor = storage.insideColor;}
}

function ColorSettingsBox() {

     var colorsettings = '<div id="EntireColorBox" style="display:none; z-index:10; position:relative; left:250px; top:24px">' + 
'<div id="presetbox" class="colorsettingsbox" style="display:block">' + 
    '<div style="position:absolute; top:11px; left:0; right:0; margin-left:auto; margin-right:auto; width:188px; font-size:200%">SELECT A COLOR</div>' +
    '<div class="nextLine" id = "PresetColorRow1"></div>' +
    '<div class="nextLine" id = "PresetColorRow2"></div>' +
    '<div class="nextLine" id = "PresetColorRow3"></div>' +
    '<div class="nextLine" id = "PresetColorRow4"></div>' +
    '<div class="nextLine" id = "PresetColorRow5"></div>' +
    '<div class="nextLine" id = "PresetColorRow6"></div>' +
    '<div class="nextLine" id = "PresetColorRow7"></div></div>' + 
'<div id="framebox" class="colorsettingsbox" style="display:none">' + 
   '<select id="frameSelectDefault" style="position:absolute; top:11px; left:0; right:0; margin-left:auto; margin-right:auto; width:188px; font-size:180%" onChange="framecolorshades(this.options[selectedIndex].value)">' +
  	'<option value="framecolor">SELECT A COLOR</option>' + 
 	'<option value="red">Red</option>' +
  	'<option value="orange">Orange</option>' +
  	'<option value="yellow">Yellow</option>' +
  	'<option value="green">Green</option>' +
  	'<option value="lightblue">Light Blue</option>' +
  	'<option value="darkblue">Dark Blue</option>' +
  	'<option value="purple">Purple</option>' +
  	'<option value="pink">Pink</option>' +
  	'<option value="brown">Brown</option>' +
  	'<option value="whiteblack">White-Black</option>' +
    '</select>' + '<div id="FrameUserSelectedColor"></div></div>' + 
'<div id="buttonbox" class="colorsettingsbox" style="display:none">' +
   '<select id="buttonSelectDefault" style="position:absolute; top:11px; left:0; right:0; margin-left:auto; margin-right:auto; width:188px; font-size:180%" onChange="buttoncolorshades(this.options[selectedIndex].value)">' +
  	'<option value="buttoncolor">SELECT A COLOR</option>' + 
  	'<option value="red">Red</option>' +
  	'<option value="orange">Orange</option>' +
  	'<option value="yellow">Yellow</option>' +
  	'<option value="green">Green</option>' +
  	'<option value="lightblue">Light Blue</option>' +
  	'<option value="darkblue">Dark Blue</option>' +
  	'<option value="purple">Purple</option>' +
  	'<option value="pink">Pink</option>' +
  	'<option value="brown">Brown</option>' +
  	'<option value="whiteblack">White-Black</option>' +
   '</select>' + '<div id="ButtonUserSelectedColor"></div></div>' + 
'<div id="backgroundbox" class="colorsettingsbox" style="display:none">' +
   '<select id="backgroundSelectDefault" style="position:absolute; top:11px; left:0; right:0; margin-left:auto; margin-right:auto; width:188px; font-size:180%" onChange="backgroundcolorshades(this.options[selectedIndex].value)">' +
  	'<option value="backgroundcolor">SELECT A COLOR</option>' + 
  	'<option value="red">Red</option>' +
  	'<option value="orange">Orange</option>' +
  	'<option value="yellow">Yellow</option>' +
  	'<option value="green">Green</option>' +
  	'<option value="lightblue">Light Blue</option>' +
  	'<option value="darkblue">Dark Blue</option>' +
  	'<option value="purple">Purple</option>' +
  	'<option value="pink">Pink</option>' +
  	'<option value="brown">Brown</option>' +
  	'<option value="whiteblack">White-Black</option>' +
   '</select>' + '<div id="BackgroundUserSelectedColor"></div></div>' + 
'<div id="textbox" class="colorsettingsbox" style="display:none">' +
   '<select id="textSelectDefault" style="position:absolute; left:254px; top:11px; width:188px; font-size:180%" onChange="buttontextcolorshades(this.options[selectedIndex].value)">' +
  	'<option value="buttontextcolor">LETTER COLOR</option>' +
  	'<option value="red">Red</option>' +
  	'<option value="orange">Orange</option>' +
  	'<option value="yellow">Yellow</option>' +
  	'<option value="green">Green</option>' +
  	'<option value="lightblue">Light Blue</option>' +
  	'<option value="darkblue">Dark Blue</option>' +
  	'<option value="purple">Purple</option>' +
  	'<option value="pink">Pink</option>' +
  	'<option value="brown">Brown</option>' +
  	'<option value="whiteblack">White-Black</option>' +
   '</select>' + '<div id="ButtonTextUserSelectedColor"></div>' +
   '<select id="insideSelectDefault" style="position:absolute; right:10px; top:11px; width:188px; font-size:180%" onChange="insidecolorshades(this.options[selectedIndex].value)">' +
  	'<option value="insidecolor">INSIDE COLOR</option>' +
  	'<option value="red">Red</option>' +
  	'<option value="orange">Orange</option>' +
  	'<option value="yellow">Yellow</option>' +
  	'<option value="green">Green</option>' +
  	'<option value="lightblue">Light Blue</option>' +
  	'<option value="darkblue">Dark Blue</option>' +
  	'<option value="purple">Purple</option>' +
  	'<option value="pink">Pink</option>' +
  	'<option value="brown">Brown</option>' +
  	'<option value="whiteblack">White-Black</option>' +
   '</select>' + '<div id="InsideUserSelectedColor"></div>' +
   '<select id="titleSelectDefault" style="position:absolute; left:10px; top:11px; width:188px; font-size:180%" onChange="titlecolorshades(this.options[selectedIndex].value)">' +
  	'<option value="titlecolor">TITLE COLOR</option>' +
  	'<option value="red">Red</option>' +
  	'<option value="orange">Orange</option>' +
  	'<option value="yellow">Yellow</option>' +
  	'<option value="green">Green</option>' +
  	'<option value="lightblue">Light Blue</option>' +
  	'<option value="darkblue">Dark Blue</option>' +
  	'<option value="purple">Purple</option>' +
  	'<option value="pink">Pink</option>' +
  	'<option value="brown">Brown</option>' +
  	'<option value="whiteblack">White-Black</option>' +
   '</select>' + '<div id="TitleUserSelectedColor"></div></div>' +
'<div id="presettab" onclick="HideBox(\'framebox\',\'frametab\',\'buttonbox\',\'buttontab\',\'backgroundbox\',\'backgroundtab\',\'textbox\',\'texttab\'); ShowBox(\'presetbox\',\'presettab\')" class="tabFront">Preset<br>Colors</div>' + 

'<div id="frametab" onclick="HideBox(\'presetbox\',\'presettab\',\'buttonbox\',\'buttontab\',\'backgroundbox\',\'backgroundtab\',\'textbox\',\'texttab\'); ShowBox(\'framebox\',\'frametab\')" class="tabBehind" style="left:118px;">Frame<br>Colors</div>' +

'<div id="buttontab" onclick="HideBox(\'presetbox\',\'presettab\',\'framebox\',\'frametab\',\'backgroundbox\',\'backgroundtab\',\'textbox\',\'texttab\'); ShowBox(\'buttonbox\',\'buttontab\')" class="tabBehind" style="left:248px">Button<br>Colors</div>' +
 
'<div id="backgroundtab" onclick="HideBox(\'presetbox\',\'presettab\',\'framebox\',\'frametab\',\'buttonbox\',\'buttontab\',\'textbox\',\'texttab\'); ShowBox(\'backgroundbox\',\'backgroundtab\')" class="tabBehind" style="left:378px">Background<br>Colors</div>' +

'<div id="texttab" onclick="HideBox(\'presetbox\',\'presettab\',\'framebox\',\'frametab\',\'buttonbox\',\'buttontab\',\'backgroundbox\',\'backgroundtab\'); ShowBox(\'textbox\',\'texttab\')" class="tabBehind" style="left:508px">Text+Inside<br>Colors</div>' +

'<div onclick="show(\'EntireColorBox\'); CloseOrOpenSlideShow()" class="closebox" style="left:638px">X</div>' + 
'</div>';

document.getElementById('colorsettingsID').innerHTML=colorsettings;

}

ColorSettingsBox();

function ResetAllSelectDropdownsToDefault() {
    document.getElementById("frameSelectDefault").selectedIndex = "0";
    document.getElementById("buttonSelectDefault").selectedIndex = "0";
    document.getElementById("backgroundSelectDefault").selectedIndex = "0";
    document.getElementById("textSelectDefault").selectedIndex = "0";
    document.getElementById("insideSelectDefault").selectedIndex = "0";
    document.getElementById("titleSelectDefault").selectedIndex = "0";
}

function framecolorshades(color) {
    if (color=="framecolor"){document.getElementById('FrameUserSelectedColor').innerHTML=""}
    if (color=="red"){document.getElementById('FrameUserSelectedColor').innerHTML=
	    '<div class="nextLine" id = "FrameColorRow1"></div>' +
        '<div class="nextLine" id = "FrameColorRow2"></div>' +
        '<div class="nextLine" id = "FrameColorRow3"></div>' +
        '<div class="nextLine" id = "FrameColorRow4"></div>' +
        '<div class="nextLine" id = "FrameColorRow5"></div>' +
        '<div class="nextLine" id = "FrameColorRow6"></div>' +
        '<div class="nextLine" id = "FrameColorRow7"></div>';
        Red('redframe');}

    if (color=="orange"){document.getElementById('FrameUserSelectedColor').innerHTML=
	    '<div class="nextLine" id = "FrameColorRow1"></div>' +
        '<div class="nextLine" id = "FrameColorRow2"></div>' +
        '<div class="nextLine" id = "FrameColorRow3"></div>' +
        '<div class="nextLine" id = "FrameColorRow4"></div>' +
        '<div class="nextLine" id = "FrameColorRow5"></div>' +
        '<div class="nextLine" id = "FrameColorRow6"></div>' +
        '<div class="nextLine" id = "FrameColorRow7"></div>';
        Orange('orangeframe');}

    if (color=="yellow"){document.getElementById('FrameUserSelectedColor').innerHTML=
	    '<div class="nextLine" id = "FrameColorRow1"></div>' +
        '<div class="nextLine" id = "FrameColorRow2"></div>' +
        '<div class="nextLine" id = "FrameColorRow3"></div>' +
        '<div class="nextLine" id = "FrameColorRow4"></div>' +
        '<div class="nextLine" id = "FrameColorRow5"></div>' +
        '<div class="nextLine" id = "FrameColorRow6"></div>' +
        '<div class="nextLine" id = "FrameColorRow7"></div>';
        Yellow('yellowframe');}

    if (color=="green"){document.getElementById('FrameUserSelectedColor').innerHTML=
	    '<div class="nextLine" id = "FrameColorRow1"></div>' +
        '<div class="nextLine" id = "FrameColorRow2"></div>' +
        '<div class="nextLine" id = "FrameColorRow3"></div>' +
        '<div class="nextLine" id = "FrameColorRow4"></div>' +
        '<div class="nextLine" id = "FrameColorRow5"></div>' +
        '<div class="nextLine" id = "FrameColorRow6"></div>' +
        '<div class="nextLine" id = "FrameColorRow7"></div>';
        Green('greenframe');}

    if (color=="lightblue"){document.getElementById('FrameUserSelectedColor').innerHTML=
	    '<div class="nextLine" id = "FrameColorRow1"></div>' +
        '<div class="nextLine" id = "FrameColorRow2"></div>' +
        '<div class="nextLine" id = "FrameColorRow3"></div>' +
        '<div class="nextLine" id = "FrameColorRow4"></div>' +
        '<div class="nextLine" id = "FrameColorRow5"></div>' +
        '<div class="nextLine" id = "FrameColorRow6"></div>' +
        '<div class="nextLine" id = "FrameColorRow7"></div>';
        LightBlue('lightblueframe');}

    if (color=="darkblue"){document.getElementById('FrameUserSelectedColor').innerHTML=
	    '<div class="nextLine" id = "FrameColorRow1"></div>' +
        '<div class="nextLine" id = "FrameColorRow2"></div>' +
        '<div class="nextLine" id = "FrameColorRow3"></div>' +
        '<div class="nextLine" id = "FrameColorRow4"></div>' +
        '<div class="nextLine" id = "FrameColorRow5"></div>' +
        '<div class="nextLine" id = "FrameColorRow6"></div>' +
        '<div class="nextLine" id = "FrameColorRow7"></div>';
        DarkBlue('darkblueframe');}

    if (color=="purple"){document.getElementById('FrameUserSelectedColor').innerHTML=
	    '<div class="nextLine" id = "FrameColorRow1"></div>' +
        '<div class="nextLine" id = "FrameColorRow2"></div>' +
        '<div class="nextLine" id = "FrameColorRow3"></div>' +
        '<div class="nextLine" id = "FrameColorRow4"></div>' +
        '<div class="nextLine" id = "FrameColorRow5"></div>' +
        '<div class="nextLine" id = "FrameColorRow6"></div>' +
        '<div class="nextLine" id = "FrameColorRow7"></div>';
        Purple('purpleframe');}

    if (color=="pink"){document.getElementById('FrameUserSelectedColor').innerHTML=
	    '<div class="nextLine" id = "FrameColorRow1"></div>' +
        '<div class="nextLine" id = "FrameColorRow2"></div>' +
        '<div class="nextLine" id = "FrameColorRow3"></div>' +
        '<div class="nextLine" id = "FrameColorRow4"></div>' +
        '<div class="nextLine" id = "FrameColorRow5"></div>' +
        '<div class="nextLine" id = "FrameColorRow6"></div>' +
        '<div class="nextLine" id = "FrameColorRow7"></div>';
        Pink('pinkframe');}

    if (color=="brown"){document.getElementById('FrameUserSelectedColor').innerHTML=
	    '<div class="nextLine" id = "FrameColorRow1"></div>' +
        '<div class="nextLine" id = "FrameColorRow2"></div>' +
        '<div class="nextLine" id = "FrameColorRow3"></div>' +
        '<div class="nextLine" id = "FrameColorRow4"></div>' +
        '<div class="nextLine" id = "FrameColorRow5"></div>' +
        '<div class="nextLine" id = "FrameColorRow6"></div>' +
        '<div class="nextLine" id = "FrameColorRow7"></div>';
        Brown('brownframe');}

    if (color=="whiteblack"){document.getElementById('FrameUserSelectedColor').innerHTML=
	    '<div class="nextLine" id = "FrameColorRow1"></div>' +
        '<div class="nextLine" id = "FrameColorRow2"></div>' +
        '<div class="nextLine" id = "FrameColorRow3"></div>' +
        '<div class="nextLine" id = "FrameColorRow4"></div>' +
        '<div class="nextLine" id = "FrameColorRow5"></div>' +
        '<div class="nextLine" id = "FrameColorRow6"></div>' +
        '<div class="nextLine" id = "FrameColorRow7"></div>';
        WhiteBlack('whiteblackframe');}

}

function buttoncolorshades(color) {
    if (color=="buttoncolor"){document.getElementById('ButtonUserSelectedColor').innerHTML=""}
    if (color=="red"){document.getElementById('ButtonUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="ButtonColorRow1"></div>' +
        '<div class="nextLine" id="ButtonColorRow2"></div>' +
        '<div class="nextLine" id="ButtonColorRow3"></div>' +
        '<div class="nextLine" id="ButtonColorRow4"></div>' +
        '<div class="nextLine" id="ButtonColorRow5"></div>' +
        '<div class="nextLine" id="ButtonColorRow6"></div>' +
        '<div class="nextLine" id="ButtonColorRow7"></div>';
        Red('redbutton');}

    if (color=="orange"){document.getElementById('ButtonUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="ButtonColorRow1"></div>' +
        '<div class="nextLine" id="ButtonColorRow2"></div>' +
        '<div class="nextLine" id="ButtonColorRow3"></div>' +
        '<div class="nextLine" id="ButtonColorRow4"></div>' +
        '<div class="nextLine" id="ButtonColorRow5"></div>' +
        '<div class="nextLine" id="ButtonColorRow6"></div>' +
        '<div class="nextLine" id="ButtonColorRow7"></div>';
        Orange('orangebutton');}

    if (color=="yellow"){document.getElementById('ButtonUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="ButtonColorRow1"></div>' +
        '<div class="nextLine" id="ButtonColorRow2"></div>' +
        '<div class="nextLine" id="ButtonColorRow3"></div>' +
        '<div class="nextLine" id="ButtonColorRow4"></div>' +
        '<div class="nextLine" id="ButtonColorRow5"></div>' +
        '<div class="nextLine" id="ButtonColorRow6"></div>' +
        '<div class="nextLine" id="ButtonColorRow7"></div>';
        Yellow('yellowbutton');}

    if (color=="green"){document.getElementById('ButtonUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="ButtonColorRow1"></div>' +
        '<div class="nextLine" id="ButtonColorRow2"></div>' +
        '<div class="nextLine" id="ButtonColorRow3"></div>' +
        '<div class="nextLine" id="ButtonColorRow4"></div>' +
        '<div class="nextLine" id="ButtonColorRow5"></div>' +
        '<div class="nextLine" id="ButtonColorRow6"></div>' +
        '<div class="nextLine" id="ButtonColorRow7"></div>';
        Green('greenbutton');}

    if (color=="lightblue"){document.getElementById('ButtonUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="ButtonColorRow1"></div>' +
        '<div class="nextLine" id="ButtonColorRow2"></div>' +
        '<div class="nextLine" id="ButtonColorRow3"></div>' +
        '<div class="nextLine" id="ButtonColorRow4"></div>' +
        '<div class="nextLine" id="ButtonColorRow5"></div>' +
        '<div class="nextLine" id="ButtonColorRow6"></div>' +
        '<div class="nextLine" id="ButtonColorRow7"></div>';
        LightBlue('lightbluebutton');}

    if (color=="darkblue"){document.getElementById('ButtonUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="ButtonColorRow1"></div>' +
        '<div class="nextLine" id="ButtonColorRow2"></div>' +
        '<div class="nextLine" id="ButtonColorRow3"></div>' +
        '<div class="nextLine" id="ButtonColorRow4"></div>' +
        '<div class="nextLine" id="ButtonColorRow5"></div>' +
        '<div class="nextLine" id="ButtonColorRow6"></div>' +
        '<div class="nextLine" id="ButtonColorRow7"></div>';
        DarkBlue('darkbluebutton');}

    if (color=="purple"){document.getElementById('ButtonUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="ButtonColorRow1"></div>' +
        '<div class="nextLine" id="ButtonColorRow2"></div>' +
        '<div class="nextLine" id="ButtonColorRow3"></div>' +
        '<div class="nextLine" id="ButtonColorRow4"></div>' +
        '<div class="nextLine" id="ButtonColorRow5"></div>' +
        '<div class="nextLine" id="ButtonColorRow6"></div>' +
        '<div class="nextLine" id="ButtonColorRow7"></div>';
        Purple('purplebutton');}

    if (color=="pink"){document.getElementById('ButtonUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="ButtonColorRow1"></div>' +
        '<div class="nextLine" id="ButtonColorRow2"></div>' +
        '<div class="nextLine" id="ButtonColorRow3"></div>' +
        '<div class="nextLine" id="ButtonColorRow4"></div>' +
        '<div class="nextLine" id="ButtonColorRow5"></div>' +
        '<div class="nextLine" id="ButtonColorRow6"></div>' +
        '<div class="nextLine" id="ButtonColorRow7"></div>';
        Pink('pinkbutton');}

    if (color=="brown"){document.getElementById('ButtonUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="ButtonColorRow1"></div>' +
        '<div class="nextLine" id="ButtonColorRow2"></div>' +
        '<div class="nextLine" id="ButtonColorRow3"></div>' +
        '<div class="nextLine" id="ButtonColorRow4"></div>' +
        '<div class="nextLine" id="ButtonColorRow5"></div>' +
        '<div class="nextLine" id="ButtonColorRow6"></div>' +
        '<div class="nextLine" id="ButtonColorRow7"></div>';
        Brown('brownbutton');}

    if (color=="whiteblack"){document.getElementById('ButtonUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="ButtonColorRow1"></div>' +
        '<div class="nextLine" id="ButtonColorRow2"></div>' +
        '<div class="nextLine" id="ButtonColorRow3"></div>' +
        '<div class="nextLine" id="ButtonColorRow4"></div>' +
        '<div class="nextLine" id="ButtonColorRow5"></div>' +
        '<div class="nextLine" id="ButtonColorRow6"></div>' +
        '<div class="nextLine" id="ButtonColorRow7"></div>';
        WhiteBlack('whiteblackbutton');}

}

function backgroundcolorshades(color) {
    if (color=="backgroundcolor"){document.getElementById('BackgroundUserSelectedColor').innerHTML=""}
    if (color=="red"){document.getElementById('BackgroundUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="BackgroundColorRow1"></div>' +
        '<div class="nextLine" id="BackgroundColorRow2"></div>' +
        '<div class="nextLine" id="BackgroundColorRow3"></div>' +
        '<div class="nextLine" id="BackgroundColorRow4"></div>' +
        '<div class="nextLine" id="BackgroundColorRow5"></div>' +
        '<div class="nextLine" id="BackgroundColorRow6"></div>' +
        '<div class="nextLine" id="BackgroundColorRow7"></div>';
        Red('redbackground');}

    if (color=="orange"){document.getElementById('BackgroundUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="BackgroundColorRow1"></div>' +
        '<div class="nextLine" id="BackgroundColorRow2"></div>' +
        '<div class="nextLine" id="BackgroundColorRow3"></div>' +
        '<div class="nextLine" id="BackgroundColorRow4"></div>' +
        '<div class="nextLine" id="BackgroundColorRow5"></div>' +
        '<div class="nextLine" id="BackgroundColorRow6"></div>' +
        '<div class="nextLine" id="BackgroundColorRow7"></div>';
        Orange('orangebackground');}

    if (color=="yellow"){document.getElementById('BackgroundUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="BackgroundColorRow1"></div>' +
        '<div class="nextLine" id="BackgroundColorRow2"></div>' +
        '<div class="nextLine" id="BackgroundColorRow3"></div>' +
        '<div class="nextLine" id="BackgroundColorRow4"></div>' +
        '<div class="nextLine" id="BackgroundColorRow5"></div>' +
        '<div class="nextLine" id="BackgroundColorRow6"></div>' +
        '<div class="nextLine" id="BackgroundColorRow7"></div>';
        Yellow('yellowbackground');}

    if (color=="green"){document.getElementById('BackgroundUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="BackgroundColorRow1"></div>' +
        '<div class="nextLine" id="BackgroundColorRow2"></div>' +
        '<div class="nextLine" id="BackgroundColorRow3"></div>' +
        '<div class="nextLine" id="BackgroundColorRow4"></div>' +
        '<div class="nextLine" id="BackgroundColorRow5"></div>' +
        '<div class="nextLine" id="BackgroundColorRow6"></div>' +
        '<div class="nextLine" id="BackgroundColorRow7"></div>';
        Green('greenbackground');}

    if (color=="lightblue"){document.getElementById('BackgroundUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="BackgroundColorRow1"></div>' +
        '<div class="nextLine" id="BackgroundColorRow2"></div>' +
        '<div class="nextLine" id="BackgroundColorRow3"></div>' +
        '<div class="nextLine" id="BackgroundColorRow4"></div>' +
        '<div class="nextLine" id="BackgroundColorRow5"></div>' +
        '<div class="nextLine" id="BackgroundColorRow6"></div>' +
        '<div class="nextLine" id="BackgroundColorRow7"></div>';
        LightBlue('lightbluebackground');}

    if (color=="darkblue"){document.getElementById('BackgroundUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="BackgroundColorRow1"></div>' +
        '<div class="nextLine" id="BackgroundColorRow2"></div>' +
        '<div class="nextLine" id="BackgroundColorRow3"></div>' +
        '<div class="nextLine" id="BackgroundColorRow4"></div>' +
        '<div class="nextLine" id="BackgroundColorRow5"></div>' +
        '<div class="nextLine" id="BackgroundColorRow6"></div>' +
        '<div class="nextLine" id="BackgroundColorRow7"></div>';
        DarkBlue('darkbluebackground');}

    if (color=="purple"){document.getElementById('BackgroundUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="BackgroundColorRow1"></div>' +
        '<div class="nextLine" id="BackgroundColorRow2"></div>' +
        '<div class="nextLine" id="BackgroundColorRow3"></div>' +
        '<div class="nextLine" id="BackgroundColorRow4"></div>' +
        '<div class="nextLine" id="BackgroundColorRow5"></div>' +
        '<div class="nextLine" id="BackgroundColorRow6"></div>' +
        '<div class="nextLine" id="BackgroundColorRow7"></div>';
        Purple('purplebackground');}

    if (color=="pink"){document.getElementById('BackgroundUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="BackgroundColorRow1"></div>' +
        '<div class="nextLine" id="BackgroundColorRow2"></div>' +
        '<div class="nextLine" id="BackgroundColorRow3"></div>' +
        '<div class="nextLine" id="BackgroundColorRow4"></div>' +
        '<div class="nextLine" id="BackgroundColorRow5"></div>' +
        '<div class="nextLine" id="BackgroundColorRow6"></div>' +
        '<div class="nextLine" id="BackgroundColorRow7"></div>';
        Pink('pinkbackground');}

    if (color=="brown"){document.getElementById('BackgroundUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="BackgroundColorRow1"></div>' +
        '<div class="nextLine" id="BackgroundColorRow2"></div>' +
        '<div class="nextLine" id="BackgroundColorRow3"></div>' +
        '<div class="nextLine" id="BackgroundColorRow4"></div>' +
        '<div class="nextLine" id="BackgroundColorRow5"></div>' +
        '<div class="nextLine" id="BackgroundColorRow6"></div>' +
        '<div class="nextLine" id="BackgroundColorRow7"></div>';
        Brown('brownbackground');}

    if (color=="whiteblack"){document.getElementById('BackgroundUserSelectedColor').innerHTML=
	    '<div class="nextLine" id="BackgroundColorRow1"></div>' +
        '<div class="nextLine" id="BackgroundColorRow2"></div>' +
        '<div class="nextLine" id="BackgroundColorRow3"></div>' +
        '<div class="nextLine" id="BackgroundColorRow4"></div>' +
        '<div class="nextLine" id="BackgroundColorRow5"></div>' +
        '<div class="nextLine" id="BackgroundColorRow6"></div>' +
        '<div class="nextLine" id="BackgroundColorRow7"></div>';
        WhiteBlack('whiteblackbackground');}

}

function titlecolorshades(color) {
    if (color=="titlecolor"){document.getElementById('TitleUserSelectedColor').innerHTML=""}
    if (color=="red"){document.getElementById('TitleUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="TitleColorRow1"></div>'+
	'<div class="nextLine" id="TitleColorRow2"></div>'+
	'<div class="nextLine" id="TitleColorRow3"></div>'+
	'<div class="nextLine" id="TitleColorRow4"></div>'+
	'<div class="nextLine" id="TitleColorRow5"></div>'+
	'<div class="nextLine" id="TitleColorRow6"></div>'+
	'<div class="nextLine" id="TitleColorRow7"></div></div>';
        RedSmall('redtitle');}
    if (color=="orange"){document.getElementById('TitleUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="TitleColorRow1"></div>'+
	'<div class="nextLine" id="TitleColorRow2"></div>'+
	'<div class="nextLine" id="TitleColorRow3"></div>'+
	'<div class="nextLine" id="TitleColorRow4"></div>'+
	'<div class="nextLine" id="TitleColorRow5"></div>'+
	'<div class="nextLine" id="TitleColorRow6"></div>'+
	'<div class="nextLine" id="TitleColorRow7"></div></div>';
        OrangeSmall('orangetitle');}
    if (color=="yellow"){document.getElementById('TitleUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="TitleColorRow1"></div>'+
	'<div class="nextLine" id="TitleColorRow2"></div>'+
	'<div class="nextLine" id="TitleColorRow3"></div>'+
	'<div class="nextLine" id="TitleColorRow4"></div>'+
	'<div class="nextLine" id="TitleColorRow5"></div>'+
	'<div class="nextLine" id="TitleColorRow6"></div>'+
	'<div class="nextLine" id="TitleColorRow7"></div></div>';
        YellowSmall('yellowtitle');}
    if (color=="green"){document.getElementById('TitleUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="TitleColorRow1"></div>'+
	'<div class="nextLine" id="TitleColorRow2"></div>'+
	'<div class="nextLine" id="TitleColorRow3"></div>'+
	'<div class="nextLine" id="TitleColorRow4"></div>'+
	'<div class="nextLine" id="TitleColorRow5"></div>'+
	'<div class="nextLine" id="TitleColorRow6"></div>'+
	'<div class="nextLine" id="TitleColorRow7"></div></div>';
        GreenSmall('greentitle');}
    if (color=="lightblue"){document.getElementById('TitleUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="TitleColorRow1"></div>'+
	'<div class="nextLine" id="TitleColorRow2"></div>'+
	'<div class="nextLine" id="TitleColorRow3"></div>'+
	'<div class="nextLine" id="TitleColorRow4"></div>'+
	'<div class="nextLine" id="TitleColorRow5"></div>'+
	'<div class="nextLine" id="TitleColorRow6"></div>'+
	'<div class="nextLine" id="TitleColorRow7"></div></div>';
        LightBlueSmall('lightbluetitle');}
    if (color=="darkblue"){document.getElementById('TitleUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="TitleColorRow1"></div>'+
	'<div class="nextLine" id="TitleColorRow2"></div>'+
	'<div class="nextLine" id="TitleColorRow3"></div>'+
	'<div class="nextLine" id="TitleColorRow4"></div>'+
	'<div class="nextLine" id="TitleColorRow5"></div>'+
	'<div class="nextLine" id="TitleColorRow6"></div>'+
	'<div class="nextLine" id="TitleColorRow7"></div></div>';
        DarkBlueSmall('darkbluetitle');}
    if (color=="purple"){document.getElementById('TitleUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="TitleColorRow1"></div>'+
	'<div class="nextLine" id="TitleColorRow2"></div>'+
	'<div class="nextLine" id="TitleColorRow3"></div>'+
	'<div class="nextLine" id="TitleColorRow4"></div>'+
	'<div class="nextLine" id="TitleColorRow5"></div>'+
	'<div class="nextLine" id="TitleColorRow6"></div>'+
	'<div class="nextLine" id="TitleColorRow7"></div></div>';
        PurpleSmall('purpletitle');}
    if (color=="pink"){document.getElementById('TitleUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="TitleColorRow1"></div>'+
	'<div class="nextLine" id="TitleColorRow2"></div>'+
	'<div class="nextLine" id="TitleColorRow3"></div>'+
	'<div class="nextLine" id="TitleColorRow4"></div>'+
	'<div class="nextLine" id="TitleColorRow5"></div>'+
	'<div class="nextLine" id="TitleColorRow6"></div>'+
	'<div class="nextLine" id="TitleColorRow7"></div></div>';
        PinkSmall('pinktitle');}
    if (color=="brown"){document.getElementById('TitleUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="TitleColorRow1"></div>'+
	'<div class="nextLine" id="TitleColorRow2"></div>'+
	'<div class="nextLine" id="TitleColorRow3"></div>'+
	'<div class="nextLine" id="TitleColorRow4"></div>'+
	'<div class="nextLine" id="TitleColorRow5"></div>'+
	'<div class="nextLine" id="TitleColorRow6"></div>'+
	'<div class="nextLine" id="TitleColorRow7"></div></div>';
        BrownSmall('browntitle');}
    if (color=="whiteblack"){document.getElementById('TitleUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="TitleColorRow1"></div>'+
	'<div class="nextLine" id="TitleColorRow2"></div>'+
	'<div class="nextLine" id="TitleColorRow3"></div>'+
	'<div class="nextLine" id="TitleColorRow4"></div>'+
	'<div class="nextLine" id="TitleColorRow5"></div>'+
	'<div class="nextLine" id="TitleColorRow6"></div>'+
	'<div class="nextLine" id="TitleColorRow7"></div></div>';
        WhiteBlackSmall('whiteblacktitle');}
}

function buttontextcolorshades(color) {
    if (color=="buttontextcolor"){document.getElementById('ButtonTextUserSelectedColor').innerHTML=""}
    if (color=="red"){document.getElementById('ButtonTextUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="ButtonTextColorRow1"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow2"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow3"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow4"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow5"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow6"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow7"></div></div>';
        RedSmall('redbuttontext');}
    if (color=="orange"){document.getElementById('ButtonTextUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="ButtonTextColorRow1"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow2"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow3"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow4"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow5"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow6"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow7"></div></div>';
        OrangeSmall('orangebuttontext');}
    if (color=="yellow"){document.getElementById('ButtonTextUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="ButtonTextColorRow1"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow2"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow3"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow4"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow5"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow6"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow7"></div></div>';
        YellowSmall('yellowbuttontext');}
    if (color=="green"){document.getElementById('ButtonTextUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="ButtonTextColorRow1"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow2"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow3"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow4"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow5"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow6"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow7"></div></div>';
        GreenSmall('greenbuttontext');}
    if (color=="lightblue"){document.getElementById('ButtonTextUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="ButtonTextColorRow1"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow2"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow3"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow4"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow5"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow6"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow7"></div></div>';
        LightBlueSmall('lightbluebuttontext');}
    if (color=="darkblue"){document.getElementById('ButtonTextUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="ButtonTextColorRow1"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow2"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow3"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow4"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow5"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow6"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow7"></div></div>';
        DarkBlueSmall('darkbluebuttontext');}
    if (color=="purple"){document.getElementById('ButtonTextUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="ButtonTextColorRow1"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow2"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow3"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow4"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow5"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow6"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow7"></div></div>';
        PurpleSmall('purplebuttontext');}
    if (color=="pink"){document.getElementById('ButtonTextUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="ButtonTextColorRow1"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow2"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow3"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow4"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow5"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow6"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow7"></div></div>';
        PinkSmall('pinkbuttontext');}
    if (color=="brown"){document.getElementById('ButtonTextUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="ButtonTextColorRow1"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow2"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow3"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow4"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow5"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow6"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow7"></div></div>';
        BrownSmall('brownbuttontext');}
    if (color=="whiteblack"){document.getElementById('ButtonTextUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div class="nextLine" id="ButtonTextColorRow1"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow2"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow3"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow4"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow5"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow6"></div>'+
	'<div class="nextLine" id="ButtonTextColorRow7"></div></div>';
        WhiteBlackSmall('whiteblackbuttontext');}
}

function insidecolorshades(color) {
    if (color=="insidecolor"){document.getElementById('InsideUserSelectedColor').innerHTML=""}
    if (color=="red"){document.getElementById('InsideUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div id="InsideColorRow1"></div>'+
	'<div id="InsideColorRow2"></div>'+
	'<div id="InsideColorRow3"></div>'+
	'<div id="InsideColorRow4"></div>'+
	'<div id="InsideColorRow5"></div>'+
	'<div id="InsideColorRow6"></div>'+
	'<div id="InsideColorRow7"></div></div>';
        RedSmall('redinside');}
    if (color=="orange"){document.getElementById('InsideUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div id="InsideColorRow1"></div>'+
	'<div id="InsideColorRow2"></div>'+
	'<div id="InsideColorRow3"></div>'+
	'<div id="InsideColorRow4"></div>'+
	'<div id="InsideColorRow5"></div>'+
	'<div id="InsideColorRow6"></div>'+
	'<div id="InsideColorRow7"></div></div>';
        OrangeSmall('orangeinside');}
    if (color=="yellow"){document.getElementById('InsideUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div id="InsideColorRow1"></div>'+
	'<div id="InsideColorRow2"></div>'+
	'<div id="InsideColorRow3"></div>'+
	'<div id="InsideColorRow4"></div>'+
	'<div id="InsideColorRow5"></div>'+
	'<div id="InsideColorRow6"></div>'+
	'<div id="InsideColorRow7"></div></div>';
        YellowSmall('yellowinside');}
    if (color=="green"){document.getElementById('InsideUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div id="InsideColorRow1"></div>'+
	'<div id="InsideColorRow2"></div>'+
	'<div id="InsideColorRow3"></div>'+
	'<div id="InsideColorRow4"></div>'+
	'<div id="InsideColorRow5"></div>'+
	'<div id="InsideColorRow6"></div>'+
	'<div id="InsideColorRow7"></div></div>';
        GreenSmall('greeninside');}
    if (color=="lightblue"){document.getElementById('InsideUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div id="InsideColorRow1"></div>'+
	'<div id="InsideColorRow2"></div>'+
	'<div id="InsideColorRow3"></div>'+
	'<div id="InsideColorRow4"></div>'+
	'<div id="InsideColorRow5"></div>'+
	'<div id="InsideColorRow6"></div>'+
	'<div id="InsideColorRow7"></div></div>';
        LightBlueSmall('lightblueinside');}
    if (color=="darkblue"){document.getElementById('InsideUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div id="InsideColorRow1"></div>'+
	'<div id="InsideColorRow2"></div>'+
	'<div id="InsideColorRow3"></div>'+
	'<div id="InsideColorRow4"></div>'+
	'<div id="InsideColorRow5"></div>'+
	'<div id="InsideColorRow6"></div>'+
	'<div id="InsideColorRow7"></div></div>';
        DarkBlueSmall('darkblueinside');}
    if (color=="purple"){document.getElementById('InsideUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div id="InsideColorRow1"></div>'+
	'<div id="InsideColorRow2"></div>'+
	'<div id="InsideColorRow3"></div>'+
	'<div id="InsideColorRow4"></div>'+
	'<div id="InsideColorRow5"></div>'+
	'<div id="InsideColorRow6"></div>'+
	'<div id="InsideColorRow7"></div></div>';
        PurpleSmall('purpleinside');}
    if (color=="pink"){document.getElementById('InsideUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div id="InsideColorRow1"></div>'+
	'<div id="InsideColorRow2"></div>'+
	'<div id="InsideColorRow3"></div>'+
	'<div id="InsideColorRow4"></div>'+
	'<div id="InsideColorRow5"></div>'+
	'<div id="InsideColorRow6"></div>'+
	'<div id="InsideColorRow7"></div></div>';
        PinkSmall('pinkinside');}
    if (color=="brown"){document.getElementById('InsideUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div id="InsideColorRow1"></div>'+
	'<div id="InsideColorRow2"></div>'+
	'<div id="InsideColorRow3"></div>'+
	'<div id="InsideColorRow4"></div>'+
	'<div id="InsideColorRow5"></div>'+
	'<div id="InsideColorRow6"></div>'+
	'<div id="InsideColorRow7"></div></div>';
        BrownSmall('browninside');}
    if (color=="whiteblack"){document.getElementById('InsideUserSelectedColor').innerHTML=
	'<div style="position:absolute">'+
	'<div id="InsideColorRow1"></div>'+
	'<div id="InsideColorRow2"></div>'+
	'<div id="InsideColorRow3"></div>'+
	'<div id="InsideColorRow4"></div>'+
	'<div id="InsideColorRow5"></div>'+
	'<div id="InsideColorRow6"></div>'+
	'<div id="InsideColorRow7"></div></div>';
        WhiteBlackSmall('whiteblackinside');}
}

function show(id){

	if(document.getElementById(id).style.display=="none"){document.getElementById(id).style.display="block";}

	else{document.getElementById(id).style.display="none";}
}

function HideBox(box1,tab1,box2,tab2,box3,tab3,box4,tab4) {
        document.getElementById(box1).style.display="none";
        document.getElementById(tab1).className = "tabBehind";
        document.getElementById(box2).style.display="none";
        document.getElementById(tab2).className = "tabBehind";
        document.getElementById(box3).style.display="none";
        document.getElementById(tab3).className = "tabBehind";
        document.getElementById(box4).style.display="none";
        document.getElementById(tab4).className = "tabBehind";
}

function ShowBox(box,tab) {
        document.getElementById(box).style.display="block";
        document.getElementById(tab).className = "tabFront";
}

function Red(type) {

        var Row1      = ['#FFEEEE','#FF7373','#FFE6E6','#FF3333','#F7E6E6','#C13333','#FAE6E6','#D63333','#F5E6E6','#AD3333','#F2E6E6','#993333'];
        var Row2      = ['#FFDCDC','#FF6262','#FFCCCC','#FF1919','#F0CCCC','#BA1919','#F5CCCC','#D11919','#EBCCCC','#A31919','#E6CCCC','#8D1919'];
        var Row3      = ['#FFCACA','#E64848','#FFB2B2','#E60000','#E8B2B2','#A00000','#F0B2B2','#B80000','#E0B2B2','#8A0000','#D9B2B2','#730000'];
        var Row4      = ['#FFB9B9','#B23838','#FF9999','#B20000','#E09999','#7D0000','#EB9999','#8F0000','#D69999','#6B0000','#CC9999','#5A0000'];
        var Row5      = ['#FFA8A8','#802828','#FF8080','#800000','#D88080','#590000','#E68080','#660000','#CC8080','#4C0000','#C08080','#400000'];
        var Row6      = ['#FF9696','#4C1818','#FF6666','#4C0000','#D16666','#350000','#E06666','#3D0000','#C26666','#2E0000','#B36666','#260000'];
        var Row7      = ['#FF8484','#1A0808','#FF4D4D','#1A0000','#C94D4D','#120000','#DB4D4D','#140000','#B84D4D','#0F0000','#A64D4D','#0D0000'];
	
        if (type=="redframe") {Frame(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="redbutton") {Button(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="redbackground") {Background(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function Orange(type) {

        var Row1      = ['#FFF5F0','#FFAD85','#FFF5EB','#FFAD5C','#FFF5E6','#FFAD33','#FFF0E6','#FF8533','#FFEBE6','#FF5C33','#FAEBE6','#D65C33'];
        var Row2      = ['#FFEBE0','#FFA375','#FFEBD6','#FFA347','#FFEBCC','#FFA319','#FFE0CC','#FF7519','#FFD6CC','#FF4719','#F5D6CC','#D14719'];
        var Row3      = ['#FFE0D1','#E68A5C','#FFE0C2','#E68A2E','#FFE0B2','#E68A00','#FFD1B2','#E65C00','#FFC2B2','#E62E00','#F0C2B2','#B82E00'];
        var Row4      = ['#FFD6C2','#B26B47','#FFD6AD','#B26B24','#FFD699','#B26B00','#FFC299','#B24700','#FFAD99','#B22400','#EBAD99','#8F2400'];
        var Row5      = ['#FFCCB2','#804C33','#FFCC99','#804C1A','#FFCC80','#804C00','#FFB280','#803300','#FF9980','#801A00','#E69980','#661A00'];
        var Row6      = ['#FFC2A3','#4C2E1F','#FFC285','#4C2E0F','#FFC266','#4C2E00','#FFA366','#4C1F00','#FF8566','#4C0F00','#E08566','#3D0F00'];
        var Row7      = ['#FFB894','#1A0F0A','#FFB870','#1A0F05','#FFB84D','#1A0F00','#FF944D','#1A0A00','#FF704D','#1A0500','#DB704D','#140500'];
	
        if (type=="orangeframe") {Frame(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="orangebutton") {Button(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="orangebackground") {Background(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function Yellow(type) {

        var Row1      = ['#FFFFF5','#FFFFAD','#FFFFF0','#FFFF85','#FFFFE6','#FFFF33','#FFFAE6','#FFD633','#FAFFF0','#D6FF85','#FAFFEB','#D6FF5C'];
        var Row2      = ['#FFFFEB','#FFFFA3','#FFFFE0','#FFFF75','#FFFFCC','#FFFF19','#FFF5CC','#FFD119','#F5FFE0','#D1FF75','#F5FFD6','#D1FF47'];
        var Row3      = ['#FFFFE0','#E6E68A','#FFFFD1','#E6E65C','#FFFFB2','#E6E600','#FFF0B2','#E6B800','#F0FFD1','#B8E65C','#F0FFC2','#B8E62E'];
        var Row4      = ['#FFFFD6','#B2B26B','#FFFFC2','#B2B247','#FFFF99','#B2B200','#FFEB99','#B28F00','#EBFFC2','#8FB247','#EBFFAD','#8FB224'];
        var Row5      = ['#FFFFCC','#80804C','#FFFFB2','#808033','#FFFF80','#808000','#FFE680','#806600','#E6FFB2','#668033','#E6FF99','#66801A'];
        var Row6      = ['#FFFFC2','#4C4C2E','#FFFFA3','#4C4C1F','#FFFF66','#4C4C00','#FFE066','#4C3D00','#E0FFA3','#3D4C1F','#E0FF85','#3D4C0F'];
        var Row7      = ['#FFFFB8','#1A1A0F','#FFFF94','#1A1A0A','#FFFF4D','#1A1A00','#FFDB4D','#1A1400','#DBFF94','#141A0A','#DBFF70','#141A05'];
	
        if (type=="yellowframe") {Frame(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="yellowbutton") {Button(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="yellowbackground") {Background(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function Green(type) {

        var Row1      = ['#F0FFF0','#85FF85','#EBFAEB','#5CD65C','#E6F5E6','#33AD33','#E6F5EB','#33AD5C','#E6F0E6','#338533','#E6EBE6','#335C33'];
        var Row2      = ['#E0FFE0','#75FF75','#D6F5D6','#47D147','#CCEBCC','#19A319','#CCEBD6','#19A347','#CCE0CC','#197519','#CCD6CC','#194719'];
        var Row3      = ['#D1FFD1','#5CE65C','#C2F0C2','#2EB82E','#B2E0B2','#008A00','#B2E0C2','#008A2E','#B2D1B2','#005C00','#B2C2B2','#002E00'];
        var Row4      = ['#C2FFC2','#47B247','#ADEBAD','#248F24','#99D699','#006B00','#99D6AD','#006B24','#99C299','#004700','#99AD99','#002400'];
        var Row5      = ['#B2FFB2','#338033','#99E699','#1A661A','#80CC80','#004C00','#80CC99','#004C1A','#80B280','#003300','#809980','#001A00'];
        var Row6      = ['#A3FFA3','#1F4C1F','#85E085','#0F3D0F','#66C266','#002E00','#66C285','#002E0F','#66A366','#001F00','#668566','#000F00'];
        var Row7      = ['#94FF94','#0A1A0A','#70DB70','#051405','#4DB84D','#000F00','#4DB870','#000F05','#4D944D','#000A00','#4D704D','#000500'];
	
        if (type=="greenframe") {Frame(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="greenbutton") {Button(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="greenbackground") {Background(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function LightBlue(type) {

        var Row1      = ['#E6F5F5','#33ADAD','#EBFAFA','#5CD6D6','#E6F5FF','#33ADFF','#E6F0FF','#3385FF','#EBF0FF','#5C85FF','#EBEBFA','#5C5CD6'];
        var Row2      = ['#CCEBEB','#19A3A3','#D6F5F5','#47D1D1','#CCEBFF','#19A3FF','#CCE0FF','#1975FF','#D6E0FF','#4775FF','#D6D6F5','#4747D1'];
        var Row3      = ['#B2E0E0','#008A8A','#C2F0F0','#2EB8B8','#B2E0FF','#008AE6','#B2D1FF','#005CE6','#C2D1FF','#2E5CE6','#C2C2F0','#2E2EB8'];
        var Row4      = ['#99D6D6','#006B6B','#ADEBEB','#248F8F','#99D6FF','#006BB2','#99C2FF','#0047B2','#ADC2FF','#2447B2','#ADADEB','#24248F'];
        var Row5      = ['#80CCCC','#004C4C','#99E6E6','#1A6666','#80CCFF','#004C80','#80B2FF','#003380','#99B2FF','#1A3380','#9999E6','#1A1A66'];
        var Row6      = ['#66C2C2','#002E2E','#85E0E0','#0F3D3D','#66C2FF','#002E4C','#66A3FF','#001F4C','#85A3FF','#0F1F4C','#8585E0','#0F0F3D'];
        var Row7      = ['#4DB8B8','#000F0F','#70DBDB','#051414','#4DB8FF','#000F1A','#4D94FF','#000A1A','#7094FF','#050A1A','#7070DB','#050514'];
	
        if (type=="lightblueframe") {Frame(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="lightbluebutton") {Button(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="lightbluebackground") {Background(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function DarkBlue(type) {

        var Row1      = ['#E6EBF0','#335C85','#E6F0F0','#338585','#E6EBF5','#335CAD','#E6E6F5','#3333AD','#E6E6FA','#3333D6','#E6E6F0','#333385'];
        var Row2      = ['#CCD6E0','#194775','#CCE0E0','#197575','#CCD6EB','#1947A3','#CCCCEB','#1919A3','#CCCCF5','#1919D1','#CCCCE0','#191975'];
        var Row3      = ['#B2C2D1','#002E5C','#B2D1D1','#005C5C','#B2C2E0','#002E8A','#B2B2E0','#00008A','#B2B2F0','#0000B8','#B2B2D1','#00005C'];
        var Row4      = ['#99ADC2','#002447','#99C2C2','#004747','#99ADD6','#00246B','#9999D6','#00006B','#9999EB','#00008F','#9999C2','#000047'];
        var Row5      = ['#8099B2','#001A33','#80B2B2','#003333','#8099CC','#001A4C','#8080CC','#00004C','#8080E6','#000066','#8080B2','#000033'];
        var Row6      = ['#6685A3','#000F1F','#66A3A3','#001F1F','#6685C2','#000F2E','#6666C2','#00002E','#6666E0','#00003D','#6666A3','#00001F'];
        var Row7      = ['#4D7094','#00050A','#4D9494','#000A0A','#4D70B8','#00050F','#4D4DB8','#00000F','#4D4DDB','#000014','#4D4D94','#00000A'];
	
        if (type=="darkblueframe") {Frame(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="darkbluebutton") {Button(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="darkbluebackground") {Background(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function Purple(type) {

        var Row1      = ['#FAF5FF','#D6ADFF','#FAF0FF','#D685FF','#FAEBFF','#D65CFF','#F5E6FA','#AD33D6','#F0E6F0','#853385','#F0E6FA','#8533D6'];
        var Row2      = ['#F5EBFF','#D1A3FF','#F5E0FF','#D175FF','#F5D6FF','#D147FF','#EBCCF5','#A319D1','#E0CCE0','#751975','#E0CCF5','#7519D1'];
        var Row3      = ['#F0E0FF','#B88AE6','#F0D1FF','#B85CE6','#F0C2FF','#B82EE6','#E0B2F0','#8A00B8','#D1B2D1','#5C005C','#D1B2F0','#5C00B8'];
        var Row4      = ['#EBD6FF','#8F6BB2','#EBC2FF','#8F47B2','#EBADFF','#8F24B2','#D699EB','#6B008F','#C299C2','#470047','#C299EB','#47008F'];
        var Row5      = ['#E6CCFF','#664C80','#E6B2FF','#663380','#E699FF','#661A80','#CC80E6','#4C0066','#B280B2','#330033','#B280E6','#330066'];
        var Row6      = ['#E0C2FF','#3D2E4C','#E0A3FF','#3D1F4C','#E085FF','#3D0F4C','#C266E0','#2E003D','#A366A3','#1F001F','#A366E0','#1F003D'];
        var Row7      = ['#DBB8FF','#140F1A','#DB94FF','#140A1A','#DB70FF','#14051A','#B84DDB','#0F0014','#944D94','#0A000A','#944DDB','#0A0014'];
	
        if (type=="purpleframe") {Frame(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="purplebutton") {Button(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="purplebackground") {Background(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function Pink(type) {

        var Row1      = ['#FFFAF5','#FFD6AD','#FFF5F5','#FFADAD','#FFF0F5','#FF85AD','#FFEBF5','#FF5CAD','#FFE6F0','#FF3385','#FAE6F0','#D63385'];
        var Row2      = ['#FFF5EB','#FFD1A3','#FFEBEB','#FFA3A3','#FFE0EB','#FF75A3','#FFD6EB','#FF47A3','#FFCCE0','#FF1975','#F5CCE0','#D11975'];
        var Row3      = ['#FFF0E0','#E6B88A','#FFE0E0','#E68A8A','#FFD1E0','#E65C8A','#FFC2E0','#E62E8A','#FFB2D1','#E6005C','#F0B2D1','#B8005C'];
        var Row4      = ['#FFEBD6','#B28F6B','#FFD6D6','#B26B6B','#FFC2D6','#B2476B','#FFADD6','#B2246B','#FF99C2','#B20047','#EB99C2','#8F0047'];
        var Row5      = ['#FFE6CC','#80664C','#FFCCCC','#804C4C','#FFB2CC','#80334C','#FF99CC','#801A4C','#FF80B2','#800033','#E680B2','#660033'];
        var Row6      = ['#FFE0C2','#4C3D2E','#FFC2C2','#4C2E2E','#FFA3C2','#4C1F2E','#FF85C2','#4C0F2E','#FF66A3','#4C001F','#E066A3','#3D001F'];
        var Row7      = ['#FFDBB8','#1A140F','#FFB8B8','#1A0F0F','#FF94B8','#1A0A0F','#FF70B8','#1A050F','#FF4D94','#1A000A','#DB4D94','#14000A'];
	
        if (type=="pinkframe") {Frame(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="pinkbutton") {Button(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="pinkbackground") {Background(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function Brown(type) {

        var Row1      = ['#F5F0EB','#AD855C','#F0EBE6','#855C33','#F5EBE6','#AD5C33','#FAF0E6','#D68533','#FBF3EB','#DE9D5C','#FCF8F3','#EBC6A1'];
        var Row2      = ['#EBE0D6','#A37547','#E0D6CC','#754719','#EBD6CC','#A34719','#F5E0CC','#D17519','#F7E7D6','#DA9147','#FAF1E8','#E8BF96'];
        var Row3      = ['#E0D1C2','#8A5C2E','#D1C2B2','#5C2E00','#E0C2B2','#8A2E00','#F0D1B2','#B85C00','#F3DAC2','#C1782E','#F8EADC','#CFA67C'];
        var Row4      = ['#D6C2AD','#6B4724','#C2AD99','#472400','#D6AD99','#6B2400','#EBC299','#8F4700','#EFCEAD','#965D24','#F5E3D0','#A18161'];
        var Row5      = ['#CCB299','#4C331A','#B29980','#331A00','#CC9980','#4C1A00','#E6B280','#663300','#EAC299','#6B421A','#F2DCC4','#735C45'];
        var Row6      = ['#C2A385','#2E1F0F','#A38566','#1F0F00','#C28566','#2E0F00','#E0A366','#3D1F00','#E6B685','#40280F','#F0D4B9','#453729'];
        var Row7      = ['#B89470','#0F0A05','#94704D','#0A0500','#B8704D','#0F0500','#DB944D','#140A00','#E2AA70','#150D05','#EECDAD','#17120E'];
	
        if (type=="brownframe") {Frame(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="brownbutton") {Button(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="brownbackground") {Background(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function WhiteBlack(type) {

        var Row1      = ['#FFFFFF','#D6D6FF','#FFFFFF','#474747','#FFFFFF','#EDEDED','#FCFCFC','#E5E5E5','#F5F5F5','#B0B0B0','#EAEAEA','#595959'];
        var Row2      = ['#FAFAFF','#CCCCFF','#E8E8E8','#191919','#FDFDFD','#E8E8E8','#F9F9F9','#E2E2E2','#EBEBEB','#A6A6A6','#D5D5D5','#444444'];
        var Row3      = ['#F5F5FF','#A3A3CC','#D1D1D1','#141414','#FAFAFA','#BABABA','#F5F5F5','#C9C9C9','#E1E1E1','#8C8C8C','#C1C1C1','#2A2A2A'];
        var Row4      = ['#F0F0FF','#7A7A99','#BABABA','#0F0F0F','#F8F8F8','#8B8B8B','#F2F2F2','#9C9C9C','#D7D7D7','#6D6D6D','#ACACAC','#212121'];
        var Row5      = ['#EBEBFF','#525266','#A3A3A3','#0A0A0A','#F6F6F6','#5D5D5D','#EFEFEF','#707070','#CECECE','#4E4E4E','#979797','#181818'];
        var Row6      = ['#E6E6FF','#292933','#8C8C8C','#050505','#F4F4F4','#2E2E2E','#ECECEC','#434343','#C4C4C4','#2F2F2F','#828282','#0E0E0E'];
        var Row7      = ['#E0E0FF','#000000','#757575','#000000','#F1F1F1','#000000','#E9E9E9','#161616','#BABABA','#101010','#6D6D6D','#050505'];
	
        if (type=="whiteblackframe") {Frame(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="whiteblackbutton") {Button(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
        if (type=="whiteblackbackground") {Background(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function RedSmall(type) {

        var Row1      = ['#FFE6E6','#FAE6E6','#F5E6E6'];
        var Row2      = ['#FF9999','#EB9999','#D69999'];
        var Row3      = ['#FF4D4D','#DB4D4D','#B84D4D'];
        var Row4      = ['#FF3333','#D63333','#AD3333'];
        var Row5      = ['#E60000','#B80000','#8A0000'];
        var Row6      = ['#990000','#7A0000','#5C0000'];
        var Row7      = ['#3D0000','#260000','#140000'];

	if (type=="redtitle") {Title(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="redbuttontext") {ButtonText(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="redinside") {Inside(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function OrangeSmall(type) {

        var Row1      = ['#FFF5EB','#FFF0E6','#FFEBE6'];
        var Row2      = ['#FFD6AD','#FFC299','#FFAD99'];
        var Row3      = ['#FFB870','#FF944D','#FF704D'];
        var Row4      = ['#FFAD5C','#FF8533','#FF5C33'];
        var Row5      = ['#E68A2E','#E65C00','#E62E00'];
        var Row6      = ['#995C1F','#993D00','#991F00'];
        var Row7      = ['#4C1F00','#3D0F00','#1A0A00'];

	if (type=="orangetitle") {Title(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="orangebuttontext") {ButtonText(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="orangeinside") {Inside(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function YellowSmall(type) {

        var Row1      = ['#FFFFF5','#FFFFF0','#FFFFE6'];
        var Row2      = ['#FFFFD6','#FFFFC2','#FFFF99'];
        var Row3      = ['#FFFFB8','#FFFF94','#FFFF4D'];
        var Row4      = ['#FFFFAD','#FFFF85','#FFFF33'];
        var Row5      = ['#E6E68A','#E6E65C','#E6E600'];
        var Row6      = ['#99995C','#99993D','#999900'];
        var Row7      = ['#4C4C1F','#4C3D00','#1A1A0A'];

	if (type=="yellowtitle") {Title(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="yellowbuttontext") {ButtonText(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="yellowinside") {Inside(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function GreenSmall(type) {

        var Row1      = ['#EBF5EB','#E6F0E6','#E6EBE6'];
        var Row2      = ['#ADD6AD','#99C299','#99AD99'];
        var Row3      = ['#70B870','#4D944D','#4D704D'];
        var Row4      = ['#5CAD5C','#338533','#335C33'];
        var Row5      = ['#2E8A2E','#005C00','#002E00'];
        var Row6      = ['#1F5C1F','#003D00','#001F00'];
        var Row7      = ['#050F05','#000A00','#000500'];

	if (type=="greentitle") {Title(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="greenbuttontext") {ButtonText(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="greeninside") {Inside(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function LightBlueSmall(type) {

        var Row1      = ['#F0FAFF','#EBF5FF','#E6F0FF'];
        var Row2      = ['#C2EBFF','#ADD6FF','#99C2FF'];
        var Row3      = ['#94DBFF','#70B8FF','#4D94FF'];
        var Row4      = ['#85D6FF','#5CADFF','#3385FF'];
        var Row5      = ['#5CB8E6','#2E8AE6','#005CE6'];
        var Row6      = ['#3D7A99','#1F5C99','#003D99'];
        var Row7      = ['#0A141A','#050F1A','#000A1A'];

	if (type=="lightbluetitle") {Title(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="lightbluebuttontext") {ButtonText(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="lightblueinside") {Inside(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function DarkBlueSmall(type) {

        var Row1      = ['#E6EBFA','#E6E6FF','#E6E6F0'];
        var Row2      = ['#99ADEB','#9999FF','#9999C2'];
        var Row3      = ['#4D70DB','#4D4DFF','#4D4D94'];
        var Row4      = ['#335CD6','#3333FF','#333385'];
        var Row5      = ['#002EB8','#0000E6','#00005C'];
        var Row6      = ['#001F7A','#000099','#00003D'];
        var Row7      = ['#000514','#00001A','#00000A'];

	if (type=="darkbluetitle") {Title(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="darkbluebuttontext") {ButtonText(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="darkblueinside") {Inside(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function PurpleSmall(type) {

        var Row1      = ['#FAF5FF','#FAF0FF','#F0E6F0'];
        var Row2      = ['#EBD6FF','#EBC2FF','#C299C2'];
        var Row3      = ['#DBB8FF','#DB94FF','#944D94'];
        var Row4      = ['#D6ADFF','#D685FF','#853385'];
        var Row5      = ['#B88AE6','#B85CE6','#5C005C'];
        var Row6      = ['#7A5C99','#7A3D99','#3D003D'];
        var Row7      = ['#140F1A','#140A1A','#0A000A'];

	if (type=="purpletitle") {Title(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="purplebuttontext") {ButtonText(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="purpleinside") {Inside(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function PinkSmall(type) {

        var Row1      = ['#FFFAFA','#FFF5FA','#FFE6F0'];
        var Row2      = ['#FFEBEB','#FFD6EB','#FF99C2'];
        var Row3      = ['#FFDBDB','#FFB8DB','#FF4D94'];
        var Row4      = ['#FFD6D6','#FFADD6','#FF3385'];
        var Row5      = ['#E6B8B8','#E68AB8','#E6005C'];
        var Row6      = ['#997A7A','#995C7A','#99003D'];
        var Row7      = ['#1A1414','#1A0F14','#1A000A'];

	if (type=="pinktitle") {Title(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="pinkbuttontext") {ButtonText(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="pinkinside") {Inside(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function BrownSmall(type) {

        var Row1      = ['#F5F0EB','#F0EDE9','#F0EBE6'];
        var Row2      = ['#D6C2AD','#C4B5A7','#C2AD99'];
        var Row3      = ['#B89470','#977E66','#94704D'];
        var Row4      = ['#AD855C','#896C50','#855C33'];
        var Row5      = ['#8A5C2E','#604020','#5C2E00'];
        var Row6      = ['#5C3D1F','#402B16','#3D1F00'];
        var Row7      = ['#0F0A05','#0B0704','#0A0500'];

	if (type=="browntitle") {Title(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="brownbuttontext") {ButtonText(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="browninside") {Inside(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function WhiteBlackSmall(type) {

        var Row1      = ['#FFFFFF','#F6F6F6','#EEEEEE'];
        var Row2      = ['#F5F5F5','#D9D9D9','#B9B9B9'];
        var Row3      = ['#EEEEEE','#BDBDBD','#848484'];
        var Row4      = ['#EBEBEB','#B4B4B4','#737373'];
        var Row5      = ['#CFCFCF','#919191','#484848'];
        var Row6      = ['#8A8A8A','#616161','#303030'];
        var Row7      = ['#171717','#101010','#000000'];

	if (type=="whiteblacktitle") {Title(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="whiteblackbuttontext") {ButtonText(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
	if (type=="whiteblackinside") {Inside(Row1,Row2,Row3,Row4,Row5,Row6,Row7)}
}

function PresetColors() {

        var FrameColorRow1      = ['#E06666','#F8866D','#FFFF66','#668566','#85C2A3','#6685E0','#A366A3','#FFA3C2','#C2A385','#F5F5F5','#B3B3B3','#474747'];
        var ButtonColorRow1     = ['#F5CCCC','#FDD7CE','#FFFFCC','#CCD6CC','#D6EBE0','#CCD6F5','#E0CCE0','#FFE0EB','#EBE0D6','#FFFFFF','#E6E6E6','#A3A3A3'];

        var FrameColorRow2      = ['#D63333','#F55D3C','#FFFF33','#335C33','#5CAD85','#335CD6','#853385','#FF85AD','#AD855C','#F0F0F0','#999999','#191919'];
        var ButtonColorRow2     = ['#EB9999','#FAAE9D','#FFFF99','#99AD99','#ADD6C2','#99ADEB','#C299C2','#FFC2D6','#D6C2AD','#FAFAFA','#CCCCCC','#757575'];

        var FrameColorRow3      = ['#CC0000','#F3350B','#FFFF00','#003300','#339966','#0033CC','#660066','#FF6699','#996633','#EBEBEB','#808080','#141414'];
        var ButtonColorRow3     = ['#E06666','#F8866D','#FFFF66','#668566','#85C2A3','#6685E0','#A366A3','#FFA3C2','#C2A385','#F5F5F5','#B3B3B3','#474747'];

        var FrameColorRow4      = ['#A30000','#C22A09','#CCCC00','#002900','#297A52','#0029A3','#520052','#CC527A','#7A5229','#E6E6E6','#666666','#0F0F0F'];
        var ButtonColorRow4     = ['#D63333','#F55D3C','#FFFF33','#335C33','#5CAD85','#335CD6','#853385','#FF85AD','#AD855C','#F0F0F0','#999999','#191919'];

        var FrameColorRow5      = ['#7A0000','#922007','#999900','#001F00','#1F5C3D','#001F7A','#3D003D','#993D5C','#5C3D1F','#B8B8B8','#4D4D4D','#0A0A0A'];
        var ButtonColorRow5     = ['#CC0000','#F3350B','#FFFF00','#003300','#339966','#0033CC','#660066','#FF6699','#996633','#EBEBEB','#808080','#141414'];

        var FrameColorRow6      = ['#520000','#611504','#666600','#001400','#143D29','#001452','#290029','#66293D','#3D2914','#8A8A8A','#333333','#050505'];
        var ButtonColorRow6     = ['#A30000','#C22A09','#CCCC00','#002900','#297A52','#0029A3','#520052','#CC527A','#7A5229','#E6E6E6','#666666','#0F0F0F'];

        var FrameColorRow7      = ['#290000','#310B02','#333300','#000A00','#0A1F14','#000A29','#140014','#33141F','#1F140A','#5C5C5C','#1A1A1A','#000000'];
        var ButtonColorRow7     = ['#7A0000','#922007','#999900','#001F00','#1F5C3D','#001F7A','#3D003D','#993D5C','#5C3D1F','#B8B8B8','#4D4D4D','#0A0A0A'];

var Row1 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row1 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoice(\'' + FrameColorRow1[i] + '\',\'' + ButtonColorRow1[i] + '\')" style = "background-color:' + FrameColorRow1[i] + '"></div></div>'} 
        document.getElementById('PresetColorRow1').innerHTML=Row1;

var Row2 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row2 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoice(\'' + FrameColorRow2[i] + '\',\'' + ButtonColorRow2[i] + '\')" style = "background-color:' + FrameColorRow2[i] + '"></div></div>'} 
        document.getElementById('PresetColorRow2').innerHTML=Row2;

var Row3 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row3 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoice(\'' + FrameColorRow3[i] + '\',\'' + ButtonColorRow3[i] + '\')" style = "background-color:' + FrameColorRow3[i] + '"></div></div>'} 
        document.getElementById('PresetColorRow3').innerHTML=Row3;

var Row4 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row4 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoice(\'' + FrameColorRow4[i] + '\',\'' + ButtonColorRow4[i] + '\')" style = "background-color:' + FrameColorRow4[i] + '"></div></div>'} 
        document.getElementById('PresetColorRow4').innerHTML=Row4;

var Row5 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row5 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoice(\'' + FrameColorRow5[i] + '\',\'' + ButtonColorRow5[i] + '\')" style = "background-color:' + FrameColorRow5[i] + '"></div></div>'} 
        document.getElementById('PresetColorRow5').innerHTML=Row5;

var Row6 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row6 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoice(\'' + FrameColorRow6[i] + '\',\'' + ButtonColorRow6[i] + '\')" style = "background-color:' + FrameColorRow6[i] + '"></div></div>'} 
        document.getElementById('PresetColorRow6').innerHTML=Row6;

var Row7 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row7 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoice(\'' + FrameColorRow7[i] + '\',\'' + ButtonColorRow7[i] + '\')" style = "background-color:' + FrameColorRow7[i] + '"></div></div>'} 
        document.getElementById('PresetColorRow7').innerHTML=Row7;

}

function Frame(R1,R2,R3,R4,R5,R6,R7) {

Row1Color = R1; Row2Color = R2; Row3Color = R3; Row4Color = R4; Row5Color = R5; Row6Color = R6; Row7Color = R7;

var Row1 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row1 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceFrame(\'' + Row1Color[i] + '\')" style = "background-color:' + Row1Color[i] + '"></div></div>'} 
        document.getElementById('FrameColorRow1').innerHTML=Row1;

var Row2 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row2 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceFrame(\'' + Row2Color[i] + '\')" style = "background-color:' + Row2Color[i] + '"></div></div>'} 
        document.getElementById('FrameColorRow2').innerHTML=Row2;

var Row3 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row3 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceFrame(\'' + Row3Color[i] + '\')" style = "background-color:' + Row3Color[i] + '"></div></div>'} 
        document.getElementById('FrameColorRow3').innerHTML=Row3;

var Row4 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row4 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceFrame(\'' + Row4Color[i] + '\')" style = "background-color:' + Row4Color[i] + '"></div></div>'} 
        document.getElementById('FrameColorRow4').innerHTML=Row4;

var Row5 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row5 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceFrame(\'' + Row5Color[i] + '\')" style = "background-color:' + Row5Color[i] + '"></div></div>'} 
        document.getElementById('FrameColorRow5').innerHTML=Row5;

var Row6 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row6 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceFrame(\'' + Row6Color[i] + '\')" style = "background-color:' + Row6Color[i] + '"></div></div>'} 
        document.getElementById('FrameColorRow6').innerHTML=Row6;

var Row7 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row7 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceFrame(\'' + Row7Color[i] + '\')" style = "background-color:' + Row7Color[i] + '"></div></div>'} 
        document.getElementById('FrameColorRow7').innerHTML=Row7;

}

function Button(R1,R2,R3,R4,R5,R6,R7) {

Row1Color = R1; Row2Color = R2; Row3Color = R3; Row4Color = R4; Row5Color = R5; Row6Color = R6; Row7Color = R7;

var Row1 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row1 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceButton(\'' + Row1Color[i] + '\')" style = "background-color:' + Row1Color[i] + '"></div></div>'} 
        document.getElementById('ButtonColorRow1').innerHTML=Row1;

var Row2 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row2 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceButton(\'' + Row2Color[i] + '\')" style = "background-color:' + Row2Color[i] + '"></div></div>'} 
        document.getElementById('ButtonColorRow2').innerHTML=Row2;

var Row3 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row3 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceButton(\'' + Row3Color[i] + '\')" style = "background-color:' + Row3Color[i] + '"></div></div>'} 
        document.getElementById('ButtonColorRow3').innerHTML=Row3;

var Row4 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row4 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceButton(\'' + Row4Color[i] + '\')" style = "background-color:' + Row4Color[i] + '"></div></div>'} 
        document.getElementById('ButtonColorRow4').innerHTML=Row4;

var Row5 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row5 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceButton(\'' + Row5Color[i] + '\')" style = "background-color:' + Row5Color[i] + '"></div></div>'} 
        document.getElementById('ButtonColorRow5').innerHTML=Row5;

var Row6 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row6 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceButton(\'' + Row6Color[i] + '\')" style = "background-color:' + Row6Color[i] + '"></div></div>'} 
        document.getElementById('ButtonColorRow6').innerHTML=Row6;

var Row7 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row7 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceButton(\'' + Row7Color[i] + '\')" style = "background-color:' + Row7Color[i] + '"></div></div>'} 
        document.getElementById('ButtonColorRow7').innerHTML=Row7;

}

function Background(R1,R2,R3,R4,R5,R6,R7) {

Row1Color = R1; Row2Color = R2; Row3Color = R3; Row4Color = R4; Row5Color = R5; Row6Color = R6; Row7Color = R7;

var Row1 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row1 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceBackground(\'' + Row1Color[i] + '\')" style = "background-color:' + Row1Color[i] + '"></div></div>'} 
        document.getElementById('BackgroundColorRow1').innerHTML=Row1;

var Row2 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row2 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceBackground(\'' + Row2Color[i] + '\')" style = "background-color:' + Row2Color[i] + '"></div></div>'} 
        document.getElementById('BackgroundColorRow2').innerHTML=Row2;

var Row3 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row3 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceBackground(\'' + Row3Color[i] + '\')" style = "background-color:' + Row3Color[i] + '"></div></div>'} 
        document.getElementById('BackgroundColorRow3').innerHTML=Row3;

var Row4 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row4 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceBackground(\'' + Row4Color[i] + '\')" style = "background-color:' + Row4Color[i] + '"></div></div>'} 
        document.getElementById('BackgroundColorRow4').innerHTML=Row4;

var Row5 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row5 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceBackground(\'' + Row5Color[i] + '\')" style = "background-color:' + Row5Color[i] + '"></div></div>'} 
        document.getElementById('BackgroundColorRow5').innerHTML=Row5;

var Row6 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row6 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceBackground(\'' + Row6Color[i] + '\')" style = "background-color:' + Row6Color[i] + '"></div></div>'} 
        document.getElementById('BackgroundColorRow6').innerHTML=Row6;

var Row7 = new Array(); 
    for (var i = 0; i < 12; i++) {
    
    Row7 += '<div class="colorRectangleBlock">' + '<div class = "square" onclick = "ColorChoiceBackground(\'' + Row7Color[i] + '\')" style = "background-color:' + Row7Color[i] + '"></div></div>'} 
        document.getElementById('BackgroundColorRow7').innerHTML=Row7;

}

function Title(R1,R2,R3,R4,R5,R6,R7) {

Row1Color = R1; Row2Color = R2; Row3Color = R3; Row4Color = R4; Row5Color = R5; Row6Color = R6; Row7Color = R7;

var TitleRow1 = new Array(); 
    for (var i = 0; i < 3; i++) {

    TitleRow1 += '<div class="colorRectangleBlockTitle">' + '<div class = "square" onclick = "ColorChoiceTitle(\'' + Row1Color[i] + '\')" style = "background-color:' + Row1Color[i] + '"></div></div>'} 
        document.getElementById('TitleColorRow1').innerHTML=TitleRow1;

var TitleRow2 = new Array(); 
    for (var i = 0; i < 3; i++) {

    TitleRow2 += '<div class="colorRectangleBlockTitle">' + '<div class = "square" onclick = "ColorChoiceTitle(\'' + Row2Color[i] + '\')" style = "background-color:' + Row2Color[i] + '"></div></div>'} 
        document.getElementById('TitleColorRow2').innerHTML=TitleRow2;

var TitleRow3 = new Array(); 
    for (var i = 0; i < 3; i++) {

    TitleRow3 += '<div class="colorRectangleBlockTitle">' + '<div class = "square" onclick = "ColorChoiceTitle(\'' + Row3Color[i] + '\')" style = "background-color:' + Row3Color[i] + '"></div></div>'} 
        document.getElementById('TitleColorRow3').innerHTML=TitleRow3;

var TitleRow4 = new Array(); 
    for (var i = 0; i < 3; i++) {

    TitleRow4 += '<div class="colorRectangleBlockTitle">' + '<div class = "square" onclick = "ColorChoiceTitle(\'' + Row4Color[i] + '\')" style = "background-color:' + Row4Color[i] + '"></div></div>'} 
        document.getElementById('TitleColorRow4').innerHTML=TitleRow4;

var TitleRow5 = new Array(); 
    for (var i = 0; i < 3; i++) {

    TitleRow5 += '<div class="colorRectangleBlockTitle">' + '<div class = "square" onclick = "ColorChoiceTitle(\'' + Row5Color[i] + '\')" style = "background-color:' + Row5Color[i] + '"></div></div>'} 
        document.getElementById('TitleColorRow5').innerHTML=TitleRow5;

var TitleRow6 = new Array(); 
    for (var i = 0; i < 3; i++) {

    TitleRow6 += '<div class="colorRectangleBlockTitle">' + '<div class = "square" onclick = "ColorChoiceTitle(\'' + Row6Color[i] + '\')" style = "background-color:' + Row6Color[i] + '"></div></div>'} 
        document.getElementById('TitleColorRow6').innerHTML=TitleRow6;

var TitleRow7 = new Array(); 
    for (var i = 0; i < 3; i++) {

    TitleRow7 += '<div class="colorRectangleBlockTitle">' + '<div class = "square" onclick = "ColorChoiceTitle(\'' + Row7Color[i] + '\')" style = "background-color:' + Row7Color[i] + '"></div></div>'} 
        document.getElementById('TitleColorRow7').innerHTML=TitleRow7;
}

function ButtonText(R1,R2,R3,R4,R5,R6,R7) {

Row1Color = R1; Row2Color = R2; Row3Color = R3; Row4Color = R4; Row5Color = R5; Row6Color = R6; Row7Color = R7;

var ButtonTextRow1 = new Array(); 
    for (var i = 0; i < 3; i++) {

    ButtonTextRow1 += '<div class="colorRectangleBlockButtonText">' + '<div class = "square" onclick = "ColorChoiceButtonText(\'' + Row1Color[i] + '\')" style = "background-color:' + Row1Color[i] + '"></div></div>'} 
        document.getElementById('ButtonTextColorRow1').innerHTML=ButtonTextRow1;

var ButtonTextRow2 = new Array(); 
    for (var i = 0; i < 3; i++) {

    ButtonTextRow2 += '<div class="colorRectangleBlockButtonText">' + '<div class = "square" onclick = "ColorChoiceButtonText(\'' + Row2Color[i] + '\')" style = "background-color:' + Row2Color[i] + '"></div></div>'} 
        document.getElementById('ButtonTextColorRow2').innerHTML=ButtonTextRow2;

var ButtonTextRow3 = new Array(); 
    for (var i = 0; i < 3; i++) {

    ButtonTextRow3 += '<div class="colorRectangleBlockButtonText">' + '<div class = "square" onclick = "ColorChoiceButtonText(\'' + Row3Color[i] + '\')" style = "background-color:' + Row3Color[i] + '"></div></div>'} 
        document.getElementById('ButtonTextColorRow3').innerHTML=ButtonTextRow3;

var ButtonTextRow4 = new Array(); 
    for (var i = 0; i < 3; i++) {

    ButtonTextRow4 += '<div class="colorRectangleBlockButtonText">' + '<div class = "square" onclick = "ColorChoiceButtonText(\'' + Row4Color[i] + '\')" style = "background-color:' + Row4Color[i] + '"></div></div>'} 
        document.getElementById('ButtonTextColorRow4').innerHTML=ButtonTextRow4;

var ButtonTextRow5 = new Array(); 
    for (var i = 0; i < 3; i++) {

    ButtonTextRow5 += '<div class="colorRectangleBlockButtonText">' + '<div class = "square" onclick = "ColorChoiceButtonText(\'' + Row5Color[i] + '\')" style = "background-color:' + Row5Color[i] + '"></div></div>'} 
        document.getElementById('ButtonTextColorRow5').innerHTML=ButtonTextRow5;

var ButtonTextRow6 = new Array(); 
    for (var i = 0; i < 3; i++) {

    ButtonTextRow6 += '<div class="colorRectangleBlockButtonText">' + '<div class = "square" onclick = "ColorChoiceButtonText(\'' + Row6Color[i] + '\')" style = "background-color:' + Row6Color[i] + '"></div></div>'} 
        document.getElementById('ButtonTextColorRow6').innerHTML=ButtonTextRow6;

var ButtonTextRow7 = new Array(); 
    for (var i = 0; i < 3; i++) {

    ButtonTextRow7 += '<div class="colorRectangleBlockButtonText">' + '<div class = "square" onclick = "ColorChoiceButtonText(\'' + Row7Color[i] + '\')" style = "background-color:' + Row7Color[i] + '"></div></div>'} 
        document.getElementById('ButtonTextColorRow7').innerHTML=ButtonTextRow7;
}

function Inside(R1,R2,R3,R4,R5,R6,R7) {

Row1Color = R1; Row2Color = R2; Row3Color = R3; Row4Color = R4; Row5Color = R5; Row6Color = R6; Row7Color = R7;

var InsideRow1 = new Array(); 
    for (var i = 0; i < 3; i++) {

    InsideRow1 += '<div class="colorRectangleBlockInside">' + '<div class = "square" onclick = "ColorChoiceInside(\'' + Row1Color[i] + '\')" style = "background-color:' + Row1Color[i] + '"></div></div>'} 
        document.getElementById('InsideColorRow1').innerHTML=InsideRow1;

var InsideRow2 = new Array(); 
    for (var i = 0; i < 3; i++) {

    InsideRow2 += '<div class="colorRectangleBlockInside">' + '<div class = "square" onclick = "ColorChoiceInside(\'' + Row2Color[i] + '\')" style = "background-color:' + Row2Color[i] + '"></div></div>'} 
        document.getElementById('InsideColorRow2').innerHTML=InsideRow2;

var InsideRow3 = new Array(); 
    for (var i = 0; i < 3; i++) {

    InsideRow3 += '<div class="colorRectangleBlockInside">' + '<div class = "square" onclick = "ColorChoiceInside(\'' + Row3Color[i] + '\')" style = "background-color:' + Row3Color[i] + '"></div></div>'} 
        document.getElementById('InsideColorRow3').innerHTML=InsideRow3;

var InsideRow4 = new Array(); 
    for (var i = 0; i < 3; i++) {

    InsideRow4 += '<div class="colorRectangleBlockInside">' + '<div class = "square" onclick = "ColorChoiceInside(\'' + Row4Color[i] + '\')" style = "background-color:' + Row4Color[i] + '"></div></div>'} 
        document.getElementById('InsideColorRow4').innerHTML=InsideRow4;

var InsideRow5 = new Array(); 
    for (var i = 0; i < 3; i++) {

    InsideRow5 += '<div class="colorRectangleBlockInside">' + '<div class = "square" onclick = "ColorChoiceInside(\'' + Row5Color[i] + '\')" style = "background-color:' + Row5Color[i] + '"></div></div>'} 
        document.getElementById('InsideColorRow5').innerHTML=InsideRow5;

var InsideRow6 = new Array(); 
    for (var i = 0; i < 3; i++) {

    InsideRow6 += '<div class="colorRectangleBlockInside">' + '<div class = "square" onclick = "ColorChoiceInside(\'' + Row6Color[i] + '\')" style = "background-color:' + Row6Color[i] + '"></div></div>'} 
        document.getElementById('InsideColorRow6').innerHTML=InsideRow6;

var InsideRow7 = new Array(); 
    for (var i = 0; i < 3; i++) {

    InsideRow7 += '<div class="colorRectangleBlockInside">' + '<div class = "square" onclick = "ColorChoiceInside(\'' + Row7Color[i] + '\')" style = "background-color:' + Row7Color[i] + '"></div></div>'} 
        document.getElementById('InsideColorRow7').innerHTML=InsideRow7;
}
