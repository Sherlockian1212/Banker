function createAllocation() {
    var rows = parseInt(document.getElementById("processes").value);
    var columns = parseInt(document.getElementById("resources").value);

    var table = document.getElementById("Allocation");

    // Xóa bảng cũ (nếu có)
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // Tạo bảng mới với n dòng và m cột
    for (var i = 0; i < rows; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
            var cell = document.createElement("td");
            var input = document.createElement("input");
            input.type = "number";
            input.className = "Allocation";
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
    for (var i = 0; i < rows; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
            var cell = document.createElement("td");
            var input = document.createElement("input");
            input.type = "number";
            input.className = "Request";
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
    for (var i = 0; i < rows; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
            var cell = document.createElement("td");
            var input = document.createElement("input");
            input.type = "number";
            input.className = "Available";
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
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
    // Lấy thẻ div để chứa bảng giá trị
    const tableContainer = document.getElementById("needTableContainer");

    // Xóa bảng cũ (nếu có)
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }

    // Tạo bảng mới
    const table = document.createElement("table");

    // Tạo tiêu đề cho bảng
    const headerRow = document.createElement("tr");
    for (let j = 0; j < need[0].length; j++) {
        const headerCell = document.createElement("th");
        headerCell.textContent = `Tài nguyên ${j + 1}`;
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    // Thêm dữ liệu vào bảng
    for (let i = 0; i < need.length; i++) {
        const dataRow = document.createElement("tr");
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

function Banker() {
    const P = parseInt(document.getElementById("processes").value);
    const R = parseInt(document.getElementById("resources").value);
    const request = getRequest();
    const allocation = getAllocation();
    const available = getAvailable();

    calculateNeed(P, R, request, allocation);
}