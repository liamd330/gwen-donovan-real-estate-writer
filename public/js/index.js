var samplePhotoLinks = ["img/shopping-mecca-web.gif", "img/planting-roots-web.gif", "img/keeping-it-simple-web.gif"];

var counter = 0;

function previousCounter() {
  
  if (counter === 0) {
    counter = 2;
  }
  else if (counter !== 0){
  counter--;
  }
  
  document.getElementById("picture").src =
    samplePhotoLinks[counter];
}

function nextCounter() {
  
  if (counter === 2) {
    counter = 0;
  }
  else if (counter !== 2) {
    counter++;
  }
 
   document.getElementById("picture").src = samplePhotoLinks[counter];
 }

function loadMore() {
  $("#main-section").html(
  
    "<div id=samples>" +
    
    "<center>" +
    "<img class=img-responsive src=img/samples-text-web.gif>" +
    "</center>" +
    
    "</br>" +
    "</br>" +
    
    
    "<div id=sample-picture>" +
    
    "<img id=picture class=img-responsive src=" + 
    
    samplePhotoLinks[0] +
    
    ">" +
    
    "</div>" +
    

    "</br>" +
    
   
   "<button onClick=previousCounter() id=previous>Previous</button>" +
   
    
  
   "<button onClick=nextCounter() id=next>Next</button>" +
   "</br>" +
    "</br>" +
    
 "</br>" +
    
   
 
    
              "<img class=img-responsive src=http://i1230.photobucket.com/albums/ee500/liamd330/biophilia_zps1eohh8ia.gif>" +
       "</br>" +
    "</br>" +
     "<img class=img-responsive src=http://i1230.photobucket.com/albums/ee500/liamd330/style-and-sensibility_zpsst4ljrut.gif>" +
  
   "</br>" +
  
    "<hr>" +
    "</br>" +
    
    "</br>" +

 "<iframe width=700 src=http://gwendonovan.com/id13.html></iframe>"  +
    "</br>" +
    "</br>" +
    "<hr>" +
    "</br>" +
    "</br>" +
"<iframe width=700 src=http://www.turpinrealtors.com/blog/#.VzJgdeTBQ7xg/></iframe>"  +
     "</br>" +
    "</br>" +
    "<hr>" +
    "</br>" +
    "</br>" +
    "<iframe width=700 src=http://www.turpinrealtors.com/communities></iframe>"  +
    "<p>(Click on any town picture and then the 'About' tab to read sample)</p>" +
    
    "</div>"
   
  ); 
}



