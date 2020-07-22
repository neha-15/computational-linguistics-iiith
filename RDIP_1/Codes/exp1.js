var corpus1 = ["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole.Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough.When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. How shall I climb out? said the mouse. oh, how shall I climb out? Just then a rat came along, and he heard the mouse. Mouse, said the rat, if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."];
var corpus2 = ["A wolf carried off a lamb. The lamb said,  I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself. The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock."];
var corpus3 = ["A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. Why does he not make a pet of me? said the donkey. It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair. Then the donkey said to himself, If I do what the dog does, he may make a pet of me. So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, Help! Help! Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. I only did what the dog does, said the donkey, and yet they make a pet of the dog, and they beat me with sticks. It is not fair."];
var cor = ["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. \"How shall I climb out?\" said the mouse. \"oh, how shall I climb out?\" Just then a rat came along, and he heard the mouse. \"Mouse,\" said the rat, \"if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.",
    "A wolf carried off a lamb. The lamb said, \" I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.\" The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.",
    "A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said the donkey. \"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.\" Then the donkey said to himself, \"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair."
];


var select = document.getElementById("corp");

var wordc, unic;
var c;

function corpfun() {
    if (select.value === '2') {
        document.getElementById("sen1").innerHTML = corpus1;
        document.getElementById("sen2").innerHTML = "Enter the number of tokens and types for the above corpus:";
        document.getElementById("sen3").innerHTML = "<table cellspacing='-2' cellpadding='4' border='1' style='text-align:center;'<tr> <td>#tokens:</td><td id='ans1_cont'> <input type='text' id='ans1' name='tokens' size='4'></td></tr><tr><td>#types:</td><td id='ans2_cont'> <input type='text' name='types' id='ans2' size='4'></td></tr></table><br><input type='submit' value='Submit' onclick='verify()'>";
        c = cor[0];
    } else if (select.value === '3') {
        document.getElementById("sen1").innerHTML = corpus2;
        document.getElementById("sen2").innerHTML = "Enter the number of tokens and types for the above corpus:";
        document.getElementById("sen3").innerHTML = "<table cellspacing='-2' cellpadding='4' border='1' style='text-align:center;'<tr> <td>#tokens:</td><td id='ans1_cont'> <input type='text' id='ans1' name='tokens' size='4'></td></tr><tr><td>#types:</td><td id='ans2_cont'> <input type='text' name='types' id='ans2' size='4'></td></tr></table><br><input type='submit' value='Submit'onclick='verify()'>";
        c = cor[1];
    } else if (select.value === '4') {
        document.getElementById("sen1").innerHTML = corpus3;
        document.getElementById("sen2").innerHTML = "Enter the number of tokens and types for the above corpus:";
        document.getElementById("sen3").innerHTML = "<table cellspacing='-2' cellpadding='4' border='1' style='text-align:center;'<tr> <td>#tokens:</td><td id='ans1_cont'> <input type='text' id='ans1' name='tokens' size='4'></td></tr><tr><td>#types:</td><td id='ans2_cont'> <input type='text' name='types' id='ans2' size='4'></td></tr></table><br><input type='submit' value='Submit'onclick='verify()'>";
        c = cor[2];
    }
}

function verify() {
    var word = c;
    var pattern = /\word+/ig;
    var s = word.match(pattern);
    wordc = s.length();
    var str = s.join(" ");
    var str1 = str.toLowerCase();
    var str2 = str1.split();
    var uw = new Set(str2);
    unic = uw.size();
    var tocken = document.getElementById('ans1_const').value;
    var type = document.getElementById("ans2_const").value;
    if (wordc == tocken) {
        document.getElementById('tocken').style.backgroundColor = "Green";
    } else {
        document.getElementById('tocken').style.backgroundColor = "Red";
    }
    if (unic == type) {
        document.getElementById('type').style.backgroundColor = "Green";
    } else {
        document.getElementById('type').style.backgroundColor = "Red";
    }
    if ((wordc == token) && (unic == type)) {
        document.getElementById("sen5").innerHTML = "<center><font color='Green' style = 'font-size:20px'>Right answer</font></center>"
        document.getElementById("sen7").innerHTML = "<button  onclick='continue()'>Continue</button>";
    } else {
        document.getElementById("sen6").innerHTML = "<center><font color='Red' style = 'font-size:20px'>Wrong answer</font></center>"
    }

}