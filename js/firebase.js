  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getFirestore, doc, collection, getDocs, addDoc, onSnapshot, deleteDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
  // Your web app's Firebase configuration
 
 
  const firebaseConfig = {
    apiKey: "AIzaSyBQLzMfIwSztKYWO04Ea_KCp45cmqNYQo4",
    authDomain: "usuarionew1085.firebaseapp.com",
    projectId: "usuarionew1085",
    storageBucket: "usuarionew1085.appspot.com",
    messagingSenderId: "219095641977",
    appId: "1:219095641977:web:4442334c7f6ef7764649a8"
  };

  // Initialize Firebase
  export  const app = initializeApp(firebaseConfig);

  export  const db =getFirestore();
  
  // crear usuarios firebase

export const crearusuarios=(nameinput, lastnameinput, passinput, repeatpassinput, mailinput, idinput)=>

  addDoc(collection(db, "usuariosdatabase"), {nameinput, lastnameinput, passinput, repeatpassinput, mailinput, idinput});


//leer usuarios firebase una vez
// export const obtenerUsuarios =() => 
//   getDocs(collection(db, "usuariosdatabase"));
  


//para constante lectura de firebase

export const lecturaConstante=()=>console.log('lecturaConstante')

export {
  onSnapshot,
  collection,
  
}

export const eliminarUsuarios= (id)=> deleteDoc(doc(db, "usuariosdatabase", id))

