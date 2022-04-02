
    const myArray3 = [];
         var numberQuestion = 0;
         var numbercorrectAnswers = 0;

         var time = "off";
         function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
         function indicate(x) {
        myArray3[numberQuestion] = myArray3[numberQuestion].replace(x, "☼");
    }
         function nextQuestion() {
        indicate("category");indicate("type");indicate("difficulty");indicate("question");indicate("correct_answer");indicate("incorrect_answers");
             const myArray2 = myArray3[numberQuestion].split("☼");
             var category = myArray2[1].slice(2, myArray2[1].length - 2);
             var type = myArray2[2].slice(3, myArray2[2].length - 3);
             var difficulty = myArray2[3].slice(3, myArray2[3].length - 3);
             var question = myArray2[4].slice(3, myArray2[4].length - 3);
             while (question.indexOf('&quot') > -1) {
        question = question.replace("&quot;", '"');
    }
             while (question.indexOf('&#039;') > -1) {
        question = question.replace("&#039;", "'");
    }
             var correct_answer = myArray2[5].slice(3, myArray2[5].length - 3);
             var incorrect_answers = myArray2[6].slice(2, myArray2[6].length - 0);
             while (incorrect_answers.indexOf('&quot') > -1) {
        incorrect_answers = incorrect_answers.replace("&quot;", '"');
    }
             while (incorrect_answers.indexOf('&#039;') > -1) {
        incorrect_answers = incorrect_answers.replace("&#039;", "'");
    }
             const Aincorrect_answers = incorrect_answers.split('"');
             const allAnswer = [];
             var count = 0;
             for (var i = 0; i < Aincorrect_answers.length; i++) {
                 if (Aincorrect_answers[i] != "," && Aincorrect_answers[i] != '"' && Aincorrect_answers[i] != '}' && Aincorrect_answers[i] != '{' && Aincorrect_answers[i] != ']' && Aincorrect_answers[i] != '[') {
        allAnswer[count] = Aincorrect_answers[i];
    count++;
                 }
             }
             allAnswer[allAnswer.length] = correct_answer;
             numberQuestion++;

             openAnswers(correct_answer, allAnswer);


             return question;
         }
         function openAnswers(correct, answers) {

        shuffle(answers);
    var x = document.createElement("TABLE");
             x.setAttribute("id", "answerTable");
             x.style.position = "absolute";
             x.style.right = "-230px";
             x.style.top = "220px";
             document.body.appendChild(x);
             for (var i = 0; i < answers.length /2; i++) {
                 var row = x.insertRow(i);
                 for (var k = 0; k < 2; k++) {
                   
                     var cell1 = row.insertCell(k);
                     cell1.setAttribute("id", answers[2 * (x.rows.length - 1) + k]);
                     cell1.className = "myButton"; cell1.style.width = "800px"; cell1.style.textAlign = "center";
                     cell1.innerHTML = answers[2 * (x.rows.length - 1) + k];
                     if (i + 1 > answers.length/2 && answers.length%2 == 1) {
        k++;
    }
                     cell1.onclick = function () {
                         if (this.innerHTML == correct) {
        numbercorrectAnswers++;
    document.getElementById("countAnswers").innerHTML = numbercorrectAnswers;
                             document.getElementById("countAnswers").style.visibility = "visible";

                         }
                         document.getElementById(correct).style.backgroundColor = "forestgreen";
                         document.getElementById(correct).className = "my";

                         setTimeout(function () {
        openQuestion();
    document.getElementById("labelAnswer").parentNode.removeChild(document.getElementById("labelAnswer"));
                             document.getElementById("answerTable").parentNode.removeChild(document.getElementById("answerTable"));
                         }, 1000);

                     }
                 }

             }

         }



         function onLoad() {
             
             var str = "https://opentdb.com/api.php?amount=100";

             const fetchData2 = str;
             //פאצ ראשון לקבלת ליגות
             fetch(fetchData2)
                 .then((resp) => resp.json())
                 .then(function (data) {
        let authors = data;
                     const myArray = JSON.stringify(authors).split("}");
                     myArray[0] = myArray[0].slice(30, myArray[0].length);
                     myArray[0] = "," + myArray[0];
                     for (i = 0; i < myArray.length; i++) {
        myArray3[i] = myArray[i];
    }

                 })
         }

         function openQuestion()
         {
             var stringQustion = nextQuestion();
             var x = document.createElement("H1");
             x.setAttribute("id", "labelAnswer");
             x.innerHTML = stringQustion;
             x.style.marginLeft = "auto";
             x.style.marginRight = "auto";
             x.style.marginTop = "100px";
             x.style.width = "26em";
             document.body.appendChild(x);


         }
         function runOfTime()
         {
        document.getElementById("congrat").style.visibility = "visible";
    document.getElementById("congrat").innerHTML = "good job, you reward " + numbercorrectAnswers + " answers";
             numbercorrectAnswers = 0;
             document.getElementById("countAnswers").style.visibility = "hidden";
             document.getElementById("labelAnswer").parentNode.removeChild(document.getElementById("labelAnswer"));
             document.getElementById("answerTable").parentNode.removeChild(document.getElementById("answerTable"));
             document.getElementById("timer").style.visibility = "hidden";
             document.getElementById("start").value = "play again";
             document.getElementById("start").style.visibility = "visible";



             time = "off";

         }
         function timer(Minutes, Seconds) {
        document.getElementById("start").style.visibility = "hidden";
    document.getElementById("congrat").style.visibility = "hidden";
             if (time == "off") {
        time = "on";
    var seconds = Seconds;
                 var minutes = Minutes;
                 var x = document.getElementById("timer");
                 document.getElementById("timer").style.visibility = "visible";
                 x.innerHTML = cheakNumberLessTen(minutes) + ":" + cheakNumberLessTen(seconds);
                 var cancel = setInterval(incrementSeconds, 1000);
                 function incrementSeconds() {
                     if (seconds == 0 && minutes > 0) {
        seconds = 60;
    minutes -= 1;
                     }
                     else if (seconds > 1 || seconds > 0 && minutes > 0) {
        seconds -= 1;
    }
                     else if (seconds == 1 && minutes == 0) {
        document.getElementById("timer").innerHTML = "";
    runOfTime();
                         clearInterval(cancel);
                     }
                     x.innerHTML = cheakNumberLessTen(minutes) + ":" + cheakNumberLessTen(seconds);
                     document.body.appendChild(x);
                 }
             }

         }

         function cheakNumberLessTen(number)
         {
             if (number < 10)
                 return "0" + number;
             else
                 return number;
         }
 