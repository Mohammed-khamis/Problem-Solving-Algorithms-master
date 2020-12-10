console.log('Problem Solving Q:23 ');

/*parseQueryString   */

/*  
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/

function parseQueryString(str) {
	const paramsArr = [];
	const query = [];
	if (str.indexOf('&') !== -1 && str.indexOf('?') !== -1) {
		const params = str.split('?')[1].split('&');
		for (let i = 0; i < params.length; i++) {
			params[i] = params[i].split('=');
			if (params[i][1].indexOf('%20') !== -1) {
				params[i][1] = params[i][1].split('%20').join(' ');
			}
		}
		query.push(params);
		return query;
	} else if (str.indexOf('?') !== -1) {
		const params = str.split('?')[1].split('=');
		if (params[1].indexOf('%20') !== -1) {
			params[1] = params[1].split('%20').join(' ');
			query.push(params);
		} else {
			query.push(params);
		}

		return query;
	} else {
		return undefined;
	}
}

console.log(parseQueryString('http://example.com?a=hello&b=99'));
console.log(parseQueryString('http://example.com?msg=hello%20world'));
console.log(parseQueryString('http://example.com'));

/* 
Examples:
parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/
