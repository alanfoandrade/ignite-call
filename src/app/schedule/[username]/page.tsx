import 'server-only';

import { Avatar } from '@/components/Avatar';
import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import { prisma } from '@/lib/prisma';

import { ScheduleForm } from './components/ScheduleForm';

export const revalidate = 86400; // 1 day

export const metadata = {
  title: 'Agendar horário ',
};

interface ScheduleProps {
  params: {
    username: string | string[];
  };
}

// export async function generateMetadata({ params }: ScheduleProps) {
//   const user = await prisma.user.findFirst({
//     where: {
//       username: String(params.username),
//     },
//   });

//   return {
//     title: `Agendar com ${user?.name}`,
//   };
// }

export default async function Schedule({ params }: ScheduleProps) {
  const user = await prisma.user.findFirst({
    where: {
      username: String(params.username),
    },
  });

  return (
    <div className="mx-auto mb-4 mt-20 max-w-[852px] px-4">
      {!!user && (
        <>
          <div className="flex flex-col items-center">
            <Avatar src={user.avatar_url || ''} alt={user.name} />

            <Heading className="mt-2">{user.name}</Heading>

            <Text className="text-gray-200">{user.bio}</Text>
          </div>

          <ScheduleForm />
        </>
      )}
    </div>
  );
}
