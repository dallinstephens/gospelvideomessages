// Step 1 (Optional): Add a new small button by adding to the number.

NumberOfSmallButtons = 8;

// Step 2 (Optional): If step 1, then add name of new button.

WordOnButton = ["Commandments, ...", "Commandments:<...", "Lord, Feeling ...", "Music Video...", "Priesthood, Ke...", "Atonement...", "Love...", "Holy Ghost..."];

// Step 3 (Optional): If step 2, then copy and paste the following. Then add button name full description and other buttons to see. 

// , "<a class = 'small'><p class = 'top'>FULL BUTTON NAME</p><p class = 'middle'>(see also OTHER BUTTONS TO SEE)</p>"

var WordsOnButtonFullDescription;

function WordsOnButtonFull() {

WordsOnButtonFullDescription = 

["<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments, Keep the</p><p class = 'middle'>(see also Commandments: Restrictive or Liberating?)</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments:<br>Are the commandments restrictive or liberating?</p><p class = 'middle'>(see also Commandments, Keep the)</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'></p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Music Video</p><p class = 'middle'></p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Priesthood, Keys of the</p><p class = 'middle'>(see also Authority; Power)</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Atonement</p><p class = 'middle'></p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Love</p><p class = 'middle'></p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Holy Ghost</p><p class = 'middle'>(see also Spirit of the Lord)</p></a></div>"];}

// Step 4: Copy and paste the following. Then add the name of talk or video and add author. Add <br> if needed.

// , "<a class = 'small'><p class = 'top'>NAME OF VIDEO/TALK</p><p class = 'middle'>AUTHOR</p>"

Explain = 

["<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments, Keep the</p><p class = 'middle'>President Thomas S. Monson</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments, Keep the</p><p class = 'middle'>Sister Mary R. Durham</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments:<br>Are the commandments restrictive or liberating?</p><p class = 'middle'>President Thomas S. Monson</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'>President Henry B. Eyring</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'>Elder Donald L. Hallstrom</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'>Elder Kevin R. Duncan</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Music Video</p><p class = 'middle'>Sister Hilary Weeks</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Priesthood, Keys of the</p><p class = 'middle'>Elder Gary E. Stevenson</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Atonement</p><p class = 'middle'>Because of Him</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Love</p><p class = 'middle'>Elder Jeffrey R. Holland</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Holy Ghost</p><p class = 'middle'>Elder Robert D. Hales</p></a></div>"];

// Step 5: Add 1 to video number.

NumberOfVideos = 11;

// Step 6: Add video ID.

var video = ["n-nYIHjsogg", "TajfxA1D8N0", "n-nYIHjsogg", "a30otKYGe1o", "es4Y-lvlTgw", "UlvYMKRtMkI", "xyX-I-um5Kk", "iFLGI8JJV8k", "_S3TI4bYerU", "6MnLVTO4oDA", "9lD6ve5Arro"];

var multivideo;

var StartTimeMulti;

var EndTimeMulti;

// Step 7: Copy and paste the following at the end of the function multividoes (at the end inside of the function multivideos).
// Then change the videonumber # to the next number in sequence. Then add as many video IDs as wanted with the appropriate start times under StartTimeMulti and end times under EndTime Multi.

// if (videonumber == #) {multivideo = ["VIDEOID", "VIDEOID"]; StartTimeMulti = ["STARTTIME1", "STARTTIME2"]; EndTimeMulti = ["ENDTIME1", "ENDTIME2"];}

function multivideos(x) {

    var videonumber = x;

if (videonumber == 1) {multivideo = ["n-nYIHjsogg"]; StartTimeMulti = ["831"]; EndTimeMulti = ["841"];} if (videonumber == 2) {multivideo = ["TajfxA1D8N0"]; StartTimeMulti = ["390"]; EndTimeMulti = ["400"];} if (videonumber == 3) {multivideo = ["n-nYIHjsogg"]; StartTimeMulti = ["14"]; EndTimeMulti = ["120"];} if (videonumber == 4) {multivideo = ["a30otKYGe1o"]; StartTimeMulti = ["130"]; EndTimeMulti = ["259"];} if (videonumber == 5) {multivideo = ["es4Y-lvlTgw"]; StartTimeMulti = ["80"]; EndTimeMulti = ["90"];} if (videonumber == 6) {multivideo = ["UlvYMKRtMkI"]; StartTimeMulti = ["172"]; EndTimeMulti = ["180"];} if (videonumber == 7) {multivideo = ["xyX-I-um5Kk"]; StartTimeMulti = ["16"]; EndTimeMulti = ["231"];} if (videonumber == 8) {multivideo = ["iFLGI8JJV8k"]; StartTimeMulti = ["725"]; EndTimeMulti = ["730"];} if (videonumber == 9) {multivideo = ["_S3TI4bYerU"]; StartTimeMulti = ["0"]; EndTimeMulti = ["0"];} if (videonumber == 10) {multivideo = ["6MnLVTO4oDA"]; StartTimeMulti = ["0"]; EndTimeMulti = ["0"];} if (videonumber == 11) {multivideo = ["9lD6ve5Arro"]; StartTimeMulti = ["840"]; EndTimeMulti = ["850"];} 

}

