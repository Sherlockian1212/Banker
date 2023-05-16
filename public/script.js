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
        })
        .catch((error) => {
            console.error("Lỗi:", error);
        });
}


function createTable(P, R) {
    const tableContainer = document.getElementById("tableContainer");

    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }

    const table = document.createElement("table");

    const headerRow = document.createElement("tr");
    const headerCell1 = document.createElement("th");
    headerCell1.textContent = `Processes`;
    headerRow.appendChild(headerCell1);
    const headerCell2 = document.createElement("th");
    headerCell2.textContent = `Allocation`;
    headerRow.appendChild(headerCell2);
    const headerCell3 = document.createElement("th");
    headerCell3.textContent = `Request`;
    headerRow.appendChild(headerCell3);
    const headerCell4 = document.createElement("th");
    headerCell4.textContent = `Available`;
    headerRow.appendChild(headerCell4);
    const headerCell5 = document.createElement("th");
    headerCell5.textContent = `Need`;
    headerRow.appendChild(headerCell5);
    const headerCell6 = document.createElement("th");
    headerCell6.textContent = `Progress order`;
    headerRow.appendChild(headerCell6);

    table.appendChild(headerRow);

    // Thêm dữ liệu vào bảng


    // Đưa bảng vào thẻ div
    tableContainer.appendChild(table);
}


function Banker() {
    const P = parseInt(document.getElementById("processes").value);
    const R = parseInt(document.getElementById("resources").value);
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

    calculateNeed(P, R, request, allocation);
    //createTable(P, R);
    calcBanker(P, R, request, allocation, available);
}