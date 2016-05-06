// Step 1 (Optional): Add a new small button by adding to the number.

NumberOfSmallButtons = 11;

// Step 2 (Optional): If step 1, then add name of new button.

WordOnButton = [ "Atonement..." , "Commandments, ..." , "Commandments: ..." , "Light..." , "Lord, Feeling ..." , "Love..." , "Music Video..." , "Priesthood, Ke..." , "Testimony..." , "Challenges, Ov..." , "Spirit, Feelin..." ];

// Step 3 (Optional): If step 2, then copy and paste the following. Then add button name full description and other buttons to see. 

// , "<a class = 'small'><p class = 'top'>FULL BUTTON NAME</p><p class = 'middle'>(see also OTHER BUTTONS TO SEE)</p>"

var WordsOnButtonFullDescription;

function WordsOnButtonFull() {

WordsOnButtonFullDescription = 

[ "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Atonement</p><p class = 'middle'></p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments, Keep the</p><p class = 'middle'>(see also Commandments: Restrictive or Liberating?)</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments: Are the commandments restrictive or liberating?</p><p class = 'middle'>(see also Commandments, Keep the)</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Light</p><p class = 'middle'></p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'></p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Love</p><p class = 'middle'></p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Music Video</p><p class = 'middle'></p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Priesthood, Keys of the</p><p class = 'middle'>(see also Authority; Power)</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Testimony</p><p class = 'middle'></p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Challenges, Overcoming through Christ</p><p class = 'middle'></p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Spirit, Feeling the</p><p class = 'middle'></p></a></div>" ];}

// Step 4: Copy and paste the following. Then add the name of talk or video and add author. Add <br> if needed.

// , "<a class = 'small'><p class = 'top'>NAME OF VIDEO/TALK</p><p class = 'middle'>AUTHOR</p>"

Explain = 

[ "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Atonement</p><p class = 'middle'>Because of Him</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments, Keep the</p><p class = 'middle'>President Thomas S. Monson</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments, Keep the</p><p class = 'middle'>Sister Mary R. Durham</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Commandments:<br>Are the commandments restrictive or liberating?</p><p class = 'middle'>President Thomas S. Monson</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Patterns of Light: Spirit of Revelation</p><p class = 'middle'>Elder David A. Bednar</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Be a Light in the Lives of Others</p><p class = 'middle'>President Thomas S. Monson</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'>President Henry B. Eyring</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'>Elder Donald L. Hallstrom</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Feeling Close to the</p><p class = 'middle'>Elder Kevin R. Duncan</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Love</p><p class = 'middle'>Elder Jeffrey R. Holland</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Music Video</p><p class = 'middle'>Sister Hilary Weeks</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Priesthood, Keys of the</p><p class = 'middle'>Elder Gary E. Stevenson</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Finding Your Purpose in Life: Does Faith Matter?</p><p class = 'middle'>Rich Millar</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Hope of God\'s Light</p><p class = 'middle'>Todd</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Gaining Power To Overcome Challenges In Life</p><p class = 'middle'>President Henry B. Eyring</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Finding Your Purpose in Life: Does Faith Matter?</p><p class = 'middle'>Rich Millar</p></a></div>" ];

// Step 5: Add 1 to video number.

NumberOfVideos = 16;

// Step 6: Add video ID.

var video = [ "_S3TI4bYerU" , "n-nYIHjsogg" , "TajfxA1D8N0" , "n-nYIHjsogg" , "slTa15a3mp0" , "OtsuwtP3d2Y" , "a30otKYGe1o" , "es4Y-lvlTgw" , "UlvYMKRtMkI" , "6MnLVTO4oDA" , "xyX-I-um5Kk" , "iFLGI8JJV8k" , "oAaa135NnAY" , "2w49_1a9X0Q" , "xdN8rfwW3SI" , "oAaa135NnAY" ];

var multivideo;

var StartTimeMulti;

var EndTimeMulti;

// Step 7: Copy and paste the following at the end of the function multividoes (at the end inside of the function multivideos).
// Then change the videonumber # to the next number in sequence. Then add as many video IDs as wanted with the appropriate start times under StartTimeMulti and end times under EndTime Multi.

