const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const startButton = document.getElementById("start");
var openDoor1;
var openDoor2;
var openDoor3;
var numClosedDoors = 3;
var currentlyPlaying = true;
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}
doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}
doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

startButton.onclick = () => {
    if (!currentlyPlaying) {
        numClosedDoors = 3;
        currentlyPlaying = true;
        doorImage1.src = closedDoorPath;
        doorImage2.src = closedDoorPath;
        doorImage3.src = closedDoorPath;
        startButton.innerHTML = 'Good luck!';
        randomChoreDoorGenerator();
    }
}

const gameOver = status => {
    if (status === 'win') {
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.innerHTML = "Game over! Play again?";
    }
    currentlyPlaying = false;
}


const isBot = door => door.src === botDoorPath;

const isClicked = door => door.src !== closedDoorPath;

const playDoor = door => {
    numClosedDoors --;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}

const randomChoreDoorGenerator = () => {
    var choreDoor = Math.floor(6 * Math.random());
    switch (choreDoor) {
        case 0:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 1:
            openDoor1 = botDoorPath;
            openDoor3 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            break;
        case 2:
            openDoor2 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 3:
            openDoor2 = botDoorPath;
            openDoor3 = beachDoorPath;
            openDoor1 = spaceDoorPath;
            break;
        case 4:
            openDoor3 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor1 = spaceDoorPath;
            break;
        case 5:
            openDoor3 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            break;
        
    }
}



randomChoreDoorGenerator();