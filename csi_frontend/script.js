async function typeSentence(sentence, eleRef, delay = 120) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  
async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }



async function main(){
    var text = ["Inspire", "Motivate", "are Collaborative"]
    while(true){
        for (const word of text){
            await typeSentence(word, "#word");
            await waitForMs(2000);
            await deleteSentence("#word");
        }
    }
}

main()



