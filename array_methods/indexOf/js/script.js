   const arr = [1, 3, 4, 6, 4];
   let position1 = arr.indexOf(4);
   console.log(position1);
   let position2 = arr.indexOf(10);
   console.log(position2);
   
   
   
    const breackfest = ["Яичница", "колбаса", "Шампанское"];
	const shampane = breackfest.indexOf("Шампанское");
	if (shampane != -1) {
    console.log("Месье алкоголик!");
	}
	if (breackfest.includes("Шампанское")) {
    console.log("Месье алкоголик!");
	}