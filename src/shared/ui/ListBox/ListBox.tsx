import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/lib/Stack';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string,
    content: ReactNode,
    disabled?: boolean
}

type dropDownDirection = 'top' | 'bottom'

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean
    direction?: dropDownDirection
    label?: string
}

const mapDirectionClass: Record<dropDownDirection, string> = {
    bottom: cls.bottom,
    top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        defaultValue,
        value,
        onChange,
        readonly,
        direction = 'bottom',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >

                <HListBox.Button
                    disabled={readonly}
                    className={cls.trigger}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}

                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        // eslint-disable-next-line max-len
                        <HListBox.Option
                            disabled={item.disabled}
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled }, [])}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}

                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
