//help the cashier return the right of change


//Programme input: 
    //convert input to float with two decimal parts
    	//Amount due
    var amountDue = ((parseFloat(prompt("Amount Due:"))).toFixed(2));
    var amountPaid = ((parseFloat(prompt("Amount Paid:"))).toFixed(2));
        
//Programme output:
    //calculate change amount with 2 decimal parts
    var change = (amountPaid - amountDue).toFixed(2);
    // print amount due / amount paid / change
    console.log('Due: Ksh.'+amountDue+'/ Paid: Ksh.'+amountPaid+'/Change: Ksh.'+change);
    //Print change breakdown: notes and Coins
    var note_coins = [
        {
            value:1000,
            name: 'Ksh.1000 notes: '
        }, {
            value:500,
            name: 'Ksh.500 notes: '
        }, {
            value:200,
            name: 'Ksh.200 notes: '
        }, {
            value:100,
            name: 'Ksh.100 notes: '
        }, {
            value:50,
            name: 'Ksh.50 notes: '
        }, {
            value:20,
            name: 'Ksh.20 coins: '
        },{
            value:10,
            name: 'Ksh.10 coins: '
        },{
            value:5,
            name: 'Ksh.5 coins: '
        },{
            value:1,
            name: 'Ksh.1 coins: '
        },{
            value:0.1,
            name: 'Ksh.1 cents: '
        },           
    ];
    //var loop = 0;
    for (var i = 0; i < note_coins.length; i++) {
        note_coins[i].return = Math.floor(change/note_coins[i].value);
        change = (change%note_coins[i].value).toFixed(2);
        note_coins[i].return > 0 ? console.log(note_coins[i].name + note_coins[i].return) : 0;
        loop++;
        if(change < 0.1){
            break;
        }
    }
    //console.log(loop);
    
//Kenya Example: 
    //Banknotes:
    //Ksh 1000 - Ksh 500 - Ksh 200 - Ksh 100 - Ksh 50
    //Coins:
    //Ksh 20 - Ksh 10 - Ksh 5 - Ksh 1 - Ksh 0.1