$(document).ready(function(){
  
  
$("#home-button, #home-bottom").click(function(){
  
  $("#main-section").html(
  "<div id=home2>" +
  "<div class=title>" +
  "<h2>Gwen Donovan</h2>" +
   "<h3>Luxury Real Estate Writer</h3>" +
   "</div>" +
    "</br>" +
    "<div class=central-image>" +
    "<img class=img-responsive src=img/monopoly-web.gif>" +
    "</div>" +
    "</br>" +
 
 " </div>"
    
  ); });
  
$("#about-button, #about-bottom").click(function(){
  
  $("#main-section").html(
  
    "<div id=about>" +
    "<center>" +
    "<img class=img-responsive src=img/about-text-web.gif>" +
    "</center>" +
    "<div class=list>" +
    
    "</br>" +

    "<h4>Real Estate Writer Specializing In:</h4>" +
    
    "<ul>" +
    "<li>Writing on multiple topics with expertise and accuracy</li>" +
    "<li>SEO</li>" +
    "<li>Blogging</li>" +
    "<li>Interviewing</li>" +
    "<li>Reporting</li>" +
    "<li>Research</li>" +
    "<li>Editing</li>" +
    "<li>Proofreading</li>" +
    "</ul>" +
    "</br>" +
    "</div>" +
    
      "<div id=pic>" +
    "<img width=40% height=50% align=right class=img-responsive src=img/gwen-web.gif>" +
    "</br>" +
    
    "</div>" +
    "</br>" +
    "<div class=about-content>" +
    "<p>Thanks for stopping by.  I'm Gwen Donovan, a freelance writer based in Sparta, New Jersey.  My specialties include real estate, architecture, new home construction, antiques, consumer advice, executive profiles, design trends, pop culture, the arts and interior design.</p>" +
    
"<p>I have over 20 years of writing experience, and I can help you complete your next project on budget and on time.</p>" +

  "<p>Have a look around and thanks again for visiting!</p>" +
    "</div>" +
   
  
    "</div>"
  ); });
  
  
  $("#samples-button, #samples-bottom").click(function(){
  
  $("#main-section").html(
  
    "<div id=samples>" +
    
    "<center>" +
    "<img class=img-responsive src=img/samples-text-web.gif>" +
    "</center>" +
    
    "</br>" +
    "</br>" +
    
    "<div id=sample-picture>" +
    
    "<img id=picture class=img-responsive src=" + 
    
    samplePhotoLinks[0] +
    
    ">" +
    
    "</div>" +
    
    "</br>" +
    "</br>" +
    
   
   "<button onClick=previousCounter() id=previous>Previous</button>" +
   
    
  
   "<button onClick=nextCounter() id=next>Next</button>" +
   "</br>" +
    "</br>" +
    "<button onClick=loadMore() id=loadmore>Load More</button>" +
    "</br>" +
    "<hr>" +
    "</br>" +
    
    "</br>" 


   
  ); });
 
  
    
   $("#clients-button, #clients-bottom").click(function(){
  
  $("#main-section").html(
  
    "<div id=clients>" +
    
    "<center>" +
    "<img class=img-responsive src=img/client-text-web.gif>" +
    "</center>" +
    
    "</br>" +
   
    "<h3>Advertising Agencies</h3>" +
    "<ul>" +
"<li>Jillete Advertising, Tinton Falls, NJ</li>" +
"<li>Graphic Imagery, Warren, NJ</li>" +
"<li>W.T. Quinn, Somerset, NJ</li>" +
"<li>A.J. Ross Creative Media, Monroe, NY</li>" +
    
 "</ul>" +
    "</br>" +
    
    "<h3>Real Estate Companies</h3>" +
    "<ul>" +
    "<li>Turpin Real Estate, Far Hills, NJ</li>" +
    "<li>Weichert, Realtors, Corporate Office, Morris Plains, NJ</li>" +
    "<li>Weichert New Homes</li>" +
    "<li>Weighert Luxury Home Division</li>" +
    "<li>Claremont Realty Group, Summit, NJ</li>" +
    "<li>Burgdorff ERA Realtors, Parsipanny, NJ</li>" +
    "<li>Individual agent publicity, advertising and brochures</li>" +
    "</ul>" +
    "<h3>Publications</h3>" +
    "<ul>" +
    "<li><i>ASPIRE Metro Magazine</i></li>" +
    "<li>Articles about architecture, luxury resort developments and upscale real estate.</li>" +
    "<li><i>The Star Ledger</i></li>" +
    "<li>Special sections including:</li>" +
    "<li>Real Estate Marketplace</li>" +
    "<li>Bride and Groom</li>" +
    "<li>Best of New Jersey</li>" +
    "<li>Discover New Jersey Arts</li>" +
    "<li>Gracious Living</li>" +
    "<li>New Jersey Sophisticate</li>" +
    "<li>Last-Minute Gift Guide</li>" +
    "<li>Holiday Traditions</li>" +
    "<li>Home and Garden</li>" +
    "<li>New Jersey Country Life</li>" +
    "</ul>" +
    "</ul>" +
    "</br>" +
    
"<h3>Books</h3>" +
    "<ul>" +
"<li>Sparta: Images of America, Author (Arcadia Publishing: available on <a href=https://www.amazon.com/Sparta-Images-America-Gwen-Donovan-ebook/dp/B0099UB6MS?ie=UTF8&keywords=sparta%20nj%20book&qid=1462921480&ref_=sr_1_1&sr=8-1>Amazon</a>)</li>" +
"<li>Contributing Writer for New Jersey Country Houses, The Somerset Hills, Volumes One and Two</li>" +

    
 "</ul>" +
   
    "</div>"
   
  ); });
  
  
  $("#contact-button, #contact-bottom").click(function(){
  
  $("#main-section").html(
  
    "<div id=contact>" +
    "<center>" +
    "<img class=img-responsive src=img/contact-text-web.gif>" +
    "</center>" +
    "</br>" +
    "</br>" +
    
    "<p>Feel free to call me at 973-726-9539 or send an email to: gwendonovan@mindspring.com.</p>" +
    
   
    
"<p>I look forward to hearing from you.</p>"
 
   
  ); });
  
});