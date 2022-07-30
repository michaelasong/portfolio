/* eslint-disable no-unused-vars */
function OpenBar() {
  const closebtn = document.querySelector('.small-screen');
  closebtn.style.display = 'flex';
}

function CloseBar() {
  const closebtn = document.querySelector('.small-screen');
  closebtn.style.display = 'none';
}

const projects = [
  {
    name: 'Tonic',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias iusto architecto blanditiis evenietimpedit tenetur dolorem, non voluptates atque itaque quaerat praesentium incidunt eligendi nostrum animi harumid commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis blanditiis similique neque illomaiores vel repudiandae odit? Facere error suscipit laborum a deleniti rerum dicta quas est corrupti',
    image: './image/card-1.svg',
    technologies: ['Html', 'Css', 'Javascript'],
  },
  {
    name: 'Multi-Post Stories',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias iusto architecto blanditiis evenietimpedit tenetur dolorem, non voluptates atque itaque quaerat praesentium incidunt eligendi nostrum animi harumid commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis blanditiis similique neque illomaiores vel repudiandae odit? Facere error suscipit laborum a deleniti rerum dicta quas est corrupti',
    image: './image/card-2.svg',
    technologies: ['Html', 'Css', 'Javascript'],
  },
  {
    name: 'Tonic',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias iusto architecto blanditiis evenietimpedit tenetur dolorem, non voluptates atque itaque quaerat praesentium incidunt eligendi nostrum animi harumid commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis blanditiis similique neque illomaiores vel repudiandae odit? Facere error suscipit laborum a deleniti rerum dicta quas est corrupti',
    image: './image/card-3.svg',
    technologies: ['Html', 'Css', 'Javascript'],
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A Phaser3 platform game built as part of the Microverse JavaScript program.',
    image: './image/card-4.svg',
    technologies: ['Html', 'Css', 'Javascript'],
  },
];

function showPopUp(a) {
  // popUp container is created with a class assign
  const popUps = document.createElement('div');
  popUps.id = 'popUps';

  // popUp content is created with the class assign
  const popContent = document.createElement('div');
  popContent.className = 'popContent';

  // poUp heading created
  const popHeading = document.createElement('div');
  popHeading.className = 'popHeading';

  const title = document.createElement('h1');
  const close = document.createElement('h3');

  title.innerText = projects[a].name;
  close.innerText = 'x';

  popHeading.appendChild(title);
  popHeading.appendChild(close);

  close.addEventListener('click', () => {
    const pop = document.getElementById('popUps');
    document.body.removeChild(pop);
  });

  // popUp little Description ----------------------------
  const popDesc = document.createElement('ul');
  popDesc.className = 'popDesc';
  const items1 = ['CANOPY', '• Back End Dev', '• 2015'];

  for (let i = 0; i < items1.length; i += 1) {
    const li = document.createElement('li');
    li.innerText = items1[i];
    popDesc.appendChild(li);
  }

  // pop iMages
  const image = document.createElement('img');
  image.src = projects[a].image;
  image.className = 'popImg';

  // PopDetails
  const popDetails = document.createElement('div');
  popDetails.className = 'popDetails';

  // pop test description
  const detail = document.createElement('p');
  detail.innerText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias iusto architecto blanditiis evenietimpedit tenetur dolorem, non voluptates atque itaque quaerat praesentium incidunt eligendi nostrum animi harumid commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis blanditiis similique neque illomaiores vel repudiandae odit? Facere error suscipit laborum a deleniti rerum dicta quas est corrupti';
  detail.className = 'popDetails';

  const lang = document.createElement('div');
  lang.className = 'lang';

  const langTags = document.createElement('ul');
  langTags.className = 'langTags';
  const items3 = projects[a].technologies;

  for (let i = 0; i < items3.length; i += 1) {
    const li = document.createElement('li');
    li.innerText = items3[i];
    langTags.appendChild(li);
  }

  const popBtns = document.createElement('div');
  popBtns.className = 'popBtns';
  const items4 = ['See Live', 'See Source'];

  for (let i = 0; i < items4.length; i += 1) {
    const li = document.createElement('button');
    li.className = 'seeBtn';
    li.innerText = items4[i];
    popBtns.appendChild(li);
  }

  // sub divs under lang
  popDetails.appendChild(detail);
  popDetails.appendChild(lang);

  lang.appendChild(langTags);
  lang.appendChild(popBtns);

  popUps.appendChild(popContent);
  popContent.appendChild(popHeading);
  popContent.appendChild(popDesc);
  popContent.appendChild(image);
  popContent.appendChild(popDetails);

  document.body.appendChild(popUps);
}

function closePopUp() {
  const pop = document.getElementById('popUps');
  pop.style.display = 'none';
}

// --------------- form validation section ----------------

// eslint-disable-next-line consistent-return
function validateForm() {
  const form = document.forms.form1.mail.value;
  const err = document.getElementsByClassName('error');

  if (form !== form.toLowerCase()) {
    document.getElementById('error').innerHTML += "Email can't contain capital letters";
    return false;
  }
}

// eslint-disable-next-line prefer-const
let formObj = { name: '', email: '', content: '' };

function updateForm() {
  document.getElementById('text-input').addEventListener('input', (e) => {
    formObj.name = e.target.value;
  });

  document.getElementById('mail').addEventListener('input', (e) => {
    formObj.email = e.target.value;
  });

  document.getElementById('msg').addEventListener('input', (e) => {
    formObj.content = e.target.value;
  });

  localStorage.setItem('formObj', JSON.stringify(formObj));
}

function onLoad() {
  // Retrieve the object from storage
  const retrievedObject = JSON.parse(localStorage.getItem('formObj'));
  if (retrievedObject.name) {
    document.getElementById('text-input').value = retrievedObject.name;
    document.getElementById('mail').value = retrievedObject.email;
    document.getElementById('msg').value = retrievedObject.content;
  }
}
