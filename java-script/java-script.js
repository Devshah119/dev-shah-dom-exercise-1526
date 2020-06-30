// Task-1 //

	let tagID = document.getElementById('tag-line'); // 1 //

	let topics = document.querySelectorAll('.bg-main-content h2'); // 2 //

	let collect = tagID.innerText; // 3 //
	collect = collect+"\n----------------------------------------------\n";

	for (let i = 0; i < topics.length; i++) // 4 //
	{
		collect = collect + topics[i].innerText + "\n";
	}

	alert(collect); // 5 //

// Task-2 //

	let allElements = document.querySelectorAll('.bg-main-content .box'); // 1 //

	let element13 = allElements[12]; // 2 //

	let collect1 = element13.querySelector('h2').innerText + "\n----------------------------------------------\n"; // 3 //
	let maintext = element13.querySelectorAll('p');
	for (let x = 0; x < maintext.length; x++) 
	{
		collect1 = collect1 + maintext[x].innerText + "\n\n";
	}

	alert(collect1); // 4 //