// if (videonumber == #) {multivideo = ["VIDEOID", "VIDEOID"]; StartTimeMulti = ["STARTTIME1", "STARTTIME2"]; EndTimeMulti = ["ENDTIME1", "ENDTIME2"];}

function multivideos(x) {

    var videonumber = x;

if (videonumber == 1) {multivideo = [ "_S3TI4bYerU" ]; StartTimeMulti = ["0" ]; EndTimeMulti = ["0" ];}  if (videonumber == 2) {multivideo = [ "n-nYIHjsogg" ]; StartTimeMulti = ["831" ]; EndTimeMulti = ["841" ];}  if (videonumber == 3) {multivideo = [ "TajfxA1D8N0" ]; StartTimeMulti = ["390" ]; EndTimeMulti = ["400" ];}  if (videonumber == 4) {multivideo = [ "n-nYIHjsogg" ]; StartTimeMulti = ["14" ]; EndTimeMulti = ["120" ];}  if (videonumber == 5) {multivideo = [ "slTa15a3mp0" ]; StartTimeMulti = ["0" ]; EndTimeMulti = ["0" ];}  if (videonumber == 6) {multivideo = [ "OtsuwtP3d2Y" ]; StartTimeMulti = ["0" ]; EndTimeMulti = ["0" ];}  if (videonumber == 7) {multivideo = [ "a30otKYGe1o" ]; StartTimeMulti = ["130" ]; EndTimeMulti = ["259" ];}  if (videonumber == 8) {multivideo = [ "es4Y-lvlTgw" ]; StartTimeMulti = ["80" ]; EndTimeMulti = ["90" ];}  if (videonumber == 9) {multivideo = [ "UlvYMKRtMkI" ]; StartTimeMulti = ["172" ]; EndTimeMulti = ["180" ];}  if (videonumber == 10) {multivideo = [ "6MnLVTO4oDA" ]; StartTimeMulti = ["0" ]; EndTimeMulti = ["0" ];}  if (videonumber == 11) {multivideo = [ "xyX-I-um5Kk" ]; StartTimeMulti = ["16" ]; EndTimeMulti = ["231" ];}  if (videonumber == 12) {multivideo = [ "iFLGI8JJV8k" ]; StartTimeMulti = ["725" ]; EndTimeMulti = ["730" ];}  if (videonumber == 13) {multivideo = [ "oAaa135NnAY" ]; StartTimeMulti = ["0" ]; EndTimeMulti = ["0" ];}  if (videonumber == 14) {multivideo = [ "2w49_1a9X0Q" ]; StartTimeMulti = ["0" ]; EndTimeMulti = ["0" ];}  if (videonumber == 15) {multivideo = [ "xdN8rfwW3SI" ]; StartTimeMulti = ["0" ]; EndTimeMulti = ["0" ];}  if (videonumber == 16) {multivideo = [ "oAaa135NnAY" ]; StartTimeMulti = ["0" ]; EndTimeMulti = ["0" ];} 

}

// Step 8: Add Url for Source/Talk. Then add author. Then add name of source/talk. Then add source. Then add month and year.

