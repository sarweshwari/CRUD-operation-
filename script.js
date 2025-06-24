let user = [
    {
        name: "sarweshwari",
        email: "sarweshwari@gmail.com",
    },
    {
        name: "manu",
        email: "manu@gmail.com",
    },
    {
        name: "divya",
        email: "divya@gmail.com"
    },
    {
        name: "sachin",
        email: "sachin@gmail.com"
    },
]
function showData() {
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    for (let i = 0; i < user.length; i++) {
        tbody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${user[i].name}</td>
            <td>${user[i].email}</td>
            <td class="btns">
            <button onclick="deleteRow(${i})">Del</button>
             <button onclick="editRow(${i})">Edit</button>

            </td>
        </tr>
        `
    }
}
document.querySelector("#btn").addEventListener('click', function () {
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    if(!name || !email){
        alert("Please fill all the fields")
        document.querySelector("#name").focus()
        return
    }
    let obj = {
        name: name,
        email: email
    }
    user.push(obj)
    showData()
});
showData()
function deleteRow(ind) {
    user.splice(ind, 1)
    showData()
}
function editRow(ind) {
    document.querySelector('#nameUpdate').value= user[ind].name
    document.querySelector('#emailUpdate').value= user[ind].email
    document.querySelector('#update').setAttribute('value', ind)
    document.querySelector("#update").addEventListener("click",function(){
        let userId=this.value
        let userName=document.querySelector('#nameUpdate').value
        let userEmail=document.querySelector('#emailUpdate').value
        let obj={
            name:userName,
            email:userEmail
        }
        user.splice(userId,1,obj)
        showData()

    });

}
