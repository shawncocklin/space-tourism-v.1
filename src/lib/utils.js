import {onMount} from 'svelte'


export function setBackground(backgroundPath) {
  onMount(()=> {
    document.body.style['background-image'] = backgroundPath
  })
}
