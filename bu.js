const url = 'https://blogtruyen.vn/32010/scummy-bandsman-bocchi';
let i = 0
let mgs = '';
async function buff(){
	await fetch (url)
	.then(res => {
		//console.log(res.status);
		if(res.status === 200){
			console.log('đã bú: '+ i +' view')
			i++;
		}
	})
	.catch(e => mgs = e.message);
	
}
setInterval(buff, 0);
	

