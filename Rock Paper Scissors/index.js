//Checking empty name fields in the step 1 starts here
function checkemptyname() {
  var userinput1 = document.getElementById("fname1").value;
  if (userinput1 == "") {
    alert("name is required");
  } else {
    document.getElementsByClassName("div1")[0].style.marginTop = "-100%";
    document.getElementsByClassName("div1")[0].style.transition = "3s";
  }
}

function startplaying() {
  var userinput1 = document.getElementById("fname1").value;
  var num = Math.random() * 3;
  var com_choice = Math.ceil(num);
  console.log(com_choice);

  document.getElementById("rock").addEventListener("click", function () {
    if (com_choice == 1) {
      document.getElementById("cont2").src = "rock.png";
      document.getElementById("comp-input").innerHTML = "Computer chosed Rock";
    } else if (com_choice == 2) {
      document.getElementById("cont2").src = "paper.png";
      document.getElementById("comp-input").innerHTML = "Computer chosed Paper";
    } else {
      document.getElementById("cont2").src = "scissors.png";
      document.getElementById("comp-input").innerHTML =
        "Computer chosed Scissors";
    }

    document.getElementById("cont1").src = "rock.png";
    var choice = 1;

    document.getElementById("result").classList.add("answer");
    document.getElementById("user-input").innerHTML = "U chosed Rock";
    if (choice == com_choice) {
      document.getElementById("result").innerHTML = "game tie";
    } else if (choice == 1 && com_choice == 3) {
      document.getElementById("result").innerHTML = userinput1 + " won";
    } else {
      document.getElementById("result").innerHTML = "computer won";
    }
  });

  document.getElementById("paper").addEventListener("click", function () {
    if (com_choice == 1) {
      document.getElementById("cont2").src = "rock.png";
      document.getElementById("comp-input").innerHTML = "Computer chosed Rock";
    } else if (com_choice == 2) {
      document.getElementById("cont2").src = "paper.png";
      document.getElementById("comp-input").innerHTML = "Computer chosed Paper";
    } else {
      document.getElementById("cont2").src = "scissors.png";
      document.getElementById("comp-input").innerHTML =
        "Computer chosed Scissors";
    }

    document.getElementById("cont1").src = "paper.png";
    var choice = 2;

    document.getElementById("result").classList.add("answer");
    document.getElementById("user-input").innerHTML = "U chosed Paper";
    if (choice == com_choice) {
      document.getElementById("result").innerHTML = "game tie";
    } else if (choice == 2 && com_choice == 3) {
      document.getElementById("result").innerHTML = "computer won";
    } else {
      document.getElementById("result").innerHTML = userinput1 + " won";
    }
  });

  document.getElementById("scissors").addEventListener("click", function () {
    if (com_choice == 1) {
      document.getElementById("cont2").src = "rock.png";
      document.getElementById("comp-input").innerHTML = "Computer chosed Rock";
    } else if (com_choice == 2) {
      document.getElementById("cont2").src = "paper.png";
      document.getElementById("comp-input").innerHTML = "Computer chosed Paper";
    } else {
      document.getElementById("cont2").src = "scissors.png";
      document.getElementById("comp-input").innerHTML =
        "Computer chosed Scissors";
    }
    document.getElementById("cont1").src = "scissors.png";
    var choice = 3;

    document.getElementById("result").classList.add("answer");
    document.getElementById("user-input").innerHTML = "U chosed Scissors";
    document.getElementById("cont2").src = "scissors.png";
    if (choice == com_choice) {
      document.getElementById("result").innerHTML = "game tie";
    } else if (choice == 3 && com_choice == 2) {
      document.getElementById("result").innerHTML = userinput1 + " won";
    } else {
      document.getElementById("result").innerHTML = "computer won";
    }
  });
}

// function playagain2() {
//   // $('.div2').load(self);
//   $(".div2").load(window.location.href + " .div2");

//   // window.location.reload();
//   // setTimeOut(()=>{document.getElementsByClassName("div1")[0].style.display="none"},10);
//   // document.getElementsByClassName("div2").innerHTML = document.getElementsByClassName("div2").innerHTML ;
// }
