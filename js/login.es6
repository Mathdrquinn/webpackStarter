const login = (username, password) => {
    let result = null;

    if (username === 'jackets' && password === 'letmein') {
        console.log('Success!');
        result = 1;
    } else {
        console.log('Failure');
        result = 0
    }

    return result;
}

export default login;