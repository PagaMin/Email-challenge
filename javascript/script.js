function logar() {
    let email = document.getElementById("field-email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Invalid Email");
        document.getElementById("field-email").value = "";
    } else {
        alert("Success");
        window.location.href = "../html/thank-pag.html?email=" + encodeURIComponent(email);
    }
}

function logarMobile() {
    let email = document.getElementById("field-email-mobile").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Invalid Email");
        document.getElementById("field-email-mobile").value = "";
    } else {
        alert("Success");
        window.location.href = "../html/thank-pag.html?email=" + encodeURIComponent(email);
    }
}

function carregar() {
    const emailTrocado = document.getElementById("change-email");
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");
    emailTrocado.textContent = email;
}

/* ----------------- Explain Function carregar() -----------------

Em seguida, se o email for válido, a página é redirecionada para "thank-pag.html" com o email como um parâmetro na URL. Na página "thank-pag.html", o JavaScript na função carregar() recupera o email da URL usando URLSearchParams e o atribui ao elemento span com o ID "change-email".

Then, if the email is valid, the page is redirected to 'thank-pag.html' with the email as a parameter in the URL. On the 'thank-pag.html' page, the JavaScript in the load() function retrieves the email from the URL using URLSearchParams and assigns it to the span element with the id 'change-email'.*/


