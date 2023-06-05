import { Calendar } from '@/components/Calendar';
import { Card } from '@/components/Card';

export function CalendarStep() {
  return (
    <Card className="relative mx-auto mb-0 mt-6 grid w-[540px] grid-cols-1 p-0">
      <Calendar />
    </Card>
  );
}
