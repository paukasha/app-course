import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '@/shared/ui/AppImage';

import UserIcon from '@/shared/assets/icons/user.svg';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number,
    alt?: string,
    fallbackInverted?: boolean
}

export const Avatar = ({
    className, src, size = 100, alt, fallbackInverted,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const errorFallBack = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;
    const fallBack = <Skeleton width={size} height={size} border="50%" />;

    return (
        <AppImage
            fallback={fallBack}
            errorFallback={errorFallBack}
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
            style={styles}
        />
    );
};
