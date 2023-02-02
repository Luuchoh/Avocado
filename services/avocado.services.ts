const path = '/api/avo'

const getAll = async (): Promise<TProduct[]> => {
  try {
  const res = await fetch(path)
  const data = await res.json()
  return data.data
  } catch (error: any) {
    throw new Error(error)
  }
}

const getOne = async (id: string): Promise<TProduct> => {
  try {
    const response = await fetch(`${path}/${id}`)
    const avocado = await response.json()
    return avocado
  } catch (error: any) {
    throw new Error(error)
  }
}

export { getAll, getOne }
