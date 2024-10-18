let todo =  JSON.parse(localStorage.getItem('todo')) ||[];
        function render() 
        {
            let todo_list='';
            for (let i = 0; i < todo.length; i++) {
                const element = todo[i];
                todo_list += `
                    <div class="todo-item" data-index="${i}" onclick="tick(${i})">
                    <p>${element.name}</p> <p>${element.date}</p>
                    <span>
                    <button class="cross" data-index="${i}"onclick="del(${i})">⛔</button></span>
                    </div>`;
            }
            document.querySelector('.container').innerHTML = todo_list;
        }
        
        function del(index) {
            todo.splice(index, 1);
            render();
            localStorage.setItem('todo', JSON.stringify(todo));
        }
        
        function fun(key) {
            if (key === 'Enter') {
                add();
            }
        }
        function add() {
            const ele = document.querySelector('.list').value;
            const date=document.querySelector('.da').value
            document.querySelector('.list').value = '';
            if(ele==='')
            {
                message();  
            }
            if (ele !== '') {
                todo.push({name:ele,date:date});
                render();
                localStorage.setItem('todo', JSON.stringify(todo));
            }
        }
        console.log(typeof(todo));
        function reset() {
            todo = [];
            localStorage.removeItem('todo');
            render();
        }
        function message()
        {
            setTimeout(function()
            {
                document.querySelector('.alert').innerHTML=``;
            },1000);
            document.querySelector('.alert').innerHTML=`<p class="alert">Enter a valid Name</p>`;
        }
        let clickstates={};
        function tick(index)
        {
            clickstates[index]=!clickstates[index];
            const to=document.querySelector(`.todo-item[data-index="${index}"]`);
            const but=document.querySelector(`.cross[data-index="${index}"]`);
            if(clickstates[index])
            {
                to.classList.add('tick');
                but.classList.add('background-button');
            }
            else
            {
                to.classList.remove('tick');
                but.classList.remove('background-button')
            }
        }