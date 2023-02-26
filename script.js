function mee6calculator()
{
    var minxp = document.getElementById("minxp").value;
    var maxxp = document.getElementById("maxxp").value;

    var desiredlvl = document.getElementById("desired-level").value;
    var currentlvl = document.getElementById("current-lvl").value;
    var current_xp = document.getElementById("current-xp").value;

    //Magical math functions
    
    var currentxp = (5/6 * currentlvl * (2 * currentlvl * currentlvl + 27 * currentlvl + 91)) + current_xp;
    var desiredxp = 5/6 * desiredlvl * (2 * desiredlvl * desiredlvl + 27 * desiredlvl + 91) - currentxp;

    //Minimum, average, and maximum messages needed to send in order to reach specified level
    var minmsg = Math.ceil(desiredxp / maxxp);
    var avgmsg = Math.ceil(desiredxp / ((minxp + maxxp) / 2));
    var maxmsg = Math.ceil(desiredxp / minxp);

    //Display information to user
    document.getElementById("result-average").innerHTML = avgmsg;
    document.getElementById("result-xp-needed").innerHTML = desiredxp;
    document.getElementById("result-minimum-messages-requirement").innerHTML = minmsg;
    document.getElementById("result-maximum-messages-requirement").innerHTML = maxmsg;
  
}
