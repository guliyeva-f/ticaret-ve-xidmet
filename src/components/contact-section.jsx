import { Card, CardContent } from '@/components/ui/card'
import { Mail, Clock, Phone } from 'lucide-react'
import CampusGallery from './campus';
import { Badge } from './ui/badge';
import Link from 'next/link';

const phones = [
  '+994 (22) 254-76-78',
  '+994 (22) 257-02-12',
  '+994 (22) 267-01-60',
];

const hours = [
  { day: 'Həftə içi', time: '09:00 — 18:00', off: false },
  { day: 'Şənbə', time: '09:00 — 13:00', off: false },
  { day: 'Bazar', time: 'İstirahət', off: true },
];

export default function ContactSection() {
  return (
    <section className='lg:pb-16 lg:pt-0 lg:px-0 sm:p-16 p-8 flex flex-col gap-10'>
      <div className="flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-200 ease-in-out fill-mode-both">
        <Badge variant="outline" className="px-3 py-1 text-sm h-auto">
          Əlaqə
        </Badge>
        <h2 className="text-3xl md:text-4xl text-center font-semibold tracking-tight">
          Sualların var? Bizi tap!
        </h2>
      </div>
      <div className='grid gap-6 lg:grid-cols-2 lg:items-stretch'>
        <Card className='px-3'>
          <CampusGallery />
        </Card>
        <Card className='flex flex-col justify-evenly md:flex-row lg:flex-col xl:flex-row'>
          <CardContent className='flex flex-col w-full gap-6 justify-center'>
            <p className='font-medium uppercase tracking-widest'>
              Əlaqə Məlumatları
            </p>
            <div className='flex gap-4'>
              <div className='bg-primary/10 flex shrink-0 items-center justify-center rounded-full px-1.5'>
                <Phone className='size-5' />
              </div>
              <div className='flex flex-col gap-3'>
                <span className='font-bold'>Telefon</span>
                {phones.map((p) => (
                  <Link
                    key={p}
                    href={`tel:${p.replace(/\D/g, '')}`}
                    className='text-muted-foreground font-medium'
                  >{p}</Link>
                ))}
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='bg-primary/10 flex px-1.5 shrink-0 items-center justify-center rounded-full'>
                <Mail className='size-5' />
              </div>
              <div className='flex flex-col gap-1.5'>
                <span className='text-sm font-bold'>E-poçt</span>
                <Link
                  href='mailto:ticaretgence@vet.edu.az'
                  className='text-muted-foreground text-sm font-medium'
                >ticaretgence@vet.edu.az
                </Link>
              </div>
            </div>
          </CardContent>
          <div className='mx-3 border-t md:border-t-0 md:border-l md:mx-0 md:my-3' />
          <CardContent className='flex flex-col w-full gap-4 justify-center'>
            <div className='flex items-center gap-2'>
              <Clock className='size-5' />
              <p className='font-medium uppercase tracking-widest'>
                İş Saatları
              </p>
            </div>
            <div className='flex flex-col divide-y gap-4'>
              {hours.map(({ day, time, off }) => (
                <div key={day} className='flex justify-between items-center'>
                  <span className={off ? 'text-muted-foreground font-medium' : 'font-medium'}>{day}:</span>
                  <span className={off ? 'text-muted-foreground/90 text-sm italic' : ''}>
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}