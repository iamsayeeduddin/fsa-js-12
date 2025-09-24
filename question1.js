// Calculate the Bill of Your Electricity Consumed
// 160 Units

// 0 - 50 -> 2.5 Rs
// 51 - 100 -> 4 Rs
// 101 - 200 -> 6 Rs
// 200+ -> 8Rs

function calculateBill(units) {
  var amount = 0;

  if (units > 200) {
    var slabUnits = units - 200;
    amount += slabUnits * 8;
    units -= slabUnits;
  }

  if (units > 100) {
    var slabUnits = units - 100;
    amount += slabUnits * 6;
    units -= slabUnits;
  }

  if (units > 50) {
    var slabUnits = units - 50;
    amount += slabUnits * 4;
    units -= slabUnits;
  }

  if (units > 0) amount += units * 2.5;

  return amount;
}

const amountToPay = calculateBill(-2355);

console.log(amountToPay);
