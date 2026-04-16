let game = prompt('Если виселица то - 0. Если КНБДР ТО - 1. Если угадать число то - 2')
if(game == 0){
    let start = confirm(`Слова: программа, чай, мир, море, небо
    Запомните длину слов. Нужно будет угадать слово по количеству символов.
    Нажмите OK для начала игры`)

    if(start == true){
        let words = ['программа', "чай", "мир", "море", "небо" , "чай", "мир", "море", "небо" ]
        let stages = [
            '_________         ', "\n", 
            '         |         ', '\n',
            '         0         ', '\n',
            '        /|\\       ', '\n',
            '        / \\        ',
        ];
        let wrong = 0; //счетчик ошибок
        let e =0; // счетчик ошибок умноженный на 2
        let answerArray = [] // массив выбрпнного слова в виде символов
        
        let word = words[Math.floor(Math.random() * 10)];// выбор случайного слова из массива

        for(c = 0; c < word.length; c++){
            answerArray[c] = '_'
        }

        let remainingLetters = word.length; //показывает сколько еще надо угадать

        while(remainingLetters > 0){
            alert(answerArray);//показывает каккие буквы угаданы и какие остались
            let guess = prompt('Угадайте букву')//догака пользователя

            if(guess.length != 1){
                alert('Пожалуйста, введите одну букву!');
            }else{
                if(word.indexOf(guess) != -1){
                    let index = word.indexOf(guess);
                    answerArray[index] = guess;
                    remainingLetters--;

                }else{
                    wrong++;
                    e = wrong * 2;
                    if(e <= 8){
                        alert(stages.slice(0, e))
                    }else{
                        alert(stages.slice(0, e))
                        alert("Проиграли!");
                        break;
                    }
                }
            }
        }
        if(answerArray.indexOf('_') == -1){
        alert('Вы победили!');
        }
    }    
}else if (game == 1){
    let b = confirm("Мы закатали камень ножницы и бумага . Попробуйте переиграть нас!. Вы готовы? ");
    let points_computer = 0;
    let points_player = 0;
    for(v = 1; v < 6; v++ ){
        if(b == true){
            let goha = ['камень',"ножницы","бумага" ,'дракон', "рыцарь"]
            let goha2 = goha[Math.floor(Math.random() * goha.length)]
            // let win = false;
            while(goha2 == 'камень'){ //компьютер выбрал камень    
                let uma = prompt("Выбирайте между камень ножницы и бумага") 
                if(uma == 'камень'){ //если пользователь выбрал камень
                    alert(uma + '_VS_' + 'камень');
                    alert('ничья'); //то ничья
                }else if(uma == "бумага" || uma == 'дракон'){  //если пользователь выбрал бумагу
                    alert(uma + '_VS_' + 'камень');
                    points_player++
                    alert('поздравлаем вы победили!'); //то он победил
                }else if(uma == "ножницы" || uma == "рыцарь"){
                    alert(uma + '_VS_' + 'камень');
                    alert('проиграли');
                    points_computer++
                    // win = true;
                }
                break;
            }
            while(goha2 == "ножницы"){
                let uma = prompt("Выбирайте между камень ножницы и бумага") 
                if(uma == goha[1]){
                    alert(uma + '_VS_' + goha[1]);
                    alert('ничья');
                }else if(uma == goha[0] || uma == goha[3]){
                    alert(uma + '_VS_' + goha[1]);
                    points_player++
                    alert('поздравлаем вы победили!');
                }else if(uma == goha[2] || uma == goha[4]){
                    alert(uma + '_VS_' + goha[1]);
                    alert('проиграли');
                    points_computer++
                //     win = true;
                }
                break;
            }
            while(goha2 == goha[2]){
                let uma = prompt("Выбирайте между камень ножницы и бумага") 
                if(uma == goha[2]){
                    alert(uma + '_VS_' + goha[2]);
                    alert('ничья');
                }else if(uma == goha[0]){
                    alert(uma + '_VS_' + goha[2]);
                    alert('проиграли');
                    points_computer++
                }else if(uma == goha[1] || uma == goha[3] || uma == goha[4]){
                    alert(uma + '_VS_' + goha[2]);
                    alert('поздравлаем вы победили!');
                    points_player++
                    // win = true;
                }
                break; 
            }           
            while(goha2 == goha[3]){
                let uma = prompt("Выбирайте между камень ножницы и бумага") 
                if(uma == goha[3]){
                    alert(uma + '_VS_' + goha[3]);
                    alert('ничья');
                }else if(uma == goha[4] || uma == goha[1]){
                    alert(uma + '_VS_' + goha[3]);
                    points_player++
                    alert('поздравлаем вы победили!');
                }else if(uma == goha[2] || uma == goha[0]){
                    alert(uma + '_VS_' + goha[3]);
                    alert('проиграли');
                    points_computer++
                //     win = true;
                }
                break;

            }
            while(goha2 == goha[4]){
                let uma = prompt("Выбирайте между камень ножницы и бумага") 
                if(uma == goha[4]){
                    alert(uma + '_VS_' + goha[4]);
                    alert('ничья');
                }else if(uma == goha[0] || uma == goha[1]){
                    alert(uma + '_VS_' + goha[4]);
                    points_player++
                    alert('поздравлаем вы победили!');
                }else if(uma == goha[3] || uma == goha[2]){
                    alert(uma + '_VS_' + goha[4]);
                    alert('проиграли');
                    points_computer++
                //     win = true;
                }
                break;
            }
        }
        
    }

    if( points_player  < points_computer ){
        alert('Вы_' + points_player + "_<_" + points_computer + '_Компьютер');
        alert("проиграли");
    }
    else if(points_player  > points_computer){
        alert('Вы_' + points_player + "_>_" + points_computer + '_Компьютер');
        alert("поздравлаем вы победили!")
    }
    else if(points_player  == points_computer){
        alert('Вы_' + points_player + "_=_"  + points_computer + '_Компьютер');
        alert("ничья")
    }
}else if (game == 2){
    let start = confirm('Мы загадываем число от 0 до 100. Вы готвы к игре?')
    if(start == true){
        let number = Math.floor(Math.random() * 10);
        let win = false;
        while(win == false){
            let guess = prompt('Введите чило');
            if(guess < number){  
                alert('Загадонное чиcло побольше!');
            }else if(guess > number){
                alert('Загадонное чиcло поменьше!');
            }else{
                alert('Успех!');
                alert('Было загадано число ' + number);
                win = true;
            }
        }
    }
}
