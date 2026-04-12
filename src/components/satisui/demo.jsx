'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import { GlidingCard, GlidingCardContent, GlidingCardItem } from './gliding-card';
import { cn } from '@/lib/utils';

export default function TravelGalleryDemo() {
  return (
    <>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
    `}</style>
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2 ml-6">
          <h2 className="text-xl font-medium tracking-tight text-foreground">
            Korpuslarımız <span className="text-muted-foreground">/ Gəncə</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Hər bir korpusun üzərindən keçərək şəkilə baxın
          </p>
        </div>
        <GlidingCard>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-5">
              <ListItem
                index="I"
                title="Nizami prospekti, 190"
                subtitle="3 nömrəli Peşə Liseyi"
                src="/images/merkez.jpeg"
                caption="I Korpus"
                rotation={-4}
                offset={{ x: 30, y: 40 }}
                isDefault
              />
              <ListItem
                index="II"
                title="Əziz Nəzərov küçəsi, 3A"
                subtitle="1 nömrəli Peşə Məktəbi"
                src="/images/merkez.jpeg"
                caption="II Korpus"
                rotation={8}
                offset={{ x: 40, y: -30 }}
              />
              <ListItem
                index="III"
                title="Nizami prospekti, 44"
                subtitle="2 nömrəli Peşə Məktəbi"
                src="/images/merkez.jpeg"
                caption="III Korpus"
                rotation={-8}
                offset={{ x: 50, y: -110 }}
              />
            </div>
            <div className="relative hidden w-full lg:block perspective-1000">
              <GlidingCardContent />
            </div>
          </div>
        </GlidingCard>
      </div>
    </>
  );
}

function ListItem({ index, title, subtitle, src, caption, rotation, offset, isDefault }) {
  return (
    <GlidingCardItem
      isDefault={isDefault}
      target={<Polaroid src={src} caption={caption} />}
      rotation={rotation}
      offset={offset}
      className="group flex cursor-pointer items-center justify-between py-4 px-2 transition-all rounded-lg"
      activeClassName="pl-4 bg-muted/50"
    ><div className="flex items-center gap-6">
        <span className="font-mono text-muted-foreground group-hover:text-muted-foreground transition-colors">
          {index}
        </span>
        <div className="flex flex-col">
          <span className="text-[15px] font-medium text-foreground tracking-wide">
            {title}
          </span>
          <span className="text-[13px] text-muted-foreground font-normal">
            {subtitle}
          </span>
        </div>
      </div>
      <MapPin className="h-4 w-4 text-primary" />
    </GlidingCardItem>
  );
}

function Polaroid({ src, caption }) {
  return (
    <div className={cn(
      'bg-card text-card-foreground border border-border',
      'p-3 pb-8 w-[260px] transform-gpu',
      'shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)]'
    )}
    ><div className="relative aspect-4/5 w-full overflow-hidden mb-4 bg-muted">
        <div className="absolute inset-0 bg-linear-to-tr from-orange-500/10 to-blue-500/10 mix-blend-overlay z-10" />
        <img src={src} alt={caption}
          className="w-full h-full object-cover contrast-[1.1] brightness-[1.1]"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 z-20" />
      </div>
      <div className="text-center">
        <span
          className="text-[22px] leading-none text-card-foreground/90"
          style={{ fontFamily: 'Caveat, cursive' }}
        >{caption}
        </span>
      </div>
    </div>
  );
}