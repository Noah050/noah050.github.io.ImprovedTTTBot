    var turn;
    var moveCount = 0;
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;
    var n5 = 0;
    var n6 = 0;
    var n7 = 0;
    var n8 = 0;
    var n9 = 0;
    var gameEnd = false;
    var player1Wins = 0;
    var player2Wins = 0;
    var player1WinLock = 0;
    var player2WinLock = 0;
    function firstTurn() {
        if (gameEnd != true) {
        turn = 1;
        document.querySelector(".playerTurn").innerHTML = "1 Player Mode";
        } 
    }
    function p1Color() {
      var c1 = document.querySelector("#p1Color").value;
      var x, i;
      x = document.querySelectorAll(".bx-x");
      for (i = 0; i < x.length; i++) {
      x[i].style.color = c1;
        }
    }   
    function p2Color() {
        var c2 = document.querySelector("#p2Color").value;
        var x, i;
        x = document.querySelectorAll(".bx-circle");
        for (i = 0; i < x.length; i++) {
        x[i].style.color = c2;
          }
      } 
    function reset() { 
        moveCount = 0;
        gameEnd = false;
        firstTurn();
        n1 = 0;
        n2 = 0;
        n3 = 0;  
        n4 = 0;
        n5 = 0;
        n6 = 0;
        n7 = 0;
        n8 = 0;
        n9 = 0;
        player1WinLock = 0;
        player2WinLock = 0;
        var x, i;
        x = document.getElementsByTagName("i");
        for (i = 0; i < x.length; i++) {
            x[i].style.fontSize = "0px";
        }
        document.querySelector(".playerTurn").innerHTML = "1 Player Mode";
        document.querySelector(".player1Wins").innerHTML = player1Wins + " " + "Wins";
        document.querySelector(".player2Wins").innerHTML = player2Wins + " " + "Wins";
    }
    function square1() {
        if (n1 == 0) {
            moveCount++;
        }
        console.log(moveCount + "a");
       if (turn == 1 && gameEnd != true && n1 == 0) {
           document.querySelector(".x1").style.fontSize = "110px";
           turn = 2;
           n1 = 5;
       } else if (turn == 2 && gameEnd != true && n1 == 0) {
           document.querySelector(".o1").style.fontSize = "85px";
           turn = 1;
           n1 = 2;
       }
    }
    function square2() {
        if (n2 == 0) {
            moveCount++;
        }
        console.log(moveCount + "a");
        if (turn == 1 && gameEnd != true && n2 == 0) {
            document.querySelector(".x2").style.fontSize = "110px";
            turn = 2;
            n2 = 5;
        } else if (turn == 2 && gameEnd != true && n2 == 0) {
            document.querySelector(".o2").style.fontSize = "85px";
            turn = 1;
            n2 = 2;
        }
     }
     function square3() {
        if (n3 == 0) {
            moveCount++;
        }
        console.log(moveCount + "a");
        if (turn == 1 && gameEnd != true && n3 == 0) {
            document.querySelector(".x3").style.fontSize = "110px";
            turn = 2;
            n3 = 5;
        } else if (turn == 2 && gameEnd != true && n3 == 0) {
            document.querySelector(".o3").style.fontSize = "85px";
            turn = 1
            n3 = 2;
        }
     }
     function square4() {
        if (n4 == 0) {
            moveCount++;
        }
        console.log(moveCount + "a");
        if (turn == 1 && gameEnd != true && n4 == 0) {
            document.querySelector(".x4").style.fontSize = "110px";
            turn = 2;
            n4 = 5;
        } else if (turn == 2 && gameEnd != true && n4 == 0) {
            document.querySelector(".o4").style.fontSize = "85px";
            turn = 1;
            n4 = 2;
        }
     }
     function square5() {
        if (n5 == 0) {
            moveCount++;
        }
        console.log(moveCount + "a");
        if (turn == 1 && gameEnd != true && n5 == 0) {
            document.querySelector(".x5").style.fontSize = "110px";
            turn = 2;
            n5 = 5;
        } else if (turn == 2 && gameEnd != true && n5 == 0) {
            document.querySelector(".o5").style.fontSize = "85px";
            turn = 1;
            n5 = 2;
        }
     }
     function square6() {
        if (n6 == 0) {
            moveCount++;
        }
        console.log(moveCount + "a");
        if (turn == 1 && gameEnd != true && n6 == 0) {
            document.querySelector(".x6").style.fontSize = "110px";
            turn = 2;
            n6 = 5;
        } else if (turn == 2 && gameEnd != true && n6 == 0) {
            document.querySelector(".o6").style.fontSize = "85px";
            turn = 1;
            n6 = 2;
        }
     }
     function square7() {
        if (n7 == 0) {
            moveCount++;
        }
        console.log(moveCount + "a");
        if (turn == 1 && gameEnd != true && n7 == 0) {
            document.querySelector(".x7").style.fontSize = "110px";
            turn = 2;
            n7 = 5;
        } else if (turn == 2 && gameEnd != true && n7 == 0) {
            document.querySelector(".o7").style.fontSize = "85px";
            turn = 1;
            n7 = 2;
        }
     }
     function square8() {
        if (n8 == 0) {
            moveCount++;
        }
        console.log(moveCount + "a");
        if (turn == 1 && gameEnd != true && n8 == 0) {
            document.querySelector(".x8").style.fontSize = "110px";
            turn = 2;
            n8 = 5;
        } else if (turn == 2 && gameEnd != true && n8 == 0) {
            document.querySelector(".o8").style.fontSize = "85px";
            turn = 1;
            n8 = 2;
        }
     }
     function square9() {
        if (n9 == 0) {
            moveCount++;
        }
        console.log(moveCount + "a");
        if (turn == 1 && gameEnd != true && n9 == 0) {
            document.querySelector(".x9").style.fontSize = "110px";
            turn = 2;
            n9 = 5;
        } else if (turn == 2 && gameEnd != true && n9 == 0) {
            document.querySelector(".o9").style.fontSize = "85px";
            turn = 1;
            n9 = 2;
        }
     }
     function winCondition() {
     if (n1 == 5 && n2 == 5 && n3 == 5 || n4 == 5 && n5 == 5 && n6 == 5 || n7 == 5 && n8 == 5 && n9 == 5 || n1 == 5 && n4 == 5 && n7 == 5 || n2 == 5 && n5 == 5 && n8 == 5 || n3 == 5 && n6 == 5 && n9 == 5 || n1 == 5 && n5 == 5 && n9 == 5 || n3 == 5 && n5 == 5 && n7 == 5) {
        document.querySelector(".playerTurn").innerHTML = "You Won";
        gameEnd = true;
         if (player1WinLock == 0) {
        player1Wins += 1;
        player1WinLock = 1;
         }
        }   
      else if (n1 == 2 && n2 == 2 && n3 == 2 || n4 == 2 && n5 == 2 && n6 == 2 || n7 == 2 && n8 == 2 && n9 == 2 || n1 == 2 && n4 == 2 && n7 == 2 || n2 == 2 && n5 == 2 && n8 == 2 || n3 == 2 && n6 == 2 && n9 == 2 || n1 == 2 && n5 == 2 && n9 == 2 || n3 == 2 && n5 == 2 && n7 == 2) {
        document.querySelector(".playerTurn").innerHTML = "You Lost";
        gameEnd = true;
          if (player2WinLock == 0) {
        player2Wins += 1;
        player2WinLock = 1;
        }
     } 
     else if (n1 != 0 && n2 != 0 && n3 != 0 && n4 != 0 && n5 != 0 && n6 != 0 && n7 != 0 && n8 != 0 && n9 != 0) {
        document.querySelector(".playerTurn").innerHTML = "It's A Draw"
        gameEnd = true;
    }

}
   function bot() {
    if (turn == 2 && gameEnd != true) {

        if (n1 + n2 + n3 == 4 && n1 == 0) {square1();winCondition();} else if (n1 + n2 + n3 == 4 && n2 == 0) {square2();winCondition();} else if (n1 + n2 + n3 == 4 && n3 == 0) {square3();winCondition();}
        else if (n4 + n5 + n6 == 4 && n4 == 0) {square4();winCondition();} else if (n4 + n5 + n6 == 4 && n5 == 0) {square5();winCondition();} else if (n4 + n5 + n6 == 4 && n6 == 0) {square6();winCondition();}
        else if (n7 + n8 + n9 == 4 && n7 == 0) {square7();winCondition();} else if (n7 + n8 + n9 == 4 && n8 == 0) {square8();winCondition();} else if (n7 + n8 + n9 == 4 && n9 == 0) {square9();winCondition();}
        else if (n1 + n4 + n7 == 4 && n1 == 0) {square1();winCondition();} else if (n1 + n4 + n7 == 4 && n4 == 0) {square4();winCondition();} else if (n1 + n4 + n7 == 4 && n7 == 0) {square7();winCondition();}
        else if (n2 + n5 + n8 == 4 && n2 == 0) {square2();winCondition();} else if (n2 + n5 + n8 == 4 && n5 == 0) {square5();winCondition();} else if (n2 + n5 + n8 == 4 && n8 == 0) {square8();winCondition();}
        else if (n3 + n6 + n9 == 4 && n3 == 0) {square3();winCondition();} else if (n3 + n6 + n9 == 4 && n6 == 0) {square6();winCondition();} else if (n3 + n6 + n9 == 4 && n9 == 0) {square9();winCondition();}
        else if (n1 + n5 + n9 == 4 && n1 == 0) {square1();winCondition();} else if (n1 + n5 + n9 == 4 && n5 == 0) {square5();winCondition();} else if (n1 + n5 + n9 == 4 && n9 == 0) {square9();winCondition();}
        else if (n3 + n5 + n7 == 4 && n3 == 0) {square3();winCondition();} else if (n3 + n5 + n7 == 4 && n5 == 0) {square5();winCondition();} else if (n3 + n5 + n7 == 4 && n7 == 0) {square7();winCondition();}

        else if (n1 + n2 + n3 == 10 && n1 == 0) {square1();winCondition();} else if (n1 + n2 + n3 == 10 && n2 == 0) {square2();winCondition();} else if (n1 + n2 + n3 == 10 && n3 == 0) {square3();winCondition();}
        else if (n4 + n5 + n6 == 10 && n4 == 0) {square4();winCondition();} else if (n4 + n5 + n6 == 10 && n5 == 0) {square5();winCondition();} else if (n4 + n5 + n6 == 10 && n6 == 0) {square6();winCondition();}
        else if (n7 + n8 + n9 == 10 && n7 == 0) {square7();winCondition();} else if (n7 + n8 + n9 == 10 && n8 == 0) {square8();winCondition();} else if (n7 + n8 + n9 == 10 && n9 == 0) {square9();winCondition();}
        else if (n1 + n4 + n7 == 10 && n1 == 0) {square1();winCondition();} else if (n1 + n4 + n7 == 10 && n4 == 0) {square4();winCondition();} else if (n1 + n4 + n7 == 10 && n7 == 0) {square7();winCondition();}
        else if (n2 + n5 + n8 == 10 && n2 == 0) {square2();winCondition();} else if (n2 + n5 + n8 == 10 && n5 == 0) {square5();winCondition();} else if (n2 + n5 + n8 == 10 && n8 == 0) {square8();winCondition();}
        else if (n3 + n6 + n9 == 10 && n3 == 0) {square3();winCondition();} else if (n3 + n6 + n9 == 10 && n6 == 0) {square6();winCondition();} else if (n3 + n6 + n9 == 10 && n9 == 0) {square9();winCondition();}
        else if (n1 + n5 + n9 == 10 && n1 == 0) {square1();winCondition();} else if (n1 + n5 + n9 == 10 && n5 == 0) {square5();winCondition();} else if (n1 + n5 + n9 == 10 && n9 == 0) {square9();winCondition();}
        else if (n3 + n5 + n7 == 10 && n3 == 0) {square3();winCondition();} else if (n3 + n5 + n7 == 10 && n5 == 0) {square5();winCondition();} else if (n3 + n5 + n7 == 10 && n7 == 0) {square7();winCondition();}
        else {
   
            //First move middle
                     if (n5 == 5 && moveCount == 1) {square1();winCondition();}
                else if (n9 == 5 && n5 == 5 && moveCount == 3) {square3();winCondition();}

            //first move corner

                else if (n1 == 5 && moveCount == 1) {square5();winCondition();}
                else if (n3 == 5 && moveCount == 1) {square5();winCondition();}
                else if (n7 == 5 && moveCount == 1) {square5();winCondition();}
                else if (n9 == 5 && moveCount == 1) {square5();winCondition();}

            //third move opposite corner
                else if (n1 == 5 && n9 == 5 && moveCount == 3) {square2();winCondition();}
                else if (n3 == 5 && n7 == 5 && moveCount == 3) {square2();winCondition();}
                else if (n7 == 5 && n3 == 5 && moveCount == 3) {square2();winCondition();}
                else if (n9 == 5 && n1 == 5 && moveCount == 3) {square2();winCondition();}
            
            //first move edge

                else if (n2 == 5 && moveCount == 1) {square5();winCondition();}
                else if (n4 == 5 && moveCount == 1) {square5();winCondition();}
                else if (n6 == 5 && moveCount == 1) {square5();winCondition();}
                else if (n8 == 5 && moveCount == 1) {square5();winCondition();}

            //third move adjacent edge

                else if (n8 == 5 && n6 == 5 && moveCount == 3) {square7();winCondition();}
                else if (n8 == 5 && n4 == 5 && moveCount == 3) {square7();winCondition();}
                else if (n2 == 5 && n6 == 5 && moveCount == 3) {square7();winCondition();}
                else if (n2 == 5 && n4 == 5 && moveCount == 3) {square7();winCondition();}

                else if (n4 == 5 && n2 == 5 && moveCount == 3) {square7();winCondition();}
                else if (n4 == 5 && n8 == 5 && moveCount == 3) {square7();winCondition();}
                else if (n6 == 5 && n2 == 5 && moveCount == 3) {square7();winCondition();}
                else if (n6 == 5 && n8 == 5 && moveCount == 3) {square7();winCondition();}

            //third opposite corner

                else if (n8 == 5 && n3 == 5 && moveCount == 3) {square9();winCondition();}
                else if (n8 == 5 && n1 == 5 && moveCount == 3) {square7();winCondition();}

                else if (n4 == 5 && n3 == 5 && moveCount == 3) {square1();winCondition();}
                else if (n4 == 5 && n9 == 5 && moveCount == 3) {square7();winCondition();}

                else if (n2 == 5 && n7 == 5 && moveCount == 3) {square1();winCondition();}
                else if (n2 == 5 && n9 == 5 && moveCount == 3) {square3();winCondition();}

                else if (n6 == 5 && n1 == 5 && moveCount == 3) {square3();winCondition();}
                else if (n6 == 5 && n7 == 5 && moveCount == 3) {square9();winCondition();}



                
                else {randomNum()}
        }
      }
}
        function randomNum() {
            var x = Math.floor((Math.random() * 9) + 1);
            if (x == 1 && n1 == 0) {square1();winCondition();} else if (x == 1 && n1 != 0) {bot();winCondition();}
            if (x == 2 && n2 == 0) {square2();winCondition();} else if (x == 2 && n2 != 0) {bot();winCondition();}
            if (x == 3 && n3 == 0) {square3();winCondition();} else if (x == 3 && n3 != 0) {bot();winCondition();}
            if (x == 4 && n4 == 0) {square4();winCondition();} else if (x == 4 && n4 != 0) {bot();winCondition();}
            if (x == 5 && n5 == 0) {square5();winCondition();} else if (x == 5 && n5 != 0) {bot();winCondition();}
            if (x == 6 && n6 == 0) {square6();winCondition();} else if (x == 6 && n6 != 0) {bot();winCondition();}
            if (x == 7 && n7 == 0) {square7();winCondition();} else if (x == 7 && n7 != 0) {bot();winCondition();}
            if (x == 8 && n8 == 0) {square8();winCondition();} else if (x == 8 && n8 != 0) {bot();winCondition();}
            if (x == 9 && n9 == 0) {square9();winCondition();} else if (x == 9 && n9 != 0) {bot();winCondition();}
        }
