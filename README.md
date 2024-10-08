# Inlämningsuppgift - Javascript 3 - Clock 

#### Projekt på utbildningen:
[Front end webbutvecklare](https://gritacademy.se/front-end-webbutvecklare/) 400 YH-poäng - [Grit Academy](https://gritacademy.se/)  
(2023-2025)

#### Kurs
FE23 | JavaSript 2

___

## Uppgiften

### Applikation
Skapa en applikation med React. Den skall bestå av minst två komponenter. Den första
komponenten "App" skall innehålla en state-variabel som innehåller den nuvarande tiden. Denna
state-variabel måste uppdateras automatiskt varje sekund. Den andra komponenten, "Clock",
skall acceptera ett attribut (props) med ett klockslag (alternativt ett datum och tid) - tiden skall
skrivas ut i formatet HH:MM:SS. Om du har problem att skicka ett objekt som en prop - använd ett
unix-timestamp (getTime) - detta kan sedan användas för att skapa datum-objektet på nytt.

Du kan använda ett extern bibliotek för att formatera ditt klockslag eller använda getHours()/
getMinutes()/getSeconds() metoderna för Date-objektet. Använder du Date-objektet, tänk på att
t.ex. getMinutes() ger dig ett tal, dvs 1, 23 och inte "01", "23".
När du är klar ser du en klocka i din webbläsare som varje sekund uppdateras men den nuvarande
tiden.