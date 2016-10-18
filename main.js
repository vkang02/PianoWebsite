$('li').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

/*
<!DOCTYPE html>
<html lang="en">
    <head>
        
        
        <meta charset="UTF-8" />
        <title>Evergreen Piano Lessons</title>
        <link type = "text/css" href="styles.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!--[if IE]>
            <script src="http://html5shive.googlecode.com/svn/trunk/html5.js"></script>
            <![endif]-->
    </head>
    
    <body>

        <section id="home"> 
            
                <div id="header" style="top: 20%; left: 20%;">
                    <div>
                        <h1 id="title">Evergreen Piano Lessons</h1>
                    </div>
                
                    <div id="nav">
                        <div class="container">
                            <ul class="menu">
                                <li><a href="#about">About</a></li>
                                <li><a href="#instruct">Meet the Instructor</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>  
                </div>
                <img src="http://www.wallpaperhi.com/download/view?resolution=1024x768&file=MTY4MHgxMDUwLzIwMTIwMjAzL2JsYWNrIG1pbmltYWxpc3RpYyBtdXNpYyBwaWFubyBibGFjayBiYWNrZ3JvdW5kIDE2ODB4MTA1MCB3YWxscGFwZXJfd3d3LndhbGxwYXBlcmhpLmNvbV8yMi5qcGc=&name=YmxhY2tfbWluaW1hbGlzdGljX211c2ljX3BpYW5vX2JsYWNrX2JhY2tncm91bmRfMTY4MHgxMDUwX3dhbGxwYXBlcg" style="float:right;"/>
        </section>
        
        <section id="about"> 
            
                    <div>
                        <div id="content">
                        <p>ALL AGES AND LEVELS WELCOME</br>
                        PARENTS, IF YOUR CHILD CAN (AT LEAST) WRITE</br>
                        DO – RE – MI – FA – SOL – LA – SI</br>
                        I CAN TEACH HIM / HER IN FOUR LESSONS</br>
                        HOW TO WRITE, READ MUSIC AND PLAY PIANO</br>
                        AS EARLY AS AGE 3 OR 4</br>
                        EASY, FAST, CLASSIC ITALIAN METHOD WITH THEORY & SOLFEGGIO.</br>
                        My program is designed for each student’s private one hour lesson and once the</br>
                        pieces are well studied, they will be digitally recorded on KEEPSAKE CD’s</br>
                        to chronicle your child’s musical development.  Also consider copies of CD’s</br>
                        make wonderful gift for grandparents and friends.</br>
                        YOUR CHILD WILL HAVE LESSONS IN A RECORDING STUDIO.</br>
                        BIG ROOM, BABY GRAND PIANO… (not keyboard) and with my compliments,</br>
                        Sheet Music, Recordings, and CD’s, will be provided FREE OF CHARGE.</br>
                        MOREOVER, IF YOUR CHILD STOPPED TAKING LESSONS SOME YEARS AGO,</br>
                        I FIRMLY RECOMMEND TO START AGAIN, AS YOU KNOW,</br>
                        GROWING UP THEY BECOME MORE MATURE.</p>
                    </div>
                        </div>
            
            </section>

            <section id="instruct">
                <div id="caruana">
                    <h1>Giuseppe Caruana</h1>
                    <img src="giuseppe_caruana2.jpg"/>
                </div>
            </section>

            <section id="contact">
                <div>
                    <p>TO SET AN APPOITMENT CALL:

                        (408) 238-4324

                        Audition Recording Center

                        Maestro GIUSEPPE CARUANA

                        3624 COBBERT Dr. SAN JOSE Ca. 95148</p>
                </div>
            </section>

    <footer>
        
        <h3>Evergreen Piano Lessons 2014</h3>

    </footer>
            
                

    </body>
</html>*/