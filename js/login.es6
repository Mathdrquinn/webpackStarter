let login = (username, password) => {
    if (username !== 'brendan' || password !== 'word') {
        console.log('incorrect credentials');
    } else {
        console.log('success');
        console.count('success');
    }
};

// login('brendan', 'theword');

export {
    login,
}