let registerbtn = document.getElementById('registerbtn');
let accounttrick = document.getElementById('accounttrick');
let checkbox1 = document.getElementById('checkbox1');
let checkbox2 = document.getElementById('checkbox2');
let checkbox3 = document.getElementById('checkbox3');
let submit2 = document.getElementById('submit2');
let result = document.getElementById('result'); // result for the checkboxes
let languageCheckbox = document.getElementById('languageCheckbox');
let loginTitle = document.getElementById('loginTitle');
let loginUser = document.getElementById('loginUser');
let passwordBox = document.getElementById('passwordBox');
let submit = document.getElementById('submit');

let introTitle = document.getElementById('introTitle');
let categories = document.getElementById('categories');
let adhd = document.getElementById('adhd');
let hobbiesTitle = document.getElementById('hobbiesTitle');
let programmingHobby = document.getElementById('programmingHobby');
let gamingHobby = document.getElementById('gamingHobby');
let bikingHobby = document.getElementById('bikingHobby');
let mentionTitle = document.getElementById('mentionTitle');
let honestQuestion = document.getElementById('honestQuestion');
let gamesTitle = document.getElementById('gamesTitle');
let game1 = document.getElementById('game1');
let mention = document.getElementById('mention');
let game2 = document.getElementById('game2');
let game3 = document.getElementById('game3');
let game4 = document.getElementById('game4');
let game5 = document.getElementById('game5');
let game6 = document.getElementById('game6');
let game7 = document.getElementById('game7');
let game8 = document.getElementById('game8');
let game9 = document.getElementById('game9');
let game10 = document.getElementById('game10');
let thanksTitle = document.getElementById('thanksTitle');
let contactInfo = document.getElementById('contactInfo');
let food = document.getElementById('food');
let real = document.getElementById('real');
let wannamention = document.getElementById('wannamention');
let brocode = document.getElementById('brocode');
let github = document.getElementById('github');
let quote1 = document.getElementById('quote1');
let quote2 = document.getElementById('quote2');
let quote3 = document.getElementById('quote3');
let quote4 = document.getElementById('quote4');
let pizza = document.getElementById('pizza');
let box = document.getElementById('box');
let wiseman = document.getElementById('wiseman');
let player = document.getElementById('player');

registerbtn.onclick = function() {
    registerbtn.textContent = "";
    accounttrick.textContent = "Just kidding, scroll down";
}



submit2.onclick = function() {
    if (checkbox1.checked) {
        result.textContent = "Thanks You're Awesome!";
    } else if (checkbox2.checked) {
        result.textContent = "It's Okay But I hate you!";
    } else if (checkbox3.checked) {
        result.textContent = "Nice Atleast Someone is there!";
    } else {
        result.textContent = "Please select an option, It's Not Neccessary But It's Fun!";
    }
}

