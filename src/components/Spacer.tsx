// components/Spacer.tsx

interface SpacerProps {
    height: number
  }
  
export default function Spacer({ height }: SpacerProps) {
    return <div style={{ height: `${height}px` }} />
}