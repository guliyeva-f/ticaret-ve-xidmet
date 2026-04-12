import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Clock, Phone } from 'lucide-react'
import TravelGalleryDemo from './satisui/demo';
import { Badge } from './ui/badge';

export default function ContactSection() {
  return (
    <section className='lg:pb-16 lg:pt-0 lg:px-0 sm:p-16 p-8 flex flex-col gap-10'>
      <div className="flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-200 ease-in-out fill-mode-both">
        <Badge variant="outline" className="px-3 py-1 text-sm h-auto">
          Əlaqə
        </Badge>
        <h1 className="text-3xl md:text-4xl text-center font-semibold tracking-tight">
          Sualların var? Bizə müraciət et!
        </h1>
      </div>
      <div className='grid gap-6 lg:grid-cols-2 lg:items-stretch'>
        <Card className={'px-3'}>
          <TravelGalleryDemo />
        </Card>

        <div className='flex flex-col gap-6'>
          <Card className='flex-1 gap-3 py-6'>
            <CardHeader className='px-6'>
              <CardTitle className='text-lg text-balance'>Əlaqə Məlumatları</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4 px-6'>
              <div className='flex items-center gap-3'>
                <div className='bg-primary/10 flex size-8 items-center justify-center rounded-full'>
                  <Phone className='text-primary size-4' />
                </div>
                <div>
                  <h4 className='text-sm font-medium'>Telefon</h4>
                  <p className='text-muted-foreground text-xs'>+994 XX XXX XX XX</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='bg-primary/10 flex size-8 items-center justify-center rounded-full'>
                  <Mail className='text-primary size-4' />
                </div>
                <div>
                  <h4 className='text-sm font-medium'>E-poçt</h4>
                  <p className='text-muted-foreground text-xs'>info@mərkəz.edu.az</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='gap-3 py-6'>
            <CardHeader className='px-6'>
              <CardTitle className='text-lg text-balance'>İş Saatları</CardTitle>
            </CardHeader>
            <CardContent className='px-6'>
              <div className='flex flex-col gap-2 text-sm'>
                <div className='flex justify-between'>
                  <span>Bazar ertəsi — Cümə</span>
                  <span className='text-muted-foreground'>09:00 — 18:00</span>
                </div>
                <div className='flex justify-between'>
                  <span>Şənbə</span>
                  <span className='text-muted-foreground'>09:00 — 13:00</span>
                </div>
                <div className='flex justify-between'>
                  <span>Bazar</span>
                  <span className='text-muted-foreground'>İstirahət günü</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}