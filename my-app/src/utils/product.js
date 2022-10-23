export const reRender = async (element, content) => {
       document.getElementById(element).innerHTML = await content.render();
       if(content.afterRender) {
              content.afterRender();
       }
}