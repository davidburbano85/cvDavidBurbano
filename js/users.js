
import { crearusuarios, onSnapshot, collection, db,  eliminarUsuarios } from './firebase.js';



//firebase
const usuarios = document.getElementById('usuarios');
const form= document.getElementById('form');
const cbox1 =document.getElementById("cbox1");
const send = document.getElementById("send");
const msj= document.getElementById("msj");

window.addEventListener('DOMContentLoaded', async () => {
    onSnapshot(collection(db, "usuariosdatabase"), (querySnapshot) => {
            
        let html = ''
        querySnapshot.forEach(doc => {
            const usuario = doc.data()
            html += `
            <div>
                <p>${usuario.nameinput}</p>
                <p>${usuario.lastnameinput}</p>
                <p>${usuario.mailinput}</p>
                <button class=" btn btn-danger" data-id="${doc.id}">delete</button>
            </div>
       
            `
        });
        usuarios.innerHTML = html
    


        
   
        // eliminar usuarios
        const eliminarUsuario = usuarios.querySelectorAll('.btn-danger')
        eliminarUsuario.forEach(btn => {
            btn.addEventListener("click", ({ target: { dataset } }) => {
                eliminarUsuarios(dataset.id)

        });

    });

});


});
send.addEventListener("click", (e)=>{
    e.preventDefault
    const nameinput=form["nameinput"]
    const lastnameinput =form["lastnameinput"]
    const passinput =form["passinput"]
    const repeatpassinput=form["repeatpassinput"]
    const mailinput=form["mailinput"]
    const idinput= form["idinput"]
    crearusuarios(nameinput.value, lastnameinput.value, passinput.value, repeatpassinput.value, mailinput.value, idinput.value)
    
    form.reset()
});


   
  send.addEventListener("click", none );
  function none(){
  msj.style.display = "none"
  }