 
/**************************************
 * ************************************
 * IMPORTANT NOTE:
 * The "♭"
 * in the array throws off the cursor's alignment.
 * */

// Array for transposing music chords
var keyChords = [
 ["C", "D", "E", "F", "G", "A"],
 ["D♭", "E♭", "F", "G♭", "A♭", "B♭"],
 ["D", "E", "F♯", "G", "A", "B"],
 ["E♭", "F", "G", "A♭", "B♭", "C"],
 ["E", "F♯", "G♯", "A", "B", "C♯"],
 ["F", "G", "A", "B♭", "C", "D"],
 ["F♯", "G♯", "A♯", "B", "C♯", "D♯"],
 ["G", "A", "B", "C", "D", "E"],
 ["A♭", "B♭", "C", "D", "E♭", "F"],
 ["A", "B", "C♯", "D", "E", "F♯"],
 ["B♭", "C", "D", "E♭", "F", "G"],
 ["B", "C♯", "D♯", "E", "F♯", "G♯"]
];

// keyValue used for counter in functions: showChords, keyUp, keyDown and individual ancors to transpose songs
var keyValue = 0;

// displays chords first row of assigned tags
function showChords1() {
    $('.key1').text(keyChords[keyValue][0]);
    $('.key2').text(keyChords[keyValue][1]);
    $('.key3').text(keyChords[keyValue][2]);
    $('.key4').text(keyChords[keyValue][3]);
    $('.key5').text(keyChords[keyValue][4]);
    $('.key6').text(keyChords[keyValue][5]);
 }
 
// displays chords second row of assigned tags
 function showChords2() {
    $('.note1').text(keyChords[keyValue][0]);
    $('.note2').text(keyChords[keyValue][1]);
    $('.note3').text(keyChords[keyValue][2]);
    $('.note4').text(keyChords[keyValue][3]);
    $('.note5').text(keyChords[keyValue][4]);
    $('.note6').text(keyChords[keyValue][5]);
 }

// add one to keyValue
function keyUp() {
  keyValue += 1;
  if (keyValue > 11) // loops keyValue to beginning of the array
  keyValue = 0;
}

// event handler for up button changes only bottom line up one chord
$('#btnUp').on('click', function(){
    keyUp();
    showChords2();
});

// subtracted one from keyValue
function keyDown() {
    keyValue -= 1;
    if (keyValue < 0) // loops keyValue to end of the array
    keyValue = 11;
}

// event handler for down button changes only bottom line down one chord
$('#btnDown').on('click', function(){
    keyDown();
    showChords2();
});

// from #notes1 to #notes12 are for all the transposing ancors clicking it changes both lines of chords
$('#note1').on('click', function(){
     keyValue = 0;
     showChords1();
     showChords2();
});

$('#note2').on('click', function(){
     keyValue = 1;
     showChords1();
     showChords2();
});

$('#note3').on('click', function(){
     keyValue = 2;
     showChords1();
     showChords2();
});

$('#note4').on('click', function(){
     keyValue = 3;
     showChords1();
     showChords2();
});

$('#note5').on('click', function(){
     keyValue = 4;
     showChords1();
     showChords2();
});

$('#note6').on('click', function(){
     keyValue = 5;
     showChords1();
     showChords2();
});

$('#note7').on('click', function(){
     keyValue = 6;
     showChords1();
     showChords2();
});

$('#note8').on('click', function(){
     keyValue = 7;
     showChords1();
     showChords2();
});

$('#note9').on('click', function(){
     keyValue = 8;
     showChords1();
     showChords2();
});

$('#note10').on('click', function(){
     keyValue = 9;
     showChords1();
     showChords2();
});

$('#note11').on('click', function(){
     keyValue = 10;
     showChords1();
     showChords2();
});

$('#note12').on('click', function(){
     keyValue = 11;
     showChords1();
     showChords2();
});