sourceUrl = [ "https://www.lds.org/youth/video/because-of-him?lang=eng" , "https://www.lds.org/general-conference/2015/10/keep-the-commandments?lang=eng" , "https://www.lds.org/general-conference/2016/04/a-childs-guiding-gift?lang=eng" , "https://www.lds.org/general-conference/2015/10/keep-the-commandments?lang=eng" , "http://www.mormonchannel.org/watch/series/mormon-messages" , "https://www.lds.org/media-library/video/2015-10-410-be-a-light-in-the-lives-of-others-veme?lang=eng" , "https://www.lds.org/general-conference/2016/04/where-two-or-three-are-gathered?lang=eng" , "https://www.lds.org/general-conference/2016/04/i-am-a-child-of-god?lang=eng" , "https://www.lds.org/general-conference/2016/04/the-healing-ointment-of-forgiveness?lang=eng" , "https://www.lds.org/general-conference/2016/04/tomorrow-the-lord-will-do-wonders-among-you?lang=eng" , "https://www.youtube.com/watch?v=xyX-I-um5Kk&nohtml5=False" , "https://www.lds.org/general-conference/2016/04/where-are-the-keys-and-authority-of-the-priesthood?lang=eng" , "http://www.mormonchannel.org/watch/series/his-grace/finding-your-purpose-in-life-does-faith-matter?cid=HP_FR_29-4-2016_dMC_fMLIB_xLIDyI-1_" , "http://www.mormonchannel.org/watch/series/mormon-messages/the-hope-of-gods-light" , "https://www.lds.org/media-library/video/2013-01-003-mountains-to-climb?cid=HP_FR_22-4-2016_dPFD_fMLIB_xLIDyI-1_&lang=eng" , "http://www.mormonchannel.org/watch/series/his-grace/finding-your-purpose-in-life-does-faith-matter?cid=HP_FR_29-4-2016_dMC_fMLIB_xLIDyI-1_" ];

author = [ "Because of Him" , "Thomas S. Monson" , "Mary R. Durham" , "Thomas S. Monson" , "David A. Bednar" , "Thomas S. Monson" , "Henry B. Eyring" , "Donald L. Hallstrom" , "Kevin R. Duncan" , "Jeffrey R. Holland" , "Hilary Weeks" , "Gary E. Stevenson" , "Rich Millar" , "Todd" , "Henry B. Eyring" , "Rich Millar" ];

sourceName = [ "Because of Him" , "Keep the Commandments" , "A Child\'s Guiding Gift" , "Keep the Commandments" , "Patterns of Light: Spirit of Revelation" , "Be a Light in the Lives of Others" , "Where Two or Three Are Gathered" , "I Am a Child of God" , "The Healing Ointment of Forgiveness" , "Tomorrow the Lord Will Do Wonders among You" , "Beautiful Heartbreak " , "Where Are the Keys and Authority of the Priesthood?" , "Finding Your Purpose in Life: Does Faith Matter?" , "The Hope of God\'s Light" , "Mountains to Climb" , "Finding Your Purpose in Life: Does Faith Matter?" ];

source = [ "LDS Website" , "General Conference" , "General Conference" , "General Conference" , "Mormon Messages" , "LDS Media Library" , "General Conference" , "General Conference" , "General Conference" , "General Conference" , "General Conference" , "General Conference" , "Mormon Channel" , "Mormon Channel" , "General Conference" , "Mormon Channel" ];

monthYear = [ "April 2014" , "October 2015" , "April 2016" , "October 2015" , "September 2012" , "October 2015" , "April 2016" , "April 2016" , "April 2016" , "April 2016" , "October 2011" , "April 2016" , "January 2015" , "July 2014" , "February 2013" , "January 2015" ];

