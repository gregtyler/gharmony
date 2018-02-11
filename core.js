(function(){
// Analytics
var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//analytics.gregtyler.co.uk/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '2']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

// Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=181777688653627";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

gHarmony = {
    link: 'http://twitter.com/gregtyler',
    age: function() {
        var d=new Date();
        age = d.getFullYear() - 1992;
        if(d.getMonth()>=8 && d.getDate()>=17) age++;
        return age;
    },
    init: function() {
        document.getElementById('age-field').innerHTML = gHarmony.age();
        gHarmony.spotlight.update(0);
    },
    spotlight: {
        list: ['greg1','greg2','greg3'],
        left: function() {
            var img = document.getElementById('spotlight-img'),
                curr = parseInt( img.getAttribute('data-user') );
            curr--;
            gHarmony.spotlight.update(curr);
        },
        right: function() {
            var img = document.getElementById('spotlight-img'),
                curr = parseInt( img.getAttribute('data-user') );
            curr++;
            gHarmony.spotlight.update(curr);
        },
        update: function( to ) {
            var img = document.getElementById('spotlight-img'),
                lights = document.getElementById('spotlight-lights'),
                l = gHarmony.spotlight.list.length;
            if(to<0) to += l;
            while(to>=l) to -= l;
            
            document.getElementById('spotlight-deets').style.opacity = 0.1;
            setTimeout( function() {
                img.src = 'img/' + gHarmony.spotlight.list[to] + '.png';
                img.addEventListener('load',function(){
                    img.setAttribute('data-user', to);
                    
                    for( i in lights.children ) {
                        if( typeof lights.children[i] !== 'object' ) continue;
                        if( i == to ) {
                            lights.children[i].classList.add('active');
                        } else {
                            lights.children[i].classList.remove('active');
                        }
                    }
                    
                    document.getElementById('spotlight-deets').style.opacity = 1;
                });
            }, 250 );
        }
    },
    quiz: {
        questions: [{
            q:'Are you male, or female?',
            a:['Male','Female'],
            c:1
        },{
            q:'Are you interested in men, women, or both?',
            a:['Men','Women','Both'],
            c:[0,2]
        },{
            q:'How old are you?',
            a:['20&ndash;30 (ish)','Other'],
            c:0
        },{
            q:'Where do you currently reside?',
            a:['Edinburgh','Somewhere else'],
            c:0
        }],
        current: -1,
        init: function() {
            gHarmony.quiz.current = -1;
            gHarmony.quiz.next();
        },
        next: function() {
            var curr = (++gHarmony.quiz.current),
                o = gHarmony.quiz.questions[curr],
                quizzer = document.getElementById('quizzer');
            
            // Are we done?? Result!
            if( !o ) return gHarmony.quiz.success();
                
            // Clear the quizzer
            quizzer.innerHTML = '';
            // Make the question
            var q = document.createElement('h3');
            q.setAttribute('class','question');
            q.innerHTML = o.q;
            quizzer.appendChild(q);
            // Make the answers
            for( i in o.a ) {
                var a = document.createElement('a');
                a.setAttribute('data-answer',i);
                a.classList.add('answer');
                if( o.a.length === 3 ) a.classList.add('answer-3');
                a.innerHTML = o.a[i];
                a.addEventListener( 'click', gHarmony.quiz.click );
                quizzer.appendChild(a);
            }
        },
        click: function() {
            var answer = this.getAttribute('data-answer'),
                o = gHarmony.quiz.questions[gHarmony.quiz.current];
            if( typeof o.c === 'object' || typeof o.c === 'array' ) {
                var correct = (o.c.join(',').indexOf( answer )>-1);
            } else {
                var correct = (o.c == answer);
            }
            // Act suitably
            if( correct ) {
                gHarmony.quiz.next();
            } else {
                gHarmony.quiz.fail();
            }
        },
        fail: function() {
            document.getElementById('quizzer').innerHTML = '<h3>No matches found</h3><p>Sorry, we couldn\'t find any suitable matches for you.<br><a href="" onclick="gHarmony.quiz.init();return false;">Try again?</a></p>';
        },
        success: function() {
            var q = document.getElementById('quizzer');
            q.innerHTML = '<h3 class=searching><img src="img/loader.gif" alt="" /> Searching for your perfect match! Please wait...</h3>';
            setTimeout(function(){
                q.innerHTML = '<h3 class=searching>1 match found!</h3>\
                <p>Success! We think this chap would be perfect for you!</p>\
                <img src="img/gregbig.jpg" alt="Your match is Greg Tyler!" style="width:100%;" />\
                <div style="text-align:center;">Greg Tyler, ' + gHarmony.age() + ' year old male from Edinburgh<br><br>\
                Like what you see? <a href="' + gHarmony.link + '" target="_blank">Get in touch with Greg</a>\
                </div>';
            }, 2000);
        }
    }
}

window.gHarmony = gHarmony;
})();