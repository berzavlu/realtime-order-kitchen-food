function agregarPedido() {
  firebase
    .database()
    .ref()
    .push(datanew)
    .then(() => {
      let htmlCard = '<div class="contentCard">'
      htmlCard += '<div class="contentCard__col contentCard__col--img">'
      htmlCard +=
        '<img src="https://rosas-ami.com/admin/files/products/ee51f1f38490f873bda03ed741f05895_thumb.jpg" />'
      htmlCard += '</div>'
      htmlCard += '<div class="contentCard__col contentCard__col--grow">'
      htmlCard += `<div>Pedido: ARROZ A LA CUBANA</div>`
      htmlCard += `<div>Adicionales: Sin adicionales</div>`
      htmlCard += '<div>Nro Mesa: 2</div>'
      htmlCard += '<div>Hora Pedido: 4:30pm</div>'
      htmlCard += '</div>'
      htmlCard += '</div>'
      kanban3.addElement('_todo', { title: htmlCard })
    })
    .catch((error) => {
      console.log('Remove failed: ' + error.message)
    })
}
function removerPedido() {
  const idChild = '-Ll7suU0-okho0si7Uxc'
  firebase
    .database()
    .ref()
    .child(idChild)
    .remove()
    .then(() => {
      console.log('Remove succeeded.')
    })
    .catch((error) => {
      console.log('Remove failed: ' + error.message)
    })
}
function updatePedido(idChild, estado) {
  let estadoPedido = ''
  switch (estado) {
    case '_todo':
      estadoPedido = '1'
    case '_working':
      estadoPedido = '2'
    case '_done':
      estadoPedido = '3'
  }
  let datanewUpdate = {
    pedido: 'papas fritas con blah blah',
    adicionales: '2222 huevos fritos',
    fecha: '23/08/19',
    hora: '04:33pm',
    estado: estadoPedido,
    nroMesa: '1',
  }
  firebase
    .database()
    .ref()
    .child(idChild)
    .update(datanewUpdate)
    .then(() => {
      console.log('updated succeeded.')
    })
    .catch((error) => {
      console.log('updated failed: ' + error.message)
    })
}
function eliminarPedidos() {
  firebase
    .database()
    .ref()
    .remove()
    .then(() => {
      console.log('Removed all succeeded.')
    })
    .catch((error) => {
      console.log('Removed failed: ' + error.message)
    })
}
