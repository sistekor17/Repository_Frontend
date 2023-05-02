//Al importarce la interfaz se le coloca el tipo a la lista TASKS
import { Task } from "./interface-tasks"
export const TASKS:Task[] = [
    {
        id: 1,
        text : "Terminar la aplicacion Tasks de angular ",
        day : "10 de abril",
        reminder: true
    },
    {
        id: 2,
        text : "Terminar la api del backend ",
        day : "11 de abril",
        reminder: true
    },
    {
        id: 3, 
        text : "Conectar el backend con el frontend ",
        day : "12 de abril",
        reminder: true
    },
    {
        id: 4,
        text : "Hacer la autenticacion del usuario ",
        day : "13 de abril",
        reminder: false
    }
]