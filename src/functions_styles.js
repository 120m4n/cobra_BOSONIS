
function eval_with_by_tension(context) {
    //varios circuitos
    var feature = context.feature;
    var grosor = 1.2;
    var expr;
    if (feature.hasOwnProperty('CIRCUITO')){
        expr = feature.get('CIRCUITO')
    }else{
       expr = feature.get('circuito')
    }
    var temp = String(expr ) 

    var n = temp.search("20");
    if ((n > -1) && (n = 3))  {
        grosor = 1.2 
    } 
      
    n = temp.search("30");
    if ((n > -1) && (n = 3))  {
        grosor = 3
    }  

    n = temp.search("40");
    if ((n > -1) && (n = 3))  {
        grosor = 3
    }      

    return grosor;
}

function eval_color_by_tension(context) {
    //varios circuitos
    let feature = context.feature;
    let color = '';
    let expr;
    if (feature.hasOwnProperty('CIRCUITO')){
        expr = feature.get('CIRCUITO')
    }else{
       expr = feature.get('circuito')
    }
    color = 'rgba(0, 0, 254, 0.7)';    
    var temp = String(expr ) 
    color = codigo_energis(expr);

    let n = temp.search("30");
    if ((n > -1) && (n = 3))  {
        color='rgba(254,0, 0, 1.0)'; 
    }  

    n = temp.search("40");
    if ((n > -1) && (n = 3))  {
        color='rgba(255, 29, 206, 0.8)';
    }      

    return color;
}


