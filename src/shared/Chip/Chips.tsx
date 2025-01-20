import { Chip, SvgIconProps, SxProps, Theme } from "@mui/material"

interface ChipsProps {
  icon?: React.ReactElement<SvgIconProps>
  label: string
  sx?: SxProps<Theme>
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

function Chips({ icon, label, sx, onClick }: ChipsProps) {
  return <Chip icon={icon} label={label} sx={sx} onClick={onClick} />
}

export default Chips
