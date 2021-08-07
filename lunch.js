var lists = [];
var keepCounting = false;

updateList();
auxSwitcher("Lunch",null,minToMS(30));

function updateList(){
    lists = [];
    for (var i=0;i<document.getElementsByTagName('li').length;i++) {
        lists = lists.concat(document.getElementsByTagName('li')[i].innerText);
    }
    return lists;
}

function getActiveAux(){
    var auxCodes = ["PUA", "Salesforce", "SNOW After-Call Work", "Development", "Fraud", "Technical Issue", "Lunch", "Dial Out", "Training / Coaching", "Team Meeting", "Available", "Break", "Offline", "Super User / TL Support"];
    if (auxCodes.filter((i => a => a !== lists[i] || !++i)(0))){
        var missing = auxCodes.filter((i => a => a !== lists[i] || !++i)(0));
        var temp = missing[0];
    }
    return temp;
}

function auxSwitcher(auxToSwitchTo,auxToSwitchToAfter,time){
    var activeAux = getActiveAux();
    var index = lists.indexOf("Lunch");
    document.getElementsByTagName('li')[index].click();
    setTimeout(() => {

        updateList();
        var indexReturn = lists.indexOf(activeAux);
        document.getElementsByTagName('li')[indexReturn].click();
        keepCounting = false;
        }, time);
}
function minToMS(minutes){
    let MS = minutes * 60 * 1000;
    return MS;
}