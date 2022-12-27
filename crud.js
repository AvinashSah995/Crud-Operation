var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readData();
        if (selectedRow == null){
            insertData(formData);
		}
        else{
            updateData(formData);
		}
        resetData(); 
}

// Fetch the Data
function readData () {
    var formData = {};
    formData["eid"] = document.getElementById("eid").value
    formData["ename"] = document.getElementById("ename").value
    formData["email"] = document.getElementById("email").value
    formData["salary"] = document.getElementById("salary").value
    formData["bonus"] = document.getElementById("bonus").value
    return formData
}

// Insert the Data
function insertData (data) {
    var table = document.getElementById("dataList").getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
        cell1.innerHTML = data.eid
    cell2 = newRow.insertCell(1)
        cell2.innerHTML = data.ename
    cell3 = newRow.insertCell(2)
        cell3.innerHTML = data.email
    cell4 = newRow.insertCell(3)
        cell4.innerHTML = data.salary
    cell5 = newRow.insertCell(4)
        cell5.innerHTML = data.bonus
    cell6 = newRow.insertCell(5)
        cell6.innerHTML = ' <button onClick="editData(this)">Edit</button> <button onClick="deleteData(this)">Delete</button>  '
}

// Edit the Data
function editData (td) {
    selectedRow = td.parentElement.parentElement
    document.getElementById("eid").value = selectedRow.cells[0].innerHTML
    document.getElementById("ename").value = selectedRow.cells[1].innerHTML
    document.getElementById("email").value = selectedRow.cells[2].innerHTML
    document.getElementById("salary").value = selectedRow.cells[3].innerHTML
    document.getElementById("bonus").value = selectedRow.cells[4].innerHTML
}
function updateData(formData) {
    selectedRow.cells[0].innerHTML = formData.eid
    selectedRow.cells[1].innerHTML = formData.ename
    selectedRow.cells[2].innerHTML = formData.email
    selectedRow.cells[3].innerHTML = formData.salary
    selectedRow.cells[4].innerHTML = formData.bonus
}

// Delete the Data
function deleteData (td) {
    if(confirm('Do you want to delete this Record')) {
        row = td.parentElement.parentElement
        document.getElementById('dataList').deleteRow(row.rowIndex)
        readData()
    }
}

// Reset the Data
function resetData () {
    document.getElementById("eid").value= ''
    document.getElementById("ename").value= ''
    document.getElementById("email").value= ''
    document.getElementById("salary").value= ''
    document.getElementById("bonus").value= ''
    selectedRow = null
}