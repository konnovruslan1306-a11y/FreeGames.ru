 let b = confirm("Мы закатали камень ножницы бумага дракон рыцарь песчаная буря и полиция  . Попробуйте переиграть нас!. Вы готовы? ");
    let points_computer = 0;
    let points_player = 0;
    for(v = 1; v < 6; v++ ){
        if(b == true){
            let goha = ['камень',"ножницы","бумага" ,'дракон', "рыцарь", "песчаная буря" , "полиция" ]
            let goha2 = goha[Math.floor(Math.random() * goha.length)]
            // let win = false;
            while(goha2 == 'камень'){ //компьютер выбрал камень    
                let uma = prompt("Выбирайте между камень ножницы бумага дракон рыцарь песчаная буря и полиция") 
                if(uma == 'камень'){ //если пользователь выбрал камень
                    alert(uma + '_VS_' + 'камень');
                    alert('ничья'); //то ничья
                }else if(uma == "бумага" || uma == 'дракон'){  //если пользователь выбрал бумагу
                    alert(uma + '_VS_' + 'камень');
                    points_player++
                    alert('поздравлаем вы победили!'); //то он победил
                }else if(uma == "ножницы" || uma == "рыцарь" || uma == "полиция" || uma == "песчаная буря" ){
                    alert(uma + '_VS_' + 'камень');
                    alert('проиграли');
                    points_computer++
                    // win = true;
                }
                break;
            }
            while(goha2 == "ножницы"){
                let uma = prompt("Выбирайте между камень ножницы бумага дракон рыцарь песчаная буря и полиция") 
                if(uma == goha[1]){
                    alert(uma + '_VS_' + goha[1]);
                    alert('ничья');
                }else if(uma == goha[0] || uma == goha[3] || uma == "полиция"){
                    alert(uma + '_VS_' + goha[1]);
                    points_player++
                    alert('поздравлаем вы победили!');
                }else if(uma == goha[2] || uma == goha[4] || uma == "песчаная буря" ){
                    alert(uma + '_VS_' + goha[1]);
                    alert('проиграли');
                    points_computer++
                //     win = true;
                }
                break;
            }
            while(goha2 == goha[2]){
                let uma = prompt("Выбирайте между камень ножницы бумага дракон рыцарь песчаная буря и полиция") 
                if(uma == goha[2]){
                    alert(uma + '_VS_' + goha[2]);
                    alert('ничья');
                }else if(uma == goha[0] || uma == goha[6] || uma == goha[5]){
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
                let uma = prompt("Выбирайте между камень ножницы бумага дракон рыцарь песчаная буря и полиция") 
                if(uma == goha[3]){
                    alert(uma + '_VS_' + goha[3]);
                    alert('ничья');
                }else if(uma == goha[4] || uma == goha[1] || uma == goha[5] ){
                    alert(uma + '_VS_' + goha[3]);
                    points_player++
                    alert('поздравлаем вы победили!');
                }else if(uma == goha[2] || uma == goha[0] || uma == goha[6]){
                    alert(uma + '_VS_' + goha[3]);
                    alert('проиграли');
                    points_computer++
                //     win = true;
                }
                break;

            }
            while(goha2 == goha[4]){
                let uma = prompt("Выбирайте между камень ножницы бумага дракон рыцарь песчаная буря и полиция") 
                if(uma == goha[4]){
                    alert(uma + '_VS_' + goha[4]);
                    alert('ничья');
                }else if(uma == goha[0] || uma == goha[1] || uma == goha[6]){
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
            while(goha2 == goha[6]){
                let uma = prompt("Выбирайте между камень ножницы бумага дракон рыцарь песчаная буря и полиция") 
                if(uma == goha[6]){
                    alert(uma + '_VS_' + goha[6]);
                    alert('ничья');
                }else if(uma == goha[3] || uma == goha[2] || uma == goha[1]){
                    alert(uma + '_VS_' + goha[6]);
                    points_player++
                    alert('поздравлаем вы победили!');
                }else if(uma == goha[0] || uma == goha[4] || uma == goha[5]){
                    alert(uma + '_VS_' + goha[6]);
                    alert('проиграли');
                    points_computer++
                //     win = true;
                }
                break;
                            }
            while(goha2 == goha[5]){
                let uma = prompt("Выбирайте между камень ножницы бумага дракон рыцарь песчаная буря и полиция") 
                if(uma == goha[5]){
                    alert(uma + '_VS_' + goha[5]);
                    alert('ничья');
                }else if(uma == goha[2] || uma == goha[4] || uma == goha[3]){
                    alert(uma + '_VS_' + goha[5]);
                    points_player++
                    alert('поздравлаем вы победили!');
                }else if(uma == goha[0] || uma == goha[1] || uma == goha[6]){
                    alert(uma + '_VS_' + goha[5]);
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

