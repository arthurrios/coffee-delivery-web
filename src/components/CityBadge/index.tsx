import { MapPin } from '@phosphor-icons/react'
import { CityBadgeContainer, Text } from './styles'
import { useTheme } from 'styled-components'

export function CityBadge() {
  const { COLORS } = useTheme()

  return (
    <CityBadgeContainer>
      <MapPin size={22} weight="fill" color={COLORS.PURPLE} />
      <Text>Brasília, DF</Text>
    </CityBadgeContainer>
  )
}
