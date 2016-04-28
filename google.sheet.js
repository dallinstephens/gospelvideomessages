// Step 1 (Optional): Add a new small button by adding to the number.

NumberOfSmallButtons = 8;

// Step 2 (Optional): If step 1, then add name of new button.

WordOnButton = ["Commandments, ...", "Commandments:<...", "Lord, Feeling ...", "Music Video...", "Priesthood, Ke...", "Atonement...", "Love...", "Light..."];

// Step 3 (Optional): If step 2, then copy and paste the following. Then add button name full description and other buttons to see. 

// , "<a class = 'small'><p class = 'top'>FULL BUTTON NAME</p><p class = 'middle'>(see also OTHER BUTTONS TO SEE)</p>"

var WordsOnButtonFullDescription;

function WordsOnButtonFull() {

WordsOnButtonFullDescription = 

["<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments, Keep the</p><p class = 'middle'>(see also Commandments: Restrictive or Liberating?)</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments:<br>Are the commandments restrictive or liberating?</p><p class = 'middle'>(see also Commandments, Keep the)</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'></p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Music Video</p><p class = 'middle'></p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Priesthood, Keys of the</p><p class = 'middle'>(see also Authority; Power)</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Atonement</p><p class = 'middle'></p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Love</p><p class = 'middle'></p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Light</p><p class = 'middle'></p></a></div>"];}

// Step 4: Copy and paste the following. Then add the name of talk or video and add author. Add <br> if needed.

// , "<a class = 'small'><p class = 'top'>NAME OF VIDEO/TALK</p><p class = 'middle'>AUTHOR</p>"

Explain = 

["<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments, Keep the</p><p class = 'middle'>President Thomas S. Monson</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments, Keep the</p><p class = 'middle'>Sister Mary R. Durham</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments:<br>Are the commandments restrictive or liberating?</p><p class = 'middle'>President Thomas S. Monson</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'>President Henry B. Eyring</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'>Elder Donald L. Hallstrom</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'>Elder Kevin R. Duncan</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Music Video</p><p class = 'middle'>Sister Hilary Weeks</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Priesthood, Keys of the</p><p class = 'middle'>Elder Gary E. Stevenson</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Atonement</p><p class = 'middle'>Because of Him</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Love</p><p class = 'middle'>Elder Jeffrey R. Holland</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Light</p><p class = 'middle'>Elder David A. Bednar</p></a></div>"];

// Step 5: Add 1 to video number.

NumberOfVideos = 11;

// Step 6: Add video ID.

var video = ["n-nYIHjsogg", "TajfxA1D8N0", "n-nYIHjsogg", "a30otKYGe1o", "es4Y-lvlTgw", "UlvYMKRtMkI", "xyX-I-um5Kk", "iFLGI8JJV8k", "_S3TI4bYerU", "6MnLVTO4oDA", "slTa15a3mp0"];

var multivideo;

var StartTimeMulti;

var EndTimeMulti;

// Step 7: Copy and paste the following at the end of the function multividoes (at the end inside of the function multivideos).
// Then change the videonumber # to the next number in sequence. Then add as many video IDs as wanted with the appropriate start times under StartTimeMulti and end times under EndTime Multi.

// if (videonumber == #) {multivideo = ["VIDEOID", "VIDEOID"]; StartTimeMulti = ["STARTTIME1", "STARTTIME2"]; EndTimeMulti = ["ENDTIME1", "ENDTIME2"];}

function multivideos(x) {

    var videonumber = x;

if (videonumber == 1) {multivideo = ["n-nYIHjsogg"]; StartTimeMulti = ["831"]; EndTimeMulti = ["841"];} if (videonumber == 2) {multivideo = ["TajfxA1D8N0"]; StartTimeMulti = ["390"]; EndTimeMulti = ["400"];} if (videonumber == 3) {multivideo = ["n-nYIHjsogg"]; StartTimeMulti = ["14"]; EndTimeMulti = ["120"];} if (videonumber == 4) {multivideo = ["a30otKYGe1o"]; StartTimeMulti = ["130"]; EndTimeMulti = ["259"];} if (videonumber == 5) {multivideo = ["es4Y-lvlTgw"]; StartTimeMulti = ["80"]; EndTimeMulti = ["90"];} if (videonumber == 6) {multivideo = ["UlvYMKRtMkI"]; StartTimeMulti = ["172"]; EndTimeMulti = ["180"];} if (videonumber == 7) {multivideo = ["xyX-I-um5Kk"]; StartTimeMulti = ["16"]; EndTimeMulti = ["231"];} if (videonumber == 8) {multivideo = ["iFLGI8JJV8k"]; StartTimeMulti = ["725"]; EndTimeMulti = ["730"];} if (videonumber == 9) {multivideo = ["_S3TI4bYerU"]; StartTimeMulti = ["0"]; EndTimeMulti = ["0"];} if (videonumber == 10) {multivideo = ["6MnLVTO4oDA"]; StartTimeMulti = ["0"]; EndTimeMulti = ["0"];} if (videonumber == 11) {multivideo = ["slTa15a3mp0"]; StartTimeMulti = ["0"]; EndTimeMulti = ["0"];} 

}

