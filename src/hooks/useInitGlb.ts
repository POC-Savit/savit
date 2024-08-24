import { useEffect } from "react"

interface useInitGlbProps {}

const useInitGlb = (props: useInitGlbProps) => {
  const setBaseBodyUrl = useSetAtom

  useEffect(() => {
    const a = getUrl'models/BaseBody.glb'
  })

}

export default useInitGlb
