import { useSwitchChain, useChainId } from 'wagmi'
import { useState, useEffect } from 'react'

export default function SwitchChainButton() {
  const { chains, switchChain } = useSwitchChain()
  const currentChainId = useChainId()
  const [selectedChainId, setSelectedChainId] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (currentChainId) {
      setSelectedChainId(currentChainId)
    } else {
      // Only set Base as default if no chain is connected
      const baseChain = chains.find(chain => chain.name.toLowerCase() === 'base')
      if (baseChain) {
        setSelectedChainId(baseChain.id)
        switchChain({ chainId: baseChain.id })
      }
    }
  }, [chains, switchChain, currentChainId])

  const handleChainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const chainId = Number(event.target.value)
    setSelectedChainId(chainId)
    switchChain({ chainId })
  }

  return (
    <div>
      <select 
        value={selectedChainId} 
        onChange={handleChainChange}
        style={{
          border: '1px solid black',
          borderRadius: '4px',
          padding: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          // color: 'inherit',
          // appearance: 'none',
        }}
      >
        {chains.map((chain) => (
          <option key={chain.id} value={chain.id}>
            {chain.name}
          </option>
        ))}
      </select>
    </div>
  )
}
