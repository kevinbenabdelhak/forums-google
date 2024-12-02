let parentDiv = document.querySelector('.crJ18e');
let newDiv = document.createElement('div');
newDiv.setAttribute('data-hveid', 'CAsQAA');
newDiv.setAttribute('data-ved', '2ahUKEwjHu7DB5YGFAxX0WEEAHcSLDmwQtoAJKAB6BAgLEAA');
let newLink = document.createElement('a');
newLink.href = window.location.href + '&udm=18';
newLink.classList.add('YmvwI', 'LatpMc', 'nPDzT', 'T3FoJb');
newLink.textContent = 'Forums';
newLink.style.top = '0px';
newLink.style.position = 'relative';
newLink.style.color = '#70757a';
newDiv.appendChild(newLink);

   if (!window.location.href.includes('&udm=18')) {
       let targetDiv = document.querySelector('.crJ18e > div[role="list"]');
       if (targetDiv) {
           if (![...targetDiv.children].some(child => child.textContent.trim() === 'Forums')) {
               let children = targetDiv.children;
               if (children.length > 1) {
                   targetDiv.insertBefore(newDiv, children[children.length - 1]);
               } else {          
                   targetDiv.appendChild(newDiv);
               }
           }
       } else {     
           if (parentDiv.children.length >= 2) {
               parentDiv.insertBefore(newDiv, parentDiv.children[1]);
           } else {
               parentDiv.appendChild(newDiv);
           }
       }
   }