languageCheckbox.onclick = function() {
    if (languageCheckbox.checked) {
        loginTitle.textContent = "Zaloguj się";
        loginUser.placeholder = "Nazwa użytkownika";
        passwordBox.placeholder = "Hasło";
        submit.textContent = "Zaloguj się";
        accounttrick.innerHTML = 'Nie masz konta? <button id="registerbtn">Zarejestruj się teraz!</button>';
        registerbtn = document.getElementById('registerbtn');
        registerbtn.onclick = function() {
            registerbtn.textContent = "";
            accounttrick.textContent = "Żartuję, przewiń w dół";
        }

        quotetitle.textContent = "Cytaty";
        player.textContent = "~Jakiś Gracz Fortnite";
        wiseman.textContent = "~mądry człowiek";
        box.textContent = "~Hater Czekolady"
        pizza.textContent = "~Miłośnik pizzy";
        quote1.textContent = "Życie jest jak Fortnite, nie zdobywasz materiałów niszcząc budowle innych.";
        quote2.textContent = "Życie jest jak pudełko czekoladek, nigdy nie wiesz, na co trafisz.";
        quote3.textContent = "Cisza jest złotem, taśma klejąca jest srebrem";
        quote4.textContent = "Nie ma takiej rzeczy jak za dużo pizzy";
        categories.textContent = "Moje ulubione w kategoriach";
        spaghetti.textContent = "Moje ulubione jedzenie to spaghetti"
        github.textContent = "Nie jestem bogaty, dlatego korzystam z Githuba";
        brocode.textContent = "Gdyby nie Bro Code ta strona by nie istniała";
        wannamention.textContent = "To wszystko, o czym chcę wspomnieć";
        food.textContent = "Jedzenie";
        adhd.textContent = "Mam ADHD";
        mention.textContent = "Rzeczy, które chcę wspomnieć:";
        real.textContent = "Teraz Naprawdę";
        introTitle.textContent = "Cześć, jestem Lazy5ive, możesz mnie znać jako 'getnoobhaha', 'dimsum' lub inne pseudonimy. nie pamiętam wszystkich";
        hobbiesTitle.textContent = "Moje hobby to:";
        programmingHobby.textContent = "Programowanie, możesz się domyślić";
        gamingHobby.textContent = "Granie w gry, nie jestem w nie dobry";
        bikingHobby.textContent = "Jazda na rowerze";
        mentionTitle.textContent = "Rzeczy, które chcę wspomnieć:";
        honestQuestion.textContent = "Bądź szczery, czy przeczytałeś to wszystko?";
        gamesTitle.textContent = "Gry";
        labelcheckbox1.textContent = "Tak";
        labelcheckbox2.textContent = "Nie";
        labelcheckbox3.textContent = "Nie";
        labelcheckbox3.textContent = "Trochę Ale Nie Wszystko";
        game1.textContent = "1. Counter-Strike 2";
        game2.textContent = "2. Subnautica";
        game3.textContent = "3. GTA V";
        game4.textContent = "4. The Forest";
        game5.textContent = "5. Sons Of The Forest";
        game6.textContent = "6. Detroit Become Human";
        game7.textContent = "7. Thief Simulator 2";
        game8.textContent = "8. Minecraft";
        game9.textContent = "9. Fortnite";
        game10.textContent = "10. Among Us";
        thanksTitle.textContent = "To wszystko, dziękuję!";
        contactInfo.textContent = "Kontakt: temp@mail.com";
    } else {
        loginTitle.textContent = "Login";
        loginUser.placeholder = "Username";
        passwordBox.placeholder = "Password";
        submit.textContent = "Login";
        accounttrick.innerHTML = 'Dont Have An Account? <button id="registerbtn">Register Now!</button>';
        registerbtn = document.getElementById('registerbtn');
        registerbtn.onclick = function() {
            registerbtn.textContent = "";
            accounttrick.textContent = "Just kidding, scroll down";
        }
        introTitle.textContent = "Hi I'm Lazy5ive, You Might Know Me As 'getnoobhaha', 'dimsum', or even other usernames. i dont remember all of them";
        hobbiesTitle.textContent = "My Hobbies Are:";
        programmingHobby.textContent = "Programming, You can probably guess";
        gamingHobby.textContent = "Playing Games, I'm not good at them";
        bikingHobby.textContent = "Riding My Bike, It's An Old Bike That My Cousin Gave Me. it may be rusty, but it gets the job done";
        mentionTitle.textContent = "Things I Wanna Mention:";
        honestQuestion.textContent = "Be Honest, Did You Even Read Any Of this?";
        gamesTitle.textContent = "Games";
        game1.textContent = "1. Counter-Strike 2";
        game2.textContent = "2. Subnautica";
        game3.textContent = "3. GTA V";
        game4.textContent = "4. The Forest";
        game5.textContent = "5. Sons Of The Forest";
        game6.textContent = "6. Detroit Become Human";
        game7.textContent = "7. Thief Simulator 2";
        game8.textContent = "8. Minecraft";
        game9.textContent = "9. Fortnite";
        game10.textContent = "10. Among Us";
        thanksTitle.textContent = "Thats All, Thank You!";
        contactInfo.textContent = "Contact: temp@mail.com";
    }
}
