export function authHeader() {
    const  accessToken  = JSON.parse(localStorage.getItem('accessToken'));
    if (accessToken) {
    	return { 'Authorization': 'Bearer ' + accessToken['token'], 'processData': false };
	}
	return '';
}	