let promiseArray=[
	new promise((resolve,reject)=>{
		let startTime=Date.now();
		setTimeout(()=>{
			let endTime=Date.now();
			resolve({message:"promise1 resolved",timetaken:endTime-startTime}),Math.random()*3000)
					   }
	}),
	new promise((resolve,reject)=>{
		let startTime=Date.now();
		setTimeout(()=>
			{let endTime=Date.now();
			resolve({message:"promise2 resolved",timetaken:endTime-startTime}),Math.random()*3000)}
	}),
	new promise((resolve,reject)=>{
		let startTime=Date.now();
				setTimeout(()=>
					{let endTime=Date.now();
					resolve({message:"promise3 resolves",timetaken:endTime-startTime}),Maths.random()*3000)}
			})
	})
]

promise.all(promiseArray).then((datas)=>{
	datas.forEach((data)=>{
		let var=document.getElementById('tableis')
		var.innerHTML=``;
		var.innerHTML=`
		<td>${data.message}</td>
		<td>${data.timetaken}</td>
	`
	})
	
		
})