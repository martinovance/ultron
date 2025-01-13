/* eslint-disable prettier/prettier */
import { Chip, SxProps, Theme } from "@mui/material"

interface ChipsProps {
  label: string
  sx?: SxProps<Theme>
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

function Chips({ label, sx, onClick }: ChipsProps) {
  return <Chip label={label} sx={sx} onClick={onClick} />
}

export default Chips
