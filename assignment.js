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
    var a=5;
    var b=4;
    var c=3;
    var sum1=0;
    var sum2=0;
    var sum3=0;
    var counter=1;
    for (let i = 1; i <= days; i++) {
        if (i<=10) {
            sum1=counter*a;
            counter++;
            
        }else if (i<=20) {
            counter=1;
            sum2=sum2+counter*b;
            
            
        }else if (i>20) {
            counter=1;
            sum3=sum3+counter*c;
            
            
        }        
        
    }
    return(sum1+sum2+sum3);
}

/*==============================================================*/
//kilometerToMeter//
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
    }