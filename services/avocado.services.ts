const path = 'https://avocado-commerce.vercel.app/api'

const getAll = async (): Promise<TProduct[]> => {
  try {
  const res = await fetch(`${path}/avo`)
  const { data }: TAPIAvoResponse = await res.json()
  return data
  } catch (error: any) {
    throw new Error(error)
  }
}

const getOne = async (id: string): Promise<TProduct> => {
  try {
    const response = await fetch(`${path}/avo/${id}`)
    const data: TProduct = await response.json()
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

const YesOrNotResponse = async () => {
  try {
    const res = await fetch(`${path}/yes-or-not`)
    const { data }: YesOrNoApiResponse = await res.json()
    console.log("🚀 ~ file: avocado.services.ts:27 ~ YesOrNotResponse ~ data", data)
    
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

export { getAll, getOne, YesOrNotResponse }
