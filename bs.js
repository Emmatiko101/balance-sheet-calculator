var rowCount = 1;
document.getElementById("addRow").onclick = function() {
  rowCount++;
  var table = document.getElementsByTagName("table")[0];
  var row = table.insertRow(-1);
  var snCell = row.insertCell(0);
  var accountNameCell = row.insertCell(1);
  var debitCell = row.insertCell(2);
  var creditCell = row.insertCell(3);
  snCell.innerHTML = rowCount;
  accountNameCell.innerHTML = "<input type='text' id='accountName" + rowCount + "'>";
  debitCell.innerHTML = "<input type='text' id='debit" + rowCount + "'>";
  creditCell.innerHTML = "<input type='text' id='credit" + rowCount + "'>";
};

document.getElementById("checkBalance").onclick = function() {
  var totalDebit = 0;
  var totalCredit = 0;

  for (var i = 1; i <= rowCount; i++) {
    var debitValue = parseFloat(document.getElementById("debit" + i).value) || 0;
    var creditValue = parseFloat(document.getElementById("credit" + i).value) || 0;
    totalDebit += debitValue;
    totalCredit += creditValue;
  }

  // Create a row to display the totals
  var table = document.getElementsByTagName("table")[0];
  var row = table.insertRow(-1);
  var snCell = row.insertCell(0);
  var accountNameCell = row.insertCell(1);
  var debitCell = row.insertCell(2);
  var creditCell = row.insertCell(3);
  snCell.innerHTML = "-";
  accountNameCell.innerHTML = "TOTAL";
  debitCell.innerHTML = totalDebit;
  creditCell.innerHTML = totalCredit;

  var notification = document.getElementById("notification");
  if (totalDebit === totalCredit) {
    notification.innerHTML = "SUCCESSFUL TRIAL BALANCE!!";
    notification.className = "notification success";
  } else {
    notification.innerHTML = "UNSUCCESSFUL TRIAL BALANCE!!";
    notification.className = "notification error";
  }

  
  notification.style.display = "block";

  
  setTimeout(function() {
    notification.style.display = "none";
  }, 30000);
};