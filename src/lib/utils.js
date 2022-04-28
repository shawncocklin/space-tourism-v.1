import {onMount} from 'svelte'

// TODO: test if removing reference to current will break the logic

export function setBackground(backgroundPath) {
  onMount(()=> {
    let current = document.body.style['background-image']
    console.log(current)
    document.body.style['background-image'] = backgroundPath
    return () => document.body.style['background-image'] = current
  })
}

// module.exports = {setBackground}