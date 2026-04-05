const minecraftLever = document.querySelector('#lever');
const redstoneLampOn = document.querySelector('#lamp-on');
const redstoneLampOff = document.querySelector('#lamp-off');

minecraftLever.addEventListener('click', function(){
  minecraftLever.classList.toggle('active');
  redstoneLampOn.classList.toggle('active');
  redstoneLampOff.classList.toggle('active');
})
