import React from 'react';
import './Settings.css';
import TetrisTurn from './TetrisTurn.js'
// import { NavLink } from 'react-router-dom';


const Settings = () => {


    global.x = "";
    global.fallIsTrue = false;
    global.counter = document.querySelector('.counter');
    global.counterNumber = 0;
    global.noneActiveElement = '<div class="noneActiveElement"></div>'
    global.activeElement = '<div class="activeElement"></div>'


    global.state = {
        positionActiveElement: "",
        coordinatesAllFallElements: [{top: 15, left: 15}],
        directionActiveFigure: 0,
        shapeActiveFigure: "snake",
    };


    let getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    let informationOfNewElement = () => {
        let activeFigure = getRandomIntInclusive(0, 6);
            if(activeFigure === 0){
                global.state.positionActiveElement = [{top: 0, left: 7}, {top: 0, left: 8}, {top: 0, left: 9}, {top: 0, left: 10}];
            global.state.directionActiveFigure = 0;
            global.state.shapeActiveFigure =  "snake";

            } else if(activeFigure === 1){
            global.state.positionActiveElement = [{top: 0, left: 7}, {top: 0, left: 8}, {top: 1, left: 7}, {top: 1, left: 8}];
            global.state.directionActiveFigure = 0;
            global.state.shapeActiveFigure =  "square";

            } else if(activeFigure === 2){
            global.state.positionActiveElement = [{top: 0, left: 7}, {top: 0, left: 8}, {top: 0, left: 9}, {top: 1, left: 8}];
            global.state.directionActiveFigure = 0;
            global.state.shapeActiveFigure =  "pyramid";

            } else if(activeFigure === 3){
            global.state.positionActiveElement = [{top: 0, left: 7}, {top: 0, left: 8}, {top: 1, left: 8}, {top: 1, left: 9}];
            global.state.directionActiveFigure = 0;
            global.state.shapeActiveFigure =  "lightning";

            } else if(activeFigure === 4){
            global.state.positionActiveElement = [{top: 0, left: 8}, {top: 0, left: 7}, {top: 1, left: 7}, {top: 1, left: 6}];
            global.state.directionActiveFigure = 0;
            global.state.shapeActiveFigure =  "reverseLightning";

            } else if(activeFigure === 5){
            global.state.positionActiveElement = [{top: 0, left: 7}, {top: 0, left: 8}, {top: 0, left: 9}, {top: 1, left: 9}];
            global.state.directionActiveFigure = 0;
            global.state.shapeActiveFigure =  "horse";

            } else if(activeFigure === 6){
            global.state.positionActiveElement = [{top: 0, left: 9}, {top: 0, left: 8}, {top: 0, left: 7}, {top: 1, left: 7}];
            global.state.directionActiveFigure = 0;
            global.state.shapeActiveFigure =  "reverseHorse";
            };
        //     global.state.positionActiveElement.forEach((active) => {
        //     global.state.coordinatesAllFallElements.find((item) => {
        //     // if(active.top == item.top && active.left == item.left){
        //     //     clearTime();
        //     // }
        //     })
        // })
        global.fallIsTrue = true;
    }



    global.tableSquareVertSize = 15;
    global.tableSquareHorizonSize = 14;






    global.arrayTable = [];


    let renderOne = () => {
        var theWholeTable = document.querySelector('.table');
        var variableCreateStringInTable = 0;
        var variableAlternateString = 0;
        var tableSquareVertSize = 15;
        var tableSquareHorizonSize = 14;
        
        while(variableCreateStringInTable < tableSquareVertSize){
            theWholeTable.innerHTML += `<div class="string"></div>`;
            variableCreateStringInTable++;
        };

        var tableString = document.querySelectorAll('.string');

        while(variableAlternateString < tableSquareVertSize) {
            let variableCreateItemInString = 0;
            while(variableCreateItemInString < tableSquareHorizonSize){
                tableString[variableAlternateString].innerHTML += `<div class="item" id="id_${variableCreateItemInString}_${variableAlternateString}">${global.noneActiveElement}</div>`
                variableCreateItemInString++;
            };
            variableAlternateString++;
            var item = document.querySelectorAll('.item');
            global.item = item;
        };
    }


    let startGame = () => {
        informationOfNewElement();
        var tableSquareVertSize = 15;
        var tableSquareHorizonSize = 14;
        console.log("Start!");
        let petem = 0;
        while(petem < tableSquareVertSize){
            let mepet = 0;
            var arrayString = [];
            while(mepet < tableSquareHorizonSize){
                arrayString.push(document.querySelector(`#id_${mepet}_${petem}`))
                mepet++;
            };
            global.arrayTable.push(arrayString);
            petem++;
        }
        global.state.positionActiveElement.forEach((item) => {
            global.arrayTable[item.top][item.left].innerHTML = global.activeElement;
        });
        global.timer = setTimeout(moveActiveFigure, 500);
    };


    let moveActiveFigure = () => {
        global.fallIsTrue = false;
        global.state.positionActiveElement.forEach((item) => {
            global.arrayTable[item.top][item.left].innerHTML = global.noneActiveElement;
            item.top++;
        });
        if(checkDropOnAnotherElement()){
            return;
        };
        draw();
        nextElement();
        global.timer = setTimeout(moveActiveFigure, 500);
    }


    let checkDropOnAnotherElement= () => {
        global.state.coordinatesAllFallElements.forEach((fall) => {
          if(global.state.positionActiveElement.find((active) => active.top === fall.top && active.left === fall.left)){
            global.state.positionActiveElement.forEach((item) => {
              item.top--;
              global.arrayTable[item.top][item.left].innerHTML = global.activeElement;
              global.state.coordinatesAllFallElements.push(item);
              informationOfNewElement();
            });
            fallFigure();
            return;
          };
        })
    };


    let nextElement = () => {
    if(global.state.positionActiveElement.find((item) => item.top === 14)){
        global.state.positionActiveElement.forEach((item) => {
            global.state.coordinatesAllFallElements.push(item);
        informationOfNewElement();
        });
        fallFigure();
    };
    }


    let moveRight = () => {
        global.state.coordinatesAllFallElements.forEach((i) => {
            if(global.state.positionActiveElement.find((item) => ((item.left + 1) === 14) || ((item.left + 1) === i.left && item.top === i.top))){
                global.state.positionActiveElement.forEach((item) => {
                item.left--;
                });
            };
        })
        global.state.positionActiveElement.forEach((active) => {
            global.arrayTable[active.top][active.left].innerHTML = global.noneActiveElement;
            active.left++;
        });
        draw();
    };


    let moveLeft = () => {
        let isCollision = false;
        global.state.coordinatesAllFallElements.forEach((arrayItem) => {
            isCollision = global.state.positionActiveElement
            .find((item) => (item.left === 0)
                || ((item.left - 1) === arrayItem.left && item.top === arrayItem.top)
            );
        })
        if(isCollision){
            return
        };
        global.state.positionActiveElement.forEach((active) => {
            global.arrayTable[active.top][active.left].innerHTML = global.noneActiveElement;
            active.left--;
        });
        draw();
    };

    let draw = () => {
        global.state.positionActiveElement.forEach((active) => {
            global.arrayTable[active.top][active.left].innerHTML = global.activeElement;
        });
    }

    let fallFigure = () => {
        let numberString = global.tableSquareVertSize;
        while(numberString > 0){
            let newArray = global.state.coordinatesAllFallElements.filter(item => item.top === numberString);
            if(newArray.length >= 14){
                let counter = document.querySelector('.counter');
                global.counterNumber++;
                counter.innerHTML = global.counterNumber;
                console.log(numberString, " удалить эту строку");
                let numberElement = 0;
                while(numberElement < global.state.coordinatesAllFallElements.length){
                    if(global.state.coordinatesAllFallElements[numberElement].top === numberString){
                    global.state.coordinatesAllFallElements.splice(numberElement, 1);
                    numberElement--;
                    };
                    numberElement++;
                };
                let deleteOne = 0;
                while(deleteOne < global.tableSquareHorizonSize){
                global.arrayTable[numberString][deleteOne].innerHTML = global.noneActiveElement;
                    deleteOne++;
                };
                let moveString = 0;
                global.state.coordinatesAllFallElements.sort((prev, next) => next.top - prev.top);
                while(moveString < global.state.coordinatesAllFallElements.length){
                    if(global.state.coordinatesAllFallElements[moveString].top < numberString){
                        global.arrayTable[global.state.coordinatesAllFallElements[moveString].top][global.state.coordinatesAllFallElements[moveString].left].innerHTML = global.noneActiveElement;
                        global.state.coordinatesAllFallElements[moveString].top++;
                        global.arrayTable[global.state.coordinatesAllFallElements[moveString].top][global.state.coordinatesAllFallElements[moveString].left].innerHTML = global.activeElement;
                    };
                    moveString++;
                };
                numberString++;
            };
            numberString--;
        };
    };






    let moveDown = () => {
        if(global.fallIsTrue){
            return;
        }
        let t = [];
        global.state.positionActiveElement.forEach((u) => t.push(u.top))
        t.sort(function (a, b) {
            return a - b;
        })
        global.x = t[3];
        moveWhileDown();
        while(global.x < 13){
            global.state.positionActiveElement.forEach((active) => {
                global.arrayTable[active.top][active.left].innerHTML = global.noneActiveElement;
            active.top++;
            });
            moveWhileDown();
            global.x++;
        };
        draw();
    };




    let moveWhileDown = () => {
        global.state.positionActiveElement.forEach((active) => {
            global.state.coordinatesAllFallElements.forEach((item) => {
            if(active.left === item.left && active.top === (item.top - 1)){
                global.x += 14;
            };
            });
        });
    };



    document.addEventListener('keyup', function(event){
        if (event.code === "ArrowLeft") {
            moveLeft();
        }
    });
    document.addEventListener('keyup', function(event){
        if (event.code === "ArrowUp") {
            TetrisTurn();
        }
    });
    document.addEventListener('keyup', function(event){
        if (event.code === "ArrowRight") {
            moveRight();
        }
    });
    document.addEventListener('keyup', function(event){
        if (event.code === "ArrowDown") {
            moveDown()
        }
    });



    return (
     <div>
       <div className="table"></div>
       <div className="counter"></div>

        <div className="allButtons">
            <button className="button-clear">Стоп</button>
            <button className="button" onClick={startGame}>Старт</button>
            <button className="button-left" onClick={moveLeft}>Лево</button>
            <button className="button-right" onClick={moveRight}>Право</button>
            <button className="button-turn" onClick={TetrisTurn}>Turn</button>
            <button className="render" onClick={renderOne}>render</button>
        </div>
     </div>
    )
};

export default Settings