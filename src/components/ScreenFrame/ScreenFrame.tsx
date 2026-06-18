import type { ReactNode } from "react";
import { useMemo, useRef } from "react";
import { Animated, type StyleProp, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./ScreenFrame.styles";

const TITLE_FADE_DISTANCE                 = 48;
const TITLE_TOP_OFFSET                    = 0;
const CONTENT_TOP_OFFSET                  = 48;
const CONTENT_TOP_OFFSET_WITH_DESCRIPTION = 68;

type ScreenFrameProps = {
    children: ReactNode;
    contentContainerStyle?: StyleProp<ViewStyle>;
    description?: string;
    title: string;
};

export function ScreenFrame({ children, contentContainerStyle, description, title }: ScreenFrameProps) {
    const { top } = useSafeAreaInsets();
    const scrollY = useRef(new Animated.Value(0)).current;
    const contentTopOffset = description ? CONTENT_TOP_OFFSET_WITH_DESCRIPTION : CONTENT_TOP_OFFSET;

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

    const opacity    = scrollY.interpolate({
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
            <Animated.View
                pointerEvents="none"
                style={[
                    styles.header,
                    {
                        opacity,
                        top: top + TITLE_TOP_OFFSET,
                        transform: [{ translateY }],
                    },
                ]}
            >
                <Animated.Text
                    accessibilityRole="header"
                    style={styles.title}
                >
                    {title}
                </Animated.Text>
                {description ? (
                    <Animated.Text style={styles.description}>
                        {description}
                    </Animated.Text>
                ) : null}
            </Animated.View>
            <Animated.ScrollView
                contentContainerStyle={[
                    styles.content,
                    {
                        paddingTop: top + contentTopOffset,
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
