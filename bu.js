// url ="https://hentaivn.la/32421-59807-xem-truyen-mon-leo-thieu-nghi-luc-va-khau-sung-cuop-co-oneshot.html";  

// async function buff(){
// 	await fetch (url)
// 	.then(res => console.log(res.status))
// 	.catch(e => console.log(e.message));
// }
// setInterval(buff, 0);

const url = 'https://blogtruyen.vn/32010/scummy-bandsman-bocchi';
//const url = 'https://hentaivn.tv/32574-60121-xem-truyen-imouto-to-lockdown-%E2%88%9Ahell-end-.html';
let i = 0
async function buff(){
	await fetch (url)
	.then(res => {
		//console.log(res.status);
		if(res.status === 200)
			console.log('đã bú: '+ i +' view')
	})
	.catch(e => console.log(e.message));
	i++;
}
setInterval(buff, 0);
	

