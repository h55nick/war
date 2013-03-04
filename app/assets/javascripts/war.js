/*Setting both hands as global for simplicity sake*/
/*could pass them back and forth a million times- not worth it*/
phand =[];
chand =[];
pile =[];
outcomes =[0,0,0,0];//Modeling

var timer;

$(function(){
  dealfulldeck();/* Code near Bottom ctrl f -> "makedeck" !*/
  $('#warbtn').click(war_me_bro);
  $('body').keydown(checkenter);//Allows enter to regestered for war
  $('#autoplaybtn').click(autoplay);
  $('#stoptimer').click(nt);
});

function check_end(){
  if(phand.length + chand.length + pile.length != 52){
    console.log("Error #55");
  }
  if (chand.length == 0) {//Player wins
    alert("You have won!");
    $('#battleoutcome').text("You won the war!");
    gameover(true);
  }else if(phand.length ==0){//Computer wins
      alert("You have won!");
      $('#battleoutcome').text("You have lost the war!");
      gameover(false);
  }else{
    //Don't really need this means game continues!
  };
}


function war_me_bro(){
  hideholder();
  var b_c = [];
  /*alert("War me bro");*/
  b_c = [phand.shift(),chand.shift()]; /*battle cards */
  changeviewcards(b_c);//Update view

  if(b_c[0][0] > b_c[1][0]){//player wins
    phand.push(b_c[0],b_c[1]);//player wins so add to players hand
    $('#battleoutcome').text("You won this battle but there is another!!");
    outcomes[0]++;
    out = true;
  }
  else if(b_c[0][0] < b_c[1][0]){//Comp wins
    chand.push(b_c[0],b_c[1]);//comp wins so add to comp hand
    $('#battleoutcome').text("Javascript won. Again.");
    outcomes[1]++;
    out = false;
  }
  else{//TIE AHHHH
    tie(b_c);
    outcomes[2]++;
    out = "Error"
  };

  check_end();//Checking to see if the game is over.
  return out;
}//End WMB


function tie(tiecards) {
  phand = _.shuffle(phand);
  chand = _.shuffle(chand);
  //alert("Tie Baby");
  pile.push(tiecards[0],tiecards[1]);
  pile.push(phand.shift(),chand.shift()); //Add two discards to pile

  check_end();//Need to check if the players ran out of cards on the pull (auto loss according to wiki)

  outcome = war_me_bro();//Battle the next one (two battle cards get added auto unless another war. //added to pile.)
  if(outcome){
    phand = phand.concat(pile);
    pile=[];
  }else if(!outcome){
    chand = chand.concat(pile);
    pile =[];
  }else{
    alert("Error #3erg4");
  }

}


/* -------------Push TO FRONT END-------------------------*/
function hideholder(){
  $('.card').css("background","#FFF"); return true;
}
function showholder(){
    $('.card').css("background-image","url(assets/TheCardBackWeb.jpg");
}
function changeviewcards(cards){

  $('.battleholder .card1n').text(getfacecardletter(cards[0][0]));
  $('.battleholder .card2n').text(getfacecardletter(cards[1][0]));
  $('.battleholder .card1s').css("background-image","url(assets/"+getsuitimage(cards[0][1])+")");
  $('.battleholder .card2s').css("background-image","url(assets/"+getsuitimage(cards[1][1])+")");
}

function getsuitimage(suit){
  if(suit == "H"){
    src= "card_heart.png";
  }else if(suit == "C"){
    src= "card_club.png";
  }else if (suit=="D"){
    src= "card_diamond.png";
  }else if(suit=="S"){
    src= "card_spade.png";
  }else{
    src= "Error with suit SRC";
  }
  return src;
}
function getfacecardletter(cardnumber){
  var outvalue;
  switch(cardnumber){
     case 11:
        outvalue = "J";
        break;
    case 12:
        outvalue = "Q";
        break;
    case 13:
      outvalue = "K";
    break;
    case 14:
      outvalue = "A";
      break;
    default:
      outvalue = cardnumber
    }
return outvalue;
}



/*  BASIC FUNC    ####### WORKING ########*/
function checkenter(){
var k;
  k = event.keyCode;
  if(k == 13){
    war_me_bro();
    return true;
  }
}
function nt(){
   clearInterval(timer);
   $("#stoptimer").removeClass("hide");
}
function autoplay(){
  nt();
  war_me_bro();
  $("#stoptimer").addClass("hide");
  timer = setInterval(war_me_bro, 1);
}

function gameover(outcome){
  /*alert(outcomes);*/
  dealfulldeck();
  outcomes[3]++;
  storegame(outcome);
  nt();
}


function dealfulldeck(){
  var deck = _.shuffle(makedeck());/*Suffle the deck*/
    /*Reset just in case*/
    phand , chand, pile = [];
    outcomes =[0,0,0,0];
    //Divy the cards
    phand = deck.slice(0,26);
    chand = deck.slice(26,52);
/*Hand has been delt*/
return true;
}

/* This function makes the deck*/
function makedeck(){
  var suits = ["C","D","H","S"];//define 4 suits
  var deck =[];//empty deck
  for(var c = 2; c <=14; c++){/*ALL 13 values (view helper will show 10-13 as [j,q,k,1] */
    for(var s = 0; s <=3;s++){/*Now we need to add suits, this will go to second*/
      deck.push([c,suits[s]]); /*push the array of the value and the suit corrisponding to which number we are one*/
    }
  }
  return deck;
}