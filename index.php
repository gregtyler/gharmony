<!doctype html>
<html>
<head>
    <!-- I forgot to put anything funny in the souece code. Sorry. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>gHarmony</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans|Ledger|Rancho' rel='stylesheet' type='text/css'>
    <link href='style.css' rel='stylesheet' type='text/css'>
    
    <meta name="twitter:card" value="summary" />
    <meta name="twitter:title" value="gHarmony" />
    <meta name="twitter:url" content="http://gharmony.gregtyler.co.uk/" />
    <meta name="twitter:description" value="gHarmony was started out of a simple dissatisfaction about online dating - a severe lack of people getting me as a match. Our philosophy is that every straight, single woman in Edinburgh should be matched to me on online dating services." />
    <meta name="twitter:image" value="http://gharmony.gregtyler.co.uk/img/bg.jpg" />
    <meta name="twitter:site" value="@gregtyler" />
    <meta name="twitter:creator" value="@gregtyler" />
    <meta property="og:site_name" content="Greg Tyler" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://gharmony.gregtyler.co.uk/" />
    <meta property="og:title" content="gHarmony" />
    <meta property="og:description" content="gHarmony was started out of a simple dissatisfaction about online dating - a severe lack of people getting me as a match. Our philosophy is that every straight, single woman in Edinburgh should be matched to me on online dating services." />
    <meta property="og:image" content="http://gharmony.gregtyler.co.uk/img/bg.jpg" />
</head>
<body>
<div class=wrapper>
    <header>
        <div style="float:right;">
            <div class="fb-like" data-href="http://gharmony.gregtyler.co.uk/" data-width="450" data-layout="button_count" data-show-faces="false" data-send="false"></div>
        </div>
        <h1>gHarmony</h1>
        <h2>Improving the happiness of an entire person</h2>
    </header>
    
    <div class=signup>
        <h3>Signup now!</h3>
        <p>Create your <strong>free</strong> account to start meeting Greg.</p>
        <div class=offer>
            <strong>Short-time offer</strong><br>
            <a href="match-finder.php">Click here</a> to find matches right now without even creating an account!
        </div>
        <div class=form-item>
            <input type=text id=f_name placeholder="Full name" />
        </div>
        <div class=form-item>
            <input type=text id=f_email placeholder="Email" />
        </div>
        <div class=form-item>
            <input type=password id=f_password placeholder="Password" />
        </div>
        <div class=form-item>
            <a href="match-finder.php" class=button>Sign up!</a>
        </div>
    </div>
    
    <div class=spotlight>
        <div style="padding: 0.7em 1em;position:relative;">
            <a class="spotlight-left" onclick="gHarmony.spotlight.left()">&laquo;</a>
            <a class="spotlight-right" onclick="gHarmony.spotlight.right()">&raquo;</a>
            <ul id=spotlight-lights class=spotlight-lights>
                <li onclick="gHarmony.spotlight.update(0)">
                <li onclick="gHarmony.spotlight.update(1)">
                <li onclick="gHarmony.spotlight.update(2)">
            </ul>
            <div id=spotlight-deets>
                <h3>Greg Tyler</h3>
                <div><img id=spotlight-img data-user=0 /></div>
                <div><span id=age-field>21</span> year old male from Edinburgh</div>
            </div>
        </div>
        <h3 class=spotlight-title>
            Meet some of our amazing members!
        </h3>
    </div>
</div>
<div class=details>
    <h2>How it works</h2>
    <p>When you create your account, we ask a few basic questions about your likes and interests. Using these, we work out which of our suitors matches you best!</p>
    
    <h2>Am I likely to find any matches?</h2>
    <p>It all depends on who you are! But if you've got the right credentials, we guarantee to show you everyone single person in our database that we think will match you well. If you're having trouble getting matches, consider changing your personality to be more pleasing to others.</p>
    
    <h2>A word from our founder, Greg Tyler</h2>
    <figure>
        <blockquote>gHarmony was started out of a simple dissatisfaction about online dating - a severe lack of people getting me as a match. Our philosophy is that every straight, single woman in Edinburgh should be matched to me on online dating services. We knocked this together in an afternoon so if it doesn't work, that's pretty understandable.</blockquote>
        <figcaption>&mdash; Greg Tyler, Founder and Lead Developer</figcaption>
    </figure>
    
    <h2>Is this some kind of joke?</h2>
    <p>Well, yes. <em>(See also: most of the rest of the site)</em></p>
</div>
<div id="fb-root"></div>
<script src="core.min.js"></script>
<script>gHarmony.init();</script>
</body>
</html>