function solution(skill, skill_trees) {
    var answer = 0;
    
    while(skill_trees.length !== 0){
        let skill_tree = skill_trees.shift().split("");
        let check_str = ''
        while(skill_tree.length !== 0){
            let value = skill_tree.shift();
            if(skill.includes(value)){
                check_str += value;
            }
        }
        
        if(skill.slice(0, check_str.length) === check_str) answer++
    }
    
    
    return answer;
}