export class Employee{
    constructor(
        _id=0,  // id="0" for backend json server
        ename="",
        joining_date=new Date(),
        sal =0,
        dept_code="",
        experience=0,
        email="",
        scode="123",
        employee_pic=""
       ){
           this._id=_id;
           this.ename=ename;
           this.joining_date=joining_date;
           this.sal=sal;
           this.dept_code=dept_code;
           this.experience=experience;
           this.email=email;
           this.scode=scode;
           this.employee_pic=employee_pic
       }
}