// Step 8: Add Url for Source/Talk. Then add author. Then add name of source/talk. Then add source. Then add month and year.

sourceUrl = ["https://www.lds.org/general-conference/2015/10/keep-the-commandments?lang=eng", "https://www.lds.org/general-conference/2016/04/a-childs-guiding-gift?lang=eng", "https://www.lds.org/general-conference/2015/10/keep-the-commandments?lang=eng", "https://www.lds.org/general-conference/2016/04/where-two-or-three-are-gathered?lang=eng", "https://www.lds.org/general-conference/2016/04/i-am-a-child-of-god?lang=eng", "https://www.lds.org/general-conference/2016/04/the-healing-ointment-of-forgiveness?lang=eng", "https://www.youtube.com/watch?v=xyX-I-um5Kk&nohtml5=False", "https://www.lds.org/general-conference/2016/04/where-are-the-keys-and-authority-of-the-priesthood?lang=eng", "https://www.lds.org/youth/video/because-of-him?lang=eng", "https://www.lds.org/general-conference/2016/04/tomorrow-the-lord-will-do-wonders-among-you?lang=eng", "https://www.youtube.com/watch?v=9lD6ve5Arro"];

author = ["Thomas S. Monson", "Mary R. Durham", "Thomas S. Monson", "Henry B. Eyring", "Donald L. Hallstrom", "Kevin R. Duncan", "Hilary Weeks", "Gary E. Stevenson", "Because of Him", "Jeffrey R. Holland", "Robert D. Hales"];

sourceName = ["Keep the Commandments", "A Child\'s Guiding Gift", "Keep the Commandments", "Where Two or Three Are Gathered", "I Am a Child of God", "The Healing Ointment of Forgiveness", "Beautiful Heartbreak ", "Where Are the Keys and Authority of the Priesthood?", "Because of Him", "Tomorrow the Lord Will Do Wonders among You", "The Holy Ghost"];

source = ["General Conference", "General Conference", "General Conference", "General Conference", "General Conference", "General Conference", "General Conference", "General Conference", "LDS Website", "General Conference", "General Conference"];

monthYear = ["October 2015", "April 2016", "October 2015", "April 2016", "April 2016", "April 2016", "October 2011", "April 2016", "April 2014", "April 2016", "April 2016"];
 
function PlayVideoFromSlide(z) {

videonum = z;

if (videonum == 1) {multivid = ["n-nYIHjsogg"]; StartTimeMult = ["831"]; EndTimeMult = ["841"];} if (videonum == 2) {multivid = ["TajfxA1D8N0"]; StartTimeMult = ["390"]; EndTimeMult = ["400"];}

srcUrl = ["https://www.lds.org/general-conference/2015/10/keep-the-commandments?lang=eng", "https://www.lds.org/general-conference/2016/04/a-childs-guiding-gift?lang=eng"];

athr = ["Thomas S. Monson", "Mary R. Durham"];

srcName = ["Keep the Commandments", "A Child\'s Guiding Gift"];

srce = ["General Conference", "General Conference"];

mnthYr = ["October 2015", "April 2016"];

i = z - 1;
 
var vid2 = 'https://www.youtube.com/embed/' + multivid + '?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1&vq=720p&rel=0&start=' + StartTimeMult + '&end=' + EndTimeMult; var posterURL = 'http://images.weserv.nl/?url=i.ytimg.com/vi/CVWJBM_gwGg/maxresdefault.jpg';	
      	
mycode = '<iframe id="myvid" style = "position: relative; z-index:4; top:28px;" width="700" height="393" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allowfullscreen="true" allowscriptaccess="always" quality="high" bgcolor="#000000" name="my-video" style=""' + 'src= "' + vid2 + '"' + 'type="application/x-shockwave-flash"></iframe>' + '<a style = "position: absolute; z-index:10; top:430px; left:0px; right:0px; text-align:center; text-decoration: none" href="' + srcUrl[i] + '" target="_blank"><font id = "talkLink2" size="2">' + athr[i] + ', &quot;' + srcName[i] + ',&quot; ' + srce[i] + ', ' + mnthYr[i] + '</font></a>';

document.getElementById("showVideo").innerHTML = mycode;

}

Explain3 = ["<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments, Keep the</p><p class = 'middle'>President Thomas S. Monson</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments, Keep the</p><p class = 'middle'>Sister Mary R. Durham</p></a></div>"];
