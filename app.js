

GetData();

async function GetData(){
    const Ques=await fetch('Questions.csv');
    const data=await Ques.text();
    console.log(data);

    const myTable=data.split('\n').slice(1);

    for (let iRow= 0; iRow < myTable.length-1; iRow++) {
        const row = myTable[iRow];

        const columns=row.split(',');

        console.log(columns[1]);

        createQuestion(
            columns[0],
            columns[1],
            columns[2],
            columns[3],
            columns[4],
            columns[5],
            columns[6]
        );

    }

}

function createQuestion(Code,Question,Option1,Option2,Option3,Option4,Answer){

        //Question Block
    var newDiv=document.createElement('Div');
    newDiv.className='Quesblock';
    newDiv.id='Ques'+Code;
    //document.body.appendChild(newDiv);
    document.getElementsByClassName('jumbotron').item(0).appendChild(newDiv);


    //Question text
    var newContent=document.createTextNode(Code+'. '+ Question);
    newDiv.appendChild(newContent);

    var newLine=document.createElement('br');
    newDiv.appendChild(newLine);
    newDiv.appendChild(newLine);

    //Option1
    var newOption1=document.createElement('input');
    newOption1.type='radio';
    newOption1.id='Ques'+Code+'option'+1;
    newOption1.name='Ques'+Code;
    newDiv.appendChild(newOption1);

    var lblOption1=document.createElement('label');
    lblOption1.id='Ques'+Code+'Label'+1;
    lblOption1.textContent=Option1;
    newDiv.appendChild(lblOption1);

    //LineBreak
    var newLine=document.createElement('br');
    newDiv.appendChild(newLine);

    //Option2
    var newOption2=document.createElement('input');
    newOption2.type='radio';
    newOption2.id='Ques'+Code+'option'+2;
    newOption2.name='Ques'+Code;
    newDiv.appendChild(newOption2);

    var lblOption2=document.createElement('label');
    lblOption2.id='Ques'+Code+'Label'+2;
    lblOption2.textContent=Option2;
    newDiv.appendChild(lblOption2);

    //LineBreak
    var newLine=document.createElement('br');
    newDiv.appendChild(newLine);

    //Option3
    var newOption3=document.createElement('input');
    newOption3.type='radio';
    newOption3.id='Ques'+Code+'option'+3;
    newOption3.name='Ques'+Code;
    newDiv.appendChild(newOption3);

    var lblOption3=document.createElement('label');
    lblOption3.id='Ques'+Code+'Label'+3;
    lblOption3.textContent=Option3;
    newDiv.appendChild(lblOption3);

    //LineBreak
    var newLine=document.createElement('br');
    newDiv.appendChild(newLine);

    //Option4
    var newOption4=document.createElement('input');
    newOption4.type='radio';
    newOption4.id='Ques'+Code+'option'+4;
    newOption4.name='Ques'+Code;
    newDiv.appendChild(newOption4);

    var lblOption4=document.createElement('label');
    lblOption4.id='Ques'+Code+'Label'+4;
    lblOption4.textContent=Option4;
    newDiv.appendChild(lblOption4);

    //Answer
     var lblAnswer=document.createElement('label');
     lblAnswer.id='Ans'+Code;
     lblAnswer.name='Ques'+Code;
     lblAnswer.textContent=Answer;
     lblAnswer.style.display='none';
     newDiv.appendChild(lblAnswer);
}



//Event for Review Answer Button
document.getElementById('BtnCheck').addEventListener('click',callCheckAnswer);

function callCheckAnswer(){

    var ele=document.getElementsByClassName('Quesblock');

   for (let i = 0; i < ele.length; i++) {
       var myQues=ele[i].id;  //Question

       var rightAns=document.getElementById('Ans'+(i+1)).innerHTML;

       var radio=document.getElementsByName(ele[i].id);

       for (let j = 0; j < radio.length; j++) {
           if( radio[j].checked){
               var selectedAns=document.getElementById(radio[j].name+'Label'+(j+1)).innerHTML
               if(rightAns.trim()==selectedAns.trim()){
                    document.getElementById(ele[i].id).style.backgroundColor='#8fda64';
               }
               else{
                    document.getElementById(ele[i].id).style.backgroundColor='#e43b43';
               }
           };

       }
   }



}

//Event for Clear Button
document.getElementById('BtnClear').addEventListener('click',callClearSelection);

function callClearSelection(){

    //Remove Check marks
    var ele=document.getElementsByTagName('input');
    for (let i = 0; i < ele.length; i++) {
        ele[i].checked=false;
    }
    //Remove Background Color
    var ele=document.getElementsByClassName('Quesblock');
    for (let i = 0; i < ele.length; i++) {
        document.getElementById(ele[i].id).style.backgroundColor='whitesmoke'

    }
    }
