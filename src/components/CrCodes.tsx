import { Highlight, themes } from 'prism-react-renderer'

interface Props {
  codeBlock: string
}
 
const CrCodes = ({ codeBlock }: Props) => {
  return (
    <Highlight theme={themes.oneDark} code={codeBlock} language='tsx'>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{
            ...style,
            textAlign: 'left',
            padding: '20px',
            borderRadius: '5px',
            overflow: 'auto',
            fontSize: '16px',            lineHeight: '1.5',
            fontFamily: 'cascadia-code, monospace',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CrCodes
