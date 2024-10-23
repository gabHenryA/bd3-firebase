/* RENDERIZAÇÃO DA LISTA DE DADOS */
const listbook = document.querySelector('#book-list')

function renderList(doc){
    let li = document.createElement('li')
    let autor = document.createElement('span')
    let titulo = document.createElement('span')
    let excluir = document.createElement('div');

    li.setAttribute("data-id", doc.id),
    autor.textContent = doc.autor
    titulo.textContent = doc.titulo

    li.appendChild(titulo)
    li.appendChild(autor)

    listbook.appendChild(li)
}

/* LISTA DE DADOS DA COLEÇÃO DO FIREBASE */
db.collection('libri-collection').get() //deve colocar o mesmo nome no firebase
    .then((snapshot)=> {
        // console.log(snapshot.docs)
        snapshot.docs.forEach(
            doc=>{
                console.log(doc.data())
                renderList(doc.data())
            }
        )
    })

    /* INSERÇÃO DE DADOS */
    const form = document.querySelector('#add-book-form')

    form.addEventListener('submit', (event)=> {
        event.preventDefault()
        // alert("Formulário funcionando!")
        db.collection('libri-collection').add({
            autor: form.autor.value,
            titulo: form.titulo.value
        }).then(()=>{
            form.autor.value = '';
            form.titulo.value = '';
            window.location.reload();
        });
    })