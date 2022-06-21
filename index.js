let html = `<div> <h1> {{question}} </h1> 
<ul class="selected">
    <li>{{choice1}}</li>
    <li>{{choice2}}</li>
    <li>{{choice3}}</li>
    <li>{{choice4}}</li>
</ul>     
</div>`;

function isOnTag(html, tag, offset) {
  for (let i = 0; i < tag.length; i++) {
    if (html[offset + i] !== tag[i]) {
      return false;
    }
  }
  return true;
}

/**
 * @param {string} html
 * @param {string} tag
 * @param {number} occ
 * @returns {string} return edited html, if occurence is not found, return original html
 */
function randomChoice(html, tag, occ) {
  let occurenceOfTag = 0;

  if (!tag.startsWith('<')) {
    tag = '<' + tag;
  }

  if (!tag.endsWith('>')) {
    tag = tag + '>';
  }

  for (let i = 0; i < html.length; i++) {
    if (isOnTag(html, tag, i) && occurenceOfTag++ === occ) {
      return (
        html.slice(0, i) +
        `<${tag.slice(1, tag.length - 1)} class="selected">` +
        html.slice(i + tag.length)
      );
    }
  }
  return html;
}

console.log(randomChoice(html, 'li', 2));