// Step 8: Add Url for Source/Talk. Then add author. Then add name of source/talk. Then add source. Then add month and year.

sourceUrl = ["https://www.lds.org/general-conference/2015/10/keep-the-commandments?lang=eng", "https://www.lds.org/general-conference/2016/04/a-childs-guiding-gift?lang=eng", "https://www.lds.org/general-conference/2015/10/keep-the-commandments?lang=eng", "https://www.lds.org/general-conference/2016/04/where-two-or-three-are-gathered?lang=eng", "https://www.lds.org/general-conference/2016/04/i-am-a-child-of-god?lang=eng", "https://www.lds.org/general-conference/2016/04/the-healing-ointment-of-forgiveness?lang=eng", "https://www.youtube.com/watch?v=xyX-I-um5Kk&nohtml5=False", "https://www.lds.org/general-conference/2016/04/where-are-the-keys-and-authority-of-the-priesthood?lang=eng", "https://www.lds.org/youth/video/because-of-him?lang=eng", "https://www.lds.org/general-conference/2016/04/tomorrow-the-lord-will-do-wonders-among-you?lang=eng", "http://www.mormonchannel.org/watch/series/mormon-messages"];

author = ["Thomas S. Monson", "Mary R. Durham", "Thomas S. Monson", "Henry B. Eyring", "Donald L. Hallstrom", "Kevin R. Duncan", "Hilary Weeks", "Gary E. Stevenson", "Because of Him", "Jeffrey R. Holland", "David A. Bednar"];

sourceName = ["Keep the Commandments", "A Child\'s Guiding Gift", "Keep the Commandments", "Where Two or Three Are Gathered", "I Am a Child of God", "The Healing Ointment of Forgiveness", "Beautiful Heartbreak ", "Where Are the Keys and Authority of the Priesthood?", "Because of Him", "Tomorrow the Lord Will Do Wonders among You", "Patterns of Light: Spirit of Revelation"];

source = ["General Conference", "General Conference", "General Conference", "General Conference", "General Conference", "General Conference", "General Conference", "General Conference", "LDS Website", "General Conference", "Mormon Messages"];

monthYear = ["October 2015", "April 2016", "October 2015", "April 2016", "April 2016", "April 2016", "October 2011", "April 2016", "April 2014", "April 2016", "September 2012"];

