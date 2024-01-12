interface student
{
    sid:number,
    sname:string,
    mark:number
}
function fun(s: student)
{
    console.log(s.sid)
    console.log(s.sname)
    console.log(s.mark)
}
let s1 = {sid:101,sname:'ABC',mark:90};
fun(s1);