import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { CommentCard } from '../CommentICard/CommentCard';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[],
    isLoading?: boolean
}

export const CommentList = ({
    className,
    comments,
    isLoading,
}: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap="32" max className={classNames('', {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            isLoading={isLoading}
                            key={comment.id}
                            className={cls.comment}
                            comment={comment}
                        />
                    ))
                    : <Text title={t('Комментарии отсутствуют')} />

            }
        </VStack>
    );
};
