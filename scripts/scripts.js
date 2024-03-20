const dados = [
    {
        username: 'mkamersandrade@gmail.com',
        password: 'matheus123'
    },
    {
        username: 'adm@gmail.com',
        password: 'adm123'
    },
]
const signinBtn = document.getElementById("signin");
const signupBtn = document.getElementById("signup");

signinBtn.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username && !password) {
        alert("Por favor, preencha todos os campos.");
    } else {
        let found = false;
    for (const user of dados) {
        if (user.username === username && user.password === password) {
            found = true;
            alert("Login bem-sucedido!");
            break;
        }
    }
    if (!found) {
        alert("Nome de usuário ou senha incorretos.");
    }
    }
});

function register() {
    const username = document.getElementById("username-register").value;
    const password = document.getElementById("password-register").value;

    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
    } else {
        let exist = false;
        for (const user of dados) {
            if (user.username === username) {
                exist = true;
                alert("Usuário já cadastrado.");
                break;
            }
        }
        if (!exist) {
            dados.push({
                username: username,
                password: password
            });
            alert("Usuário cadastrado com sucesso!");
        }
    }
}