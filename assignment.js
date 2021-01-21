function kilometerToMeter(distaceKilometer){

    if(distaceKilometer<0){
        console.log("Invalid input");
    }
    else{
        let distanceMeter=distaceKilometer*1000; //1 kilometer = 1000 meter
        return distanceMeter;   
    }
    
}


function budgetCalculator(watches,phones,laptops){
    const watchPrice=50;
    const phonePrice=100;
    const laptopPrice=500;

    /**The 3 lines code below is written because they will help us in finding whether the quantity of a laptop or phone or watch is fractional. 
    A fractional value is not valid as a quantity of those electronics" */
    let roundedWatches=Math.round(watches);
 
    let roundedPhones=Math.round(phones);
    
    let roundedLaptops=Math.round(laptops);
    
    //conditions for quantity of watches or laptops or phones: these can't be fractional numbers or negative numbers.
    if(watches<0 || phones<0 || laptops<0 || watches != roundedWatches || phones != roundedPhones || laptops != roundedLaptops){
        console.log("Invalid input");
    }
    else{
        let total=(watches*watchPrice)+(phones*phonePrice)+(laptops*laptopPrice);
        return total;
    }
}



function hotelCost(daysNumber){
    const firstTenCost=100;
    const secondTenCost=80;
    const restCost=50;

    if(daysNumber<=0){
        console.log("invalid input");
    }
    else{
        /**suppose,the rule of that hotel is: "If anyone stays in that hotel even for some moments(not a full day),
         then he will have to pay for a fullday bill." */
        let absoluteDays=Math.ceil(daysNumber);
        // if you want to check, you can writh this code below to get an idea about the rules and regulations of that hotel.
        //console.log("You've stayed here for",daysNumber,"days and you will have to pay for",absoluteDays,"days");
        
        if(absoluteDays<=10){
            total=absoluteDays*firstTenCost;
            return total;
        }
        else if(absoluteDays>10 && absoluteDays<=20){
            let secondSession=absoluteDays-10;
            total= (secondSession*secondTenCost)+(10*firstTenCost);
            return total;

        }
        else{
            let thirdSession=absoluteDays-20;
            total=(thirdSession*restCost)+(10*secondTenCost)+(10*firstTenCost);
            return total;
        }

    }

}


function megaFriend(friends){
    firstName=friends[0];
    let count=0;
    for(let k=0;k<firstName.length;k++){ //this loop is for counting the number of characters in the first name.
        let character=firstName[k];
        if(character != " "){/**this condition is given because there might be many whitespaces in any name
                                and that sohoudn't be counted as a character*/
            count++;
        }
    }
    let countPrevious=count; //initial counting the characters of the first element of the array given as input .
    
    let largestName=firstName; //Initially assuming that firstname of the array is the largest name.
    
    count=0; //Again resetting the value of count ariable to zero because we will use it in future.

    for(let i=1;i<friends.length;i++){ //this loop is for reaching every element of the given array
        let names=friends[i];
        
        for(j=0;j<names.length;j++){ //this loop is for counting the number of characters in that name.
            let char=names[j];
            if(char != " "){ /**this condition is given because there might be many whitespaces in any name
                                 and that sohoudn't be counted as a character*/
                count++;  
            }
            
        }
        let countNew=count;
        count=0; //Here we are resetting the value of count variable to zero beacuse it wil be used in this loop again.
        
        if(countNew>countPrevious){
            largestName=names;  
            countPrevious=countNew;   
        }
        else if(countNew==countPrevious){ //this condition is given because there might be a case,where there are two or more laregest names.
            largestName=largestName+" and "+names;
            countPrevious=countNew;   
        }
    }

    return largestName;     
}

