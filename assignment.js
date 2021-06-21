/*===================================================================================*/
//megaFriend//
var  friend = ["zahid","hafizur","rahim","anamul hossain","sumon"]
function megaFriend(friend){
    var long = friend[0];
     for (let i = 0; i < friend.length; i++) {
        const element = friend[i];
            if( long.length < element.length){
                long = element
                }
                     }
                    return long
                        }        
        var bigName = megaFriend(friend)
        console.log(bigName)
/*===================================================================================*/
//budgetCalculator//
function budgetCalculator (watch,phone,laptop){
    var a =50;
    var b =100;
    var c =500;

    return(a*watch+b*phone+c*laptop);

}

/*=====================================================================================*/
//hotelCost//
function hotelCost(days){
    let a=50;
    let b=40;
    let c=30;
    var sum = 0

    for (let i = 1; i <=days; i++) {
     if(i<=10){
         sum = sum+a;
     }else if(i>10 && i<=20){
         sum =sum+b;
     }else {
         sum =sum+c;
     }
    }
     
    return sum;
}

/*==============================================================*/
//kilometerToMeter//
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
    }
