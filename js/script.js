/*
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa
*/

const app = Vue.createApp({
    data() {
        return{
            listTitle: 'Lista delle cose da fare',
            pushToList: '',
            error: false,
            todo: [
                {
                text: 'fare esercizio boolean',
                done: false,
            }, 
            
            {
                text: 'andare in palestra',
                done: false, 
            },

            {
                text: 'innaffiare le piante',
                done: false,
            },

            {
                text: 'dare da mangiare al gatto',
                done: false,
            }],
        };
    },

    methods: {
        addtolist(){
            let cleanToDo = this.pushToList.trim();
            if(cleanToDo >= 5){
                this.todo.unshift(this.cleanToDo);
                this.pushToList = '';
                this.error = false;
            } else {
                this.error = true;
            }
        },

        deleteTask(i){
            this.todo.splice(i, 1);
        }
    },
});

app.mount('.todolist')