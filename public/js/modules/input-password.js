function inputPassword() {
    const work = document.querySelector('[data-script="admin"]');
    if(work){
        const form = document.forms.admin;
        let login = localStorage.getItem('login');
        let password = localStorage.getItem('password');
        if(login) {
            form.login.value = login;
            form.password.value = password;
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            login = form.login.value;
            password = form.password.value;
            localStorage.setItem('login', login);
            localStorage.setItem('password', password);

            fetch('/admin-filippov', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({login, password})
            })
            .then(res => res.json())
            .then(data => {
                if(data.res) {
                    localStorage.setItem('access', 'ok');
                    window.location.href = '/data-start';
                }else{
                    delete localStorage.access;
                    return
                }
            });
        });
    }
}

export default inputPassword;