function PlayVideoFromSlide(z) {

videonum = z;

if (videonum == 1) {multivid = [ "8YlzWPPiH4A" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 2) {multivid = [ "9R5VwxvUUvI" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 3) {multivid = [ "r1J58SSjpqI" ]; StartTimeMult = ["655" ]; EndTimeMult = ["1060" ];}  if (videonum == 4) {multivid = [ "PK8TTW3QuDA" ]; StartTimeMult = ["5" ]; EndTimeMult = ["0" ];}  if (videonum == 5) {multivid = [ "NYC79jaYEis" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 6) {multivid = [ "z0APKNvDMr4" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 7) {multivid = [ "f_P38enL0hA" ]; StartTimeMult = ["6" ]; EndTimeMult = ["38" ];}  if (videonum == 8) {multivid = [ "p2wdMwpYByI" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 9) {multivid = [ "mha9nKaPHjU" ]; StartTimeMult = ["1343" ]; EndTimeMult = ["1507" ];}  if (videonum == 10) {multivid = [ "ZXsxAxklj08" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 11) {multivid = [ "L_naFA6TGns" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 12) {multivid = [ "VeauSzEvvGo" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 13) {multivid = [ "URifKLvlx8s" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 14) {multivid = [ "nwaTLir6od4" ]; StartTimeMult = ["35" ]; EndTimeMult = ["281" ];}  if (videonum == 15) {multivid = [ "ZI8JWMNyEN0" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 16) {multivid = [ "4A6usoBnqNs" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 17) {multivid = [ "R7ldbrua9as" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 18) {multivid = [ "lbsUs0PYC0M" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 19) {multivid = [ "Z5yA7AMb9UA" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 20) {multivid = [ "goR5FO1vge8" ]; StartTimeMult = ["354" ]; EndTimeMult = ["0" ];}  if (videonum == 21) {multivid = [ "ueK1UfGwHas" ]; StartTimeMult = ["412" ]; EndTimeMult = ["976" ];}  if (videonum == 22) {multivid = [ "XGYZZxo9mS0" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 23) {multivid = [ "e5Q5STibJUQ" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 24) {multivid = [ "N-4TNtW_C-k" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 25) {multivid = [ "RqmeyQUY-xM" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 26) {multivid = [ "a9ZxiFp7yv0" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 27) {multivid = [ "RqmeyQUY-xM" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 28) {multivid = [ "BTO7-Jarl-E" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 29) {multivid = [ "zF7ma1yoLNk" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 30) {multivid = [ "h9M2mprzCF8" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 31) {multivid = [ "o_4LpZgm2nw" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 32) {multivid = [ "kPfC9kSPP_Q" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 33) {multivid = [ "-BZkhVbWVY4" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 34) {multivid = [ "xaWI4-n0z_0" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 35) {multivid = [ "X_QCQ5i7NKs" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 36) {multivid = [ "kbWhiIO4Q3k" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 37) {multivid = [ "e-3TEnEzXHk" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];}  if (videonum == 38) {multivid = [ "gGClhOvlJCA" ]; StartTimeMult = ["0" ]; EndTimeMult = ["0" ];} 

srcUrl = [ "https://www.lds.org/bible-videos/videos/christ-appears-on-the-road-to-emmaus?lang=eng" , "https://www.lds.org/bible-videos/videos/jesus-declares-i-am-the-light-of-the-world-the-truth-shall-make-you-free?lang=eng" , "https://www.youtube.com/watch?v=r1J58SSjpqI" , "https://www.lds.org/media-library/video/2010-11-50-chapter-46-the-second-coming?lang=eng" , "https://www.youtube.com/watch?v=NYC79jaYEis" , "https://www.youtube.com/watch?v=z0APKNvDMr4&index=58&list=PL9377417BD93C4852" , "https://www.youtube.com/watch?v=f_P38enL0hA" , "https://www.mormon.org/easter" , "https://www.youtube.com/watch?v=mha9nKaPHjU" , "https://www.youtube.com/watch?v=ZXsxAxklj08" , "https://www.youtube.com/watch?v=L_naFA6TGns" , "https://www.youtube.com/watch?v=VeauSzEvvGo" , "https://www.lds.org/bible-videos/videos/render-unto-caesar-and-unto-god?lang=eng" , "https://www.lds.org/general-conference/2014/10/lord-is-it-i?lang=eng" , "https://www.lds.org/bible-videos/videos/christs-authority-is-questioned?lang=eng" , "https://www.lds.org/bible-videos/videos/jesus-is-tried-by-caiaphas-peter-denies-knowing-him?lang=eng" , "https://www.lds.org/bible-videos/videos/jesus-teaches-that-we-must-become-as-little-children?lang=eng" , "https://www.youtube.com/watch?v=lbsUs0PYC0M" , "https://www.youtube.com/watch?v=Z5yA7AMb9UA" , "https://www.lds.org/bible-videos/videos/the-savior-suffers-in-gethsemane?lang=eng" , "https://www.lds.org/general-conference/2012/10/the-first-great-commandment?lang=eng" , "https://www.youtube.com/watch?v=XGYZZxo9mS0" , "https://www.lds.org/bible-videos/videos/shepherds-learn-of-the-birth-of-christ?lang=eng" , "https://www.lds.org/bible-videos/videos/the-lords-triumphal-entry-into-jerusalem?lang=eng" , "https://www.lds.org/bible-videos/videos/jesus-is-resurrected?lang=eng" , "https://www.youtube.com/watch?v=a9ZxiFp7yv0" , "https://www.lds.org/bible-videos/videos/jesus-is-resurrected?lang=eng" , "https://www.lds.org/bible-videos/videos/sermon-on-the-mount-the-beatitudes?lang=eng" , "https://www.lds.org/bible-videos/videos/jesus-teaches-a-samaritan-woman?lang=eng" , "https://www.lds.org/bible-videos/videos/jesus-declares-he-is-the-messiah?lang=eng" , "https://www.lds.org/bible-videos/videos/widow-of-nain?lang=eng" , "https://www.lds.org/bible-videos/videos/jesus-is-laid-in-a-tomb?lang=eng" , "https://www.lds.org/bible-videos/videos/thou-art-the-christ?lang=eng" , "https://www.lds.org/bible-videos/videos/jesus-turns-water-into-wine?lang=eng" , "https://www.lds.org/bible-videos/videos/the-prodigal-son?lang=eng" , "https://www.lds.org/bible-videos/videos/the-last-supper?lang=eng" , "https://www.lds.org/bible-videos/videos/the-calling-of-the-original-twelve-apostles?lang=eng" , "https://www.google.com/" ];

athr = [ "Luke 24:13-33" , "John 8:12-58" , "Myra Brooks Welch" , "Chapter 46" , "Chapter 51" , "Chapter 54" , "Chapter 55" , "mormon.org" , "LDS Videos" , "Chapter 52" , "Chapter 32" , "Chapter 13" , "Bible Videos" , "Dieter F. Uchtdorf" , "Bible Videos" , "Matthew 26:57-75" , "Matthew 18:1-11; Mark 9:38-42" , "Chapter 49" , "Chapter 41" , "Matthew 26:45-57" , "Jeffrey R. Holland" , "Chapter 20" , "Bible Videos" , "Bible Videos" , "John 20:3-18" , "Chapter 43" , "John 20:3-18" , "Matthew 5:3-16" , "John 4:5-29" , "Luke 4:15-30" , "Bible Videos" , "Matthew 27:57-60" , "Matthew 16:13-19" , "John 2:1-12" , "Luke 15:11-32" , "Bible Videos" , "Bible Videos" , "Dallin L. Stephens" ];

srcName = [ "Christ Appears on the Road to Emmaus" , "Jesus Declares: I Am the Light of the World, the Truth Shall Make You Free" , "Master\'s Touch (Violin)" , "The Second Coming" , "Jesus Suffers in the Garden of Gethsemane " , "Jesus Is Risen " , "The Apostles Lead the Church " , "#Hallelujah-An Easter Message about Jesus Christ" , "The Lamb of God" , "The Trials of Jesus" , "Peter Testifies of Christ" , "Jesus and His Heavenly Father\'s House" , "Render unto Caesar and unto God " , "Lord, Is It I?" , "Christ\'s Authority is Questioned" , "Jesus Tried by Caiaphas, Peter Denies Knowing Christ " , "Jesus Teaches that We Must Become as Little Children " , "The First Sacrament " , "Jesus Blesses the Children " , "The Savior Suffers in Gethsemane" , "The First Great Commandment " , "Jesus Teaches about Prayer " , "Shepherds Learn of the Birth of Christ " , "The Lord\'s Triumphal Entry into Jerusalem " , "Jesus Is Resurrected" , "Jesus Brings Lazarus Back to Life " , "Jesus Is Resurrected" , "Sermon on the Mount: The Beatitudes" , "Jesus Teaches a Samaritan Woman" , "Jesus Declares He Is the Messiah" , "Widow of Nain" , "Jesus Is Laid in a Tomb" , "Thou Art the Christ" , "Jesus Turns Water into Wine" , "The Prodigal Son" , "The Last Supper" , "Jesus Calls Twelve Apostles to Preach and Bless Others" , "My source name" ];

srce = [ "BibleVideos.org" , "BibleVideos.org" , "Based on Poem" , "LDS Media Library" , "New Testament Stories" , "New Testament Stories" , "New Testament Stories" , "LDS Messages" , "Mormon Movie" , "New Testament Stories" , "New Testament Stories" , "New Testament Stories" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "New Testament Stories" , "New Testament Stories" , "BibleVideos.org" , "General Conference" , "New Testament Stories" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "New Testament Stories" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "BibleVideos.org" , "General Conference" ];

mnthYr = [ "May 2014" , "October 2012" , "March 2012" , "January 2012" , "January 2012" , "January 2012" , "January 2012" , "May 2016" , "May 2014" , "January 2012" , "January 2012" , "January 2012" , "March 2013" , "October 2014" , "October 2014" , "March 2012" , "November 2013" , "January 2012" , "January 2012" , "March 2012" , "October 2012" , "January 2012" , "December 2011" , "February 2012" , "March 2012" , "January 2012" , "May 2012" , "July 2012" , "February 2012" , "May 2012" , "October 2014" , "March 2012" , "April 2013" , "April 2012" , "June 2013" , "March 2012" , "June 2012" , "December 1977" ];

i = z - 1;
 
var vid2 = 'https://www.youtube.com/embed/' + multivid + '?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1&vq=720p&rel=0&start=' + StartTimeMult + '&end=' + EndTimeMult; var posterURL = 'http://images.weserv.nl/?url=i.ytimg.com/vi/CVWJBM_gwGg/maxresdefault.jpg';
      
mycode = '<iframe id="myvid" style = "position: relative; z-index:4; top:28px;" width="700" height="393" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allowfullscreen="true" allowscriptaccess="always" quality="high" bgcolor="#000000" name="my-video" style=""' + 'src= "' + vid2 + '"' + 'type="application/x-shockwave-flash"></iframe>' + '<a style = "position: absolute; z-index:10; top:428px; left:0px; right:0px; text-align:center; text-decoration: none" href="' + srcUrl[i] + '" target="_blank"><font id = "talkLink2" size="2">' + athr[i] + ', &quot;' + srcName[i] + ',&quot; ' + srce[i] + ', ' + mnthYr[i] + '</font></a>';

document.getElementById("showVideo").innerHTML = mycode;

}

Explain3 = [ "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Christ Appears on the Road to Emmaus</p><p class = 'middle'>Luke 24:13-33</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Declares I Am the Light of the World the Truth Shall Make You Free</p><p class = 'middle'>John 8:12-58</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Touch of the Master\'s Hand</p><p class = 'middle'>Based on the Poem by Myra Brooks Welch</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Second Coming</p><p class = 'middle'>LDS Media Library</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Garden of Gethsemane</p><p class = 'middle'>New Testament Stories</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Is Risen </p><p class = 'middle'>New Testament Stories</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Ascends into Heaven</p><p class = 'middle'>New Testament Stories</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Christ: Hallelujah</p><p class = 'middle'>mormon.org</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Christ has Risen</p><p class = 'middle'>The Lamb of God</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Trials of Jesus</p><p class = 'middle'>New Testament Stories</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>But whom say ye that I am?</p><p class = 'middle'>New Testament Stories</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Cleanses the Temple</p><p class = 'middle'>New Testament Stories</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Some Jews Try to Trap Jesus</p><p class = 'middle'>Bible Videos</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Lord, Is It I?</p><p class = 'middle'>President Dieter F. Uchtdorf</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Christ\'s Authority is Questioned</p><p class = 'middle'>Bible Videos</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Trial of Jesus</p><p class = 'middle'>Matthew 26:57-75</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Loves Children</p><p class = 'middle'>Matthew 18:1-11; Mark 9:38-42</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The First Sacrament </p><p class = 'middle'>New Testament Stories</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Blesses the Children </p><p class = 'middle'>New Testament Stories</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Hour is at Hand</p><p class = 'middle'>Matthew 26:45-57</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Feed My Sheep</p><p class = 'middle'>Elder Jeffrey R. Holland</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Teaches about Prayer </p><p class = 'middle'>New Testament Stories</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus is Born</p><p class = 'middle'>Luke 2:8-18</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Lord\'s Triumphal Entry into Jerusalem </p><p class = 'middle'>Bible Videos</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Is Resurrected</p><p class = 'middle'>John 20:3-18</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Brings Lazarus Back to Life </p><p class = 'middle'>New Testament Stories</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Resurrected Lord Appears to Mary</p><p class = 'middle'>John 20:3-18</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Sermon on the Mount: The Beatitudes</p><p class = 'middle'>Matthew 5:3-16</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Teaches the Woman at the Well</p><p class = 'middle'>John 4:5-29</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>This day is this scripture fulfilled in your ears.</p><p class = 'middle'>Luke 4:15-30</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Raises The Son of The Widow of Nain </p><p class = 'middle'>Bible Videos</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Is Laid in a Tomb</p><p class = 'middle'>Matthew 27:57-60</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Thou Art the Christ</p><p class = 'middle'>Matthew 16:13-19</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Turns Water into Wine</p><p class = 'middle'>John 2:1-12</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Tells the Story of the Prodigal Son</p><p class = 'middle'>Luke 15:11-32</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>The Last Supper</p><p class = 'middle'>Bible Videos</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>Jesus Calls Twelve Apostles to Preach and Bless Others</p><p class = 'middle'>Bible Videos</p></a></div>" , "<div class='textinmiddle'><a class = 'small'><p class = 'top'>My topic</p><p class = 'middle'>Brother Dallin L. Stephens</p></a></div>" ];

var JesusImageNumber = ["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","025","026","027","028","029","030","031","032","033","034","035","036","037","038","039","040","041","042","043","044","045","046","047","048","049","050","051","052","053","054","055","056","057","058","059","060","061","062","063","064","065","066","067","068","069","070","071","072","073","074","075","076","077","078","079","080","081","082","083","084","085","086","087","088","089","090","091","092","093","094","095","096","097","098","099","100","101","102","103","104","105","106","107","108","109","110","111"];

var spriteSource = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAGJAQMAAABSK3KDAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAADlJREFUeNrtwTEBAAAAwqD1T20ND6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAOwOIoQABlnB/ewAAAABJRU5ErkJggg==";

// var step = Math.floor(Math.random()*(110+1)); This includes step 0 and the left number is the highest number than can be drawn

// NOTE: If the big image does not show up when hovering over the small video image, then fix it the following below. You may need to check if maxresdefault.jpg or hqdefault works for the that image.

// if (i == 4 || i == 5 || i == 6) {preVideoURL = 'http://images.weserv.nl/?url=i.ytimg.com/vi/'; postVideoURL = '/hqdefault.jpg&trim=20'; postSmallVideoURL = '/mqdefault.jpg'; }

var preVideoURL = 'http://images.weserv.nl/?url=i.ytimg.com/vi/'; var postVideoURL = '/maxresdefault.jpg'; var postSmallVideoURL = '/mqdefault.jpg';

var mycode; var step = 0;

var set;

var GoORstop;

var video3 = [ 'jKRdlAmmT2k' ,'gGClhOvlJCA' ,'slTa15a3mp0' ,'LLlbPNrpB54' ,'OzvxcU9TVMU' ,'mOoq9i-UiCM' ];

var alternativePicture=[];

alternativePicture[3]="http://www.healthiswealthofheart.com/wp-content/uploads/2015/08/horse.jpg"; 

function slideit(nextPrev) {

// step = localStorage.getItem('step'); // Get Item from LocalStorage

if (nextPrev == -1 && step > -2) {step = step - 2;}

if (step == -1) {step = 110+video3.length;}

if (step == -2) {step = 109+video3.length;}

if (step == 111+video3.length) {step=0}

if(step<37) {set = "firstsetjesus-"}

else if(step>=37 && step<74) {set = "secondsetjesus-"}

else if(step>=74 && step<111) {set = "thirdsetjesus-"}

if(step<111) {mycode = "<img class='" + set + JesusImageNumber[step] + "' src = '" + spriteSource + "' border='0' />";} 

else if ( step=='undefined'  || step==114 ) {g = step - 111; mycode = "<img style='position: relative; top:28px; width:700px; height:393px' src='" + alternativePicture[g] + "' border='0' />";}

else {w = step - 111; mycode = "<img style='position: relative; top:28px; width:700px; height:393px' src='" + preVideoURL + video3[w] + postVideoURL + "' onerror=\"this.src='" + preVideoURL + video3[w] + "/hqdefault.jpg&trim=20'\" border='0' />";}

document.getElementById("demo").innerHTML = mycode; KeepImageBorderColor();

if (q==2) {document.getElementById('ChangeText2').innerHTML = Explain3[step]; document.getElementById('borderForCenterTextinBox2').style = 'border-style: solid; border-color: #000000; border-width: 3px';}

if(step<(110+video3.length) || nextPrev == -1) step = Number(step) + 1;

else step=0;
            
localStorage.setItem('step', step);

if (nextPrev == -1) {pauseSlides();}

if (nextPrev == 1) {pauseSlides();}

GoORstop = setTimeout(slideit,2500);
    
}

function pauseSlides() {clearTimeout(GoORstop);}

function myFunction(x) {

var text = "";
    for (var i = 0; i < NumberOfVideos; i++) {
if ( i=='undefined' || i==number.indexOf(4) || i==number.indexOf(9) || i==number.indexOf(15) ) { continue; }
text += '<div class="rightcolumn1">' + '<div class = "crop"><a><img src="' + preVideoURL + video[i] + postSmallVideoURL + '" alt="" /></a></div>' + '<a onmouseover="ClosePreviousPlayPauseNext2(); BigFunction(2,'+x+'); document.getElementById(PlayButton['+i+']).src=\'./buttons/GreenPlayButton.png\';' + 'document.getElementById(\'Big\').src=\'' + preVideoURL + video[i] + postVideoURL + '\';' + 'document.getElementById(\'Big\').onerror = function() {document.getElementById(\'Big\').src=\'' + preVideoURL + video[i] + '/hqdefault.jpg&trim=20\';};' + 'document.getElementById(\'ChangeText\').innerHTML = Explain['+i+']"' + 'onmouseout="BigFunction(1,'+x+'); document.getElementById(PlayButton['+i+']).src=\'./buttons/TransparentImage.png\';' + 'document.getElementById(\'Big\').src=\'./buttons/TransparentImage.png\';' + 'document.getElementById(\'ChangeText\').innerHTML = \'\'">' + '<img onclick = "n=1; myFunctionB(); myFunction2B(); myFunction3B(); detectTouchMouse(number['+i+']);" id="' + PlayButton[i] + '" src="./buttons/TransparentImage.png" class="rightcolumn2" alt="" border="0" /></a></div>';

    }

    document.getElementById("shuffle").innerHTML = text;

}

myFunction();

function myFunctionB() {

var text = "";
    for (var i = 0; i < NumberOfVideos; i++) {
if ( i=='undefined' || i==number.indexOf(4) || i==number.indexOf(9) || i==number.indexOf(15) ) { continue; }
text += '<div class="rightcolumn1">' + '<div class = "crop"><a><img src="' + preVideoURL + video[i] + postSmallVideoURL + '" alt="" /></a></div>' + '<a onmouseover="ClosePreviousPlayPauseNext2(); document.getElementById(PlayButton['+i+']).src=\'./buttons/GreenPlayButton.png\';' + 'document.getElementById(\'borderForCenterTextinBox2\').style = \'border-style: solid; border-color: #000000; border-width: 3px\';' + 'document.getElementById(\'ChangeText2\').innerHTML = Explain['+i+']"' + 'onmouseout="document.getElementById(PlayButton['+i+']).src=\'./buttons/TransparentImage.png\';' + 'document.getElementById(\'borderForCenterTextinBox2\').style = \'\';' + 'document.getElementById(\'ChangeText2\').innerHTML = \'\'">' + '<img onclick = "n=1; detectTouchMouse(number['+i+']);" id="' + PlayButton[i] + '" src="./buttons/TransparentImage.png" class="rightcolumn2" alt="" border="0" /></a></div>';

    }

    document.getElementById("shuffle").innerHTML = text;

}
