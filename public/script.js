function createAllocation() {
    var rows = parseInt(document.getElementById("processes").value);
    var columns = parseInt(document.getElementById("resources").value);

    var table = document.getElementById("Allocation");

    // Xóa bảng cũ (nếu có)
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // Tạo bảng mới với n dòng và m cột
    // Tạo hàng đầu tiên với các tiêu đề cột
var headerRow = document.createElement("tr");

// Tạo ô đầu tiên trống
var emptyHeaderCell = document.createElement("td");
headerRow.appendChild(emptyHeaderCell);

// Tạo các tiêu đề cột
for (var j = 0; j < columns; j++) {
  var columnHeaderCell = document.createElement("td");
  columnHeaderCell.textContent = "R" + (j + 1);
  headerRow.appendChild(columnHeaderCell);
}

table.appendChild(headerRow);

// Tạo các hàng và ô dữ liệu
for (var i = 0; i < rows; i++) {
  var row = document.createElement("tr");

  // Tạo tiêu đề dòng
  var rowHeaderCell = document.createElement("td");
  rowHeaderCell.textContent = "P" + (i + 1);
  row.appendChild(rowHeaderCell);

  // Tạo các ô dữ liệu
  for (var j = 0; j < columns; j++) {
    var cell = document.createElement("td");
    cell.style.width = "50px";
    var input = document.createElement("input");
    input.type = "number";
    input.className = "Allocation";
    input.style.width = "50px";
    cell.appendChild(input);
    row.appendChild(cell);
  }

  table.appendChild(row);
}

}

function createRequest() {
    var rows = parseInt(document.getElementById("processes").value);
    var columns = parseInt(document.getElementById("resources").value);

    var table = document.getElementById("Request");

    // Xóa bảng cũ (nếu có)
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // Tạo bảng mới với n dòng và m cột
   // Tạo hàng đầu tiên với các tiêu đề cột
var headerRow = document.createElement("tr");

// Tạo ô đầu tiên trống
var emptyHeaderCell = document.createElement("td");
headerRow.appendChild(emptyHeaderCell);

// Tạo các tiêu đề cột
for (var j = 0; j < columns; j++) {
  var columnHeaderCell = document.createElement("td");
  columnHeaderCell.textContent = "R" + (j + 1);
  headerRow.appendChild(columnHeaderCell);
}

table.appendChild(headerRow);

// Tạo các hàng và ô dữ liệu
for (var i = 0; i < rows; i++) {
  var row = document.createElement("tr");

  // Tạo tiêu đề dòng
  var rowHeaderCell = document.createElement("td");
  rowHeaderCell.textContent = "P" + (i + 1);
  row.appendChild(rowHeaderCell);

  // Tạo các ô dữ liệu
  for (var j = 0; j < columns; j++) {
    var cell = document.createElement("td");
    cell.style.width = "50px";
    var input = document.createElement("input");
    input.type = "number";
    input.className = "Request";
    input.style.width = "50px";
    cell.appendChild(input);
    row.appendChild(cell);
  }

  table.appendChild(row);
}

}

function createAvailable() {
    var rows = 1
    var columns = parseInt(document.getElementById("resources").value);

    var table = document.getElementById("Available");

    // Xóa bảng cũ (nếu có)
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // Tạo bảng mới với n dòng và m cột
   // Tạo hàng đầu tiên với các tiêu đề cột
var headerRow = document.createElement("tr");

// Tạo ô đầu tiên trống

// Tạo các tiêu đề cột
for (var j = 0; j < columns; j++) {
  var columnHeaderCell = document.createElement("td");
  columnHeaderCell.textContent = "R" + (j + 1);
  headerRow.appendChild(columnHeaderCell);
}

table.appendChild(headerRow);

// Tạo các hàng và ô dữ liệu
for (var i = 0; i < rows; i++) {
  var row = document.createElement("tr");

  // Tạo tiêu đề dòng

  // Tạo các ô dữ liệu
  for (var j = 0; j < columns; j++) {
    var cell = document.createElement("td");
    cell.style.width = "50px";
    var input = document.createElement("input");
    input.type = "number";
    input.className = "Available";
    input.style.width = "50px";
    cell.appendChild(input);
    row.appendChild(cell);
  }

  table.appendChild(row);
}}

function createInput(){
    var ctent = document.querySelector('.flextb');
    var rows = parseInt(document.getElementById("processes").value);
    var columns = parseInt(document.getElementById("resources").value);
    const btnst=document.querySelector('.btnstart')
    
    if(rows>0&&columns>0){
    ctent.classList.remove('open')
    btnst.classList.remove('open')
    btnst.classList.add('open')
    createAllocation();
    createAvailable();
    createRequest();
    ctent.classList.add('open')
    } else{
        alert('Vui lòng nhập giá trị lớn hơn không')
    }
}

