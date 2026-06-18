import type { ReactNode } from "react";
import { useMemo, useRef } from "react";
import { Animated, type StyleProp, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./ScreenFrame.styles";

const TITLE_FADE_DISTANCE = 48;
const TITLE_TOP_OFFSET    = 6;
const CONTENT_TOP_OFFSET  = 84;

type ScreenFrameProps = {
    children: ReactNode;
    contentContainerStyle?: StyleProp<ViewStyle>;
    title: string;
};

export function ScreenFrame({ children, contentContainerStyle, title }: ScreenFrameProps) {
    const { top } = useSafeAreaInsets();
    const scrollY = useRef(new Animated.Value(0)).current;

    const onScroll = useMemo(
        () =>
            Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset: {
                                y: scrollY,
                            },
                        },
                    },
                ],
                {
                    useNativeDriver: false,
                },
            ),
        [scrollY],
    );

    const opacity = scrollY.interpolate({
        inputRange:  [0, TITLE_FADE_DISTANCE],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });
    const translateY = scrollY.interpolate({
        inputRange:  [0, TITLE_FADE_DISTANCE],
        outputRange: [0, -14],
        extrapolate: "clamp",
    });

    return (
        <Animated.View style={styles.container}>
            <Animated.Text
                accessibilityRole="header"
                pointerEvents="none"
                style={[
                    styles.title,
                    {
                        opacity,
                        top: top + TITLE_TOP_OFFSET,
                        transform: [{ translateY }],
                    },
                ]}
            >
                {title}
            </Animated.Text>
            <Animated.ScrollView
                contentContainerStyle={[
                    styles.content,
                    {
                        paddingTop: top + CONTENT_TOP_OFFSET,
                    },
                    contentContainerStyle,
                ]}
                onScroll={onScroll}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                {children}
            </Animated.ScrollView>
        </Animated.View>
    );
}