function codigo_energis(expr){
    let color = '';
    switch (expr) {
        case 'API201': color='#23690A'; break;
        case 'API202': color='#8000ff'; break;
        case 'ARA202': color='#ff0080'; break;
        case 'ARA203': color='#A714CD'; break;
        case 'ASG201': color='#ff0000'; break;
        case 'BON201': color='#ff0000'; break;
        case 'CAL201': color='#9933FF'; break;
        case 'CAM201': color='#ff0000'; break;
        case 'CAR203': color='#0C5EFF'; break;
        case 'CEN201': color='#ff0080'; break;
        case 'CEN208': color='#ff00ff'; break;
        case 'CEN209': color='#804000'; break;
        case 'CIE202': color='#ff00ff'; break;
        case 'COR209': color='#A714CD'; break;
        case 'CUE201': color='#800080'; break;
        case 'FLO202': color='#9B4C00'; break;
        case 'FLO205': color='#ff80ff'; break;
        case 'FON201': color='#ff0000'; break;
        case 'GAI202': color='#ff00ff'; break;
        case 'GAI204': color='#806666'; break;
        case 'GUA202': color='#23690A'; break;
        case 'HNU202': color='#8000ff'; break;
        case 'JMI202': color='#9B4C00'; break;
        case 'LIB201': color='#C03B3B'; break;
        case 'LIB205': color='#800000'; break;
        case 'LIB208': color='#ff0000'; break;
        case 'MAI201': color='#806666'; break;
        case 'MAI202': color='#C03B3B'; break;
        case 'MAI205': color='#800000'; break;
        case 'MNZ202': color='#B44800'; break;
        case 'MNZ203': color='#ff00ff'; break;
        case 'MNZ204': color='#800000'; break;
        case 'MNZ206': color='#806666'; break;
        case 'MNZ207': color='#C03B3B'; break;
        case 'NBA201': color='#ff0000'; break;
        case 'OAS203': color='#9B4C00'; break;
        case 'OAS205': color='#B44800'; break;
        case 'OAS206': color='#8000ff'; break;
        case 'OAS208': color='#ff0000'; break;
        case 'PLA201': color='#69690A'; break;
        case 'PLA202': color='#ff00ff'; break;
        case 'PLA203': color='#23690A'; break;
        case 'POR201': color='#8000ff'; break;
        case 'POR204': color='#9B4C00'; break;
        case 'REM202': color='#0C5EFF'; break;
        case 'RIH202': color='#ff0000'; break;
        case 'RIM201': color='#23690A'; break;
        case 'RIM202': color='#ff0000'; break;
        case 'RIM204': color='#8000ff'; break;
        case 'RIM209': color='#23690A'; break;
        case 'RIO201': color='#C03B3B'; break;
        case 'RIO202': color='#806666'; break;
        case 'RIO203': color='#ff0000'; break;
        case 'RIO207': color='#9933FF'; break;
        case 'RMA203': color='#ff00ff'; break;
        case 'RMA204': color='#8000ff'; break;
        case 'ROB202': color='#23690A'; break;
        case 'SBG201': color='#23690A'; break;
        case 'SBL202': color='#23690A'; break;
        case 'SIL201': color='#8000ff'; break;
        case 'SIL202': color='#0C5EFF'; break;
        case 'SIL204': color='#A714CD'; break;
        case 'SIL208': color='#336933'; break;
        case 'SIL209': color='#ff0000'; break;
        case 'SJU201': color='#8000ff'; break;
        case 'SJU202': color='#CD1414'; break;
        case 'SJU204': color='#408000'; break;
        case 'SMA202': color='#800000'; break;
        case 'SMA205': color='#ff0000'; break;
        case 'UNI201': color='#8000ff'; break;
        case 'UNI202': color='#23690A'; break;
        case 'UNI204': color='#8000ff'; break;
        case 'UNI205': color='#ff0080'; break;
        case 'VJU203': color='#9B4C00'; break;
        case 'VJU205': color='#8000ff'; break;
        case 'VLL202': color='#808040'; break;
        case 'VLL204': color='#9B4C00'; break;
        case 'ZAW201': color='#ff00ff'; break;
        case 'AER201': color='#4D5F45'; break;
        case 'AER202': color='#c23d46'; break;
        case 'AER203': color='#217827'; break;
        case 'ARA201': color='#8e2754'; break;
        case 'BAL201': color='#3b0c91'; break;
        case 'BAR201': color='#B64D2E'; break;
        case 'BAR202': color='#B33C46'; break;
        case 'BAR203': color='#627034'; break;
        case 'BAR204': color='#AD5211'; break;
        case 'BON202': color='#136D5F'; break;
        case 'BRC201': color='#716308'; break;
        case 'BRC202': color='#136D5F'; break;
        case 'BRC203': color='#07467B'; break;
        case 'CAM202': color='#7F25B3'; break;
        case 'CAR201': color='#61278e'; break;
        case 'CAR202': color='#4D5F45'; break;
        case 'CAR204': color='#c23d46'; break;
        case 'CCR201': color='#217827'; break;
        case 'CCR202': color='#8e2754'; break;
        case 'CCR203': color='#3b0c91'; break;
        case 'CEN202': color='#B64D2E'; break;
        case 'CEN203': color='#B33C46'; break;
        case 'CEN204': color='#627034'; break;
        case 'CEN205': color='#AD5211'; break;
        case 'CEN206': color='#136D5F'; break;
        case 'CEN207': color='#716308'; break;
        case 'CIE201': color='#136D5F'; break;
        case 'CIE203': color='#07467B'; break;
        case 'COR201': color='#7F25B3'; break;
        case 'COR202': color='#61278e'; break;
        case 'COR203': color='#4D5F45'; break;
        case 'COR204': color='#c23d46'; break;
        case 'COR205': color='#217827'; break;
        case 'COR206': color='#8e2754'; break;
        case 'COR207': color='#3b0c91'; break;
        case 'COR208': color='#B64D2E'; break;
        case 'CUE202': color='#B33C46'; break;
        case 'FLO201': color='#627034'; break;
        case 'FLO203': color='#AD5211'; break;
        case 'FLO204': color='#136D5F'; break;
        case 'FLO206': color='#716308'; break;
        case 'FLO207': color='#136D5F'; break;
        case 'FON202': color='#07467B'; break;
        case 'FON203': color='#7F25B3'; break;
        case 'FUN201': color='#61278e'; break;
        case 'FUN202': color='#4D5F45'; break;
        case 'FUN203': color='#c23d46'; break;
        case 'GAI201': color='#217827'; break;
        case 'GAI203': color='#8e2754'; break;
        case 'GUA201': color='#3b0c91'; break;
        case 'GUA203': color='#B64D2E'; break;
        case 'GUA204': color='#B33C46'; break;
        case 'HNU201': color='#627034'; break;
        case 'JAC201': color='#AD5211'; break;
        case 'JAC202': color='#136D5F'; break;
        case 'JAC203': color='#716308'; break;
        case 'JMI201': color='#136D5F'; break;
        case 'LIB202': color='#07467B'; break;
        case 'LIB203': color='#7F25B3'; break;
        case 'LIB204': color='#61278e'; break;
        case 'LIB206': color='#4D5F45'; break;
        case 'LIB207': color='#c23d46'; break;
        case 'LRE201': color='#217827'; break;
        case 'MAI203': color='#8e2754'; break;
        case 'MAI204': color='#3b0c91'; break;
        case 'MAL201': color='#B64D2E'; break;
        case 'MAL202': color='#B33C46'; break;
        case 'MAL203': color='#627034'; break;
        case 'MAL204': color='#AD5211'; break;
        case 'MAL205': color='#136D5F'; break;
        case 'MAL206': color='#716308'; break;
        case 'MAN201': color='#136D5F'; break;
        case 'MAN202': color='#07467B'; break;
        case 'MAN203': color='#7F25B3'; break;
        case 'MNT201': color='#61278e'; break;
        case 'MNT202': color='#4D5F45'; break;
        case 'MNZ201': color='#c23d46'; break;
        case 'MNZ205': color='#217827'; break;
        case 'MNZ208': color='#8e2754'; break;
        case 'NBA202': color='#3b0c91'; break;
        case 'NBA203': color='#B64D2E'; break;
        case 'NBA204': color='#B33C46'; break;
        case 'NBA205': color='#627034'; break;
        case 'NBA206': color='#AD5211'; break;
        case 'NBA207': color='#136D5F'; break;
        case 'NBA208': color='#716308'; break;
        case 'OAS201': color='#136D5F'; break;
        case 'OAS202': color='#07467B'; break;
        case 'OAS204': color='#7F25B3'; break;
        case 'OAS207': color='#61278e'; break;
        case 'OAS209': color='#4D5F45'; break;
        case 'PIV201': color='#c23d46'; break;
        case 'PIV202': color='#217827'; break;
        case 'PON201': color='#8e2754'; break;
        case 'PON202': color='#3b0c91'; break;
        case 'POR202': color='#B64D2E'; break;
        case 'POR203': color='#B33C46'; break;
        case 'POR205': color='#627034'; break;
        case 'RCO201': color='#AD5211'; break;
        case 'RCO202': color='#136D5F'; break;
        case 'REM201': color='#716308'; break;
        case 'RET201': color='#136D5F'; break;
        case 'RET202': color='#07467B'; break;
        case 'RIH201': color='#7F25B3'; break;
        case 'RIH203': color='#61278e'; break;
        case 'RIH204': color='#4D5F45'; break;
        case 'RIH205': color='#c23d46'; break;
        case 'RIH206': color='#217827'; break;
        case 'RIH207': color='#8e2754'; break;
        case 'RIH208': color='#3b0c91'; break;
        case 'RIM203': color='#B64D2E'; break;
        case 'RIM205': color='#B33C46'; break;
        case 'RIM206': color='#627034'; break;
        case 'RIM207': color='#AD5211'; break;
        case 'RIM208': color='#136D5F'; break;
        case 'RIO204': color='#716308'; break;
        case 'RIO205': color='#136D5F'; break;
        case 'RIO206': color='#07467B'; break;
        case 'RIO208': color='#7F25B3'; break;
        case 'RIO209': color='#61278e'; break;
        case 'RMA201': color='#4D5F45'; break;
        case 'RMA202': color='#c23d46'; break;
        case 'ROB201': color='#217827'; break;
        case 'ROB203': color='#8e2754'; break;
        case 'ROT201': color='#3b0c91'; break;
        case 'ROT202': color='#B64D2E'; break;
        case 'SBG202': color='#B33C46'; break;
        case 'SBG203': color='#627034'; break;
        case 'SBL201': color='#AD5211'; break;
        case 'SBL203': color='#136D5F'; break;
        case 'SIL203': color='#716308'; break;
        case 'SIL205': color='#136D5F'; break;
        case 'SIL206': color='#07467B'; break;
        case 'SIL207': color='#7F25B3'; break;
        case 'SJU203': color='#61278e'; break;
        case 'SLM201': color='#4D5F45'; break;
        case 'SLM202': color='#c23d46'; break;
        case 'SLM203': color='#217827'; break;
        case 'SMA201': color='#8e2754'; break;
        case 'SMA203': color='#3b0c91'; break;
        case 'SMA204': color='#B64D2E'; break;
        case 'SMA206': color='#B33C46'; break;
        case 'SVE201': color='#627034'; break;
        case 'SVE202': color='#AD5211'; break;
        case 'TGU201': color='#136D5F'; break;
        case 'UNI203': color='#716308'; break;
        case 'UNI206': color='#136D5F'; break;
        case 'UNI207': color='#07467B'; break;
        case 'UNI208': color='#7F25B3'; break;
        case 'UNI209': color='#61278e'; break;
        case 'URI201': color='#4D5F45'; break;
        case 'URI202': color='#c23d46'; break;
        case 'VJU201': color='#217827'; break;
        case 'VJU202': color='#8e2754'; break;
        case 'VJU204': color='#3b0c91'; break;
        case 'VJU206': color='#B64D2E'; break;
        case 'VJU207': color='#B33C46'; break;
        case 'VJU208': color='#627034'; break;
        case 'VJU209': color='#AD5211'; break;
        case 'VLL201': color='#136D5F'; break;
        case 'VLL203': color='#716308'; break;
        case 'ZAW202': color='#136D5F'; break;
        case 'ZAW203': color='#07467B'; break;
        case 'ZFI201': color='#7F25B3'; break;
        default:
            color='rgba(0,0, 254, 0.7)'; 

    }
    return color;        
        
}

export {eval_with_by_tension, eval_color_by_tension};