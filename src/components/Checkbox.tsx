import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import colors from 'tailwindcss/colors'
import Animated, { RollInLeft, RollOutLeft} from 'react-native-reanimated'

interface CheckboxProps extends TouchableOpacityProps {
  title: string
  checked?: boolean
}

export function Checkbox({ checked = false, title , ...rest}: CheckboxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {checked ? (
        <Animated.View 
          className="h-8 w-8 bg-violet-500 rounded-lg items-center justify-center"
          entering={RollInLeft}
          exiting={RollOutLeft}
          >
          <Feather name="check" size={20} color={colors.white} />
        </Animated.View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg" />
      )}

      <Text className="text-white text-base ml-3 font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}