function PlayVideoFromSlide(z) {

videonum = z;

if (videonum == 1) {multivid = ["8YlzWPPiH4A"]; StartTimeMult = ["0"]; EndTimeMult = ["0"];} if (videonum == 2) {multivid = ["9R5VwxvUUvI"]; StartTimeMult = ["0"]; EndTimeMult = ["0"];} if (videonum == 3) {multivid = ["r1J58SSjpqI"]; StartTimeMult = ["655"]; EndTimeMult = ["1060"];} if (videonum == 4) {multivid = ["PK8TTW3QuDA"]; StartTimeMult = ["5"]; EndTimeMult = ["0"];} if (videonum == 5) {multivid = ["NYC79jaYEis"]; StartTimeMult = ["0"]; EndTimeMult = ["0"];} if (videonum == 6) {multivid = ["z0APKNvDMr4"]; StartTimeMult = ["0"]; EndTimeMult = ["0"];} if (videonum == 7) {multivid = ["f_P38enL0hA"]; StartTimeMult = ["6"]; EndTimeMult = ["38"];} if (videonum == 8) {multivid = ["p2wdMwpYByI"]; StartTimeMult = ["0"]; EndTimeMult = ["0"];} if (videonum == 9) {multivid = ["mha9nKaPHjU"]; StartTimeMult = ["1343"]; EndTimeMult = ["1507"];} if (videonum == 10) {multivid = ["ZXsxAxklj08"]; StartTimeMult = ["0"]; EndTimeMult = ["0"];} if (videonum == 11) {multivid = ["L_naFA6TGns"]; StartTimeMult = ["0"]; EndTimeMult = ["0"];} if (videonum == 12) {multivid = ["VeauSzEvvGo"]; StartTimeMult = ["0"]; EndTimeMult = ["0"];} if (videonum == 13) {multivid = ["URifKLvlx8s"]; StartTimeMult = ["0"]; EndTimeMult = ["0"];} if (videonum == 14) {multivid = ["kbWhiIO4Q3k"]; StartTimeMult = ["0"]; EndTimeMult = ["0"];} if (videonum == 15) {multivid = ["ZI8JWMNyEN0"]; StartTimeMult = ["0"]; EndTimeMult = ["0"];} 

srcUrl = ["https://www.lds.org/bible-videos/videos/christ-appears-on-the-road-to-emmaus?lang=eng", "https://www.lds.org/bible-videos/videos/jesus-declares-i-am-the-light-of-the-world-the-truth-shall-make-you-free?lang=eng", "https://www.youtube.com/watch?v=r1J58SSjpqI", "https://www.lds.org/media-library/video/2010-11-50-chapter-46-the-second-coming?lang=eng", "https://www.youtube.com/watch?v=NYC79jaYEis", "https://www.youtube.com/watch?v=z0APKNvDMr4&index=58&list=PL9377417BD93C4852", "https://www.youtube.com/watch?v=f_P38enL0hA", "https://www.mormon.org/easter", "https://www.youtube.com/watch?v=mha9nKaPHjU", "https://www.youtube.com/watch?v=ZXsxAxklj08", "https://www.youtube.com/watch?v=L_naFA6TGns", "https://www.youtube.com/watch?v=VeauSzEvvGo", "https://www.lds.org/bible-videos/videos/render-unto-caesar-and-unto-god?lang=eng", "https://www.lds.org/bible-videos/videos/the-last-supper?lang=eng", "https://www.lds.org/bible-videos/videos/christs-authority-is-questioned?lang=eng"];

athr = ["Luke 24:13-33", "John 8:12-58", "Myra Brooks Welch", "Chapter 46", "Chapter 51", "Chapter 54", "Chapter 55", "mormon.org", "Unlisted", "Chapter 52", "Chapter 32", "Chapter 13", "LDS Videos", "LDS Videos", "LDS Videos"];

srcName = ["Christ Appears on the Road to Emmaus", "Jesus Declares: I Am the Light of the World, the Truth Shall Make You Free", "Master\'s Touch (Violin)", "The Second Coming", "Jesus Suffers in the Garden of Gethsemane ", "Jesus Is Risen ", "The Apostles Lead the Church ", "#Hallelujah-An Easter Message about Jesus Christ", "The Lamb of God", "The Trials of Jesus", "Peter Testifies of Christ", "Jesus and His Heavenly Father\'s House", "Render unto Caesar and unto God ", "The Last Supper", "Christ\'s Authority is Questioned"];

srce = ["BibleVideos.org", "BibleVideos.org", "Based on Poem", "LDS Media Library", "Mormon Channel", "Mormon Channel", "Mormon Channel", "LDS Messages", "Mormon Movie", "Mormon Channel", "Mormon Channel", "Mormon Channel", "BibleVideos.org", "BibleVideos.org", "BibleVideos.org"];

mnthYr = ["May 2014", "October 2012", "March 2012", "January 2012", "January 2012", "January 2012", "January 2012", "May 2016", "May 2014", "January 2012", "January 2012", "January 2012", "March 2013", "March 2012", "October 2014"];

i = z - 1;
 
var vid2 = 'https://www.youtube.com/embed/' + multivid + '?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1&vq=720p&rel=0&start=' + StartTimeMult + '&end=' + EndTimeMult; var posterURL = 'http://images.weserv.nl/?url=i.ytimg.com/vi/CVWJBM_gwGg/maxresdefault.jpg';
      
mycode = '<iframe id="myvid" style = "position: relative; z-index:4; top:28px;" width="700" height="393" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allowfullscreen="true" allowscriptaccess="always" quality="high" bgcolor="#000000" name="my-video" style=""' + 'src= "' + vid2 + '"' + 'type="application/x-shockwave-flash"></iframe>' + '<a style = "position: absolute; z-index:10; top:428px; left:0px; right:0px; text-align:center; text-decoration: none" href="' + srcUrl[i] + '" target="_blank"><font id = "talkLink2" size="2">' + athr[i] + ', &quot;' + srcName[i] + ',&quot; ' + srce[i] + ', ' + mnthYr[i] + '</font></a>';

document.getElementById("showVideo").innerHTML = mycode;

}

Explain3 = ["<div class='textinmiddle'><a class = 'small'><p class = 'top'>Christ Appears on the Road to Emmaus</p><p class = 'middle'>Luke 24:13-33</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Declares I Am the Light of the World the Truth Shall Make You Free</p><p class = 'middle'>John 8:12-58</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Touch of the Master\'s Hand</p><p class = 'middle'>Based on the Poem by Myra Brooks Welch</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Second Coming</p><p class = 'middle'>LDS Media Library</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Garden of Gethsemane</p><p class = 'middle'>Mormon Channel</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Is Risen </p><p class = 'middle'>Mormon Channel</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Ascends into Heaven</p><p class = 'middle'>Mormon Channel</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Christ: Hallelujah</p><p class = 'middle'>mormon.org</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Christ has Risen</p><p class = 'middle'>The Lamb of God</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Trials of Jesus</p><p class = 'middle'>Mormon Channel</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Who is Jesus?</p><p class = 'middle'>Mormon Channel</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Cleanses the Temple</p><p class = 'middle'>Mormon Channel</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Some Jews Try to Trap Jesus</p><p class = 'middle'>Bible Videos</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Last Supper</p><p class = 'middle'>Bible Videos</p></a></div>", "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Christ\'s Authority is Questioned</p><p class = 'middle'>Bible Videos</p></a></div>"];
