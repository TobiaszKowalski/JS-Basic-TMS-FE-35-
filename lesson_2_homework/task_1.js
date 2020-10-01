var numbers = [  10, 25, 100];
for (let el of numbers) {
	var sum = numbers[0] + numbers[1] + numbers[2];  
  console.log(sum)
  if (typeof el != 'number') (alert("Can`t be calculated"));
  break
}