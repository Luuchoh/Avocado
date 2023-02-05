const path = 'https://avocado-commerce-5npd6ofam-luuchoh.vercel.app/api/avo'

const getAll = async (): Promise<TProduct[]> => {
  try {
  const res = await fetch(path)
  const { data }: TAPIAvoResponse = await res.json()
  return data
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

const YesOrNotResponse = async () => {
  const res = await fetch('http://localhost:3000/api/yes-or-not')
  const { data }: YesOrNoApiResponse = await res.json()

  return data
}

export { getAll, getOne, YesOrNotResponse }
