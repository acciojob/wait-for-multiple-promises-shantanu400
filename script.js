//your JS code here. If required.
function myPromise(name,age){
	return new promise((res,rej)=>{
		setTimeout(()=>{
			if(age>18){
				resolve(
					alert("Welcome,",{name},". you can vote");
				)
				
			}
			else{
				reject({result: "Oh sorry",{name},". You aren't old enough."})
			}
		},4000);
	});
	myPromise().then((data)=>{
		
	}).catch((err)=>{
		alert(err)
	}
}