function getAllocation() {
    var inputs = document.getElementsByClassName("Allocation");
    var rows = parseInt(document.getElementById("processes").value);
    var columns = parseInt(document.getElementById("resources").value);
    var matrix = [];

    var index = 0;
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < columns; j++) {
            var inputValue = parseInt(inputs[index].value);
            row.push(inputValue);
            index++;
        }
        matrix.push(row);
    }

    console.log(matrix);
    return matrix;
}

function getRequest() {
    var inputs = document.getElementsByClassName("Request");
    var rows = parseInt(document.getElementById("processes").value);
    var columns = parseInt(document.getElementById("resources").value);
   
    var matrix = [];

    var index = 0;
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < columns; j++) {
            var inputValue = parseInt(inputs[index].value);
            row.push(inputValue);
            index++;
        }
        matrix.push(row);
    }

    console.log(matrix);
    return matrix;
}

function getAvailable() {
    var inputs = document.getElementsByClassName("Available");
    var values = [];
    for (var i = 0; i < inputs.length; i++) {
        var inputValue = parseInt(inputs[i].value);
        values.push(inputValue);
    }
    console.log(values);
    return values;
}

function printNeedTable(need) {
    const text = document.getElementById("needTable");
    text.textContent = "Need Table";
    // Lấy thẻ div để chứa bảng giá trị
    const tableContainer = document.getElementById("needTableContainer");

    // Xóa bảng cũ (nếu có)
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }

    // Tạo bảng mới
    const table = document.createElement("table");
    table.className='table'

    // Tạo tiêu đề cho bảng
    const headerRow = document.createElement("tr");
    for (let j = 0; j <= need[0].length; j++) {
        if(j>0){
        const headerCell = document.createElement("th");
        headerCell.textContent = `R${j}`;
        headerRow.appendChild(headerCell);
        } else{
            const headerCell = document.createElement("th");
            headerRow.appendChild(headerCell);
        }
    }
    table.appendChild(headerRow);

    // Thêm dữ liệu vào bảng
    for (let i = 0; i < need.length; i++) {
        const dataRow = document.createElement("tr");
        var rowHeaderCell = document.createElement("td");
        rowHeaderCell.textContent = "P" + (i + 1);
        dataRow.appendChild(rowHeaderCell);
        for (let j = 0; j < need[i].length; j++) {
            const dataCell = document.createElement("td");
            dataCell.textContent = need[i][j];
            dataRow.appendChild(dataCell);
        }
        table.appendChild(dataRow);
    }

    // Đưa bảng vào thẻ div
    tableContainer.appendChild(table);
}

function printAllocationTable(allocation) {
    const text = document.getElementById("allocationTable");
    text.textContent = "Allocation Table";
    // Lấy thẻ div để chứa bảng giá trị
    const tableContainer = document.getElementById("allocationTableContainer");

    // Xóa bảng cũ (nếu có)
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }

    // Tạo bảng mới
    const table = document.createElement("table");
    table.className='table'
    // Tạo tiêu đề cho bảng
    const headerRow = document.createElement("tr");
    for (let j = 0; j <= allocation[0].length; j++) {
        if(j>0){
        const headerCell = document.createElement("th");
        headerCell.textContent = `R${j}`;
        headerRow.appendChild(headerCell);
        } else{
            const headerCell = document.createElement("th");
            headerRow.appendChild(headerCell);
        }
    }
    table.appendChild(headerRow);

    // Thêm dữ liệu vào bảng
    for (let i = 0; i < allocation.length; i++) {
        const dataRow = document.createElement("tr");
        var rowHeaderCell = document.createElement("td");
        rowHeaderCell.textContent = "P" + (i + 1);
        dataRow.appendChild(rowHeaderCell);
        for (let j = 0; j < allocation[i].length; j++) {
            const dataCell = document.createElement("td");
            dataCell.textContent = allocation[i][j];
            dataRow.appendChild(dataCell);
        }
        table.appendChild(dataRow);
    }

    // Đưa bảng vào thẻ div
    tableContainer.appendChild(table);
}

