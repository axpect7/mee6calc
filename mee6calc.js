function mee6calculator()
{
    var minxp = document.getElementById("minxp").value;
    var maxxp = document.getElementById("maxxp").value;

    var desiredlvl = document.getElementById("desired-level").value;
    var currentlvl = document.getElementById("current-lvl").value;
    var xpinlvl = document.getElementById("current-xp").value;
    //Magical math functions
    
    var currentxp = 5/6 * currentlvl * (2 * currentlvl * currentlvl + 27 * currentlvl + 91);
    var totalxp = parseInt(currentxp) + parseInt(xpinlvl);
    var desiredxp = 5/6 * desiredlvl * (2 * desiredlvl * desiredlvl + 27 * desiredlvl + 91);
    var totaldesiredxp = parseInt(desiredxp) - parseInt(totalxp);

    //Minimum, average, and maximum messages needed to send in order to reach specified level
    var minmsg = Math.ceil(totaldesiredxp / maxxp);
    var avg = parseInt(minxp) + parseInt(maxxp);
    var avgxp = avg/2
    var avgmsg = Math.ceil(totaldesiredxp / avgxp);
    var maxmsg = Math.ceil(totaldesiredxp / minxp);

    //Display information to user
    document.getElementById("result-average").innerHTML = avgmsg;
    document.getElementById("result-xp-needed").innerHTML = totaldesiredxp;
    document.getElementById("result-minimum-messages-requirement").innerHTML = minmsg;
    document.getElementById("result-maximum-messages-requirement").innerHTML = maxmsg;
  
}
