module.exports = function check(str, bracketsConfig) {
    var n = str.length;
    for(var i = 0 ; i < n ; i++){
        str = str.replace("()", "");
        str = str.replace("{}", "");
        str = str.replace("[]", "");
        str = str.replace("||", "");
        str = str.replace("12", "");
        str = str.replace("34", "");
        str = str.replace("56", "");
        str = str.replace("77", "");
        str = str.replace("88", "");
    }
    if(str.length) return false;
    else return true;  
}