function printRequestTable(request) {
    const text = document.getElementById("requestTable");
    text.textContent = "Request Table";
    // Lấy thẻ div để chứa bảng giá trị
    const tableContainer = document.getElementById("requestTableContainer");

    // Xóa bảng cũ (nếu có)
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }

    // Tạo bảng mới
    const table = document.createElement("table");
    table.className='table'
    // Tạo tiêu đề cho bảng
    const headerRow = document.createElement("tr");
    for (let j = 0; j <= request[0].length; j++) {
        if(j>0){
        const headerCell = document.createElement("th");
        headerCell.textContent = `R${j}`;
        headerRow.appendChild(headerCell);
        } else{
            const headerCell = document.createElement("th");
            headerRow.appendChild(headerCell);
        }

    }
    table.appendChild(headerRow);

    // Thêm dữ liệu vào bảng
    for (let i = 0; i < request.length; i++) {
        
        const dataRow = document.createElement("tr");
        var rowHeaderCell = document.createElement("td");
        rowHeaderCell.textContent = "P" + (i + 1);
        dataRow.appendChild(rowHeaderCell);
        for (let j = 0; j < request[i].length; j++) {
            const dataCell = document.createElement("td");
            dataCell.textContent = request[i][j];
            dataRow.appendChild(dataCell);
        }
        table.appendChild(dataRow);
    }

    // Đưa bảng vào thẻ div
    tableContainer.appendChild(table);
}

function calculateNeed(P, R, request, allocation,) {
    const apiUrl = "http://localhost:5501/api/calcNeed";

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            P,
            R,
            request,
            allocation,
        }),
    })
        .then((response) => response.json())
        .then((data) => {

            console.log("need", data.need); // Kết quả từ API
            printNeedTable(data.need);
        })
        .catch((error) => {
            console.error("Lỗi:", error);
        });
}

function printResult(data) {
    const text = document.getElementById("txtResult");
    text.textContent = "Result";
    const resultText = document.getElementById("result");

    if (data === "") {
        resultText.textContent = "System is not in safe state";
    } else {
        let output = "System is in safe state, safe sequence is: ";
        for (let i = 0; i < data.length-1; i++) {
            output += `P${data[i]+1} - `;
        }
        output += `P${data[data.length-1]+1}`;
        
        resultText.textContent = output;
    }
}

function printAvailable(available){
    const text = document.getElementById("availableTable");
    text.textContent = "Available Table";
    // Lấy thẻ div để chứa bảng giá trị
    const tableContainer = document.getElementById("availableTableContainer");

    // Xóa bảng cũ (nếu có)
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }

    // Tạo bảng mới
    const table = document.createElement("table");
    table.className='table'
    // Tạo tiêu đề cho bảng
    const headerRow = document.createElement("tr");
    for (let j = 0; j < available[0].length; j++) {
        const headerCell = document.createElement("th");
        headerCell.textContent = `R${j+1}`;
        headerRow.appendChild(headerCell);
        
    }
    table.appendChild(headerRow);

    // Thêm dữ liệu vào bảng
    for (let i = 0; i < available.length; i++) {
        const dataRow = document.createElement("tr");
        for (let j = 0; j < available[i].length; j++) {
            const dataCell = document.createElement("td");
            dataCell.textContent = available[i][j];
            dataRow.appendChild(dataCell);
        }
        table.appendChild(dataRow);
    }

    // Đưa bảng vào thẻ div
    tableContainer.appendChild(table);
}

function calcBanker(P, R, request, allocation, available) {
    const apiUrl = "http://localhost:5501/api/banker";

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            P,
            R,
            request,
            allocation,
            available,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Processes", data.result); // Kết quả từ API
            printResult(data.result);
        })
        .catch((error) => {
            console.error("Lỗi:", error);
        });
}

function calcAvailable(P, R, request, allocation, available) {
    const apiUrl = "http://localhost:5501/api/available";

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            P,
            R,
            request,
            allocation,
            available,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("available", data.result); // Kết quả từ API
            printAvailable(data.result);
        })
        .catch((error) => {
            console.error("Lỗi:", error);
        });
}

function Banker() {
    const P = parseInt(document.getElementById("processes").value);
    const R = parseInt(document.getElementById("resources").value);
    
    const tbrs=document.querySelector('.tbrs');
    const request = getRequest();
    const allocation = getAllocation();
    const available = getAvailable();


    // P = 5; // Number of processes
    // R = 3; // Number of resources
    // let allocation = [[0, 1, 0], // P0 // Allocation Matrix
    // [2, 0, 0], // P1
    // [3, 0, 2], // P2
    // [2, 1, 1], // P3
    // [0, 0, 2]]; // P4

    // let request = [[7, 5, 3], // P0 // MAX Matrix
    // [3, 2, 2], // P1
    // [9, 0, 2], // P2
    // [2, 2, 2], // P3
    // [4, 3, 3]]; // P4

    // let available = [3, 3, 2]; // Available Resources

    printAllocationTable(allocation);
    printRequestTable(request);
    calculateNeed(P, R, request, allocation);
    calcAvailable(P, R, request, allocation, available);
    calcBanker(P, R, request, allocation, available);
   
    tbrs.classList.remove('open');
    tbrs.classList.add('open');
}