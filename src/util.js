export const normalizeStr = (str) =>{
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace('đ','d')
}

