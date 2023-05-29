interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}
export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="w-full ">
      <thead className="font-bold text-2xl">
        <tr>
          <td>Name</td>
          <td>Value</td>
          {hasRemValue && <td>Pixel</td>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
