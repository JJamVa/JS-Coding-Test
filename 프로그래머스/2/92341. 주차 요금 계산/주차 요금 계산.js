function calculateTime(time){
    return time.split(":").reduce((a,b) => parseInt(a * 60) + parseInt(b), 0);
}

function solution(fees, records) {
    let answer = [];
    let info = {};
    
    while(records.length !== 0){
        let value = records.shift().split(" ");
        if(!info[value[1]]){
            info[value[1]] = {
                status: value[2] === "IN",
                "using-time": 0,
                "last-time": value[0],
            }
        }else{
            info[value[1]]["status"] = value[2] === "IN";
            info[value[1]]["using-time"] = value[2] === "OUT" ? info[value[1]]["using-time"] + (calculateTime(value[0]) - calculateTime(info[value[1]]["last-time"])) : info[value[1]]["using-time"];
            info[value[1]]["last-time"] = value[0];
        }
    }
    
    for(let idx in info){
        let money = 0;
        if(info[idx]["status"]){
            info[idx]["using-time"] += (calculateTime("23:59") - calculateTime(info[idx]["last-time"]))
        }        
        if(info[idx]["using-time"] <= fees[0]){
            info[idx]["using-time"] -= fees[0]
            money += fees[1];
        }else{
            money += fees[1];
            money += Math.ceil((info[idx]["using-time"] - fees[0]) / fees[2]) * fees[3]
        }
        answer.push([idx, money])
    }
    
    answer.sort((a,b) => a[0].localeCompare(b[0]))
    
    return answer.map((e) => e[1]);
}