import React, { memo, useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';

interface NotificationsButtonProps {
    className?: string;
}

export const NotificationsButton = memo(
    ({ className }: NotificationsButtonProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const onOpenDrawer = useCallback(() => {
            setIsOpen(true);
        }, []);

        const onCloseDrawer = useCallback(() => {
            setIsOpen(false);
        }, []);

        const trigger = (
            (
                <Button onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )
        );

        return (
            <div>
                <BrowserView>
                    <Popover
                        direction="bottom left"
                        trigger={trigger}
                    >

                        <NotificationList className={cls.NotificationButton} />

                    </Popover>
                </BrowserView>

                <MobileView>
                    {trigger}
                    <AnimationProvider>
                        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationList />
                        </Drawer>
                    </AnimationProvider>
                </MobileView>
            </div>
        );
    },
);
