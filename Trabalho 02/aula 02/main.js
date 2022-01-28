const cena = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100); //nossos olhos

const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight); //tamanho da tela

document.body.appendChild(renderizador.domElement);


//adicionando um cubo
const geometria = new THREE.BoxGeometry;//forma
const material = new THREE.MeshBasicMaterial({color: 0x00ff00}); //tipo do material = cor
const cubo = new THREE.Mesh(geometria, material); //criando o cubo - sua gemotria e material

cena.add(cubo); //cubo adicionado a cena no ponto (0,0,0)

camera.position.z = 5; //posição da camera mais afastada


//Transformações
//rotação - em graus
  //cubo.rotation.x = 60;
  //cubo.rotation.y = 50;
  //cubo.rotation.z = 80;


//escala - em unidades
  //cubo.scale.x = 2;
  //cubo.scale.y = 4;
  //cubo.scale.z = 6;

//posicao
  //cubo.position.x = 2; //lados
  //cubo.position.y = 2; //cima e baixo
  //cubo.position.z = 3; //longe e perto

//função completa
  //cubo.position.set(-2,2,-3);
  //cubo.rotation.set(60,35,45);
  //cubo.scale.set(2,3,3);

//animação
function animacao(){
  requestAnimationFrame(animacao);
  
  cubo.rotation.z += 0.01;
  cubo.scale.x += 0.1;
  cubo.position.z -= 0.1;
  
  renderizador.render(cena, camera); // renderizador para rodar a cena
}

animacao();