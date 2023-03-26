//Filter the students from the class 6th 'A' section from the below array of objects.

myArr = [

{
studenName: "jack",
studenClass: 6,
studenSection: "a"
},

{
studenName: "tom",
studenClass: 6,
studenSection: "a"
},

{
studenName: "ricky",
studenClass: 6,
studenSection: "b"
},
{
studenName: "john",
studenClass: 6,
studenSection: "b"
},

{
studenName: "jerry",
studenClass: 6,
studenSection: "a"
},

{
studenName: "henry",
studenClass: 6,
studenSection: "b"
},

{
studenName: "stephen",
studenClass: 6,
studenSection: "a"
}
]

let a=myArr.filter(function(stu){
	if(stu.studenSection=="a"){
	return stu
	}
})
console.log(a); 

