import React, { memo } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationsButtonProps {
    className?: string;
}

export const NotificationsButton = memo(({ className }: NotificationsButtonProps) => (
    <Popover

        direction="bottom left"
        trigger={(
            <Button theme={ThemeButton.CLEAR}>
                <Icon Svg={NotificationIcon} inverted />
            </Button>
        )}
    >
        <NotificationList className={cls.NotificationButton} />
    </Popover>
));
