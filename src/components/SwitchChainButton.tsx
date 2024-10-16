import { useSwitchChain } from 'wagmi'
import { useState, useEffect } from 'react'

export default function SwitchChainButton() {
  const { chains, switchChain } = useSwitchChain()
  const [selectedChainId, setSelectedChainId] = useState<number | undefined>(undefined)

  useEffect(() => {
    // Find Base chain and set it as default
    const baseChain = chains.find(chain => chain.name.toLowerCase() === 'base')
    if (baseChain) {
      setSelectedChainId(baseChain.id)
      switchChain({ chainId: baseChain.id })
    }
  }, [chains, switchChain])

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
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '8px',
          fontSize: '16px',
          cursor: 'pointer'
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
