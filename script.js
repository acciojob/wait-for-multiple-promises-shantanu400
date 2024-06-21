let PromiseArray=[
	new Promise((resolve,reject)=>{
		let startTime=Date.now();
		setTimeout(()=>{
			let endTime=Date.now();
			resolve({message:"Promise1 resolved",timetaken:endTime-startTime});
		},Math.random()*3000);
	}),
	new Promise((resolve,reject)=>{
		let startTime=Date.now();
		setTimeout(()=>{
			let endTime=Date.now();
			resolve({message:"Promise2 resolved",timetaken:endTime-startTime});
		},Math.random()*3000);
	}),
	new Promise((resolve,reject)=>{
		let startTime=Date.now();
				setTimeout(()=>{
					let endTime=Date.now();
					resolve({message:"Promise3 resolves",timetaken:endTime-startTime});
				},Math.random()*3000);
			
	})
]
let totalTime=0;
let var=document.getElementById('tableis');
var.innerHTML=``;
Promise.all(PromiseArray).then((datas)=>{

	datas.forEach((data)=>{
		let var=document.getElementById('tableis');
		totalTime+=data.timetaken;
		var.innerHTML=`
		<td>${data.message}</td>
		<td>${data.timetaken}</td>
	`
	});
	var.innerHTML+=`
		<tr>
		<td>Total</td>
		<td>${totalTime}</td>
		</tr>
	`

}).catch((error)=>{
	console.log(`Error: ${error}`)
});


	
	
		
