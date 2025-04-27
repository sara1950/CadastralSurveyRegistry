<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <link rel="stylesheet" href="login.css">
    
</head>
<body>

    <div class="container" id="signUp" style="display:none;">
        <h1 class="form-title">Registriraj se</h1>
        <form method="POST" action="register.php">

<div class="input-group" >
<i class ="fas fa-user"></i>
    <input type="text" name="fName" id="fName" placeholder="Ime" required> <br><br>
</div>

<div class="input-group" >
    <i class ="fas fa-user"></i>
        <input type="text" name="lName" id="lName" placeholder="Prezime"required> <br><br>
    </div>

    <div class="input-group" >
        <i class ="fas fa-envelope"></i>
            <input type="email" name="email" id="email" placeholder="Email"required> <br><br>
        </div>
    

        <div class="input-group" >
            <i class ="fas fa-lock"></i>
                <input type="password" name="password" id="password" placeholder="Lozinka"required> <br><br>
            </div>
        
            <input type="submit" class="btn" name="signUp" value="Registriraj se"><br><br>

        </form>

<div class="links">
    <p>Već imate račun?</p>
    <button id="signInButton">Prijavi se
    </button>
</div>

</div>


<div class="container" id="signIn">
    <h1 class="form-title">Prijavi se</h1>
    <form method="POST" action="register.php">

<div class="input-group" >
    <i class ="fas fa-envelope"></i>
        <input type="email" name="email" id="email" placeholder="Email" required> <br><br>
    </div>
    <div class="input-group" >
        <i class ="fas fa-lock"></i>
            <input type="password" name="password" id="password" placeholder="Lozinka" required> <br><br>
        </div>
     <input type="submit" class="btn" name="signIn" value="Prijavi se"><br><br>

    </form>


<div class="links">
<p>Nemate račun?</p>
<button id="signUpButton">Registracija</button>


</div>



</div>







<script>

const signUpButton = document.getElementById("signUpButton");

const signInButton = document.getElementById("signInButton");

const signInForm = document.getElementById("signIn");

const signUpForm = document.getElementById("signUp");

signUpButton.addEventListener("click", function(){
    signInForm.style.display='none';
    signUpForm.style.display='block';
})


signInButton.addEventListener("click", function(){
    signInForm.style.display='block';
    signUpForm.style.display='none';
})
</script>




         
    
</body>
</html>