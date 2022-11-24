const obj = {
    name : "Teja",
    display: function (){
        console.log(this, "is the calling site");
    }
}
const obj1 = {
    name : "Teja",
    display:  () => {
        console.log(this, "is the calling site");
    }
}
obj.display();
obj1.display();
