function solution(babbling) {
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (babbling[i].includes('aya')) babbling[i] = babbling[i].replace("aya"," ")
    if (babbling[i].includes('ye')) babbling[i] = babbling[i].replace("ye"," ")
    if (babbling[i].includes('woo')) babbling[i] = babbling[i].replace("woo"," ")
    if (babbling[i].includes('ma')) babbling[i] = babbling[i].replace("ma"," ")
  }

  for(var j = 0; j < babbling.length; j++){
      if(babbling[j].trim() === "") answer++;
  }
    
  return answer;
}