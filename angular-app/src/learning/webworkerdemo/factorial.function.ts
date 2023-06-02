//helper function to calculate factorial basd on input data

export function factorialCalc(num:number):number{
    if (num<0)
        return -1
    else if (num==0)
        return 1
    else
        return (num*factorialCalc(num-1))
}